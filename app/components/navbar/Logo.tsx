'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push('/')}
      alt="logo"
      className="hidden md:block cursor-pointer"
      width="100"
      height="31"
      src="/images/logo.png"
      priority
    />
  );
};

export default Logo;
