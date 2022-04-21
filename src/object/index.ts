
export function getScheamsValue<T extends Record<string, any>>(scheams: string[], item: T) {

    function loopSchema(fields: string[]) {
        let preObject:Record<string, any>
        fields.forEach((field) => {
            if (preObject && preObject[field]) {
                preObject = preObject[field]
            } else if (item[field]){
                preObject = item[field]
            }
        })

        return preObject
    }

   for (const scheam of scheams) {
       const fields = scheam.split(",")
       if (fields.length > 1) {
           if (loopSchema(fields)) {
            return loopSchema(fields)
           }
       } else if (item[fields[0]]){
           return item[fields[0]]
       }
   }
   
   return null
}