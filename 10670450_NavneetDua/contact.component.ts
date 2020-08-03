import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactName:string;
  contact:Contact;
  contacts:Contact[];
  search:string;
  update:boolean;
  sortDesc:boolean;

  constructor(private contactSer:ContactService) { 

    this.contact=new Contact();
    this.contacts=this.contactSer.getContacts();
    this.sortDesc=true;
    this.update=false;
  }
 
  ngOnInit(): void {
  }
  displayDetails(){
    this.contactSer.addContact(this.contact);
    this.contact=new Contact();
  }
  removeDetails(){
    this.contactSer.removeContact(this.contact);
  }

  updatepopup(c)
  { this.contact=new Contact();
    this.update=true;
    this.contact.name=c.name;
    this.contact.phoneNo=c.phoneNo;
  }

 
 
  updateDetails(contactName,phoneno){
    { if(phoneno.value!="")
    {
    this.contact=new Contact();
    this.contact.name=contactName.value;
    this.contact.phoneNo=phoneno.value;
    this.contacts=this.contactSer.updateContact(this.contact);
    this.update=false;
    }
  }
  }
  searchDetails(){
    {
      if(this.search!="")
      {
        this.contacts=this.contactSer.searchContact(this.search);
      }
      else
      {
        this.contacts=this.contactSer.getContacts();
      }
    
  }
 

  }
  sortContacts()
  {   this.sortDesc=!this.sortDesc;
      this.contacts=this.contactSer.sortContacts(this.sortDesc);
  }}
