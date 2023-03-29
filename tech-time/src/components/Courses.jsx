
export default function Courses(props){

   
    return (

    <div className=" ">
      <div className="courses rounded-[16px]  bg-[#FFFFFF] p-1 lg:p-3">
        <div className="courses-img">
            <img src={props.imageUrl}/>
        </div>
        <div className="div flex justify-between py-1">
            <div className="courses-card  font-bold text-[#1E5DCE] text-[8px] px-3 md:text-[11px] lg:text-[12px] lg:px-5 pt-[2px] lg:p-1
             lg:rounded-[18px] rounded-[14px]">
               <p>{props.topic}</p>
            </div>
           <div className=" flex gap-1 grey font-semibold">
            <p className="text-[6px] lg:text-[12px] lg:pt-1 pt-1">4.7k</p>
            <img className="object-contain lg:w-[16px] w-[9px] lg:pt-1  pb-1" src="images/starss.png"/>
            <p className="lg:text-[12px] text-[6px] lg:pt-1 pt-1">(32.7k+)</p>
           </div>
        </div>
        <h1 className="text-left courses-text text-[8px] lg:text-[24px] my-2   ">{props.title}</h1>
        <div className="div flex justify-between">
            <div  className="clock flex gap-1">
               <img className="w-[10px] lg:w-[20px] object-contain" src="images/times.png"/>
               <p className="grey ">23hrs 50mins</p>
            </div>
            <div className="flex gap-1">
              <img className=" object-contain w-[10px] lg:w-[20px]" src="images/menu_book.png"/>
              <p className="grey">15 Lessons</p>
            </div>
            
        </div>
        <div className="div flex pt-2 justify-between">
            <div className="flex  gap-2 text-center">
              <img className="lg:w-[40px] lg:mt-0 mt-1 lg:h-[40px] w-[16px] h-[16px]" src={props.nameImg}/>
              <p className="pt-2 lg:text-[17px] text-[6px] font-bold">{props.name}</p>
            </div>
            <p className="pt-2 lg:text-[18px] text-[8px] clash font-bold text-[#004DB3]">${props.Price}</p>
        </div>
      </div>
    </div>
    )
}