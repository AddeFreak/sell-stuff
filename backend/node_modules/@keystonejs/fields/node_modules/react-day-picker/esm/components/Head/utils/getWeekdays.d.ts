import { Locale } from 'date-fns';
/**
 * Generate a series of 7 days, starting from the week, to use for formatting
 * the weekday names (Monday, Tuesday, etc.).
 */
export declare function getWeekdays(locale?: Locale): Date[];
