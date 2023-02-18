import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=77a50b7e&app_key=138848762b30677b369e3de0a691e6c4"
      )
      .then((res) => setData(res?.data?.hits));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <Navbar />
      <div className="row">
      {data?.map((item) => {
        return <Cards label={item?.recipe?.label} image={item?.recipe?.image} calories = {item?.recipe?.calories} source={item?.recipe?.source
        } />;
      })}
      </div>
    </div>
  );
}

export default App;
