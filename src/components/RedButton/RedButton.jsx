import { Spinner } from "react-bootstrap";


export default function RedButton({text,className="",SpinnerRef=null,btn_Function})
{


 
    return <div  className={` w-full flex justify-center itmes-center  text-(--input-txt-size) m-0 p-0 mt-2 ${className}`}> 

 <button className=" rounded-xs transition-all duration-200 px-6.25 py-2.75 m-0 text-(--white-color) bg-(--red-color) hover:bg-(--red-hover) border-none outline-none flex justify-center items-center" onClick={()=>{btn_Function()}}>
   <span>

{text} 
   </span>
      <Spinner ref={SpinnerRef} className="hidden w-5 h-5 ml-2.5"/>


   </button>    </div>
    
}


  
