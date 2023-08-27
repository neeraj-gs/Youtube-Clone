import

const VIDEOS =[{

},{

}] //an array which has a harcoded list of videos 



export const VideoGrid = ()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                title:{video.titel},
                image
                ...add all here
            ></VideoCard>
        </div>)}

    </div>
}