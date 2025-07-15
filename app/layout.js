import Head from "next/head";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "Bashar | Front-End Developer & UI Specialist",
  description:
    "Discover Bashar's portfolio, where creativity meets code. Specialized in Next.js, API integration, and responsive web design with React Bootstrap and tailwindcss.",
  keywords:
    "Front-End Developer, Next.js, React, GitHub API, Responsive Design, React Bootstrap, HTML, CSS, JavaScript, Portfolio, Web Development Egypt",
  authors: [{ name: "Bashar", url: "https://yourdomain.com" }],
  icons: {
    icon: [
      {
        url: "/assets/images/logo-icon.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/assets/images/logo-icon.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
  },

  openGraph: {
    title: "Bashar | Creative Front-End Developer",
    description: "Explore Bashar's cutting-edge projects and web applications.",
    url: "https://www.linkedin.com/in/bashar-yousri-330882234",
    siteName: "Bashar Dev",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
