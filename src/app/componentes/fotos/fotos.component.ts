import { Component, OnInit,OnChanges  } from '@angular/core';
//import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';


export interface Item { name: string; url: string, tipo:string }

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  
  productoRegistroForm: FormGroup;
  
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  tipoProduct = [
    { id: 1, name: 'Arreglo' },
    { id: 2, name: 'Ramo' },
    { id: 3, name: 'Caja' },
  ];
  tipe:any;


  constructor(public afs: AngularFirestore,
    private fb: FormBuilder) { 
      this.itemsCollection = this.afs.collection<Item>("productos");
      this.items = this.itemsCollection.valueChanges();
  
  } 

  ngOnInit(): void {
    this.productoRegistroFormInit();
    
    
    
   
    
  }


  private productoRegistroFormInit() {
    
    this.productoRegistroForm = this.fb.group({
      tipo:[]
    });

    this.productoRegistroForm.controls["tipo"].valueChanges.subscribe(res => {
      console.log(res);
      this.tipe=res;

      // this.items.forEach(res =>{
      //   if(res.filter())
      // })
      this.items.forEach(res =>{
        for (let i = 0; i < res.length; i++) {
          if(res[i].tipo === this.tipe){
            const element = res[i];
            console.log(element);
            //this.items = of(element);

          }
         
        }
      });
      

      
    })
  }
}
