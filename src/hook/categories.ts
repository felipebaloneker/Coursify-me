import { useEffect } from "react";
import Api from "../service/Api";
import { useState } from 'react'

type CategoryData ={
    id:string;
    name:string;
}
type resProp = {
    data:CategoryData;
}
export function categories(){
    const [listCategory, setList] = useState<CategoryData[]>([])
    useEffect(()=>{
           Api.getListCategory().then(function(item:resProp|any){
               setList(item.data)
           }).catch(err =>{console.log(err)})
    }, [])
    return {listCategory}
}