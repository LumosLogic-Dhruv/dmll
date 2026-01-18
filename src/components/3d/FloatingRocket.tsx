import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const Rocket = () => {
  const rocketRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (rocketRef.current) {
      rocketRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      rocketRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={rocketRef} scale={0.8}>
        {/* Rocket Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.5, 2, 32]} />
          <meshStandardMaterial color="#0066FF" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Rocket Nose */}
        <mesh position={[0, 1.3, 0]}>
          <coneGeometry args={[0.3, 0.6, 32]} />
          <meshStandardMaterial color="#FF6B35" metalness={0.6} roughness={0.3} />
        </mesh>
        
        {/* Fins */}
        {[0, 120, 240].map((angle, i) => (
          <mesh 
            key={i} 
            position={[
              Math.sin((angle * Math.PI) / 180) * 0.5,
              -0.7,
              Math.cos((angle * Math.PI) / 180) * 0.5
            ]}
            rotation={[0, (angle * Math.PI) / 180, 0]}
          >
            <boxGeometry args={[0.1, 0.5, 0.4]} />
            <meshStandardMaterial color="#00D1FF" metalness={0.7} roughness={0.3} />
          </mesh>
        ))}
        
        {/* Engine Glow */}
        <mesh position={[0, -1.2, 0]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <MeshDistortMaterial
            color="#FF6B35"
            emissive="#FF6B35"
            emissiveIntensity={2}
            distort={0.4}
            speed={3}
          />
        </mesh>
      </group>
    </Float>
  );
};

const OrbitingPlanets = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* SEO Planet */}
      <Float speed={1.5} floatIntensity={0.3}>
        <mesh position={[2, 0.5, 0]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color="#0066FF" metalness={0.5} roughness={0.5} />
        </mesh>
      </Float>
      
      {/* Analytics Planet */}
      <Float speed={2} floatIntensity={0.4}>
        <mesh position={[-1.8, -0.3, 1]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#FF6B35" metalness={0.5} roughness={0.5} />
        </mesh>
      </Float>
      
      {/* Social Planet */}
      <Float speed={1.8} floatIntensity={0.35}>
        <mesh position={[1, -0.8, -1.5]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="#00D1FF" metalness={0.5} roughness={0.5} />
        </mesh>
      </Float>
    </group>
  );
};

interface FloatingRocketProps {
  className?: string;
}

const FloatingRocket = ({ className = "" }: FloatingRocketProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0066FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B35" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          color="#00D1FF"
        />
        
        <Rocket />
        <OrbitingPlanets />
      </Canvas>
    </div>
  );
};

export default FloatingRocket;
