import { Locale } from 'date-fns';
/**
 * The weeks belonging to a month. Each key of the returned object is the
 * week number of the year.
 */
export declare type MonthWeeks = {
    [weeknumber: string]: Date[];
};
/**
 * Return the weeks belonging to the given month.
 */
export declare function getWeeks(month: Date, { locale, fixedWeeks }: {
    locale: Locale;
    fixedWeeks?: boolean;
}): MonthWeeks;
