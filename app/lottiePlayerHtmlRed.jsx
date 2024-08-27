import React, { useEffect, useRef } from "react";

const LottiePlayerHtmlRed = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    script.onload = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = `
          <dotlottie-player 
            src="https://lottie.host/50218fc5-77ec-4101-aaa3-48da05e4aa00/avEOJjHasd.json" 
            background="transparent" 
            speed="1.2" 
            style="width: 116px; height: 300px;  transform: scale(1.1);" " 
            loop 
            autoplay
          ></dotlottie-player>
        `;
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default LottiePlayerHtmlRed;
