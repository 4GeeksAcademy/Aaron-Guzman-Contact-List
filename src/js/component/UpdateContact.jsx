import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { Context } from '../store/appContext';
import { useLocation } from 'react-router';

const UpdateContact = () => {
    const location = useLocation();
    const { contact } = location.state;
    const { store, actions } = useContext(Context);
    const navigate = useNavigate(); // Asigna useNavigate a la variable navigate

    const [updateName, setUpdateName] = useState(contact.full_name);
    const [updateEmail, setUpdateEmail] = useState(contact.email);
    const [updatePhone, setUpdatePhone] = useState(contact.phone);
    const [updateAddress, setUpdateAddress] = useState(contact.address);

    const handlerSave = async () => {
        try {
            if (updateName === "" || updateEmail === "" || updatePhone === "" || updateAddress === "") {
                alert("Todos los campos deben llenarse para crear un nuevo contacto");
                return;
            }

            const updatedContact = {
                full_name: updateName,
                email: updateEmail,
                agenda_slug: "eiron",
                address: updatePhone,
                phone: updateAddress
            };

            await actions.updateContact(updatedContact, contact.id); // Envía los datos actualizados y el ID del contacto
            navigate("/CallContactCard");
        } catch (error) {
            console.log("Ocurrió un error", error);
        }
    }

    return (
        <div className='container'>
            <h1>Edit Contact</h1> {/* Actualiza el título */}
            <div className="mb-3 contactForm">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" name='full_name' value={updateName} onChange={(e) => setUpdateName(e.target.value)} />
                <label htmlFor="exampleFormControlInput2" className="form-label">Email</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Enter email" name='email' value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} />
                <label htmlFor="exampleFormControlInput3" className="form-label">Phone</label>
                <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Enter phone" name='phone' value={updatePhone} onChange={(e) => setUpdatePhone(e.target.value)} />
                <label htmlFor="exampleFormControlInput4" className="form-label">Address</label>
                <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Enter Address" name='address' value={updateAddress} onChange={(e) => setUpdateAddress(e.target.value)} />
            </div>
            <button onClick={handlerSave} type="button" className="btn btn-primary">Save</button>
        </div>
    );
}

export default UpdateContact;