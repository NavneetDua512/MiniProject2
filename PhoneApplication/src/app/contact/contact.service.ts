import {Contact} from './contact';

export class ContactService{
    contacts:Contact[];
    contactser:ContactService;
    dummy:Contact;

    constructor (){
    this.contacts=[];
    this.dummy=new Contact();
    var contact1,contact2,contact3,contact4;
    contact1=new Contact();
    contact1.name="Eric Elliot";
    contact1.phoneNo="222-555-65750";
    contact2=new Contact();
    contact2.name="Steve Jobs";
    contact2.phoneNo="222-555-65758";
    contact3=new Contact();
    contact3.name="Fred Allen";
    contact3.phoneNo="222-555-65740";
    contact4=new Contact();
    contact4.name="Steve Woznaik";
    contact4.phoneNo="222-555-68750";
    this.contacts.push(contact1);
    this.contacts.push(contact2);
    this.contacts.push(contact3);
    this.contacts.push(contact4);
    this.sort(this.contacts);
    }

    getContacts():Contact[]{
        return this.contacts;
    }

    addContact(c:Contact){
    this.contacts.push(c);
    return this.contacts;
    }
    sort(contacts:Contact[]){
        for(let index=0;index<this.contacts.length-1;index++)
        {
          for(let i=index+1;i<this.contacts.length;i++)
          {
             if(this.contacts[index].name>this.contacts[i].name)
             {
               this.dummy=this.contacts[index];
               this.contacts[index]=this.contacts[i];
               this.contacts[i]=this.dummy;
             }
          }
        }
    
      }
}