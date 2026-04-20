import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export const metadata = {
  title: 'Sprout — Uniform & Linen Solutions',
  description: 'Sprout provides premium B2B uniform and linen solutions for healthcare, hospitality, and education sectors across Pakistan.',
  icons: {
    icon: '/images/logosprout.jpeg',
    apple: '/images/logosprout.jpeg',
  },
  openGraph: {
    title: 'Sprout — Uniform & Linen Solutions',
    description: 'We don\'t just stitch uniforms — we design confidence, identity, and functionality for your workforce.',
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
