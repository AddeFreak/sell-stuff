import { CaptionLayout, ClassNames, Components, DayPickerProps, Formatters, Labels, ModifierClassNames, Modifiers, Styles } from '../../types';
/** Represent the value of the [[DayPickerContext]]. */
export declare type DayPickerContextValue = DayPickerProps & {
    captionLayout: CaptionLayout;
    classNames: Required<ClassNames>;
    components: Components;
    formatters: Formatters;
    labels: Labels;
    locale: Locale;
    modifierClassNames: ModifierClassNames;
    modifierPrefix: string;
    modifiers: Modifiers;
    numberOfMonths: number;
    styles: Styles;
    today: Date;
    toYear?: never;
    fromYear?: never;
    toMonth?: never;
    fromMonth?: never;
};
