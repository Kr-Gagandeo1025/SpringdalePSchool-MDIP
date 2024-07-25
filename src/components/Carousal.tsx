import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import data from "@/constants/CarousalData";
import CarousalCard from "./CarousalCard";
const Carousal = () => {
  return (
    <div className="flex w-full justify-start flex-col items-center p-6 ">
        <span className="self-start text-5xl border-b border-black w-full pb-2 font-bold">Highlights</span>
        <Carousel className="w-[70%] flex justify-center mt-10">
        <CarouselPrevious />
        <CarouselContent>
            {
                data.map((d,key)=>(
                    <CarouselItem key={key}><CarousalCard title={d.title} desc={d.desc} img={d.img}/></CarouselItem>
                ))
            }
        </CarouselContent>
        <CarouselNext />
        </Carousel>
    </div>
  )
}

export default Carousal
