import React from 'react'
import vg from "../assets/home.jpg"
import { 
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai"
// import hg from "../assets/2.png"
const Home = () => {
  return (
    <>
      <div className='home' id='home'>Home

        {/* <img src={hg} alt="Graphics"/> */}
        <main >
          <h1>Blue star</h1>
          <p> Solution to all your problem</p>
        </main>
      </div>

      <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
          <p> Solution to all your problem Solution to all your problemSolution to all your problemSolution to all your problemSolution to all your problemSolution to all your problemSolution to all your problemSolution to all your problemSolution to all your problemSolution to all your problemSolution to all your problem</p>
        </div>
      </div>
      <div className='home3' id="about">
        <div>
          
        <h1>who we are ?</h1>
          <p> Solution to all your problem Solution to all your problemSolution to all your problemSolution to all your problemSolution to all your problemSolution to all your problemSolution to all your problemSolution to all your problemSolution to all your problemSolution to all your problemSolution to all your problem</p>
        </div>
      </div>

      <div className='home4'  id="brand">
        <div>
          <h1>brand</h1>
          <article>
            <div style={{
              animationDelay:"0.3s"
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>

            </div>

            
            <div style={{
              animationDelay:"0.5s"
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>

            </div>

            
            <div style={{
              animationDelay:"0.7s"
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>

            </div>

            
            <div style={{
              animationDelay:"0.9s"
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>

            </div>
          </article>
        </div>
      </div>


     
    </>
  )
}

export default Home