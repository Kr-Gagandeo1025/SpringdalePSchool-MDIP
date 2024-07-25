import { Button } from "@/components/ui/button"
import { IoCloudDownloadOutline } from "react-icons/io5"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import date from "@/constants/ImpDate"
import { CiCalendarDate } from "react-icons/ci"

const Admission = () => {
  return (
    <main className="flex lg:p-12 p-4 flex-col gap-12">
        <div className="flex flex-col gap-4">
            <span className="text-5xl font-bold">Process</span>
            <blockquote className="mt-6 border-l-2 pl-6 italic text-2xl">Admission forms are available for download. Submit the completed form along with required documents at the school office.</blockquote>
        </div>
        <div className="flex flex-col gap-4 self-end items-end">
            <span className="text-5xl font-bold">Criteria</span>
            <blockquote className="text-2xl mt-6 border-l-2 pl-6 italic">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</blockquote>
        </div>
        <Button className="w-fit self-center text-3xl p-10 font-thin rounded-full flex items-center gap-4">Download Form <IoCloudDownloadOutline/></Button>
        <div className="flex flex-col ">
            <span className="text-5xl font-bold flex items-center gap-4"><CiCalendarDate/>Important Dates</span>
            <div className="flex flex-wrap gap-4 mt-10">
                {
                    date.map((d,key)=>(
                        <Alert key={key} className="w-fit">
                            <AlertTitle className="text-2xl flex items-center gap-4"> <span className="text-red-500 animate-pulse text-3xl">●</span> {d.date}</AlertTitle>
                            <AlertDescription className="text-xl italic pl-4 border-l-2">
                                {d.name}
                            </AlertDescription>
                        </Alert>
                    ))
                }
            </div>
        </div>
    </main>
  )
}

export default Admission
