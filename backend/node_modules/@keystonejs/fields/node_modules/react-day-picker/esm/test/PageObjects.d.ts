export declare class PageObjects {
    today: Date;
    /**
     * Initialize the page objects for the DayPicker elements. Use the objects in
     * this class to access to the elements to test.
     *
     * @param today The date to use as today. Usually the one froze with
     * timekeeper.
     */
    constructor(today: Date);
    /** The icon for the previous button. */
    get iconPrevious(): HTMLElement;
    /** The icon for the dropdown. */
    get iconDropdown(): HTMLElement;
    /** The icon for the next button. */
    get iconNext(): HTMLElement;
    /** Get the table element. */
    get table(): HTMLTableElement;
    /** Get the content of the footer. */
    get footer(): ChildNode | null;
    get button(): HTMLButtonElement;
    /** The drop-down to choose the month from. */
    get monthDropdown(): HTMLSelectElement;
    /** The drop-down to choose the year from. */
    get yearDropdown(): HTMLSelectElement;
    /** The label of the caption element. */
    getCaptionLabel(date: Date): HTMLSpanElement;
    /** The previous month button in the navigation. */
    get previousButton(): HTMLButtonElement;
    /** The next month button in the navigation. */
    get nextButton(): HTMLButtonElement;
    /** Select the month from the drop-down. */
    runSelectMonth(month: Date): void;
    /** Click the previous month button. */
    runPreviousClick(): boolean;
    /** Click the next month button. */
    runNextClick(): boolean;
    /** Select the year from the drop-down. */
    runSelectYear(year: Date): void;
}
