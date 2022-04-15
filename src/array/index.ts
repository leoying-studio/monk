import { MergerSchemaCondction, ReturnMergerSource } from "./type";
import {FIND_KEY, ASSIGN_KEY} from './constant'

function removeByIndexs<T>(source: T[], indexs: number[]):T[] {
    const pointers =  Array.from(indexs)
    pointers.sort((a, b) => a - b)
    for (var i = 0; i < pointers.length; i++) {
        for (var j = 0; j < source.length; j++) {
            if (j === pointers[i]) {
                source.splice(j, 1);
                j--;
            }
        }
    }
    return Array.from(source)
}


function merger<T extends Record<any, string>>(source: T[], schema:MergerSchemaCondction = {}):ReturnMergerSource<T>[] {
    const mergedSource:ReturnMergerSource<T>[] = []
    const findKey =  schema.findKey || FIND_KEY
    const assignKey =  schema.assignKey || ASSIGN_KEY

    const find = function(current: T) {
        return mergedSource.find(item => {
            return item[findKey] === current[findKey]
        })
    }

    source.forEach((item) => {
       const el = find(item)
       if (el) {
          (el)[assignKey].push(item)
       } else {
        const newItem = Object.assign(item, {
            [assignKey]: []
        })
        mergedSource.push(newItem)
       }
    })
    return mergedSource
}


function flatten() {    
    
}


export {removeByIndexs, merger, flatten }