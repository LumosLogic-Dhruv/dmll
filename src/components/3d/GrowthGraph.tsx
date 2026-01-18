import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

const GrowthLine = () => {
  const lineRef = useRef<THREE.Group>(null);
  
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 20; i++) {
      const x = (i - 10) * 0.2;
      const y = Math.pow(i / 10, 2) * 1.5 - 1;
      pts.push(new THREE.Vector3(x, y, 0));
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={lineRef}>
      <Line
        points={points}
        color="#0066FF"
        lineWidth={4}
      />
      
      {/* Data Points */}
      {points.filter((_, i) => i % 4 === 0).map((point, i) => (
        <Float key={i} speed={2} floatIntensity={0.2}>
          <mesh position={point}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial
              color="#FF6B35"
              emissive="#FF6B35"
              emissiveIntensity={0.8}
            />
          </mesh>
        </Float>
      ))}
      
      {/* Arrow at the end */}
      <mesh position={[2, 2.5, 0]} rotation={[0, 0, -0.5]}>
        <coneGeometry args={[0.15, 0.4, 16]} />
        <meshStandardMaterial
          color="#00D1FF"
          emissive="#00D1FF"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

const GridLines = () => {
  return (
    <group position={[0, 0, -0.5]}>
      {/* Horizontal lines */}
      {[-1.5, -0.75, 0, 0.75, 1.5].map((y, i) => (
        <Line
          key={`h-${i}`}
          points={[
            new THREE.Vector3(-2.5, y, 0),
            new THREE.Vector3(2.5, y, 0),
          ]}
          color="#0066FF"
          lineWidth={1}
          opacity={0.2}
          transparent
        />
      ))}
      
      {/* Vertical lines */}
      {[-2, -1, 0, 1, 2].map((x, i) => (
        <Line
          key={`v-${i}`}
          points={[
            new THREE.Vector3(x, -2, 0),
            new THREE.Vector3(x, 3, 0),
          ]}
          color="#0066FF"
          lineWidth={1}
          opacity={0.2}
          transparent
        />
      ))}
    </group>
  );
};

interface GrowthGraphProps {
  className?: string;
}

const GrowthGraph = ({ className = "" }: GrowthGraphProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0066FF" />
        <pointLight position={[-10, 5, -10]} intensity={0.5} color="#FF6B35" />
        
        <GridLines />
        <GrowthLine />
      </Canvas>
    </div>
  );
};

export default GrowthGraph;
