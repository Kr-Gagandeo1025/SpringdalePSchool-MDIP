import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Academics = () => {
  const primary = [ "English", "Mathematics", "Science", "Social Studies", "Art", "Physical Education"];
  const secondary = ["English", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Studies", "Computer Science", "Physical Education", "Art"];
  const science = ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English"];
  const commerce = ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"];
  return (
    <div className="p-4 flex flex-col items-center">
      <span className="lg:text-5xl text-3xl font-bold">Curriculum</span>
      <div className="flex flex-col items-center justify-center mt-10 w-[100%] gap-10">
        <div className="flex flex-col gap-4 lg:border-r border-black lg:w-[50%] w-[100%] lg:self-start px-10">
          <span className="lg:text-3xl text-2xl">Primary (Grade 1-5) </span>
          <div className="flex gap-4 flex-wrap lg:w-[50%] w-full justify-start">
            {
              primary.map((p,key)=>(
                <span className="bg-black bg-opacity-10 p-2 text-sm rounded-xl" key={key}>{p}</span>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:border-l border-black lg:w-[50%] w-[100%] lg:self-end px-10 items-end">
          <span className="lg:text-3xl text-2xl">Secondary (Grade 6-10) </span>
          <div className="flex gap-4 flex-wrap lg:w-[50%] w-full justify-end">
            {
              secondary.map((p,key)=>(
                <span className="bg-black bg-opacity-10 p-2 text-sm rounded-xl" key={key}>{p}</span>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:border-r border-black lg:w-[50%] w-[100%] lg:self-start px-10">
          <span className="lg:text-3xl text-2xl">Senior Secondary (Grades 11-12) </span>
          <div className="flex justify-between w-full items-center gap-4">
            <div className="flex gap-4 lg:w-[30%] w-[50%] justify-start flex-col">
              <span className="text-xl">science</span>
              <div className="flex flex-wrap gap-4">
                {
                  science.map((p,key)=>(
                    <span className="bg-black bg-opacity-10 p-2 text-sm rounded-xl" key={key}>{p}</span>
                  ))
                }
              </div>
            </div>
            <div className="flex gap-4 lg:w-[30%] w-[50%] justify-start flex-col">
              <span className="text-xl">commerce</span>
              <div className="flex flex-wrap gap-4">
                {
                  commerce.map((p,key)=>(
                    <span className="bg-black bg-opacity-10 p-2 text-sm rounded-xl" key={key}>{p}</span>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-start gap-2">
        <span className="mt-20 lg:text-5xl text-3xl font-bold">Technical Methodologies</span>
        <p className="text-2xl inline"><ImQuotesLeft className="text-sm"/>We use a blend of traditional and modern teaching techniques to cater to different learning styles.<ImQuotesRight className="text-sm"/></p>
      </div>
      <div className="flex flex-col self-end gap-2">
        <span className="mt-20 lg:text-5xl text-3xl font-bold">Educational Resources</span>
        <p className="inline text-2xl"><ImQuotesLeft className="text-sm"/>Digital classrooms, interactive learning modules, and access to online educational platforms.<ImQuotesRight className="text-sm"/></p>
      </div>
    </div>
  )
}

export default Academics
