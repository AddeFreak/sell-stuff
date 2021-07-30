import { Modifiers, ModifierStatus } from '../../../types';
/**
 * Return the status of the modifiers that matches the given date.
 */
export declare function getModifierStatus(date: Date, 
/** The modifiers to match for the given date. */
modifiers: Modifiers): ModifierStatus;
