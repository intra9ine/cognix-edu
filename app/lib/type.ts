

export type NavbarDropDownDataItem = {
    id: number;
    title: string;
    isSelectedNav: boolean;
    link:string;
  };
  
 export  interface SubmitFormProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;

}