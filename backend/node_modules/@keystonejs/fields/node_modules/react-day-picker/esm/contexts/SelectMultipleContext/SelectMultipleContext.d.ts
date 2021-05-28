import * as React from 'react';
import { SelectMultipleContextValue } from './SelectMultipleContextValue';
/**
 * The SelectMultiple context shares details about the selected days when in
 * multiple selection mode.
 *
 * Access this context from the [[useSelectMultiple]] hook.
 */
export declare const SelectMultipleContext: React.Context<SelectMultipleContextValue | undefined>;
