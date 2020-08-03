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
  constructor(private contactService:ContactService) {
    this.contacts=this.contactService.getContacts();
   }

  ngOnInit(): void {
  }

}
