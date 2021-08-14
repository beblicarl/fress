import React from "react";

function App() {
  return (
    <div className="grid-container">
      <header className="row " id="myTopnav">
        <div>
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
          <a href="javascript:void(0);" className="icon" onclick="myFunction()">
            <i className="fa fa-bars" />
          </a>
        </nav>
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
              <a href="#">more</a>
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
          <div className="name"> My food</div>
          <div className="row center">
            <div className="card banner">
              <a href="product.html">
                {/* image size: 680px by 830px */}
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
                <p>
                  Spicy Morrocan <br /> shakshuka
                </p>
              </div>
            </div>
            <div className="card banner">
              <a href="product.html">
                {/* image size: 680px by 830px */}
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
                <p>
                  Peasant's Bean &amp; <br /> been stew
                </p>
              </div>
            </div>
            <div className="card banner">
              <a href="product.html">
                {/* image size: 680px by 830px */}
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
                <p>
                  Hearty beef <br /> bourguignon
                </p>
              </div>
            </div>
            <div className="card banner">
              <a href="product.html">
                {/* image size: 680px by 830px */}
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
                <p>
                  Royal lamb safron <br /> rice pilau
                </p>
              </div>
            </div>
            <div className="card banner">
              <a href="product.html">
                {/* image size: 680px by 830px */}
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
                <p>
                  Spicy Spanish <br /> patatas bravas
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
