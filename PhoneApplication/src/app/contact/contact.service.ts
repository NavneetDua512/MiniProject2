import {Contact} from './contact';

export class ContactService{
    private contacts:Contact[];
    contactser:ContactService;
    contactSearch:Contact[];


    constructor (){
    this.contacts=[];
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
    }

    getContacts():Contact[]{
        return this.contacts;
    }

    addContact(c:Contact){
    this.contacts.push(c);
    return this.contacts;
    }
    removeContact(c:Contact):Contact[]
    {
        for(let index=0; index<this.contacts.length;index++)
        {
            if(c.phoneNo==this.contacts[index].phoneNo)
            {
                const i=index;
                this.contacts.splice(i,1);
                break;
            }
        }
        return this.contacts;
    }

    updateContact(c:Contact)
    {
        for(let index=0;index<this.contacts.length; index++)
        {
          if(c.name==this.contacts[index].name || c.phoneNo==this.contacts[index].phoneNo)
          {
              this.contacts[index].name==c.name;
              this.contacts[index].phoneNo==c.phoneNo;
              break;
          }
          else{
              this.contactser.addContact(c);
          }
        }
        return this.contacts;


    }

    searchContact(search:string):Contact[]
    {
        if(search=="")
        {
            return this.contacts;
        }
        else
        {
            this.contactSearch=[];
            for(let index=0;index<this.contacts.length;index++)
            {
                if(search.toLowerCase()==this.contacts[index].name || search==this.contacts[index].phoneNo.toString())
                {
                    this.contactSearch.push(this.contacts[index]);
                }
            }
            return this.contactSearch;

        }
    }

    sortContacts(sortDesc:boolean):Contact[]
{   if(sortDesc==false)
    {
    this.contacts=this.contacts.sort((obj1, obj2) => {
      if (obj1.name > obj2.name) {
          return 1;
      }
  
      else if (obj1.name < obj2.name) {
          return -1;
      }
  
      return 0;
  });
    }
    else if(sortDesc==true)
    {
        this.contacts=this.contacts.sort((obj1, obj2) => {
            if (obj1.name> obj2.name) {
                return -1;
            }
        
            else if (obj1.name < obj2.name) {
                return 1;
            }
        
            return 0;
    });
}
  return this.contacts;
}
        
    }