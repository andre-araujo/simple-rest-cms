
const storage = {
    setAccount(token = {}) {
        if (token.success) {
            const encodedToken = btoa(JSON.stringify(token));
            sessionStorage.setItem('token', encodedToken);
        } else {
            sessionStorage.setItem('token', '');
        }
    },
    getAccount() {
        const token = sessionStorage.getItem('token');

        if (token && typeof token !== 'undefined') {
            const decodedToken = atob(token);
            return JSON.parse(decodedToken);
        }

        sessionStorage.setItem('token', '');

        return {};
    },
};

export default storage;
