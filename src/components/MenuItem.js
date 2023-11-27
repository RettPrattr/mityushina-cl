import React from 'react';

import { Link, animateScroll as scroll } from "react-scroll";

function MenuItem({text, target, href})  {
  
  return (
    <Link
            activeClass="active"
            to={target}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={'nav-item'}
    >
      {text}
    </Link>
  );
  
}

export default MenuItem