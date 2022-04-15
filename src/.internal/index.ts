export function isObject(vlaue: any) {
   return Object.prototype.toString.call(vlaue) === '[Object Object]'
}

export function isEmptyObject(value: Record<string, any>) {
    let isEmpty = false

    for (let k in value) {
        isEmpty = true;
        break;
    }

    return isEmpty
}