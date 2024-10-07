import { useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import New from './assets/Mnew'
function App() {


const a = useRef(10)
const ref = useRef()




useEffect(() => {
    a.current = a.current+1;
  ref.current.style.background = 'green'
  
  console.log(a+1)
     console.log(`this is valu of ${a.current}`)
  },[]);
  

  return (
    <>
      <div>
        <New/>
       
        <button  ref={a}>add</button>
       
      
      </div>
      
      <div className="card">
        <button ref={ref}>d</button>
        
      </div>
      <p className="read-the-docs">
      <button  onClick={()=>{ref.current.style.display = 'none' }}>new</button>
      <button  onClick={()=>{ref.current.style.display = 'block' }}>2</button>
     
        Click on the Vite and React logos to learn more
        
      </p>
    </>
  )
}

export default App
