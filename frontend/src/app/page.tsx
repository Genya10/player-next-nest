import { Player } from "@/player/Player"
import Link from "next/link";

export default function Home() {

  return (
    <>
     <h1 className="font-semibold text-4xl text-center mt-16 mb-8">
      Minimal player
      </h1>  
      <div className="text-center text-2xl mb-10">
        <Link href='./upload-video' 
              className="hoverPrimary">
          Upload video
        </Link>
      </div>
      <div className="flex items-center justify-center">   
        <Player/>
      </div>
  </>
  );
}
