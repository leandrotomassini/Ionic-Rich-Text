import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Editor, Validators } from 'ngx-editor';

// https://www.npmjs.com/package/ngx-editor

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  nuevoArticuloFormulario: FormGroup = this.fb.group({
    contenido: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(public fb: FormBuilder){}

  editor: Editor;
  html: '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }


  guardar(){
    console.log(this.nuevoArticuloFormulario.value)
  }

}
