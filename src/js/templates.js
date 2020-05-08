export const MAP_MARKER_ICON = '<i class="fas fa-map-marker-alt icon"></i>';

export const SUBWAY_ICON = '<i class="fas fa-subway icon"></i>';

export const PREDICT_ITEM =
    `<li class="localiza-app__predict" alt="%DESCRIPTION%">
        <a>%ICON%<span>%DESCRIPTION%</span></a>
    </li>`;

export const PREDICT_NOT_FOUND = 
    `<li class="localiza-app__predict localiza-app__predict--not-found">
        <a><span>Nenhum resultado encontrado!</span></a>
    </li>`;

export function generatePredictItemHTML(icon = '', description = '') {
    return PREDICT_ITEM
        .replace(/\%DESCRIPTION\%/g, description)
        .replace('%ICON%', icon);
}
