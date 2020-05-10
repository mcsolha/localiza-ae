import {
    addMultipleEventsListener, isEmptyString
} from "./helpers";
import SearchInput from "./SearchInput";


function SearchBar({ localizaService, onPredictionChange = () => {} }) {
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

                onPredictionChange(response);
            } catch (err) {
                console.error(err);
            }
        },
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
