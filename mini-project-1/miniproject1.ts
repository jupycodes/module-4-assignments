class Students {
    name: string;
    age: number;
    gender: string;
    nationality: string;

    constructor(name, age, nationality) {
      this.name = name;
      this.age = age;
      this.gender = "Female";
      this.nationality = nationality;
    }

    getNationality() {
      console.log(`${this.name} is ${this.nationality}`);
    }
}
   
class UnderGraduate extends Students implements Iundergrad{
    batch: number;


    constructor(name:string, age:number, nationality:string, batch: number, gpa:number) {
        super(name,age,nationality);   
    }
}

interface Iundergrad{
    batch: number;
    name: string;
    age: number;
    gender: string;
    nationality: string;
    gpa: number;
}

let student_1 = new UnderGraduate("Jennifer Lopez", 50, "Puerto Rican", 4, 3.5)
student_1.getNationality()