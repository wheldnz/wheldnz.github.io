alert('program ini adalah \nPlayer VS AI \nPeraturan sederhana jika kamu berhasil \nmencapai score 5 lebih dulu berarti kamu MENANG');

function getPilihanComputer() {
  const comp = Math.floor(Math.random() * 3);

  if (comp == 0) return 'gajah';
  if (comp == 1) return 'orang';
  return 'semut';
}

function getHasil(comp, player) {
  if (player == comp) return 'SERI';
  if (player == 'gajah') return comp == 'orang' ? 'MENANG' : 'KALAH';
  if (player == 'orang') return comp == 'gajah' ? 'KALAH' : 'MENANG';
  if (player == 'semut') return comp == 'orang' ? 'KALAH' : 'MENANG';
}

function turning() {
  const imgComputer = document.querySelector('.img-computer');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 100);
}

const selection = document.querySelectorAll('li img');
let scoreP = 0;
let scoreC = 0;
selection.forEach(function (select) {
  select.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = select.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    turning();

    setTimeout(function () {
      const imgComputer = document.querySelector('.img-computer');
      imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

      const info = document.querySelector('.info');
      info.innerHTML = hasil;

      if (hasil == 'MENANG') {
        const scorePlayer = document.querySelector('.score-player');
        scoreP++;
        scorePlayer.textContent = scoreP;
      }
      if (hasil == 'KALAH') {
        const scoreComp = document.querySelector('.score-comp');
        scoreC++;
        scoreComp.textContent = scoreC;
      }
      if (scoreC >= 5) alert('KAMU KALAH \nSilahkan tekan tombol reset!');
      if (scoreP >= 5) alert('KAMU MENANG \nSilahkan tekan tombol reset!');
    }, 1000);
    const reset = document.querySelector('.undo');
    reset.addEventListener('click', function () {
      window.location.reload(false);
      // const poinComp = document.querySelector('.score-player');
      // poinComp.textContent = 0;

      // const poinPlayer = document.querySelector('.score-comp');
      // poinPlayer.textContent = 0;
      // return;
    });
  });
});

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector('.img-computer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });
