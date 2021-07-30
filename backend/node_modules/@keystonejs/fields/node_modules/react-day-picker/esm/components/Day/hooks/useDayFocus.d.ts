import * as React from 'react';
/** Handle the focus for the day element. */
export declare function useDayFocus(date: Date, buttonRef: React.RefObject<HTMLButtonElement>): {
    focus: (date: Date) => void;
    blur: () => void;
    focusOnKeyDown: React.KeyboardEventHandler;
    isFocused: boolean;
};
