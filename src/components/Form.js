import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();

    if (firstName.length <= 0) {
      setErrors(["First name is required!"]);
    }else{
      setErrors([]);
      const formData = {firstName,lastName}
      const dataArr = [...submittedData, formData];
      setSubmittedData(dataArr);
  
      setFirstName("");
      setLastName("");
    }


  };

  const submissionList = submittedData.map((e,i)=>{
    return (
      <div key={i}>
        {e.firstName} {e.lastName}
      </div>
    );
  });

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      {errors.length > 0 ? 
        errors.map((err,i)=>{
          return <p key={i} style={{ color: "red" }}>{err}</p>
        }) 
        : null}
    </form>
    <h3>Submissions</h3>
    {submissionList}
    </>
  );
}

export default Form;
