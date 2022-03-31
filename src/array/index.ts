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


function merger<T, U, V = any>(source: T[], key: string, targetKey: string, target: V):U[] {
    const mergerSource = []

    const find = function(current) {
        return mergerSource.find(item => {
            return item[key] === current[key]
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


export {removeByIndexs, merger }