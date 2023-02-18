'use client';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Header/Navbar';
import { useEffect } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const useTW = () => {
      import('tw-elements');
    };
    useTW();
  }, []);

  return (
    <html lang="en">
      {/*
         <head /> will contain the components returned by the nearest parent
         head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
       */}
      <head />
      <body className="max-w-screen-xl mx-auto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
