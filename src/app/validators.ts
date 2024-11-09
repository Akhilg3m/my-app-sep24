import { AbstractControl } from "@angular/forms";


export function capgeminiMail(control:AbstractControl){
 
    if(control.value.includes('@capgenimi.com')){
        return null;
    }
    else{
        return {'capgeminiMail':'please use capgemini email'};
    }
    
}

