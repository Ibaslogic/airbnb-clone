import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';

import { Toaster } from 'react-hot-toast';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'airbnb',
  description: 'This is airbnb clone',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <Toaster />
        <SearchModal />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar {...{ currentUser }} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
