<!-- @format -->

# La Digue Formulations - Static HTML Website

This is a fully converted static HTML version of the La Digue Formulations React website. **No React, no build tools, no frameworks** — just pure HTML, Tailwind CSS, and vanilla JavaScript.

## 📁 File Structure

```
dist/
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   └── style.css          # Custom CSS (colors, animations, utilities)
├── js/
│   └── script.js          # Vanilla JavaScript (interactivity)
└── assets/
    ├── hero-bg.jpg        # Hero section background
    ├── about-lab.jpg      # About page lab image
    ├── cert-1.jpg         # Certification image 1
    ├── cert-2.jpg         # Certification image 2
    ├── cert-3.jpg         # Certification image 3
    └── cert-4.jpg         # Certification image 4
```

## 🚀 Quick Start

1. **No Installation Required** — Just open `index.html` in your browser
2. **No Build Process** — All CSS and JavaScript are inline or linked
3. **CDN Powered** — Tailwind CSS loaded from CDN
4. **Fully Responsive** — Mobile, tablet, and desktop ready

### To Run Locally:

```bash
# Simply open the files:
# - index.html (Homepage)
# - about.html (About page)
# - contact.html (Contact page)

# Or run a quick server:
python -m http.server 8000
# Then visit http://localhost:8000/dist/
```

## 🎨 Styling

### Color System

- **Primary Blue**: `hsl(220, 85%, 30%)`
- **Pharma Blue Light**: `hsl(214, 72%, 49%)`
- **Pharma Green Light**: `hsl(100, 65%, 59%)`
- **Background**: `hsl(215, 40%, 98%)`
- **Foreground**: `hsl(220, 30%, 15%)`

### CSS Classes Used

- **Gradients**: `.gradient-text`, `.gradient-bg`, `.gradient-hero-bg`
- **Shadows**: `.card-shadow`, `.card-shadow-hover`
- **Colors**: All Tailwind classes + custom variables

### Customizing Colors

Edit the CSS variables in `css/style.css` under `:root`:

```css
:root {
	--primary: 220 85% 30%;
	--primary-foreground: 0 0% 100%;
	/* Change these values */
}
```

## 🎬 Animations

### Scroll Fade-In Animation

Elements with the `animated-section` class fade in and slide up when scrolled into view.

**Features:**

- Intersection Observer API (native browser support)
- Smooth 0.6s fade-in with 30px upward translation
- No animation library required

### How it works:

```html
<div
	class="animated-section"
	style="--delay: 0s;"
>
	Content that auto-animates
</div>
```

**Customizing Animations:**
Edit `css/style.css`:

```css
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(30px); /* Change distance */
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animated-section {
	animation: fadeInUp 0.6s ease-out forwards; /* Duration: 0.6s */
	animation-delay: var(--delay, 0s);
}
```

## ⚙️ JavaScript Features

### 1. Mobile Menu Toggle

- Hamburger menu for mobile devices
- Smooth open/close transitions
- Auto-close on link click

### 2. Form Validation

- Real-time email validation
- Required field checking
- Error/success messages
- Form reset on submit

### 3. Scroll Animations

- Intersection Observer for performance
- Staggered delays (0s, 0.1s, 0.2s, etc.)
- Automatically triggers on page load

### 4. Active Navigation Link

- Automatically highlights current page
- Works with multi-page navigation

## 📝 Form Submission

The contact form includes:

- **Validation**: Name, Email (format), Message
- **Error Messages**: Display validation errors
- **Success Message**: Shows on successful submission
- **Auto-Reset**: Clears form after submission

**To integrate with backend:**
Edit `js/script.js` in the `contactForm` event listener:

```javascript
// Replace this section with your backend call:
// const response = await fetch('/api/contact', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(data)
// });
```

## 🖼️ Images

Place the following images in the `assets/` folder:

- `hero-bg.jpg` — Homepage hero background (recommended: 1920×1080px)
- `about-lab.jpg` — About page laboratory image (recommended: 600×400px)
- `cert-1.jpg` to `cert-4.jpg` — Certification logos (recommended: 200×200px each)

**Quick Placeholder:**
If you don't have images yet, use:

```html
<img
	src="https://via.placeholder.com/1920x1080"
	alt="Hero Background"
/>
```

## 📱 Responsive Design

- **Mobile First** — Built with mobile responsiveness in mind
- **Breakpoints**:
  - Mobile: Default
  - Tablet: 768px and up (`md:`)
  - Desktop: 1024px and up (`lg:`)

## 🔧 Customization Guide

### Change Brand Name

Search and replace "La Digue Formulations" with your company name across all HTML files.

### Update Contact Info

Edit in `html` files:

```html
<p class="text-muted-foreground">+1 (555) 123-4567</p>
<p class="text-muted-foreground">info@ladigueformulations.com</p>
```

### Modify Section Content

All content is plain HTML text — edit directly in the files.

### Add New Pages

1. Create a new `.html` file
2. Copy the navbar and footer from `index.html`
3. Add your content in between
4. Add navigation links to all pages

## 🎯 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ⚠️ Limited (CSS variables not supported)

## ⚡ Performance

- **No JavaScript frameworks** — Lightweight and fast
- **Tailwind CDN** — Minimal CSS payload
- **Lazy animations** — Intersection Observer (efficient)
- **No external dependencies** — Pure vanilla code

## 🔒 Security

- No sensitive data in frontend code
- Form validation on client-side only
- No external API calls (implement on your backend)
- Safe HTML practices throughout

## 📦 Deployment

### Deploy to Netlify (Free)

1. Drag-and-drop the `dist/` folder onto Netlify
2. Site goes live instantly

### Deploy to GitHub Pages

```bash
git add dist/
git commit -m "Deploy static site"
git push origin main
# Enable GitHub Pages in settings → set `dist/` as source
```

### Deploy to Any Web Server

Simply copy all files in `dist/` to your web server's public directory.

## 🛠️ Adding Features

### Add a Contact Form Backend

```javascript
// In js/script.js, modify the form submission:
const response = await fetch('https://your-api.com/contact', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({
		name: formData.name,
		email: formData.email,
		organization: formData.organization,
		message: formData.message,
	}),
});
```

### Add Google Analytics

Add this to the `<head>` of all HTML files:

```html
<script
	async
	src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag() {
		dataLayer.push(arguments);
	}
	gtag('js', new Date());
	gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📄 License

This project is static HTML and can be freely modified and deployed.

## ❓ FAQ

**Q: How do I add more animations?**
A: Add the `animated-section` class to any element and set `--delay: Xs;` for staggered timing.

**Q: Can I use this with a CMS?**
A: Yes! The HTML is fully semantic and can be integrated with any flat-file or database CMS.

**Q: How do I handle form submissions?**
A: Currently, the form validates on the frontend. To save data, implement a backend service (Formspree, Firebase, etc.).

**Q: Is the site SEO-friendly?**
A: Yes! Semantic HTML, proper heading structure, and meta tags are all included.

---

✨ **Enjoy your static, no-framework website!** ✨
