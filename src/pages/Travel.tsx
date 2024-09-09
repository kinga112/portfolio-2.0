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
      <div className='pt-28 h-full w-full p-10 space-y-10'>
        <div className='flex justify-center text-5xl font-extralight'>
          Travel
        </div>
        <div>
          <VerticalTimeline>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#9575A1', color: '#0A121F' }}
              contentArrowStyle={{ borderRight: '7px solid  #9575A1' }}
              date="July 13-18, 2024"
              iconStyle={{ background: '#9575A1', color: '#fff' }}
            >
              <div className="flex">
                <div>
                  <h3 className="vertical-timeline-element-title">Copa Champs!</h3>
                  <h4 className="vertical-timeline-element-subtitle">Buenos Aires, Argentina</h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                  </p>
                </div>
                <div className="flex pb-10 w-full justify-center">
                  <div className="w-36 h-36">
                    <PictureCarousel/>
                  </div>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#9575A1', color: '#0A121F' }}
              contentArrowStyle={{ borderRight: '7px solid  #9575A1' }}
              date="July 12-13 2024"
              iconStyle={{ background: '#9575A1', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">El Calafate, Argentina</h3>
              {/* <h4 className="vertical-timeline-element-subtitle">El Calafate, Argentina</h4> */}
              <p>
                Traveling down the famous Ruta 40 (Route 40), seeing Guanaco's, Vultures and Cows roaming the fields 
                heading towards the Glacier. Glaciers are really that blue!
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#9575A1', color: '#0A121F' }}
              contentArrowStyle={{ borderRight: '7px solid  #9575A1' }}
              date="July 7-11, 2024"
              iconStyle={{ background: '#9575A1', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Ushuaia, Argentina</h3>
              <h4 className="vertical-timeline-element-subtitle">Fin del Mundo: The end of the world</h4>
              <p>
                Snow Snow Snow and Hot Cocoa! Snow mobiling and snow shoeing in the mountains. 
                Building snow mans, and throwing snow balls. Ushuaia is beautiful, the most Southern City in the world.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#9575A1', color: '#0A121F' }}
              contentArrowStyle={{ borderRight: '7px solid  #9575A1' }}
              date="July"
              iconStyle={{ background: '#9575A1', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Creative Director</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#9575A1', color: '#0A121F' }}
              contentArrowStyle={{ borderRight: '7px solid  #9575A1' }}
              date="July"
              iconStyle={{ background: '#9575A1', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Creative Director</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default Travel

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