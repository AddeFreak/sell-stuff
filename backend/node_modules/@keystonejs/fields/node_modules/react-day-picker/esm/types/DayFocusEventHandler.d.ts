/// <reference types="react" />
import { ModifierStatus } from './ModifierStatus';
/**
 * Represent the event handler when a day is focused.
 */
export declare type DayFocusEventHandler = (day: Date, modifiers: ModifierStatus, e: React.FocusEvent | React.KeyboardEvent) => void;
