import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Services() {
  return (
    <section id="service">
      <div className="heading">
        <span>our services</span>
        <h1>countless expericences</h1>
      </div>

      <div className="services">
        <Card data-aos="zoom-in-up" data-aos-delay="150">
          <FontAwesomeIcon icon="globe" className="icon" />
          <CardBody id="card-body">
            <CardTitle>worldwide</CardTitle>
            <CardText>
              A strict screening process ensures that we only offer the best
              tours and trip packages globally.
            </CardText>
          </CardBody>
        </Card>

        <Card data-aos="zoom-in-up" data-aos-delay="300">
          <FontAwesomeIcon icon="person-hiking" className="icon" />
          <CardBody id="card-body">
            <CardTitle>adventures</CardTitle>
            <CardText>
              You will find a multitude of adventures here: from camping and
              caravanning, to canoe expeditions
            </CardText>
          </CardBody>
        </Card>

        <Card data-aos="zoom-in-up" data-aos-delay="450">
          <FontAwesomeIcon icon="utensils" className="icon" />
          <CardBody id="card-body">
            <CardTitle>food & drinks</CardTitle>
            <CardText>
              Exploring fantastic food - whether it is for the outdoors,
              adventuring - or even a slap-up meal in port. You will enjoy the
              recipes 😊
            </CardText>
          </CardBody>
        </Card>

        <Card data-aos="zoom-in-up" data-aos-delay="600">
          <FontAwesomeIcon icon="hotel" className="icon" />
          <CardBody id="card-body">
            <CardTitle>affordable hotels</CardTitle>
            <CardText>
              The Finest Luxury Hotels & Resorts. 24/7 Support. Great rates with
              our Best Price Guarantee.
            </CardText>
          </CardBody>
        </Card>

        <Card data-aos="zoom-in-up" data-aos-delay="750">
          <FontAwesomeIcon icon="wallet" className="icon" />
          <CardBody id="card-body">
            <CardTitle>affordable price</CardTitle>
            <CardText>
              We guarantee you the best price. Found a lower price? We will
              match it.
            </CardText>
          </CardBody>
        </Card>

        <Card data-aos="zoom-in-up" data-aos-delay="900">
          <FontAwesomeIcon icon="headset" className="icon" />
          <CardBody id="card-body">
            <CardTitle>24/7 support</CardTitle>
            <CardText>
              Customers have rated our trips 4.8 of 5 stars out of more than
              25,000 trip ratings.
            </CardText>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
