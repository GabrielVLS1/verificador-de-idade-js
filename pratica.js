function verificar(){
  let txtano = document.querySelector('#txtano');
  // let masc = document.querySelector('#masc');
  // let fem = document.querySelector('#fem');
  let res = document.querySelector('#res');

  let data = new Date().getFullYear();
  
 
  if(txtano.value.length == 0 || txtano.value.length >= data){
    window.alert('Ops, tem algo estranho ai... 👀');
    
  }else{
    let idade = data - Number(txtano.value);
    let radsex = document.getElementsByName('radsex');
    let img = document.createElement('img');
    // img.setAttribute('id', 'foto');
    

 if (radsex[0].checked) {
      genero = 'Homem';

      if (idade >= 0 && idade <= 5) {
        img.setAttribute('src', './images/bebem.png');
      } else if (idade <= 10) {
        img.setAttribute('src', './images/criancam.png');
      } else if (idade <= 20) {
        img.setAttribute('src', './images/adolem.png');
      } else if (idade <= 30) {
        img.setAttribute('src', './images/adulto1.png');
      } else if (idade < 60) {
        img.setAttribute('src', './images/adulto2.png');
      } else if (idade <= 75) {
        img.setAttribute('src', './images/idoso1.png');
      } else if (idade <= 130) {
        img.setAttribute('src', './images/idoso2.png');
      } else {
        img.setAttribute('src', './images/esqueleto.png');
      }

    } else if (radsex[1].checked) {
      genero = 'Mulher';

      if (idade >= 0 && idade <= 5) {
        img.setAttribute('src', './images/bebef.png');
      } else if (idade <= 10) {
        img.setAttribute('src', './images/criancaf.png');
      } else if (idade <= 20) {
        img.setAttribute('src', './images/adolef.png');
      } else if (idade <= 30) {
        img.setAttribute('src', './images/adulta1.png');
      } else if (idade < 60) {
        img.setAttribute('src', './images/adulta2.png');
      } else if (idade <= 75) {
        img.setAttribute('src', './images/idosa1.png');
      } else if (idade <= 130) {
        img.setAttribute('src', './images/idosa2.png');
      } else {
        img.setAttribute('src', './images/esqueleto.png');
      }
    } res.innerHTML = `Você é ${genero} com ${idade} anos <br><br>`;
    res.appendChild(img);
  }
}