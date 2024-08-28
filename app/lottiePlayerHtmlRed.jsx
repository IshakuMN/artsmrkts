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
            src="https://lottie.host/72a9b084-2ed3-48dd-b6f3-731a2f699de0/w5VSmG30Uk.json" 
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
