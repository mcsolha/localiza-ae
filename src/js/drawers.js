/**
 * Creates a new marker that can be drawn on the map
 * @param {string} title Marker title
 * @param {{lat: number, lng: number}} position Marker position
 */
export function createMarker(title, position, onClick) {
    let marker = new google.maps.Marker({
        position,
        title,
    });

    if (onClick) {
        marker.setClickable(true);

        marker.addListener('click', onClick);
    }

    return marker;
}

/**
 * 
 * @param {string} content Content that will be displayed
 * @param {*} map Map that will contain the info window
 * @param {*} marker Associated marker
 */
export function createInfoWindow(content, map, marker) {
    let infoWindow = new google.maps.InfoWindow({
        content,
    });

    return {
        infoWindow,
        open: () => infoWindow.open(map, marker)
    }
}
