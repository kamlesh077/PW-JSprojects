// 5. URL validation.
// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://, followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.Print a message indicating if the input matches the conditions or not.

function validateURL(url) {
    const regex = /^(http:\/\/|https:\/\/)[\w\d\-._~:/?#[\]@!$&'()*+,;=]+$/i;

    if (regex.test(url)) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is not a valid URL.`);
    }
}

const urls = [
    "http://www.example.com",
    "https://subdomain.example.net/page123",
    "ftp://invalid-url.com",
    "https://another-valid-url.org"
];

urls.forEach(url => {
    validateURL(url);
});
