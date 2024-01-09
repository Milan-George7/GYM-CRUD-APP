import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Card.css'
function LandingPage() {
  return (
    <div className='container mb-5'>
    <div className="row  align-items-center m-5">
      <div className="col-lg-5">
        <h3 style={{height:'60px'}}>Ready To <span style={{color:'red'}} >Get in Shape</span></h3>
      <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni neque, modi porro perspiciatis dolores magnam, quas, quisquam placeat cumque atque amet repellat aut voluptate ducimus obcaecati nam laboriosam nemo. Rem?</p>
      <Link to={'/home'} style={{color:'black',background:'red'}} className="btn  mt-5 fw-bolder rounded">Get Started</Link>
      </div>
      <div className="col"></div>
      <div className="col-lg-6">
        <img className="img-fluid" src="https://media3.giphy.com/media/3o6ZtnPSPAoaKi2cVO/giphy.gif?cid=ecf05e47vdxuiu66gz6fhtfi9esdp7ra3g9rxvrxjx9xrkby&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="no-image"  />
      </div>
    </div>

    
    
    <div className='Services mt-5 mb-5'>
   <h3 style={{height:'60px'}} className="text-center text-info mt-5">Services</h3>

   <div class="m-5 d-flex justify-content-evenly align-items-center">
  
  <div  class="cardss mt-3">
     <img class="cardss-img" src="https://nypost.com/wp-content/uploads/sites/2/2023/01/powder2.jpg?quality=75&strip=all" alt=""/>
     <div class="cardss-body">
      <h1 style={{height:'60px'}} class="cardss-title">Supplements</h1>
       <p class="cardss-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita error nulla architecto esse deserunt perspiciatis est impedit quam, quo tempora, explicabo, vel maxime sequi corrupti ipsum velit odit ea. Nulla!</p>

       <button class="cardss-button">Read More</button>
     </div>
  </div>

 
  <div  class="cardss mt-3">
    <img class="cardss-img" src="https://www.bodybuilding.com/images/2020/january/what-the-best-personal-trainers-know-that-you-dont-tall.jpg" alt=""/>
    <div class="cardss-body">
     <h1 style={{height:'60px'}} class="cardss-title">P T</h1>
      <p class="cardss-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita error nulla architecto esse deserunt perspiciatis est impedit quam, quo tempora, explicabo, vel maxime sequi corrupti ipsum velit odit ea. Nulla!</p>

      <button class="cardss-button">Read More</button>
    </div>
 </div>
  

  
  <div  class="cardss mt-3">
    <img class="cardss-img" src="https://images.pexels.com/photos/8401091/pexels-photo-8401091.jpeg?cs=srgb&dl=pexels-rdne-stock-project-8401091.jpg&fm=jpg" alt=""/>
    <div class="cardss-body">
     <h1 style={{height:'60px'}} class="cardss-title">Merch</h1>
      <p class="cardss-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita error nulla architecto esse deserunt perspiciatis est impedit quam, quo tempora, explicabo, vel maxime sequi corrupti ipsum velit odit ea. Nulla!</p>

      <button class="cardss-button">Read More</button>
    </div>
 </div>
  
  
 
  
</div>
    
   </div>
    
    <div className="features mt-5 mb-5">
      <h3 style={{height:'60px'}} className="text-center text-info mt-5">Features</h3>
      <div className="cards mt-5 d-flex justify-content-between">
        {/* card 1 */}
        <Card border="danger" style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media1.giphy.com/media/4EFt4UAegpqTy3nVce/giphy.gif?cid=ecf05e47pu5igijbbi4rojsclmenuu7q88wjscxu9nzaephp&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>Uploading Videos</Card.Title>
        <Card.Text>
        user can upload workout videos.
        </Card.Text>
      
      </Card.Body>
    </Card>

    {/* card 2 */}
    <Card border="danger" style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media1.giphy.com/media/wGhhYvQdd3bs8djAFr/giphy.gif?cid=ecf05e475zgliydjheinc7hu3gv1ap8qbzeah4f3s8f59tpm&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>Workout n' watch</Card.Title>
        <Card.Text>
        You can refer these videos for exercising.
        </Card.Text>
      
      </Card.Body>
    </Card>

    {/* card 3 */}
    <Card border="danger" style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media2.giphy.com/media/Y5zCzDO5ueFEWKW8uS/giphy.gif?cid=ecf05e47an4ybl2zjhaaa29vfdnsn84aep6lua9zs91rerfv&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>Watch History</Card.Title>
        <Card.Text>
        Users are able to see the history of watched videos.
        </Card.Text>
      
      </Card.Body>
    </Card>
      </div>
    </div>

   
   

   </div>

    )
}

export default LandingPage