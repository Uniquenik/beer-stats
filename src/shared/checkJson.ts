export const checkJson = (json:string):boolean => {
    try{
        JSON.parse(json)
    }
    catch (e){
        return false
    }
    return true
    // if (/^[\],:{}\s]*$/.test(json.replace(/\\["\\\/bfnrtu]/g, '@').
    // replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    // replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
    //    return true
    // }
    // else{
    //    return false
    // }
}