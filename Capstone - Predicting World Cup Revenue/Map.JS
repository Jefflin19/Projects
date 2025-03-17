//JS file for putting the location of the stadiums using coordinates
var map = L.map('map', {
  maxBounds: [
    [-85, -180], // had a problem with leaflet that if you zoom it, theres multiple worlds goign left to right, so this makes it so its only one world map.m
    [85, 180]   
  ],
  maxBoundsViscosity: 1.0
}).setView([20.0, 0.0], 2);

//no wrapping
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  noWrap: true
}).addTo(map);
function addStadiumMarkers(stadiumData, groupName) {
  var markerGroup = L.layerGroup(); // Create a group for the stadiums of a particular World Cup year
  stadiumData.forEach(function(stadium) {
      var marker = L.marker(stadium.coords).addTo(markerGroup);
     
      
      var popupContent = `
          <div style="text-align:center;">
              <h3>${stadium.name}</h3>
              <img src="${stadium.imageUrl}" alt="${stadium.name}" style="width:200px;height:150px;">
              <p><strong>Capacity:</strong> ${stadium.capacity}</p>
          </div>`;
     
      
      marker.bindPopup(popupContent);
  });


  // Add the group to the map
  map.addLayer(markerGroup);
}

// 2002 World Cup Stadiums (South Korea & Japan)
var WC2002Seoul = [ 
  { name: "Seoul World Cup Stadium", coords: [37.5683, 126.8977], capacity: '68,476', imageUrl: 'stadiums/Stadium1-seoul.webp' } ];
var WC2002Busan = [
  { name: "Busan Asiad Main Stadium", coords: [35.1905, 129.0587], capacity: '53,864', imageUrl: 'stadiums/stadium2-busan.jpg' } ];
var WC2002KoreaStadium3 = [{ name: "Daegu Stadium", coords: [35.8295, 128.6905], capacity: '65,754', imageUrl: 'stadiums/stadium3-daegu.jpg'}];
var WC2002KoreaStadium4 = [{ name: "Incheon Munhak Stadium", coords: [37.4353, 126.6839], capacity: '52,179', imageUrl: 'stadiums/stadium4-incheon.jpg' }];
var WC2002KoreaStadium5 = [{ name: "Jeonju World Cup Stadium", coords: [35.8681, 127.0658], capacity: '42,477', imageUrl: 'stadiums/stadium5-jeonju.webp' }];
var WC2002KoreaStadium6 = [{ name: "Ulsan Munsu Football Stadium", coords: [35.5394, 129.3374], capacity: '43,550', imageUrl: 'stadiums/stadium6-ulsan.webp' }];
var WC2002KoreaStadium7 = [{ name: "Gwangju World Cup Stadium", coords: [35.1597, 126.8787], capacity: '44,118', imageUrl: 'stadiums/stadium7-gwangju.jpg' }];
var WC2002KoreaStadium8 = [{ name: "Suwon World Cup Stadium", coords: [37.2861, 127.0094], capacity: '43,288', imageUrl: 'stadiums/stadium8-suwon.jpg' }];
var WC2002KoreaStadium9 = [{ name: "Daejeon World Cup Stadium", coords: [36.3651, 127.3146], capacity: '40,535', imageUrl: 'stadiums/stadium9-daejeon.jpg' }];
var WC2002KoreaStadium10 =[{ name: "Seogwipo World Cup Stadium", coords: [33.2462, 126.5111], capacity: '42,256', imageUrl: 'stadiums/stadium10-Seongwipo.webp'}];

