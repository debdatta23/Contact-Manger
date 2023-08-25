import React from "react";


class AddContact extends React.Component {
    state={
        name:"",
        email:"",
    };

     add=(e)=>{
        e.preventDefault();
        if(this.state.name===""||this.state.email===""){
            //If the name and email are not enetered
            alert("All the fields are mandatory!");
            return;
        }
       // console.log(this.state); If you want to get the contact objects i  the child (AddContact.js)
    this.props.addContactHandler(this.state); //passing the contact value from child to parent so that we can
                                            //get the contact objects both in parent(App.js) and child(AddContact.js)
                                            
    this.setState({name:"",email:""}); //this is used so that after we submit the form the form gets cleared
};
    render()
{
     return (
    <>
    
      <div className="  container mt-5">
        <form >
        <div className="input-group mb-3 w-50"   >
          <span className="input-group-text" id="inputGroup-sizing-default">
            Name
          </span>
          <input
          placeholder="Name"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.name}
            onChange={(e)=>this.setState({name:e.target.value})}
            
          />
        </div>

        <div className="input-group mb-3 w-50">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Email
          </span>
          <input

            placeholder="email"
            type="email"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.email}
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={this.add} >Add</button>
        
        </form>
      </div>
   
    </>
  );
}
}


export default AddContact;


