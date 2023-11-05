import React, { useState, useContext } from 'react'
import "../../styles/AddNewContact.css"
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';



const AddNewContact = () => {
  const {store,actions} = useContext(Context);
  const [inputNewName, setInputNewName] = useState("");
  const [inputNewEmail, setInputNewEmail] = useState("");
  const [inputNewPhone, setInputNewPhone] = useState("");
  const [inputNewAddress, setInputNewAddress] = useState("");

  const navigate = useNavigate();

  const handlerSave = async (obj) => {
    try {
      if (inputNewName == "" || inputNewEmail == "" || inputNewPhone == "" || inputNewAddress == "") {
        alert("Todos los campos deben llenarse para crear nuevo contacto");
        return
      }

      let obj = {
        full_name: inputNewName,
        email: inputNewEmail,
        agenda_slug: "eiron",
        address: inputNewAddress,
        phone: inputNewPhone
      }

      await actions.createNewContact(obj);
     navigate("/CallContactCard")
    }catch(error) {
    console.log("Ocurrio un erorr", error);
  }
}

return (
  <div class Name='container'>

    <h1>Add a new contact</h1>

    <div className="mb-3 contactForm">
      <label for="exampleFormControlInput1" className="form-label">Full Name</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" name='full_name' value={inputNewName} onChange={(e) => setInputNewName(e.target.value)} />

      <label for="exampleFormControlInput1" className="form-label">Email</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter email" name='email' value={inputNewEmail} onChange={(e) => setInputNewEmail(e.target.value)} />

      <label for="exampleFormControlInput1" className="form-label">Phone</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter phone" name='phone' value={inputNewPhone} onChange={(e) => setInputNewPhone(e.target.value)} />

      <label for="exampleFormControlInput1" className="form-label">Address</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Address" name='address' value={inputNewAddress} onChange={(e) => setInputNewAddress(e.target.value)} />
    </div>

    <button onClick={handlerSave} type="button" className="btn btn-primary">Save</button>


  </div>
)
}

export default AddNewContact