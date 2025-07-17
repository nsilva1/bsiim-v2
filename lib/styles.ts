/**
 * A consolidated collection of Tailwind CSS class strings for a monochromatic theme.
 * Each property contains all classes for an element, with dark mode variants
 * prefixed with `dark:`. This allows for applying a complete set of theme-aware
 * styles in a single class attribute.
 *
 * @example
 * <div className={themeStyles.section}>
 * <h1 className={themeStyles.primaryText}>...</h1>
 * </div>
 */
export const themeStyles = {
    /** Styles for the main page background. */
    section: 'bg-gray-100 dark:bg-gray-900',
  
    /** Styles for elevated surfaces like cards or modals. */
    card: 'bg-white shadow-lg dark:bg-gray-800',
  
    /** Styles for high-emphasis text. */
    primaryText: 'text-gray-900 dark:text-gray-100',
  
    /** Styles for low-emphasis, secondary text. */
    secondaryText: 'text-gray-600 dark:text-gray-400',
  
    /** Styles for borders and dividers. */
    border: 'border-gray-200 dark:border-gray-700',
  
    /** Base styles for interactive elements like buttons. */
    buttonBackground: 'bg-gray-800 dark:bg-gray-200 py-2 px-3',
  
    /** Text styles for interactive elements. */
    buttonText: 'text-white dark:text-gray-900',
  
    /** Hover styles for interactive elements. */
    buttonHover: 'hover:bg-gray-900 dark:hover:bg-gray-300',
  
    /** Styles for icons and other subtle UI decorations. */
    icon: 'text-gray-400 dark:text-gray-500',
};

export const typography = {
    header: `${themeStyles.primaryText} text-3xl md:text-4xl xl:text-5xl font-bold font-outfit`,
    subtitle: `${themeStyles.secondaryText} text-lg md:text-xl xl:text-2xl font-bold font-outfit`,
    paragraph: `${themeStyles.primaryText} text-base lg:text-lg font-normal font-outfit`
}