import { useState } from "react";

import { CardBody, CardContainer, CardItem } from "./Card3dUtils";
import github from '../../../assets/github.png'
import linkedin from '../../../assets/linkedin.png'
import image from '../../../assets/image-grid/withTie.jpg'
import flipIcon from '../../../assets/flip.svg'
import emailIcon from '../../../assets/email.png'


export function Card() {
	const [isFlipped, setFlipped] = useState(true)
  const [animation, setAnimation] = useState('')
	const [showFlipped, setShowFlipped] = useState(false);

	function flipClick(){
		setFlipped(!isFlipped)
    if(isFlipped){
			setAnimation('animate-flip')
			setTimeout(() => setShowFlipped(true), 150)
			setTimeout(() => setAnimation(''), 200)
    }
    else{
			setAnimation('animate-flip')
			setTimeout(() => setShowFlipped(false), 150)
			setTimeout(() => setAnimation(''), 200)
    }
	}

  return (
		// <div className={"absolute z-10 mx-7 my-5 " + animation}>
		<div className={"mt-5 sm:mt-20 " + animation}>
			<CardContainer>
				{showFlipped ? 
        <CardBody className="bg-custom-500 relative group/card shadow-lg shadow-custom-950 h-[200px] w-[300px] sm:h-[275px] sm:w-[450px] rounded-xl p-6 border-4 border-custom-950">
          <CardItem
            translateZ={60}
            className="text-xl sm:text-4xl text-custom-950"
          >
            Alden King
          </CardItem>
          <CardItem
            translateZ={30}
            translateX={5}
            translateY={-5}
            className="pt-10 w-full text-center text-md sm:text-2xl font-light text-custom-950"
          >
            I am a creator, explorer, skier ... and much more
          </CardItem>
          <CardItem
            translateZ={50}
            translateX={10}
            translateY={-5}
            as="button" 
            className="absolute right-5 bottom-3 rounded-xl bg-custom-950"
          >
            <img src={flipIcon} className="px-4 py-2 w-12 h-8" onClick={()=> {flipClick()}}/>
          </CardItem>
        </CardBody> :
        <CardBody className="flex bg-custom-500 z-10 relative group/card shadow-lg shadow-custom-950 h-[200px] w-[300px] sm:h-[275px] sm:w-[450px] rounded-xl p-2 sm:p-6 border-4 border-custom-950">
          <div className="flex flex-col w-[60%]">
            <CardItem
              translateZ={60}
              className="text-xl sm:text-4xl font-normal text-custom-950"
            >
              Alden King
            </CardItem>
            <CardItem
              as="p"
              translateZ={50}
              className="text-custom-950 text-lg sm:text-2xl pb-2 font-light max-w-sm mt-2"
            >
              Software Engineer
            </CardItem>
            <CardItem
              as="p"
              translateZ={30}
              translateY={-5}
              className="text-custom-950 text-xs sm:text-md max-w-sm mt-2"
            >
              <a href="mailto:kinga112@yahoo.com">
                <div className="flex flex-row place-items-center gap-2 hover:font-semibold">
                  <img className="w-5 h-3 sm:w-7 sm:h-5" src={emailIcon}/>
                  kinga112@yahoo.com
                </div>
              </a>
            </CardItem>
            <CardItem
              as="p"
              translateZ={30}
              translateY={-5}
              className="text-custom-950 text-xs sm:text-md max-w-sm mt-2"
            >
              <a href="https://www.linkedin.com/in/kinga5" target="_blank">
                <div className="flex flex-row place-items-center gap-2 hover:font-semibold">
                  <img className="w-5 h-5 sm:w-7 sm:h-7" src={linkedin}/>
                  linkedin.com/in/kinga5
                </div>
              </a>
            </CardItem>
            <CardItem
              as="p"
              translateZ={30}
              translateY={-5}
              className="text-custom-950 text-xs sm:text-md max-w-sm mt-2"
            >
              <a href="https://www.github.com/kinga112" target="_blank">
                <div className="flex flex-row gap-2 hover:font-semibold">
                  <img className="w-5 h-5 sm:w-7 sm:h-7" src={github}/>
                  github.com/kinga112
                </div>
              </a>
            </CardItem>
          </div >
          <div className="flex flex-col w-[40%]">
            <CardItem
              translateZ={60}
              translateX={5}
              translateY={-10}
              rotateZ={2}
              className="pl-5"
            >
              <img className='w-20 h-32 sm:w-40 sm:h-48 mt-2 sm:mt-0 rounded-xl' src={image}/>
            </CardItem>
          </div>
          <CardItem
            translateZ={50}
            translateX={10}
            translateY={-5}
            as="button" 
            className="absolute right-5 bottom-3 rounded-xl bg-custom-950"
          >
            <img src={flipIcon} className="px-4 py-2 w-12 h-8" onClick={()=> {flipClick()}}/>
          </CardItem>
				</CardBody> }
			</CardContainer>
    </div>
  );
}

export default Card