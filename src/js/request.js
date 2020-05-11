export function get(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open('GET', url);

        request.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                return resolve(this.response);
            }


            reject({
                status: this.status,
                message: this.statusText
            });
        };

        request.send();
    });
}

export function searchParams(searchParamsObj) {
    let searchParams = [];

    for (const key in searchParamsObj) {
        if (searchParamsObj.hasOwnProperty(key)) {
            let value = searchParamsObj[key];

            value = encodeURIComponent(typeof value === 'string'
                ? value
                : value.toString()
            );

            searchParams.push(`${key}=${value}`);
        }
    }

    return '?' + searchParams.join('&');
}
