const header = document.getElementsByTagName('header')[0];
const navbar = document.getElementsByClassName('navbar')[0];
window.onscroll = function(){
  console.log(window.scrollY);
  if (window.scrollY > 10 && window.scrollY < 530) {
    header.style.backgroundColor = 'black';
    navbar.style.color = 'white';
    header.style.boxShadow = 'none';
  } else if (window.scrollY > 530) {
    header.style.backgroundColor = 'white';
    navbar.style.color = 'black';
    header.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px';
  } else {
    header.style.backgroundColor = 'transparent';
    navbar.style.color = 'white';
    header.style.boxShadow = 'none';
  }
}