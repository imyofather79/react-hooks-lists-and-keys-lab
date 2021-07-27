import React from "react";


function NavBar() {
  const links = ["home", "about", "projects"];
  const eachlink = links.map((link) => (
      <a key={link} href={ "#"+link }>{link}</a>
  ));

  return <nav>{eachlink}</nav> 

}

export default NavBar;
