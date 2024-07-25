import { BsSend } from "react-icons/bs"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"

const ContactUs = () => {
  const [formName,setFormName] = useState("");
  const [formMessage,setFormMessage] = useState("");
  const [formEmail,setFormEmail] = useState("");

  const handleFormChange = (e:any) => {
    e.preventDefault();
    if(e.target.id=="name"){
      setFormName(e.target.value);
    }else if(e.target.id==="email"){
      setFormEmail(e.target.value);
    }else{
      setFormMessage(e.target.value);
    }
  }
  return (
    <div className='flex flex-col w-full p-4 border-t-2 border-black' id="contact-us">
      <span className="font-bold text-3xl">Contact Us</span>
      <div className="w-full flex lg:flex-row flex-col">
        <div className="lg:w-2/3 w-full flex flex-col lg:border-r-2 border-black">
            <span className="flex gap-4">
                <span className="font-bold">Address:</span> Springdale Public School, 123 Education Lane, Cityville, State, 0000000
            </span>
            <span className="flex gap-4">
                <span className="font-bold">Phone:</span> +1 (123) 456-7890
            </span>
            <span className="flex gap-4">
                <span className="font-bold">Email:</span> info@springdale.edu
            </span>
            <div className="w-full p-4">
              <iframe className="rounded-xl outline-none" width="100%" height="200" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Springdale+(Springdale%20Public%20School)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.gps.ie/">gps vehicle tracker</a>
              </iframe>
            </div>
        </div>
        <div className="flex flex-col ml-2 justify-center items-end lg:w-1/3 w-full  gap-3">
          <Input type="text" placeholder="your name"  className="lg:w-[70%]" id="name" value={formName} onChange={handleFormChange} required/>
          <Input type="email" placeholder="address@mail.com" className="lg:w-[70%]" id="email" value={formEmail} onChange={handleFormChange} required/>
          <Input type="text" placeholder="your message"  className="lg:w-[70%]" id="message" value={formMessage} onChange={handleFormChange} required/>
          <a href={`mailto:springdalepublicschool@email.com?subject=${formName}&body=${formMessage}`}>
            <Button className="flex items-center gap-3">Send <BsSend/></Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
