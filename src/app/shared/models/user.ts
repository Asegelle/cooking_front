export class User {


    // --------------------------------------------------------------------------------
    // Variables
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;


    // --------------------------------------------------------------------------------
    // Constructor

    constructor(id?: number, firstName?: string, lastName?: string, email?: string){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;

    }



}