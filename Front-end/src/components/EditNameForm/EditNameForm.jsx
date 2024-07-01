import React, { useState } from "react";
import "./EditNameForm.sass";

const EditNameForm = ({ initialName, onSave, onCancel }) => {
  const [newName, setNewName] = useState(initialName);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    onSave(newName);
  };

  return (
    <div className="edit-name-form">
      <input
        type="text"
        name="firstName"
        value={newName.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={newName.lastName}
        onChange={handleChange}
      />
      <div className="button-group">
        <button className="save-button" onClick={handleSaveClick}>
          Save
        </button>
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditNameForm;
