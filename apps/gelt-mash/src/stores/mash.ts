import { defineStore } from 'pinia';

interface MashOption {
    id: number;
    name: string;
    removed: boolean;
}

interface MashCategory {
    id: number;
    name: string;
    options: MashOption[];
}

interface MashState {
    categories: MashCategory[];
    step: number;
    maxCategories: number;
    minCategories: number;
    error?: string;
}

const initialMashState: MashState = {
    categories: [],
    step: 0,
    maxCategories: 10,
    minCategories: 3,
};

let categoryId = 0;
let optionId = 0;

export const useMashStore = defineStore('counter', {
    state: () => initialMashState,
    getters: {
        options: (state) => state.categories.flatMap((category) => category.options),
        canAddMoreCategories: (state) => state.categories.length < state.maxCategories,
    },
    actions: {
        addCategory(name: string) {
            if (!this.canAddMoreCategories) {
                this.error = `Cannot have more than ${this.maxCategories} categories`;
                return;
            }

            this.categories.push({ id: categoryId++, name, options: [] });
        },
        addOption(categoryName: string, name: string) {
            const category = this.categories.find((category) => category.name === categoryName);

            if (category) {
                category.options.push({ id: optionId++, name, removed: false });
            }
        },
    },
});
