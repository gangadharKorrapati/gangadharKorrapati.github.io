import  mediaItems from "../metaconf/media.json";

type MediaProps = {
    icon: string,
    url: string
  }

const MediaItem = ({url,icon}:MediaProps) => {
    return (
        <div className="p-2 rounded-md hover:bg-gray-300">
            <a target="_blank" rel="noreferrer" href={url}><img className="w-8 h-8" src={`/img/media/${icon}.svg`} alt={icon}/></a>
        </div>
    )
}


const Media = () => {
    return (
        <div className="flex flex-row justify-center space-x-1 nowrap">
            {mediaItems.map((media)=>{
                return <MediaItem key={media.icon} url={media.url} icon={media.icon}/>
            })}
        </div>
    )
}

export default Media
