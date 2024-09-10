// import Skill from "./Skill"
import python from '../../assets/python_logo.png'
import aws from '../../assets/aws_logo.png'
import dart from '../../assets/dart_logo.svg'
import docker from '../../assets/docker_logo.png'
import flutter from '../../assets/flutter_logo.png'
import gcp from '../../assets/gcp_logo.png'
import graphql from '../../assets/graphql_logo.png'
import javascript from '../../assets/javascript_logo.png'
import k8s from '../../assets/kubernetes_logo.png'
import nginx from '../../assets/nginx_logo.webp'
import postgre from '../../assets/postgre_logo.png'
import react from '../../assets/react_logo.png'
import typescript from '../../assets/typescript_logo.png'
import vercel from '../../assets/vercel_logo.png'
import vue from '../../assets/vue_logo.png'
import { useRef } from 'react'
import { useIsVisible } from '../../utils/onVisible'

function Skills(){
  return(
    <>
      <div className='flex flex-col justify-center w-full space-y-5'>
        <div className='flex justify-center font-extralight text-5xl pb-5'>
            skills
        </div>
        {/* <div className='flex justify-center w-full space-x-20'> */}
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-5'>
          <div className='flex-col justify-center space-y-3 lg:pr-10'>
            <div className='flex justify-center lg:pr-[calc(10rem)] lg:justify-end text-xl'>
                programming languages
            </div>
            <div className='flex justify-center lg:justify-end gap-5'>
              <SkillGroup 
                imgList={[python, typescript, javascript, dart]} 
                descriptionList={['Python', 'TypeScript', 'JavaScript', 'Dart']}/>
            </div>
          </div>
          <div className='flex-col lg:pl-10 justify-center space-y-3'>
            <div className='flex lg:pl-[calc(9.5rem)] lg:justify-start justify-center text-xl'>
                frameworks
            </div>
            <div className='flex justify-center lg:justify-start gap-5'>
              <SkillGroup 
                imgList={[react, vue, flutter]} 
                descriptionList={['React', 'Vue', 'Flutter']}/>
            </div>
          </div>
        </div>
        <div className='flex justify-center text-xl'>
            backend / tools
        </div>
        <div className='grid grid-row-1 lg:grid-cols-2 w-full gap-5'>
          <div className='flex justify-center lg:justify-end gap-5'>
            <SkillGroup 
              imgList={[postgre, graphql, aws, gcp]}
              descriptionList={['PostgreSQL', 'GraphQL', 'Amazon Web Services', 'Google Cloud Platform']}/>
          </div>
          <div className='flex justify-center lg:justify-start gap-5'>
            <SkillGroup 
              imgList={[k8s, docker, vercel, nginx]} 
              descriptionList={['Kubernetes', 'Docker', 'Vercel', 'Nginx']}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills

function Skill(props: {image: string, description: string, index: number}){
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  // const translate = 50 * props.index
  const delay = 50 * props.index
  let scrollAnimation = `blur-sm scroll-pb-20 translate-y-10 opacity-0`
  console.log("SCROLL ANUIMATION: " + scrollAnimation)
  if(isVisible){
    scrollAnimation = `ease-in duration-700 delay-${delay}`
    // delay-${delay}
  }
  
  const skillStyle = `
  bg-custom hover:bg-custom-900 
  text-center h-full w-full justify-center 
  place-items-center flex flex-col gap-3`
  
  let imageSize = 'w-16 h-16'
  if(props.image == gcp || props.image == docker){
    imageSize = 'w-16 h-12 m-2'
  }

  return(
    <>
      <div ref={ref} className={'w-32 h-40 rounded-xl group overflow-auto ' + scrollAnimation}>
        <div className={skillStyle}>
          <img className={'duration-300 group-hover:scale-110 group-hover:rotate-12 rounded-md ' + imageSize} src={props.image}/>
          {props.description}
        </div>
      </div>
    </>
  )
}

function SkillGroup(props: {imgList: Array<string>, descriptionList: Array<string>}){
  const items = props.imgList.map((image: string, index: number) => <Skill image={image} description={props.descriptionList[index]} index={index}/>)
  return(
    <>
      {items}
    </>
  )
}