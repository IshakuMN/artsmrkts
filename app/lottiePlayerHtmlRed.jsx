import React, { useEffect, useRef } from "react";

const LottiePlayerHtmlRed = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
        "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    const renderDotLottiePlayer = () => {
      if (containerRef.current) {
        // Определяем размеры в зависимости от ширины экрана
        const isSmallScreen = window.innerWidth < 640;
        const width = isSmallScreen ? '87px' : '116px'; // изменено на 87px для меньшего экрана
        const height = isSmallScreen ? '200px' : '300px'; // изменено на 200px для меньшего экрана

        containerRef.current.innerHTML = `
          <dotlottie-player 
            src="https://lottie.host/72a9b084-2ed3-48dd-b6f3-731a2f699de0/w5VSmG30Uk.json" 
            background="transparent" 
            speed="1.2" 
            style="width: ${width}; height: ${height}; transform: scale(1.1);" 
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

export default LottiePlayerHtmlRed;
