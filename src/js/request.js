export function get(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open('GET', url);

        request.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                return resolve(request.response);
            }

            console.log('this.status: ', this.status);
            console.log('request.status: ', request.status);
            console.log('this.statusText: ', this.statusText);
            console.log('request.statusText: ', request.statusText);
                
            reject({
                status: this.status,
                message: request.statusText
            })
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
