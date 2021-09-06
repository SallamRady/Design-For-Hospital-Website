/* Go to Top of Page */
window.onscroll = () => {
    let topPage = document.getElementById('top-page-arrow');
    window.scrollY > 500 ? (topPage.style.display = 'block')
        : (topPage.style.display = 'none');

   /*
    let ourNavbar = document.getElementById('ourNavbar');
    window.scrollY > 280 ? (ourNavbar.classList.add('fixed-top'))
    : (ourNavbar.classList.remove('fixed-top'));
   */
}
function goToTop(){
   window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
   });
}