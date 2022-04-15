import { MergerSchemaCondction, ReturnMergerSource } from "./type";
declare function removeByIndexs<T>(source: T[], indexs: number[]): T[];
declare function merger<T extends Record<any, string>>(source: T[], schema?: MergerSchemaCondction): ReturnMergerSource<T>[];
declare function flatten(): void;
export { removeByIndexs, merger, flatten };
