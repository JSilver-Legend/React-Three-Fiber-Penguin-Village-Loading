import React, { Suspense, useState, useEffect } from 'react';
import LoadingModel from '../../components/loadingModel';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import LoadingScreen from '../../components/loadingScreen';
import HomePage from '../homePage';
import gsap from 'gsap';
import './style.css';

const LoadingPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isHomeLoading, setIsHomeLoading] = useState(true);
  const [canvasClass, setCanvasClass] = useState(null);
  const [logoClass, setLogoClass] = useState(null);;
  const camera = React.useRef();

  const cameraMove = () => {
    gsap.to(camera.current, {
      duration: 2,
      minDistance: 10,
      maxDistance: 10,
    });
  };

  const homePageLoading = () => {
    setLogoClass('logo-animation');
    setCanvasClass('canvas');
    setTimeout(() => {
      setIsHomeLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (!isLoading) cameraMove();
  }, [isLoading]);

  return (
    <Suspense fallback={null}>
      {
        isHomeLoading ?
          (<>
            {isLoading && <LoadingScreen />}
            <Canvas className={canvasClass} linear camera={{ fov: 70 }} >
              <fog attach="fog" args={[0xffffff, -4, 30]} intensity={0.1} />
              {/* <ambientLight intensity={0.1} /> */}
              <LoadingModel onInitialized={() => setIsLoading(false)} />
              <OrbitControls ref={camera} autoRotate={true} maxDistance={20} minDistance={20} minPolarAngle={3 * Math.PI / 8} maxPolarAngle={3.5 * Math.PI / 8} />
            </Canvas>
            <div className={'logo-click ' + logoClass} onClick={homePageLoading}>
              <img src='img/logo.png' alt='logo' width={100} height={100} />
            </div>
          </>
          )
          : <HomePage />
      }
    </Suspense>
  )
};

export default LoadingPage;