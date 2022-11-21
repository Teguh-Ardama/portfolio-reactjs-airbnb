import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Rentals from "./components/Rentals";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import { GoSettings } from "react-icons/go";
import { FaChevronUp} from "react-icons/fa";

function App() {
  return (
    <div className="">
      {/* {Navbar} */}
      <Navbar />
      {/* {Filters} */}
      <div className="sm:mx-6 md:mx-10 lg:mx-16 px-3">
        <div className="flex justify-between items-center">
          <Filters />
          <button className="border rounded-full p-3 transform rotate-90 hover:shadow-sm duration-100 ease-out"><FaChevronUp/></button>
          <button className="flex items-center border rounded-lg p-3 gap-2 hover:shadow-lg duration-100 ease-out">
          <GoSettings className="mt-1 transform rotate-90" />
            <div className="font-semibold">Filters</div>
          </button>
        </div>
        {/* {Rentals} */}
        <Rentals />
      </div>
      {/* {Footer} */}
      <div className="sticky bottom-0">
        <div className="max-md:invisible">
          <Footer />
        </div>
        <div className="md:hidden">
          <Footer1 />
        </div>
      </div>
    </div>
  );
}

export default App;
