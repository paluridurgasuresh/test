const jsonArray = [{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}];
const filteredArray = [];


jsonArray.forEach((ele,index) => {
    Object.entries(ele).forEach(([key,value]) => {
        if(key === 'type' && value === 'external')
        filteredArray.push(jsonArray[index]);
    })

})

console.log(filteredArray);