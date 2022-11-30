
let pais
do{
   pais = Number (prompt("Elija la opción del 1 a la 7 para conocer el rankin Fifa de estos 7 paises que en estos momentos disputan la Copa del mundo Qatar 2022 :  \n 1 - Argentina \n 2 - Polonia \n 3 - Mexico \n 4 - Arabia Saudita \n 5 - Brasil \n 6 - Belgica \n 7 - Francia"))

   if (pais === 1){
      mostrarPaisYpuesto ("Argentina", 3)
   } else if (pais === 2) {
      mostrarPaisYpuesto ("Polonia", 26)
   }
     else if (pais === 3) {
      mostrarPaisYpuesto ("Mexico", 13)
   }
     else if (pais === 4) {
      mostrarPaisYpuesto ("Arabia Saudita", 51)
   }
     else if (pais === 5) {
      mostrarPaisYpuesto ("Brasil", 5)
   }
     else if (pais === 6) {
      mostrarPaisYpuesto ("Belgica", 6)
   }   
     else if (pais === 7) {
      mostrarPaisYpuesto ("Francia", 7)

   }else {
      alert ("No es ninguno de los paises de esta pequeña lista, reintente nuevamente")
   }
} while (pais != 0)

function mostrarPaisYpuesto(pais, puesto) {
   alert(" " + pais + " " + "tiene el puesto numero" + " " + puesto + " " + "del ranking de la FIFA en este 2022")
}