import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl()
  });

  public id:string = "";

  constructor(private _vehicleService:VehicleService, private _activatedRoute:ActivatedRoute){

      _activatedRoute.params.subscribe(
        (data:any)=>{

          this.id = data.id;

          _vehicleService.getVehicle(data.id).subscribe(
            (data:any)=>{
              this.vehicleForm.patchValue(data);
            }
          )

        }
      )


  }

  submit(){

    if(this.id){
      // edit
      this._vehicleService.editVehicle(this.id, this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Edited succesfully!!!");
        },
        (err:any)=>{
          alert(err.error);
        }
      )
    }
    else{
      // create
      this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Created succesfully!!!");
        },
        (err:any)=>{
          alert(err.error);
        }
      )
    }


    console.log(this.vehicleForm.value);
    
  }

}
