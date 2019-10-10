import { zip, Subject } from 'rxjs';

export class Proxy2{

    result = new Subject();
    result2 = new Subject();

    constructor(){
        this.result2.pipe(
            switchMap( data => {
                return  zip(
                    this.http.post('',data).pipe(
                        tap( resp => this.result.next(resp))
                    ),
                    this.result
                )
            })
        )
    }


    serverSave(data){
        zip(
            this.http.post('',data).pipe(
                tap( resp => this.result.next(resp))
            ),
            this.result
        )
    }
}






export class Proxy{

    door : Promise<any>;
    door2 = new Door();

    constructor(public http : HttpClient){}


    save1(data:any){
        this.door2.createPromise( this.door2.promise
                        .then( ()=> this.serverSave(data) )
                        .then( (resp)=> {})
        );
    }

    serverSave(data:any){

        // server save
        return this.http.post('',data)
                .toPromise()
                .then( resp => {
                    this.door2.resolve();
                    return resp;
                })
    }
}

class Door {
    lastPromise: Promise<any>;

    promise:Promise<any> = this.createPromise();
    resolve : any;



    createPromise(lastPromise?){
        this.promise = new Promise( (resolve,reject)=> {
            this.resolve = resolve;

            if(lastPromise){
                this.lastPromise = lastPromise;
                this.lastPromise.then( ()=> resolve() );
            }
        });
        return this.promise;
    }

}

