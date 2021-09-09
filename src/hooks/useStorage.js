import { useState, useEffect } from "react";
const useStorage = () => {
  const [listStudent, setListStudent] = useState([
    "Huyen",
    "Hoa",
    "Hung",
    "Long",
  ]);
  const [inputName, setInputName] = useState("");
  const [inputedName, setInputedName] = useState("");
  const handleChange = (e) => {
    setInputName(e.target.value);
    const input = inputName;
    setInputedName(input);
  };

  const onClick = (e) => {
    e.preventDefault();
    const listStudent1 = listStudent;
    for (let index = 0; index < listStudent.length; index++) {
      if(listStudent1[index] === inputName)
        listStudent1.splice(listStudent1.indexOf(inputName), 1);
    }

    setListStudent(listStudent1);
    setInputName("");
  };
  return [listStudent, inputName, handleChange, onClick, inputedName];
};

export default useStorage;