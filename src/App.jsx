import { Canvas } from '@react-three/fiber';
import './App.css'
import HomeScenes from './scenes/HomeScenes';

function App() {
  /* el renderizador de grafico es WebGl, pero es de bajo nivel su API, la mejor forma es Threejs o desde la libreria React Three Fiber para la interacción 3D y se combina con la liberia Drei */
  return (
    <>
    <div className='App'>
      <h1>Web 3D WorkShop</h1>   
      <h3>Por Lizbeth Grisales Castro</h3>   
    </div>
    {/* entorno de 3D donde se renderiza la imagen*/}
    <Canvas className='canvas' shadows camera={{position: (0, 30, 60), fov: 15}}>
    <HomeScenes/>
    </Canvas>
    </>
  )
}

export default App
