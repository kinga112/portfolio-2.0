import casa from '../../assets/casasystems_logo.png'
import broad from '../../assets/broad_logo.png'
import { useRef } from "react";
import { useIsVisible } from "../../utils/onVisible";


function Experience(){
  return(
    <>
      <div className='flex flex-col justify-center w-full py-8 px-10 lg:py-10 lg:px-40 gap-5'>
        <div className='flex justify-center font-extralight sm:text-5xl text-3xl pb-5'>
            experience
        </div>
        <CasaSystems/>
        <BroadInstitute/>
      </div>
    </>
  )
}
    
export default Experience

function CasaSystems(){
  return(
    <>
      <img height={150} width={300} src={casa}/>
      <div className='py-4 text-xl sm:text-4xl font-extralight'>
        Software Engineer 2021 - 2023
      </div>
      <div className='flex flex-col space-y-3'>
        <BulletPoint description="Leveraged Docker and Kubernetes technologies to streamline deployment processes, resulting in a 30% 
                                    reduction in deployment times and significantly bolstering overall system reliability."/>
        <BulletPoint description="Led the creation of a vCCAP solution leveraging Google Cloud and Anthos, which enhanced scalability. 
                                    Built automated installation using python and bash, and wrote technical documentation for VM 
                                    setup for Anthos nodes."/>
        <BulletPoint description="Implemented innovative solutions in Python for the vCCAP platform, enhancing user experience by 
                                    updating the UI for node initialization and simplifying network setup procedures increasing 
                                    node creation by 30%."/>
      </div>
    </>
  )
}

function BroadInstitute(){
  return(
    <>
      <>
      <img height={150} width={300} src={broad}/>
      <div className='py-4 text-xl sm:text-4xl font-extralight'>
        Software Engineer Intern 2019 - 2020
      </div>
      <div className='flex flex-col space-y-3'>
        <BulletPoint description="Developed a new automated system for the IT Help Desk that scanned users IDs and created a 
                                    basic ticket template with user information in ServiceNow to increase efficiency by 20%-50%."/>
        <BulletPoint description="Collaborated with a cross-functional team to develop a Python-based automation solution, 
                                  streamlining the transmission of COVID-19 test results to the CDC, reducing manual effort 
                                  by 75% and ensuring timely data reporting."/>
        <BulletPoint description="Improved onboarding productivity by automating email communications and eliminating the 
                                    need for manual email dispatch by HR with SMTP protocol to attach PDF HTML template in Flask."/>
        <BulletPoint description="Strengthened expertise in Flask and Full Stack Python development through active participation in 
                                    the design and debugging processes of the Broad website, utilizing Bootstrap for an enhanced skill set."/>
      </div>
    </>
    </>
  )
}

function BulletPoint(props: {description: string}){
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  let scrollAnimation = 'ease-in duration-700 opacity-0 blur-sm -translate-x-20'
  if(isVisible){
    scrollAnimation = 'ease-in duration-700 opacity-100'
  }
  return(
    <>
      <div ref={ref} className={'font-light text-base sm:text-xl gap-5 flex justify-between ' + scrollAnimation}>
        <div className='w-10 h-1 rounded-lg bg-custom-500 mt-3 shrink-0'/>
        <p>{props.description}</p>
      </div>
    </>
  )
}