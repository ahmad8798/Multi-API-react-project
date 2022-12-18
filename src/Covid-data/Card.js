import React from 'react'

export default function Card(props) {
  const cardStyle = {
    "background": "#FAF8F1",
    "box-shadow": "0 8px 8px -4px lightblue"
}
  return (
    <>
       
                <div className='col-lg-3 col-md-6 d-flex justify-content-center'>
                        <div style={cardStyle} className='My-card border w-100 mx-3 my-3 px-3 py-3 border rounded'>
                                <div className='card-top'>
                                    <p className='text-center text-body'><strong>{props.location}</strong></p>
                                </div>
                                <div className='card-bottom my-3'>
                                    <p className='text-body'><strong>Total Confirmed cases: </strong>{props.totalConfirmed}</p>
                                    <p className='text-body'><strong>Total Deaths: </strong>{props.deaths}</p>
                                    <p className='text-body'><strong>Discharged: </strong>{props.discharged}</p>
                                </div>
                        </div>
                </div>
        
    </>
  )
}
