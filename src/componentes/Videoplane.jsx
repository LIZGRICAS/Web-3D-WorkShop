import { useEffect, useState } from "react";
import * as THREE from 'three';

const Videoplane = ({ videourl, ...props }) => {

    /* crear la textura de video */
    const [video] = useState(
        () => Object.assign(document.createElement('video'), { src: videourl, crossOrigin: 'Anonymous', loop: true, muted: true })
      )
      useEffect(() => {
        video.play()
      }, [video])

  return (
    <mesh castshadow receiveshadow position={[0, 5, 0.51]} rotation={[0, 0, 0]} scale={[16, 9, 1]} {...props}>
      <planeGeometry/>
      {/* meshbasicMaterial no reacciona a la luz */}
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding}/>
      </meshBasicMaterial>
    </mesh>
  )
}

export default Videoplane