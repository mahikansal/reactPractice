//Props are read-only, a child component should not modify its props.

// function ProductCard(props) {

//   return (
//     <>
//       <p>Name : {props.name}</p>
//       <p>Price: Rs.{props.price}</p>
//       <p>Category: {props.category}</p>
//       <p>In Stock: {props.inStock ? "Yes" : "No"}</p>
//     </>
//   )
// }

//Props Destruction
function ProductCard({name, price, category, inStock}) {

  return (
    <>
      <p>Name : {name}</p>
      <p>Price: Rs.{price}</p>
      <p>Category: {category}</p>
      <p>In Stock: {inStock ? "Yes" : "No"}</p>
    </>
  )
}

//Children
function Card({children}) {
  return (
    <div>
      {children}
    </div>
  )
}

function App() {
 
  return (
    <>
      <ProductCard name="Face Wash" price={299} category="Skincare" inStock={true} />
      <ProductCard name="Hair Serum" price={599} category="Haircare" inStock={false} />


      //Btw card and /card everything is children
      {/* <Card>
        Hello Mira!
      </Card>

      <Card>
        Welcome to React
      </Card>

      <Card>
        You are learning components.
      </Card> */}

      //As Children can also contain JSX, so 
      <Card>
        <h2>Hello Mira!</h2>
        <p>Welcome to React</p>
        <button>Start Learning</button>
      </Card>
    </>
  )
}

export default App
