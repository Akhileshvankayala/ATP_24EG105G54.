import UsersList from "./UsersList";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App(){

  return(
    <div>
      <NavBar />
      <div className="m-16 min-h-screen">
        <UsersList/>
      </div>
      <Footer />
    </div>
  )
  
}
export default App;