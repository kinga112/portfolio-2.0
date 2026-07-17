import houseKids from '../assets/mission/houseKids.jpg'
import losGuitosKids from '../assets/mission/losGuitosKids.jpg'
import kid from '../assets/mission/kid.jpg'
import working from '../assets/mission/working.jpg'

function Mission() {
  const textBoxStyle = 'p-5 md:p-14 bg-custom-light-green rounded-2xl flex flex-col gap-3 w-full md:w-1/2';
  return(
    <>
      <div className='h-full w-full p-10 space-y-10 bg-custom-forest-green text-custom-off-white'>
        <div className='flex justify-center text-7xl font-light'>
          My Mission
        </div>
        <div className='flex flex-col gap-5 md:flex-row items-center justify-around'>
          <img className='rounded-2xl w-full md:w-1/2' src={houseKids} height={450} width={500}/>
          <div className={textBoxStyle}>
            <div className='text-2xl'>My Core Philosophy</div>
            I am deeply committed to dedicating my time to helping others and making a positive impact on our world.
            Inspired by a lifelong calling to service, I believe that true transformation happens when empathy meets
            action. Each endeavor I undertake is driven by a profound belief that compassion is the foundation for
            building a stronger, more supportive global community.
          </div>
        </div>
        <div className='flex flex-col gap-5 md:flex-row items-center justify-around'>
          <div className={textBoxStyle}>
            <div className='text-2xl'>Global Perspective - Costa Rica </div>
            This belief has taken me across borders, including spending a week in March over two separate years
            volunteering on mission trips in Costa Rica. Immersing myself in these international communities taught
            me the power of cross-cultural connection and collective effort. Working side-by-side with local residents
            left a lasting impression on me, solidifying my dedication to contributing meaningfully wherever help
            is needed most.
          </div>
          <img className='rounded-2xl w-full md:w-1/2' src={working} height={500} width={500}/>
        </div>
        <div className='flex flex-col gap-5 md:flex-row items-center justify-around'>
          <img className='rounded-2xl w-full md:w-1/2' src={losGuitosKids} height={500} width={500}/>
          <div className={textBoxStyle}>
            <div className='text-2xl'>Local Dedication - Soup Kitchens & Food Pantries </div>
            Back home, that same drive fuels my commitment to my own neighbors through consistent work with local soup kitchens
            and food pantries. These experiences have shown me that making a difference starts right in our own backyards by
            addressing immediate, fundamental needs. By dedicating time to food security initiatives, I aim to provide tangible
            support, foster local resilience, and ensure everyone in the community feels seen and valued.
          </div>
        </div>
        <div className='flex flex-col gap-5 md:flex-row items-center justify-around'>
          <div className={textBoxStyle}>
            <div className='text-2xl'>Environmental Stewardship</div>
            For me, making the world a better place means caring for both its people and the planet we share. This is why my
            commitment to service extends to environmental stewardship, particularly through hands-on volunteering like
            local beach cleanups. Protecting our coastlines reminds me that the health of our environment is deeply connected
            to the well-being of our communities, and I strive to balance social responsibility with active care for the earth.
          </div>
          <img className='rounded-2xl w-full md:w-1/2' src={kid} height={350} width={350}/>
        </div>
      </div>
    </>
  )
}

export default Mission
