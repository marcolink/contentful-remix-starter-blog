/* Utility types for localized entries */
export type LocalizedFields<Fields, Locales extends keyof any> = {
    [FieldName in keyof Fields]?: {
        [LocaleName in Locales]?: Fields[FieldName];
    }
};
export type LocalizedEntry<EntryType, Locales extends keyof any> = {
    [Key in keyof EntryType]:
    Key extends 'fields'
    ? LocalizedFields<EntryType[Key], Locales>
    : EntryType[Key]
};
