import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vehicles:any = [];
  term:string = "";
  column:string = "";
  order:string = "";

  constructor(private _vehicleService:VehicleService){

    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

  }

  sort(){
    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }

  search(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }

  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("Deleted Succesfully");
        location.reload();
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }

}
