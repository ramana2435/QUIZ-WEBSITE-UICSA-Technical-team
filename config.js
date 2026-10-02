// ============================================
// UICSA BRANCH QUIZ CHALLENGE - CONFIGURATION
// ============================================
// Edit this file to customize the website

const QUIZ_CONFIG = {
    // EXTERNAL LINKS
    // Replace these placeholder URLs with your actual links
    registrationUrl: "PASTE_GOOGLE_FORM_LINK_HERE",
    quizUrl: "PASTE_TEST_PORTAL_LINK_HERE",
    
    // QUIZ COUNTDOWN
    // Format: "YYYY-MM-DDTHH:MM:SS"
    // Example: "2026-12-25T10:00:00"
    quizDate: "2026-12-31T10:00:00",
    
    // EVENT DETAILS
    // Edit these values as needed
    eventDate: "To Be Announced",
    eventTime: "To Be Announced",
    eventDuration: "90 Minutes",
    venue: "To Be Announced",
    mode: "Online / Offline",
    eligibility: "UICSA Branch Students",
    
    // ORGANIZATION
    organizingBody: "UICSA Technical Team",
    university: "Guru Nanak University",
    location: "Hyderabad",
    
    // CONTACT (Optional - add if needed)
    contactEmail: "uicsa@example.com",
    contactPhone: "+91 XXXXXXXXXX"
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUIZ_CONFIG;
}
