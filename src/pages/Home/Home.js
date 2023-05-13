import React, { useState } from "react";
import "./home.styles.scss";
const Home = () => {
  const [ships, setShips] = useState([]);
  const [loaderStart, setLoader] = useState(0);
  const fetchData = async () => {
    setLoader(1);
    const data = await fetch("https://swapi.dev/api/starships/");
    const d = await data.json();
    const filteredData = d.results
      .filter((item) => Number(item.crew.replace(/[,-]/g, "")) <= 10)
      .sort((a, b) => a < b);
    setShips(filteredData);
  };

  return (
    <div>
      <div className="text-center h-48">
        <h1 className="text-5xl pt-2">Star Wars</h1>
        <button
          onClick={() => fetchData()}
          className="rounded-none border-2 border-white-600 p-2 hover:bg-yellow-500 hover:text-white"
        >
          Get Ships
        </button>
      </div>
      <div className="flex flex-col items-center ">
        {ships.length > 0 ? (
          ships.map((ship, index) => (
            <div
              key={index}
              className="border-solid my-2 w-1/2 p-2 text border-2 border-white-600"
            >
              <p className="text-xl">{ship.name}</p>
              <div className="flex w-full ">
                <div className="w-3/4">
                  <p>Model:-</p>
                  <p>{ship.model}</p>
                </div>
                <div>
                  <p>Films:-</p>
                  <p className="w-1/4">{ship.films.length}</p>
                </div>
              </div>
            </div>
          ))
        ) : loaderStart === 0 ? (
          <p data-testid="Homepage">Click to Get Ships......</p>
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
};

export default Home;
