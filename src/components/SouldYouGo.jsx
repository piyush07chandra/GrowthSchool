import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './All.css'

const SouldYouGo = () => {
  const images=[
    {url:'/note.png',text:'Learn to look at the chalanges through a difference lens'},
    {url:'/book (1).png',text:'Develop a deep understanding of modern marketing'},
    {url:'/resume.png',text:'Understand time-tested principles'},
    {url:'/chart.png',text:'Become a strategic thinke without trend-surfing'},
    {url:'/think.png',text:'INcorporate a creative & innovative thought process'}, 
]
  return (
   <><div className='bg-amber-300 xl:pt-20'>
    <h1 className='text-center xl:text-5xl md:text-4xl font-semibold text-green-700 mb-10'>But, <br/>
    Why Should you become a Mindful Marketer?</h1>

{/* desktop */}
    <div className='desktop-slider pb-12'>
<Slider 
        slidesToShow={3}
         dots={false}
         arrows={false}
      infinite={true}
      slidesToScroll={3}
      autoplay={true}
      autoplaySpeed={3000}
        >
         {images.map((image,index)=>(
        <div className="box mt-2" key={index}>
             
        <img className="rounded-3xl h-80 w-96 ml-5" src={image.url} />
        <h1 className='text-center text-3xl font-semibold pb-4'>{image.text}</h1>
  
        </div>
      ))}
       
        </Slider>
</div>

{/* tablet */}
<div className='tablet-slider pb-12  '>
<Slider 
        slidesToShow={2}
        arrows={false}
      infinite={true}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={2000}
        >
         {images.map((image,index)=>(
        <div className=" box" key={index}>
             
        <img className="rounded-3xl h-80 w-80" src={image.url} />
        <h1 className='text-center text-xl font-semibold pb-2'>{image.text}</h1>
  
        </div>
      ))}
       
        </Slider>
</div>

{/* mobile */}
<div className='mobile-slider pb-12  '>
<Slider 
        slidesToShow={1}
        arrows={false}
      infinite={true}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={2000}
        >
         {images.map((image,index)=>(
        <div className="box" key={index}>
             
        <img className="rounded-3xl h-80 w-96" src={image.url} />
        <h1 className='text-center text-xl font-semibold pb-2'>{image.text}</h1>
  
        </div>
      ))}
       
        </Slider>
</div>
</div>
   </>
  )
}

export default SouldYouGo