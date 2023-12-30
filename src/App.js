import "./App.css";
import { Canvas, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { useState } from "react";

extend({ OrbitControls });

const Cube = (props) => {
  const [isBig, setIsBig] = useState(false);
  const size = isBig ? "2" : "1";
  const [isHovered, setIsHovered] = useState(false);
  const color = isHovered ? "black" : "green";

  return (
    <mesh
      {...props}
      onClick={() => setIsBig(!isBig)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxGeometry attach="geometry" args={[size]} />
      <meshStandardMaterial attach="material" color={color} />
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
      <pointLight position={[-1, 2, 4]} />
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
