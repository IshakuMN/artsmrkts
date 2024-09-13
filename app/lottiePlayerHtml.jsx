import React, { useEffect, useRef } from "react";

const LottiePlayerHtml = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    const renderDotLottiePlayer = () => {
      if (containerRef.current) {
        // Определяем размеры в зависимости от ширины экрана
        const isSmallScreen = window.innerWidth < 640;
        const width = isSmallScreen ? '87px' : '116px';
        const height = isSmallScreen ? '200px' : '300px';

        containerRef.current.innerHTML = `
          <dotlottie-player 
            src="https://lottie.host/6c5c0c46-f7aa-417a-bf78-8b184e474f1a/w4zYDpwm3t.json" 
            background="transparent" 
            speed="1" 
            style="width: ${width}; height: ${height}; transform: scale(1.2);" 
            loop 
            autoplay
          ></dotlottie-player>
        `;
      }
    };

    // Рисуем анимацию при загрузке страницы
    renderDotLottiePlayer();

    // Добавляем слушатель изменения размера окна
    window.addEventListener("resize", renderDotLottiePlayer);

    // Очищаем слушатель и удаляем скрипт при размонтировании компонента
    return () => {
      window.removeEventListener("resize", renderDotLottiePlayer);
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default LottiePlayerHtml;
