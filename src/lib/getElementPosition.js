/**
 * @typedef {Object} ElementPosition
 * @property {number} top - The top X Coordinate
 * @property {number} bottom - The bottom X Coordinate
 * @property {number} left - The left Y Coordinate
 * @property {number} right - The right Y Coordinate
 */

/**
 * gets an elements position on the page
 * @param {Element} el - the node in the DOM
 * @return {ElementPosition}
 */
export default function getElementPosition(el) {
    let xPos = 0;
    let yPos = 0;
    const elWidth = el.offsetWidth;
    const elHeight = el.offsetHeight;

    while (el) {
        if (el.tagName == 'BODY') {
            // deal with browser quirks with body/window/document and page scroll
            const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            const yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
    }

    return {
        top: yPos,
        bottom: yPos + elHeight,
        left: xPos,
        right: xPos + elWidth,
    };
}
