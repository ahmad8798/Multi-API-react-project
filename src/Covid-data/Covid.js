import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

export default function Covid() {
    const [apiData,setCovidData]=useState([])
    const [search,setSearch]=useState('')
    const url = 'https://api.rootnet.in/covid19-in/stats/latest'
      
    const getApidata = async()=>{
      await axios.get(url).then(res =>{
          
        setCovidData(res.data.data.regional)
        
        console.log(res.data.data.regional)
     })
    }
      useEffect(()=>{
        console.log('hello')
            getApidata()
      },[])

      const getInputValue = (e)=>{
        setSearch(e.target.value)
      }
      const filterCovidData = apiData.filter(val=>{
        return val.loc.toLowerCase().includes(search.toLocaleLowerCase())
      })
      console.log(apiData)
           
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center my-2'>
      <h1 className='text-center mt-2'>Covid Api Project</h1>
      <input onChange={getInputValue} className='form-control w-75 text-center mt-2' type='search' placeholder='Search Cases By State'/>
      </div>
    <div className='row'>
    {filterCovidData.map(val=>{
      
      return <Card location ={val.loc} totalConfirmed={val.totalConfirmed} deaths={val.deaths} discharged={val.discharged} />
    })}
    </div>
           
    </div>
  )
}
