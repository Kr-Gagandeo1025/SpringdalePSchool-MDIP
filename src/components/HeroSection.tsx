import { FaArrowCircleRight } from "react-icons/fa"
import { Button } from "./ui/button"

const HeroSection = () => {
  return (
    <main className="flex w-full h-full p-6 lg:mt-14 mt-6 gap-4">
      <div className="lg:w-1/2 w-full h-full flex flex-col gap-14">
        <span className="text-7xl xl:text-9xl font-normal">Springdale Public School</span>
        <span className="font-thin text-2xl xl:text-4xl ">&apos;&apos;Welcome to Springdale Public School, where we nurture young minds for a brighter future.&apos;&apos;</span>
        <a href="/admission">
          <Button className="px-4 py-2 rounded-xl border border-black w-fit flex items-center gap-2 cursor-pointer hover:bg-black hover:bg-opacity-10 hover:text-black">Get Admission <FaArrowCircleRight/></Button>
        </a>
      </div>
      <div className="w-1/2 items-center justify-end h-full lg:flex hidden">
        <img src="/images/logo-hero.jpg" className="max-h-[650px] w-auto rounded-xl"/>
      </div>
    </main>
  )
}

export default HeroSection
