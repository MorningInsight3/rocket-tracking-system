// 导入 Material Web 组件
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/select/filled-select.js';
import '@material/web/select/select-option.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/divider/divider.js';
import '@material/web/elevation/elevation.js';
import '@material/web/dialog/dialog.js';

// 导入 Leaflet 地图库
import L from 'leaflet';

// 导入多语言支持
import { t, setLanguage, getCurrentLanguage, updatePageText } from './i18n.js';

// 导入城市数据
import { worldCities, getCityCoords, getCityName } from './cities.js';

// 导入火箭数据
import { rockets, getRocketInfo, getRocketName } from './rockets.js';

// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', () => {
  // 初始化多语言支持
  initI18n();
  
  // 初始化地图
  const map = L.map('map').setView([35.0, 105.0], 2); // 世界中心位置，缩放级别调整为2

  // 添加地图图层
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // 火箭图标
  const rocketIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3212/3212567.png',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });

  // 火箭标记
  let rocketMarker = null;
  // 轨迹线
  let trajectoryLine = null;
  // 发射点和目标点标记
  let launchMarker = null;
  let targetMarker = null;

  // 预设发射地点
  const launchSites = {
    'jqSite': [40.9606, 100.2979],
    'xcSite': [28.2463, 102.0269],
    'wcSite': [19.6145, 110.9510]
  };
  
  // 天气条件及其影响
  const weatherConditions = {
    'clear': { 
      icon: '☀️', 
      impact: 'none',
      speedModifier: 1.0,
      altitudeModifier: 1.0,
      launchSafe: true
    },
    'cloudy': { 
      icon: '☁️', 
      impact: 'minor',
      speedModifier: 0.95,
      altitudeModifier: 0.98,
      launchSafe: true
    },
    'rainy': { 
      icon: '🌧️', 
      impact: 'moderate',
      speedModifier: 0.85,
      altitudeModifier: 0.9,
      launchSafe: true
    },
    'windy': { 
      icon: '💨', 
      impact: 'moderate',
      speedModifier: 0.8,
      altitudeModifier: 0.85,
      launchSafe: true
    },
    'thunder': { 
      icon: '⛈️', 
      impact: 'severe',
      speedModifier: 0.7,
      altitudeModifier: 0.75,
      launchSafe: false
    }
  };

  // 获取DOM元素
  const rocketTypeSelect = document.getElementById('rocket-type-select');
  const launchSiteSelect = document.getElementById('launch-site-select');
  const targetSiteSelect = document.getElementById('target-site-select');
  const weatherSelect = document.getElementById('weather-select');
  const launchBtn = document.getElementById('launch-btn');
  const resetBtn = document.getElementById('reset-btn');
  const launchDialog = document.getElementById('launch-dialog');
  const cancelLaunchBtn = document.getElementById('cancel-launch');
  const confirmLaunchBtn = document.getElementById('confirm-launch');
  const weatherWarningCard = document.getElementById('weather-warning-card');
  
  // 状态显示元素
  const rocketStatus = document.getElementById('rocket-status');
  const rocketSpeed = document.getElementById('rocket-speed');
  const rocketAltitude = document.getElementById('rocket-altitude');
  const flightTime = document.getElementById('flight-time');
  const currentLocation = document.getElementById('current-location');
  const weatherIcon = document.getElementById('weather-icon');
  const weatherCondition = document.getElementById('weather-condition');
  const weatherImpact = document.getElementById('weather-impact');
  
  // 火箭详情元素
  const rocketNameDisplay = document.getElementById('rocket-name-display');
  const rocketPayload = document.getElementById('rocket-payload');
  const rocketFirstFlight = document.getElementById('rocket-first-flight');
  const rocketStatusDetail = document.getElementById('rocket-status-detail');
  const rocketCountry = document.getElementById('rocket-country');
  const rocketSpeedDetail = document.getElementById('rocket-speed-detail');
  const rocketAltitudeDetail = document.getElementById('rocket-altitude-detail');

  // 模拟火箭发射
  let rocketSimulation = null;
  let startTime = null;
  let isLaunched = false;
  
  // 初始化天气状态
  updateWeatherDisplay();
  
  // 天气选择变更事件
  weatherSelect.addEventListener('change', () => {
    updateWeatherDisplay();
  });
  
  // 火箭类型选择变更事件
  rocketTypeSelect.addEventListener('change', () => {
    updateRocketDetails();
  });
  
  // 更新天气显示
  function updateWeatherDisplay() {
    const selectedWeather = weatherSelect.value;
    const weather = weatherConditions[selectedWeather];
    
    // 更新天气图标和状态
    weatherIcon.textContent = weather.icon;
    weatherCondition.textContent = t('weather' + capitalizeFirstLetter(selectedWeather));
    weatherImpact.textContent = t('impact' + capitalizeFirstLetter(weather.impact));
    
    // 更新天气影响样式
    weatherImpact.className = '';
    weatherImpact.classList.add('impact-' + weather.impact);
    
    // 显示或隐藏天气警告
    if (!weather.launchSafe) {
      weatherWarningCard.style.display = 'block';
    } else {
      weatherWarningCard.style.display = 'none';
    }
  }
  
  // 更新火箭详情
  function updateRocketDetails() {
    const rocketId = rocketTypeSelect.value;
    
    if (!rocketId) {
      // 清空详情
      rocketNameDisplay.textContent = '--';
      rocketPayload.textContent = '--';
      rocketFirstFlight.textContent = '--';
      rocketStatusDetail.textContent = '--';
      rocketCountry.textContent = '--';
      rocketSpeedDetail.textContent = '--';
      rocketAltitudeDetail.textContent = '--';
      
      // 移除所有类名
      rocketStatusDetail.className = '';
      rocketCountry.className = '';
      return;
    }
    
    const rocket = getRocketInfo(rocketId);
    
    // 更新详情
    rocketNameDisplay.textContent = t(rocketId);
    rocketPayload.textContent = rocket.payload;
    rocketFirstFlight.textContent = rocket.firstFlight;
    rocketStatusDetail.textContent = t(rocket.status);
    rocketCountry.textContent = t(rocket.country + 'Rockets');
    rocketSpeedDetail.textContent = `${rocket.speed} km/h`;
    rocketAltitudeDetail.textContent = `${rocket.maxAltitude} km`;
    
    // 添加样式类
    rocketStatusDetail.className = 'status-' + rocket.status;
    rocketCountry.className = 'country-' + rocket.country;
  }
  
  // 首字母大写
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // 发射按钮点击事件
  launchBtn.addEventListener('click', () => {
    if (isLaunched) {
      showMessage(t('rocketInFlight'));
      return;
    }
    
    if (!validateInputs()) {
      showMessage(t('fillAllInfo'));
      return;
    }
    
    // 检查天气条件
    const selectedWeather = weatherSelect.value;
    const weather = weatherConditions[selectedWeather];
    
    // 如果天气不安全，显示警告但仍允许发射
    if (!weather.launchSafe) {
      if (!confirm(t('weatherWarning'))) {
        return;
      }
    }
    
    launchDialog.open = true;
  });

  // 取消发射
  cancelLaunchBtn.addEventListener('click', () => {
    launchDialog.open = false;
  });

  // 确认发射
  confirmLaunchBtn.addEventListener('click', () => {
    launchDialog.open = false;
    startRocketLaunch();
  });

  // 重置按钮点击事件
  resetBtn.addEventListener('click', () => {
    resetSimulation();
  });

  // 验证输入
  function validateInputs() {
    return rocketTypeSelect.value && launchSiteSelect.value && targetSiteSelect.value;
  }

  // 显示消息
  function showMessage(message) {
    alert(message);
  }

  // 获取发射地点坐标
  function getLaunchCoords() {
    const launchSiteValue = launchSiteSelect.value;
    
    // 检查是否是预设发射场
    if (launchSites[launchSiteValue]) {
      return launchSites[launchSiteValue];
    }
    
    // 检查是否是城市
    return getCityCoords(launchSiteValue);
  }
  
  // 获取目标地点坐标
  function getTargetCoords() {
    const targetSiteValue = targetSiteSelect.value;
    return getCityCoords(targetSiteValue);
  }
  
  // 获取地点显示名称
  function getSiteDisplayName(siteValue) {
    // 检查是否是预设发射场
    if (launchSites[siteValue]) {
      return t(siteValue);
    }
    
    // 否则是城市
    return t(siteValue);
  }

  // 开始火箭发射
  function startRocketLaunch() {
    // 获取输入值
    const rocketTypeId = rocketTypeSelect.value;
    const launchSiteValue = launchSiteSelect.value;
    const targetSiteValue = targetSiteSelect.value;
    const selectedWeather = weatherSelect.value;
    
    // 获取发射点和目标点坐标
    const launchCoords = getLaunchCoords();
    const targetCoords = getTargetCoords();
    
    if (!launchCoords || !targetCoords) {
      showMessage('无法获取坐标信息');
      return;
    }
    
    // 获取显示名称
    const launchSiteName = getSiteDisplayName(launchSiteValue);
    const targetSiteName = getSiteDisplayName(targetSiteValue);
    const rocketName = t(rocketTypeId);
    
    // 添加发射点和目标点标记
    if (launchMarker) map.removeLayer(launchMarker);
    if (targetMarker) map.removeLayer(targetMarker);
    
    launchMarker = L.marker(launchCoords, {
      icon: L.divIcon({
        className: 'launch-marker',
        html: '<div style="background-color: green; width: 12px; height: 12px; border-radius: 50%;"></div>',
        iconSize: [12, 12]
      })
    }).addTo(map).bindPopup(`${t('launchPoint')}${launchSiteName}`);
    
    targetMarker = L.marker(targetCoords, {
      icon: L.divIcon({
        className: 'target-marker',
        html: '<div style="background-color: red; width: 12px; height: 12px; border-radius: 50%;"></div>',
        iconSize: [12, 12]
      })
    }).addTo(map).bindPopup(`${t('targetPoint')}${targetSiteName}`);
    
    // 创建轨迹线
    if (trajectoryLine) map.removeLayer(trajectoryLine);
    trajectoryLine = L.polyline([launchCoords], {
      color: 'blue',
      weight: 3,
      opacity: 0.7,
      dashArray: '5, 5'
    }).addTo(map);
    
    // 创建火箭标记
    if (rocketMarker) map.removeLayer(rocketMarker);
    rocketMarker = L.marker(launchCoords, { icon: rocketIcon }).addTo(map)
      .bindPopup(`${rocketName}<br>${t('rocketType')}: ${t(rocketTypeId)}`);
    
    // 调整地图视图
    map.fitBounds([launchCoords, targetCoords], { padding: [50, 50] });
    
    // 更新状态
    rocketStatus.textContent = t('launching');
    isLaunched = true;
    startTime = Date.now();
    
    // 获取天气修正因子
    const weather = weatherConditions[selectedWeather];
    
    // 获取火箭信息
    const rocket = getRocketInfo(rocketTypeId);
    
    // 开始模拟
    const totalDistance = calculateDistance(launchCoords, targetCoords);
    
    // 应用天气影响到火箭性能
    const modifiedSpeed = rocket.speed * weather.speedModifier;
    const modifiedAltitude = rocket.maxAltitude * weather.altitudeModifier;
    
    const duration = (totalDistance / modifiedSpeed) * 3600000; // 毫秒
    
    // 模拟火箭飞行
    rocketSimulation = simulateRocketFlight(
      launchCoords,
      targetCoords,
      duration,
      {
        name: rocket.name,
        speed: modifiedSpeed,
        maxAltitude: modifiedAltitude
      }
    );
  }

  // 模拟火箭飞行
  function simulateRocketFlight(start, end, duration, rocketType) {
    const startTime = Date.now();
    const endTime = startTime + duration;
    const totalDistance = calculateDistance(start, end);
    
    // 更新间隔（毫秒）
    const updateInterval = 100;
    
    // 创建动画帧
    function animate() {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      if (progress < 1) {
        // 计算当前位置
        const currentPos = [
          start[0] + (end[0] - start[0]) * progress,
          start[1] + (end[1] - start[1]) * progress
        ];
        
        // 计算当前高度（抛物线轨迹）
        const altitude = rocketType.maxAltitude * Math.sin(progress * Math.PI);
        
        // 计算当前速度（加速、匀速、减速）
        let currentSpeed;
        if (progress < 0.2) {
          // 加速阶段
          currentSpeed = rocketType.speed * (progress / 0.2);
        } else if (progress > 0.8) {
          // 减速阶段
          currentSpeed = rocketType.speed * (1 - (progress - 0.8) / 0.2);
        } else {
          // 匀速阶段
          currentSpeed = rocketType.speed;
        }
        
        // 更新火箭位置
        rocketMarker.setLatLng(currentPos);
        
        // 更新轨迹线
        trajectoryLine.addLatLng(currentPos);
        
        // 更新状态信息
        updateStatus(currentPos, currentSpeed, altitude, elapsed);
        
        // 继续动画
        setTimeout(animate, updateInterval);
      } else {
        // 动画结束
        rocketMarker.setLatLng(end);
        rocketStatus.textContent = t('arrived');
        showMessage(t('launchSuccess'));
      }
    }
    
    // 开始动画
    animate();
    
    // 返回动画控制对象
    return {
      stop: function() {
        // 可以在这里添加停止动画的逻辑
      }
    };
  }

  // 更新状态信息
  function updateStatus(position, speed, altitude, elapsed) {
    rocketSpeed.textContent = `${Math.round(speed)} km/h`;
    rocketAltitude.textContent = `${Math.round(altitude)} km`;
    
    // 格式化飞行时间
    const hours = Math.floor(elapsed / 3600000);
    const minutes = Math.floor((elapsed % 3600000) / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    flightTime.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // 格式化当前位置
    currentLocation.textContent = `${position[0].toFixed(4)}°N, ${position[1].toFixed(4)}°E`;
  }

  // 计算两点之间的距离（km）
  function calculateDistance(point1, point2) {
    const lat1 = point1[0] * Math.PI / 180;
    const lat2 = point2[0] * Math.PI / 180;
    const lon1 = point1[1] * Math.PI / 180;
    const lon2 = point2[1] * Math.PI / 180;
    
    const R = 6371; // 地球半径（km）
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    
    return distance;
  }

  // 重置模拟
  function resetSimulation() {
    if (rocketSimulation) {
      rocketSimulation.stop();
    }
    
    if (rocketMarker) map.removeLayer(rocketMarker);
    if (trajectoryLine) map.removeLayer(trajectoryLine);
    if (launchMarker) map.removeLayer(launchMarker);
    if (targetMarker) map.removeLayer(targetMarker);
    
    rocketMarker = null;
    trajectoryLine = null;
    launchMarker = null;
    targetMarker = null;
    
    // 重置状态
    rocketStatus.textContent = t('waitingLaunch');
    rocketSpeed.textContent = '0 km/h';
    rocketAltitude.textContent = '0 km';
    flightTime.textContent = '00:00:00';
    currentLocation.textContent = '--';
    
    isLaunched = false;
    
    // 重置表单
    rocketTypeSelect.value = '';
    launchSiteSelect.value = '';
    targetSiteSelect.value = '';
    
    // 重置火箭详情
    updateRocketDetails();
    
    // 重置地图视图
    map.setView([35.0, 105.0], 2);
  }

  // 初始化多语言支持
  function initI18n() {
    const languageSelect = document.getElementById('language-select');
    
    // 设置语言选择器的初始值
    languageSelect.value = getCurrentLanguage();
    
    // 监听语言选择变化
    languageSelect.addEventListener('change', (e) => {
      const newLang = e.target.value;
      setLanguage(newLang);
      
      // 更新 HTML 语言属性
      document.documentElement.lang = newLang;
      
      // 更新天气显示
      updateWeatherDisplay();
      
      // 更新火箭详情
      updateRocketDetails();
      
      // 如果火箭已经发射，更新状态文本
      if (isLaunched) {
        rocketStatus.textContent = t('launching');
      } else {
        rocketStatus.textContent = t('waitingLaunch');
      }
    });
    
    // 初始更新页面文本
    updatePageText();
  }
});
