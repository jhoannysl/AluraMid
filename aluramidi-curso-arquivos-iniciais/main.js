function tocaSomPom () {
document.querySelector('#som_tecla_pom').play();

}
document.querySelector('.tecla_pom').onclick = tocaSomPom;



const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador<9) {

    listaDeTeclas[contador].onclick = teclaSomPom;
    contador = contador + 1;
    console.log(contador);
}