import "./singleHotel.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faParking } from "@fortawesome/free-solid-svg-icons";

const SingleHotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/329550005.jpg?k=210cbc81c7c3d0633a97a8f15f9764b59e3e3591e336348a6dd093a661c2e7d5&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/329550005.jpg?k=210cbc81c7c3d0633a97a8f15f9764b59e3e3591e336348a6dd093a661c2e7d5&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/329550005.jpg?k=210cbc81c7c3d0633a97a8f15f9764b59e3e3591e336348a6dd093a661c2e7d5&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/329550005.jpg?k=210cbc81c7c3d0633a97a8f15f9764b59e3e3591e336348a6dd093a661c2e7d5&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/329550005.jpg?k=210cbc81c7c3d0633a97a8f15f9764b59e3e3591e336348a6dd093a661c2e7d5&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/329550005.jpg?k=210cbc81c7c3d0633a97a8f15f9764b59e3e3591e336348a6dd093a661c2e7d5&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Cangroo st 333 Sdyney</span>
          </div>
          <span className="hotelDistance">
            Perfect location - 1.3 km from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $110 at this property..
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Rydges Sydney Central</h1>
              <p className="hotelDesc">
                Located on the edge of the Sydney Central Business District,
                Rydges Sydney Central features a 15 m indoor pool, a spa, 1 bar
                and 2 restaurants All rooms and suites at the Rydges Sydney
                Central come with deluxe beds and custom furnishings. Modern
                amenities include internet access and a large flat-screen TV.
                Guests can work-out in the fitness centre and unwind in the
                sauna. Sydney Brewery Surry Hills is a convenient onsite bar and
                restaurant features specialty beers on tap. Albies Restaurant
                offers a full buffet breakfast to start your day. 24-hour room
                service is available. Rydges Sydney Central is just minutes from
                popular Sydney shopping and dining precincts including Oxford
                Street and Crown Street. It is 7 minutes' walk from Capitol
                Theatre and 10 minutes' walk from Chinatown. ICC Sydney is 8
                minutes' drive away.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 23-night stay!</h1>
              <span>
                Top location: Highly rated by recent guests <em>8.9</em>
                <br /> Popular with solo travellers
              </span>
              <h2>
                <p>Private parking at the hotel</p>
              </h2>
              <button>Reserve or Book now</button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
