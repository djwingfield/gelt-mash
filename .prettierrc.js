/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    printWidth: 110,
    endOfLine: 'auto', // Use .gitattributes to manage newlines
    singleQuote: true,
    trailingComma: 'es5',
    tabWidth: 4,
};

module.exports = config;
