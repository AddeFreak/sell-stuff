/// <reference types="react" />
import { Locale } from 'date-fns';
/** Represents a function to format a date. */
export declare type DateFormatter = (date: Date, options?: {
    locale?: Locale;
}) => React.ReactNode;
