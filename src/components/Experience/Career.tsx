import gvi from '../../assets/gvi2.jpg'
import casa from '../../assets/casasystems_logo.png'
import broad from '../../assets/broad_logo.png'

export function Career(){
  return(
    <>
      <section id='career' className='flex flex-col justify-center w-full p-2 md:py-8 md:px-10 gap-10'>
        <div className='text-center font-extralight sm:text-5xl text-3xl'>
          Career
        </div>
        <GVI/>
        <CasaSystems/>
        <BroadInstitute/>
      </section>
    </>
  )
}

function GVI(){
  return(
    <>
      <div className='flex flex-col gap-1'>
        <img className="h-28 w-60 object-cover rounded-xl" src={gvi} />
        <div className='py-4 text-xl sm:text-4xl font-extralight text-custom-light-green'>
          Systems Engineer IV&V 2025 - Current
        </div>
        <div className='flex flex-col space-y-3'>
          <BulletPoint description="Execute rigorous hardware and software integration testing for
                                      critical systems aboard Virginia and next-generation Columbia
                                      class submarines."/>
          <BulletPoint description="Verify system compliance against strict NAVSEA guidelines, identifying
                                      edge cases and delivering actionable engineering recommendations to
                                      optimize system reliability."/>
          <BulletPoint description="Audit unit testing and system integration procedures to ensure 100%
                                      requirement traceability and mission readiness."/>
        </div>
      </div>
    </>
  )
}

function CasaSystems(){
  return(
    <>
      <div className='flex flex-col gap-1'>
        <img height={150} width={300} src={casa}/>
        <div className='py-4 text-xl sm:text-4xl font-extralight text-custom-light-green'>
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
      </div>
    </>
  )
}

function BroadInstitute(){
  return(
    <>
      <div className='flex flex-col gap-1 justify-start'>
        <img height={150} width={300} src={broad}/>
        <div className='py-4 text-xl sm:text-4xl font-extralight text-custom-light-green'>
          Software Engineer Intern 2019 - 2020
        </div>
        <div className='flex flex-col gap-3 place'>
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
      </div>
    </>
  )
}

function BulletPoint(props: {description: string}){
  return(
    <>
      <div className='flex font-light text-base sm:text-xl gap-3'>
        {/* h-7 -> same as text-xl height (28px) and bullet point is placed in center of it to mark center of first line*/}
        <div className="gap-3 flex h-7 w-4 shrink-0 items-center justify-start">
          <div className="w-4 h-2 rounded-lg bg-custom-light-green shrink-0" />
        </div>
        <p>{props.description}</p>
      </div>
    </>
  )
}
