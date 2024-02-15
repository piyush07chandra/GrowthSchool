

const About = () => {
  return (
    <>
      <div className="bg-amber-300 xl:pt-20">
        <h1 className='xl:text-5xl text-3xl text-center font-semibold mb-2'><span className="text-green-800">ABOUT</span>   FOUNDERX</h1>
        <h1 className=" xl:text-2xl text-gray-500 text-center">The world needs your creativity and inguinity.<br/>
        Dont put your dreams on hold.Start your founder's journey today!</h1>
        <div className="xl:flex xl:mt-10 xl:ml-32">
          <div><img className="w-96 h-96 rounded-2xl" src="/images.png" /></div>
          <div>
            <ul className='xl:text-xl text-gray-800 box xl:h-96 rounded-xl xl:ml-8 xl:pt-8'>
              <li>.Master a <span className="text-black font-semibold">structured approach</span> to building a tech venture</li>
              <li>.<span className="text-black font-semibold">Get casched by</span> India's top 1% founders, operators and<br/> investors</li>
              <li>.<span className="text-black font-semibold">Learn by doing</span>-Work on actual startup ideas in a real-world<br/> startup <br/>team simulation</li>
              <li>.<span className="text-black font-semibold">Expand your network</span> in the community of like-minded<br/> peers</li>
              <li>.<span className="text-black font-semibold">Find your co-founder</span> & your core team among the fellows<br/> and alumni.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About