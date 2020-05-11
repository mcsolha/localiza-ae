import {
    addMultipleEventsListener, isEmptyString, createObservable, debounce
} from "./helpers";
import SearchInput from "./SearchInput";
import PredictionList from "./PredictionList";


function SearchBar({ localizaService }) {
    let state = createObservable({
        predictions: [],
        inputValue: '',
    });
    let ref = document.getElementById('search-bar');
    let clearSearchEl = document.getElementById('clear-search');

    clearSearchEl.addEventListener('click', () => {
        state.inputValue = '';
        state.predictions = [];
        setActiveSearchClass(false);
    });

    function setActiveSearchClass(state) {
        return ref.classList[state ? 'add' : 'remove']('active-search');
    }

    async function searchLocation(value) {
        let isEmptyValue = isEmptyString(value);

        setActiveSearchClass(!isEmptyValue);

        if (isEmptyValue) {
            return state.predictions = [];
        }

        try {
            let response = await localizaService.searchLocation(value);

            state.predictions = response;
        } catch (err) {
            if (err === 'ZERO_RESULTS') {
                return state.predictions = [{
                    description: 'Nenhum resultado encontrado!',
                    notFound: true,
                }];
            }
            console.error(err);
        }
    }

    SearchInput({
        onInputChange: debounce(searchLocation, 250),
        state,
    });

    PredictionList({
        state,
        localizaService,
    });

    addMultipleEventsListener(
        ref,
        ['mousedown', 'touchstart'],
        (event) => {
            event.stopPropagation();

            if (state.predictions.length) {
                setActiveSearchClass(true);
            }
        }
    );

    addMultipleEventsListener(
        document.body,
        ['mousedown', 'touchstart'],
        () => setActiveSearchClass(false)
    );
}

export default SearchBar;
