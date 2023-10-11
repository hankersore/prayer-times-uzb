const vaqt = document.querySelector('#time'),
    time = document.querySelector('#time'),
    weekday = document.querySelector('#weekday'),
    bomdod_time = document.querySelector('.bomdod_time'),
    quyosh_time = document.querySelector('.quyosh_time'),
    peshin_time = document.querySelector('.peshin_time'),
    asr_time = document.querySelector('.asr_time'),
    shom_time = document.querySelector('.shom_time'),
    hufton_time = document.querySelector('.hufton_time');
    bomdod = document.querySelector('.bomdod'),
    quyosh = document.querySelector('.quyosh'),
    peshin = document.querySelector('.peshin'),
    asr = document.querySelector('.asr'),
    shom = document.querySelector('.shom'),
    hufton = document.querySelector('.hufton');

async function getData(region) {
  const request = await fetch(
    `https://islomapi.uz/api/present/day?region=${region}`
  );
  const data = await request.json();
  let date = new Date();
  time.innerHTML = (`${date.getHours()}:`) + (`${date.getMinutes()}:`) + (`${date.getSeconds()}`)
    weekday.innerHTML = data.weekday
    bomdod_time.innerHTML = data.times.tong_saharlik
    peshin_time.innerHTML = data.times.peshin
    asr_time.innerHTML = data.times.asr
    shom_time.innerHTML = data.times.shom_iftor
    hufton_time.innerHTML = data.times.hufton
    quyosh_time.innerHTML = data.times.quyosh
    let timeCheck = new Date;
    let test = `${timeCheck.getHours()}:${timeCheck.getMinutes()}`
    if (test == data.times.bomdod || test < data.times.quyosh) {
      bomdod.classList.add("active");
    }
    else if (test != data.times.quyosh && test < data.times.asr) {
      peshin.classList.add("active");
    }
    else if (test == data.times.asr || test < data.times.shom) {
      asr.classList.add("active");
    }
    else if (test == data.times.shom || test < data.times.hufton) {
      shom.classList.add("active");
    }
    else if (test == data.times.hufton || test < "23:59") {
      hufton.classList.add("active");
    }
  console.log(test);
}

getData('Toshkent');

document.querySelector(".select-region").addEventListener('change', (e)=>{
    getData(e.target.value);
  })

  