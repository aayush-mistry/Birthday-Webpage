# Interactive Birthday Experience 🎉

This is a beautiful, interactive, and emotional single-page website built as a birthday surprise. It takes the user on a chronological journey through random photos, school memories, an apology, and finally a dramatic birthday reveal with custom music and confetti.

## 🚀 Tech Stack

- **React 19**
- **Vite** (Build Tool)
- **Tailwind CSS v4** (Styling & Glassmorphism)
- **Framer Motion** (Cinematic Animations & Transitions)
- **Canvas Confetti** (Birthday Reveal Particle Effects)
- **Lucide React** (Icons)

## 📁 Project Structure

The project is structured linearly to represent the flow of the birthday surprise:

```text
src/
├── components/
│   ├── OpeningScreen.tsx   # "I made something for you..."
│   ├── PhotoGallery.tsx    # Random photo gallery with Polaroid effect
│   ├── SchoolMemories.tsx  # Scrollable scrapbook of school memories
│   ├── ApologySection.tsx  # Genuine apology message area
│   ├── BirthdayReveal.tsx  # The final birthday reveal with confetti
│   └── MusicController.tsx # Global mute/unmute button
├── App.tsx                 # Main state manager (controls the flow)
└── index.css               # Global Tailwind CSS and custom theme configurations
```

## 🖼️ Adding Your Media

To make the website yours, you need to add your own media files. The codebase looks for these files in the `public/assets/` directory.

### 1. Add Photos
Create a folder at `public/assets/images/` and add your images. By default, the code expects:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`
- `photo5.jpg`
- `final-photo.jpg`

*(Note: You can easily change the file names or add more by modifying the `photos` array inside `src/components/PhotoGallery.tsx` and the image source in `src/components/BirthdayReveal.tsx`)*

### 2. Add Background Music
Create a folder at `public/assets/audio/` and place your background music there. By default, the code expects:
- `happy-birthday.mp3`

*(Note: Audio will automatically start when the user clicks the "Start" button on the first screen. The volume automatically increases when they reach the Birthday Reveal).*

## ✍️ Customizing the Text

You'll need to update the placeholder text with your real messages:

1. **Photo Captions**: Edit the `captions` array in `src/components/PhotoGallery.tsx`.
2. **School Memories**: Edit the placeholder memories in `src/components/SchoolMemories.tsx`.
3. **Apology Message**: Edit the placeholder text in `src/components/ApologySection.tsx`.
4. **Name**: Add her name in `src/components/BirthdayReveal.tsx`.

## 🛠️ Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser to `http://localhost:5173`.

## ✨ Building for Production

When you are ready to send this to her, you can build the project for production:

```bash
npm run build
```

The output will be in the `dist/` folder, which you can host for free on platforms like Vercel, Netlify, or GitHub Pages.
