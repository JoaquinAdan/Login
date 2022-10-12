import React from "react";
import { useState, useEffect } from "react";
import { GiPadlockOpen, GiPadlock } from "react-icons/gi";

const FormContainer = () => {
  const initialState = "";
  const [inputNameText, setInputNameText] = useState(initialState);
  const [inputLastNameText, setInputLastNameText] = useState(initialState);
  const [selected, setSelected] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [validation, setValidation] = useState(false);
  //   const [savedData, setSavedData] = useState(false);

  const handleInputNameChange = (e) => {
    const text = e.target.value;
    setInputNameText(text);
    console.log(inputNameText);
    // if (text === "") {
    //   setSavedData(false);
    // }
  };

  const handleInputLastNameChange = (e) => {
    const text = e.target.value;
    setInputLastNameText(text);
    console.log(inputLastNameText);
    // if (text === "") {
    //   setSavedData(false);
    // }
  };

  const saveData = () => {
    const inputName = document.querySelector("#input-name").value;
    const inputLastName = document.querySelector("#input-last-name").value;
    if (inputName && inputLastName) {
      localStorage.setItem("nombre", inputNameText);
      localStorage.setItem("apellido", inputLastNameText);
      alert("has guardado tu nombre");
    } else {
      setTimeout(() => {
        setValidation(true);
      }, 0);
      setTimeout(() => {
        setValidation(false);
      }, 3000);
    }
    // setSavedData(true);
  };

  const getNameData = () => {
    return localStorage.getItem("nombre");
  };

  const getLastNameData = () => {
    return localStorage.getItem("apellido");
  };

  const getToggleData = () => {
    return localStorage.getItem("toggle-switch") === "true";
  };

  useEffect(() => {
    setNombre(getNameData());
    setApellido(getLastNameData());
    setSelected(getToggleData());
  }, []);
  console.log(selected);
  return (
    <div>
      <div className="input-container">
        <input
          className="input"
          style={
            validation
              ? { boxShadow: "rgba(90, 0, 0, 0.75) 0px 5px 15px" }
              : { boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }
          }
          id="input-name"
          onChange={handleInputNameChange}
          placeholder="Ingrese su nombre"
          value={selected ? nombre : undefined}
        />
        {selected ? (
          <GiPadlock
            className="padlock padlock-red"
            title="bloqueado porque 'Recordar usuario' esta activado"
          />
        ) : (
          <GiPadlockOpen className="padlock padlock-green" />
        )}
      </div>
      <div className="input-container">
        <input
          className="input"
          id="input-last-name"
          style={
            validation
              ? { boxShadow: "rgba(90, 0, 0, 0.75) 0px 5px 15px" }
              : { boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }
          }
          onChange={handleInputLastNameChange}
          placeholder="Ingrese su apellido"
          value={selected ? apellido : undefined}
        />
        {selected ? (
          <GiPadlock
            className="padlock padlock-red"
            title="bloqueado porque 'Recordar usuario' esta activado"
          />
        ) : (
          <GiPadlockOpen className="padlock padlock-green" />
        )}
      </div>
      {validation ? (
        <div className="error-relative">
          <div className="error-container">
            <span className="error">Debe completar los campos</span>
          </div>
        </div>
      ) : null}
      <div className="actives-container">
        <div className="checkbox-container">
          <input
            type="checkbox"
            className="checkbox"
            // onClick={() => setCheck(!check)}
            onChange={(e) => {
              const inputName = document.querySelector("#input-name").value;
              const inputLastName =
                document.querySelector("#input-last-name").value;
              console.log(e.target.checked);
              setSelected(e.target.checked);
              
              inputName === "" && inputLastName === ""
                ? null
                : localStorage.setItem(
                    "toggle-switch",
                    e.target.checked === true
                  );

              if (e.target.checked === false) {
                localStorage.removeItem("nombre", inputNameText);
                localStorage.removeItem("apellido", inputLastNameText);
                localStorage.removeItem("toggle-switch", e.target.checked);
              } 
            }}
            checked={selected}
          />
          <span className="span-text">Recordar usuario</span>
        </div>
        <button className="button" onClick={saveData}>
          INGRESAR
        </button>
      </div>
    </div>
  );
};

export default FormContainer;
