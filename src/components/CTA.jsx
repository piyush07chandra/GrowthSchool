import './All.css'
const CTA = () => {
  return (
    <>
      <div className="xl:flex xl:pl-20 bg-amber-300 pt-4 pb-12">
        <div className='box bg-gray-500'>
          <h1 className='xl:text-3xl text-xl text-cneter font-semibold text-white xl:mt-12'>Crash Course Launch Offer (Save INR 1799) </h1>
          <ul className='xl:text-xl xl:mt-12 mt-4 text-white xl:ml-8'>
            <li>.Learn the toolkit of the professionals in just 3 hours</li>
            <li>.Enjoy the discount price of 299</li>
            <li>.The launch offer expires soon, grab your seat NOW!</li>
          </ul>
        </div>
        <div className='box text-center p-10 bg-gray-500'>
          <h1 className='xl:text-5xl text-2xl font-semibold text-white'>Price of the Program</h1>
          <h1 className='text-3xl'><span className='text-5xl font-semibold text-green-500'>499</span> <span className=" line-through text-white">1999</span></h1>
          <button className="text-white bg-green-600 xl:w-80 xl:h-20 xl:text-xl w-56 h-11 font-semibold rounded-xl mt-8">Register Now</button>
        </div>
      </div>
    </>
  )
}

export default CTA