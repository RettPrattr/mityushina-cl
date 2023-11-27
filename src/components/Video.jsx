import React, {useRef, useEffect} from 'react'
import findImageUrl from '@/components/utils/findImageUrl'

const Video = (props) => {

  const {video, poster} = props

  return (
    <div>
        <video 
          classname='video' 
          nocontrols 
          loop 
          autoPlay 
          playsInline 
          muted={true} 
          width="100%" 
          height="auto" 
          src={findImageUrl(video, 'url')}
          poster={poster?.data && findImageUrl(poster, 'url')}
        />
    </div>
  )
}

export default Video
