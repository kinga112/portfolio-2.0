import { useRef } from "react";
import Card from "./card/Card"
import { useIsVisible } from "../../utils/onVisible";

function About(){
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  let textScrollAnimation = 'ease-in duration-700 opacity-0 blur-sm -translate-x-20'
  let cardScrollAnimation = "ease-in duration-700 translate-x-[calc(450px)] opacity-0"
  if(isVisible){
    cardScrollAnimation = "ease-in duration-700 opacity-100"
    textScrollAnimation = 'ease-in duration-700 opacity-100'
  }

  return(
    <>
      <div ref={ref} className='grid grid-cols-1 sm:grid-cols-2 w-full pb-5 relative'>
        <div className="flex flex-col">
          <div className='font-extralight text-3xl lg:text-5xl py-5'>
              about
          </div>
          <div className={'flex space-x-3 ' + textScrollAnimation}>
            <div className='w-48 h-1 rounded-lg bg-custom-500 mt-3'/>
            <div className='font-light lg:text-xl pr-20 pl-5'>
              My story begins building Legos and exploring the outdoors, captivated by the salty beach air 
              and the refreshing mountain breeze. Boston's vibrant atmosphere drew me to Wentworth Institute of Technology, 
              where I earned my Bachelor's in Computer Science.
              <br/>
              <br/>
              The past years have strengthened my passion for software development, driven by remote learning challenges and the 
              opportunity to embrace new experiences. Now, I'm embarking on a journey to innovate and expand my skills further in 
              this ever-evolving realm.
            </div>
          </div>
        </div>
        <div className={cardScrollAnimation}>
          <Card/>
        </div>
      </div>
    </>
  )
}
    
export default About