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
  // useEffect(() => {
  //   const useTW = () => {
  //     import('tw-elements');
  //   };
  //   useTW();
  // }, []);

  return (
    <html lang="en">
      {/*
         <head /> will contain the components returned by the nearest parent
         head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
       */}
      <head />
      <body className="min-h-screen bg-mineShaftBlack">
        <Navbar />
        <main className="min-h-[calc(100vh-788px)] dt:min-h-[calc(100vh-557px)] max-w-screen-xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
