import './App.css';



function handelClick(){
  alert("Oups !")
}
function MyButton(){
  return <button onClick={handelClick}>Click Me !</button>;
}
export default function MyApp() {
  
  return (
   <>
   <MyButton/>

   </>
  );
}


