import React, { useState } from "react";
import "./App.css";

interface ElementProps {
  type: string;
}

function Element({ type }: ElementProps) {
  if (type === "text") {
    return <textarea rows={4} cols={50} />;
  } else if (type === "image") {
    return <div className="image-dummy">Drag image here or click to upload</div>;
  } else {
    return null;
  }
}

function Workspace() {
  const [elements, setElements] = useState<ElementProps[]>([]);

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const type = event.dataTransfer.getData("text/plain");
    const newElement = { type };
    setElements([...elements, newElement]);
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const newElement = { type: "image" };
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageSrc = e.target?.result;
        if (typeof imageSrc === "string") {
          newElement["src"] = imageSrc;
          setElements([...elements, newElement]);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="workspace" onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
      {elements.map((element, index) => (
        <div key={index} className={`element ${element.type}`}>
          <Element type={element.type} />
          {element.type === "image" && element.src && (
            <img src={element.src} alt="user uploaded" className="image" />
          )}
        </div>
      ))}
      <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
    </div>
  );
}

function Sidebar() {
  function handleDragStart(event: React.DragEvent<HTMLDivElement>, type: string) {
    event.dataTransfer.setData("text/plain", type);
  }

  return (
    <div className="sidebar">
      <div className="element" draggable onDragStart={(event) => handleDragStart(event, "text")}>
        Text
      </div>
      <div className="element" draggable onDragStart={(event) => handleDragStart(event, "image")}>
        Image
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Workspace />
    </div>
  );
}

export default App;
