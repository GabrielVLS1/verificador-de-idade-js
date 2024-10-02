function verificar() {
  let data = new Date().getFullYear();
  let txtano = document.querySelector('#txtano');
  let res = document.querySelector('#res');

  if (txtano.value.length == 0 || txtano.value > data) {
    window.alert('[ERRO] Verifique os dados e tente novamente!');

  } else {
    let radsex = document.getElementsByName('radsex');
    let idade = data - Number(txtano.value);

    let img = document.createElement('img');
    // img.setAttribute('id', 'foto');

    // let gênero = '';
    if (radsex[0].checked) {
      gênero = 'Homem';

      if (idade >= 0 && idade <= 5) {
        img.setAttribute('src', './images/bebem.png'); // = img.src = "bebem.png"
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
      gênero = 'Mulher';

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

    // }else{
    //   window.alert('Marque alguma opão!')

    } res.innerHTML = `Você é ${gênero} com ${idade} anos <br><br>`;
    res.appendChild(img);
  }
}