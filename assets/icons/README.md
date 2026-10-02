# Icons Folder

This folder is for additional icons or graphics if needed.

## Purpose

This folder is optional and reserved for:
- Custom icons
- Decorative graphics
- Social media icons
- Additional branding elements

## Current Status

The website currently uses:
- Emoji icons (🎓 📝 🚀 etc.) for simplicity
- CSS-based graphics
- No external icon dependencies

## If You Want to Add Custom Icons

### Option 1: Font Awesome (CDN)
Add this to the `<head>` of index.html:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

Then use icons like:
```html
<i class="fas fa-trophy"></i>
```

### Option 2: Custom SVG Icons
Place SVG files here and reference them:
```html
<img src="assets/icons/custom-icon.svg" alt="Icon description">
```

### Option 3: Icon Sprite Sheet
Create a single sprite sheet for better performance and reference specific icons by ID.

## Recommended Formats

- **SVG**: Best for logos and simple icons (scalable, small file size)
- **PNG**: For complex icons with transparency
- **WebP**: Modern format with great compression

## Notes

- SVG icons are resolution-independent and load fast
- Keep icon files small (under 10KB each)
- Use descriptive filenames
- This folder can remain empty if not needed
