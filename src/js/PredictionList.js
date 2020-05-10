import Prediction from './Prediction';

function PredictionList({ state, localizaService }) {
    let ref = document.getElementById('prediction-list');

    function onPredictionClick(prediction) {
        console.log(prediction);
    }

    function renderPredictions() {
        let { predictions } = state;

        ref.innerHTML = '';

        predictions.forEach(
            prediction => Prediction({
                prediction,
                container: ref,
                onPredictionClick,
            })
        );
    }

    state.observe('predictions', renderPredictions);
}

export default PredictionList;
