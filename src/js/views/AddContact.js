import React from 'react'

const AddContact = () => {
  return (
    <div>
      
      <h1>Add a new contact</h1>

      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>

  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email"/>

  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter phone"/>

  <label for="exampleFormControlInput1" class="form-label">Address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Address"/>
</div>

    </div>
  )
}

export default AddContact