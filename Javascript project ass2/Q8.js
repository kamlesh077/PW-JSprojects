// 6. LinkedIn Profile URL Validator.
// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https:// www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.

function validateLinkedInProfile(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    if (regex.test(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
}

const profileURLs = [
    "https://www.linkedin.com/in/john-doe123",
    "https://www.linkedin.com/in/mary_smith",
    "https://www.linkedin.com/in/jane.doe-123",
    "https://www.linkedin.com/in/invalid%$profile",
    "https://www.linkedin.com/in/verylongprofileidwithmorethan30characters"
];

profileURLs.forEach(url => {
    validateLinkedInProfile(url);
});




