import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/452213499.webp?k=d698a517dbdf812fc5d694685e762e93436578e5cbf882f7b2008ffb0d79fa14&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Rydyes Sdyney Central</h1>
        <span className="siDistance">1,3 km from centre</span>
        <span className="siSubtitle">Superior King Room</span>
        <span className="siFeatures">Multiple bed types</span>
        <span className="siCancelOp">Free cancellation</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$140</span>
          <span className="siTaxOp">Include taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
