export class RateforInternet {
    date?: string;
    success?:boolean;
    result?: number;
    query?: query;
    info?: info;
}
export class query{
    amount?:number;
    from?:string;
    to?:string;
}
export class info{
    rate?:number;
    timestamp?:number;
}