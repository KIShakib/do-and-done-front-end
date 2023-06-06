import { Toaster } from "react-hot-toast";
import "./App.css";
import ToDo from "./components/pages/ToDo/ToDo";
import TopBanner from "./components/pages/TopBanner/TopBanner";

function App() {
  return (
    <div className="">
      <TopBanner />
      <ToDo />
      <Toaster />
    </div>
  );
}

export default App;
