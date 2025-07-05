import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
import { Decal,Float,OrbitControls,Preload,useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { useRef, useEffect } from 'react';

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.55}/>
      <directionalLight position={[0,0,0.25]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial 
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        />

        <Decal
        position={[0,0,1]}

        rotation={[2*Math.PI,0,6.25]}
        flatShading
        map={decal}
        />

      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  // Custom OrbitControls settings for oscillating rotation
  // We'll use a ref and effect to control the azimuthal angle

  const controlsRef = useRef();

  useEffect(() => {
    let direction = 1;
    let angle = -Math.PI / 2;
    let frame;

    const animate = () => {
      if (!controlsRef.current) return;
      // Oscillate between min and max azimuth angle
      angle += direction * 0.01;
      if (angle > Math.PI / 2) {
        angle = Math.PI / 2;
        direction = -1;
      }
      if (angle < -Math.PI / 2) {
        angle = -Math.PI / 2;
        direction = 1;
      }
      controlsRef.current.setAzimuthalAngle(angle);
      controlsRef.current.update();
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return(
    <Canvas
      frameloop='always'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={2}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 1.8}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
 
  }

export default BallCanvas