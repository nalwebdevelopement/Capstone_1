import React from "react";
import "./Nav.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
 import { useState } from "react";
//import Dropdown from "./Dropdown";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className="topbar">
        <navbar className="navbar">
          {/* <div class="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/H-E-B_logo.svg/1024px-H-E-B_logo.svg.png" alt="HEB Logo"/>
        </div> */}
          <div className="home">
            {/* <FontAwesomeIcon icon="fa-solid fa-house" />   */}

            <span>
            <i className="fas fa-House"></i>
              {/* //<FontAwesomeIcon icon={faHouse} /> */}
            </span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" id="search" />
            <button>
              <i class="fas fa-search"></i>
            </button>
          </div>
          <div className="right-options">
            <span>Select a pickup time</span>

            <i className="fas fa-shopping-cart"></i>
          </div>
        </navbar>
      </div>

      <navbar className="nav-bar">
        <div className="nav-main">
          <div className="nav">
            <img
              src="https://media4.giphy.com/media/fYNSIDot0a7AZuDWhl/giphy.gif?cid=6c09b952g58wltijf7vccg44h6eqaxgv7pcz483j28l4nfk4&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              alt="img-main"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <div
              className="dropdown-container"
              style={{ position: "relative" }}
            >
              <p
                onClick={toggleMenu}
                style={{ cursor: "pointer", margin: 0 }}
              >
                {" "}
                Shop
              </p>
              {isMenuOpen && <Dropdown />}{" "}
            </div>
            <p> Receipes</p>
            <p> Weekly Ad</p>
            <p> Savings</p>
            <p> Pharmancy</p>
            <p> Wellness</p>
          </div>
          <div className="nav-right">
            <p> Login/Register</p>
            <p> Lists</p>
            <p> Help&FAQ</p>
          </div>
        </div>
      </navbar>
    </div>
  );
}

export default Nav;
