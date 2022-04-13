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


function merger<T>(source: T[], schema:MergerSchemaCondction = {}):ReturnMergerSource<T>[] {
    const mergerSource = []
    const findKey = "id" || schema.findKey
    const targetKey = "list" || schema.assignKey

    const find = function(current) {
        return mergerSource.find(item => {
            return item[findKey] === current[findKey]
        })
    }

    source.forEach((item) => {
       const el = find(item)
       if (el) {
          el[targetKey] = [...el[targetKey] ]
       } else {
         mergerSource.push(item)
       }
    })

    return mergerSource
}


function flatten() {    
    
}


export {removeByIndexs, merger, flatten }