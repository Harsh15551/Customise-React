import { useState } from "react";
function App() {
  const [color, setcolor] = useState("olive");
  return (
   
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          
          <div className="flex flex-wrap gap-2 justify-center shadow-lg bg-white px-3 py-2 rounded-3xl ">
            
            <button onClick={()=>{setcolor("olive")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "olive" }}
            >
              olive
            </button>

            <button onClick={()=>{setcolor("red")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button onClick={()=>{setcolor("blue")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button onClick={()=>{setcolor("purple")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>

            <button onClick={()=>{setcolor("green")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button onClick={()=>{setcolor("orange")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>

            <button onClick={()=>{setcolor("violet")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
            
            <button onClick={()=>{setcolor("indigo")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "indigo" }}
            >
              Indigo
            </button>
            
            <button onClick={()=>{setcolor("cyan")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "cyan" }}
            >
              Cyan
            </button>
          
          </div>
        
        </div>
      
      </div>
 
  );
}

export default App;
