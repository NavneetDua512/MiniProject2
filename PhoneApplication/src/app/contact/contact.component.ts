import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contact:Contact;
display:boolean;
  constructor(private contactService:ContactService) {
    this.contact=new Contact();
    this.display=false;
   }
add(){
if(this.contact.name!=null)
{
this.contactService.contacts.push(this.contact);
this.contact=new Contact();
this.contactService.sort(this.contactService.contacts);

this.display=false;
}
}
displayDetails(){
this.display=true;
}
  ngOnInit(): void {
  }

}