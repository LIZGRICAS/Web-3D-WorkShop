import { Environment, GizmoHelper, GizmoViewport, OrbitControls, RoundedBox, Sphere, Stars } from "@react-three/drei";
import Videoplane from "../componentes/Videoplane";

const HomeScenes = () => {
  return (
    <>

      <OrbitControls />
      {/* con files={./image-png} podemos cargar nuestras propias imagenes de fondo */}
      <pointLight
        position={[10, 15, 15]}
        color="#570c0c"
        castShadow
        intensity={5}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight
        position={[10, 15, -5]}
        color="#570c0c"
        castShadow
        intensity={5}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Environment preset="city" />
      {/* GizmoHelper nos permite entender para donde estamos girando */}
      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper>
      {/* luz, que cambia según el material empleado ej direccional, punto etc */}
      <ambientLight />
      {/* combinando geometrias y materiales obtenemos un mesh, que siempre debe tener estos dos elementos */}
      <mesh position={[0, 1, 0]}>
        {/* Geometria */}
        <boxGeometry />
        {/* material */}
        <meshStandardMaterial color="#c21998" />
      </mesh>
      {/* group permite agrupar mesh */}
      <group position={[0, -3, 0]}>

        {/* video wall */}
        <mesh castShadow receiveShadow position={[0, 5, 0]}>
          {/* Geometria */}
          <boxGeometry args={[17, 10, 1]} />
          {/* material */}
          <meshStandardMaterial
            color="black"
            envMapIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* mesh */}
        <mesh position={[0, -5, 0]} castShadow>
          <cylinderGeometry args={[10, 10, 10, 64]} />
          <meshStandardMaterial
            color="black"
            roughness={0}
            metalness={0}
            envMapIntensity={0.3}
          />
        </mesh>
        {/* video wall */}
        <mesh castShadow receiveShadow position={[0, 5, 0]}>
          <boxGeometry args={[17, 10, 1]} />
          <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
        </mesh>
        {/* Decoraciones */}
        <group position={[0, 0, 0]}>
          <RoundedBox receiveShadow castShadow smoothness={10} radius={0.015} position={[-7, 1, 1.6]} scale={[4.2, 2, 2]}>
            <meshStandardMaterial color="#f4ae00" envMapIntensity={0.5} roughness={0} metalness={0} />
          </RoundedBox>
          <mesh position={[5, 1, 5]} castShadow>
            <icosahedronGeometry />
            <meshStandardMaterial color="#8e00f4" envMapIntensity={0.5} roughness={0} metalness={0} />
          </mesh>
          <mesh receiveShadow castShadow rotation-x={-Math.PI / 2} position={[8, 1.1, 2]} scale={[2, 2, 2]}>
            <boxGeometry args={[1, 1, 1, 3, 3, 3]} />
            <meshStandardMaterial color="#2d2d2d" envMapIntensity={0.5} roughness={0} metalness={0} wireframe />
          </mesh>
        </group> 
        <Sphere />
        {/* <Ground/> */}
        <Videoplane videourl='../../public/avatar_kthz.mp4'/>
        <Videoplane  videourl='../../public/avatar_kthz.mp4' position={[0, 5, -0.51]} rotation-y={Math.PI} />
        {/* <BackgroundBoxes />  */}
      </group>
      <Stars
        radius={50}
        depth={50}
        count={3000}
        factor={10}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
};

export default HomeScenes;
