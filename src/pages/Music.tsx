
import AudioPlayer from 'react-h5-audio-player';
import './react-h5-audio-player.css';
import spooky from '../assets/music/how spooky can one get.mp3'
import launch from '../assets/music/launch.mp3'
import thedeparted from '../assets/music/the prayer.mp3'
import organ from '../assets/music/organ vamp.mp3'

function Music(){
  return(
    <>
      <div className='pt-28 h-full w-full p-10 space-y-10'>
        <div className='flex justify-center text-5xl font-extralight'>
          Music
        </div>
        <div className='flex text-2xl font-extralight px-10'>
          I have always loved listening to music and with the power of FL Studio, I have been able to create my own. 
          Producing music has been a hobby of mine for a few years and I want to show some of my work here on this page. 
          <br/>
          Enjoy!
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <AudioItem name='Launch' audioFile={launch}/>
          <AudioItem name='The Departed' audioFile={thedeparted}/>
          <AudioItem name='Spooky' audioFile={spooky}/>
          <AudioItem name='Organ Vamp' audioFile={organ}/>
        </div>
      </div>
    </>
  )
}

export default Music

function AudioItem(props: {name: string, audioFile: string}){
  return (
    <>
      <div className='flex flex-col w-full bg-custom rounded-lg p-5 text-xl gap-2 hover:bg-custom-900'>
        {props.name}
        <div className='rounded w-full overflow-hidden'>
          <AudioPlayer
            autoPlay={false}
            src={props.audioFile}
          />
        </div>
      </div>
    </>
  )
}