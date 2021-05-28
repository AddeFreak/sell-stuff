import * as React from 'react';
import { DayPickerProps } from '../types';
/** The props of the [[ContextProvider]] provider. */
export declare type ContextProviderProps = DayPickerProps & {
    children: React.ReactNode;
};
/** Provide the value for all the context providers. */
export declare function ContextProvider(props: ContextProviderProps): JSX.Element;
