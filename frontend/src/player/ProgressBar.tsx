export function ProgressBar({progress}: {progress:number}) {

    return (
        <div className="relative">
         <div
           style={{
            width:`${progress}%`
           }}
             className='h-1 bg-primary relative'
            >
             <div className="absolute top-0 right-0 w-2 h-2 bg-primary
                  rounded-full border border-solid border-white shadow"/>
         </div>
        </div>
    )
}