import { useSelector } from "react-redux";
import "./App.css";
import AdminNavbar from "./Components/AdminNavbar";
import UserNavbar from "./Components/UserNavbar";
import AllRoutes from "./Pages/AllRoutes";
import Cart from "./Pages/Cart";
 

function App() {

  const { isAuth, loading, error, token , role } = useSelector((store) => store.auth);



  return (
    <div className="App">

{role === "Admin" ? (
   
   <AdminNavbar />
) : (
  <UserNavbar/> 
)}
<AllRoutes />
    </div>
  );
}

export default App;
