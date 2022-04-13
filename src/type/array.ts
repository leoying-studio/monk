export interface MergerSchemaCondction {
    findKey?: string
    assignKey?: string
}

export type ReturnMergerSource<T> = T & {[k: string]: T}
