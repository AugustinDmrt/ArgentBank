import React, { useState } from "react";
import Account from "../../components/Account/Account";
import EditNameForm from "../../components/EditNameForm/EditNameForm";
import "./Profile.sass";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState({ firstName: "Tony", lastName: "Jarvis" });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (newName) => {
    setName(newName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {name.firstName} {name.lastName}!
        </h1>
        {isEditing ? (
          <EditNameForm
            initialName={name}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        )}
      </div>
      <Account />
    </main>
  );
};

export default Profile;
