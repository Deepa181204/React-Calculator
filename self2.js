import react from 'react'
function Navbar()
{
    return(
<nav>
    <ul>
        <li>
            <img className="img" src="../my-react-app/public/img.jpg" alt="nodejsprogram" height="200" width="200"/>
        </li>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li classroom="logout">Logout</li>
    </ul>
</nav>
    );
}
export default Navbar;