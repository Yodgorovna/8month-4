import { Button } from "./Components/Ui/button/button";
import { Input } from "./Components/Ui/input/input";
import { FaGlobe, FaStar, FaHeart, FaArrowRight } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#ada4a4] p-6 space-y-12">
      {/* Row for Inputs */}
      <div className="flex space-x-4 mb-6">
        <Input
          variant="primary"
          color="info"
          icon={<FaGlobe />}
          placeholder="Search"
        />
        <Input
          variant="primary"
          color="danger"
          icon={<FaHeart />}
          placeholder="Search"
        />
        <Input
          variant="primary"
          color="warning"
          icon={<FaStar />}
          placeholder="Search"
        />
        <Input
          variant="primary"
          color="success"
          icon={<FaArrowRight />}
          placeholder="Search"
        />
      </div>

      {/* Row for Buttons */}
      <div className="flex space-x-4">
        <Button variant="primary" color="info" icon={<FaGlobe />}>
          Explore
        </Button>
        <Button variant="primary" color="danger" icon={<FaHeart />}>
          Favorite
        </Button>
        <Button variant="primary" color="warning" icon={<FaStar />}>
          Rate Us
        </Button>
        <Button variant="primary" color="success" icon={<FaArrowRight />}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default App;
