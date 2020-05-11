function SearchInput({ onInputChange, state }) {
    let ref = document.getElementById('search-input');

    state.observe('inputValue', (_, newValue) => {
        ref.value = newValue;
    });

    function inputHandler({ target }) {
        onInputChange(target.value.trim());
    }

    ref.addEventListener('input', inputHandler);
}

export default SearchInput;
