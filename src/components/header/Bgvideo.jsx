import React from 'react'
import Video from '../../assets/video.MOV'
const Bgvideo = () => {
  return (
    <div className = "bgvideo">
        <video src ={Video} autoPlay loop muted/>
    </div>
  )
}

export default Bgvideo