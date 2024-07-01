import { useDispatch, useSelector } from "react-redux";
import Account from "../../components/Account/Account";
import EditNameForm from "../../components/EditNameForm/EditNameForm";
import { editName } from "../../features/profile/profileSlice";
import "./Profile.sass";

const Profile = () => {
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.profile.isEditing);
  const name = useSelector((state) => state.profile.name);

  const handleEditClick = () => {
    dispatch(editName());
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
          <EditNameForm />
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
