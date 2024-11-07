import React from 'react'
import Logo from '../Logo';

const navigationData = [
    {
        name: "Fav Creators",
        path: "/favCreators",
    },
    {
        name: "Merchandise",
        path: "/merchandise",
    },
    {
        name: "Brand",
        path: "/brand",
    },
    {
        name: "Digital",
        path: "/digital",
    },
];

const NavBar = () => {
  return (
    <div>
        {/* Logo and search bar */}
        <div>
            <div>
                <Logo />
            </div>
        </div>

        {/* All Route and account drop down also for mobile view there will burger */}
        <div>
            {/* All navigation */}
            <div></div>

            {/* Account drop down and burger */}
            <div></div>
        </div>

    </div>  
  )
}

export default NavBar
