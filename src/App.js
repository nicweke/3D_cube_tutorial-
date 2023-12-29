import React from "react";
import "./App.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, extend, useThree } from "react-three-fiber";

extend({ OrbitControls });

const Cube = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color="#69B578" />
    </mesh>
  );
};

const Scene = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return (
    <>
      <ambientLight />
      <pointLight rotation={[-1, 2, 4]} intensity={0.3} />
      <Cube position={[0, 0, 0]} rotation={[10, 10, 0]} />
      <Cube position={[3, 0, 0]} rotation={[10, 20, 0]} />
      <orbitControls args={[camera, domElement]} />
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default App;
