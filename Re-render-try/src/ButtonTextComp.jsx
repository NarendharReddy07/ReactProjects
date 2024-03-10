import React from 'react'
import { useState } from 'react'

function ButtonTextComp() {
    return(
    <>
      <MemoDemoFunction />
      
      <PrintName name="gopal" />
      <PrintName name="gopal" />
      <PrintName name="gopal" />
    </>
    );
  
}
// function PrintName({name}){
//     return(
//         <>
//         <h4>my name is {name}</h4>
       
//         </>
//     )
// }
//aim is to reduce re-rendering
//there are 2 ways to reducing re-rendering of components(memoising) i.e only useful stmts should re-render
//1 way is to shift useState to below 

function MemoDemoFunction(){
    const [name, setName] = useState("narendhar")
    // function nameSetting(){
    //     setName(Math.random())
    // }
  return (
    <>
      {/* <button onClick={nameSetting}> click me to change text</button> */}
      <button onClick={()=> {setName(Math.random())}}> click me to change text</button>
      <PrintName name={name} />
    </>
  )
}

//2 way is to use React.memo ,here react iteself checks for rerendered stmnts or components
const PrintName=React.memo( function PrintName({name}){
            return(
                <>
                <h4>my name is {name}</h4>
               
                </>
            )
        }
)
export default ButtonTextComp
