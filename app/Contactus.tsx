import { AiFillHeart, AiFillInstagram, AiFillYoutube, AiFillFacebook } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import Image from "next/image"

export const Contactus = () => {
  const IMAGE_W_AND_H =300

  interface IconsTypes {
    icon: JSX.Element,
    link: string,
    id: any,
    ariaLabel: string
  }

  interface CardsTypes {
    id: any,
    img: string,
    sentence: string,
    ariaLabel: string
  }

  const icons: IconsTypes[] = [
    {
      icon: <AiFillInstagram />,
      link: "https://google.com",
      id: 1,
      ariaLabel: "instagram"
    },
    {
      icon: <AiFillYoutube />,
      link: "https://google.com",
      id: 2,
      ariaLabel: "youtube"
    },
    {
      icon: <AiFillFacebook />,
      link: "https://google.com",
      id: 3,
      ariaLabel: "facebook"
    }
  ]

  const cards: CardsTypes[] = [
    {
      id: 1,
      img: "/instagram.jpeg",
      sentence: "Visit",
      ariaLabel: "instagram"
    },
    {
      id: 2,
      img: "/youtube.jpeg",
      sentence: "Watch",
      ariaLabel: "youtube"
    },

    {
      id: 3,
      img: "/facebook.jpeg",
      sentence: "Visit",
      ariaLabel: "facebook"
    }
  ]

  const [ emailDisplay, setEmailDisplay ] = useState("hidden")
  const [ phoneDisplay, setPhoneDisplay] = useState("hidden")
  const [ emailIconDisplay, setEmailIconDisplay ] = useState("flex")
  const [ phoneIconDisplay, setPhoneIconDisplay] = useState("flex")
  const [ congratsDisplay, setCongratsDisplay] = useState("hidden")

  const showEmail = () => {
    setEmailDisplay('flex')
  }

  const showPhone = () => {
    setPhoneDisplay("flex")
  }
  

  useEffect(() => {

    emailDisplay === "flex" && setEmailIconDisplay('hidden')
    phoneDisplay === "flex" && setPhoneIconDisplay('hidden')

    emailDisplay === "flex" && phoneDisplay === "flex" && setCongratsDisplay('flex')

  }, [emailDisplay, phoneDisplay])

  return (
  <>
    <div className="w-full h-full">
      <div className='w-full h-full flex flex-col md:grid grid-cols-1 divide-y-2 md:divide-y-0 md:grid-cols-2 md:divide-x-2'>
        <div className="h-auto flex gap-2 flex-col items-center justify-center">
            <div className="text-sm md:text-md lg:text-lg xl:text-2xl p-2 md:p-4"> Play to win email and phone number </div>
            
            <div className="w-full h-full flex flex-col-reverse justify-between ">
              <div className="world w-full relative overflow-hidden ">
                <Image width={300} height={300}  alt="hunter" src="/hunterth.svg" className="md:h-full md:w-full" />

                <div className=" absolute top-0 bottom-0 left-[40%] right-0 overflow-hidden flex items-center justify-center ">
                  <Image  width={50} height={50} alt="bird" src="/bird.svg" className="w-10 md:w-16 absolute top-0 "/>
                  <Image  width={50} height={50} alt="bird" src="/bird.svg" className="w-8 md:w-10 absolute top-0  left-0"/>
                  <Image  width={50} height={50} alt="bird" src="/bird.svg" className="w-5 md:w-8 absolute top-0 left-5"/>
                  <Image  width={50} height={50} alt="bird" src="/bird.svg" className="w-5 md:w-8 absolute top-0 right-5"/>

                  <Image  width={50} height={50} alt='email' src="/email.svg" className={`w-8 md:w-12 email ${emailIconDisplay}`} onClick={showEmail}/>
                  <Image  width={50} height={50} alt='phone' src="/phone.svg" className={`w-8 md:w-12 absolute left-5 phone ${phoneIconDisplay}`} onClick={showPhone}/>
                  <p className={`${congratsDisplay} justify-center`}>
                  Congrats !
                </p>

                </div>
                
              </div>
              <div className="text-xs flex flex-col justify-center h-20">
                <p className={`${emailDisplay} justify-center`}>
                  gmail@gmail.com
                </p>
                <p className={`${phoneDisplay} justify-center`}>
                  +2126988900
                </p>

                </div>
            </div>

          </div>

         <div className="flex-1 p-6 flex flex-col md:flex-row">
              <div className="w-full md:w-10 md:h-full flex flex-row md:flex-col gap-5 justify-center ">
             {icons.map(icon => (
             <a key={icon.id} aria-label={icon.ariaLabel} href={icon.link} target="_blank">
              <div  className="border-2 rounded-lg text-lg p-2 flex justify-center items-center w-10 h-10 hover:bg-white hover:text-[#121212] hover:border-[#121212] cursor-pointer duration-300">{icon.icon}</div>
             </a>
            ))} 
          </div>

            <div className="relative md:flex flex-col justify-center gap-10 hidden ">
              <Image width={100} height={100} alt="arrow" src={"/arrowOne.svg"} /> 
              <Image width={100} height={100} alt="arrow" src={"/arrowThree.svg"} /> 
              <Image width={100} height={100} alt="arrow" src={"/arrowTwo.svg"} /> 
            </div>

            <div className="relative flex justify-center gap-10 md:hidden">
              <Image width={20} height={20} alt="arrow" src={"/arrowtwosmall.svg"} /> 
              <Image width={40} height={40} alt="word" src={"/link.svg"} className="absolute left-0 top-2 "/> 
              <Image width={20} height={20}  alt="word" src={"/by.svg"} className="absolute left-0 bottom-2"/> 
              <Image width={50} height={50}  alt="word" src={"/yourself.svg"} className="absolute right-0"/> 
            </div>

            <div className=" md:h-full flex md:flex-col md:justify-center justify-between md:gap-10 items-center ">
             {
                cards.map(card => (
                <div key={card.id} className="border-2 flex flex-col gap-2 rounded-lg w-52 p-1 md:p-2">
                <div className="border-2 rounded-lg overflow-hidden bg-white"><Image width={IMAGE_W_AND_H} height={IMAGE_W_AND_H} alt="social media " src={card.img} /></div>
                <div className="duration-300 border-2 rounded-lg hover:text-[#121212] hover:bg-white hover:border-[#121212] text-xs md:text-sm p-1 cursor-pointer">{card.sentence}</div>
              </div>
                ))
              } 
            </div>
        </div>
      </div>

      <div className="text-xs border-t-2 p-2 flex justify-center bg-[#121212] absolute left-0 right-0 ">
          <p className="flex gap-2 items-center">built with <span className="text-lg"><AiFillHeart /></span> By <a target="_blank" aria-label="mustaphachqoubi" href="https://mustaphachqoubi.me" className='font-bold underline hover:no-underline'>@Mustaphachqoubi</a> </p>
      </div>
    </div>
  </>
  )
}
