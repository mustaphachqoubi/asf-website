export const Whatwedo = () => {
  return (
    <>
      <div className="flex-1 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="flex-1 h-full flex justify-center items-center">one</div>
        <div className=" flex-1 h-full flex justify-center items-center w-full"> 
          <div className="flex grid grid-cols-3 w-full h-full md:grid-cols-1 divide-x md:divide-x-0 md:divide-y divide-dashed">
            <div>one</div>
            <div>one</div>
            <div>one</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-between items-center z-50">
        <div className=" flex-1 h-full flex justify-center items-center">two</div>
        <div className=" flex-1 h-full flex justify-center items-center">one</div>
      </div>
      <div className="absolute gradient w-80 h-80 rounded-full bottom-0 right-0 blur-2xl z-10" />
    </>
  )
}
