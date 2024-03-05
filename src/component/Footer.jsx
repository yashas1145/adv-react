import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer () {
    return <footer>
        <span>Copyright © {year}</span>
    </footer>
}

export default Footer;