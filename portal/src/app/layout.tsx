import '@/styles/globals.module.css'; // Make sure this points to your global styles
import Navbar from '@/components/Navbar'; // Import the Navbar component

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
