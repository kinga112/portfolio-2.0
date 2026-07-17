import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ba from '../assets/image-grid/ba.jpg'
import volcanoTree from '../assets/image-grid/volcanoTree.jpg'
import dogSledPlace from '../assets/image-grid/dogSledPlace.jpg'
import glacier from '../assets/image-grid/glacier.jpg'
import grafiti from '../assets/image-grid/grafiti.jpg'
import grogu from '../assets/image-grid/grogu.jpg'

function Travel(){
  return(
    <>
      {/*<div className='pt-28 h-full w-full p-10 space-y-10 bg-custom-forest-green'>*/}
      <div className='pt-28 h-screen w-screen p-10 space-y-10 bg-custom-forest-green'>
        <div className='flex justify-center text-5xl font-extralight'>
          Travel
        </div>
        <div className="3xl">
          PAGE COMING SOON!
        </div>
        <div>
          Aiming to share my travel experiences and encounters from around the world!
        </div>
        {/*<div>
          Some travel pics and what not...
        </div>
        <TravelLocation location="New York" date="June 2026">
          <div>
            LEGO LAND!
          </div>
        </TravelLocation>
        <TravelLocation location="Costa Rica" date="April 2026">
          <div>
            DINO LAND!
          </div>
        </TravelLocation>
        <TravelLocation location="Argentina" date="July 2024">
          <div>
            ARGENTINAAAAAA
          </div>
        </TravelLocation>
        <TravelLocation location="Costa Rica" date="March 2023">
          <div>
            2nd time to Roblealto
          </div>
        </TravelLocation>
        <TravelLocation location="Costa Rica" date="November 2022">
          <div>
            Nicolitaaaaa
          </div>
        </TravelLocation>
        <TravelLocation location="Costa Rica" date="March 2022">
          <div>
            1st time to Roblealto
          </div>
        </TravelLocation>*/}
      </div>
    </>
  )
}

export default Travel

interface TravelLocationProps {
  location: string;
  date: string;
  children?: React.ReactNode;
}

function TravelLocation({location, date, children}: TravelLocationProps) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex gap-5 place-items-center">
          <div className="text-3xl font-light">
            {location}
          </div>
          <div className="text-sm">
            {date}
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

function PictureCarousel(){
  // props: {images: Array<string>}
  // const images = [9, 8, 7, 6, 5].map((number) => ({
  //   src: `https://placedog.net/${number}00/${number}00?id=${number}`
  // }));
  return(
    <>
        <Carousel
          // showArrows={true}
          infiniteLoop
          autoPlay={true}
          width={150}
          dynamicHeight={false}
          // emulateTouch
          // onClickItem={(...args) => console.log('onClickItem', ...args)}
          // onChange={(...args) => console.log('onChange', ...args)}
          // onClickThumb={(...args) => console.log('onClickThumb', ...args)}
          >
          <div className="flex place-items-center h-44">
            <img className="object-contain" src={ba}/>
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div className="flex place-items-center h-44">
            <img className="object-contain" src={glacier}/>
          </div>
          <div className="flex place-items-center h-44">
            <img className="object-contain" src={dogSledPlace}/>
          </div>
          <div className="flex place-items-center h-44">
            <img className="object-contain" src={grafiti}/>
          </div>
          <div className="flex place-items-center h-44">
            <img className="object-contain" src={grogu}/>
          </div>
          <div className="flex place-items-center h-44">
            <img className="object-contain" src={volcanoTree}/>
          </div>
        </Carousel>
    </>
  )
}
