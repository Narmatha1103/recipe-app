import React, { useState } from "react";
import Mealitem from "./Mealitem";
import "./style.css";
const Meal = () => {
  const [search, setSearch] = useState("");
  const [Mymeal, setMeal] = useState();
  const searchMeal = (evt) => {
    if (evt.key == "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals);
          setSearch("");
        });
    }
  };
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>FOOD RECIPE</h1>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={searchMeal}
            placeholder="Search your food"
          />
        </div>
        <div className="container">
          {Mymeal == null ? (
            <p className="notSearch"></p>
          ) : (
            Mymeal.map((res) => {
              return <Mealitem data={res} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Meal;
