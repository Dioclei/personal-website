import LandingPageButton from "./components/LandingPageButton";

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-8'>
      <div className="text-3xl py-16">
        Welcome, Traveller.
      </div>
      <LandingPageButton>
        My Projects
      </LandingPageButton>
      <LandingPageButton>
        NUS Course Reviews
      </LandingPageButton>
      <LandingPageButton>
        More About Me
      </LandingPageButton>
    </div>
  );
}
