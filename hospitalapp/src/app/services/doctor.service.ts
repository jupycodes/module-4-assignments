import { Injectable } from '@angular/core';
import { Doctor } from '../interfaces/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  doctors:Doctor[] = [
    {name: "Johnny Walker", specialization: "Cardiologist"},
    {name: "Ricky Bobby", specialization: "Orthopedics"},
    {name: "Peter Pan", specialization: "Pyschiatrist"}
  ]

  constructor() { }
}
