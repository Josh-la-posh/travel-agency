import { Card, CardImgOverlay, CardImg, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Blogs() {
  return (
    <section id="blog">
      <div className="heading">
        <span>blogs & posts</span>
        <h1>we untold stories</h1>
      </div>

      <div className="blogs">
        <Card data-aos="fade-up" data-aos-delay="150">
          <CardImgOverlay>
            <CardImg src="images/blog-1.jpg" alt="" />
          </CardImgOverlay>
          <CardBody id="card-body">
            <Link to="#" className="nav-link">
              Excited to plan your next travel!
            </Link>
            <CardText>
              Happy to travel new places in USA and Europe. What is the best
              airline to travel with around Europe? Train or road trip? What is
              best hotels to stay in London and Italy?
            </CardText>
            <div className="links">
              <Link className="nav-link" to="#">
                <FontAwesomeIcon icon="clock" className="icon" /> 5 days ago
              </Link>
              <Link className="nav-link" to="#">
                <FontAwesomeIcon icon="user" className="icon" /> by admin
              </Link>
            </div>
          </CardBody>
        </Card>

        <Card data-aos="fade-up" data-aos-delay="300">
          <CardImgOverlay>
            <CardImg src="images/blog-2.jpg" alt="" />
          </CardImgOverlay>
          <CardBody id="card-body">
            <Link to="#" className="nav-link">
              Traveling solo
            </Link>
            <CardText>
              You’ve never flown anywhere & plan to do so alone this year, so
              what is the best advice to give someone traveling alone?
            </CardText>
            <div className="links">
              <Link className="nav-link" to="#">
                <FontAwesomeIcon icon="clock" className="icon" /> 5 days ago
              </Link>
              <Link className="nav-link" to="#">
                <FontAwesomeIcon icon="user" className="icon" /> by admin
              </Link>
            </div>
          </CardBody>
        </Card>

        <Card data-aos="fade-up" data-aos-delay="450">
          <CardImgOverlay>
            <CardImg src="images/blog-3.jpg" alt="" />
          </CardImgOverlay>
          <CardBody id="card-body">
            <Link to="#" className="nav-link">
              Visiting in October
            </Link>
            <CardText>
              Any place that is a must for my first time to the island? Best
              food? Beaches?
            </CardText>
            <div className="links">
              <Link className="nav-link" to="#">
                <FontAwesomeIcon icon="clock" className="icon" /> 5 days ago
              </Link>
              <Link className="nav-link" to="#">
                <FontAwesomeIcon icon="user" className="icon" /> by admin
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
