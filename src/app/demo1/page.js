import Link from "next/link";

export default function Page() {
    return <p><h1>This is page 1 of application</h1>
    <p>Keep Browsing</p>
    
    <Link href={"/demo2"}>This will take to second page</Link>
    </p>;
    
  }