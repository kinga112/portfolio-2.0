import ImageGrid from "../components/Home/ImageGrid"
import Title from "../components/Home/Title"
import About from "../components/Home/About"
import Skills from "../components/Home/Skills"
import Experience from "../components/Home/Experience"
import Hobbies from "../components/Home/Hobbies"

function Home(){
  return(
    <>
      <div className='pt-28 h-full w-full p-10 space-y-5 overflow-hidden'>
        <div className='flex h-[500px] w-full bg-custom rounded-lg overflow-hidden justify-center place-items-center'>
          <Title/>
          <ImageGrid/>
        </div>
        <About/>
        <Skills/>
        <Experience/>
        <Hobbies/>
      </div>
    </>
  )
}

export default Home