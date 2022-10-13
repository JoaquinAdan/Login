import React, { useState } from "react";
import FormEditUser from "./FormEditUser";

const Searcher = ({ searcher, openSide }) => {
  const [listButton, setListButton] = useState(false);
  const [editForm, setEditForm] = useState(false);
  return (
    <div className="searcher-container">
      <input
        onChange={searcher}
        type="text"
        placeholder="Buscar"
        className="form-control"
      />
      <div className="actions-container">
        <button className="button-list actions" onClick={() => setListButton(!listButton)}>
          Acciones
        </button>
        {listButton ? (
          <div className="list-buttons-container">
            <button
              className="button-list button-action"
              onClick={() => setEditForm(!editForm)}
            >
              Editar Formulario
            </button>
            <button className="button-list button-action">Agregar Usuario</button>
            <button className="button-list button-action">Eliminar Usuario</button>
          </div>
        ) : null}
      </div>
      {editForm ? <FormEditUser setEditForm={setEditForm} editForm={editForm}  openSide={openSide}/> : null}
    </div>
  );
};

export default Searcher;
