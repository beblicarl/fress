/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function App() {
  return (
    <div className="grid-container">
      <header className="row ">
        {/* <div>
          <a className="brand" href="index.html">
            fress
          </a>
        </div>
        <nav className="goal">
          <a href="cart.html">Become a Cook</a>
          <a href="signin.html">Join as Foodie</a>
          <a className="black" href="#">
            Login
          </a>
        </nav> */}
        <header className="header">
          <a href className="logo">
            fress
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon" />
          </label>
          <ul className="menu">
            <li>
              <a href="#work">Become a Cook</a>
            </li>
            <li>
              <a href="#about">Join as Foodie</a>
            </li>
            <li>
              <a className="black" href="#careers">
                Login
              </a>
            </li>
          </ul>
        </header>
      </header>
      <section>
        <div className="madam">
          <div>
            <img src="./images/madam.png" alt="madam" />
          </div>
          <div className="welcome">
            <h1>Welcome to Maria's Italian Kitchen</h1>
            <p>
              I was born in Puglia, in the south of Italy,and grew up in a{" "}
              <br /> small village surrounded by old olive groves and vines. My{" "}
              <br /> mother and i used to spend a lot of time in the kitchen...{" "}
              <a className="blue" href="#">
                more
              </a>
            </p>
            <div className="following">
              <p>Following 27</p>
              <p>Followers 16k</p>
              <p>Joined September 2021</p>
              <p>Lives and cooks in London, England</p>
            </div>
          </div>
          <div className="past">
            <button className="new">follow@pastanona</button>
            <button className="old">share kitchen</button>
          </div>
        </div>
        {/* <div id="input_container">
            <input type="Email" placeholder="Send me a message"> 
          </div> */}
        <form>
          <div className="Icon-inside">
            <input type="text" placeholder="Send me a message" />
            <i className="far fa-comment-dots" aria-hidden="true" />
          </div>
        </form>
      </section>
      <main>
        <div>
          <div className="name">My kitchen</div>
          <div>
            <div className="row center">
              <div className="card banner">
                <a href="product.html">
                  {/* image size: 680px by 830px */}
                  <img
                    className="medium"
                    src="./images/Vector (1).png"
                    alt="product"
                  />
                </a>
                <div className="card-body">
                  <div className="rating">
                    <span>
                      {" "}
                      <i className="far fa-heart" />{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card banner">
                <a href="product.html">
                  {/* image size: 680px by 830px */}
                  <img
                    className="medium"
                    src="./images/Vector (2).png"
                    alt="product"
                  />
                </a>
                <div className="card-body">
                  <div className="rating">
                    <span>
                      {" "}
                      <i className="far fa-heart" />{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card banner">
                <a href="product.html">
                  {/* image size: 680px by 830px */}
                  <img
                    className="medium"
                    src="./images/Vector (3).png"
                    alt="product"
                  />
                </a>
                <div className="card-body">
                  <div className="rating">
                    <span>
                      {" "}
                      <i className="far fa-heart" />{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="name">My food</div>
            <div className="row center">
              <div className="card banner happy">
                <div className="profile-pic">
                  <a href="product.html">
                    <img
                      className="large"
                      src="./images/Vector (4).png"
                      alt="product"
                    />
                  </a>
                  <div className="card-body">
                    <div className="rating">
                      <span>
                        {" "}
                        <i className="far fa-heart" />{" "}
                      </span>
                    </div>
                    <div className="inner-caption">
                      <p>
                        Spicy Moroccan <br />
                        shakshuka
                      </p>
                    </div>
                    <div className="edit">
                      <div className="caption">
                        <h5>Spicy Moroccan shakshuka</h5>
                      </div>
                      <div className="small-caption">
                        <h5>$5 a portion</h5>
                        <h5>No allergens</h5>
                        <h5>Likes 1.2k</h5>
                      </div>
                      <a className="facebook" href="#">
                        <img src="./images/Vector(10).png" alt="icon" />
                      </a>
                      <a className="plus" href="#">
                        <img src="./images/Vector(11).png" alt="icon" />
                      </a>
                      <a className="message" href="#">
                        <img src="./images/Vector(14).png" alt="icon" />
                      </a>
                      <a className="eye" href="#">
                        <img src="./images/Vector(13).png" alt="icon" />
                      </a>
                      <a href="#">
                        <button className="order">order</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card banner happy">
                <div className="profile-pic">
                  <a href="product.html">
                    <img
                      className="large"
                      src="./images/Vector.png"
                      alt="product"
                    />
                  </a>
                  <div className="card-body">
                    <div className="rating">
                      <span>
                        {" "}
                        <i className="far fa-heart" />{" "}
                      </span>
                    </div>
                    <div className="inner-caption">
                      <p>
                        Peasant's bean &amp; <br />
                        been stew
                      </p>
                    </div>
                    <div className="edit">
                      <div className="caption">
                        <h5>Peasant's bean &amp; been stew</h5>
                      </div>
                      <div className="small-caption">
                        <h5>$5 a portion</h5>
                        <h5>No allergens</h5>
                        <h5>Likes 1.2k</h5>
                      </div>
                      <a className="facebook" href="#">
                        <img src="./images/Vector(10).png" alt="icon" />
                      </a>
                      <a className="plus" href="#">
                        <img src="./images/Vector(11).png" alt="icon" />
                      </a>
                      <a className="message" href="#">
                        <img src="./images/Vector(14).png" alt="icon" />
                      </a>
                      <a className="eye" href="#">
                        <img src="./images/Vector(13).png" alt="icon" />
                      </a>
                      <a href="#">
                        <button className="order">order</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card banner happy">
                <div className="profile-pic">
                  <a href="product.html">
                    <img
                      className="large"
                      src="./images/Vector (5).png"
                      alt="product"
                    />
                  </a>
                  <div className="card-body">
                    <div className="rating">
                      <span>
                        {" "}
                        <i className="far fa-heart" />{" "}
                      </span>
                    </div>
                    <div className="inner-caption">
                      <p>
                        Hearty beef <br />
                        bourguignon
                      </p>
                    </div>
                    <div className="edit">
                      <div className="caption">
                        <h5>Hearty beef bourguignon</h5>
                      </div>
                      <div className="small-caption">
                        <h5>$5 a portion</h5>
                        <h5>No allergens</h5>
                        <h5>Likes 1.2k</h5>
                      </div>
                      <a className="facebook" href="#">
                        <img src="./images/Vector(10).png" alt="icon" />
                      </a>
                      <a className="plus" href="#">
                        <img src="./images/Vector(11).png" alt="icon" />
                      </a>
                      <a className="message" href="#">
                        <img src="./images/Vector(14).png" alt="icon" />
                      </a>
                      <a className="eye" href="#">
                        <img src="./images/Vector(13).png" alt="icon" />
                      </a>
                      <a href="#">
                        <button className="order">order</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card banner happy">
                <div className="profile-pic">
                  <a href="product.html">
                    <img
                      className="large"
                      src="./images/Vector (6).png"
                      alt="product"
                    />
                  </a>
                  <div className="card-body">
                    <div className="rating">
                      <span>
                        {" "}
                        <i className="far fa-heart" />{" "}
                      </span>
                    </div>
                    <div className="inner-caption">
                      <p>
                        Royal lamb safron <br />
                        rice pilau
                      </p>
                    </div>
                    <div className="edit">
                      <div className="caption">
                        <h5>Royal lamb safron rice pilau</h5>
                      </div>
                      <div className="small-caption">
                        <h5>$5 a portion</h5>
                        <h5>No allergens</h5>
                        <h5>Likes 1.2k</h5>
                      </div>
                      <a className="facebook" href="#">
                        <img src="./images/Vector(10).png" alt="icon" />
                      </a>
                      <a className="plus" href="#">
                        <img src="./images/Vector(11).png" alt="icon" />
                      </a>
                      <a className="message" href="#">
                        <img src="./images/Vector(14).png" alt="icon" />
                      </a>
                      <a className="eye" href="#">
                        <img src="./images/Vector(13).png" alt="icon" />
                      </a>
                      <a href="#">
                        <button className="order">order</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card banner happy">
                <div className="profile-pic">
                  <a href="product.html">
                    <img
                      className="large"
                      src="./images/Vector (7).png"
                      alt="product"
                    />
                  </a>
                  <div className="card-body">
                    <div className="rating">
                      <span>
                        {" "}
                        <i className="far fa-heart" />{" "}
                      </span>
                    </div>
                    <div className="inner-caption">
                      <p>
                        Spicy Spanish <br />
                        patatas bravas
                      </p>
                    </div>
                    <div className="edit">
                      <div className="caption">
                        <h5>Spicy Spanish patatas bravas</h5>
                      </div>
                      <div className="small-caption">
                        <h5>$5 a portion</h5>
                        <h5>No allergens</h5>
                        <h5>Likes 1.2k</h5>
                      </div>
                      <a className="facebook" href="#">
                        <img src="./images/Vector(10).png" alt="icon" />
                      </a>
                      <a className="plus" href="#">
                        <img src="./images/Vector(11).png" alt="icon" />
                      </a>
                      <a className="message" href="#">
                        <img src="./images/Vector(14).png" alt="icon" />
                      </a>
                      <a className="eye" href="#">
                        <img src="./images/Vector(13).png" alt="icon" />
                      </a>
                      <a href="#">
                        <button className="order">order</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
