import { NavLink, Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { Row } from "reactstrap";
import "./Home.css";
import TabForm from "../TabForm";
import Gallery from "../Gallery";
import Blogs from "../Blogs";
import Services from "../Services";
import About from "../About";

function Home() {
  return (
    <div id="/">
      <section className="home">
        <div className="content">
          <span data-aos="fade-up" data-aos-delay="150">
            follow us
          </span>
          <h3 data-aos="fade-up" data-aos-delay="300">
            to the unknown
          </h3>
          <p data-aos="fade-up" data-aos-delay="450">
            Our collection offers travel at the finest hotels and resorts, in
            the exciting landscape of cruising and the exclusive world of
            private touring.
          </p>
          <NavLink
            className="nav-link"
            data-aos="fade-up"
            data-aos-delay="600"
            to="#"
            id="btn"
          >
            book now
          </NavLink>
        </div>
      </section>

      {/* home section ends */}

      {/* <!-- booking form section starts  --> */}

      <TabForm />

      {/* <!-- booking form section ends --> */}

      {/* <!-- about section starts  --> */}

      <Blogs />

      {/* <!-- about section ends --> */}

      {/* <!-- destination section starts  --> */}

      <About />

      {/* <!-- destination section ends --> */}

      {/* <!-- services section starts  --> */}

      <Services />

      {/* <!-- services section ends --> */}

      {/* <!-- gallery section starts  --> */}

      <Gallery />

      {/* <!-- gallery section ends --> */}

      {/* <!-- review section starts  --> */}

      <section className="review">
        <div className="content" data-aos="fade-right" data-aos-delay="300">
          <span>testimonials</span>
          <h3>good news from our clients</h3>
          <p>
            Our agents come highly recommended, but you don’t have to take our
            word for it.
          </p>
        </div>

        <Row
          className="box-container"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <div className="box">
            <p>
              “Wouldn't trust my travel to anyone else. Julie you are amazing!"
            </p>
            <div className="user">
              <img src="images/pic-1.png" alt="" />
              <div className="info">
                <h3>Steve</h3>
                <span>traveller</span>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              “I could not have asked for a better stay than Klausturhof. Thanks
              again, Meg S."
            </p>
            <div className="user">
              <img src="images/pic-2.png" alt="" />
              <div className="info">
                <h3>Meg S.</h3>
                <span>traveller</span>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              “Our experience was truely memorable and hastle free. All thanks
              to Agoda and Meeru :)"
            </p>
            <div className="user">
              <img src="images/pic-4.png" alt="" />
              <div className="info">
                <h3>Stephanie B.</h3>
                <span>travellerr</span>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              “Vali, thank you once again for your help and kindness. I’m glad
              we have YOU working with us."
            </p>
            <div className="user">
              <img src="images/pic-3.png" alt="" />
              <div className="info">
                <h3>Derek T.</h3>
                <span>traveller</span>
              </div>
            </div>
          </div>
        </Row>
      </section>

      {/* <!-- review section ends --> */}

      {/* <!-- blogs section starts  --> */}

      <Blogs />

      {/* <!-- blogs section ends --> */}

      {/* <!-- banner section starts  --> */}

      <div className="banner">
        <div className="content" data-aos="zoom-in-up" data-aos-delay="300">
          <span>start your adventures</span>
          <h3>Let's Explore This World</h3>
          <p>
            So set free the adventurer within you and let us guide you through
            this mesmerizing continent!
          </p>
          <Link to="/book-form" className="nav-link" id="btn">
            book now
          </Link>
        </div>
      </div>

      {/* <!-- banner section ends --> */}
    </div>
  );
}

export default Home;
