export const sum = (arr,info)=>{
    let n = [];
 
    arr.map(item=>{
        
       let s = item.get(info).split(' ')
       n.push(...s)
       return 1
   })
   let newN = new Set(n)
 
   return Array.from(newN)
}