export interface MergerSchemaCondction {
    findKey?: string;
    assignKey?: string;
}
export declare type ReturnMergerSource<T extends Record<string, any>> = T & {
    [k: string]: T[];
};
