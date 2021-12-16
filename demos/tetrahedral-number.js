// Find the nth Tetrahedral Number
// https://edabit.com/challenge/zRCyxKBBmr4F2x4Bv

// n = how many layers to the tetrahedron
function tetra(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) total += j;
  }
  return total;
}

console.log(tetra(1));
console.log(tetra(2));
console.log(tetra(5));
console.log(tetra(6));