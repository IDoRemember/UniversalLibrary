/**
 * 判断元素是否在可视区域
 *
 *
 * @param    {HTMLElement}  el
 * @param    {Number}  offset
 * @returns  boolean
 *
 * @date     2018-06-11
 * @author   shirly.chen<1015885915@qq.com>
 */

export default function isElementInViewport(el, offset) {
    const h = offset || 20,
        box = el.getBoundingClientRect(),
        top = (box.top >= 0),
        left = (box.left >= 0),
        bottom = (box.bottom <= (window.innerHeight || document.documentElement.clientHeight) + h),
        right = (box.right <= (window.innerWidth || document.documentElement.clientWidth) + h);
    return (top && left && bottom && right);
}
