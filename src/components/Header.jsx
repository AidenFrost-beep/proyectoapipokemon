import React from 'react';
import logo from '../img/logopoke.png';

export const Header = () => {
  return (
    <nav class="navbar bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src={logo} alt="Bootstrap" width="100"/>
            </a>
        </div>
    </nav>
  );
}
