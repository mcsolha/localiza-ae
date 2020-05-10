export function isEmptyString(str) {
    return !str;
}

export function addMultipleEventsListener(element, events, listener) {
    events.forEach(event => element.addEventListener(event, listener));
}

export function createObservable(target) {
    let propertiesCallbacks = {};
    let observable = new Proxy(target, {
        set(target, prop, value) {
            let oldValue = target[prop];
            target[prop] = value;

            if (propertiesCallbacks[prop]) {
                propertiesCallbacks[prop](oldValue, value);
            }

            return true;
        }
    });

    observable.observe = function(property, callback) {
        propertiesCallbacks[property] = callback;
    }

    return observable;
}
