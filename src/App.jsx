import "./App.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Comfy Store",
    img: "https://plus.unsplash.com/premium_photo-1683798464819-d1376249293e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Comfy Store is a cutting-edge e-commerce project built using JavaScript, React, React Router 6.4+, React Query, Redux Toolkit, and Axios for shopping furniture in one Go. Discover the perfect blend of style and comfort at our online furniture store. Designed with elegance and functionality in mind, our website offers a curated collection of premium furniture pieces to enhance every corner of your home.",
    project: "https://comfy-store-netlify.netlify.app/",
  },
  {
    id: 2,
    title: "Mix Master",
    img: "https://plus.unsplash.com/premium_photo-1671647122910-3fa8ab4990cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja3RhaWx8ZW58MHx8MHx8fDA%3D",
    desc: "MixMaster the ultimate party sidekick app built using React Router 6.4+, React Query that fetches cocktails from the hilarious Cocktails DB API. With a flick of your finger . Our Website unlock a treasure trove of enchanting drink recipes that'll make your taste buds dance and your friends jump with joy. Get ready to shake up your mixology game, one fantastical mocktail at a time, and let the laughter and giggles flow!",
    project: "https://mix-master-app-netlify.netlify.app/",
  },
  {
    id: 3,
    title: "Image Generator",
    img: "https://images.unsplash.com/photo-1719844841024-3c7166816fc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    desc: "Explore endless creativity with our Image Generator App, powered by the Unsplash API. Discover a vast collection of stunning, high-resolution images sourced directly from top photographers worldwide, right at your fingertips. Instantly access a diverse range of images across various categories, refreshed with each visit for new inspiration.",
    project: "https://image-generator-netlify.netlify.app/",
  },
  {
    id: 4,
    title: "Color Generator",
    img: "https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sb3J8ZW58MHx8MHx8fDA%3D",
    desc: "Welcome to our Color Generator App, crafted with React to inspire your creativity through vibrant color palettes. Discover and create beautiful color schemes effortlessly, tailored to your design needs . Fine-tune colors by adjusting hue, saturation, brightness, and opacity to achieve the perfect look for your projects with their hexadecimal color codes.",
    project: "https://color-generator-netlify.netlify.app/",
  },
  {
    id: 5,
    title: "Backroads App",
    img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
    desc: "Backroads is a travel package management website built using React. It offers a wide range of tour packages for exploring the world, including personalized options at affordable prices. Whether you're seeking adventure or relaxation, Outdoors provides tailored experiences to suit every traveler's preferences and budget.",
    project: "https://backroads-app-netlify.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.project} target="_blank">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>React Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default App;
