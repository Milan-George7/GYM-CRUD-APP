import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { uploadNewVideoAPI } from '../Services-Api/allAPI'

function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUploadVideo] = useState({
    id:"",caption:"",url:"",link:""
  })
  const [show, setShow] = useState(false);
  console.log(uploadVideo);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getYoutubeEmbedLink = (e)=>{
    const {value} = e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  const handleUpload = async()=>{
    const {id,caption,url,link} = uploadVideo
    if(!id || !caption || !url || !link){
      alert("Upload form is incomplete")
    }else{
      const result = await uploadNewVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose()

        setUploadVideo({
          id:"",caption:"",url:"",link:""
        })

        // applying state lifting
        setUploadVideoResponse(result.data)

      }else{
        alert(result.message)
      }
      
    }

  }

  return (
    <>
    <hr />
    <div className="d-flex   mt-5">
    
      <h3 className='me-5' style={{height:'60px'}}>All Workouts</h3>
      

      <div className='d-flex align-items-center ms-5'>
        <h5  style={{height:'30px'}}>Add More</h5>
        <button onClick={handleShow} style={{color:'white'}} className='btn'><i class="fa-solid fa-upload"></i></button>
      </div>
    </div>
    <hr />

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        
        <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading Video Id" onChange={e=>setUploadVideo({...uploadVideo, id:e.target.value})}/>
      </FloatingLabel>


      <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video Caption"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading Video Caption"onChange={e=>setUploadVideo({...uploadVideo, caption:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading Video Image URL" onChange={e=>setUploadVideo({...uploadVideo, url:e.target.value})}/>
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video Youtube Link"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading Video Youtube Link"  onChange={getYoutubeEmbedLink} />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload}  variant="info">Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add