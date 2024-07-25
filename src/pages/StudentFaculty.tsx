import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import facData from "@/constants/FacultyData"
import { BsPerson } from "react-icons/bs"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
import { PiStudentFill } from "react-icons/pi"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import stdcncl from "@/constants/StudentCouncil"
const StudentFaculty = () => {
    const extraAct = ["Music", "Dance", "Drama", "Art", "Sports", "Robotics", "Debate Club", "Science Club"];
    const societies =[ "Literary Society", "Environmental Club", "Astronomy Club", "Coding Club"];
    const studeAch = [
        {"name":"John Smith", "ach": "National Level Math Olympiad Winner"},
        {"name":"Sarah Lee", "ach":"Gold Medalist in State Swimming Championship"},
        {"name":"Tech Innovators Club","ach":"Winners of Inter-School Robotics Competition"}
    ]
  return (
    <main className="flex flex-col mt-10 lg:px-12 px-4 py-2 items-center">
        <span className="text-5xl font-bold flex items-center gap-2 mb-6 pb-2 self-start w-full"><BsPerson/>Faculty</span>
        <div className="flex w-[80%] flex-wrap gap-8 items-center justify-center">
                {
                    facData.map((f,key)=>(
                        <div className="w-fit flex border border-black rounded-xl p-2 justify-between items-start gap-4" key={key}>
                            <Avatar className="h-20 w-auto">
                                <AvatarImage src="https://github.com/shadcn.png" className="h-20 w-auto" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-4" >
                                <span className="text-3xl font-bold">{f.name}</span>
                                <span className="bg-gray-400 px-4 py-2 rounded-xl w-fit text-sm">{f.post}  ({f.edu})</span>
                                <p className="font-thin">~{f.exp}</p>
                            </div>
                        </div>
                    ))
                }
        </div>
        <span className="text-5xl font-bold flex items-center gap-2 mt-10 pb-2 self-start w-full" ><PiStudentFill/>Student</span>
        <div className="flex flex-col w-full items-center mt-10">
            <span className="text-3xl self-start">● Life at Springdale</span>
            <div className="w-full flex justify-center items-center gap-6 mt-10 lg:flex-row flex-col">
                <div className="lg:w-1/2 w-full border border-black rounded-xl p-4 items-center flex-col bg-black text-white">
                    <span className="flex text-2xl gap-3 font-bold"><ImQuotesLeft/>Extracurricular Activities<ImQuotesRight/></span>
                    <div className="flex gap-4 text-lg justify-center flex-wrap">
                        {
                            extraAct.map((e,key)=>(
                                <li key={key}>{e}</li>
                            ))
                        }
                    </div>
                </div>
                <div className="lg:w-1/2 w-full border border-black rounded-xl p-4 items-center flex-col bg-black text-white">
                    <span className="flex text-2xl gap-3 font-bold"><ImQuotesLeft/>Clubs and Societies<ImQuotesRight/></span>
                    <div className="flex gap-4 text-lg justify-center flex-wrap">
                        {
                            societies.map((e,key)=>(
                                <li key={key}>{e}</li>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-full items-center mt-10">
            <span className="text-3xl self-start">● Achievements</span>
            <div className="w-full flex justify-center items-center gap-6 mt-10 lg:flex-row flex-col">
                <Carousel className="lg:w-[50%] w-[80%] flex justify-center mt-10">
                    <CarouselPrevious />
                        <CarouselContent>
                            {
                                studeAch.map((d,key)=>(
                                    <CarouselItem key={key}>
                                        <div className="flex items-start justify-around gap-3 border border-black p-4">
                                            <Avatar className="h-20 w-auto">
                                                <AvatarImage src="https://github.com/shadcn.png" className="h-20 w-auto" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col gap-3">
                                                <span className="text-3xl font-bold flex items-start gap-3"><ImQuotesLeft/>{d.name}<ImQuotesRight/></span>
                                                <span className="border-l-2 italic text-xl pl-3">~ {d.ach}</span>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                    <CarouselNext />
                </Carousel>
                
            </div>
        </div>
        <div className="flex flex-col w-full items-center mt-10">
            <span className="text-3xl self-start">● Student Council</span>
            <div className="flex w-[80%] flex-wrap gap-8 items-center justify-center">
                {
                    stdcncl.map((f,key)=>(
                        <div className="w-fit flex flex-col border border-black rounded-xl p-4 justify-between items-center gap-4" key={key}>
                            <Avatar className="h-20 w-auto">
                                <AvatarImage src="https://github.com/shadcn.png" className="h-20 w-auto" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className="text-3xl font-bold">{f.name}</span>
                            <span className="bg-gray-400 px-4 py-2 rounded-xl w-fit text-sm"><span className="text-xl font-bold">{f.post} </span><br /> ({f.edu})</span>
                        </div>
                    ))
                }
        </div>
        </div>

    </main>
  )
}

export default StudentFaculty
