var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Adminblock_1 = new ol.format.GeoJSON();
var features_Adminblock_1 = format_Adminblock_1.readFeatures(json_Adminblock_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adminblock_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adminblock_1.addFeatures(features_Adminblock_1);
var lyr_Adminblock_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adminblock_1, 
                style: style_Adminblock_1,
                popuplayertitle: "Admin block",
                interactive: true,
                title: '<img src="styles/legend/Adminblock_1.png" /> Admin block'
            });
var format_SRBlock_2 = new ol.format.GeoJSON();
var features_SRBlock_2 = format_SRBlock_2.readFeatures(json_SRBlock_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SRBlock_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SRBlock_2.addFeatures(features_SRBlock_2);
var lyr_SRBlock_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SRBlock_2, 
                style: style_SRBlock_2,
                popuplayertitle: "SR Block",
                interactive: true,
                title: '<img src="styles/legend/SRBlock_2.png" /> SR Block'
            });
var format_XLabs_3 = new ol.format.GeoJSON();
var features_XLabs_3 = format_XLabs_3.readFeatures(json_XLabs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XLabs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XLabs_3.addFeatures(features_XLabs_3);
var lyr_XLabs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XLabs_3, 
                style: style_XLabs_3,
                popuplayertitle: "X Labs",
                interactive: true,
                title: '<img src="styles/legend/XLabs_3.png" /> X Labs'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Adminblock_1.setVisible(true);lyr_SRBlock_2.setVisible(true);lyr_XLabs_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Adminblock_1,lyr_SRBlock_2,lyr_XLabs_3];
lyr_Adminblock_1.set('fieldAliases', {'id': 'id', 'Population': 'Population', });
lyr_SRBlock_2.set('fieldAliases', {'id': 'id', 'Population': 'Population', });
lyr_XLabs_3.set('fieldAliases', {'id': 'id', 'Population': 'Population', });
lyr_Adminblock_1.set('fieldImages', {'id': '', 'Population': '', });
lyr_SRBlock_2.set('fieldImages', {'id': '', 'Population': '', });
lyr_XLabs_3.set('fieldImages', {'id': '', 'Population': '', });
lyr_Adminblock_1.set('fieldLabels', {'id': 'no label', 'Population': 'no label', });
lyr_SRBlock_2.set('fieldLabels', {'id': 'no label', 'Population': 'no label', });
lyr_XLabs_3.set('fieldLabels', {'id': 'header label - visible with data', 'Population': 'no label', });
lyr_XLabs_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});