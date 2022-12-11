document.querySelector('.toggle-btn').addEventListener('click', burger);

function burger() {
    document.querySelector('.site-nav').classList.toggle('active');
    document.querySelector('.toggle-btn').classList.toggle('open');
}
// addEventListener('scroll', (event) => { 
//     document.querySelector('.header').style.padding = '8px 0'
// });