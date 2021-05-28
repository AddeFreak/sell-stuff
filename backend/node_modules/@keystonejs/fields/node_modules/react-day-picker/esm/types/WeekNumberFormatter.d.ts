/// <reference types="react" />
import { Locale } from 'date-fns';
/** Represent a function to format the week number. */
export declare type WeekNumberFormatter = (weekNumber: number, options?: {
    locale?: Locale;
}) => React.ReactNode;
