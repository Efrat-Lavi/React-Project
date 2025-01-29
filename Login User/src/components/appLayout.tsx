import { useContext, } from "react";
import { Link, Outlet } from "react-router"
import { userContext } from "../App";

const style = {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
}
const AppLayout = () => {
    const context = useContext(userContext);
   
return (<>
        <nav style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            gap: "10px",
            backgroundColor: "#f8f9fa",
            padding: "10px 15px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}>

            <Link to='/' onClick={()=>console.log(context.user)
            } style={style}>Home</Link>
            |
            <Link to='/about' style={style}>About</Link>
            |
            <Link to='/recipes' style={style}>Recipes</Link>
            {context.user.id!="" && 
            <Link to='/addRecipe' style={style}>Add Recipe</Link>}

        </nav>
        <Outlet></Outlet>
    </>)
}

export default AppLayout
