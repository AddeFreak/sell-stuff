import { ModifierStatus } from './';
/**
 * Represent a function to format the ARIA label for the [[Day]] component.
 */
export declare type DayLabelFormatter = (day: Date, modifiers: ModifierStatus, options?: {
    locale?: Locale;
}) => string;
