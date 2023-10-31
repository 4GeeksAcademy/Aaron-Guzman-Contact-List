import React from 'react'

const Contact = () => {
    return (
        <div className='Container'>
            

            <div className='contactList'>
               
                <header>

                    <div className='createNew'>
                        <button type="button" className="btn btn-success">Add new contact</button>
                    </div>

                    </header>
             

                <div className="card mb-3 contact-card" >
                    
                    <div className="row g-0">

                        <div className="col-md-2 imgBox">
                            <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>

                        <div className="col-md-4 infoBox">
                            <div className="card-body">
                                <h5 className="card-title">Contact Name</h5>
                                <div className='item i1'>
                                    <i class="fa fa-check-circle"></i>
                                    
                                  Direccion 
                                    
                                </div>

                                <div className='item i2'>
                                    <i class="fa fa-check-circle"></i>
                                    Telefono
                                </div>

                                <div className='item i3'>
                                    <i class="fa fa-check-circle"></i>
                                    Mail
                                </div>

                            </div>
                        </div>

                        <div className='col-md-4'>
                            Nada aqui
                        </div>

                        <div className='col-md-2 icons'>
                            <button className='element'><i class="fa fa-check-circle iconBtn"></i></button>
                            <button className='element'><i class="fa fa-check-circle iconBtn"></i></button>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )

}

export default Contact