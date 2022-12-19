var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Transportasi_Kecamatan_Kaligesing_LN_1 = new ol.format.GeoJSON();
var features_Transportasi_Kecamatan_Kaligesing_LN_1 = format_Transportasi_Kecamatan_Kaligesing_LN_1.readFeatures(json_Transportasi_Kecamatan_Kaligesing_LN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transportasi_Kecamatan_Kaligesing_LN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transportasi_Kecamatan_Kaligesing_LN_1.addFeatures(features_Transportasi_Kecamatan_Kaligesing_LN_1);
var lyr_Transportasi_Kecamatan_Kaligesing_LN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transportasi_Kecamatan_Kaligesing_LN_1, 
                style: style_Transportasi_Kecamatan_Kaligesing_LN_1,
                interactive: true,
                title: '<img src="styles/legend/Transportasi_Kecamatan_Kaligesing_LN_1.png" /> Transportasi_Kecamatan_Kaligesing_LN'
            });
var format_Ibu_Kota_Kecamatan_Kaligesing_PT_2 = new ol.format.GeoJSON();
var features_Ibu_Kota_Kecamatan_Kaligesing_PT_2 = format_Ibu_Kota_Kecamatan_Kaligesing_PT_2.readFeatures(json_Ibu_Kota_Kecamatan_Kaligesing_PT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_2.addFeatures(features_Ibu_Kota_Kecamatan_Kaligesing_PT_2);
var lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_2, 
                style: style_Ibu_Kota_Kecamatan_Kaligesing_PT_2,
                interactive: true,
                title: '<img src="styles/legend/Ibu_Kota_Kecamatan_Kaligesing_PT_2.png" /> Ibu_Kota_Kecamatan_Kaligesing_PT'
            });
var format_Batas_Administrasi_Kecamatan_Kaligesing_AR_3 = new ol.format.GeoJSON();
var features_Batas_Administrasi_Kecamatan_Kaligesing_AR_3 = format_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.readFeatures(json_Batas_Administrasi_Kecamatan_Kaligesing_AR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.addFeatures(features_Batas_Administrasi_Kecamatan_Kaligesing_AR_3);
var lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_3, 
                style: style_Batas_Administrasi_Kecamatan_Kaligesing_AR_3,
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_Kecamatan_Kaligesing_AR_3.png" /> Batas_Administrasi_Kecamatan_Kaligesing_AR'
            });
var format_building_4 = new ol.format.GeoJSON();
var features_building_4 = format_building_4.readFeatures(json_building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_4.addFeatures(features_building_4);
var lyr_building_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_4, 
                style: style_building_4,
                interactive: true,
                title: '<img src="styles/legend/building_4.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Transportasi_Kecamatan_Kaligesing_LN_1.setVisible(true);lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_2.setVisible(true);lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.setVisible(true);lyr_building_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Transportasi_Kecamatan_Kaligesing_LN_1,lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_2,lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3,lyr_building_4];
lyr_Transportasi_Kecamatan_Kaligesing_LN_1.set('fieldAliases', {'Lebar': 'Lebar', 'Fungsi_Jln': 'Fungsi_Jln', 'Nama_Jln_1': 'Nama_Jln_1', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_2.set('fieldAliases', {'Klasifikas': 'Klasifikas', 'Jenis_Utam': 'Jenis_Utam', 'Jenis': 'Jenis', 'Kegiatan_O': 'Kegiatan_O', 'Nama_Objek': 'Nama_Objek', 'Pemerintah': 'Pemerintah', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.set('fieldAliases', {'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'LAB_DESA': 'LAB_DESA', });
lyr_building_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'layer': 'layer', 'amenity': 'amenity', 'religion': 'religion', 'name': 'name', 'description': 'description', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_1.set('fieldImages', {'Lebar': '', 'Fungsi_Jln': '', 'Nama_Jln_1': '', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_2.set('fieldImages', {'Klasifikas': '', 'Jenis_Utam': '', 'Jenis': '', 'Kegiatan_O': '', 'Nama_Objek': '', 'Pemerintah': '', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.set('fieldImages', {'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'LAB_DESA': 'TextEdit', });
lyr_building_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'layer': '', 'amenity': '', 'religion': '', 'name': '', 'description': '', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_1.set('fieldLabels', {'Lebar': 'no label', 'Fungsi_Jln': 'no label', 'Nama_Jln_1': 'no label', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_2.set('fieldLabels', {'Klasifikas': 'no label', 'Jenis_Utam': 'no label', 'Jenis': 'no label', 'Kegiatan_O': 'no label', 'Nama_Objek': 'no label', 'Pemerintah': 'no label', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.set('fieldLabels', {'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'LAB_DESA': 'no label', });
lyr_building_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'layer': 'no label', 'amenity': 'no label', 'religion': 'no label', 'name': 'no label', 'description': 'no label', });
lyr_building_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});