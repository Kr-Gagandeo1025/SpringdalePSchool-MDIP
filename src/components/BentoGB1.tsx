import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
const BentoGB1 = () => {
  return (
    <main className="flex flex-col gap-5">
      <div className="w-full flex gap-5 md:flex-row flex-col">
        <div className="md:w-2/3 w-full border border-black p-4 rounded-xl flex flex-col">
          <span className="flex gap-4 text-5xl"><ImQuotesLeft className="text-xl font-semibold"/>History<ImQuotesRight className="text-xl"/></span>
          <p className="text-3xl mt-10 w-[80%] self-center font-thin">~Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
        </div>
        <div className="md:w-1/3 w-full border border-black p-4 rounded-xl flex flex-col bg-black text-white">
          <span className="flex gap-4 text-5xl"><ImQuotesLeft className="text-xl font-semibold"/>Vision<ImQuotesRight className="text-xl"/></span>
          <p className="text-3xl mt-10 w-[80%] self-center font-thin">~To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
        </div>
      </div>
      <div className="w-full flex gap-5 md:flex-row flex-col">
        <div className="md:w-1/3 w-full border border-black p-4 rounded-xl flex flex-col bg-black text-white">
          <span className="flex gap-4 text-5xl"><ImQuotesLeft className="text-xl font-semibold"/>Mission<ImQuotesRight className="text-xl"/></span>
          <p className="text-3xl mt-10 w-[80%] self-center font-thin">~To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
        </div>
        <div className="md:w-2/3 w-full border border-black p-4 rounded-xl flex flex-col">
          <span className="flex gap-4 text-5xl"><ImQuotesLeft className="text-xl font-semibold"/>Principal's Message<ImQuotesRight className="text-xl"/></span>
          <p className="text-3xl mt-10 w-[80%] self-center font-thin">~At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
        </div>
      </div>
    </main>
  )
}

export default BentoGB1
