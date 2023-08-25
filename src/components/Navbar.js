import {Link,NavLink} from 'react-router-dom';
import React from 'react';
import {useState} from 'react';

const Navbar=()=>{
    const [togglerNav,setTogglerNav]=useState(false);

    const clickHandler=()=>{
        setTogglerNav(!togglerNav);
    }

    return(
        <>

        <nav className="nav">

            <div>

            <NavLink className="nav-link text-2xl ml-7 mr-5 pr-5 pl-3 mt-8 font-serif font-light text-indigo hover:text-red" onClick={clickHandler} to='/'>
            Home</NavLink> 

            <NavLink className="nav-link text-2xl ml-7 mr-5 pr-5 pl-3 mt-8 font-serif font-light text-indigo hover:text-red" onClick={clickHandler} to='/add'>
                About
            </NavLink>

            


               
            </div>
        </nav>





        </>
    )

}

export default Navbar