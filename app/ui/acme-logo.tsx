import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { inter } from '@/app/ui/fonts';
import Image from "next/image";

export default function AcmeLogo() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none text-white`}
    >
      <Image src="/logo.jpg" alt="No image" width={45} height={45} />
      <p className="font-bold">Hiệu giặt Miên</p>
    </div>
  );
}
