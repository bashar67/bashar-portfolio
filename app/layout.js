import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://bashar-front-end-developer.netlify.app"),
  title: "Bashar | Front-end Developer | React & Next.js",
  description:
    "Welcome to Bashar's portfolio — a front-end developer specializing in React and Next.js. Explore high-performance UI designs, smooth user experiences, and technically refined web applications. Whether it's optimizing hydration, mastering SSR, or delivering sleek interactive interfaces, every pixel is crafted with precision.",
  keywords: [
    "front-end developer",
    "react developer",
    "next.js developer",
    "UI engineer",
    "web performance",
    "hydration fixes",
    "responsive design",
    "tailwind CSS",
    "javascript engineer",
    "react hooks",
    "next.js routing",
    "portfolio website",
    "SEO optimization",
    "accessibility",
    "progressive enhancement",
    "modern web apps",
    "fast websites",
    "Jamstack",
    "clean architecture",
    "state management",
    "reusable components",
    "animation",
    "UX polish",
    "Bashar Frontend Developer",
  ],
  icons: {
    icon: "/assets/images/logo-icon.png",
    shortcut: "/assets/images/logo-icon.png",
    apple: "/assets/images/logo-icon.png",
  },
  authors: [
    { name: "Bashar", url: "https://bashar-front-end-developer.netlify.app/" },
  ],
  creator: "Bashar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          // google-site-verification is used for verifying ownership of the site with Google Search Console
          name="google-site-verification"
          content="buhDpVK7hT_ml9Z4m4iwsqv7MBJ7xNkmt-qS-ONGyes"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
