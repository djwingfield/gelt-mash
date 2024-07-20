import { createCategory, createOption, MashCategory, MashOption } from './types';

const mashData: Map<string, string[]> = new Map([
    [
        'Future Home',
        [
            'Mansion',
            'Apartment',
            'Shack',
            'House',
            'Castle',
            'Cottage',
            'Villa',
            'Penthouse',
            'Cabin',
            'Treehouse',
            'Farmhouse',
            'Igloo',
            'Hut',
            'Caravan',
            'Tent',
        ],
    ],
    [
        "Future Partner's Name",
        [
            'Alex',
            'Jamie',
            'Casey',
            'Taylor',
            'Jordan',
            'Morgan',
            'Sam',
            'Riley',
            'Avery',
            'Cameron',
            'Quinn',
            'Drew',
            'Kendall',
            'Skyler',
            'Blake',
        ],
    ],
    ['Number of Kids', ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']],
    [
        'City You Will Live In',
        [
            'London',
            'Manchester',
            'Birmingham',
            'Leeds',
            'Glasgow',
            'Sheffield',
            'Liverpool',
            'Bristol',
            'Newcastle',
            'Sunderland',
            'Nottingham',
            'Southampton',
            'Portsmouth',
            'York',
            'Edinburgh',
        ],
    ],
    [
        'Job',
        [
            'Doctor',
            'Lawyer',
            'Engineer',
            'Teacher',
            'Artist',
            'Musician',
            'Chef',
            'Architect',
            'Scientist',
            'Writer',
            'Pilot',
            'Actor',
            'Dancer',
            'Entrepreneur',
            'Designer',
        ],
    ],
    [
        'Type of Car',
        [
            'Sports Car',
            'SUV',
            'Saloon',
            'Truck',
            'Motorcycle',
            'Convertible',
            'Minivan',
            'Coupe',
            'Hatchback',
            'Electric Car',
            'Hybrid Car',
            'Limousine',
            'Bicycle',
            'Estate',
            'Campervan',
        ],
    ],
]);

function getRandomElements<T>(array: T[], count: number): T[] {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

interface MashRandomiserOptions {
    categories: MashCategory[];
    minCategoryCount: number;
    maxCategoryCount: number;
    minOptionCount?: number;
    maxOptionCount?: number;
}

function generateRandomCategories(categories: MashCategory[], min: number, max: number): MashCategory[] {
    min = Math.max(categories.length, min);
    const totalCategories = Math.random() * (max - min) + min;
    const usedCategoryNames = categories.map(({ name }) => name);
    const possibleNewCategoryNames = Array.from(mashData.keys()).filter(
        (name) => !usedCategoryNames.includes(name)
    );

    return [
        ...categories,
        ...getRandomElements(possibleNewCategoryNames, totalCategories - categories.length).map((name) =>
            createCategory(name)
        ),
    ];
}

function generateRandomOptions(
    categoryName: string,
    options: MashOption[],
    min: number,
    max: number
): MashOption[] {
    const optionPresets = mashData.get(categoryName);

    if (!optionPresets) {
        return options;
    }

    min = Math.max(options.length, min);
    const totalOptions = Math.random() * (max - min) + min;
    const usedOptionNames = options.map(({ name }) => name);
    const possibleNewOptionNames = optionPresets.filter((name) => !usedOptionNames.includes(name));

    return [
        ...options,
        ...getRandomElements(possibleNewOptionNames, totalOptions - options.length).map(createOption),
    ];
}

export function generateRandomMashData({
    categories = [],
    minCategoryCount,
    maxCategoryCount,
    minOptionCount = minCategoryCount,
    maxOptionCount = maxCategoryCount,
}: MashRandomiserOptions): MashCategory[] {
    return generateRandomCategories(categories, minCategoryCount, maxCategoryCount).map(
        ({ name, options, ...category }) => ({
            ...category,
            name,
            options: generateRandomOptions(name, options, minOptionCount, maxOptionCount),
        })
    );
}
