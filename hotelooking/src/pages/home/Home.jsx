import FeaturedCities from "../../components/featured_cities/FeaturedCities";
import PropertyList from "../../components/propertyList/propertyList";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <FeaturedCities />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;
