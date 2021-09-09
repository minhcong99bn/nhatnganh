import React from "react";
import "./App.css";
import useStorage from "./hooks/useStorage";

function App() {
  const [listStudent, inputName, handleChange, onClick] = useStorage();

  return (
    <div>
      <div className="listName listStudent">
        <p>学生一覧: [Huyen, Hoa, Hung, Long]</p>
      </div>

      <div className="listStudent">追加する名前を入力してください。</div>
      <input className="listStudent" onChange={handleChange} />
      <button onClick={onClick}>確定</button>
      <div className="listStudent">追加する名前: {inputName}</div>

      <div className="listName listStudent">
        <p>学生一覧: [</p>
        {listStudent.map((element, index) =>
          index === listStudent.length - 1 ? (
            <p>{element}</p>
          ) : (
            <p>{element},&nbsp;</p>
          )
        )}
        <p>]</p>
      </div>
    </div>
  );
}

export default App;