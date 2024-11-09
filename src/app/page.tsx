"use client"
import React, { useEffect, useState } from 'react';
import Navbar from "@/app/components/Navbar/Navbar";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
