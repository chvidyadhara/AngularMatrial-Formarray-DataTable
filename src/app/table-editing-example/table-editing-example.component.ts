import { Component, OnInit, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validator,FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'table-editing-example',
  styleUrls: ['table-editing-example.component.css'],
  templateUrl: 'table-editing-example.component.html',
})
export class TableEditingExampleComponent implements OnInit {
  //data: Element[]
  displayedColumns = ['name', 'email', 'phoneno','actions'];
//   dataSource = new BehaviorSubject<AbstractControl[]>([]);
// dataSource = new MatTableDataSource(ELEMENT_DATA);
//   formarrayfild: FormArray = this.fb.array([{}]);
//   form: FormGroup = this.fb.group({userdata:this.formarrayfild});
//   constructor(private fb: FormBuilder) { }


//   addRow() {
//     const formar = this.fb.group({}); 
//     this.formarrayfild.push(formar);
//     this.updateView()
//   }
//   ngOnInit() {
//     this.updateView();
//   }
//   updateView() {
//     this.dataSource.next(this.formarrayfild.controls);
//   }

//   removeQuantity(i:number) {
//     this.formarrayfild.removeAt(i);
//   }
//   deleteItem(){}
dataSource = new MatTableDataSource([]);
productForm: FormGroup;
quan:any;  
constructor(private fb:FormBuilder) {
 
  this.productForm = this.fb.group({
    // name: '',
    quantities: this.fb.array([]) ,
  });
}

quantities() : FormArray {
  return this.productForm.get("quantities") as FormArray
}
 
newQuantity(): FormGroup {
  return this.fb.group({
    name: '',
    email: '',
    phoneno:''
  })
  
}
 
addQuantity() {
  console.log("test")
  this.quantities().push(this.newQuantity());
   console.log(this.quantities())
   this.dataSource = new MatTableDataSource(this.quantities().controls);
//  this.quan = this.quantities().controls
}

// removeQuantity(i:number) {
//   this.quantities().removeAt(i);
// }
getControl(index, fieldName) {
  const a  = this.quantities().at(index).get(fieldName) as FormControl;
  return this.quantities().at(index).get(fieldName) as FormControl;
}
 
onSubmit() {
  console.log(this.productForm.value);
}
ngOnInit(){
 
}

}

//Interface 
export interface Element {
  name: string;
  email: string;
  phoneno: number
}
// const ELEMENT_DATA: Element[] = [
//   { name: 'Lithium', email:'Lithi',phoneno:33333},
//   { name: 'Beryllium', email:'bey',phoneno:3332 },
//   { name: 'Boron',email:'elel',phoneno:456789  }
// ];
