///creando nuestro primer objeto literal que aun asi no sea instancia de un protototipo que haamos creado, si son instancia del prototipo pbject
//OBJETO LITERAL
const natalia = {
    name:'Natalia',
    age:20,
    cursosAprobados: [
        'Curso de asincronismo con javascript',
        'Curso de CSS grid'
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

//creando prototipo student
//PROTOTIPO
function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //forma 1 de declarar metodo de prototipo
    // this.aprobarCurso = function(nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso);
    // }
}

//forma 2 de declarar metodo de prototipo
Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

//creando instancia de prototipo student
//metodo de aprobarCurso tmb lo tiene juanita en el proto, pq es una instancia del prototipo student
//INSTANCIA DE PROTOTIPO -> palabra reservada new
const juana = new Student(
    'Juana',
    22,
    ['curso1', 'curso2', 'curso3']
);