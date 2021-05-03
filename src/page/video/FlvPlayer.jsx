import React, { useEffect } from 'react';


const FlvPlayer = () => {

  useEffect(() => {
    const { flvjs } = window;
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('videoElement');
      var flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: 'http://106.14.191.219/live?port=8554&app=live&stream=room'
      });
      console.log(flvPlayer);
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();
    }
  }, [])
  
  return (
    <video name="videoElement" id="videoElement" class="centeredVideo" controls muted autoplay width="100%" height="100%">
      
    </video>
  )
}

export default FlvPlayer;