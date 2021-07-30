import { DayPickerProps } from '../../../types';
/**
 * Build the `fromDate` and `toDate` values, given the fromMonth/toMonth
 * or fromYear/toYear props.
 */
export declare function parseFromToProps(props: Pick<DayPickerProps, 'fromYear' | 'toYear' | 'fromDate' | 'toDate' | 'fromMonth' | 'toMonth'>): {
    fromDate: Date | undefined;
    toDate: Date | undefined;
};
