
import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";

function SierraModel() {
  return (
    <group position={[0, -0.45, 0]} scale={1.15}>
      {/* Main SUV body */}
      <mesh position={[0, 0.65, 0]} castShadow>
        <boxGeometry args={[3.8, 0.85, 1.65]} />
        <meshStandardMaterial color="#c8cbd0" metalness={0.75} roughness={0.25} />
      </mesh>

      {/* Front bonnet */}
      <mesh position={[1.35, 1.0, 0]} castShadow>
        <boxGeometry args={[1.05, 0.32, 1.58]} />
        <meshStandardMaterial color="#d8dadd" metalness={0.7} roughness={0.25} />
      </mesh>

      {/* Roof */}
      <mesh position={[-0.15, 1.45, 0]} castShadow>
        <boxGeometry args={[2.05, 0.65, 1.5]} />
        <meshStandardMaterial color="#222831" metalness={0.4} roughness={0.3} />
      </mesh>

      {/* Panoramic glass */}
      <mesh position={[-0.15, 1.47, 0.765]}>
        <boxGeometry args={[1.9, 0.48, 0.025]} />
        <meshStandardMaterial color="#172b3d" metalness={0.7} roughness={0.15} />
      </mesh>

      {/* Front windshield */}
      <mesh position={[0.92, 1.25, 0]} rotation={[0, 0, -0.25]}>
        <boxGeometry args={[0.08, 0.7, 1.42]} />
        <meshStandardMaterial color="#172b3d" metalness={0.65} roughness={0.2} />
      </mesh>

      {/* Wheels */}
      {[-1.2, 1.2].map((x) =>
        [-0.86, 0.86].map((z) => (
          <group key={`${x}-${z}`} position={[x, 0.25, z]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.43, 0.43, 0.2, 32]} />
              <meshStandardMaterial color="#101216" roughness={0.9} />
            </mesh>
            <mesh position={[0, z > 0 ? 0.11 : -0.11, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.23, 0.23, 0.21, 32]} />
              <meshStandardMaterial color="#aeb5bd" metalness={0.85} roughness={0.2} />
            </mesh>
          </group>
        ))
      )}

      {/* Front grille */}
      <mesh position={[1.91, 0.65, 0]}>
        <boxGeometry args={[0.06, 0.36, 0.85]} />
        <meshStandardMaterial color="#171a1f" metalness={0.4} />
      </mesh>

      {/* Headlights */}
      {[-0.57, 0.57].map((z) => (
        <mesh key={z} position={[1.95, 0.95, z]}>
          <boxGeometry args={[0.07, 0.09, 0.42]} />
          <meshStandardMaterial
            color="#e9f8ff"
            emissive="#9bdfff"
            emissiveIntensity={1.5}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function CarScene() {
  return (
    <div style={{ width: "100%", height: "480px" }}>
      <Canvas camera={{ position: [5, 3, 6], fov: 40 }} shadows>
        <ambientLight intensity={1.4} />
        <directionalLight position={[5, 8, 5]} intensity={2.5} castShadow />

        <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.15}>
          <SierraModel />
        </Float>

        <ContactShadows
          position={[0, -0.22, 0]}
          opacity={0.45}
          scale={8}
          blur={2}
        />

        <Environment preset="city" />

        <OrbitControls
          enablePan={false}
          minDistance={4}
          maxDistance={9}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
