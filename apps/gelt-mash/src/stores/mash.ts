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
}

const initialMashState: MashState = {
    categories: [],
    step: 0,
};

let categoryId = 0;
let optionId = 0;

export const useMashStore = defineStore('counter', {
    state: () => initialMashState,
    getters: {
        options: (state) => state.categories.flatMap((category) => category.options),
    },
    actions: {
        addCategory(name: string) {
            const category = { id: categoryId++, name: 'test', options: [] };
            this.categories.push(category);
            return category;
        },
        addOption(categoryName: string, name: string) {
            const category = this.categories.find((category) => category.name === categoryName);

            if (category) {
                category.options.push({ id: optionId++, name, removed: false });
            }
        },
    },
});
