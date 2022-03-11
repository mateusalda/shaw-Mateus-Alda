```
function calculaNota(ex, p1, p2) {
  let media = (ex*1 + p1*2 + p2*3)/6
  switch (true){
    case (media >= 9):
      return 'A';
    case (9 > media && media >= 7.5):
      return 'B';
    case (7.5 > media && media >= 6):
      return 'C'
    default:
      return 'D'
  }
}
```