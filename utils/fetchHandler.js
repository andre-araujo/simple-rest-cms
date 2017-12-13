import storage from './storage';

const getHeaders = (account) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (account) {
        headers.append('Authorization', `Bearer ${account.token}`);
    }

    return headers;
};

export default function fetchHandler(url, options) {
    return new Promise((resolve, reject) => {
        const headers = getHeaders(storage.getAccount());
        fetch(url, { ...options, headers }).then((resp) => {
            if (resp.status < 200 || resp.status >= 300) {
                reject(resp);
            } else if (resp.status === 204) {
                resolve(resp);
            }

            resolve(resp);
        }).catch((e) => { throw e; });
    });
}
