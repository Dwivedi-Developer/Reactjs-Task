import React from 'react'

const Testimonials = () => {
  return (
    <div className=' testimonial '>
        <div className='testimonial-content d-flex flex-column gap-4'>
            
                <div>
                    <img src='apost.png' alt='symbol' />
                    <span className='ms-3 h3'>Testimonials</span>
                </div>
                <p>
                In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                </p>
                <div className=" music-part d-flex gap-5">
                <div className="audio-box  d-flex align-items-center justify-content-evenly">
                    <div className='play-circle rounded-circle d-flex justify-content-center align-items-center'>
                        <img src='play.png'></img>
                    </div>
                    <div className='seek-bar d-flex align-items-center position-relative'>
                    <img src='thumb.png'></img>
                    <div className='bar position-relative bg-white'></div>
                    <span className='ms-2'>0:00</span>
                    </div>

                    <div className='position-relative'>
                       <img className='mic position-absolute' src="mic.png" alt="" />
                       <img src="women.png" alt="" />
                    </div>
                </div>
                <div className="identity d-flex align-items-center gap-4">
                    <img src='women.png 'height="75px" width="75px" alt="" />
                   <div className='d-flex flex-column '><span className='fw-bold '>
                    Subha Nagarjan
                    </span>
                    <p className='text-primary small'>
                        classical Dancer
                    </p>
                    </div>
                </div>
                </div>
           
        </div>
      
    </div>
  )
}

export default Testimonials
