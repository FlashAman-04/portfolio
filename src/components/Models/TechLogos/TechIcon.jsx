// loads a'.glb model (gltf format)
// adds basic Lightning
//- applies environment reflections for realism
//- optionally tweks the material ( like setting a white color on a specific mesh).

import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei"
import * as THREE from 'three'
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

// -Disables zoom using OrbitControls.

const TechIcon = ({ model }) => {

    const scene = useGLTF(model.modelPath);

    useEffect(() => {
        if (model.name === 'Three Js Developer') {

            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === 'Object_5') {
                    child.material = new THREE.MeshStandardMaterial({ color: "white" })
                }
            })
        }
    }, [scene])
    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" />


            <OrbitControls enableZoom={false} />

            <Float speed={5.5} rotationIntensity={3} floatIntensity={0.9}>
                <group scale={model.scale}>
                    <primitive object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    )
}

export default TechIcon
