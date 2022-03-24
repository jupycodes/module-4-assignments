import { Injectable } from '@angular/core';
import { Patient } from '../interfaces/patient'

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients:Patient[] = [
    {name: "Bob Boberson", illness: "kidney stones"},
    {name: "Don Donaldson", illness: "Covid"},
    {name: "Lance Larson", illness: "bipolar disorder"}
  ]
  constructor() { }
}
