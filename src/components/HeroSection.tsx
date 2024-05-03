import Link from "next/link"
import { Spotlight } from "./ui/spotlight"
import { Button } from "./ui/moving-border";
import { TypewriterEffect } from "./ui/typewriter-effect";


function HeroSection() {
    const words = [
        {
          text: "I'm",
        },
        {
          text: "a",
        },
        {
          text: "passionate",
        },
        {
          text: "Web Developer,",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
  return (
    <div className="h-auto lg:h-[50rem] md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="p-4 mt-50 relative z-10 w-full text-center justify-center items-center ">
            
            <h1 className="mt-30 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            <TypewriterEffect  words={words} />
                dedicated to creating innovative and user-friendly digital experiences.
            </h1>
            <p className="mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Welcome to my portfolio website! Feel free to explore and get in touch if you have any inquiries or collaboration opportunities.
            </p>
            <div className="mt-4">
                <Link href={"/resume"}>
                    <Button>
                    Resume
                    </Button>
                </Link>
            </div>
        </div>
    </div>
        
  )
}

export default HeroSection