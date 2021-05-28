import * as React from 'react';
import { NavigationContextValue } from './NavigationContextValue';
/**
 * The Navigation context shares details about the months being navigated in DayPicker.
 *
 * Access this context from the [[useNavigation]] hook.
 */
export declare const NavigationContext: React.Context<NavigationContextValue | undefined>;
