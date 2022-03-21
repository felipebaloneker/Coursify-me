import { useEffect } from "react";
import Api from "../service/Api";
import { useState } from 'react'
type MediaProps={
    width:number,
    height:number,
    file:string,
}
type MediaData={
    id:number,
    title:string,
    media_details_size:MediaProps,
}
type resProp = {
    data:ImageData;
}
export function postMedia(id:number){
    const [media, setMedia] = useState<MediaData[]>([])
    useEffect(()=>{
           Api.getPostMedia(id).then(function(item:resProp|any){
               setMedia(item.data)
           }).catch(err =>{console.log(err)})
    }, [])
    return {media}
}