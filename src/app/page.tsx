'use client';
import Image from "next/image";
import { useSession, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session} = useSession();

  return (
    <div>
      
    </div>
  );
}
