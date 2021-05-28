import { Matcher } from './Matcher';
import { Modifier } from './Modifier';
/** A map of matchers to use as custom modifiers.*/
export declare type CustomModifiers = Record<Modifier, Matcher | Matcher[]>;
