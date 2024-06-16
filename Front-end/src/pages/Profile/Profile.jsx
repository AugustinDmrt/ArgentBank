import Account from "../../components/Account/Account";
import "./Profile.sass";
const Profile = () => {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <Account />
    </main>
  );
};
export default Profile;
