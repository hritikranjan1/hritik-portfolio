# Hritik Ranjan's Personal Portfolio Website

## Overview

This is a personal portfolio website showcasing the skills, projects, education, experience, certifications, and achievements of Hritik Ranjan, a Computer Science graduate specializing in cybersecurity and artificial intelligence. The website features a modern, responsive design with multiple themes, interactive animations, and a contact form powered by EmailJS.

## Features

- **Multiple Themes**: Six customizable themes (Glitchcore, Cyberpunk, Retro Spy, Neon Noir, Cosmic Galaxy, and Light) with dynamic color schemes and visual effects. Glitchcore is the default theme.
- **Responsive Design**: Fully responsive layout optimized for desktops, tablets, and mobile devices.
- **Interactive Cursor**: Custom cursor with hover effects that change color based on the selected theme and interacted elements.
- **Typewriter Effect**: Dynamic text animation in the hero section cycling through professional titles.
- **Smooth Scrolling**: Navigation links with smooth scrolling for a seamless user experience.
- **Mobile Menu**: Hamburger menu for mobile devices with toggle functionality.
- **Contact Form**: Integrated with EmailJS for sending messages directly from the website.
- **Animations**: Scroll-triggered animations for sections, cards, and elements using Intersection Observer.
- **Social Media Sidebar**: Fixed sidebar with social media links and hover tooltips.
- **Theme Selector**: Fixed sidebar for switching between themes with hover tooltips.
- **Background Effects**: Floating circles and squares with blur effects for visual appeal.

## Installation

To run this project locally, follow these steps:

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A code editor (e.g., VS Code).
- Node.js (optional, for local development server).
- An EmailJS account for contact form functionality.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies** (if using a local server):
   If you plan to use a local development server (e.g., with `live-server`), install it globally:
   ```bash
   npm install -g live-server
   ```

3. **Set Up EmailJS**:
   - Create an account at [EmailJS](https://www.emailjs.com/).
   - Set up a service and template in the EmailJS dashboard.
   - Update the `emailjs.init` user ID in `script.js` with your EmailJS User ID:
     ```javascript
     emailjs.init("your-emailjs-user-id");
     ```
   - Update the `emailjs.sendForm` parameters in `script.js` with your service ID and template ID:
     ```javascript
     emailjs.sendForm('your-service-id', 'your-template-id', this)
     ```

4. **Serve the Project**:
   - Option 1: Open `index.html` directly in a browser.
   - Option 2: Use a local server for live reloading:
     ```bash
     live-server
     ```

5. **Access the Website**:
   Open your browser and navigate to `http://localhost:8080` (or the port provided by your server).

## Usage

- **Theme Switching**: Use the theme selector on the right side of the screen to switch between themes. The Glitchcore theme is set as the default.
- **Navigation**: Click the navigation links in the header to jump to sections (Home, About, Education, Experience, Projects, Certifications, Contact).
- **Mobile Menu**: On mobile devices, click the hamburger icon to toggle the navigation menu.
- **Contact Form**: Fill out the contact form to send a message. A success or error message will appear upon submission.
- **Social Links**: Hover over the social media icons on the left sidebar to view tooltips and click to visit the respective profiles.

## File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── script.js           # JavaScript for interactivity and animations
├── style.css           # CSS for styling and theme definitions
├── assets/             # Folder for images and other static assets
│   ├── images/         # Project and profile images
│   └── icons/          # Icons for skills and other elements
└── README.md           # Project documentation
```

## Technologies Used

- **HTML5**: Structure of the website.
- **CSS3**: Styling with custom properties for theming, animations, and responsive design.
- **JavaScript**: Interactivity, including theme switching, cursor effects, form submission, and animations.
- **EmailJS**: For handling contact form submissions.
- **Font Awesome**: For icons used in social media links, theme toggle, and other elements.
- **Google Fonts**: Poppins font for typography.

## Themes

The website supports six themes, each with unique color schemes and visual effects:
- **Glitchcore Theme**: Vibrant pink and cyan with glitch and scanline animations (default).
- **Cyberpunk Theme**: Neon green and dark background with glowing effects.
- **Retro Spy Theme**: Red and dark blue with a vintage spy aesthetic.
- **Neon Noir Theme**: Pink and teal with a noir-inspired look.
- **Cosmic Galaxy Theme**: Purple and blue with a space-themed background.
- **Light Theme**: Clean, light background for a minimalistic look.

## Customization

To customize the portfolio:
- **Update Content**: Edit `index.html` to modify text, images, or links for sections like About, Projects, or Certifications.
- **Add New Themes**: Add new theme definitions in `style.css` under `:root` and corresponding theme classes. Update `script.js` to handle new themes in the theme-switching logic.
- **Modify Animations**: Adjust animation keyframes in `style.css` or animation logic in `script.js` for different effects.
- **Change Images**: Replace images in the `assets/images/` folder and update references in `index.html`.

## Known Issues

- **EmailJS Setup**: Ensure EmailJS is properly configured with correct service and template IDs to avoid form submission errors.
- **Mobile Responsiveness**: Test thoroughly on various devices to ensure all elements (e.g., sidebar, menu) display correctly.
- **Browser Compatibility**: The website uses modern CSS and JavaScript features. Ensure compatibility with older browsers if needed.

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, reach out via:
- 📧 hritikranjan1722@gmail.com  
- 🌐 [LinkedIn](https://www.linkedin.com/in/hritik-ranjan-05a835230)  
- 💻 [GitHub](https://github.com/hritikranjan1)

© 2025 Hritik Ranjan. All rights reserved.