/* eslint-disable max-len */
/* eslint-disable no-template-curly-in-string */
export default {
    schema: {
        title: 'Openstreet Map Configuration',
        type: 'object',
        properties: {
            mapProvider: {
                title: 'Map provider',
                type: 'string',
                default: 'OpenStreetMap.Mapnik'
            },
            defaultZoomLevel: {
                title: 'Default map zoom level (1 - 20)',
                type: 'number',
                default: 5
            },
            fitMapBounds: {
                title: 'Fit map bounds to cover all markers',
                type: 'boolean',
                default: true
            },
            latKeyName: {
                title: 'Latitude key name',
                type: 'string',
                default: 'latitude'
            },
            lngKeyName: {
                title: 'Longitude key name',
                type: 'string',
                default: 'longitude'
            },
            showLabel: {
                title: 'Show label',
                type: 'boolean',
                default: true
            },
            label: {
                title:
                    "Label (pattern examples: '${entityName}', '${entityName}: (Text ${keyName} units.)' )",
                type: 'string',
                default: '${entityName}'
            },
            useLabelFunction: {
                title: 'Use label function',
                type: 'boolean',
                default: false
            },
            labelFunction: {
                title: 'Label function: f(data, dsData, dsIndex)',
                type: 'string'
            },
            showTooltip: {
                title: 'Show tooltip',
                type: 'boolean',
                default: true
            },
            tooltipColor: {
                title: 'Tooltip background color',
                type: 'string',
                default: '#fff'
            },
            tooltipFontColor: {
                title: 'Tooltip font color',
                type: 'string',
                default: '#000'
            },
            tooltipOpacity: {
                title: 'Tooltip opacity (0-1)',
                type: 'number',
                default: 1
            },
            tooltipPattern: {
                title:
                    "Tooltip (for ex. 'Text ${keyName} units.' or <link-act name='my-action'>Link text</link-act>')",
                type: 'string',
                default:
                    '<b>${entityName}</b><br/><br/><b>Latitude:</b> ${latitude:7}<br/><b>Longitude:</b> ${longitude:7}<br/><b>End Time:</b> ${maxTime}<br/><b>Start Time:</b> ${minTime}'
            },
            useTooltipFunction: {
                title: 'Use tooltip function',
                type: 'boolean',
                default: false
            },
            tooltipFunction: {
                title: 'Tooltip function: f(data, dsData, dsIndex)',
                type: 'string'
            },
            color: {
                title: 'Stroke color',
                type: 'string'
            },
            strokeWeight: {
                title: 'Stroke weight',
                type: 'number',
                default: 2
            },
            strokeOpacity: {
                title: 'Stroke opacity',
                type: 'number',
                default: 1
            },
            useColorFunction: {
                title: 'Use stroke color function',
                type: 'boolean',
                default: false
            },
            colorFunction: {
                title: 'Stroke color function: f(data, dsData, dsIndex)',
                type: 'string'
            },
            showPoints: {
                title: 'Show points',
                type: 'boolean',
                default: false
            },
            pointColor: {
                title: 'Point color',
                type: 'string'
            },
            pointSize: {
                title: 'Point size (px)',
                type: 'number',
                default: 10
            },
            defaultMarkerColor: {
                title: 'color for default marker',
                type: 'string'
            },
            markerImage: {
                title: 'Custom marker image',
                type: 'string'
            },
            markerImageSize: {
                title: 'Custom marker image size (px)',
                type: 'number',
                default: 34
            },
            rotationAngle: {
                title: 'Set additional rotation angle for marker (deg)',
                type: 'number',
                default: 180
            },
            useMarkerImageFunction: {
                title: 'Use marker image function',
                type: 'boolean',
                default: false
            },
            markerImageFunction: {
                title:
                    'Marker image function: f(data, images, dsData, dsIndex)',
                type: 'string'
            },
            markerImages: {
                title: 'Marker images',
                type: 'array',
                items: {
                    title: 'Marker image',
                    type: 'string'
                }
            }
        },
        required: []
    },
    form: [
        {
            key: 'mapProvider',
            type: 'rc-select',
            multiple: false,
            items: [
                {
                    value: 'OpenStreetMap.Mapnik',
                    label: 'OpenStreetMap.Mapnik (Default)'
                },
                {
                    value: 'OpenStreetMap.BlackAndWhite',
                    label: 'OpenStreetMap.BlackAndWhite'
                },
                {
                    value: 'OpenStreetMap.HOT',
                    label: 'OpenStreetMap.HOT'
                },
                {
                    value: 'Esri.WorldStreetMap',
                    label: 'Esri.WorldStreetMap'
                },
                {
                    value: 'Esri.WorldTopoMap',
                    label: 'Esri.WorldTopoMap'
                },
                {
                    value: 'CartoDB.Positron',
                    label: 'CartoDB.Positron'
                },
                {
                    value: 'CartoDB.DarkMatter',
                    label: 'CartoDB.DarkMatter'
                }
            ]
        },
        'defaultZoomLevel',
        'fitMapBounds',
        'latKeyName',
        'lngKeyName',
        'showLabel',
        'label',
        'useLabelFunction',
        {
            key: 'labelFunction',
            type: 'javascript'
        },
        'showTooltip',
        {
            key: 'tooltipColor',
            type: 'color'
        },
        {
            key: 'tooltipFontColor',
            type: 'color'
        },
        'tooltipOpacity',
        {
            key: 'tooltipPattern',
            type: 'textarea'
        },
        'useTooltipFunction',
        {
            key: 'tooltipFunction',
            type: 'javascript'
        },
        {
            key: 'color',
            type: 'color'
        },
        'useColorFunction',
        {
            key: 'colorFunction',
            type: 'javascript'
        },
        'strokeWeight',
        'strokeOpacity',
        'showPoints',
        {
            key: 'pointColor',
            type: 'color'
        },
        'pointSize',
        {
            key: 'defaultMarkerColor',
            type: 'color'
        },
        {
            key: 'markerImage',
            type: 'image'
        },
        'markerImageSize',
        'rotationAngle',
        'useMarkerImageFunction',
        {
            key: 'markerImageFunction',
            type: 'javascript'
        },
        {
            key: 'markerImages',
            items: [
                {
                    key: 'markerImages[]',
                    type: 'image'
                }
            ]
        }
    ]
};
