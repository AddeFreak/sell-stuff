import * as React from 'react';
import { FocusContextValue } from './FocusContextValue';
/**
 * The Focus context shares details about the focused day for the keyboard navigation.
 *
 * Access this context from the [[useFocus]] hook.
 */
export declare const FocusContext: React.Context<FocusContextValue | undefined>;
