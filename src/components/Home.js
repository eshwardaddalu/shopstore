import Header from "../layout/TopNavbar/TopNavbar";
import NavBar from "../layout/Navbar/Navbar";
import InfoCards from './InfoCards';
import CarouselScreen from "./Caurosel";

const Home = () => {
    return (
        <>
          <Header />
          <NavBar />
          <CarouselScreen />
          <InfoCards />
        </>
      );
};

export default Home;