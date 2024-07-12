import React, { useContext } from "react";
import Nevbar from "./Nevbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayContext } from "../Context/PlayContext";

const DisAlbume = () => {
  const { id } = useParams();
  const albumdata = albumsData[id];

  const {playWithId } = useContext(PlayContext)

  return (
    <>
      <Nevbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:item-end">
        <img className="w-48 rounded" src={albumdata.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <p className="text-5xl font-bold mb-4 md:text-7xl">
            {albumdata.name}
          </p>

          <h4>{albumdata.desc}</h4>
          <p className="mt-1">
            <img className="inline-block w-5" src={assets.spotify_logo} />
            <b>Spotify</b>• 1,232,343 likes • <b>50 Songs,</b>
            about 2 hr 30 min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hiddan sm:block">Add Date</p>

        <img className=" m-auto w-4" src={assets.clock_icon} alt="" />
      </div>

      <hr />
      {songsData.map((item, index) => (
        <div
          onClick={()=>playWithId (item.id)} key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt="" />
            {item.name}
          </p>

          <p className=" text-[15xp]">{albumdata.name}</p>
          <p className="text-[15px] hidden sm:block">5 day ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisAlbume;
