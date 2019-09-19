// USER COLLECTION

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userDetails: number;
}

//USER DETAILS COLLECTION

export type UserDetails = {
    firstName: string;
    lastName: string;
    id: string;
    location: string;
    role: string;
    superiors: string[];
    dates: string;
}
