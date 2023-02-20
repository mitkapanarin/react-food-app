import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards";

const Recipe = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
      )
      .then((res) => setData(res?.data?.hits));
  }, []);

  console.log(data);
  return (
    <div className="row">
      {data?.map((item) => {
        const {recipe} = item || {}
        return (
          <Cards
            {...recipe}
          />
        );
      })}
    </div>
  );
};

export default Recipe;
