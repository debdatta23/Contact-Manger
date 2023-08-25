import React from "react";
import ContactCard from "./ContactCard"

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler=(id)=>{
    props.getContactId(id);
  }


  const contacts=[{
    id:"1",
    name:"Dipesh",
    email:"defghj@gmail.com",
  }
  ]



  
  const renderContactList = props.contacts.map((contact) => {
    return (
      <>
     
     <ContactCard contact={contact} clickHander={deleteContactHandler} key={contact.id}/>
     </>
    );
  });

  return <div className="container">{renderContactList}</div>;
};

export default ContactList;
