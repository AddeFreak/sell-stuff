/// <reference types="react" />
import { ModifierStatus } from './ModifierStatus';
/**
 * Represent the event handler when a day gets a keyboard event.
 */
export declare type DayKeyboardEventHandler = (day: Date, modifiers: ModifierStatus, e: React.KeyboardEvent) => void;
