import React from 'react'

const BackgroundImg = () => {
    const bgImg = {
        name: 'backgroundImg',
        imageUrl: 'https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg'
      }
      
  return (
    <div>
         <img
            className="bgImg"
            src={bgImg.imageUrl}
            style={{
            width: '100%',
            height: '100%'
        }}
      />
    </div>
  )
}

export default BackgroundImg