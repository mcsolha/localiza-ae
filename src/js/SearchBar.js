import {
    addMultipleEventsListener, isEmptyString, createObservable, debounce
} from "./helpers";
import SearchInput from "./SearchInput";
import PredictionList from "./PredictionList";


function SearchBar({ localizaService, onPredictionChange = () => {} }) {
    let state = createObservable({
        predictions: [],
        inputValue: '',
    });
    let ref = document.getElementById('search-bar');

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

            onPredictionChange(response);
        } catch (err) {
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
