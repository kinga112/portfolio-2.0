import beachRocks from '../../assets/image-grid/beachRocks.jpg'
import biking from '../../assets/image-grid/biking.jpg'
import cameraPic from '../../assets/image-grid/cameraPic.jpg'
import fenwayPark from '../../assets/image-grid/fenwayPark.jpg'
import foggyForrest from '../../assets/image-grid/foggyForrest.jpg'
import highestLiftSign from '../../assets/image-grid/highestLiftSign.jpg'
import inTree from '../../assets/image-grid/inTree.jpg'
import picWithKids from '../../assets/image-grid/LosGuitosWithKids.jpg'
import monkey from '../../assets/image-grid/monkey.jpg'
import moth from '../../assets/image-grid/moth.jpg'
import plateOfFood from '../../assets/image-grid/plateOfFood.jpg'
import sandTrees from '../../assets/image-grid/sandTrees.jpg'
import skiing from '../../assets/image-grid/skiing.jpg'
import stairsAtVolcano from '../../assets/image-grid/stairsAtVolcano.jpg'
import stairsAtWaterfalls from '../../assets/image-grid/stairsAtWaterfalls.jpg'
import tires from '../../assets/image-grid/beachRocks.jpg'
import toucan from '../../assets/image-grid/toucan.jpg'
import volcanoRocks from '../../assets/image-grid/volcanoRocks.jpg'
import volcanoTree from '../../assets/image-grid/volcanoTree.jpg'
import withTie from '../../assets/image-grid/withTie.jpg'
import oceanShirts from '../../assets/image-grid/4ocean.jpg'
import ba from '../../assets/image-grid/ba.jpg'
import dogSledPlace from '../../assets/image-grid/dogSledPlace.jpg'
import flag from '../../assets/image-grid/flag.jpg'
import glacier from '../../assets/image-grid/glacier.jpg'
import grafiti from '../../assets/image-grid/grafiti.jpg'
import grogu from '../../assets/image-grid/grogu.jpg'
import boca from '../../assets/image-grid/boca.jpg'
import lighthouse from '../../assets/image-grid/lighthouse.jpg'
import navigation from '../../assets/image-grid/navigation.jpg'


function ImageGrid(){
  return(
    <>
      <ImageColumn 
        animation={'animate-infinite-scroll-fast'} 
        images={[biking, cameraPic, fenwayPark, foggyForrest]} 
        bgColors={['bg-custom-300', 'bg-custom-700', 'bg-custom-100', 'bg-custom-500']}
      />
      <ImageColumn 
        animation={'animate-infinite-scroll-fastest'} 
        images={[highestLiftSign, flag, monkey, moth]} 
        bgColors={['bg-custom-500', 'bg-custom-100', 'bg-custom-500', 'bg-custom-700']}
      />
      <ImageColumn 
        animation={'animate-infinite-scroll-slowest'} 
        images={[plateOfFood, sandTrees, volcanoRocks, stairsAtWaterfalls]} 
        bgColors={['bg-custom-900', 'bg-custom-500', 'bg-custom-100', 'bg-custom-700']}
      />
      <ImageColumn 
        animation={'animate-infinite-scroll-slow'} 
        images={[toucan, inTree, skiing, volcanoTree]} 
        bgColors={['bg-custom-700', 'bg-custom-500', 'bg-custom-900', 'bg-custom-100']}
      />
      <ImageColumn 
        animation={'animate-infinite-scroll-fastest'} 
        images={[beachRocks, stairsAtVolcano, tires, dogSledPlace]} 
        bgColors={['bg-custom-500', 'bg-custom-900', 'bg-custom-100', 'bg-custom-700']}
      />
      <ImageColumn 
        animation={'animate-infinite-scroll-slow'} 
        images={[lighthouse, grafiti, oceanShirts, grogu]} 
        bgColors={['bg-custom-300', 'bg-custom-100', 'bg-custom-500', 'bg-custom-900']}
      />
      <ImageColumn 
        animation={'animate-infinite-scroll-fast'} 
        images={[volcanoTree, picWithKids, navigation, moth]} 
        bgColors={['bg-custom-900', 'bg-custom-700', 'bg-custom-500', 'bg-custom-300']}
      />
      <ImageColumn 
        animation={'animate-infinite-scroll-slowest'} 
        images={[ba, glacier, boca, withTie]} 
        bgColors={['bg-custom-100', 'bg-custom-900', 'bg-custom-300', 'bg-custom-700']}
      />
    </>
  )
}

export default ImageGrid

function ImageColumn(props: {animation: string, images: Array<string>, bgColors: Array<string>}){
  // animation speeds: slowest, slow, fast, fastest
  // images and bgColors must be same length
  
  const style = 'flex flex-col justify-start group-hover:pause'
  const columnitems = props.images.map((image: string, index: number) => <ColumnItem image={image} bgColor={props.bgColors[index]}/>)

  return(
    <>
      <div className="h-full flex-col inline-flex flex-nowrap group w-48 mx-2">
        <div className={`${style} ${props.animation}`}>
          {columnitems}
        </div>
        <div className={`${style} ${props.animation}`}>
          {columnitems}
        </div>
      </div>
    </>
  )
}

function ColumnItem(props: {image: string, bgColor: string}){
  return (
    <>
      <div className='pt-2'>
        <div className={'w-full h-full min-w-44 rounded p-2 overflow-hidden object-contain ' + props.bgColor}>
          <img className='object-contain rounded-sm hover:scale-150 duration-300' src={props.image}/>
        </div>
      </div>
    </>
  )
}