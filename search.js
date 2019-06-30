window.addEventListener('load', evt => {
    const toggleFilters = document.getElementById('toggleFilters');
    const productFilters = document.getElementById('productFilters');
    const closeProductFilters = productFilters.getElementsByClassName('close-btn')[0];
    
    toggleFilters.addEventListener('click', () => document.body.classList.toggle('is-filtering'));
    closeProductFilters.addEventListener('click', () => document.body.classList.remove('is-filtering'));
})