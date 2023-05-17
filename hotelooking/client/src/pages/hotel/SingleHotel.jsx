import "./singleHotel.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faParking } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

const SingleHotel = () => {
  const location = useLocation();
  const hotelId = location.pathname.split("/")[2];
  const { data, loading, error, reFetch } = useFetch(`/hotels/find/${hotelId}`);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          <div className="hotelWrapper">
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Perfect location - {data.distance} km from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property..
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo) => (
                <div className="hotelImgWrapper">
                  <img src={photo} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
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
      )}
    </div>
  );
};

export default SingleHotel;
