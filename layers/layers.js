var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Rumahh_1 = new ol.format.GeoJSON();
var features_Rumahh_1 = format_Rumahh_1.readFeatures(json_Rumahh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumahh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumahh_1.addFeatures(features_Rumahh_1);
var lyr_Rumahh_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumahh_1, 
                style: style_Rumahh_1,
                popuplayertitle: 'Rumahh',
                interactive: true,
                title: '<img src="styles/legend/Rumahh_1.png" /> Rumahh'
            });
var format_Fasilitass_2 = new ol.format.GeoJSON();
var features_Fasilitass_2 = format_Fasilitass_2.readFeatures(json_Fasilitass_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitass_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitass_2.addFeatures(features_Fasilitass_2);
var lyr_Fasilitass_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitass_2, 
                style: style_Fasilitass_2,
                popuplayertitle: 'Fasilitass',
                interactive: true,
                title: '<img src="styles/legend/Fasilitass_2.png" /> Fasilitass'
            });
var format_JalanPerumahan_3 = new ol.format.GeoJSON();
var features_JalanPerumahan_3 = format_JalanPerumahan_3.readFeatures(json_JalanPerumahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanPerumahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanPerumahan_3.addFeatures(features_JalanPerumahan_3);
var lyr_JalanPerumahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanPerumahan_3, 
                style: style_JalanPerumahan_3,
                popuplayertitle: 'Jalan Perumahan',
                interactive: true,
                title: '<img src="styles/legend/JalanPerumahan_3.png" /> Jalan Perumahan'
            });
var format_JalanUtamaaa_4 = new ol.format.GeoJSON();
var features_JalanUtamaaa_4 = format_JalanUtamaaa_4.readFeatures(json_JalanUtamaaa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanUtamaaa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanUtamaaa_4.addFeatures(features_JalanUtamaaa_4);
var lyr_JalanUtamaaa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanUtamaaa_4, 
                style: style_JalanUtamaaa_4,
                popuplayertitle: 'Jalan Utamaaa',
                interactive: true,
                title: '<img src="styles/legend/JalanUtamaaa_4.png" /> Jalan Utamaaa'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Rumahh_1.setVisible(true);lyr_Fasilitass_2.setVisible(true);lyr_JalanPerumahan_3.setVisible(true);lyr_JalanUtamaaa_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Rumahh_1,lyr_Fasilitass_2,lyr_JalanPerumahan_3,lyr_JalanUtamaaa_4];
lyr_Rumahh_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'Type': 'Type', 'Status': 'Status', });
lyr_Fasilitass_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Fungsi': 'Fungsi', });
lyr_JalanPerumahan_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_JalanUtamaaa_4.set('fieldAliases', {'id': 'id', });
lyr_Rumahh_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'Type': 'TextEdit', 'Status': 'TextEdit', });
lyr_Fasilitass_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Fungsi': 'TextEdit', });
lyr_JalanPerumahan_3.set('fieldImages', {'id': 'TextEdit', 'Nama': '', });
lyr_JalanUtamaaa_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Rumahh_1.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Type': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_Fasilitass_2.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Fungsi': 'inline label - always visible', });
lyr_JalanPerumahan_3.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', });
lyr_JalanUtamaaa_4.set('fieldLabels', {'id': 'hidden field', });
lyr_JalanUtamaaa_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});