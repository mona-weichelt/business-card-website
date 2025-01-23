import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <header className="min-h-32 md:min-h-48 flex justify-center items-center pb-4 md:pb-8 text-4xl md:text-6xl bg-primary text-white font-bold">
        Mona Weichelt
      </header>
      <main className="flex-1 flex flex-col md:items-center">
        <div className="sm:w-[600px] lg:w-[880px] relative -top-8 mx-8 flex flex-row rounded-lg shadow-md bg-white">
          <Image
            width={855}
            height={1140}
            src="/portrait.jpg"
            alt="Portrait of the author"
            className="hidden md:block md:w-64 lg:w-80 h-fit rounded-l-lg"
          />
          <Image
            width={512}
            height={512}
            src="/portrait-cropped.jpg"
            alt="Portrait of the author"
            className="md:hidden w-24 h-fit rounded-l-lg"
          />
          <div className="p-1 md:px-4 md:pb-2 flex flex-col">
            <h1 className="hidden md:block">Frontend Developer</h1>
            <p className="hidden md:block">
              Creating experiences for people is the core of my professional and
              private life. I like to work where technology and the user meet,
              focusing on the user experience and bringing technology to
              practical application.
            </p>
            <p className="md:hidden">Passionate about user experience.</p>
            <p className="md:mt-4 flex-1 hidden md:flex flex-col justify-end">
              <span className="font-bold">Favourite technologies</span> React
              (and Native), Typescript, Tailwind CSS
            </p>
          </div>
        </div>
        <p className="md:hidden">Here is my mobile text</p>
      </main>
      <footer className="min-h-40 flex justify-center items-center bg-secondary">
        Copyright © 2025 Mona Weichelt
      </footer>
    </div>
  );
}
