import * as React from 'react';
import { DayPickerProps } from '../../types';
/** Represent the props for the [[DayPickerProvider]]. */
export interface DayPickerProviderProps {
    /** The props passed to the DayPicker component. */
    initialProps: DayPickerProps;
    children?: React.ReactNode;
}
/**
 * The provider for the [[DayPickerContext]].
 */
export declare function DayPickerProvider(props: DayPickerProviderProps): JSX.Element;
