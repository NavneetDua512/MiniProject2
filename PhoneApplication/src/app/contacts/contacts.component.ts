import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact/contact';
import {ContactService} from '../contact/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts:Contact[];
  dummyContact:Contact[];
  dummy:string;
  s1:string;
  searched:Contact[];
  s2:boolean;
  counter:number;
  content:boolean;
  display:boolean;
  
  constructor(private contactService:ContactService) { 
   
    this.contacts=[];
    this.searched=[];
    this.contacts=this.contactService.getContacts();
    this.s2=false;
    this.counter=0;
    this.content=false;
    this.display=false;
  }
  
  search(){
    this.content=false;
    if(this.s1!="")
    {
      this.s2=true;
    }
    this.searched=[];
     for(let index=0;index<this.contacts.length;index++)
     {
       if(this.s1==this.contacts[index].name)
       {
         this.searched.push(this.contacts[index]);
         this.counter++;
       }
     }
     if(this.counter==0)
     {
        this.content=true;
     }
     this.counter=0;
  }

 

displayDetails(cntName:string){
this.display=true;
this.dummy=cntName;
}
update(nName:string,nNum:string){
  for(let index=0;index<this.contacts.length;index++)
  {
    if(this.contacts[index].name==this.dummy)
    {
      this.contacts[index].name=nName;
      this.contacts[index].phoneNo=nNum;
      break;
    }
    
  }
  for(let index=0;index<this.searched.length;index++)
  {
    if(this.searched[index].name==this.dummy)
    {
      this.searched[index].name=nName;
      this.searched[index].phoneNo=nNum;
      break;
    } 
  }
  this.dummy=null;
  this.display=false;
}

 delete(del:Contact){
  this.dummyContact=[];
  for(let index=0;index<this.contacts.length;index++)
  {
    if(this.contacts[index].name!=del.name)
    {
      this.dummyContact.push(this.contacts[index]);
    }
    
  }
  this.contacts=this.dummyContact;
  this.dummyContact=[];
  for(let index=0;index<this.searched.length;index++)
  {
    if(this.searched[index].name!=del.name)
    {
      this.dummyContact.push(this.searched[index]);
    }
    
  }
  this.searched=this.dummyContact;
}
  ngOnInit(): void {
  }

}

  