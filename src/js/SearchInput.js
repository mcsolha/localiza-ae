function SearchInput({ onInputChange }) {


    let ref = document.getElementById('search-input');

    function inputHandler({ target }) {
        onInputChange(target.value.trim());
    }

    ref.addEventListener('input', inputHandler);
}

export default SearchInput;
