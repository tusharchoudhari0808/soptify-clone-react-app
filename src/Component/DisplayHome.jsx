import React from "react";
import Nevbar from "./Nevbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumeItem from "./AlbumeItem";
import SongsItem from "./SongsItem";

const DisplayHome = () => {
  return (
    <>
      <Nevbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2x1"> Featured Chart</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumeItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2x1"> Today;s Biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongsItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
