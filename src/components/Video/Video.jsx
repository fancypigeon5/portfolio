import React, { useEffect, useRef, useState } from "react";
import laptop from './laptop-openen.mp4';
import "./Video.css";
import { VideoScroll } from "react-video-scroll";

export default function HomeVideo() {
  return (
    <div className="App">
      <div className="wrapper">
        <VideoScroll
            className= 'videoscroll'
            playbackRate={300}
        >
          <video
            className="video"
            tabIndex={0}
            preload="preload"
            playsInline
          >
            <source
              type="video/mp4"
              // src="https://public-files.gumroad.com/2iqs64nw6606s1p8a3689ixhjk2z"
              src={laptop}
            />
          </video>
        </VideoScroll>
      </div>
    </div>
  );
}