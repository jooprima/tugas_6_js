function deretAngka(n) {
  var genap = [2, 4, 6, 8, 10, 12, 14, 16, 18];
  var ganjil = [
    "satu",
    "tiga",
    "lima",
    "tujuh",
    "sembilan",
    "sebelas",
    "tigabelas",
    "limabelas",
    "tujuhbelas",
    "sembilanbelas"
  ];
  for (var i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      hasilDeretAngka = genap;
    } else {
      hasilDeretAngka = ganjil;
    }
  }
  return hasilDeretAngka;
}

console.log(deretAngka(20));
