export function VideoCard(){
    return <div>
        <img className="rounded-xl" src="" alt="thumbnail photo" />
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className="rounded-full w-20 h-20" src="" alt="YT Channel Photo" />
            </div>
            <div className="col-span-11 pl-5">
                Text Here
            </div>
            <div className="col-span-11 text-gray-400 text-base">
                Title Name YT Channel
            </div>
            <div className="col-span-11 text-gray-400 text-base">
                Views 
            </div>
        </div>
    </div>
}