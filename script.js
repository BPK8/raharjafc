const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.onclick = () => nav.classList.toggle('active');

document.getElementById('joinForm').addEventListener('submit', e => {
  e.preventDefault();
  const msg = `Halo Admin Raharja FC
Saya mau join.

Nama: ${nama.value}
Jurusan: ${jurusan.value}
Angkatan: ${angkatan.value}`;

  window.open(`https://wa.me/6285117440835?text=${encodeURIComponent(msg)}`);
});

document.querySelectorAll('.player-card').forEach(card=>{
  card.addEventListener('click',()=>{
    card.classList.toggle('active');
  });
});

const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add('active');
    }
  });
});
