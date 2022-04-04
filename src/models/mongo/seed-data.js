export const seedData = {
  users: {
    _model: "User",
    bernard: {
      firstName: "Bernard",
      lastName: "Cattigan",
      email: "b.cattigan1@hotmail.com",
      password: "secret",
    },
    michelle: {
      firstName: "Michelle",
      lastName: "Cattigan",
      email: "m.cattigan1@hotmail.com",
      password: "secret",
    },
  },
  themes: {
    _model: "Theme",
    theme1: {
      name: "Weather Stations",
      userId: "->users.bernard",
    },
    theme2: {
      name: "Places I have visited in Ireland",
      userId: "->users.michelle",
    },
  },
  placess: {
    _model: "Place",
    place1: {
      name: "Athenry",
      lon: -8.4708,
      lat: 53.1721,
      desc: "Athenry AWS is situated within the grounds of Teagasc, Athenry, Co Galway and was installed in 2010. Daily rainfall readings were taken at Athenry from 1944 to 1975",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place2: {
      name: "Ballyhaise",
      lon: -7.1835,
      lat: 54.0305,
      desc: "Ballyhaise AWS is situated within the grounds of Teagasc, Ballyhaise, Co Cavan and was installed in 2003. The station replaced a synoptic station which closed at Clones, Co Monaghan in 2008. A manual climate station taking daily measurements was situated within the college from 1932 to 2005",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place3: {
      name: "Belmullet",
      lon: -10.0025,
      lat: 54.1339,
      desc: "The station opened in September 1956. It replaced the station at Blacksod Lighthouse, 10 miles to the SW, which was run by the Sweeney family. It was from Blacksod that the observation, which finally determined the date of the D-Day landings in June 1944, emanated. The station is regarded as being particularly important because of its location on the western fringe of Europe. In 2012, the manual station was replaced by an AWS situated on the same site",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place4: {
      name: "Carlow Oakpark",
      lon: -6.5455,
      lat: 52.514,
      desc: "Oak Park AWS is situated within the grounds of Teagasc, Oak Park, Co Carlow. The AWS was installed in 2003 and replaced a manual climate station which has taken daily readings since 1957",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place5: {
      name: "Claremorris",
      lon: -8.5933,
      lat: 53.4239,
      desc: "The station opened on the 9th November 1943 as a fully manned synoptic station. The manual station was replaced by an AGI automatic station in 1996. The station at Claremorris was officially closed on 1st November 2010 and was replaced by a TUCSON* Automatic Weather Station at the same location from January 1, 2010",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place6: {
      name: "Dunsany",
      lon: -6.3936,
      lat: 53.3057,
      desc: "The AWS is situated within the grounds of Teasgasc Grange, Boycetown, Co Meath. The present station was commissioned in 2006 replacing a manual climate station which was installed in 1963",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place7: {
      name: "Fermoy Moore Park",
      lon: -8.155,
      lat: 52.095,
      desc: "Moore Park AWS is situated within the grounds of Teagasc, Moore Park, Co Cork and was installed in 2003. The station replaced a manual station which was situated on the site since 1961",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place8: {
      name: "Finner",
      lon: -8.1435,
      lat: 54.2938,
      desc: "The current automatic weather station (AWS) was installed in Finner Army camp, Ballyshannon, Co. Donegal on the 1st November 2010. It replaced an existing AWS which had taken measurements since April 1996",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place9: {
      name: "Gurteen",
      lon: -8.0031,
      lat: 53.0311,
      desc: "Gurteen AWS was opened in the grounds of Gurteen Agricultural College, Co Tipperary in April 2008. The station was opened as a replacement to Birr Synoptic station which officially closed on the 1st January 2009",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place10: {
      name: "Johnstown Castle",
      lon: -6.2948,
      lat: 52.1752,
      desc: "Johnstown Castle AWS is situated within the grounds of Teagasc, Johnstown Castle, Co Wexford. An initial AWS was installed in 2003 and replaced a manual station which had taken daily measurements since 1914. Due to anthropogenic developments impacting on exposure the AWS was moved to a new location within the Teagasc grounds in 2009",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place11: {
      name: "Mace Head",
      lon: -9.5403,
      lat: 53.1933,
      desc: "The AWS at Mace Head is situated within the grounds of the NUI , Galway research centre near Carna, Co Galway. The station was installed in 2003",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place12: {
      name: "Malin Head",
      lon: -7.202,
      lat: 55.222,
      desc: "Malin Head synoptic weather station is situated at the most northerly point on the island of Ireland, at the top of the Inishowen peninsula in County Donegal. The nearest town is Carndonagh, which is 19 Km south southeast of the station",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place13: {
      name: "Markee",
      lon: -8.272,
      lat: 54.103,
      desc: "Markree Castle AWS is situated close to Markree Castle, Co Sligo.. The present station was commissioned in 2005 replacing a manual climate station which measured daily temperature and rainfall from 1860 to 1998. Due to site exposure, wind in not measured at the station",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place14: {
      name: "Mount Dillon",
      lon: -7.5851,
      lat: 53.4337,
      desc: "The AWS is situated on Bord Na Mona land north of Lanesborough. It was installed in September 2003",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place15: {
      name: "Mullingar",
      lon: -7.2144,
      lat: 53.3214,
      desc: "Mullingar AWS is situated to the west of Mullingar, Co. Westmeath. The station was automated in 1998",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place16: {
      name: "Newport",
      lon: -9.342,
      lat: 53.552,
      desc: "Newport (Furness) AWS is situated within the Marine Institute research centre to the North-West of Newport, Co Mayo. The station is positioned on an isthmus separating Lough Feegh (fresh water) and Furness Lough (salt water) .The present station was commissioned in January 2005 replacing a daily manual climate station which was installed in 1959",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place17: {
      name: "Phoenix Park",
      lon: -6.2,
      lat: 53.215,
      desc: "The Phoenix Park AWS is situated within the grounds of the Ordnance Survey of Ireland in the Phoenix Park, Dublin. The current station was installed in 2003 and replaced a manual climate which was established in 1829",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place18: {
      name: "Roches Point",
      lon: -8.144,
      lat: 54.4735,
      desc: "Roches Point AWS is situated in the south eastern tip of Cork Harbour. The present station was commissioned in 2004 replacing an older AWS which was installed in 1991. Prior to this, Roches Point was a fully manned synoptic station measuring hourly data since 194",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place19: {
      name: "Sherkin Island",
      lon: -9.254,
      lat: 51.2835,
      desc: "Sherkin Island AWS is situated within the grounds of the Sherkin Island Marine Station, Co Cork. The island is situated approximately 2 km off the west Cork village of Baltimore. The station is situated on north-west end of the island and was commissioned in 2004. A manual climate station measuring daily rainfall and temperature was installed in 1972 and remains open",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place20: {
      name: "Valentia",
      lon: -10.144,
      lat: 51.5623,
      desc: "Valentia Observatory is part of Met Éireann, the Irish Meteorological Service. It is located one kilometre west of the town of Cahirciveen, on the estuary of the Feartha river",
      userId: "->users.bernard",
      themeId: "->themes.theme1",
    },
    place21: {
      name: "Galway",
      lon: -9.052148,
      lat: 53.274365,
      desc: "Population: 72,729",
      userId: "->users.michelle",
      themeId: "->themes.theme2",
    },
    place22: {
      name: "Mullingar",
      lon: -7.336221,
      lat: 53.524763,
      desc: "Population: 18,416",
      userId: "->users.michelle",
      themeId: "->themes.theme2",
    },
    place23: {
      name: "Dungarvan",
      lon: -7.625041,
      lat: 52.92654,
      desc: "Population: 8,362",
      userId: "->users.michelle",
      themeId: "->themes.theme2",
    },
    place24: {
      name: "Youghal",
      lon: -7.850468,
      lat: 51.953319,
      desc: "Population: 6,785",
      userId: "->users.michelle",
      themeId: "->themes.theme2",
    },
    place25: {
      name: "Bray",
      lon: -6.108928,
      lat: 53.205791,
      desc: "Population: 31,901",
      userId: "->users.michelle",
      themeId: "->themes.theme2",
    },
    place26: {
      name: "Sligo",
      lon: -8.471503,
      lat: 54.270803,
      desc: "Population: 19,402",
      userId: "->users.michelle",
      themeId: "->themes.theme2",
    },
    place27: {
      name: "Clondalkin",
      lon: -6.394744,
      lat: 53.322686,
      desc: "Population: 43,879",
      userId: "->users.michelle",
      themeId: "->themes.theme2",
    },
    place28: {
      name: "Gorey",
      lon: -6.292949,
      lat: 52.67416,
      desc: "Population: 7,193",
      userId: "->users.michelle",
      themeId: "->themes.theme2",
    },
    place29: {
      name: "Wicklow",
      lon: -6.041501,
      lat: 52.979121,
      desc: "Population: 10.070",
      userId: "->users.michelle",
      themeId: "->themes.theme2",
    },
    place30: {
      name: "Carlow",
      lon: -6.924398,
      lat: 53.836692,
      desc: "Population: 20,724",
      userId: "->users.michelle",
      themeId: "->themes.theme2",
    },
    place31: {
      name: "Stillorgan",
      lon: -6.200595,
      lat: 53.289452,
      desc: "Population: 16,018",
      userId: "->users.michelle",
      themeId: "->themes.theme2",
    },
    place32: {
      name: "Westport",
      lon: -9.5225,
      lat: 53.801072,
      desc: "Population: 5,475",
      userId: "->users.michelle",
      themeId: "->themes.theme2",
    },
    place33: {
      name: "Bandon",
      lon: -8.736756,
      lat: 51.749174,
      desc: "Population: 5,822",
      userId: "->users.michelle",
      themeId: "->themes.theme2",
    },
  },
};
