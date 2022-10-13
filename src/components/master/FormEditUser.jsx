import React from "react";

const FormEditUser = ({ setEditForm, openSide }) => {
  return (
    <div className="background-form" onClick={() => setEditForm(false)}>
      <div
        className="form-container"
        style={openSide ? { left: "200px" } : { left: "20px" }}
      >
        <span className="cross" onClick={() => setEditForm(false)}>
          X
        </span>
        <form>
          <div className="input">
            <label htmlFor="id">Editar Usuario N°:</label>
            <input type="text" name="id" placeholder="id" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEditUser;
