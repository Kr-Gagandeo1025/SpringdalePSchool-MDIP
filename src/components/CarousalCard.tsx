import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

interface CCardProps{
    title:string;
    desc:string;
    img:string
}

const CarousalCard:React.FC<CCardProps> = ({title,desc,img}) => {
  return (
    <div className={`justify-around p-4 rounded-xl text-black h-[400px] max-w-full flex items-start gap-6 lg:flex-row flex-col`}>
        <div className="flex flex-col">
            <span className="text-5xl font-bold w-fit"><ImQuotesLeft/>{title}</span>
            <span className="inline gap-2 text-xl w-fit">~{desc}<ImQuotesRight/></span>
        </div>
        <img src={img} className="h-[400px]"/>
    </div>
  )
}

export default CarousalCard
