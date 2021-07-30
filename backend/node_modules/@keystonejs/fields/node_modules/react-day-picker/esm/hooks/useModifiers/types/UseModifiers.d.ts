/// <reference types="react" />
import { ModifierStatus } from '../../../types';
export declare type UseModifiers = {
    /** The status of the modifiers */
    modifiers: ModifierStatus;
    /** The class names based on modifiers. */
    modifierClassNames: string[];
    /** The style based on modifiers. */
    modifierStyle: React.CSSProperties;
};
