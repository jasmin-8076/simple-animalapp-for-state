
import {useState} from 'react'
import AnimaShow from './AnimaShow';

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow','dog','gator','horse']

    return animals[Math.floor(Math.random()* animals.length)]
}
// console.log(getRandomAnimal());
function App(){
    const [ani,setAnimals]= useState([]);
     
const handleClick = () => {
 setAnimals([...ani,getRandomAnimal()]);
}

const renderedAnimals=ani.map((item,index)=>{
 
    return<AnimaShow type={item} key={index}/>
});
console.log(renderedAnimals);
return(

<div>
    <button onClick={handleClick}>
      Add animal</button>
      <div>{renderedAnimals}</div>


</div>

)


}

export default App;