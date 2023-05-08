import { useHelper } from "@react-three/drei";
import React, {MutableRefObject, useRef} from "react";
import { DirectionalLightHelper } from "three";

const Lights: React.FC = () => {

  const lightRef = useRef<THREE.DirectionalLight>(null)

  useHelper(
    lightRef as MutableRefObject<THREE.DirectionalLight>,
    DirectionalLightHelper, 2,
    0xFF0000
  );
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        ref={lightRef}
        position={[0, 5, 5]}
        castShadow
        shadow-mapSize-height={1000}
        shadow-mapSize-width={1000}
        shadow-camera-left={-20}
        shadow-camera-right={20}
      />
      <hemisphereLight args={["skyblue", "lightgreen", 0.7]} />
    </>
  );
};

export default Lights;
