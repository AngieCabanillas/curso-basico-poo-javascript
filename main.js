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

//prototipos con la sintaxis de clases
//CLASES
class Student2{//1°forma de declara clase(atributos ordenados)
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

//creamos una instancia de la clase student2
const angie = new Student2(
    'Angie',
    15,
    [
        'curso basico de html y css', 
        'curso practico de html y css'
    ]
);

//
///2° forma: declarar una clase (atributos desordenados)
class Student2{
    constructor({//recibir un solo parametro tipo objeto
        age, name, email, cursosAprobados = []//iniciamos nuestro arreglo vacio
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

//creamos una instancia de la clase student2
const angie2 = new Student2({//los atributos pueden asignarse en desorden
    name:'Angie',
    age: 15,
    cursosAprobados : [
        'curso basico de html y css', 
        'curso practico de html y css'
    ]
});

//------------------------------------------------------------------
//VENTAJAS DE LA PROGRAMACION ORIENTADA A OBJETOS


//creamos clase de rutas
class LearningPaths{
    constructor({
        nombre, cursos = []
    }){
        this.nombre = nombre;
        this. cursos = cursos;
    }    
}
//instancia de LearningPaths
const escuelaWeb = new LearningPaths({
    nombre:'Escuela de desarrollo web',
    cursos:['curso basico de html y css', 'curso practico de html y css']
});
const escuelaDiseño = new LearningPaths({
    nombre:'Escuela de diseño',
    cursos:['curso de diseño UI', 'curso practico de UX']
});

//creamos clases
class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,//si no envian nada, se crean como undefined
        instagram = undefined,
        facebook = undefined,
        approvedCourses= [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

//creamos instancia de la clase
const alessio = new Student({
    name:'Alessio',
    email:'angiecb9@hotmail.com',
    username:'alexandra',
    twitter: 'holi',
    learningPaths:[
        escuelaWeb,
    ]
});

//creamos instancia de la clase
const alessio2 = new Student({
    name:'Alessio2',
    email:'angiecb9@hotmail.com',
    username:'alexandra',
    facebook: 'facedealessio',
    learningPaths:[
        escuelaDiseño, 
        escuelaWeb
    ]
});
