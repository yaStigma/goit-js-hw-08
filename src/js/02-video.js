import Player from "@vimeo/player";
import throttle from "lodash.throttle";
import { saveToLS, loadFromLS } from "./helpers";

const THROTTLE_TIME = 1000;

const playerIframe = document.querySelector("#vimeo-player");  

const player = new Player(playerIframe);

player.on("timeupdate", throttle(handleTimeUpdate, THROTTLE_TIME));

function handleTimeUpdate(e) {
    const key = "videoplayer-current-time";
    const currentTime = e.seconds;
    console.log(key, currentTime);
  saveToLS(key, currentTime);
}

function restoreVideoTime() {
  const savedTime = loadFromLS("videoplayer-current-time");
  if (savedTime !== null) {
    player.setCurrentTime(savedTime);
  }
}

restoreVideoTime();