import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ScrollingPage = () => {
  const sectionRef = useRef(null);

  const [{ transform }, setTransform] = useSpring(() => ({
    transform: 'translateY(0px)',
    config: { mass: 1, tension: 300, friction: 30 },
  }));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = sectionRef.current.getBoundingClientRect().top;
      setTransform({ transform: `translateY(${scrollY * 0.5}px)` });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setTransform]);

  return (
    <div className="overflow-hidden bg-gray-50 min-h-screen">
      <header className="p-10 text-center">
        <h1 className="text-5xl font-bold leading-tight">let's scroll.</h1>
      </header>

      <main>
        <section ref={sectionRef} className="min-h-[240vh] relative">
          <div className="grid grid-cols-3 gap-8 content-center">
            {/* First layer */}
            <div className="layer">
              <animated.img
                src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=800&auto=format&fit=crop&q=60"
                alt=""
                className="w-full"
                style={{ transform }}
              />
              <animated.img
                src="https://images.unsplash.com/photo-1556304044-0699e31c6a34?w=800&auto=format&fit=crop&q=60"
                alt=""
                className="w-full"
                style={{ transform }}
              />
              <animated.img
                src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=800&auto=format&fit=crop&q=60"
                alt=""
                className="w-full"
                style={{ transform }}
              />
            </div>

            {/* Second layer */}
            <div className="layer">
              <animated.img
                src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=800&auto=format&fit=crop&q=60"
                alt=""
                className="w-full"
                style={{ transform }}
              />
              <animated.img
                src="https://images.unsplash.com/photo-1637414165749-9b3cd88b8271?w=800&auto=format&fit=crop&q=60"
                alt=""
                className="w-full"
                style={{ transform }}
              />
              <animated.img
                src="https://images.unsplash.com/photo-1699911251220-8e0de3b5ce88?w=800&auto=format&fit=crop&q=60"
                alt=""
                className="w-full"
                style={{ transform }}
              />
            </div>

            {/* Third layer */}
            <div className="layer">
              <animated.img
                src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=800&auto=format&fit=crop&q=60"
                alt=""
                className="w-full"
                style={{ transform }}
              />
              <animated.img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60"
                alt=""
                className="w-full"
                style={{ transform }}
              />
            </div>
          </div>
        </section>

        <section className="text-center pt-20">
          <h2 className="text-5xl font-bold">fin.</h2>
        </section>
      </main>

      <footer className="text-center pt-10">
        <span aria-hidden="true">
          ʕ<span className="arm">ノ</span>•ᴥ•ʔ<span className="arm">ノ</span>
          <span className="spring">
            <span>︵</span>
          </span>
          <span className="table">┻━┻</span>
        </span>
        &nbsp;&copy; jhey '24
      </footer>

      <a
        className="block w-9 mx-auto pt-10"
        href="https://twitter.com/intent/follow?screen_name=jh3yy"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg
          className="w-9"
          viewBox="0 0 969 955"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="161.191"
            cy="320.191"
            r="133.191"
            stroke="currentColor"
            strokeWidth="20"
          ></circle>
          <circle
            cx="806.809"
            cy="320.191"
            r="133.191"
            stroke="currentColor"
            strokeWidth="20"
          ></circle>
          <circle
            cx="695.019"
            cy="587.733"
            r="31.4016"
            fill="currentColor"
          ></circle>
          <circle
            cx="272.981"
            cy="587.733"
            r="31.4016"
            fill="currentColor"
          ></circle>
          <path
            d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z"
            fill="currentColor"
          ></path>
          <rect
            x="310.42"
            y="448.31"
            width="343.468"
            height="51.4986"
            fill="#FF1E1E"
          ></rect>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default ScrollingPage;
