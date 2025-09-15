import Image from "next/image";
import Link from "next/link";

type NavBarProps = {
  active?: "home" | "creative";
};

export default function NavBar({ active }: NavBarProps) {
  return (
    <header className="container grid grid-cols-[auto_1fr_auto] items-center py-6">
      <nav className="flex items-center gap-4 col-start-1">
        <Link href="/" className={`nav-link ${active === 'home' ? 'nav-link-light' : 'nav-link-muted'}`}>about</Link>
        <Link href="/creative" className="nav-link nav-link-accent">creative</Link>
      </nav>
      <div className="flex items-center gap-3 col-start-3 justify-self-end">
        <a href="https://x.com/likhithakoppula" target="_blank" rel="noopener noreferrer" aria-label="X profile" className="icon-link">
          <Image src="/twitter.png" alt="X" width={24} height={24} />
        </a>
        <a href="https://github.com/likhithak10" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="icon-link">
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </a>
        <a href="https://www.linkedin.com/in/likhitha-koppula/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="icon-link">
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </a>
        <a href="mailto:l2koppula@uwaterloo.ca" aria-label="Email" className="icon-link">
          <Image src="/mail.png" alt="Email" width={24} height={24} />
        </a>
      </div>
    </header>
  );
}


