import Image from "next/image";

const BodyText = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <p className="mt-4">
        <span className="font-bold">Simple.</span> In both design and
        implementation I work towards well defined and modular goals. Simplicity
        is key for swift iteration and long term maintainability.
      </p>
      <p className="mt-4">
        <span className="font-bold">Elegant.</span> Apps create a combined
        experience of visual and tactile impressions. I ensure that all parts of
        my products enhance this experience and come together to a coherent
        whole.
      </p>
      <p className="mt-4">
        <span className="font-bold">Effective.</span> The technologies we use
        are tools to create an experience for our users. My result driven work
        prioritizes fast deployment of important features first of all.
      </p>
      <p className="flex-1 flex flex-col justify-end">
        <span className="font-bold">Favourite technologies</span> React (and
        Native), Typescript, Tailwind CSS
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
      <main className="flex-1 flex flex-col md:items-center">
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
          <div className="flex-1 p-1 md:px-4 md:pb-2 flex flex-col justify-center">
            <h2 className="text-center">Frontend Developer</h2>
            <BodyText className="flex-1 hidden lg:flex flex-col" />
          </div>
        </div>
        <BodyText className="lg:hidden" />
      </main>
      <footer className="min-h-40 flex justify-center items-center bg-secondary">
        Copyright © 2025 Mona Weichelt
      </footer>
    </div>
  );
}
