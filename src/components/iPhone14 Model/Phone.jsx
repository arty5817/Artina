import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Phone(props) {
  const { nodes, materials } = useGLTF("/phone-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_5_Metal_0.geometry}
        material={materials.Metal}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_9_Material_7_0.geometry}
        material={materials.Material_7}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_10_Metal002_0.geometry}
        material={materials["Metal.002"]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_12_Metal001_0.geometry}
        material={materials["Metal.001"]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_16_Glass_0.geometry}
        material={materials.Glass}
        scale={0.01}
      />
      <mesh
        geometry={nodes["Object_23_Plastic_(1)_0"].geometry}
        material={materials.Plastic_1}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_24_Metal003_0.geometry}
        material={materials["Metal.003"]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_91_Plastic_0.geometry}
        material={materials.Plastic}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/phone-transformed.glb");
