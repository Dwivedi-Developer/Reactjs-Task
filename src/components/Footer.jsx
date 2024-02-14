import React from 'react'

const Footer = () => {
  return (
    <div className='foot-img'>
      <img src='End.png'  />
      <div className='footer bg-white'>
      <div className='foot-item d-flex justify-content-between'>
        <div>
        <h5>Hobbycue</h5>
       <ul className='list-unstyled'>
        <li>About Us</li>
        <li>Our Services</li>
        <li>Work with Us</li>
        <li>FAQ</li>
        <li>Contact Us</li>
       </ul>

        </div>

        <div>
        <h5>How Do I</h5>
       <ul className='list-unstyled'>
        <li>Sign Up</li>
        <li>Add a listing</li>
        <li>Claim a Listing</li>
        <li>Post a Query</li>
        <li>Add a Blog Post</li>
        <li>Other Queries</li>
       </ul>
</div>

<div>
<h5>Quick Links</h5>
       <ul className='list-unstyled'>
        <li>Listings</li>
        <li>Blog Posts</li>
        <li>Shop/Store</li>
        <li>Community</li>
       
       </ul>
        </div>

        <div className='d-flex flex-column justify-content-between'>
<div>
   <h5>Social Media</h5>
   <div className='social-img  d-flex gap-3'>
    <img src='Group 63.png'>
    </img>
    <img src='Group 62.png'>
    </img>
    <img src='Group 61.png'>
    </img>
    <img src='Group 60.png'>
    </img>
    <img src='Group 59.png'>
    </img>
    <img src='Group 58.png'>
    </img>
    <img src='Group 57.png'>
    </img>
    <img src='Group 56.png'>
    </img>
   </div>
   </div>

   <div>
    <h5>Invite Friends</h5>
    <form className='social-input position-relative'>
                <input className='search position-relative px-2 border-end-0' type="search" placeholder="Email ID" aria-label="Search" />
                <span className='invite search-icon position-absolute text-white  ps-1 py-2'>Invite</span>
            </form>
   </div>
        </div>

      </div>
      </div>
      <div className=' end d-flex align-items-center justify-content-center'>
        <h6>&#169; Purple Cues Private Limited</h6>
      </div>

    </div>
  )
}

export default Footer
