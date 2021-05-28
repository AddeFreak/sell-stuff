/// <reference types="react" />
import { ModifierStatus } from './ModifierStatus';
/**
 * Represent the event handler when a day is clicked.
 */
export declare type DayClickEventHandler = (day: Date, modifiers: ModifierStatus, e: React.MouseEvent) => void;
