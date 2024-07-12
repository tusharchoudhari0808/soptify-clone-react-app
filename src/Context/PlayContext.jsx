import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

const PlayContext = createContext();

const PlayContextProvider = (props) => {
  const audioRef = useRef();
  const seekbg = useRef();
  const seekbar = useRef();

  const [treck, setTreck] = useState(songsData[0]);
  const [playState, setPlayState] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totleTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayState(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayState(false);
  };

  const playWithId = async (id) => {
    await setTreck(songsData[id]);
    await audioRef.current.play();
    playState(true);
  };

  const previous = async () => {
    if (treck.id > 0) {
      await setTreck(songsData[treck.id - 1]);
      await audioRef.current.play();
      setPlayState(true);
    }
  };
  const Next = async () => {
    if (treck.id < songsData.length - 1) {
      await setTreck(songsData[treck.id + 1]);
      await audioRef.current.play();
      setPlayState(true);
    }
  };

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekbg.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekbar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";

        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totleTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  const contextValue = {
    audioRef,
    seekbg,
    seekbar,
    treck,
    setTreck,
    playState,
    setPlayState,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    Next,
    seekSong,
  };

  return (
    <PlayContext.Provider value={contextValue}>
      {props.children}
    </PlayContext.Provider>
  );
};

export { PlayContext, PlayContextProvider };
