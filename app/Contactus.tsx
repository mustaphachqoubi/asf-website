import { AiFillHeart, AiFillInstagram, AiFillYoutube, AiFillFacebook } from 'react-icons/ai'

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
      sentence: "Visit"
    },
    {
      id: 1,
      img: "https://i.ytimg.com/vi/82zWdrmnKME/maxresdefault.jpg",
      sentence: "Watch"
    },

    {
      id: 1,
      img: "https://marketplace.canva.com/EAFBCRpOy3g/1/0/1600w/canva-yellow-%26-black-earn-money-youtube-thumbnail-e6QKC2GbjAQ.jpg",
      sentence: "Visit"
    },

  ]
  return (
  <>
    <div className="w-full h-full">
      <div className='w-full h-full flex flex-col md:grid grid-cols-1 divide-y-2 md:divide-y-0 md:grid-cols-2 md:divide-x-2'>
        <div className="flex-1 p-6 flex flex-col justify-between md:justify-center md:gap-60 items-center">
            <div className="text-sm md:text-md lg:text-lg xl:text-2xl"> Play to win email and phone number </div>
            <div>game</div>
        </div>

         <div className="flex-1  p-6 flex flex-col md:flex-row">
              <div className="w-full md:w-10 md:h-full flex flex-row md:flex-col gap-5 justify-center ">
             {icons.map(icon => (
             <a href={icon.link} target="_blank">
              <div key={icon.id} className="border-2 rounded-lg text-lg p-2 flex justify-center items-center w-10 h-10 hover:bg-white hover:text-[#121212] hover:border-[#121212] cursor-pointer duration-300">{icon.icon}</div>
             </a>
            ))} 
          </div>

            <div className="relative md:flex flex-col justify-center gap-10 hidden ">
              <img src={"/arrowOne.svg"} /> 
              <img src={"/arrowThree.svg"} /> 
              <img src={"/arrowTwo.svg"} /> 
            </div>

            <div className="relative flex justify-center gap-10 md:hidden">
              <img src={"/arrowtwosmall.svg"} /> 
              <img src={"/link.svg"} className="absolute left-0 top-2"/> 
              <img src={"/by.svg"} className="absolute left-0 bottom-2"/> 
              <img src={"/yourself.svg"} className="absolute right-0"/> 
            </div>

            <div className=" md:h-full flex md:flex-col md:justify-center justify-between md:gap-10 items-center ">
             {
                cards.map(card => (
                <div key={card.id} className="border-2 flex flex-col gap-2 rounded-lg w-52 p-1 md:p-2">
                <div className="border-2 rounded-lg overflow-hidden"><img src={card.img} /></div>
                <div className="duration-300 border-2 rounded-lg hover:text-[#121212] hover:bg-white hover:border-[#121212] text-xs md:text-sm p-1 cursor-pointer">{card.sentence}</div>
              </div>
                ))
              } 
            </div>
        </div>
      </div>

      <div className="text-xs border-t-2 p-2 flex justify-center bg-[#121212] absolute left-0 right-0">
          <p className="flex gap-2 items-center">built with <span className="text-lg"><AiFillHeart /></span> By <a target="_blank" href="https://mustaphachqoubi.me" className='font-bold underline hover:no-underline'>@Mustaphachqoubi</a> </p>
      </div>
    </div>
  </>
  )
}
