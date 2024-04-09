'use client'

import { useState } from "react"

export default function Page(){
    let [x,setX] = useState(1);

    return <> <div>This is client page click the button to increase </div>
     <button onClick={()=>setX(x++)}>+</button>
     </>
}