var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Students = /** @class */ (function () {
    function Students(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.gender = "Female";
        this.nationality = nationality;
    }
    Students.prototype.getNationality = function () {
        console.log("".concat(this.name, " is ").concat(this.nationality));
    };
    return Students;
}());
var UnderGraduate = /** @class */ (function (_super) {
    __extends(UnderGraduate, _super);
    function UnderGraduate(name, age, nationality, batch, gpa) {
        return _super.call(this, name, age, nationality) || this;
    }
    return UnderGraduate;
}(Students));
var student_1 = new UnderGraduate("Jennifer Lopez", 50, "Puerto Rican", "A", 3.5);
student_1.getNationality();
