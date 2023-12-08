const {User} =require('../../entities')
const slugify = require("slugify");
const {
    itemsRepository,
  } = require("../../frameworks/repositories/mongo");
module.exports=() =>{
    if(!itemsRepository){
        throw new Error('The items repository should be exist in dependancies')
    }
    const execute=({
        ...item
    })=>{
        console.log('new items')
        console.log(item)
        // const user = new User({
        //     first_name,
        //     last_name,
        //     username,
        //     email,
        //     password, 
        //     mobile,})
        
        const items={
            ...item,
            
            slug:slugify(item.title)
        }
        console.log('vefore repository',items)
        return itemsRepository.add(items)
    }
    return { execute }
}