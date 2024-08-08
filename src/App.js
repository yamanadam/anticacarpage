import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

function App() {
  const text = [
    { text1: "Dive into", text2: "What You Love" },
    { text1: "Indulge", text2: "Your Passions" },
    { text1: "Give into", text2: "Your Passions" },
  ];

  const [counter, setCounter] = useState(0);
  const [video, setVideo] = useState(false);

  return (
    <div>
      <Background counter={counter} video={video} />
      <Navbar />
      <Content
        counter={counter}
        setCounter={setCounter}
        video={video}
        setVideo={setVideo}
        text={text[counter]}
      />
    </div>
  );
}

export default App;
