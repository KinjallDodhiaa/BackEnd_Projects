import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'

const Home = (props) => {
    return (
      <>
        <section className="section-1">
          <div className="main-container">
            <div>
              <Link className="logo-link">
                <img src="images/logo.png" alt="Logo" className="logo" />
              </Link>
            </div>

            <div className="navbar">
              <nav className="nav-list">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/showPosts" className="nav-link">
                  Blogs
                </Link>

                <Link to="/addPosts" className="nav-link">
                  Write Blog
                </Link>
              </nav>
            </div>
          </div>

          <div className="section-1-banner center">
            <p>Write your own amazing experience</p>
            <Link to="/addPosts" className="link">
              Start here
            </Link>
          </div>

          <div className="imageshow">
            <img src="../images/blogpost-2.jpg" />
          </div>
        </section>

        {/* <section className="section-2">
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h1 className="mb-5 mt-5">Most Popular Blogs</h1>
                <h2>
                  Blog & website design for non-designers (how to make your blog
                  look incredible without spending a fortune)
                </h2>
                <p>posted by Nayan Dodhia</p>
                <h2>
                  Point and shoot photography (how to create incredible
                  photographs with your phone or whatever camera you have in
                  your pocket)
                </h2>
                <p>posted by Rahul Gada</p>
                <h2>
                  The art of getting what you want (how to use confidence and
                  technique to get what you want from life, your relationships
                  and your career)
                </h2>
                <p>posted by Mittal Nagda</p>
                <h2>
                  The best ???places??? around the world & do they live up to the
                  hype?
                </h2>
                <p>posted by Kinjal Dodhia</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h1 className="mb-5 mt-5">Your Story</h1>
                {props.show.map((post, index) => (
                  <Link to={`/posts/${post.id}`} className="link">
                    <h2 key={index}>{post.title}</h2>
                    <p>posted by {post.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section> */}
      </>
    );
};

export default Home;