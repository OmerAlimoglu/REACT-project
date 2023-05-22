import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
import { hotelImages } from "./hotelImages.js";

const PropertyList = () => {
  const { data, loading } = useFetch("/hotels/countByType");
  const images = hotelImages;

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data.length > 0 &&
            images.map((item, index) => (
              <div className="pListItem" key={index}>
                <img src={item} alt="hotel Room" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[index].type}</h1>
                  <h2>
                    {data[index].count} {data[index].type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
