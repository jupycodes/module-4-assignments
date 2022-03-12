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
    batch: string;
    gpa: number

    constructor(name:string, age:number, nationality:string, batch: string, gpa:number) {
        super(name,age,nationality);   
    }
}

interface Iundergrad{
    batch: string;
    name: string;
    age: number;
    gender: string;
    nationality: string;
    gpa: number;
}

let student_1 = new UnderGraduate("Jennifer Lopez", 50, "Puerto Rican", "A", 3.5)
student_1.getNationality()