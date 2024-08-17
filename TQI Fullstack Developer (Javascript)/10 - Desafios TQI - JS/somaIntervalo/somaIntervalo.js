const A = parseInt(prompt("Digite o valor de A:"));
const B = parseInt(prompt("Digite o valor de B:"));

const total = somaIntervalo(A, B);
console.log(total);

function somaIntervalo(A, B) {
    if (A > B) return -1;
    
    let total = 0;
    for (let i = A; i <= B; i++) {
        total += i;
    }
    return total;
}
