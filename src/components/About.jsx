import {
  Card,
  CardImgOverlay,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about">
      <div className="heading">
        <span>our destination</span>
        <h1>make yours destination</h1>
      </div>

      <div className="destination">
        <Card data-aos="fade-up" data-aos-delay="150">
          <div className="tag">
            <p>Likely to sell out</p>
          </div>
          <CardImgOverlay>
            <CardImg src="images/des-1.jpg" alt="" />
          </CardImgOverlay>
          <CardBody id="card-body">
            <CardTitle>
              Reef and Island Scenic Flight from Airlie Beach
            </CardTitle>
            <CardText>
              Take a scenic flight over the Whitsunday Islands and Great Barrier
              Reef that provides unobstructed views of tropical islands
              surrounded by turquoise ocean and coral reef.
            </CardText>
            <Link className="nav-link" to="#">
              read more{" "}
              <FontAwesomeIcon icon="chevron-right" className="right-arrow" />
            </Link>
          </CardBody>
        </Card>

        <Card data-aos="fade-up" data-aos-delay="300">
          <div className="tag">
            <p>Likely to sell out</p>
          </div>
          <CardImgOverlay>
            <CardImg src="images/des-2.jpg" alt="" />
          </CardImgOverlay>
          <CardBody id="card-body">
            <CardTitle>
              All Inclusive Small-Group Blue Mountains Day Trip
            </CardTitle>
            <CardText>
              Experience the majestic World Heritage-listed Blue Mountains on a
              small-group full-day tour from Sydney.
            </CardText>
            <Link className="nav-link" to="#">
              read more{" "}
              <FontAwesomeIcon icon="chevron-right" className="right-arrow" />
            </Link>
          </CardBody>
        </Card>

        <Card data-aos="fade-up" data-aos-delay="450">
          <CardImgOverlay>
            <CardImg src="images/des-3.jpg" alt="" />
          </CardImgOverlay>
          <CardBody id="card-body">
            <CardTitle>
              Ocean Freedom Great Barrier Reef Personal Luxury Snorkel & Dive
              Cruise
            </CardTitle>
            <CardText>
              Spend a day on the Great Barrier Reef at two different snorkel and
              dive sites on this luxury catamaran cruise from Cairns.
            </CardText>
            <Link className="nav-link" to="#">
              read more{" "}
              <FontAwesomeIcon icon="chevron-right" className="right-arrow" />
            </Link>
          </CardBody>
        </Card>

        <Card data-aos="fade-up" data-aos-delay="600">
          <div className="tag">
            <p>Likely to sell out</p>
          </div>
          <CardImgOverlay>
            <CardImg src="images/des-4.jpg" alt="" />
          </CardImgOverlay>
          <CardBody id="card-body">
            <CardTitle>Nepal Tours and Trips</CardTitle>
            <CardText>
              Nepal, the heart of the Himalayas, boasts plenty of amazing tours.
              Visit Sherpa villages while trekking the Everest Base Camp trek.
            </CardText>
            <Link className="nav-link" to="#">
              read more{" "}
              <FontAwesomeIcon icon="chevron-right" className="right-arrow" />
            </Link>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
