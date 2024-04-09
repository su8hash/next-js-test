import Link from "next/link";
export default function RandomName(){
    return <> <span>This is Page 2</span>
     <button onClick={()=>alert("hey")}>+Plus+</button>
       <Link href={"/demo"}>visit a client page</Link> </>
}