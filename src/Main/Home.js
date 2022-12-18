import React from 'react'
import '../Main/Home.css'
export default function Home() {


  return (
    <>
      <div className='container-fluid'>
        <span><h5 className='text-center my-3'>This project contains 4 different pages integrated with different APIs and bulit With React and React Router DOM</h5></span>
        <div className='row  mx-1 justify-content-center'>
          <div className='col-lg-4 p-3 rounded  col-sm-10  '>
            <div className='top'>
              <p className='text-body'><strong>1.Crypto Currency</strong></p>
            </div>
            <div className='bottom'>
              <p className='text-body'>This page used Crypto currency Api which show diffrenet Crypto currencies data where you can search them by their name and price.</p>
            </div>

          </div>
        </div>
        <div className='row  mx-1 justify-content-center'>
          <div className='col-lg-4 p-3 rounded col-sm-10  '>
            <div className='top'>
              <p className='text-body'><strong>2.Covid </strong></p>
            </div>
            <div className='bottom'>
              <p className='text-body'>This page used Covid Api which contains different states covid data within india like total no of cases, deaths and discharged. </p>
            </div>

          </div>
        </div>
        <div className='row  mx-1 justify-content-center'>
        <div className='col-lg-4 p-3 rounded col-sm-10  '>
          <div className='top'>
            <p className='text-body'><strong>2.Quote </strong></p>
          </div>
          <div className='bottom'>
            <p className='text-body'>This page used Quote Api which displays Famous People's Quotes. when each time you click on "Next quote" button  new quote will Appear.</p>
          </div>

        </div>
      </div>
      <div className='row  mx-1 justify-content-center'>
        <div className='col-lg-4 p-3 rounded col-sm-10  '>
          <div className='top'>
            <p className='text-body'><strong>4.Login</strong></p>
          </div>
          <div className='bottom'>
            <p className='text-body'>This page Contains A User Login Form built with Validation functionality.</p>
          </div>

        </div>
      </div>
          <p className='text-end p-3 text-body'><strong>- Ahmad</strong></p>
      </div>

    </>
  )
}