//japan
var WC2002JapanStadium1 = [{ name: "International Stadium Yokohama", coords: [35.5100, 139.6061], capacity: '72,327', imageUrl: 'stadiums/Japan1.jpeg' }];
var WC2002JapanStadium2 = [{ name: "Sapporo Dome", coords: [43.0147, 141.4094], capacity: '53,835', imageUrl: 'stadiums/japan2-sapparo.jpeg' }];
var WC2002JapanStadium3 = [{ name: "Kashima Soccer Stadium", coords: [35.9764, 140.6408], capacity: '42,000', imageUrl: 'stadiums/japan3-kashima.jpeg' }];
var WC2002JapanStadium4 = [{ name: "Kobe Wing Stadium", coords: [34.6794, 135.1749], capacity: '42,000', imageUrl: 'stadiums/japan4-kobe.jpg' }];
var WC2002JapanStadium5 = [{ name: "Shizuoka Stadium Ecopa", coords: [34.7161, 137.9222], capacity: '50,889', imageUrl: 'stadiums/japan5-shizuoka.jpg' }];
var WC2002JapanStadium6 = [{ name: "Oita Bank Dome", coords: [33.2009, 131.6586], capacity: '43,000', imageUrl: 'stadiums/japan6-oita.jpeg' }];
var WC2002JapanStadium7 = [{ name: "Niigata Stadium Big Swan", coords: [37.8821, 139.0525], capacity: '42,300', imageUrl: 'stadiums/japan7-niigata.jpg' }];
var WC2002JapanStadium8 = [{ name: "Osaka Nagai Stadium", coords: [34.6117, 135.5194], capacity: '50,000', imageUrl: 'stadiums/japan8-Osaka.jpeg' }];
var WC2002JapanStadium9 = [{ name: "Miyagi Stadium", coords: [38.3196, 140.9765], capacity: '49,133', imageUrl: 'stadiums/japan9-miyagi.jpg' }];
var WC2002JapanStadium10 =[{ name: "Saitama Stadium 2002", coords: [35.9039, 139.7140], capacity: '63,700', imageUrl: 'stadiums/japan10-saitama.jpg' }];
  



// 2006 World Cup Stadiums (Germany)
var Germanstadium1 = [{ name: "Olympiastadion Berlin", coords: [52.5145, 13.2397], capacity: '74,176', imageUrl: 'stadiums/Germany1-Berlin.jpg' }];
var Germanstadium2 = [{ name: "Allianz Arena", coords: [48.2188, 11.6247], capacity: '66,016', imageUrl: 'stadiums/germany2-bayern.jpeg' }];
var Germanstadium3 = [{ name: "Westfalenstadion", coords: [51.4921, 7.4511], capacity: '67,000', imageUrl: 'stadiums/germany3-dortmund.jpg' }];
var Germanstadium4 = [{ name: "Volksparkstadion", coords: [53.5877, 9.8987], capacity: '51,055', imageUrl: 'stadiums/germany4-volkspark.jpeg' }];
var Germanstadium5 = [{ name: "Commerzbank-Arena", coords: [50.0685, 8.6458], capacity: '48,132', imageUrl: 'stadiums/germany5-frankfurt.jpg' }];
var Germanstadium6 = [{ name: "RheinEnergieStadion", coords: [50.9333, 6.8750], capacity: '46,134', imageUrl: 'stadiums/germany6-rheine.jpg' }];
var Germanstadium7 = [{ name: "Gottlieb-Daimler-Stadion", coords: [48.7924, 9.2327], capacity: '54,266', imageUrl: 'stadiums/germany7-gottlieb.jpg' }];
var Germanstadium8 = [{ name: "AWD-Arena", coords: [52.3619, 9.7320], capacity: '44,652', imageUrl: 'stadiums/germany8-awd.jpg' }];
var Germanstadium9 = [{ name: "Zentralstadion", coords: [51.3459, 12.3481], capacity: '44,199', imageUrl: 'stadiums/germany9-zentralsdion.jpg' }];
var Germanstadium10 = [{ name: "Fritz-Walter-Stadion", coords: [49.4372, 7.7687], capacity: '43,450', imageUrl: 'stadiums/germany10-fritz.jpg' }];


// 2010 World Cup Stadiums (South Africa)

