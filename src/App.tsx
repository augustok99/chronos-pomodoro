import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading.tsx'

function App() {
  console.log('Oi');
  

  return (
    <>
      <Heading attr={123} attr2='String'> Olá Mundo 1 </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Pariatur laborum aspernatur impedit assumenda maiores cum consequuntur! Esse.
      </p>
    </>
  )
}

export default App
