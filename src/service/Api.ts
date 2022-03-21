import database from './database'

export default{
    getListCategory:async()=>{
        const listCategory = await database.get('/categories')
        .then(function(res){
            return res
        }).catch(err=>{
            console.log(err)
        })
        return listCategory;
    }
}