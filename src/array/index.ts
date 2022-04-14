import { MergerSchemaCondction, ReturnMergerSource } from "../type/array";

function removeByIndexs<T>(source: T[], indexs: number[]):T[] {
    for (var i = 0; i < indexs.length; i++) {
        for (var j = 0; j < source.length; j++) {
            if (j === indexs[i]) {
                source.splice(j, 1);
                j--;
            }
        }
    }
    return Array.from(source)
}

function merger<T extends Record<any, string>>(source: T[], schema:MergerSchemaCondction = {}):ReturnMergerSource<T>[] {
    const mergedSource:ReturnMergerSource<T>[] = []
    const findKey =  schema.findKey || "id"
    const assignKey =  schema.assignKey || "children"

    const find = function(current: T) {
        return mergedSource.find(item => {
            return item[findKey] === current[findKey]
        })
    }

    source.forEach((item) => {
       const el = find(item)
       if (el) {
          (el as Record<string, any>)[assignKey] = [...el[assignKey], item]
       } else {
        mergedSource.push(item)
       }
    })

    return mergedSource
}


function flatten() {    
    
}


export {removeByIndexs, merger, flatten }