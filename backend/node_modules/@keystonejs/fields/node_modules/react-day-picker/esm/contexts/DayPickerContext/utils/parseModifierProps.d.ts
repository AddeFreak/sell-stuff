import { DayPickerProps, Modifiers } from '../../../types';
/**
 * Parse the modifiers from the props and return them as a map of array of
 * matcher.
 *
 * Internally we want modifiers as an array of matchers – as opposite of the
 * props which can accept also a matcher.
 */
export declare function parseModifierProps(initialProps: DayPickerProps): Modifiers;
