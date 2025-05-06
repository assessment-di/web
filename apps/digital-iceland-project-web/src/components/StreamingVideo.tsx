import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'

const StreamingVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    const videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'

    if (video) {
      if (Hls.isSupported()) {
        const hls = new Hls()
        hls.loadSource(videoSrc)
        hls.attachMedia(video)

        hls.on(Hls.Events.ERROR, (event, data) => {
          console.error('HLS error:', data)
        })

        return () => {
          hls.destroy()
        }
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc
      } else {
        console.error('HLS is not supported.')
      }
    }
  }, [])

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <video
        ref={videoRef}
        controls
        style={{ width: '100%', maxWidth: '800px' }}
        autoPlay
      />
    </div>
  )
}

export default StreamingVideo
