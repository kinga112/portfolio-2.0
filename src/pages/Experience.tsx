import houseKids from '../assets/mission/houseKids.jpg'
import losGuitosKids from '../assets/mission/losGuitosKids.jpg'
import kid from '../assets/mission/kid.jpg'
import working from '../assets/mission/working.jpg'
import { Career } from '../components/Experience/Career'
import Skills from '../components/Experience/Skills'
import { Projects } from '../components/Experience/Projects'

export function Experience(){
  return(
    <>
      <div className='h-full w-full p-10 space-y-10 bg-custom-forest-green text-custom-off-white'>
        <div className='flex justify-center text-7xl font-light'>
          My Experience
        </div>
        <Career />
        <Skills />
        <Projects />
      </div>
    </>
  )
}
