export class Admin{

    constructor(
    
        public adminName:string,
    
        public email:string,
    
        public password:string,
        public phone:string,
    
        public dob:Date,
        public gender:string,
    
        public address:string,
    
        public state:any[],
    
        public district:any[],
        public linkedin:any,
        public facebook:any,
        public instagram:any,
        public status:any
   
    )
    {}
    
    }

    export let admin:Admin[]=[];

    // export let   states = [

    //     "Andra Pradesh",  "Karnataka", "Kerala", "Tamil Nadu","Telungana"]

 

    //   export let districts: string[] = [];