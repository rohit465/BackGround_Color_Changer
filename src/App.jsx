import { useState } from "react";

function App() {
  const [color, SetColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color, color: "black" }}
    >
      <div>
     <h1 className="py-9 text-2xl font-bold text-white flex flex-wrap justify-center">BackGround Color Changer</h1>
     
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg
        bg-white px-3 py-2 rounded-3xl"
        >
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#8F00FF" }}
            onClick={() => SetColor("#8F00FF")}
          >
            Violet
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#4B0082" }}
            onClick={() => SetColor("#4B0082")}
          >
            Indigo
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#0000FF" }}
            onClick={() => SetColor("#0000FF")}
          >
            Blue
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#00FF00" }}
            onClick={() => SetColor("#00FF00")}
          >
            Green
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FFFF00" }}
            onClick={() => SetColor("#FFFF00")}
          >
            Yellow
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FF7F00" }}
            onClick={() => SetColor("#FF7F00")}
          >
            Orange
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FF0000" }}
            onClick={() => SetColor("#FF0000")}
          >
            Red
          </button>

          
        </div>
      </div>
    </div>
  );
}

export default App;
