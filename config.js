// ============================================
// UICSA BRANCH QUIZ CHALLENGE - CONFIGURATION
// ============================================
// Edit this file to customize the website

const QUIZ_CONFIG = {
    // EXTERNAL LINKS
    // Replace these placeholder URLs with your actual links
    registrationUrl: "https://forms.gle/gK2u7fuQbjbnQKPv6",
    quizUrl: "PASTE_TEST_PORTAL_LINK_HERE",
    
    // QUIZ COUNTDOWN
    // Quiz Date: October 5, 2026 at 1:00 PM
    // Format: "YYYY-MM-DDTHH:MM:SS"
    quizDate: "2026-10-05T13:00:00",
    
    // EVENT DETAILS
    // Edit these values as needed
    eventDate: "October 5, 2026",
    eventTime: "01:00 PM",
    eventDuration: "60 Minutes",
    venue: "Online",
    mode: "Online",
    eligibility: "UICSA Branch Students",
    
    // ORGANIZATION
    organizingBody: "UICSA Technical Team",
    university: "Guru Nanak University",
    location: "Hyderabad",
    
    // CONTACT (Optional - add if needed)
    contactEmail: "maddilaramana32@gmail.com",
    contactPhone: "+91 8096831402"
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUIZ_CONFIG;
}
