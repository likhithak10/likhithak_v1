import NavBar from "./components/NavBar";
import BulletItem from "./components/BulletItem";
import NameTyper from "./components/NameTyper";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar active="home" />
      <main className="container grid grid-cols-[auto_1fr_auto] py-6">
        <div className="col-start-2">
          <NameTyper
            englishText="likhitha koppula"
            teluguText="లిఖిత"
            className="text-[16px] font-medium italic text-foreground mb-8"
            style={{ fontFamily: 'var(--font-inter)' }}
          />
          <div className="flex flex-col items-start gap-6">
            <BulletItem>
              <a href="https://uwaterloo.ca/systems-design-engineering/" target="_blank" rel="noopener noreferrer" className="text-sde bullet-link">Systems Design Engineering</a> @ University of Waterloo
            </BulletItem>
            <BulletItem>
              Software Engineering Intern @ <a href="https://www.freedommobile.ca/en-CA" target="_blank" rel="noopener noreferrer" className="text-freedom bullet-link">Freedom Mobile</a>
            </BulletItem>
            <BulletItem>
              Humanoids @ <a href="https://uwaterloo.ca/cerc-human-centred-robotics-machine-intelligence/" target="_blank" rel="noopener noreferrer" className="text-cerc bullet-link">CERC Robotics and Machine Intelligence</a>
            </BulletItem>
            <BulletItem>
              Prev. Data Engineering Intern @ <a href="https://www.definityfinancial.com/English/overview/default.aspx" target="_blank" rel="noopener noreferrer" className="text-definity bullet-link">Definity</a>
            </BulletItem>
          </div>
          <div className="mt-16 space-y-3" style={{ fontFamily: 'var(--font-inter)' }}>
            <p className="text-muted">an engineering student who spends their time exploring various tech and documenting special moments</p>
            <p className="text-muted">this portfolio is an archive of everything I have made so far</p>
            <p className="text-muted">look around and feel free to reach out</p>
          </div>
        </div>
      </main>
    </div>
  );
}
