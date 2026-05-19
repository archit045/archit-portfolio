import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

const Sphere = () => {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh>
        <icosahedronGeometry args={[2, 1]} />

        <meshStandardMaterial
          color="#22d3ee"
          wireframe
        />
      </mesh>
    </Float>
  );
};

const TechSphere = () => {
  return (
    <div className="w-full h-[500px]">

      <Canvas camera={{ position: [0, 0, 6] }}>

        <ambientLight intensity={1.5} />

        <directionalLight position={[2, 2, 2]} />

        <Sphere />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
        />

      </Canvas>

    </div>
  );
};

export default TechSphere;