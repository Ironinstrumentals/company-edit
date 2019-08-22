import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const firebaseConfig = {
  apiKey: 'AIzaSyBHD_YsgPdOB0zHcCAsTK1azdzM1WW4Jn0',
  authDomain: 'company-edit.firebaseapp.com',
  databaseURL: 'https://company-edit.firebaseio.com',
  projectId: 'company-edit',
  storageBucket: 'company-edit.appspot.com',
  messagingSenderId: '27274099416',
  appId: '1:27274099416:web:2dd20c57d7b4b9dc'
};
firebase.initializeApp(firebaseConfig);
@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  constructor(private http: HttpClient) {}
  db = firebase.firestore();
  saveCompany() {
    // @ts-ignore
    const company = document.getElementById('company').value;
    if (company !== '') {
      this.db.collection('Companies').doc(company).set({
        players: company,
      })
        .then(() => {
          console.log('Document successfully written!');
        })
        .catch((error) => {
          console.error('Error writing document: ', error);
        });
    }
  }
}
