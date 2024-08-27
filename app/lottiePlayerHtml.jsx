import React, { useEffect, useRef } from "react";

const LottiePlayerHtml = () => {
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
            src="https://lottie.host/0543d519-2bea-49d5-8621-7a7f34e94be5/LLwZHGIxg1.json" 
            background="transparent" 
            speed="1" 
            style="width: 116px; height: 300px;  transform: scale(1.2);" 
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

export default LottiePlayerHtml;
