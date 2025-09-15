import NavBar from "../components/NavBar";

export default function CreativePage() {
  return (
    <div className="min-h-screen">
      <NavBar active="creative" />
      <main className="container grid grid-cols-[auto_1fr_auto] py-6">
        <div className="col-start-2">
          <h1 className="text-[16px] font-medium italic text-[#D9D9D9] mb-8" style={{ fontFamily: 'var(--font-inter)' }}>creative</h1>
          <div className="space-y-3" style={{ fontFamily: 'var(--font-inter)' }}>
            <p className="text-[#D9D9D9]">I vlog everything and take photos constantly</p>
            <p className="text-[#D9D9D9]">I haven&apos;t found a way to share them yet but I&apos;m designing a platform to do so</p>
            <p className="text-[#D9D9D9]">coming soon :)</p>
          </div>
        </div>
      </main>
    </div>
  );
}


