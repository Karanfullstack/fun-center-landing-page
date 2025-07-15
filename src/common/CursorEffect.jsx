import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouse = useRef({ x: pos.current.x, y: pos.current.y });

  const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  useEffect(() => {
    const onMouseMove = (e) => {
      // Now 20px left and 20px up offset
      mouse.current.x = e.clientX - 20;
      mouse.current.y = e.clientY - 20;
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId;

    const animate = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.15);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.15);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        backgroundColor: '#DBFD01',
        borderRadius: '50%',
        pointerEvents: 'none',
        boxShadow: '0 0 8px 3px #DBFD01',
        zIndex: 9999,
        transform: 'translate3d(-100px, -100px, 0)',
      }}
    />
  );
};

export default CustomCursor;