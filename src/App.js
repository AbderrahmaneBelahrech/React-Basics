import './App.css';

function MyButton(){
  return <button>Btn</button>;
}
const user ={
  name:"abdo",
  imageUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/713EAC98B3CEC6A774A84243AD1FA532576F243B8A152FEA0C03C4E32BBFE018/scale?width=1200&aspectRatio=1.78&format=webp",
  imageSize:90
}
function TrueUser(){
  return <button>LOGIN</button>
}
function FalseUser(){
  return <button>SIGNUP</button>
}
let isNewuser = true;
const products = [
  {id: 1, isFM: true , title: 'headphone'},
  {id: 2,isFM: false, title: 'motocycle'},
  {id: 3,isFM: false, title: 'mart'}
]

export default function MyApp() {
  /* Now using for loop "map"  */
  const ListItems = products.map(product => 
    <li style={{color: product.isFM ? 'red' : "green"}} key= {product.id}>
      tilte : {product.title}</li>
  )
  return (
   <>
   <h1>Hello, it s H1</h1>
   <h2>{user.name}</h2>
   <img
   className='avatar'
   src={user.imageUrl}
   alt='avatar img'
   style={{width:user.imageSize}}
   />
   {!isNewuser && <FalseUser/>}
   {isNewuser && <FalseUser/>}
   {isNewuser ? <FalseUser/> : <TrueUser/>}

   <br/>
   <MyButton/>
   <ul>{ListItems}</ul>
   </>
  );
}

// export default App;
