import React from "react";
import fisherman from "/src/images/fisherman1.png";
import fishermanUp from "/src/images/fishermanUp1.png";
import bobber from "/src/images/bobber.png";
import notice from "/src/images/exclamation.png";
import bronzeFish from "/src/images/bronzeFish.png";
import silverFish from "/src/images/silverFish.png";
import goldFish from "/src/images/goldFish.png";
import diamondFish from "/src/images/diamondFish.png";
import rainbowFish from "/src/images/rainbowFish.png";

export default function Fisher() {
  const [bobberState, setBobberState] = React.useState("initial");
  const [positionX, setPositionX] = React.useState(0);
  const [positionY, setPositionY] = React.useState(0);
  const [opacity, setOpacity] = React.useState(1);
  const [fishX, setFishX] = React.useState(0);
  const [fishY, setFishY] = React.useState(0);
  const [fishOpacity, setFishOpacity] = React.useState(0);

  function getFishRarity() {
    var randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 1) {
      return rainbowFish;
    } else if (randomNumber < 10) {
      return diamondFish;
    } else if (randomNumber < 30) {
      return goldFish;
    } else if (randomNumber < 60) {
      return silverFish;
    } else {
      return bronzeFish;
    }
  }

  const [rarity, setRarity] = React.useState(getFishRarity());

  function reel() {
    if (bobberState === "plunged") {
      setBobberState("standby");
      setPositionX(-20);
      setPositionY(-87);
      setOpacity(1);
      setFishX(-120);
      setFishY(25);
      setFishOpacity(1);
      setTimeout(() => setBobberState("up"), 300);
    } else if (bobberState === "up") {
      setBobberState("standby");
      setFishOpacity(0);
      setTimeout(reset, 800);
    }
  }

  function plunge() {
    setPositionX(4);
    setPositionY(13);
    setOpacity(0);
    setTimeout(() => setBobberState("plunged"), 500);
    //setBobberState("plunged");
  }

  function reset() {
    setFishX(120);
    setFishY(-25);
    setPositionX(0);
    setPositionY(0);
    setTimeout(() => setBobberState("floating"), 100);
    setRarity(getFishRarity());
    var randomTime = Math.floor(Math.random() * 2000) + 3000;
    setTimeout(plunge, randomTime);
  }

  function start() {
    if (bobberState === "initial") {
      setTimeout(plunge, 2500);
    }
  }

  const bobberStyle = {
    transform: `translate(${positionX}px, ${positionY}px)`,
    opacity: opacity,
    transition: "0.2s ease-out",
  };

  const fishStyle = {
    transform: `rotate(90deg) translate(${fishX}px, ${fishY}px)`,
    opacity: fishOpacity,
    transition: "0.15s ease-out",
  };

  return (
    <div className="fisher" onClick={reel} onLoad={start}>
      {(bobberState === "up" || bobberState === "standby") ?
        <img className="fisherman-up" src={fishermanUp} /> :
        <img className="fisherman" src={fisherman} />
      }
      <img className="bobber" src={bobber} style={bobberStyle} />
      {bobberState === "plunged" && <img className="notice" src={notice} />}
      <img className="fish" src={rarity} style={fishStyle} />
      <div className="fisher-info">
        <i className="fa-solid fa-circle-info"></i>
      </div>
      <div className="fisher-instructions">
        When the bobber is down, click to reel in a fish. Click again to cast
        the rod!
      </div>
    </div>
  );
}
