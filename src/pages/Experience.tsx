import { Career } from '../components/Experience/Career'
import Skills from '../components/Experience/Skills'
import { Projects } from '../components/Experience/Projects'

export function Experience(){
  return(
    <>
      <div className='h-full w-full p-4 space-y-4 md:p-10 md:space-y-10 bg-custom-forest-green text-custom-off-white'>
        <div className='flex justify-center text-5xl md:text-7xl font-light'>
          My Experience
        </div>
        <Career />
        <Skills />
        <Projects />
      </div>
    </>
  )
}
