import { Outlet } from "react-router-dom";
import Nav from "./components/main/navbar";
import useFetchdata from "./api/fetchapi";

function App() {
  const { Data, Loading, Error } = useFetchdata(
    "https://fakestoreapi.com/products/"
  );

  return (
    <div className="w-screen ">
      <div>
        <Nav />
      </div>

      <Outlet context={{ Data, Loading, Error }} />
    </div>
  );
}

export default App;
