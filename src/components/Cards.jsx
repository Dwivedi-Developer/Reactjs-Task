import React from 'react'

const Cards = () => {
  return (
    <div className='wrapper m-auto'>
      <div className="cards-container d-flex ">
        <div className='card'>
           <div> <img src="group.png" alt="" />
            <span className='fw-bold ms-2'>People</span></div>
            <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
          <button className='bg-transparent btn1'>Connect</button>
        </div>

        <div className='card'>
            <div><img src="location.png" alt="" />
            <span className='fw-bold'>People</span></div>
            <p>An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.</p>
          <button className='bg-transparent btn1'>Connect</button>
        </div>

        <div className='card'>
           <div> <img src="basket.png" alt="" />
            <span className='fw-bold'>People</span></div>
            <p>An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.</p>
          <button className='bg-transparent btn1'>Connect</button>
        </div>

        <div className='card'>
           <div> <img src="tick.png" alt="" />
            <span className='fw-bold'>People</span></div>
            <p>An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition.</p>
          <button className='bg-transparent btn1'>Connect</button>
        </div>

        
      </div>
    </div>
  )
}

export default Cards
