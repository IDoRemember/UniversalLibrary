var typeValue = function (type) {
    return `[object ${type}]`
}
export default function typeJudement(obj, type) {
    return Object.prototype.toString.call(obj) == isType(type)
}
