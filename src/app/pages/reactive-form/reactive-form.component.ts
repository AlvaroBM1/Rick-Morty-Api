import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      name: [''],
      status: [''],
      gender: [''],
      origin: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // Aquí puedes manejar la lógica cuando se envía el formulario
    console.log(this.reactiveForm.value);
  }
}
