import houseKids from '../assets/mission/houseKids.jpg'
import losGuitosKids from '../assets/mission/losGuitosKids.jpg'
import kid from '../assets/mission/kid.jpg'
import working from '../assets/mission/working.jpg'

function Mission(){
  return(
    <>
      <div className='h-full w-full p-10 space-y-10 bg-custom-forest-green text-custom-off-white'>
        <div className='flex justify-center text-7xl font-light'>
          My Mission
        </div>
        <div className='flex flex-col gap-5 md:flex-row items-center justify-around'>
          <img className='rounded-2xl w-full md:w-1/2' src={houseKids} height={450} width={500}/>
          <div className='p-14 bg-custom-light-green rounded-2xl flex flex-col gap-3 w-full md:w-1/2'>
            I am deeply committed to dedicating my time to helping others and making a positive impact on their lives.
            Inspired by my experiences volunteering on mission trips in Costa Rica and at a local soup kitchen,
            I believe in the transformative power of service. Through my work, I aim to contribute meaningfully to communities,
            fostering empathy, and creating lasting change. Each endeavor I undertake is driven by a profound belief in the
            importance of compassion and action in building a better world.
          </div>
        </div>
        <div className='flex flex-col gap-5 md:flex-row items-center justify-around'>
          <div className='p-14 bg-custom-light-green rounded-2xl flex flex-col gap-3 w-full md:w-1/2'>
            I am deeply committed to dedicating my time to helping others and making a positive impact on their lives.
            Inspired by my experiences volunteering on mission trips in Costa Rica and at a local soup kitchen,
            I believe in the transformative power of service. Through my work, I aim to contribute meaningfully to communities,
            fostering empathy, and creating lasting change. Each endeavor I undertake is driven by a profound belief in the
            importance of compassion and action in building a better world.
          </div>
          <img className='rounded-2xl w-full md:w-1/2' src={working} height={500} width={500}/>
        </div>
        <div className='flex flex-col gap-5 md:flex-row items-center justify-around'>
          <img className='rounded-2xl w-full md:w-1/2' src={losGuitosKids} height={500} width={500}/>
          <div className='p-14 bg-custom-light-green rounded-2xl flex flex-col gap-3 w-full md:w-1/2'>
            I am deeply committed to dedicating my time to helping others and making a positive impact on their lives.
            Inspired by my experiences volunteering on mission trips in Costa Rica and at a local soup kitchen,
            I believe in the transformative power of service. Through my work, I aim to contribute meaningfully to communities,
            fostering empathy, and creating lasting change. Each endeavor I undertake is driven by a profound belief in the
            importance of compassion and action in building a better world.
          </div>
        </div>
        <div className='flex flex-col gap-5 md:flex-row items-center justify-around'>
          <div className='p-14 bg-custom-light-green rounded-2xl flex flex-col gap-3 w-full md:w-1/2'>
            I am deeply committed to dedicating my time to helping others and making a positive impact on their lives.
            Inspired by my experiences volunteering on mission trips in Costa Rica and at a local soup kitchen,
            I believe in the transformative power of service. Through my work, I aim to contribute meaningfully to communities,
            fostering empathy, and creating lasting change. Each endeavor I undertake is driven by a profound belief in the
            importance of compassion and action in building a better world.
          </div>
          <img className='rounded-2xl w-full md:w-1/2' src={kid} height={350} width={350}/>
        </div>
      </div>
    </>
  )
}

export default Mission
