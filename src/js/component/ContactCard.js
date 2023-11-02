import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const Contact = () => {
    const {store,actions} = useContext(Context)
    console.log(store.contact);
    console.log("Hola");


    return (
        <div className='Container'>

          {store.contact.map((item, index) => (
               <div key= {index} className='contactList'>
               
               <header>

                   <div className='createNew'>
                       <button type="button" className="btn btn-success">Add new contact</button>
                   </div>

                   </header>
            

               <div className="card mb-3 contact-card" >
                   
                   <div className="row g-0">

                       <div className="col-md-2 imgBox">
                           <img src="https://fashionmagazine.com/wp-content/uploads/2023/07/dua-lipa-barbie-premiere_feature.jpgYa quisiera estar como " className="img-fluid rounded-start" alt="Profile" />
                       </div>

                       <div className="col-md-4 infoBox">
                           <div className="card-body">
                               <h5 className="card-title">{item.full_name}</h5>
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

          ))}
         

        </div>
    )

}

export default Contact