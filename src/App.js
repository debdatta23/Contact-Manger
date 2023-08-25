import logo from './logo.svg';
import './App.css';
import {v4 as uuid} from "uuid";
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import ContactCard from './components/ContactCard'
import Navbar from './components/Navbar'
import React,{useState,useEffect} from "react";
import {BrowserRouter as Router,Switch,Route,Routes} from 'react-router-dom'
//Use of UseEffect:: When the value changes it helps
//to render the value again in the component 


function App() {
 const [contacts,setContacts]=useState([]);
  const LOCAL_STORAGE_KEY= "contacts";
 //this is  to pass something from a child to a parent
 const addContactHandler=(contact)=>{

  console.log(contact); 
  setContacts([...contacts,{ id: uuid(),...contact}]); //We use setContacts here ,
                                    //...contacts means that all the previous contacts to be added also
 };

 const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact) => {
    return contact.id !== id;
  });
  setContacts(newContactList);
};
{/* useEffect(()=>{
  const retrieveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))); //to add the contacts in local storage
  if(retrieveContacts) {
    setContacts(retrieveContacts)
  };
 },[]);//to grab the information from local storage and display it*/}




 useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts)); //to add the contacts in local storage

 },[contacts]);//dependency

 
  return (
    <div>

    
    
      <Header/>
      
      
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
     
      
     
    
    </div>
    
  );
}



export default App;