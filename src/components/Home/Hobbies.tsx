// import fl from '../../assets/flstudio_logo.png'
import fl from '../../assets/icons/fl.svg'
import planeTicket from '../../assets/icons/planeTicket.svg'
import volunteer from '../../assets/icons/volunteer.svg'
import programming from '../../assets/icons/programming.svg'

function Hobbies(){
  return(
    <>
      <div className='flex flex-col justify-center place-items-center w-full rounded-lg overflow-hidden space-y-5'>
        <div className='flex justify-center font-extralight text-5xl pb-5'>
            hobbies
        </div>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 justify-center'>
          <Hobby 
            image={fl} 
            title="Fl Studio" 
            description="I love creating music with FL Studio. I have a keen sense of hearing which has allowed me to create 
                          many new sounds I enjoy. I mainly focus on genres closest to hip-hop, but like to explore 
                          new sounds to evolve my skills. I would love to make more time to learn the guitar and piano."
          />
          <Hobby 
            image={planeTicket} 
            title="Traveling" 
            description="During, my job hunt, I have had the pleasure to enjoy time away traveling. From local trips to snowy adventures 
                          to the South Arctic in July, 2024, I am blessed to see the beauties of the world!"
            />
            <Hobby 
            image={volunteer} 
            title="Giving back"
            description="I am blessed to be healthy and strong. Too many people have tough situations preventing them from living the life they 
                          deserve and I believe it is my duty to give back to the world. I learn so much from people who struggle. Listening to 
                          their stories and wisdom might help me more than anything I can do for them."
          />
          <Hobby 
            image={programming} 
            title="Tech" 
            description="I am an overall geek with technology! I love building and working with new things. Gaining experiences is very important 
                          to me. Right now I am focusing on developing more skills in web3 technologies. I am excited to see how blockchain technology 
                          can infuence the world!"
            />
        </div>
      </div>
    </>
  )
}

export default Hobbies

function Hobby(props: {image: string, title: string,  description: string}){
  const hobbyStyle = `
  flex gap-5 p-5 w-full
  bg-custom w-[calc(80dvw)]] lg-w-[calc(40dvw)] h-72 rounded-xl hover:bg-custom-900 
  text-center group`

  return(
    <>
      <div className={hobbyStyle}>
        <div className='h-full shrink-0 flex place-items-start justify-center'>
          <img className={'duration-300 group-hover:scale-110 group-hover:rotate-12 rounded-md mt-5 lg:w-24 lg:h-24 w-20 h-20'} src={props.image}/>
        </div>
        <div className='flex flex-col text-left gap-3 overflow-y-auto'>
          <div className='text-3xl font-extralight'>
            {props.title}
          </div>
          <div className='font-light text-sm md:text-base lg:text-lg sm:pr-10 pr-0'>
            {props.description}
          </div>
        </div>
      </div>
    </>
  )
}