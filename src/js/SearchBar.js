import {
    addMultipleEventsListener, isEmptyString, createObservable
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

    SearchInput({
        onInputChange: async function (value) {
            let isEmptyValue = isEmptyString(value);

            setActiveSearchClass(!isEmptyValue);

            try {
                let response = await localizaService.searchLocation(value);

                state.predictions = response;

                onPredictionChange(response);
            } catch (err) {
                console.error(err);
            }
        },
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

            setActiveSearchClass(true);
        }
    );

    addMultipleEventsListener(
        document.body,
        ['mousedown', 'touchstart'],
        () => setActiveSearchClass(false)
    );
}

export default SearchBar;
