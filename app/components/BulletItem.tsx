import Image from "next/image";
import { ReactNode } from "react";

export default function BulletItem({ children }: { children: ReactNode }) {
  return (
    <div className="group inline-flex w-fit items-center gap-3">
      <span
        aria-hidden="true"
        className="block"
        style={{
          width: 18,
          height: 18,
          WebkitMaskImage: 'url(/bullet-point.png)',
          maskImage: 'url(/bullet-point.png)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          backgroundColor: 'var(--foreground)'
        }}
      />
      <div className="text-[15px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>{children}</div>
    </div>
  );
}


