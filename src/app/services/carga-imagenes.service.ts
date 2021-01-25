import { Injectable } from '@angular/core';


import {AngularFirestore} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {
  private CARPETA_IMAGENES = 'imgagen';
  urlDownload:any;
  constructor(private db:AngularFirestore) { }
  

  async cargarImagenesFirebase(imagenes: FileItem[]){
    console.log(imagenes)
    const storageRef = firebase.storage().ref();
    
    for( const item of imagenes ){

      item.estaSubiendo = true;
      if(item.progreso >= 100){
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
                                                      .put(item.archivo);


      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error("Error al subir", error),
        () => {
          
          console.log("imagen cargada correctamente");
          item.url = this.urlDownload;
          item.estaSubiendo=false;

          uploadTask.snapshot.ref.getDownloadURL().then((getUrl) => {
            item.url = getUrl;
            this.guardarImagen({
              nombre: item.nombreArchivo,
              url: item.url,
              nombrePersona: 'david'
            });
        });

        });
    }
  }
  private guardarImagen (imagen:{ nombre:string, url:string, nombrePersona:string}){
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
    
  }
}
