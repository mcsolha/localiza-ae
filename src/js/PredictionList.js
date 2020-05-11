import Prediction from './Prediction';

function PredictionList({ state, localizaService }) {
    let ref = document.getElementById('prediction-list');

    function renderPredictions() {
        let { predictions } = state;

        ref.innerHTML = '';

        predictions.forEach(
            prediction => Prediction({
                prediction,
                container: ref,
                localizaService,
            })
        );
    }

    state.observe('predictions', renderPredictions);
}

export default PredictionList;
