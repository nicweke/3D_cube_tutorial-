import React from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";

const Box = () => {
  return (
    <mesh rotation={[10, 10, 0]} position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color="#DD6031" />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight />
      <pointLight intensity={0.3} position={[-1, 2, 4]} />
      <Box />
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
