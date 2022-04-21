export interface MergerSchemaCondction {
    findKey?: string
    assignKey?: string
}

export type ReturnMergerSource<T extends Record<string, any>> =  T & {[k: string]: T[]}

export type Condition<K, T> = {
    field: keyof K,
    value: any,
    schemas?: string[],
    targetFiled: T
} 