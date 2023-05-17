import useFetch from "../../hooks/useFetch";
import "./featuredCities.css";

const FeaturedCities = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=amsterdam,berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading plese wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/976539.jpg?k=0a7263960952588dc71a60f1f9c2e738b5c0af9b2d9d3c3df79677d630b8a665&o="
              alt="Amsterdam"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Amsterdam</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/976952.jpg?k=4c536b3833e5f6721ff5f89fa4f15d8f50fd5cd4a963060414078428aa67a6d5&o="
              alt="London"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/976525.jpg?k=28ab37ad52e0b672e0d84806232679ce7ec6d2fcd6ac633e4365b3097d880c51&o="
              alt="Rotterdam"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o="
              alt="Paris"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedCities;
