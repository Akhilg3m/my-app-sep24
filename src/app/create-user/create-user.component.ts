import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(60)]),
    phone: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      pin: new FormControl()
    }),
    type: new FormControl(),
    // busFee: new FormControl(),
    // hostelFee: new FormControl(),
    cards: new FormArray([])
  })

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl('', [Validators.required]),
        expiry: new FormControl(),
        cvv: new FormControl(),
      })
    )
  }

  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor(){

    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{

        if(data=='dayScholor'){
          this.userForm.addControl('busFee', new FormControl());
          this.userForm.removeControl('hostelFee');
        }
        else{
          this.userForm.addControl('hostelFee', new FormControl());
          this.userForm.removeControl('busFee')
        }

      }
    )

  }

  submit(){
    this.userForm.markAllAsTouched();
    console.log(this.userForm);
  }

}
