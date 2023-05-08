/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Tree_1: THREE.Mesh;
    Tree_2: THREE.Mesh;
    Tree_3: THREE.Mesh;
    Tree_4: THREE.Mesh;
  };
  materials: {
    ["trunk color"]: THREE.MeshPhysicalMaterial;
    ["branch color.001"]: THREE.MeshPhysicalMaterial;
    ["branch color"]: THREE.MeshPhysicalMaterial;
    ["branch color.003"]: THREE.MeshPhysicalMaterial;
  };
  boundary: number;
  count: number;
};



export function Trees(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/tree.glb") as GLTFResult;
  const [color, setColor] = useState('hotpink')
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_1.geometry}
        material={materials["trunk color"]}
      />
      <mesh
      onClick={() => setColor('green')}
        castShadow
        receiveShadow
        geometry={nodes.Tree_2.geometry}
        material={materials["branch color.001"]}
        material-color={color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_3.geometry}
        material={materials["branch color"]}
        material-color={color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_4.geometry}
        material={materials["branch color.003"]}
        material-color={color}
      />
    </group>
  );
}

useGLTF.preload("/models/tree.glb");
