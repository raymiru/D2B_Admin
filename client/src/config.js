export const host = {
    dev: 'http://localhost:4000',
    prod: 'http://84.201.145.23'
};

export const setHost = () => {
    if (localStorage['host'] === 'dev') {
        return host.dev
    } else {
        return host.prod
    }
};