var SAStadium1 =[{ name: "Soccer City", coords: [-26.2348, 27.9821] , capacity: '88,460', imageUrl: 'stadiums/SA1-soccer city.jpeg'}];
var SAStadium2  =[{ name: "Cape Town Stadium", coords: [-33.9036, 18.4232] , capacity: '64,100', imageUrl: 'stadiums/sa2-capetown.jpg'}];
var SAStadium3  =[{ name: "Moses Mabhida Stadium", coords: [-29.8297, 31.0296] , capacity: '62,760', imageUrl: 'stadiums/sa3-moses.jpg'}];
var SAStadium4  =[{ name: "Ellis Park Stadium", coords: [-26.1979, 28.0600] , capacity: '55,686', imageUrl: 'stadiums/sa4-ellis.jpg'}];
var SAStadium5  =[{ name: "Loftus Versfeld Stadium", coords: [-25.7540, 28.2225] , capacity: '42,858', imageUrl: 'stadiums/sa5-lotus.jpg'}];
var SAStadium6  =[{ name: "Mbombela Stadium", coords: [-25.4755, 30.9708], capacity: '40,929', imageUrl: 'stadiums/sa6-mbombela.webp'}]; //this one is sick, a zebra pattern
var SAStadium7  =[{ name: "Nelson Mandela Bay Stadium", coords: [-33.9379, 25.5992] , capacity: '42,486', imageUrl: 'stadiums/sa7-mandela.jpg'}];
var SAStadium8  =[{ name: "Peter Mokaba Stadium", coords: [-23.9261, 29.4681] , capacity: '41,733', imageUrl: 'stadiums/sa8-peter.jpg'}];
var SAStadium9  =[{ name: "Royal Bafokeng Stadium", coords: [-25.5787, 27.1609] , capacity: '38,646', imageUrl: 'stadiums/sa9-royal.jpg'}];
var SAStadium10  =[{ name: "Free State Stadium", coords: [-29.1173, 26.2088], capacity: '40,911', imageUrl: 'stadiums/sa10-free state.jpg'}];


// 2014 World Cup Stadiums (Brazil)
var BrazilStadium1 = [{ name: "Maracanã", coords: [-22.9122, -43.2302], capacity: '74,738', imageUrl: 'stadiums/brazil1-maracana.jpg' }];
var BrazilStadium2 = [{ name: "Estádio Mineirão", coords: [-19.8657, -43.9710], capacity: '58,170', imageUrl: 'stadiums/brazil2-mineirao.jpg' }];
var BrazilStadium3 = [{ name: "Arena de São Paulo", coords: [-23.5452, -46.4747], capacity: '62,601', imageUrl: 'stadiums/brazil3-saopaolo.webp' }];
var BrazilStadium4 = [{ name: "Arena da Baixada", coords: [-25.4480, -49.2766], capacity: '39,631', imageUrl: 'stadiums/brazil4-baixada.webp' }];
var BrazilStadium5 = [{ name: "Estádio Nacional", coords: [-15.7836, -47.8990], capacity: '69,349', imageUrl: 'stadiums/brazil5-national.jpg' }];
var BrazilStadium6 = [{ name: "Arena Fonte Nova", coords: [-12.9787, -38.5047], capacity: '51,900', imageUrl: 'stadiums/brazil6-ontenova.jpg' }];
var BrazilStadium7 = [{ name: "Arena Pernambuco", coords: [-8.0355, -34.9441], capacity: '42,610', imageUrl: 'stadiums/brazil7-pernambuco.jpg' }];
var BrazilStadium8 = [{ name: "Arena da Amazônia", coords: [-3.0839, -60.0284], capacity: '40,549', imageUrl: 'stadiums/brazil8-amazon.jpg' }];
var BrazilStadium9 = [{name: "Arena Pantanal", coords: [-15.6018, -56.0979], capacity: '41,112', imageUrl: 'stadiums/brazil9-pantanal.jpeg' }];
var BrazilStadium10 =[{ name: "Estádio Beira-Rio", coords: [-30.0657, -51.2350], capacity: '43,394', imageUrl: 'stadiums/brazil10-beirario.jpg' }];
var BrazilStadium11 =[{ name: "Arena das Dunas", coords: [-5.8251, -35.2065], capacity: '39,971', imageUrl: 'stadiums/brazil11-dunas.jpeg' }];
var BrazilStadium12 = [{ name: "Estádio Castelão", coords: [-3.7941, -38.5124], capacity: '60,342', imageUrl: 'stadiums/brazil12-castelao.jpg' }];


