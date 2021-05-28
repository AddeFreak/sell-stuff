import * as React from 'react';
import { SelectSingleContextValue } from './SelectSingleContextValue';
/**
 * The SelectSingle context shares details about the selected days when in
 * single selection mode.
 *
 * Access this context from the [[useSelectSingle]] hook.
 */
export declare const SelectSingleContext: React.Context<SelectSingleContextValue | undefined>;
