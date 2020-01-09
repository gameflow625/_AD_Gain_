mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FtZWZsb3ciLCJhIjoiY2szcDRlaGdsMDE1djNpcXFzODM0cTZjYiJ9.1VkdY0frhKj30BMn_UM7PQ';

var t_BB = '';


var map = new mapboxgl.Map({
container: 'map'
});

var geocoder = new MapboxGeocoder({
container: 'geocoder',
accessToken: mapboxgl.accessToken,
types: 'place',
limit: 3,

mapboxgl: mapboxgl,
placeholder: 'Type your Address...',

});


var geocoder_via = new MapboxGeocoder({
container: 'geocoderAA',
accessToken: mapboxgl.accessToken,
bbox:null,
limit: 3,

countries:'it',

mapboxgl: mapboxgl,
placeholder: 'Type your Address...',

});


var outputPROV = document.getElementById('id_prov');
var outputSTA = document.getElementById('id_state');

//var outputPROV_bri = parent.document.getElementById('my_div_pro');
//var outputSTA_bri = parent.document.getElementById('my_div_sta');
var outputLOC_bri = parent.document.getElementById('id_City');
var outputADDR_bri = parent.document.getElementById('id_addr');
var outputBBOX_bri = parent.document.getElementById('id_cap');

geocoder.on('result', function(result){

var obj = JSON.stringify(result);

var t_BB_appo = JSON.parse(obj).result.bbox;

t_BB = JSON.stringify(t_BB_appo);
var matche_Prov = JSON.parse(obj).result.context[0].short_code;
outputPROV.value=  matche_Prov.split('-')[1];
outputSTA.value =JSON.parse(obj).result.context[1]['text'];
outputLOC_bri.innerHTML =JSON.parse(obj).result.text;
return t_BB

});

//geocoder_via.on('keyUp',c2_callFunction('esempiooo'));
geocoder_via.on('loading',function(){

var Parse = JSON.parse(t_BB);

geocoder_via.options.bbox = Parse;
});

geocoder_via.on('result',function(result){

var obj = JSON.stringify(result);

outputADDR_bri.innerHTML =JSON.parse(obj).result.text;

var cap = JSON.parse(obj).result.context[0].text

outputBBOX_bri.value = cap;
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

document.getElementById('geocoder_addr').appendChild(geocoder_via.onAdd(map));

