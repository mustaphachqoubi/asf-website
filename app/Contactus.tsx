import { AiFillHeart, AiFillInstagram, AiFillYoutube, AiFillFacebook } from 'react-icons/ai'
import { useState, useEffect } from 'react'

export const Contactus = () => {
  const icons = [
    {
      icon: <AiFillInstagram />,
      link: "https://google.com",
      id: 1
    },
    {
      icon: <AiFillYoutube />,
      link: "https://google.com",
      id: 2
    },
    {
      icon: <AiFillFacebook />,
      link: "https://google.com",
      id: 3
    }
  ]

  const cards = [
    {
      id: 1,
      img: "https://marketplace.canva.com/EAFFt_DccoA/1/0/1600w/canva-colorful-freelancer-youtube-thumbnail-ucA52BZ7Bqk.jpg",
      sentence: "Visit",
      ariaLabel: "instagram"
    },
    {
      id: 2,
      img: "https://i.ytimg.com/vi/82zWdrmnKME/maxresdefault.jpg",
      sentence: "Watch",
      ariaLabel: "youtube"
    },

    {
      id: 3,
      img: "https://marketplace.canva.com/EAFBCRpOy3g/1/0/1600w/canva-yellow-%26-black-earn-money-youtube-thumbnail-e6QKC2GbjAQ.jpg",
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
        <div className="flex-1 p-6 flex flex-col justify-center  items-center">
            <div className="text-sm md:text-md lg:text-lg xl:text-2xl"> Play to win email and phone number </div>
            
            <div className="w-full h-full flex flex-col-reverse justify-between ">
              <div className="world w-full relative overflow-hidden ">
                <img alt="hunter" src="/hunterth.svg" className="h-full "/>

                <div className=" absolute top-0 bottom-0 left-[40%] right-0 overflow-hidden flex items-center justify-center ">
                  <img alt="bird" src="/bird.svg" className="w-10 md:w-16 absolute top-0 "/>
                  <img alt="bird" src="/bird.svg" className="w-8 md:w-10 absolute top-0  left-0"/>
                  <img alt="bird" src="/bird.svg" className="w-5 md:w-8 absolute top-0 left-5"/>
                  <img alt="bird" src="/bird.svg" className="w-5 md:w-8 absolute top-0 right-5"/>

                  <img alt='email' src="/email.svg" className={`w-8 md:w-12 email ${emailIconDisplay}`} onClick={showEmail}/>
                  <img alt='phone' src="/phone.svg" className={`w-8 md:w-12 absolute left-5 phone ${phoneIconDisplay}`} onClick={showPhone}/>
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

         <div className="flex-1  p-6 flex flex-col md:flex-row">
              <div className="w-full md:w-10 md:h-full flex flex-row md:flex-col gap-5 justify-center ">
             {icons.map(icon => (
             <a key={icon.id} aria-label={icon.ariaLabel} href={icon.link} target="_blank">
              <div  className="border-2 rounded-lg text-lg p-2 flex justify-center items-center w-10 h-10 hover:bg-white hover:text-[#121212] hover:border-[#121212] cursor-pointer duration-300">{icon.icon}</div>
             </a>
            ))} 
          </div>

            <div className="relative md:flex flex-col justify-center gap-10 hidden ">
              <img alt="arrow" src={"/arrowOne.svg"} /> 
              <img alt="arrow" src={"/arrowThree.svg"} /> 
              <img alt="arrow" src={"/arrowTwo.svg"} /> 
            </div>

            <div className="relative flex justify-center gap-10 md:hidden">
              <img alt="arrow" src={"/arrowtwosmall.svg"} /> 
              <img alt="word" src={"/link.svg"} className="absolute left-0 top-2"/> 
              <img alt="word" src={"/by.svg"} className="absolute left-0 bottom-2"/> 
              <img alt="word" src={"/yourself.svg"} className="absolute right-0"/> 
            </div>

            <div className=" md:h-full flex md:flex-col md:justify-center justify-between md:gap-10 items-center ">
             {
                cards.map(card => (
                <div key={card.id} className="border-2 flex flex-col gap-2 rounded-lg w-52 p-1 md:p-2">
                <div className="border-2 rounded-lg overflow-hidden bg-white"><img alt="social media" src={card.img} /></div>
                <div className="duration-300 border-2 rounded-lg hover:text-[#121212] hover:bg-white hover:border-[#121212] text-xs md:text-sm p-1 cursor-pointer">{card.sentence}</div>
              </div>
                ))
              } 
            </div>
        </div>
      </div>

      <div className="text-xs border-t-2 p-2 flex justify-center bg-[#121212] absolute left-0 right-0">
          <p className="flex gap-2 items-center">built with <span className="text-lg"><AiFillHeart /></span> By <a target="_blank" aria-label="mustaphachqoubi" href="https://mustaphachqoubi.me" className='font-bold underline hover:no-underline'>@Mustaphachqoubi</a> </p>
      </div>
    </div>
  </>
  )
}
