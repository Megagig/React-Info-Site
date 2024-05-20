import './showProfile.css';
import { useState } from 'react';
import brad from '../assets/brad.jpg';
import okeke from '../assets/okeke.jpg';
import profile2 from '../assets/profile2.jpg';
import tony from '../assets/Tony.jpg';

const ShowProfile = () => {
  const [showEvents, setShowEvents] = useState(true);
  const [profiles, updateProfiles] = useState([
    { id: 1, name: 'Brad Traversy', profilePic: brad },
    { id: 2, name: 'Okeke Chima', profilePic: okeke },
    { id: 3, name: 'Ava Reynolds', profilePic: profile2 },
    { id: 4, name: 'Olivia Thompson', profilePic: tony },
  ]);

  const handleDelete = (id) => {
    let filteredProfiles = profiles.filter((each) => each.id !== id);
    updateProfiles(filteredProfiles);
  };

  return (
    <div className="App">
      {showEvents && (
        <button onClick={() => setShowEvents(false)} className="profile-btn">
          Hide profiles
        </button>
      )}

      {!showEvents && (
        <button onClick={() => setShowEvents(true)} className="profile-btn">
          Display profiles
        </button>
      )}

      <div className="profile-card">
        {showEvents &&
          profiles.map((profile) => (
            <div key={profile.id}>
              <div className="card">
                <div className="number">{profile.id}</div>

                <div>
                  <img
                    className="profile-pic"
                    src={profile.profilePic}
                    alt="profile picture"
                  />
                </div>

                <div className="descr">
                  <p className="name">{profile.name}</p>
                  <button
                    className="delete-profile"
                    onClick={() => handleDelete(profile.id)}
                  >
                    {' '}
                    Delete profile
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShowProfile;
