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

export function debounce(fnc, mili) {
    let timeout;

    return function () {
        let args = arguments;
        let context = this;

        clearTimeout(timeout);

        timeout = setTimeout(() => fnc.apply(context, args), mili);
    };
}