// 2018 World Cup Stadiums (Russia)
var Russiastadium1 = [{ name: "Luzhniki Stadium", coords: [55.7158, 37.5535], capacity: '78,011', imageUrl: 'stadiums/russia1-luzhniki.jpg' }];
var Russiastadium2 = [{ name: "Saint Petersburg Stadium", coords: [59.9727, 30.2210], capacity: '64,468', imageUrl: 'stadiums/russia2-st petersburg.jpg' }];
var Russiastadium3 = [{ name: "Fisht Olympic Stadium", coords: [43.4020, 39.9559], capacity: '44,287', imageUrl: 'stadiums/russia3-fisht.jpg' }];
var Russiastadium4 = [{ name: "Ekaterinburg Arena", coords: [56.8326, 60.5736], capacity: '33,061', imageUrl: 'stadiums/russia4-ekaterinburg.jpg' }];
var Russiastadium5 = [{ name: "Kazan Arena", coords: [55.8208, 49.1603], capacity: '42,873', imageUrl: 'stadiums/russia5-kazan.jpg' }];
var Russiastadium6 = [{ name: "Nizhny Novgorod Stadium", coords: [56.3373, 43.9633], capacity: '43,319', imageUrl: 'stadiums/russia6-nizhny.jpg' }];
var Russiastadium7 = [{ name: "Samara Arena", coords: [53.2780, 50.2370], capacity: '41,970', imageUrl: 'stadiums/russia7-samara.jpg' }];
var Russiastadium8 = [{ name: "Volgograd Arena", coords: [48.7345, 44.5481], capacity: '43,713', imageUrl: 'stadiums/russia8-volgograd.jpg' }];
var Russiastadium9 = [{ name: "Mordovia Arena", coords: [54.1810, 45.2039], capacity: '41,685', imageUrl: 'stadiums/russia9-mordovia.jpg' }];
var Russiastadium10 =[{ name: "Rostov Arena", coords: [47.2096, 39.7385], capacity: '43,472', imageUrl: 'stadiums/russia10-rostov.jpg' }];


// 2022 World Cup Stadiums (Qatar)
var QatarStadium1 = [{ name: "Lusail Stadium", coords: [25.4209, 51.4908], capacity: '88,966', imageUrl: 'stadiums/qatar1-lusail.jpeg' }];
var QatarStadium2 = [{ name: "Al Bayt Stadium", coords: [25.6522, 51.4870], capacity: '68,895', imageUrl: 'stadiums/qatar2-al bayt.jpg' }];
var QatarStadium3 = [{ name: "Al Janoub Stadium", coords: [25.1434, 51.5653], capacity: '44,325', imageUrl: 'stadiums/qatar3-janoub.webp' }];
var QatarStadium4 = [{ name: "Education City Stadium", coords: [25.3106, 51.4245], capacity: '44,667', imageUrl: 'stadiums/qatar4-education.jpg' }];
var QatarStadium5 = [{ name: "Ahmad Bin Ali Stadium", coords: [25.3251, 51.3410], capacity: '45,032', imageUrl: 'stadiums/qatar5-ahmad.jpg' }];
var QatarStadium6 = [{ name: "Khalifa International Stadium", coords: [25.2637, 51.4484], capacity: '45,857', imageUrl: 'stadiums/qatar6-khalifa.jpg' }];
var QatarStadium7 = [{ name: "Al Thumama Stadium", coords: [25.2399, 51.5312], capacity: '44,400', imageUrl: 'stadiums/qatar7- thumma.jpg' }];
var QatarStadium8 = [{ name: "Stadium 974", coords: [25.2858, 51.5664], capacity: '44,089', imageUrl: 'stadiums/qatar8-974.webp' }];

//26
var USAStadium1 = [{ name: "MetLife Stadium", coords: [40.8135, -74.0745], capacity: '87,157', imageUrl: 'stadiums/Usa1-metlife.jpeg' }];
var USAStadium2 = [{ name: "AT&T Stadium", coords: [32.7473, -97.0945], capacity: '92,967', imageUrl: 'stadiums/usa2-att.jpg' }];
var USAStadium3 = [{ name: "SoFi Stadium", coords: [33.9535, -118.3392], capacity: '70,240', imageUrl: 'stadiums/usa3-sofi.jpg' }];
var USAStadium4 = [{ name: "Hard Rock Stadium", coords: [25.9580, -80.2389], capacity: '67,518', imageUrl: 'stadiums/usa4-hard rock.webp' }];
var USAStadium5 = [{ name: "Mercedes-Benz Stadium", coords: [33.7555, -84.4008], capacity: '75,000', imageUrl: 'stadiums/usa5-merceds.jpeg' }];
var USAStadium6 = [{ name: "Levi's Stadium", coords: [37.4030, -121.9704], capacity: '70,909', imageUrl: 'stadiums/usa6-levis.jpg' }];
var USAStadium7 = [{ name: "Lumen Field", coords: [47.5952, -122.3316], capacity: '69,000', imageUrl: 'stadiums/usa7-lumen.webp' }];
var USAStadium8 = [{ name: "Gillette Stadium", coords: [42.0909, -71.2643], capacity: '70,000', imageUrl: 'stadiums/usa8-gilletete.jpg' }];
var USAStadium9 = [{ name: "Lincoln Financial Field", coords: [39.9014, -75.1675], capacity: '69,328', imageUrl: 'stadiums/usa9-lincoln.jpg' }];
var USAStadium10 = [{ name: "NRG Stadium", coords: [29.6847, -95.4107], capacity: '72,220', imageUrl: 'stadiums/usa10-nrg.jpg' }];
var USAStadium11 = [{ name: "Arrowhead Stadium", coords: [39.0490, -94.4840], capacity: '76,640', imageUrl: 'stadiums/usa11-arrowhead.jpg' }];

