export interface ICountry{
    id:number,
    Name:string
}

export class Country implements ICountry{
    constructor(id:number,name:string){
        this.id=id;
        this.Name=name;
    }

    id:number;
    Name:string;
}