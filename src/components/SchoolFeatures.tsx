import SchFeData from "@/constants/SchoolF"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
const SchoolFeatures = () => {
  return (
    <div className="flex flex-col gap-12 mt-20">
        {/* <span className="w-full mt-20 mb-4 border-b border-black text-5xl">Infrastructure and Facilities</span> */}
        {
            SchFeData.map((s,key)=>(
                (key%2!==0)?
                    <div className="w-full flex gap-4 items-center md:flex-row flex-col justify-between" key={key}>
                        <img src={s.img} alt="sch-f" className="xl:h-[400px] h-[200px] w-auto transition-all ease-in-out duration-1000 hover:rounded-full"/>
                        <span className="lg:text-7xl text-3xl font-thin uppercase md:w-2/3 w-full"><ImQuotesLeft/>{s.title}<ImQuotesRight/></span>
                    </div>
                :
                    <div className="w-full flex gap-4 items-center md:flex-row flex-col-reverse justify-between" key={key}>
                        <span className="lg:text-7xl text-3xl font-thin uppercase md:w-2/3 w-full"><ImQuotesLeft/>{s.title}<ImQuotesRight/></span>
                        <img src={s.img} alt="sch-f" className="xl:h-[400px] h-[200px] w-auto transition-all ease-in-out duration-1000 hover:rounded-full"/>
                    </div>  
            ))
        }
    </div>
  )
}

export default SchoolFeatures
