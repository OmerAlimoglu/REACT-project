import "./singleHotel.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { useContext, useState } from "react";
import Reserve from "../../components/reserve/Reserve";

const SingleHotel = () => {
  const location = useLocation();
  const hotelId = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const [openReserve, setOpenReserve] = useState(false);
  const { data, loading, error } = useFetch(`/hotels/find/${hotelId}`);
  const { dates, options } = useContext(SearchContext);

  //calculate the accommodation date
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleClick = () => {
    return setOpenReserve(true);
  };

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
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Top location: Highly rated by recent guests <em>8.9</em>
                  <br /> Popular with solo travellers
                </span>
                <p>Private parking at the hotel</p>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book now</button>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      )}
      {openReserve && <Reserve setOpen={setOpenReserve} hotelId={hotelId} />}
    </div>
  );
};

export default SingleHotel;
