import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Quote() {
const [apiData,setApiData] =  useState()
const options = {
  method: 'POST',
  url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '0b27b72f16msh82906b6efad8f46p1debd1jsnfc30ffcb4031',
    'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
  },
  data: '{"key1":"value","key2":"value"}'
};
const getQuoteData = async()=>{
   await axios.request(options).then(function (response) {
        console.log(response.data);
        setApiData(response.data)
    }).catch(function (error) {
        console.error(error);
    });
    
} 

const cardStyle = {
    "background": "#FAF8F1",
    "box-shadow": "0 8px 8px -4px lightblue"
}

useEffect(()=>{
    getQuoteData()
},[])
  return (
        <div className='container-fluid quote-container'>
            <h1 className='text-center'>Quote Api Project</h1>
            <div className='row  justify-content-center my-5'>
                <div className='col-lg-4 col-md-4 col-sm-12 my-quote-card'>
                        <div style={cardStyle} className='quote-card border rounded p-3 text-center'>
                            <p className='text-body'>{apiData}</p>
                            <div className='button-container d-flex my-2 justify-content-center'>
                            <button className='btn btn-primary' onClick={()=>getQuoteData()}>Next Quote</button>
                        </div>
                        </div>
                        
                </div>
            </div>
        
        </div>
  )
}
