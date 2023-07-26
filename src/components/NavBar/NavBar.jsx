
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
export default function NavBar({ user, setUser }){
    function handLogOut() {
        userService.logOut();
        setUser(null)
    }


    return (
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            <h2>Welcome {user.name}</h2>
            &nbsp; | &nbsp;
            <Link to="" onClick={handlLogOut}>Log Out</Link>
        </nav>
    )
}