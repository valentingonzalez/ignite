window.addEventListener('load', evt => {
    const searchBar = document.getElementById('searchBar');
    const closeSearchBt = document.getElementById('closeSearch');

    searchBar.addEventListener('focus', () => {document.body.classList.add('searching')});
    closeSearchBt.addEventListener('click', () => document.body.classList.remove('searching'));
})
