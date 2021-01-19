import React, { useState } from 'react';
import TeamListing from './Form';
import Team from './Team';

const initialValue = {
  username: '',
  email: '',
  role: ''
}

export default function App() {

  const [teamMember, setTeamMember] = useState([])
  const [formValue, setFormValue] = useState(initialValue);
  const formUpdate = (nameInput, valueInput) => {
      setFormValue({...formValue, [nameInput]: valueInput});
  }

  const formSubmit = () => {
    const newTeamMember = {
      username: formValue.username,
      email: formValue.email,
      role: formValue.role,
    }

    if (!newTeamMember.username || !newTeamMember.email || !newTeamMember.role) return;

    setTeamMember([...teamMember, newTeamMember])
    setFormValue(initialValue)
  }


  return (
    <div className="App">
     <header>
       <h1>Team Builder App</h1>
       </header>

       <TeamListing 
       values={formValue}
       update={formUpdate}
       submit={formSubmit}
       />

      {teamMember.map((teamMember) => {
        return <Team key={teamMember.id} details={teamMember} />
      })}
     
    </div>
  );
}

