export interface MashOption {
    id: number;
    name: string;
    removed: boolean;
}

export interface MashCategory {
    id: number;
    name: string;
    options: MashOption[];
}

let categoryId = 0;
let optionId = 0;

export function createCategory(name: string, optionNames?: string[]): MashCategory {
    return {
        id: categoryId++,
        name,
        options: !optionNames ? [] : optionNames.map(createOption),
    };
}

export function createOption(name: string): MashOption {
    return {
        id: optionId++,
        name,
        removed: false,
    };
}
