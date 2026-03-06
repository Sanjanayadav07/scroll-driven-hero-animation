# Scroll-Driven Hero Animation

A **scroll-driven Hero Section animation** built with **Next.js**, **GSAP**, and **Tailwind CSS**, inspired by the “WELCOME ITZFIZZ” scroll-car animation.

Experience a **car moving along a road**, letters revealing as the car passes, and animated stats boxes that fade in as you scroll.

---

## 🛠️ Tech Stack

- **Next.js 16** (App Router)  
- **React.js**  
- **GSAP + ScrollTrigger**  
- **Tailwind CSS**  
- **JavaScript (JSX)**  

---

## ⚡ Features

- Scroll-linked **car animation**  
- Dynamic **trail effect** following the car  
- Staggered **letter reveal** in the headline  
- Animated **statistics boxes** appearing on scroll  
- Fully **responsive** and smooth  
- Easy to **customize text, colors, car image, and stats**

---

## 📂 Project Structure

```text
scroll-driven-hero-animation/
├─ app/
│  └─ page.jsx            # Home page importing HeroSection
├─ components/
│  └─ HeroSection.jsx     # Scroll-driven Hero Section
├─ public/
│  └─ car.png             # Car image
├─ styles/
│  └─ globals.css
├─ package.json
└─ README.md
```
## 🚀 Getting Started

# Clone the repository
```
git clone https://github.com/<your-username>/scroll-driven-hero-animation.git
cd scroll-driven-hero-animation
```
# Install dependencies
```
npm install
# or
yarn
```
# Run the development server
```
npm run dev
# or
yarn dev

Open http://localhost:3000
 to see the animation.
```
---

## 🎨 Customization
- Replace public/car.png with your own car image.
- Update headline inside HeroSection.jsx.
- Modify the stats array in HeroSection.jsx to change stats boxes.
- Adjust colors via Tailwind CSS classes or inline styles.

---
## 📌 Deployment (Vercel)
- Push your project to GitHub.
- Go to Vercel
   - → New Project → Import Git Repository.

- Select your repository scroll-driven-hero-animation.
- Vercel detects Next.js automatically → click Deploy.
- Your live URL will be provided, e.g., https://scroll-driven-hero-animation.vercel.app.

---
## 📝 License

- This project is open-source and free to use for personal, educational, or demo purposes.
---
