import React from "react";
import './style.css'


let d = new Date();
function Footer()
{
    return (
        <footer>
            <p>Copyright @ {d.getFullYear()}</p>
        </footer>
    );
}

export default Footer;