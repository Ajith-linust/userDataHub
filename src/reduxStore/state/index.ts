import { IRootState } from "./types";

export const initialState: IRootState = {
  users: [],
  personInformation: {
    address: {
      city: "",
      geo: {
        lat: "",
        lng: "",
      },
      street: "",
      suite: "",
      zipcode: "",
    },
    company: {
      bs: "",
      catchPhrase: "",
      name: "",
    },
    email: "",
    id: 0,
    name: "",
    phone: "",
    profilepicture: "",
    username: "",
    website: "",
  },
  loader: {
    users: false,
    personalInformation: false,
  }
};
