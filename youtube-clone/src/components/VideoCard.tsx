export function VideoCard(props:any){
    return <div>
        <img className="rounded-xl" src={props.vidImg} alt="thumbnail photo" />
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className="rounded-full w-20 h-20" src={props.ytImg} alt="YT Channel Photo" />
            </div>
            <div className="col-span-11 pl-5">
                {props.title}
            </div>
            <div className="col-span-11 text-gray-400 text-base">
                {props.ytchannel}
            </div>
            <div className="col-span-11 text-gray-400 text-base">
                {props.views}
            </div>
        </div>
    </div>
}