var CanadaStadium1 = [{ name: "BMO Field", coords: [43.6328, -79.4181], capacity: '45,500', imageUrl: 'stadiums/canada1.jpg' }];
var CanadaStadium2 = [{ name: "BC Place", coords: [49.2768, -123.1116], capacity: '54,500', imageUrl: 'stadiums/canada2.jpg' }];

var MexicoStadium1 = [{ name: "Estadio Azteca", coords: [19.3029, -99.1505], capacity: '87,523', imageUrl: 'stadiums/mexico1.jpg' }];
var MexicoStadium2 = [{ name: "Estadio BBVA", coords: [25.6691, -100.2445], capacity: '53,460', imageUrl: 'stadiums/mexico2.jpg' }];
var MexicoStadium3 = [{ name: "Estadio Akron", coords: [20.6818, -103.4626], capacity: '48,071', imageUrl: 'stadiums/mexico3.jpg' }];




// instead of having point markers for the stadiums, adding the world cup logos
var seoulIcon = L.icon({
  iconUrl: 'stadiums/Stadium1-seoul.webp',  
  iconSize: [32, 32],                   
  iconAnchor: [16, 32],                 
});

var BusanIcon = L.icon({
  iconUrl: 'stadiums/stadium2-busan.jpg',  
  iconSize: [32, 32],                   
  iconAnchor: [16, 32],                 
});

