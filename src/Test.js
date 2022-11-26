import React from 'react'

function Test() {
    function myarray(){
        return [2,4,6,8]
        
    }
    // const arr=myarray()
    // console.log(arr);
    // let thirdElement=arr[2]
    // let forthElement=arr[3]
    let[thirdElement,]=myarray()
    console.log(thirdElement);
  return (
    <div></div>
  )
}

export default Test