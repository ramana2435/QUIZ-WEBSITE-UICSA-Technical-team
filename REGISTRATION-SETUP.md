# 📝 REGISTRATION BUTTON SETUP GUIDE
## Two Separate Registration Forms for Different Years

---

## 🎯 HOW IT WORKS

When students click the **"REGISTER FOR QUIZ"** button, a beautiful modal popup appears with **2 registration options**:

1. **🎓 1st Year Students** - Links to 1st year registration form
2. **📚 2nd & 3rd Year Students** - Links to 2nd/3rd year registration form

This allows you to collect different information or manage registrations separately for different year groups.

---

## ⚙️ SETUP INSTRUCTIONS

### Step 1: Create Your Google Forms

Create **TWO separate Google Forms**:

**Form 1: For 1st Year Students**
1. Go to [forms.google.com](https://forms.google.com)
2. Create a new form
3. Title it: "UICSA Quiz Registration - 1st Year"
4. Add your questions (Name, Roll Number, Email, etc.)
5. Click Send → Get link → Copy the link

**Form 2: For 2nd & 3rd Year Students**
1. Create another new form
2. Title it: "UICSA Quiz Registration - 2nd & 3rd Year"
3. Add your questions
4. Click Send → Get link → Copy the link

---

### Step 2: Update config.js

Open `config.js` and paste your form URLs:

```javascript
const QUIZ_CONFIG = {
    // PASTE YOUR GOOGLE FORM LINKS HERE
    registration1stYearUrl: "https://forms.google.com/YOUR-1ST-YEAR-FORM-LINK",
    registration2nd3rdYearUrl: "https://forms.google.com/YOUR-2ND-3RD-YEAR-FORM-LINK",
    
    // ... rest of config
};
```

**Example:**
```javascript
registration1stYearUrl: "https://forms.google.com/d/e/1FAIpQLSd...../viewform",
registration2nd3rdYearUrl: "https://forms.google.com/d/e/1FAIpQLSe...../viewform",
```

---

### Step 3: Save and Test

1. **Save** `config.js`
2. **Open** `index.html` in browser
3. **Click** "REGISTER FOR QUIZ" button
4. **Verify** modal popup appears
5. **Click** each button to test the links
6. **Confirm** correct forms open in new tab

---

## 🎨 WHAT THE MODAL LOOKS LIKE

```
┌──────────────────────────────────────┐
│              ×  [Close]              │
│                                      │
│        📝 Select Your Year           │
│  Choose the appropriate registration │
│     form for your year               │
│                                      │
│  ┌────────────────────────────────┐ │
│  │   🎓 1st Year Students         │ │
│  └────────────────────────────────┘ │
│                                      │
│  ┌────────────────────────────────┐ │
│  │   📚 2nd & 3rd Year Students   │ │
│  └────────────────────────────────┘ │
│                                      │
└──────────────────────────────────────┘
```

---

## ✨ FEATURES

✅ **Beautiful Modal Popup** - Professional design with animation  
✅ **Easy to Use** - Clear options for students  
✅ **Mobile Friendly** - Works perfectly on phones  
✅ **Keyboard Accessible** - Press ESC to close  
✅ **Click Outside to Close** - Click background to dismiss  
✅ **Opens in New Tab** - Students won't lose the website  
✅ **Safe Links** - Opens with security attributes  

---

## 🔧 CUSTOMIZATION OPTIONS

### Change Button Text

Edit `index.html`, find the modal section:

```html
<button class="btn btn-primary btn-xl modal-btn" id="register1stYear">
    <span class="btn-icon">🎓</span>
    <span class="btn-text">Your Custom Text</span>
</button>
```

### Change Icons

Replace emoji icons in the `btn-icon` spans:
- 🎓 → 📚 (books)
- 📝 → ✏️ (pencil)
- 🎯 → 🏆 (trophy)

### Change Colors

Edit `style.css`, find `.modal-btn`:

```css
.modal-btn {
    background: your-color;
}
```

---

## 🎯 WHY SEPARATE FORMS?

**Benefits:**
1. **Different Questions** - Ask year-specific questions
2. **Better Organization** - Separate responses for analysis
3. **Easier Management** - Filter and track by year
4. **Targeted Communication** - Follow up with specific groups
5. **Capacity Planning** - Know distribution by year

---

## 📱 MOBILE EXPERIENCE

On mobile devices:
- Modal fills most of screen
- Large, touch-friendly buttons
- Easy to read text
- Smooth animations
- One-tap selection

Perfect for QR code access!

---

## 🆘 TROUBLESHOOTING

### Modal doesn't appear
**Solution:** 
- Check browser console (F12) for errors
- Verify `script.js` is loaded
- Clear cache (Ctrl+F5)

### Buttons show alert instead of opening form
**Solution:**
- You haven't updated the URLs in `config.js`
- Replace `PASTE_1ST_YEAR_GOOGLE_FORM_LINK_HERE` with actual link

### Wrong form opens
**Solution:**
- Check you pasted the correct link to the correct variable
- `registration1stYearUrl` should have 1st year form
- `registration2nd3rdYearUrl` should have 2nd/3rd year form

### Modal won't close
**Solution:**
- Click the × button (top right)
- Click outside the modal (on dark background)
- Press ESC key on keyboard
- Refresh page

---

## 🎓 SUGGESTED FORM QUESTIONS

### For 1st Year:
- Full Name
- Roll Number
- Email Address
- Phone Number
- Section/Division
- Why do you want to participate?

### For 2nd/3rd Year:
- Full Name
- Roll Number
- Current Year (2nd or 3rd)
- Email Address
- Phone Number
- Previous quiz participation?
- Expected topics

---

## 💡 PRO TIPS

✅ **Test Both Forms** before sharing  
✅ **Set forms to collect emails** for follow-up  
✅ **Limit to 1 response** per email if needed  
✅ **Send confirmation email** after registration  
✅ **Check form responses** regularly  
✅ **Export to sheets** for easy management  

---

## 📊 TRACKING REGISTRATIONS

**In Google Forms:**
1. Open your form
2. Click "Responses" tab
3. View summary or individual responses
4. Click spreadsheet icon to export to Sheets

**You'll see:**
- Total registrations per year
- Student details
- Timestamp of registration
- Email addresses for communication

---

## 🔄 IF YOU ONLY NEED ONE REGISTRATION FORM

If you want to use a single form for all years:

### Option 1: Use Original Single Button
Revert to the original code (contact support)

### Option 2: Make Both Buttons Use Same Form
In `config.js`:
```javascript
registration1stYearUrl: "YOUR_SINGLE_FORM_URL",
registration2nd3rdYearUrl: "YOUR_SINGLE_FORM_URL", // Same URL
```

But it's better to have the year as a dropdown in ONE form.

---

## ✅ VERIFICATION CHECKLIST

Before going live:

- [ ] Created both Google Forms
- [ ] Tested both forms (can submit test entry)
- [ ] Copied both form URLs correctly
- [ ] Updated `config.js` with URLs
- [ ] Removed placeholder text
- [ ] Tested modal popup opens
- [ ] Tested 1st year button opens correct form
- [ ] Tested 2nd/3rd year button opens correct form
- [ ] Forms open in new tab
- [ ] Modal closes properly
- [ ] Tested on mobile device
- [ ] Forms set to accept responses

---

## 🎉 YOU'RE READY!

Once configured, students can:
1. Visit your website
2. Click "REGISTER FOR QUIZ"
3. Choose their year
4. Fill the appropriate form
5. Get confirmation

**Simple, professional, and effective!**

---

**Need help?** Check browser console (F12) for errors.

**Last Updated:** October 2026  
**Feature:** Year-wise Registration Modal
