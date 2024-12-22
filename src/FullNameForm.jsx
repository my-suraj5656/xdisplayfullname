import React, { useState } from "react";

const FullNameForm = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [fullname, setfullname] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (firstname && lastname) {
      setfullname(`${firstname} ${lastname}`);
    }
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          required
          value={firstname}
          placeholder="Enter First Name"
          onChange={(e) => setfirstname(e.target.value)}
        />
        <br />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="Lastname"
          required
          value={lastname}
          placeholder="Enter Last Name"
          onChange={(e) => setlastname(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullname && <h2>Full Name: {fullname}</h2>}
    </div>
  );
};

export default FullNameForm;
