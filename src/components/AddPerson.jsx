import React from 'react'

const AddPerson = () => {
  return (
    <div className='person '>
      <div className='d-flex flex-column  details bg-white border '>
        <div><img src="Add.png" alt="Add" />
        <span className='fw-bold ms-3'>Add Your Own</span></div>
        <p className='person-detail'>
        Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
        </p>
        <button className='btn1'>Add new</button>
      </div>
    </div>
  )
}

export default AddPerson
