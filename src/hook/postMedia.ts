import { useEffect, useState } from "react";
import Api from "../service/Api";

type MediaProps={
    width:number,
    height:number,
    file:string,
    sizes:{
        full:SizesProps,
        large:SizesProps,
        medium:SizesProps,
    },
}
type SizesProps={
    file:string,
    height:number,
    mime_type:string,
    source_url:string,
    width:number,
}

type MediaData = {
    id:number,
    title:string,
    media_details:MediaProps,
}
type resProp = {
    data:MediaData;
}
export function postMedia(id:number){
    const [media, setMedia] = useState<MediaData>()
    useEffect(()=>{
           Api.getPostMedia(id).then(function(item:resProp|any){
               setMedia(item.data)
           }).catch(err =>{console.log(err)})
    }, [])
    return {media}
}