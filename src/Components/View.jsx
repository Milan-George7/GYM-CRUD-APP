import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI } from '../Services-Api/allAPI'

function View({uploadVideoResponse}) {
  const [allVideos,setAllVideos] = useState([])
  const [deleteResponse,setDeleteResponse] = useState(false)
  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteResponse(false)
  },[uploadVideoResponse,deleteResponse])

  const getAllUploadedVideos = async ()=>{
    const result = await getAllVideoAPI()
    if(result.status===200){
      console.log(result);
      setAllVideos(result.data)
    }else{
      console.log("API Failed");
      setAllVideos([])
    }
  }

  return (
    <>
     <Row>

     { 
     allVideos?.length>0?allVideos.map(video=>(
     <Col className='mb-2' sm={12} md={6} lg={4} xl={3}>
        <VideoCard setDeleteResponse={setDeleteResponse} video={video} />
      </Col>
      )):<p className='fs-3 text-warning fw-bolder'>No videos are Uploaded yet</p>
      }

     </Row>
    </>
  )
}

export default View