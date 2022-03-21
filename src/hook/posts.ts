import { useEffect } from "react";
import Api from "../service/Api";
import { useState } from 'react'

type PostData ={
    id:number;
    name:string;
    status:string;
    feature_media:number,
    content:Object,
    page_view:number,
    categories:[number],
}
type resProp = {
    data:PostData;
}
export function posts(id:number){
    const [listPost, setList] = useState<PostData[]>([])
    useEffect(()=>{
           Api.getListPost(id).then(function(item:resProp|any){
               setList(item.data)
           }).catch(err =>{console.log(err)})
    }, [])
    return {listPost}
}