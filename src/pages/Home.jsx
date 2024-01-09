import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'

function Home() {
  const [uploadVideoResponse,setUploadVideoResponse] = useState([])
  return (
    <div className='container'>
    <div className="container justify-content-between mt-5 mb-5 d-flex ">
      <div className="add-videos">
        <Add setUploadVideoResponse = {setUploadVideoResponse}/>
      </div>
    </div>
    <div className=" w-100 mt-5 mb-5">
      
      <View uploadVideoResponse = {uploadVideoResponse}/>
    </div>
    </div>
  )
}

export default Home