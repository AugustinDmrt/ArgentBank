import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelEdit, saveName } from "../../features/profile/profileSlice";
import "./EditNameForm.sass";

const EditNameForm = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.profile.name);
  const token = useSelector((state) => state.auth.token); // Assurez-vous de récupérer le jeton
  const userId = useSelector((state) => state.auth.userId); // Assurez-vous de récupérer l'ID utilisateur
  const [newName, setNewName] = useState(name);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    dispatch(saveName({ ...newName, userId, token }));
  };

  const handleCancelClick = () => {
    dispatch(cancelEdit());
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
        <button className="cancel-button" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditNameForm;
