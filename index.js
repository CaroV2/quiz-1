/*Planteamiento:
cree una función de JS que analice un arreglo de números que representa notas de estudiantes 
y retorne un objeto con informacion basado en el siguiente mapa: 
90-100: A
80-89: B
70-79: C
60-69: D
Below 60: F

Ejemplo:
const studentGrades = [100, 50, 65, 70, 85, 96, 45]
const result = computeGrades(studentGrades)
console.log(result)

console:
{
  parsed: [A, F, D, C, B, A, F],
  passed: 5,
  lose: 2,
 average: 73
}*/

function arr(notas) {
    notas = [60, 68, 20, 79]
    
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] <= 60) {
            studentGrades.push("F");
            //passed == false;
        }

        if (notas[i] > 60 && notas[i] <= 69) {
            studentGrades.push("D");
            //passed == true;
        }

        if (notas[i] >= 70 && notas[i] <= 79) {
            studentGrades.push("C");
            //passed == true;
        }

        if (notas[i] >= 80 && notas[i] <= 89) {
            studentGrades.push("B");
            //passed == true;
        }

        if (notas[i] >= 90 && notas[i] == 100) {
            studentGrades.push("A");
            //passed == true;
        }
    }

    /*if (passed == true) {
        console.log("paseed" + i)
    } else {
        console.log("lose" + i)
    }*/
}

const studentGrades = [];
const result = studentGrades;

arr();
console.log(result)