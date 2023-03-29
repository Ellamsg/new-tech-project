export default function Frequentlyasked(props) {
  return (
  

        <div className="relative w[400px]  overflow-hidden ">
          <input
            type="checkbox"
            className="absolute peer top-0  inset-x-0 
               w-full h-[55px] opacity-0 
                z-10 cursor-pointer
              "
          />
          <div
            className=" py-2 gap-2 border-t-2 border-[#EAEAEA]  w-full 
            flex  flex-col
            "
          >
            <h1 className="text-left font-bold text-[14px] lg:text-[24px] py-3 text-[#000F24]">
              {props.question}
            </h1>
          </div>
          <div
            className="absolute  top-2 right-3
            text-white transition-transform duration-500
            rotate-0 peer-checked:rotate-180 
            "
          >
            <p className="text-[#000F24] py-3 text-[24px] font-bold">+</p>
          </div>

          <div
            className="  overflow-hidden 
            transition-all duration-500 max-h-0
            peer-checked:max-h-9
            "
          >
            <div className="grey text-left ">
              
                <p>{props.answer}</p>
              
            </div>
        
    
      </div>
    </div>
  );
}
