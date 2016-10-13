/*
 * @Author: JackYin 
 * @Date: 2016-10-13 10:56:40 
 * @Last Modified by: yinjikai
 * @Last Modified time: 2016-10-13 10:57:45
 */
//对象数组排序
var arr =[
    {'name':'asdf',age:15},
    {'name':'haha',age:14},
    {'name':'sda',age:12},
    {'name':'saasd',age:12}

]
function arraySort(a,b,sortBy){
    
       if(typeof a[sortBy] ==='string'&&typeof a[sortBy] ==='string'&&a&&b){
           console.log('a:'+a[sortBy]+'b'+b[sortBy]+','+(a[sortBy].charCodeAt(0) - b[sortBy].charCodeAt(0)))
           return a[sortBy].charCodeAt(0) - b[sortBy].charCodeAt(0);
       }else{
           //number
           return a[sortBy] - b[sortBy];
       }

}

function sortArr(sortBy){
    arr.sort(function(a,b){
    return arraySort(a,b,sortBy)
})
}
sortArr('age')