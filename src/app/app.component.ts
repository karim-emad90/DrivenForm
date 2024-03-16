import { Component } from '@angular/core';
import { FormControl, NgForm, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DrivenForm';
  form : any;
  // emailRegex : string = "/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/";
  contactRegex : string = "[0][10-12]{2}[0-9]{8}";
  onSubmit(f:NgForm){
    console.log (f.value);
  }
  
  getValue(f : FormControl){
    console.log(f)
  }

  constructor(fb : FormBuilder){
  //  this.form = fb.group({
  //     fullname : ['',[
  //       Validators.required,
  //       Validators.minLength(5)
  //     ]],

  //     email : ['',[
  //       Validators.required,
  //       Validators.email
  //     ]],

  //     contactDetails : fb.group({
  //       address : ['',[
  //         Validators.required
  //       ]],
  //       shippingAddress : ['',[Validators.required]],
  //       contactNo : ['',[
  //         Validators.required,
  //         Validators.pattern(this.contactRegex)
  //       ]],

  //       Skills: fb.array([])
  //     })
  //   })
    this.form = new FormGroup({
      fullname : new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      email : new FormControl('',[
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      

      contactDetails : new FormGroup({
        address : new FormControl('',[
          Validators.required
        ]),
        shippingAddress : new FormControl('',[Validators.required,]),
        contactNo : new FormControl('',[
          Validators.required,
          Validators.pattern(this.contactRegex)
        ])

      }),
      skills : new FormArray([])
    });
  }

  

  get fullname (){
    return this.form.get('fullname');
  }

  get email(){
    return this.form.get('email');
  }

  get address (){
    return this.form.get('contactDetails.address');
  }

  get shippingAddress(){
    return this.form.get('contactDetails.shippingAddress');
  }

  get contactNo(){
    return this.form.get('contactDetails.contactNo');
  }

  get Skills (){
    return this.form.get('skills') as FormArray;
  }


  onSubmit2(){
    console.log(this.form.value)
  }

  addSkills(skills: HTMLInputElement){
    this.Skills.push(
      new FormControl(skills.value)
    )
    skills.value = '';
    console.log(this.form.value);

  }

  removeSkills(index: any){
    this.Skills.removeAt(index);
  }
 
}



  
