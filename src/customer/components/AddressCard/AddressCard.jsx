import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div>
        <div className='space-y-2 text-center'>
            <p className='font-bold'>{address?.firstName} {address?.lastName}</p>
            <p>{address?.state}, {address?.streetAddress}, {address?.zipCode}</p>
            <div className='space-y-1'>
                <p className='font-semibold'>Phone Number</p>
                <p>{address?.mobile}</p>
            </div>
        </div>
    </div>
  )
}

export default AddressCard;