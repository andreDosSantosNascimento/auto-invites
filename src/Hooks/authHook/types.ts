export interface ContextInterface {
    oauthSignIn: (scope: string) => void;
    handleSaveCalendarToken: () => void;
    handleSaveSheetsToken: () => void;
    handleSetTokenCalendar: (token: string) => void;
    handleSetTokenSheets: (token: string) => void;
    accessTokenCalendar: string;
    accessTokenSheets: string;
}
