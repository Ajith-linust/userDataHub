/**
 * Root State
 */

export interface IGeo {
    lat: string;
    lng: string;
}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    profilepicture: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}

export interface IRootState {
    users: IUser[];
    personInformation: IUser;
    loader: {
        users: boolean;
        personalInformation: boolean;
    }
};

