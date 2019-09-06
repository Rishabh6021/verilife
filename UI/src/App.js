import React from 'react';
import './App.css';
import FetchDonors from './ShowAll/FetchDonors/FetchDonors.react';
import FetchPatients from './ShowAll/FetchPatients/FetchPatients.react';
import FetchDonationCamps from './ShowAll/FetchDonationCamps/FetchDonationCamps.react';
import FetchBloodBanks from './ShowAll/FetchBloodBanks/FetchBloodBanks.react';

function App() {
  return (
    <div className="App">
      <h3>Fetch Donors</h3>
      <FetchDonors></FetchDonors>
      {/* <h3>Fetch Patients</h3>
      <FetchPatients></FetchPatients> */}
      <h3>Fetch Donation Camps</h3>
      <FetchDonationCamps></FetchDonationCamps>
      {/* <h3>Fetch Blood Banks</h3> */}
      {/* <FetchBloodBanks></FetchBloodBanks> */}
    </div>
  );
}

export default App;
