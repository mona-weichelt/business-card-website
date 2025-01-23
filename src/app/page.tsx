import Image from "next/image";

const BodyText = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <p className="lg:mt-2">
        Passion to create the best experience for users, an analytic approach,
        and a result oriented mindset are the cornerstones of my work. I strive
        to create clean and maintainable code, and empower my teammates to build
        on top of my work.
      </p>
      <p className="mt-4">
        I thrive in fast paced environments where I can be a driving force of
        the development and take responsibility for features, and love engaging
        in teams with open lines of communication and exchange of knowledge.
      </p>
      <p className="flex-1 mt-4 flex flex-col justify-end">
        <span className="font-bold">Favourite technologies</span> ReactJS and
        ReactNative, Typescript, Tailwind CSS
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <header className="min-h-32 md:min-h-48 flex justify-center items-center pb-4 md:pb-8 text-4xl md:text-6xl bg-primary text-white font-bold">
        Mona Weichelt
      </header>
      <main className="flex-1 pb-8 flex flex-col md:items-center">
        <div className="md:w-[680px] lg:w-[880px] relative -top-8 mx-8 flex flex-row rounded-lg shadow-md bg-white">
          <Image
            width={449}
            height={602}
            src="/portrait-basic.jpg"
            alt="Portrait of the author"
            className="hidden lg:block lg:w-64 h-fit rounded-l-lg"
          />
          <Image
            width={512}
            height={512}
            src="/portrait-cropped.jpg"
            alt="Portrait of the author"
            className="lg:hidden w-24 h-fit rounded-l-lg"
          />
          <div className="flex-1 lg:p-4 flex flex-col justify-center">
            <h2 className="hidden lg:block">Frontend Developer</h2>
            <h3 className="text-center lg:hidden">Frontend Developer</h3>
            <BodyText className="flex-1 hidden lg:flex flex-col" />
          </div>
        </div>
        <BodyText className="lg:hidden mx-8" />
      </main>
      <footer className="min-h-40 flex justify-center items-center bg-secondary">
        Copyright © 2025 Mona Weichelt
      </footer>
    </div>
  );
}
