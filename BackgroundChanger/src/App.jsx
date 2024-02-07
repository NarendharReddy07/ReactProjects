import { useState } from 'react'
import './App.css'

function App() {
  const [BgColor, setBgColor] = useState('olive')
  
  return (
    <>
    <div className=" h-screen w-full flex items-end  justify-center  " style={{backgroundColor:BgColor}} >
      <div className=" flex  px-2 py-2  pt-2 justify-evenly rounded-3xl bg-slate-300   space-x-4">
            
              <button onClick={()=>setBgColor("red")} className="  w-10  rounded bg-red-600 text-whilte  "> red</button>
            
              <button onClick={()=>setBgColor("green")} className="  w-12  rounded bg-green-500 text-whilte  "> green</button>

              <button onClick={()=>setBgColor("violet")} className="  w-10  rounded bg-violet-400 text-whilte  "> violet</button>
            
              <button onClick={()=>setBgColor("yellow")} className="  w-12  rounded  bg-yellow-200 text-whilte  "> yellow</button>
            
              <button onClick={()=>setBgColor("blue")} className="  w-10  rounded bg-blue-400 text-whilte  "> blue</button>
      </div>
    </div>
     
    </> 
  )
}

export default App
