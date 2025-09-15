import Image from "next/image";
import { ReactNode } from "react";

export default function BulletItem({ children }: { children: ReactNode }) {
  return (
    <div className="group inline-flex w-fit items-center gap-3">
      <Image src="/bullet-point.png" alt="bullet" width={18} height={18} />
      <div className="text-[15px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>{children}</div>
    </div>
  );
}


