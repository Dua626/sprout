import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export const metadata = {
  title: 'Sprout — Stitching Stories',
  description: 'Tailored solutions for your business — a partner you can trust. B2B uniform and linen solutions for healthcare, hospitality, education, and industry across Pakistan.',
  icons: {
    icon: '/images/logosprout.jpeg',
    apple: '/images/logosprout.jpeg',
  },
  openGraph: {
    title: 'Sprout — Stitching Stories',
    description: 'From design to delivery, we partner with businesses across Pakistan to create uniforms that reflect their brand, support their teams, and simplify their operations.',
    images: [{ url: '/images/logosprout.jpeg' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
