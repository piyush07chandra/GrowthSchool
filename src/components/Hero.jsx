import './All.css'

const Hero = () => {
  return (
    <>
      <div className=' xl:flex bg-amber-300 xl:pl-20'>
      {/* first */}
        <div>
          <div className='flex xl:text-xl font-extrabold'>
            <img className="h-20" src="/learning.png"/><span className="mt-5">Growth<br/>School</span>
           </div>
          
          <h1 className="xl:text-4xl sm:text-3xl md:text-4xl font-bold xl:mt-10">Discover a Consultant's<br/> Approach to Problem Solving</h1>
          <p className="text-gray-600 mt-8 mb-4">Learn the proven approach used by top strategy consultants to tackle<br/>
           complex business challenges effectively. Solve an MBB case study LIVE <br/>
            with Ashwin to understand the concepts hands-on.</p>
            <div className="flex gap-4 mb-4">
            <div className="border p-2 text-center"><img className='h-12 ml-3' src='/calendar.png'/>3rd March</div>
            <div className="border p-2 text-center"><img className='h-12 ml-3' src='/clock.png'/>1pm Onwards</div>
            <div className="border p-2 text-center"><img className='h-12 ml-3' src='/hourglass.png'/>2.5 Hours</div>
            </div>
            <button className="text-white bg-green-600 xl:w-80 xl:h-20 xl:text-xl font-semibold rounded-xl">Register Now at 499 <span className=" line-through">1999</span></button>
            <a href="" className="flex text-center underline text-xl text-gray-800 mt-4">click here to get team discount</a>
         
        </div>
        {/* second */}
        <div className='second text-white xl:ml-40 text-center xl:mt-16  xl:w-96 rounded-md'>
          <h1 className='mt-12'><span className='text-2xl text-center text-green-600 '>Welcom to</span> <br/>STRATEGY CONSULTING <br/>
           MASTERY WORKSHOP</h1>
           <img className=" h-56 ml-6" src="/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign.jpg"/>
           <h1 className='text-xl'>Instructed by</h1>
          
        </div>
      </div>
    </>
  )
}

export default Hero