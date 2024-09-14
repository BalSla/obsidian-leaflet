declare module '@tmcw/togeojson' {
    export function gpx(doc: Document): GeoJSON.FeatureCollection;
    export function kml(doc: Document): GeoJSON.FeatureCollection;
}