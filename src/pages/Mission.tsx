import houseKids from '../assets/mission/houseKids.jpg'
import losGuitosKids from '../assets/mission/losGuitosKids.jpg'
import kid from '../assets/mission/kid.jpg'
import working from '../assets/mission/working.jpg'

function Mission(){
  return(
    <>
      <div className='pt-28 h-full w-full p-10 space-y-10'>
        <div className='flex justify-center text-5xl font-extralight'>
          Mission
        </div>
        <div className='flex flow-row text-2xl px-24'>
          <img className='rounded-3xl shadow-xl' src={houseKids} height={450} width={500}/>
          <div className='p-14'>
            I am deeply committed to dedicating my time to helping others and making a positive impact on their lives. 
            Inspired by my experiences volunteering on mission trips in Costa Rica and at a local soup kitchen, 
            I believe in the transformative power of service. Through my work, I aim to contribute meaningfully to communities, 
            fostering empathy, and creating lasting change. Each endeavor I undertake is driven by a profound belief in the 
            importance of compassion and action in building a better world.
          </div>
        </div>
        <div className='flex flow-row text-2xl px-24'>
          <div className='p-14'>
            I am deeply committed to dedicating my time to helping others and making a positive impact on their lives. 
            Inspired by my experiences volunteering on mission trips in Costa Rica and at a local soup kitchen, 
            I believe in the transformative power of service. Through my work, I aim to contribute meaningfully to communities, 
            fostering empathy, and creating lasting change. Each endeavor I undertake is driven by a profound belief in the 
            importance of compassion and action in building a better world.
          </div>
          <img className='rounded-3xl shadow-xl' src={working} height={500} width={500}/>
        </div>
        <div className='flex flow-row text-2xl px-24'>
          <img className='rounded-3xl shadow-xl' src={losGuitosKids} height={500} width={500}/>
          <div className='p-14'>
            I am deeply committed to dedicating my time to helping others and making a positive impact on their lives. 
            Inspired by my experiences volunteering on mission trips in Costa Rica and at a local soup kitchen, 
            I believe in the transformative power of service. Through my work, I aim to contribute meaningfully to communities, 
            fostering empathy, and creating lasting change. Each endeavor I undertake is driven by a profound belief in the 
            importance of compassion and action in building a better world.
          </div>
        </div>
        <div className='flex flow-row text-2xl px-24'>
          <div className='p-14'>
            I am deeply committed to dedicating my time to helping others and making a positive impact on their lives. 
            Inspired by my experiences volunteering on mission trips in Costa Rica and at a local soup kitchen, 
            I believe in the transformative power of service. Through my work, I aim to contribute meaningfully to communities, 
            fostering empathy, and creating lasting change. Each endeavor I undertake is driven by a profound belief in the 
            importance of compassion and action in building a better world.
          </div>
          <img className='rounded-3xl shadow-xl' src={kid} height={350} width={350}/>
        </div>
      </div>
    </>
  )
}

export default Mission