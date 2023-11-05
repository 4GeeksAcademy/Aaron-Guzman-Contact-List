import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'
import "../../styles/ContactCard.css"

const ContactCard = () => {
    const { store, actions } = useContext(Context)

    const [mouseHoverDelete, setMouseHoverDelete] = useState(false);
    const [mouseHoverEdit, setMouseHoverEdit] = useState(false);

    const handlerMouseHoverDelete = (index) => {
        setMouseHoverDelete({ ...mouseHoverDelete, [index]: true });
    }

    const handlerMouseLeaveDelete = (index) => {
        setMouseHoverDelete({ ...mouseHoverDelete, [index]: false });
    }

    const handlerMouseHoverEdit = (index) => {
        setMouseHoverEdit({ ...mouseHoverEdit, [index]: true });
    }

    const handlerMouseLeaveEdit = (index) => {
        setMouseHoverEdit({ ...mouseHoverEdit, [index]: false });
    }

    const handlerDelete = async (id) => {
        try {
            const updatedList = store.contact.filter((contact) => contact.id !== id);

            store.contact = updatedList;

            await actions.deleteContact(id);


        } catch (error) {
            console.error("Ocurrio un error al borrar el contacto", error)
        }



    }

    useEffect(() => {
        const getAgenda = async () => {
            try {

                await actions.getContactList()

            }

            catch (error) {
                console.log("Ocurrio un error", error)
            }
        }
        getAgenda();
    })




    return (
        <div className='Container-fluid'>

            <h1>Contact list</h1>
            <header>

                <div className='createNew'>

                    <Link to="/CallAddNewContact">
                        <button type="button" className="btn btn-success">Add new contact</button>
                    </Link>

                </div>

            </header>

            {store.contact.map((item, index) => (
                <div key={index} className='contactList'>


                    <div className="card mb-3 contact-card" >

                        <div className="row g-0">

                            <div className="col-md-2 imgBox">
                                <img src="https://www.billboard.com/wp-content/uploads/2023/07/dua-lipa-barbie-premiere-2023-billboard-02-espanol-1548.jpg?w=942&h=623&crop=1" className="img-fluid" alt="Profile" />
                            </div>

                            <div className="col-md-4 infoBox">
                                <div className="card-body">
                                    <h5 className="card-title">{item.full_name}</h5>
                                    <div className='item i1'>
                                        <i class="fa-solid fa-location-dot"></i>

                                        {item.address}

                                    </div>

                                    <div className='item i2'>
                                        <i class="fa-solid fa-phone"></i>

                                        {item.phone}

                                    </div>

                                    <div className='item i3'>
                                        <i class="fa-solid fa-envelope"></i>
                                        {item.email}
                                    </div>

                                </div>
                            </div>

                            <div className='col-md-4'>
                            </div>

                            <div className='col-md-2 icons'>
                                <button onClick={() => handlerDelete(item.id)} className='element' onMouseOver={() => handlerMouseHoverDelete(index)} onMouseLeave={() => handlerMouseLeaveDelete(index)}>
                                    <i className={mouseHoverDelete[index] ? "fa-regular fa-trash-can fa-bounce" : "fa-regular fa-trash-can"}></i>
                                </button>

                                <button className='element' onMouseOver={() => handlerMouseHoverEdit(index)} onMouseLeave={() => handlerMouseLeaveEdit(index)}>
                                    <i className={mouseHoverEdit[index] ? "fa-solid fa-pen fa-bounce" : "fa-solid fa-pen"}></i>
                                </button>
                            </div>


                        </div>
                    </div>


                </div>

            ))
            }


        </div >
    )

}

export default ContactCard