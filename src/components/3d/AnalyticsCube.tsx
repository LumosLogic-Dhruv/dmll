import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

const DataCube = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      cubeRef.current.rotation.y += 0.005;
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={groupRef}>
        {/* Main Cube */}
        <RoundedBox
          ref={cubeRef}
          args={[1.5, 1.5, 1.5]}
          radius={0.1}
          smoothness={4}
        >
          <meshStandardMaterial
            color="#0066FF"
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.85}
          />
        </RoundedBox>

        {/* Inner Glowing Core */}
        <mesh scale={0.6}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#00D1FF"
            emissive="#00D1FF"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Data Lines */}
        {[...Array(6)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin((i / 6) * Math.PI * 2) * 1.2,
              Math.cos((i / 6) * Math.PI * 2) * 1.2,
              0,
            ]}
          >
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#FF6B35"
              emissive="#FF6B35"
              emissiveIntensity={1}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const FloatingBars = () => {
  const barsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (barsRef.current) {
      barsRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        mesh.scale.y = 0.5 + Math.sin(state.clock.elapsedTime * 2 + i * 0.5) * 0.5;
      });
    }
  });

  return (
    <group ref={barsRef} position={[0, -1.5, 0]}>
      {[-1, -0.5, 0, 0.5, 1].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]}>
          <boxGeometry args={[0.25, 1, 0.25]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#0066FF" : "#00D1FF"}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

interface AnalyticsCubeProps {
  className?: string;
}

const AnalyticsCube = ({ className = "" }: AnalyticsCubeProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0066FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B35" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.6}
          color="#00D1FF"
        />
        
        <DataCube />
        <FloatingBars />
      </Canvas>
    </div>
  );
};

export default AnalyticsCube;
