// 世界主要城市数据
export const worldCities = {
  // 亚洲城市
  beijing: { name: 'beijing', coords: [39.9042, 116.4074], continent: 'asia' },
  shanghai: { name: 'shanghai', coords: [31.2304, 121.4737], continent: 'asia' },
  tokyo: { name: 'tokyo', coords: [35.6762, 139.6503], continent: 'asia' },
  seoul: { name: 'seoul', coords: [37.5665, 126.9780], continent: 'asia' },
  singapore: { name: 'singapore', coords: [1.3521, 103.8198], continent: 'asia' },
  bangkok: { name: 'bangkok', coords: [13.7563, 100.5018], continent: 'asia' },
  dubai: { name: 'dubai', coords: [25.2048, 55.2708], continent: 'asia' },
  mumbai: { name: 'mumbai', coords: [19.0760, 72.8777], continent: 'asia' },
  hongkong: { name: 'hongkong', coords: [22.3193, 114.1694], continent: 'asia' },
  istanbul: { name: 'istanbul', coords: [41.0082, 28.9784], continent: 'asia' },
  
  // 欧洲城市
  london: { name: 'london', coords: [51.5074, -0.1278], continent: 'europe' },
  paris: { name: 'paris', coords: [48.8566, 2.3522], continent: 'europe' },
  moscow: { name: 'moscow', coords: [55.7558, 37.6173], continent: 'europe' },
  berlin: { name: 'berlin', coords: [52.5200, 13.4050], continent: 'europe' },
  rome: { name: 'rome', coords: [41.9028, 12.4964], continent: 'europe' },
  madrid: { name: 'madrid', coords: [40.4168, -3.7038], continent: 'europe' },
  
  // 北美洲城市
  newyork: { name: 'newyork', coords: [40.7128, -74.0060], continent: 'north_america' },
  losangeles: { name: 'losangeles', coords: [34.0522, -118.2437], continent: 'north_america' },
  toronto: { name: 'toronto', coords: [43.6532, -79.3832], continent: 'north_america' },
  mexicocity: { name: 'mexicocity', coords: [19.4326, -99.1332], continent: 'north_america' },
  
  // 南美洲城市
  riodejaneiro: { name: 'riodejaneiro', coords: [-22.9068, -43.1729], continent: 'south_america' },
  
  // 非洲城市
  cairo: { name: 'cairo', coords: [30.0444, 31.2357], continent: 'africa' },
  capetown: { name: 'capetown', coords: [-33.9249, 18.4241], continent: 'africa' },
  
  // 大洋洲城市
  sydney: { name: 'sydney', coords: [-33.8688, 151.2093], continent: 'oceania' }
};

// 按大洲分组城市
export const citiesByContinent = {
  asia: Object.values(worldCities).filter(city => city.continent === 'asia'),
  europe: Object.values(worldCities).filter(city => city.continent === 'europe'),
  north_america: Object.values(worldCities).filter(city => city.continent === 'north_america'),
  south_america: Object.values(worldCities).filter(city => city.continent === 'south_america'),
  africa: Object.values(worldCities).filter(city => city.continent === 'africa'),
  oceania: Object.values(worldCities).filter(city => city.continent === 'oceania')
};

// 获取城市坐标
export function getCityCoords(cityName) {
  return worldCities[cityName]?.coords;
}

// 获取城市名称（多语言支持）
export function getCityName(cityName, t) {
  return t(cityName);
}

// 获取所有城市名称
export function getAllCityNames() {
  return Object.keys(worldCities);
}

// 获取随机城市
export function getRandomCity() {
  const cities = Object.keys(worldCities);
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}

// 获取两个城市之间的距离（公里）
export function getDistanceBetweenCities(city1, city2) {
  const coords1 = getCityCoords(city1);
  const coords2 = getCityCoords(city2);
  
  if (!coords1 || !coords2) return null;
  
  // 使用 Haversine 公式计算两点之间的距离
  const lat1 = coords1[0] * Math.PI / 180;
  const lat2 = coords2[0] * Math.PI / 180;
  const lon1 = coords1[1] * Math.PI / 180;
  const lon2 = coords2[1] * Math.PI / 180;
  
  const R = 6371; // 地球半径（公里）
  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;
  
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  
  return distance;
}
