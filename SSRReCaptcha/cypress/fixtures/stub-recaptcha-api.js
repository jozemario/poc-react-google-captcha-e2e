/**
 * API Compatible Stub for Google Recaptcha V3.
 *
 * Always passes recaptcha checks locally - if this was used in real
 * life setting then the server side verification would fail.
 *
 */
const requestOptions = [];
window.grecaptcha = {
    ready: callback => callback(),
    execute: key => {
        const token = "FAKE_TOKEN"
        if (requestOptions[key] && requestOptions[key].callback) {
            requestOptions[key].callback(token);
        }
        console.log('recaptcha callback', token);
        return Promise.resolve(token);
    },
    getResponse: key => {
        return 1;
    },
    render: (el, options) => {
        requestOptions.push(options);
        return requestOptions.length - 1;
    },
    reset: key => { }
};
