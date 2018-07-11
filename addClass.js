/**
 * 
 * @desc   为元素添加class
 * @param  {HTMLElement} ele 
 * @param  {String} cls 
 */

var hasClass = require('./hasClass');

export default function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className += ' ' + cls;
    }
}