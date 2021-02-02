import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';
import { FileItem } from '../../models/file-item';
@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {
  productoRegistroForm: FormGroup;
  estaSobreElemento: boolean=false;
  archivos: FileItem[]= [];
  
  tipoProduct = [
    { id: 1, name: 'Arreglo' },
    { id: 2, name: 'Ramo' },
    { id: 3, name: 'Caja' },
  ];

  constructor( public _cargaImagenes : CargaImagenesService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.productoRegistroFormInit();
  }


  cargarImagenes(){
    this._cargaImagenes.cargarImagenesFirebase( this.archivos, this.productoRegistroForm.value );
  } 

  pruebaSobreElemento(event){
    console.log(event);
  }

  limpiarImagenes(){
    this.archivos = [];
  }




  
  private productoRegistroFormInit() {
    
    this.productoRegistroForm = this.fb.group({
      namep:[],
      precio:[],
      descripcion:[],
      tipo:[],
    });
  }



  onSubmit(form:any){
    console.log(form);

    this.cargarImagenes();
  }
}
