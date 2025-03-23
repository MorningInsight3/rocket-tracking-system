// 火箭数据库
export const rockets = {
  // 中国火箭
  'cz5': { 
    id: 'cz5',
    country: 'china',
    name: 'cz5', 
    speed: 7500, 
    maxAltitude: 500,
    payload: '25,000 kg (LEO)',
    firstFlight: '2016',
    status: 'active'
  },
  'cz7': { 
    id: 'cz7',
    country: 'china',
    name: 'cz7', 
    speed: 7800, 
    maxAltitude: 450,
    payload: '13,500 kg (LEO)',
    firstFlight: '2016',
    status: 'active'
  },
  'cz11': { 
    id: 'cz11',
    country: 'china',
    name: 'cz11', 
    speed: 8000, 
    maxAltitude: 550,
    payload: '700 kg (LEO)',
    firstFlight: '2015',
    status: 'active'
  },
  
  // SpaceX 火箭
  'falcon9': { 
    id: 'falcon9',
    country: 'usa',
    name: 'falcon9', 
    speed: 7900, 
    maxAltitude: 650,
    payload: '22,800 kg (LEO)',
    firstFlight: '2010',
    status: 'active'
  },
  'falconheavy': { 
    id: 'falconheavy',
    country: 'usa',
    name: 'falconheavy', 
    speed: 8500, 
    maxAltitude: 700,
    payload: '63,800 kg (LEO)',
    firstFlight: '2018',
    status: 'active'
  },
  'starship': { 
    id: 'starship',
    country: 'usa',
    name: 'starship', 
    speed: 9000, 
    maxAltitude: 800,
    payload: '100,000+ kg (LEO)',
    firstFlight: '2023',
    status: 'development'
  },
  
  // NASA 火箭
  'sls': { 
    id: 'sls',
    country: 'usa',
    name: 'sls', 
    speed: 8700, 
    maxAltitude: 750,
    payload: '95,000 kg (LEO)',
    firstFlight: '2022',
    status: 'active'
  },
  'saturn5': { 
    id: 'saturn5',
    country: 'usa',
    name: 'saturn5', 
    speed: 8200, 
    maxAltitude: 620,
    payload: '140,000 kg (LEO)',
    firstFlight: '1967',
    status: 'retired'
  },
  'shuttle': { 
    id: 'shuttle',
    country: 'usa',
    name: 'shuttle', 
    speed: 7800, 
    maxAltitude: 600,
    payload: '24,400 kg (LEO)',
    firstFlight: '1981',
    status: 'retired'
  },
  
  // 俄罗斯火箭
  'soyuz': { 
    id: 'soyuz',
    country: 'russia',
    name: 'soyuz', 
    speed: 7600, 
    maxAltitude: 450,
    payload: '7,080 kg (LEO)',
    firstFlight: '1966',
    status: 'active'
  },
  'proton': { 
    id: 'proton',
    country: 'russia',
    name: 'proton', 
    speed: 7500, 
    maxAltitude: 550,
    payload: '23,000 kg (LEO)',
    firstFlight: '1965',
    status: 'active'
  },
  
  // 欧洲火箭
  'ariane5': { 
    id: 'ariane5',
    country: 'europe',
    name: 'ariane5', 
    speed: 7800, 
    maxAltitude: 580,
    payload: '20,000 kg (LEO)',
    firstFlight: '1996',
    status: 'active'
  },
  'ariane6': { 
    id: 'ariane6',
    country: 'europe',
    name: 'ariane6', 
    speed: 8000, 
    maxAltitude: 600,
    payload: '21,650 kg (LEO)',
    firstFlight: '2023',
    status: 'development'
  },
  
  // 日本火箭
  'h2a': { 
    id: 'h2a',
    country: 'japan',
    name: 'h2a', 
    speed: 7600, 
    maxAltitude: 500,
    payload: '10,000 kg (LEO)',
    firstFlight: '2001',
    status: 'active'
  },
  'h3': { 
    id: 'h3',
    country: 'japan',
    name: 'h3', 
    speed: 7800, 
    maxAltitude: 550,
    payload: '6,500 kg (GTO)',
    firstFlight: '2023',
    status: 'active'
  },
  
  // 印度火箭
  'gslv': { 
    id: 'gslv',
    country: 'india',
    name: 'gslv', 
    speed: 7400, 
    maxAltitude: 480,
    payload: '5,000 kg (LEO)',
    firstFlight: '2001',
    status: 'active'
  }
};

// 按国家/机构分组火箭
export const rocketsByCountry = {
  china: Object.values(rockets).filter(rocket => rocket.country === 'china'),
  usa: Object.values(rockets).filter(rocket => rocket.country === 'usa'),
  russia: Object.values(rockets).filter(rocket => rocket.country === 'russia'),
  europe: Object.values(rockets).filter(rocket => rocket.country === 'europe'),
  japan: Object.values(rockets).filter(rocket => rocket.country === 'japan'),
  india: Object.values(rockets).filter(rocket => rocket.country === 'india')
};

// 按状态分组火箭
export const rocketsByStatus = {
  active: Object.values(rockets).filter(rocket => rocket.status === 'active'),
  development: Object.values(rockets).filter(rocket => rocket.status === 'development'),
  retired: Object.values(rockets).filter(rocket => rocket.status === 'retired')
};

// 获取火箭信息
export function getRocketInfo(rocketId) {
  return rockets[rocketId];
}

// 获取火箭名称（多语言支持）
export function getRocketName(rocketId, t) {
  return t(rocketId);
}

// 获取所有火箭ID
export function getAllRocketIds() {
  return Object.keys(rockets);
}

// 获取随机火箭
export function getRandomRocket() {
  const rocketIds = Object.keys(rockets);
  const randomIndex = Math.floor(Math.random() * rocketIds.length);
  return rocketIds[randomIndex];
}
