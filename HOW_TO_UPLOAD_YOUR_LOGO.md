# 📸 How to Upload Your Own Logo

## 🎯 **Easy Steps to Replace the Logo**

---

## **METHOD 1: Replace the SVG File (Recommended)**

### Step 1: Prepare Your Logo
- **Format:** PNG, JPG, or SVG
- **Recommended Size:** 200px width x 60-80px height
- **Background:** Transparent (PNG) or matching your design
- **File Name:** `logo.png` or `logo.svg` or `logo.jpg`

### Step 2: Save Your Logo
1. Save your logo file to: `Desktop/project_files/images/`
2. Name it: `logo.png` (or .svg or .jpg)

### Step 3: Update the HTML
Open `index.html` and `about.html`, find this line (around line 29):
```html
<img src="images/logo.svg" alt="Cuisine of Nepal Logo" class="logo-img">
```

Change to:
```html
<img src="images/logo.png" alt="Cuisine of Nepal Logo" class="logo-img">
```
(Or use `.jpg` if that's your format)

### Step 4: Done!
Refresh your browser - your logo is now live! 🎉

---

## **METHOD 2: Use an Online Logo**

If your logo is already hosted online:

### Step 1: Get Your Logo URL
- Upload to: Imgur, Google Drive, Dropbox, or your website
- Copy the direct image URL

### Step 2: Update the HTML
In `index.html` and `about.html`, change:
```html
<img src="images/logo.svg" alt="Cuisine of Nepal Logo" class="logo-img">
```

To:
```html
<img src="YOUR_LOGO_URL_HERE" alt="Cuisine of Nepal Logo" class="logo-img">
```

Example:
```html
<img src="https://example.com/my-logo.png" alt="Cuisine of Nepal Logo" class="logo-img">
```

---

## **METHOD 3: Keep Current Logo & Customize**

The current SVG logo can be customized!

### Edit the SVG File
Open `images/logo.svg` in a text editor and modify:

**Change Colors:**
```svg
fill="#D4AF37"  ← Change this to your gold color
fill="#8B0000"  ← Change this to your red color
```

**Change Text:**
```svg
<text>Cuisine of Nepal</text>  ← Change restaurant name
<text>AUTHENTIC HIMALAYAN FLAVORS</text>  ← Change tagline
```

---

## 🎨 **LOGO SPECIFICATIONS**

### **Current Logo Settings:**
- **Desktop Size:** 60px height
- **Mobile Size:** 45px height
- **Format:** SVG (scalable)
- **Colors:** Gold (#D4AF37) + Red (#8B0000)

### **Recommended Logo Specs:**
```
Width: 180-220px
Height: 50-80px
Format: PNG (transparent) or SVG
Resolution: 2x for retina (if PNG)
File Size: < 100KB
```

### **Logo Placement:**
- **Desktop:** Top left of header
- **Mobile:** Centered in header
- **Hover Effect:** Scales to 1.05x
- **Link:** Clickable, goes to homepage

---

## 🔧 **ADJUST LOGO SIZE**

If your logo is too big or small:

### In `css/style.css`, find:
```css
.logo-img {
    height: 60px;
    width: auto;
}
```

### Change to your preferred size:
```css
.logo-img {
    height: 80px;  ← Make bigger
    width: auto;
}
```

Or:
```css
.logo-img {
    height: 45px;  ← Make smaller
    width: auto;
}
```

### For Mobile (also in `css/style.css`):
```css
@media (max-width: 768px) {
    .logo-img {
        height: 45px;  ← Adjust mobile size
    }
}
```

---

## 📝 **QUICK CHECKLIST**

Before uploading your logo:

- [ ] Logo is clear and readable
- [ ] Background is transparent (if PNG)
- [ ] Size is appropriate (not too large)
- [ ] File size is optimized (< 100KB)
- [ ] Logo looks good on dark red background
- [ ] Logo is saved in `images/` folder
- [ ] HTML is updated with correct filename
- [ ] Tested on desktop and mobile

---

## 🎯 **COMMON ISSUES & FIXES**

### **Logo Not Showing?**
1. Check file path: `images/logo.png`
2. Check file name matches HTML
3. Clear browser cache (Ctrl+F5)
4. Check file actually exists in folder

### **Logo Too Big/Small?**
- Adjust `height` in CSS (see above)
- Try different values: 40px, 50px, 60px, 70px, 80px

### **Logo Blurry?**
- Use SVG format (scalable)
- Or use 2x resolution PNG (120px height for 60px display)

### **Logo Wrong Color?**
- Ensure logo works on dark red background
- Consider adding white/gold version
- Or adjust header background color

---

## 💡 **PRO TIPS**

1. **Use SVG when possible** - Scales perfectly on all screens
2. **Keep it simple** - Logo should be recognizable at small sizes
3. **Test on mobile** - Logo should be readable on phones
4. **Optimize file size** - Use tools like TinyPNG or SVGOMG
5. **Backup original** - Keep a copy before replacing

---

## 🆘 **NEED HELP?**

If you have your logo file ready:
1. Place it in `Desktop/project_files/images/`
2. Name it `logo.png` (or .svg or .jpg)
3. Update the HTML as shown above
4. Refresh browser

**That's it! Your logo is live!** 🎉

---

## 📸 **CURRENT LOGO LOCATION**

```
Desktop/project_files/
└── images/
    └── logo.svg  ← Replace this file!
```

**Used in:**
- `index.html` (line ~29)
- `about.html` (line ~24)

---

**Need a custom logo designed? Consider hiring a designer on Fiverr or 99designs!**