var KoreaIcon3 = L.icon({ 
  iconUrl: 'stadiums/stadium3-daegu.jpg', 
  iconSize: [32, 32], 
  iconAnchor: [16, 32],
});
var KoreaIcon4 = L.icon({ iconUrl: 'stadiums/stadium4-incheon.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var KoreaIcon5 = L.icon({ iconUrl: 'stadiums/stadium5-jeonju.webp', iconSize: [32, 32], iconAnchor: [16, 32] });
var KoreaIcon6 = L.icon({ iconUrl: 'stadiums/stadium6-ulsan.webp', iconSize: [32, 32], iconAnchor: [16, 32] });
var KoreaIcon7 = L.icon({ iconUrl: 'stadiums/stadium7-gwangju.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var KoreaIcon8 = L.icon({ iconUrl: 'stadiums/stadium8-suwon.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var KoreaIcon9 = L.icon({ iconUrl: 'stadiums/stadium9-daejeon.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var KoreaIcon10 = L.icon({ iconUrl: 'stadiums/stadium10-Seongwipo.webp', iconSize: [32, 32], iconAnchor: [16, 32] });


// Icons for Japan Stadiums
var japanIcon1 = L.icon({ iconUrl: 'stadiums/Japan1.jpeg', iconSize: [32, 32], iconAnchor: [16, 32] });
var japanIcon2 = L.icon({ iconUrl: 'stadiums/japan2-sapparo.jpeg', iconSize: [32, 32], iconAnchor: [16, 32] });
var japanIcon3 = L.icon({ iconUrl: 'stadiums/japan3-kashima.jpeg', iconSize: [32, 32], iconAnchor: [16, 32] });
var japanIcon4 = L.icon({ iconUrl: 'stadiums/japan4-kobe.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var japanIcon5 = L.icon({ iconUrl: 'stadiums/japan5-shizuoka.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var japanIcon6 = L.icon({ iconUrl: 'stadiums/japan6-oita.jpeg', iconSize: [32, 32], iconAnchor: [16, 32] });
var japanIcon7 = L.icon({ iconUrl: 'stadiums/japan7-niigata.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var japanIcon8 = L.icon({ iconUrl: 'stadiums/japan8-Osaka.jpeg', iconSize: [32, 32], iconAnchor: [16, 32] });
var japanIcon9 = L.icon({ iconUrl: 'stadiums/japan9-miyagi.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var japanIcon10 = L.icon({ iconUrl: 'stadiums/japan10-saitama.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });


//Icons for German Stadiums
var germanIcon1 = L.icon({ iconUrl: 'stadiums/Germany1-Berlin.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var germanIcon2 = L.icon({ iconUrl: 'stadiums/germany2-bayern.jpeg', iconSize: [32, 32], iconAnchor: [16, 32] });
var germanIcon3 = L.icon({ iconUrl: 'stadiums/germany3-dortmund.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var germanIcon4 = L.icon({ iconUrl: 'stadiums/germany4-volkspark.jpeg', iconSize: [32, 32], iconAnchor: [16, 32] });
var germanIcon5 = L.icon({ iconUrl: 'stadiums/germany5-frankfurt.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var germanIcon6 = L.icon({ iconUrl: 'stadiums/germany6-rheine.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var germanIcon7 = L.icon({ iconUrl: 'stadiums/germany7-gottlieb.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var germanIcon8 = L.icon({ iconUrl: 'stadiums/germany8-awd.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var germanIcon9 = L.icon({ iconUrl: 'stadiums/germany9-zentralsdion.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var germanIcon10 = L.icon({ iconUrl: 'stadiums/germany10-fritz.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
//South african stadiums
var SAIcon1 = L.icon({ iconUrl: 'stadiums/SA1-soccer city.jpeg', iconSize: [32, 32], iconAnchor: [16, 32] });
var SAIcon2 = L.icon({ iconUrl: 'stadiums/sa2-capetown.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var SAIcon3 = L.icon({ iconUrl: 'stadiums/sa3-moses.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var SAIcon4 = L.icon({ iconUrl: 'stadiums/sa4-ellis.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var SAIcon5 = L.icon({ iconUrl: 'stadiums/sa5-lotus.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var SAIcon6 = L.icon({ iconUrl: 'stadiums/sa6-mbombela.webp', iconSize: [32, 32], iconAnchor: [16, 32] }); // zebra pattern
var SAIcon7 = L.icon({ iconUrl: 'stadiums/sa7-mandela.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var SAIcon8 = L.icon({ iconUrl: 'stadiums/sa8-peter.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var SAIcon9 = L.icon({ iconUrl: 'stadiums/sa9-royal.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var SAIcon10 = L.icon({ iconUrl: 'stadiums/sa10-free state.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
//brazil
var BIcon1 = L.icon({ iconUrl: 'stadiums/brazil1-maracana.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var BIcon2 = L.icon({ iconUrl: 'stadiums/brazil2-mineirao.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var BIcon3 = L.icon({ iconUrl: 'stadiums/brazil3-saopaolo.webp', iconSize: [32, 32], iconAnchor: [16, 32] });
var BIcon4 = L.icon({ iconUrl: 'stadiums/brazil4-baixada.webp', iconSize: [32, 32], iconAnchor: [16, 32] });
var BIcon5 = L.icon({ iconUrl: 'stadiums/brazil5-national.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var BIcon6 = L.icon({ iconUrl: 'stadiums/brazil6-ontenova.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var BIcon7 = L.icon({ iconUrl: 'stadiums/brazil7-pernambuco.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var BIcon8 = L.icon({ iconUrl: 'stadiums/brazil8-amazon.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var BIcon9 = L.icon({ iconUrl: 'stadiums/brazil9-pantanal.jpeg', iconSize: [32, 32], iconAnchor: [16, 32] });
var BIcon10 = L.icon({ iconUrl: 'stadiums/brazil10-beirario.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var BIcon11 = L.icon({ iconUrl: 'stadiums/brazil11-dunas.jpeg', iconSize: [32, 32], iconAnchor: [16, 32] });
var BIcon12 = L.icon({ iconUrl: 'stadiums/brazil12-castelao.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
//russia
var RIcon1 = L.icon({ iconUrl: 'stadiums/russia1-luzhniki.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var RIcon2 = L.icon({ iconUrl: 'stadiums/russia2-st petersburg.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var RIcon3 = L.icon({ iconUrl: 'stadiums/russia3-fisht.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var RIcon4 = L.icon({ iconUrl: 'stadiums/russia4-ekaterinburg.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var RIcon5 = L.icon({ iconUrl: 'stadiums/russia5-kazan.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var RIcon6 = L.icon({ iconUrl: 'stadiums/russia6-nizhny.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var RIcon7 = L.icon({ iconUrl: 'stadiums/russia7-samara.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var RIcon8 = L.icon({ iconUrl: 'stadiums/russia8-volgograd.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var RIcon9 = L.icon({ iconUrl: 'stadiums/russia9-mordovia.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var RIcon10 = L.icon({ iconUrl: 'stadiums/russia10-rostov.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
//qatar
var QIcon1 = L.icon({ iconUrl: 'stadiums/qatar1-lusail.jpeg', iconSize: [32, 32], iconAnchor: [16, 32] });
var QIcon2 = L.icon({ iconUrl: 'stadiums/qatar2-al bayt.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var QIcon3 = L.icon({ iconUrl: 'stadiums/qatar3-janoub.webp', iconSize: [32, 32], iconAnchor: [16, 32] });
var QIcon4 = L.icon({ iconUrl: 'stadiums/qatar4-education.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var QIcon5 = L.icon({ iconUrl: 'stadiums/qatar5-ahmad.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var QIcon6 = L.icon({ iconUrl: 'stadiums/qatar6-khalifa.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var QIcon7 = L.icon({ iconUrl: 'stadiums/qatar7- thumma.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var QIcon8 = L.icon({ iconUrl: 'stadiums/qatar8-974.webp', iconSize: [32, 32], iconAnchor: [16, 32] });

//26
var USAIcon1 = L.icon({ iconUrl: 'stadiums/usa1-metlife.jpeg', iconSize: [32, 32], iconAnchor: [16, 32] });
var USAIcon2 = L.icon({ iconUrl: 'stadiums/usa2-att.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var USAIcon3 = L.icon({ iconUrl: 'stadiums/usa3-sofi.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var USAIcon4 = L.icon({ iconUrl: 'stadiums/usa4-hard rock.webp', iconSize: [32, 32], iconAnchor: [16, 32] });
var USAIcon5 = L.icon({ iconUrl: 'stadiums/usa5-merceds.jpeg', iconSize: [32, 32], iconAnchor: [16, 32] });
var USAIcon6 = L.icon({ iconUrl: 'stadiums/usa6-levis.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var USAIcon7 = L.icon({ iconUrl: 'stadiums/usa7-lumen.webp', iconSize: [32, 32], iconAnchor: [16, 32] });
var USAIcon8 = L.icon({ iconUrl: 'stadiums/usa8-gilletete.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var USAIcon9 = L.icon({ iconUrl: 'stadiums/usa9-lincoln.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var USAIcon10 = L.icon({ iconUrl: 'stadiums/usa10-nrg.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var USAIcon11 = L.icon({ iconUrl: 'stadiums/usa11-arrowhead.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var CanadaIcon1 = L.icon({ iconUrl: 'stadiums/canada1.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var CanadaIcon2 = L.icon({ iconUrl: 'stadiums/canada2.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var MexicoIcon1 = L.icon({ iconUrl: 'stadiums/mexico1.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var MexicoIcon2 = L.icon({ iconUrl: 'stadiums/mexico2.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });
var MexicoIcon3 = L.icon({ iconUrl: 'stadiums/mexico3.jpg', iconSize: [32, 32], iconAnchor: [16, 32] });





// markers for the stadiums & popups that shows pic of stadium and its capacity
function createPopupContent(stadium) {
return `<strong>${stadium.name}</strong><br>
        Capacity: ${stadium.capacity}<br>
        <img src="${stadium.imageUrl}" alt="${stadium.name}" style="width:100px;height:auto;"/>`;
}
//markers 4 korea
WC2002Seoul.forEach(function(stadium) {
L.marker(stadium.coords, { icon: seoulIcon }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});

WC2002Busan.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: BusanIcon }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });

WC2002KoreaStadium3.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: KoreaIcon3 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
WC2002KoreaStadium4.forEach(function(stadium) {
   L.marker(stadium.coords, { icon: KoreaIcon4 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
   });
   WC2002KoreaStadium5.forEach(function(stadium) {
    L.marker(stadium.coords, { icon: KoreaIcon5 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
    });
    
  WC2002KoreaStadium6.forEach(function(stadium) {
    L.marker(stadium.coords, { icon: KoreaIcon6 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
    });
  WC2002KoreaStadium7.forEach(function(stadium) {
    L.marker(stadium.coords, { icon: KoreaIcon7 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
    });
        
  WC2002KoreaStadium8.forEach(function(stadium) {
    L.marker(stadium.coords, { icon: KoreaIcon8 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
    });
  WC2002KoreaStadium9.forEach(function(stadium) {
    L.marker(stadium.coords, { icon: KoreaIcon9 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
    });

//japan markers
WC2002JapanStadium1.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: japanIcon1 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });

WC2002JapanStadium2.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: japanIcon2 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
WC2002JapanStadium3.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: japanIcon3 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
    
WC2002JapanStadium4.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: japanIcon4 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
WC2002JapanStadium5.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: japanIcon5 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
WC2002JapanStadium6.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: japanIcon6}).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
  
WC2002JapanStadium7.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: japanIcon7 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
WC2002JapanStadium8.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: japanIcon8 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
      
WC2002JapanStadium9.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: japanIcon9}).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
WC2002JapanStadium10.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: japanIcon10 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup(); });


//german
Germanstadium1.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: germanIcon1 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });

Germanstadium2.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: germanIcon2 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
Germanstadium3.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: germanIcon3 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
    
Germanstadium4.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: germanIcon4 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
Germanstadium5.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: germanIcon5 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
Germanstadium6.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: germanIcon6}).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
  
Germanstadium7.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: germanIcon7 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
Germanstadium8.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: germanIcon8 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
      
Germanstadium9.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: germanIcon9}).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
Germanstadium10.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: germanIcon10 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup(); });

//
SAStadium1.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: SAIcon1 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });

SAStadium2.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: SAIcon2 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
SAStadium3.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: SAIcon3 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
    
SAStadium4.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: SAIcon4 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
SAStadium5.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: SAIcon5 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
SAStadium6.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: SAIcon6}).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
  
SAStadium7.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: SAIcon7 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
SAStadium8.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: SAIcon8 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
      
SAStadium9.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: SAIcon9}).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
SAStadium10.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: SAIcon10 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup(); });

//brazil
BrazilStadium1.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: BIcon1 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });

BrazilStadium2.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: BIcon2 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
BrazilStadium3.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: BIcon3 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
    
BrazilStadium4.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: BIcon4 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
BrazilStadium5.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: BIcon5 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
BrazilStadium6.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: BIcon6}).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
  
  BrazilStadium7.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: BIcon7 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
  BrazilStadium8.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: BIcon8 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
      
  BrazilStadium9.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: BIcon9}).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
  BrazilStadium10.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: BIcon10 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
  BrazilStadium11.forEach(function(stadium) {
    L.marker(stadium.coords, { icon: BIcon11 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
  });
BrazilStadium12.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: BIcon12 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup(); });


//
Russiastadium1.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: RIcon1 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
Russiastadium2.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: RIcon2 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
Russiastadium3.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: RIcon3 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
Russiastadium4.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: RIcon4 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
Russiastadium5.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: RIcon5 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
Russiastadium6.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: RIcon6 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
Russiastadium7.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: RIcon7 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
Russiastadium8.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: RIcon8 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
Russiastadium9.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: RIcon9 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
Russiastadium10.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: RIcon10 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
//
QatarStadium1.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: QIcon1 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
QatarStadium2.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: QIcon2 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
QatarStadium3.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: QIcon3 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
QatarStadium4.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: QIcon4 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
QatarStadium5.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: QIcon5 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
QatarStadium6.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: QIcon6 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
QatarStadium7.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: QIcon7 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
QatarStadium8.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: QIcon8 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
//

// USA Stadium Markers
USAStadium1.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: USAIcon1 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
USAStadium2.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: USAIcon2 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
USAStadium3.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: USAIcon3 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
USAStadium4.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: USAIcon4 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
USAStadium5.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: USAIcon5 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
USAStadium6.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: USAIcon6 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
USAStadium7.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: USAIcon7 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
USAStadium8.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: USAIcon8 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
USAStadium9.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: USAIcon9 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
USAStadium10.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: USAIcon10 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
// Canada Stadium Markers
CanadaStadium1.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: CanadaIcon1 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
CanadaStadium2.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: CanadaIcon2 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
// Mexico Stadium Markers
MexicoStadium1.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: MexicoIcon1 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
MexicoStadium2.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: MexicoIcon2 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
MexicoStadium3.forEach(function(stadium) {
  L.marker(stadium.coords, { icon: MexicoIcon3 }).addTo(map).bindPopup(createPopupContent(stadium)).openPopup();
});
