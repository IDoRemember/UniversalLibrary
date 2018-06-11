/**
 * 判断对象类型
 *
 *
 * @param    {object}  obj     对象
 * @returns  boolean
 *
 * @date     2018-06-11
 * @author   shirly.chen<1015885915@qq.com>
 */

function typeJudement(obj) {
    return function typeValue(type) {
        return Object.prototype.toString.call(obj) == `[object ${type}]`
    }
}

export default {
    isString: (obj) => typeJudement(obj)('String'),
    isArray: (obj) => typeJudement(obj)('Array'),
    isFunction: (obj) => typeJudement(obj)('Function'),
    isNull: (obj) => typeJudement(obj)('Null'),
    isUndefined: (obj) => typeJudement(obj)('Undefined'),
    isNumber: (obj) => typeJudement(obj)('Number'),
    isRegExp: (obj) => typeJudement(obj)('RegExp'),
    isglobal: (obj) => typeJudement(obj)('global'),  // isglobal(window)
    isHTMLDocument: (obj) => typeJudement(obj)('HTMLDocument'), //isHTMLDocument(document)
    isLocation: (obj) => typeJudement(obj)('Location'), //isLocation(document.location)
    isDate: (obj) => typeJudement(obj)('Date'),
    isMath: (obj) => typeJudement(obj)('Math'), // isMath(Math)
    isSymbol: (obj) => typeJudement(obj)('Symbol') // isSymbol(Symbol())
} 
