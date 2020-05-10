export function isEmptyString(str) {
    return !str;
}

export function addMultipleEventsListener(element, events, listener) {
    events.forEach(event => element.addEventListener(event, listener));
}
