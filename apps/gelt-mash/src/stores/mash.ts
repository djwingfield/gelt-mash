import { defineStore } from 'pinia';
import { generateRandomMashData } from './mash-randomiser';
import { createCategory, createOption, MashCategory } from './types';

interface MashState {
    categories: MashCategory[];
    step: number;
    maxCategories: number;
    minCategories: number;
    error?: string;
    mashing: boolean;
    mashed: boolean;
}

const MASH_CATEGORY_NAME = 'MASH';

const defaultMashCategory = () =>
    createCategory(MASH_CATEGORY_NAME, ['Mansion', 'Apartment', 'Shack', 'House']);

const initialMashState: MashState = {
    categories: [defaultMashCategory()],
    step: 0,
    maxCategories: 10,
    minCategories: 3,
    mashing: false,
    mashed: false,
};

export const useMashStore = defineStore('counter', {
    state: () => initialMashState,
    getters: {
        mashCategory: (state) => state.categories.find(({ name }) => name === MASH_CATEGORY_NAME),
        nonMashCategories: (state) => state.categories.filter(({ name }) => name !== MASH_CATEGORY_NAME),
        options: (state) => state.categories.flatMap((category) => category.options),
        canAddMoreCategories: (state) => state.categories.length < state.maxCategories,
        canAddMoreOptions: (state) => (category: MashCategory) =>
            category.options.length < state.maxCategories,
    },
    actions: {
        addCategory(name: string) {
            if (!this.canAddMoreCategories) {
                this.error = `Cannot have more than ${this.maxCategories} categories`;
                return;
            }

            this.categories.push(createCategory(name));
        },
        removeCategory(categoryId: number) {
            this.categories = this.categories.filter((category) => category.id !== categoryId);
        },
        removeOption(categoryId: number, optionId: number) {
            const category = this.categories.find((category) => category.id === categoryId);

            if (category) {
                category.options = category.options.filter((option) => option.id !== optionId);
            }
        },
        addOption(categoryId: number, name: string) {
            const category = this.categories.find((category) => category.id === categoryId);

            if (category) {
                category.options.push(createOption(name));
            }
        },
        reset() {
            this.categories = [defaultMashCategory()];
            this.mashed = false;
        },
        randomize() {
            this.categories = generateRandomMashData({
                categories: this.categories,
                minCategoryCount: this.minCategories,
                maxCategoryCount: this.maxCategories,
            });
        },
        async runGame(count: number, timeout: number = 300) {
            this.mashing = true;
            this.categories = [
                ...this.categories.map((category) => ({
                    ...category,
                    options: category.options.map((option) => ({ ...option, removed: false })),
                })),
            ];
            const getRemovableOptions = () =>
                this.categories
                    .filter((category) => category.options.filter((option) => !option.removed).length > 1)
                    .flatMap((category) => category.options.filter((option) => !option.removed));

            let removeIndex = count - 1;
            let removableOptions = getRemovableOptions();

            while (removableOptions.length) {
                removeIndex = removeIndex % removableOptions.length;
                removableOptions[removeIndex].removed = true;

                await new Promise((resolve) => setTimeout(resolve, timeout));

                this.categories = [...this.categories];
                removableOptions = getRemovableOptions();
                removeIndex += count - 1;
            }

            this.mashed = true;
            this.mashing = false;
        },
    },
});
