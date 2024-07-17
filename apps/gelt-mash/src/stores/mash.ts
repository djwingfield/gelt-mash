import { defineStore } from 'pinia';

interface MashOption {
    name: string;
    removed: boolean;
}

interface MashCategory {
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

export const useMashStore = defineStore('counter', {
    state: () => initialMashState,
    getters: {
        options: (state) => state.categories.flatMap((category) => category.options),
    },
    actions: {
        addCategory(name: string) {
            this.categories.push({
                name,
                options: [],
            });
        },
        addOption(categoryName: string, name: string) {
            const category = this.categories.find((category) => category.name === categoryName);

            if (category) {
                category.options.push({ name, removed: false });
            }
        },
    },
});
