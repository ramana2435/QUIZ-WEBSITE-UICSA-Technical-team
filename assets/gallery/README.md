# Gallery Folder

Place event photos, campus photos, and quiz competition images in this folder.

## File Naming

Name your photos sequentially:
- photo1.jpg
- photo2.jpg
- photo3.jpg
- photo4.jpg
- photo5.jpg
- photo6.jpg
- ...and so on

Or use descriptive names:
- campus-view.jpg
- quiz-event-2025.jpg
- technical-team-meetup.jpg
- students-competing.jpg

## Image Specifications

**Recommended:**
- **Size:** 1200x800px (landscape orientation)
- **Aspect Ratio:** 3:2 or 4:3
- **Format:** JPG (for photos)
- **File Size:** Under 500KB each (compress for web)
- **Quality:** High quality, well-lit photos

## What Photos to Include

### Campus Photos
- University building exterior
- Computer labs
- Classrooms
- Campus landmarks
- Library or study areas

### Event Photos
- Previous quiz competitions
- Students participating
- Award ceremonies
- Technical events
- UICSA gatherings
- Team activities

### Technical Team Photos
- Team meetings
- Event organization
- Behind-the-scenes preparation
- Technical workshops

## Adding More Photos

To add more photos to the gallery:

1. **Save photos** in this folder
2. **Edit index.html** and find the Gallery section
3. **Copy and paste** this code block:

```html
<div class="gallery-item" data-aos="zoom-in" data-aos-delay="450">
    <img src="assets/gallery/YOUR-PHOTO-NAME.jpg" 
         alt="Description of photo" 
         loading="lazy"
         onerror="this.parentElement.style.display='none'">
    <div class="gallery-overlay">
        <span class="gallery-icon">🔍</span>
    </div>
</div>
```

4. **Update** `YOUR-PHOTO-NAME.jpg` with your actual filename
5. **Update** the `alt` text with a description
6. **Adjust** `data-aos-delay` in increments of 50 (e.g., 450, 500, 550)

## Image Optimization Tips

For faster loading:
1. Use online tools like TinyPNG or Squoosh to compress images
2. Convert large PNG files to JPG for photos
3. Keep file sizes under 500KB
4. Use descriptive filenames (no spaces, use hyphens)

## Notes

- The gallery uses lazy loading for better performance
- Images open in a lightbox when clicked
- Navigate with keyboard arrows (← →) or on-screen buttons
- Missing images won't break the gallery
- The gallery is fully responsive on mobile devices
