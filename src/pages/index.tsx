import { useEffect, useRef, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

// fiber imports

import { useFrame, useThree, Canvas, useLoader } from "@react-three/fiber";

// drei imports

import { OrbitControls, Stats, useHelper, useTexture, TransformControls } from "@react-three/drei";

// three extra imports 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// my component imports
import MyAnimatingBox from "@/components/MyAnimatingBox";
import { NextPage } from "next";
import Lights from "@/components/Lights";
import Ground from "@/components/Ground";
import {Trees} from '@/components/Trees'
import { Object3D, Vector2, Vector3 } from "three";


// const TexturedSpheres = () => {
//   const map = useTexture("/textures/brick/textures/brick_wall_04_diff_1k.png");

//   const displacementMap = useTexture(
//     "/textures/brick/textures/brick_wall_04_disp_1k.png"
//   );

//   return (
//     <>
//       {/* <TransformControls> */}
//         <mesh scale={[0.5, 0.5, 0.5]} position={[0, 1, 0]} castShadow>
//           <sphereGeometry />
//           <meshStandardMaterial
//             map={map}
//             //displacementMap={displacementMap}
//           />
//         </mesh>
//       {/* </TransformControls> */}
//     </>
//   );
// };
type treeType = {
  
  position: {x: number, z: number},
  box: number,
}

type Props = {
  boundary: number;
  count: number;
};

const Tree: React.FC<Props> = ({boundary, count}) => {
  const [trees, setTrees] = useState<treeType[]>([])

  const updatePosition = (treeArray: treeType[], boundary: number) => {
    treeArray.forEach((tree, index) => {
      tree.position.x = Math.random() * 100
      tree.position.z = Math.random() * 100
    })
    setTrees(treeArray)
  }

useEffect(() => {
  const tmpTrees: treeType[] = []
  for (let index = 0; index < count; index++) {
    tmpTrees.push({
      position: {x: 0, z: 0},
      box: 1
        })
    
  }
  updatePosition(tmpTrees, boundary)

}, [boundary, count])
  
  
  const model = useLoader(
    GLTFLoader,
    "/models/tree.glb"
    
  )
  model.scene.traverse((object) => {

if ((object as THREE.Mesh).isMesh) {
  object.scale.x = 0.5
  object.scale.y = 0.5
  object.scale.z = 0.5
  object.castShadow = true
}

  }) 
  return (
    <>
      <group>
        {trees.map((tree, index) => {
            return (
              <object3D key={index} position={[tree.position.x, 0, tree.position.z]} >
                <primitive object={model.scene.clone()} />
              </object3D>
            );
        })}
        
      </group>
    </>
  );
}

export default function Home() {
  const [testing, setTesting] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <Canvas camera={{ fov: 75, position: [0, 10, 10] }} shadows>
          {testing ? <Stats /> : null}
          {testing ? <axesHelper args={[5]} /> : null}
          {testing ? (
            <gridHelper args={[400, 400]} rotation={[Math.PI / 4, 0, 0]} />
          ) : null}

          <Lights />

          <OrbitControls />
          
            <Tree boundary={50} count={20}/>
          
          <Trees
            scale={[0.5, 0.5, 0.5]}
            position={[-3.5, 0.0, 0.0]}
            rotation={[0.0, Math.PI / 2, 0.0]}
          />

          {/* <TexturedSpheres /> */}
          <Ground />
        </Canvas>
      </div>
    </>
  );
}
