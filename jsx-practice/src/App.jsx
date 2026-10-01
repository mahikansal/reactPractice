function Profile() {
  const name = "Mira";
  const age = 21;

  return (
    <>
      <p>My name is {name}</p>
      <p>I am {age} years old</p>
    </>
  )
}

function Bill() {
  const price = 500;
  const quantity = 3;

  return (
    <>
      <p>Price: RS.{price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: {price*quantity}</p>
    </>
  )
}

function Student() {
  const name = "Mira";
  const marks = 85;

  return (
    <>
      <p>Student: {name}</p>
      <p>Marks: {marks}</p>
      <p>Result: {marks >= 40 ? "Passed" : "Failed"}</p>
    </>
  )
}

function ProfileCard() {
  return (
    <div className="profile-card">
      <img  src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68M10GEWe3H3zyecnnSXmnpsYL6pdTcJAiRG3uCVbIw&s=10" alt = "Profile Picture" />
      <h2 id="profile-name">Mira</h2>
      <p>B.Tech CSE Student</p>
    </div>
  )
}

function Welcome() {
  return (
    <>
      <h1 style={{color: "purple", fontSize: "30px"}}>Welcome, Mira</h1>
      <p style={{color: "gray", fontSize: "18px"}}>B.Tech CSE Student</p>
    </>
  )
}

function ProductCard() {
  const productName = "Face Wash";
  const price = 299;
  const quantity = 2;

  return (
    <div className="product-card">
      <p style={{color: "blue"}} id="product-name">Product: {productName}</p>
      <p>Price: Rs.{price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: Rs.{price * quantity}</p>
      <p>Status: {quantity > 0 ? "Available" : "Out of Stock"}</p>
    </div>
  )
}

function App() {

  return (
    <>
      <Profile />
      <Bill />
      <Student />
      <ProfileCard />
      <Welcome />
      <ProductCard />
    </>
  )
}

export default App


