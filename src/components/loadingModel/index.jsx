import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const LoadingModel = ({ onInitialized }) => {

  const { nodes, materials, animations } = useGLTF('glb/test_3.glb');
  console.log('nodes-->', nodes, animations, materials);
  const group = useRef();
  const { actions } = useAnimations(animations, group);

  const handleMounted = () => {
    onInitialized();
  };

  useEffect(() => {
    if (nodes && materials && animations) handleMounted();
  }, [nodes, materials, animations]);


  useEffect(() => {
    // actions['All Animations'].play();
  }, [actions]);

  return (
    <group>
      <group ref={group} position={[0, -1, 0]} scale={[20, 20, 20]} dispose={null}>
        <mesh
          name="model_1"
          geometry={nodes.model_1.geometry}
          material={materials.Material_001}
        />
        <mesh
          name="model_2"
          geometry={nodes.model_2.geometry}
          material={materials.Material_001}
        />
        <mesh
          name="model_3"
          geometry={nodes.model_3.geometry}
          material={materials.Material_001}
        />
        <mesh
          name="model_4"
          geometry={nodes.model_4.geometry}
          material={materials.Material_001}
        />
        <mesh
          name="model_5"
          geometry={nodes.model_5.geometry}
          material={materials.Material_001}
        />
        <mesh
          name="model_6"
          geometry={nodes.model_6.geometry}
          material={materials.Material_001}
        />
        <mesh
          name="model_7"
          geometry={nodes.model_7.geometry}
          material={materials.Material_001}
        />
        <mesh
          name="model_8"
          geometry={nodes.model_8.geometry}
          material={materials.Material_001}
        />
        <mesh scale={[50, 50, 1]} position={[0, -0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry />
          <meshBasicMaterial transparent opacity={0.7} color="#00B7FE" />
        </mesh>
      </group>
      <group>
        <pointLight intensity={1} position={[0, 5, 0]} />
      </group>
    </group>
  )
}

export default LoadingModel;