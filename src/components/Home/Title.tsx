import { useRef } from "react";
import { useIsVisible } from "../../utils/onVisible";


function Title(){
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  let scrollAnimation = "ease-in duration-700 translate-y-10 opacity-0 blur-sm scale-90"
  if(isVisible){
    scrollAnimation = "ease-in duration-700 opacity-100"
  }

  const style = `select-none pointer-events-none absolute 
  flex items-center justify-center text-8xl lg:text-9xl mix-blend-overlay 
  z-10 drop-shadow-[0_5px_2px_rgba(1,1,1,1)] ` + scrollAnimation

  return(
    <>
      <div ref={ref} className={style}>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div>
            Alden
          </div>
          <div>
            King
          </div>
        </div>
      </div>
    </>
  )
}
  
export default Title