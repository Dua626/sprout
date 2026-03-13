import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Sprout — Wear the Growth',
  description: 'Sprout is a soft, intentional clothing brand for those who dress with meaning.',
  icons: {
    icon: '/images/logosprout.jpeg',
    apple: '/images/logosprout.jpeg',
  },
  openGraph: {
    title: 'Sprout — Wear the Growth',
    description: 'Soft, intentional clothing rooted in nature.',
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
      </body>
    </html>
  );
}
