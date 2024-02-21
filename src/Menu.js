import { NavLink } from "react-router-dom"

function Menu () {
    const route = [
        {
            id: 1,
            to: "/",
            text: "Home"
        },
        {
            id: 2,
            to: "/profile",
            text: "Profile"
        },
        {
            id: 3,
            to: "/blog",
            text: "Blog"
        }
    ]
    return(
        <nav>
            <ul>
                {/* <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li> */}
                {route.map((route) =>(
                    <li key={route.id}>
                        <NavLink  to={route.to}
                        style={({isActive}) => ({
                            color: isActive? 'red' : 'blue'
                        })}
                        >{route.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export {Menu}