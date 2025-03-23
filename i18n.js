// 多语言支持
const translations = {
  // 中文
  'zh-CN': {
    appTitle: '火箭发射与侦测系统',
    controlPanel: '控制面板',
    rocketName: '火箭名称: ',
    launchSite: '发射地点',
    targetSite: '目标地点',
    rocketType: '火箭类型',
    launchRocket: '发射火箭',
    reset: '重置',
    statusInfo: '状态信息',
    status: '状态: ',
    speed: '速度: ',
    altitude: '高度: ',
    flightTime: '飞行时间: ',
    currentLocation: '当前位置: ',
    trackingMap: '火箭轨迹追踪',
    launchConfirm: '发射确认',
    launchConfirmMsg: '您确定要发射火箭吗？',
    cancel: '取消',
    confirm: '确认',
    footer: '© 2025 火箭发射与侦测系统 - 技术支持',
    waitingLaunch: '待发射',
    launching: '发射中',
    arrived: '已到达目标',
    rocketInFlight: '火箭已经在飞行中',
    fillAllInfo: '请填写所有必要信息',
    launchSuccess: '火箭已成功到达目标位置！',
    launchPoint: '发射点: ',
    targetPoint: '目标点: ',
    
    // 火箭类型
    // 中国火箭
    cz5: '长征五号',
    cz7: '长征七号',
    cz11: '长征十一号',
    
    // SpaceX 火箭
    falcon9: 'Falcon 9',
    falconheavy: 'Falcon Heavy',
    starship: 'Starship',
    
    // NASA 火箭
    sls: '太空发射系统 (SLS)',
    saturn5: '土星五号',
    shuttle: '航天飞机',
    
    // 俄罗斯火箭
    soyuz: '联盟号',
    proton: '质子号',
    
    // 欧洲火箭
    ariane5: '阿丽亚娜5号',
    ariane6: '阿丽亚娜6号',
    
    // 日本火箭
    h2a: 'H-IIA',
    h3: 'H3',
    
    // 印度火箭
    gslv: 'GSLV',
    
    // 火箭分类
    chinaRockets: '中国火箭',
    usaRockets: '美国火箭',
    russiaRockets: '俄罗斯火箭',
    europeRockets: '欧洲火箭',
    japanRockets: '日本火箭',
    indiaRockets: '印度火箭',
    activeRockets: '现役火箭',
    developmentRockets: '研发中火箭',
    retiredRockets: '退役火箭',
    selectRocket: '选择火箭',
    
    // 发射场
    jqSite: '酒泉卫星发射中心',
    xcSite: '西昌卫星发射中心',
    wcSite: '文昌航天发射场',
    
    // 天气相关翻译
    weather: '天气状况',
    weatherClear: '晴朗',
    weatherCloudy: '多云',
    weatherRainy: '雨天',
    weatherWindy: '大风',
    weatherThunder: '雷暴',
    weatherCondition: '天气状况: ',
    weatherImpact: '天气影响: ',
    impactNone: '无影响',
    impactMinor: '轻微影响',
    impactModerate: '中度影响',
    impactSevere: '严重影响',
    weatherWarning: '天气警告: 当前天气条件可能影响发射安全',
    weatherOk: '天气良好，适合发射',
    
    // 城市选择相关翻译
    selectCity: '选择城市',
    majorCities: '世界主要城市',
    beijing: '北京',
    shanghai: '上海',
    tokyo: '东京',
    newyork: '纽约',
    london: '伦敦',
    paris: '巴黎',
    moscow: '莫斯科',
    sydney: '悉尼',
    riodejaneiro: '里约热内卢',
    cairo: '开罗',
    capetown: '开普敦',
    dubai: '迪拜',
    mumbai: '孟买',
    singapore: '新加坡',
    seoul: '首尔',
    bangkok: '曼谷',
    losangeles: '洛杉矶',
    toronto: '多伦多',
    mexicocity: '墨西哥城',
    berlin: '柏林',
    rome: '罗马',
    madrid: '马德里',
    istanbul: '伊斯坦布尔',
    hongkong: '香港',
    
    // 火箭详情
    rocketDetails: '火箭详情',
    payload: '有效载荷: ',
    firstFlight: '首飞时间: ',
    status: '状态: ',
    country: '国家/机构: ',
    active: '现役',
    retired: '退役',
    development: '研发中'
  },
  
  // 英文
  'en-US': {
    appTitle: 'Rocket Launch & Tracking System',
    controlPanel: 'Control Panel',
    rocketName: 'Rocket Name: ',
    launchSite: 'Launch Site',
    targetSite: 'Target Site',
    rocketType: 'Rocket Type',
    launchRocket: 'Launch Rocket',
    reset: 'Reset',
    statusInfo: 'Status Information',
    status: 'Status: ',
    speed: 'Speed: ',
    altitude: 'Altitude: ',
    flightTime: 'Flight Time: ',
    currentLocation: 'Current Location: ',
    trackingMap: 'Rocket Trajectory Tracking',
    launchConfirm: 'Launch Confirmation',
    launchConfirmMsg: 'Are you sure you want to launch the rocket?',
    cancel: 'Cancel',
    confirm: 'Confirm',
    footer: '© 2025 Rocket Launch & Tracking System - Technical Support',
    waitingLaunch: 'Waiting for Launch',
    launching: 'Launching',
    arrived: 'Arrived at Target',
    rocketInFlight: 'Rocket is already in flight',
    fillAllInfo: 'Please fill in all required information',
    launchSuccess: 'Rocket has successfully reached the target location!',
    launchPoint: 'Launch Point: ',
    targetPoint: 'Target Point: ',
    
    // Rocket types
    // Chinese rockets
    cz5: 'Long March 5',
    cz7: 'Long March 7',
    cz11: 'Long March 11',
    
    // SpaceX rockets
    falcon9: 'Falcon 9',
    falconheavy: 'Falcon Heavy',
    starship: 'Starship',
    
    // NASA rockets
    sls: 'Space Launch System (SLS)',
    saturn5: 'Saturn V',
    shuttle: 'Space Shuttle',
    
    // Russian rockets
    soyuz: 'Soyuz',
    proton: 'Proton',
    
    // European rockets
    ariane5: 'Ariane 5',
    ariane6: 'Ariane 6',
    
    // Japanese rockets
    h2a: 'H-IIA',
    h3: 'H3',
    
    // Indian rockets
    gslv: 'GSLV',
    
    // Rocket categories
    chinaRockets: 'Chinese Rockets',
    usaRockets: 'USA Rockets',
    russiaRockets: 'Russian Rockets',
    europeRockets: 'European Rockets',
    japanRockets: 'Japanese Rockets',
    indiaRockets: 'Indian Rockets',
    activeRockets: 'Active Rockets',
    developmentRockets: 'In Development',
    retiredRockets: 'Retired Rockets',
    selectRocket: 'Select Rocket',
    
    // Launch sites
    jqSite: 'Jiuquan Satellite Launch Center',
    xcSite: 'Xichang Satellite Launch Center',
    wcSite: 'Wenchang Spacecraft Launch Site',
    
    // Weather related translations
    weather: 'Weather Conditions',
    weatherClear: 'Clear',
    weatherCloudy: 'Cloudy',
    weatherRainy: 'Rainy',
    weatherWindy: 'Windy',
    weatherThunder: 'Thunderstorm',
    weatherCondition: 'Weather Condition: ',
    weatherImpact: 'Weather Impact: ',
    impactNone: 'No Impact',
    impactMinor: 'Minor Impact',
    impactModerate: 'Moderate Impact',
    impactSevere: 'Severe Impact',
    weatherWarning: 'Weather Warning: Current weather conditions may affect launch safety',
    weatherOk: 'Weather is good for launch',
    
    // City selection translations
    selectCity: 'Select City',
    majorCities: 'Major World Cities',
    beijing: 'Beijing',
    shanghai: 'Shanghai',
    tokyo: 'Tokyo',
    newyork: 'New York',
    london: 'London',
    paris: 'Paris',
    moscow: 'Moscow',
    sydney: 'Sydney',
    riodejaneiro: 'Rio de Janeiro',
    cairo: 'Cairo',
    capetown: 'Cape Town',
    dubai: 'Dubai',
    mumbai: 'Mumbai',
    singapore: 'Singapore',
    seoul: 'Seoul',
    bangkok: 'Bangkok',
    losangeles: 'Los Angeles',
    toronto: 'Toronto',
    mexicocity: 'Mexico City',
    berlin: 'Berlin',
    rome: 'Rome',
    madrid: 'Madrid',
    istanbul: 'Istanbul',
    hongkong: 'Hong Kong',
    
    // Rocket details
    rocketDetails: 'Rocket Details',
    payload: 'Payload: ',
    firstFlight: 'First Flight: ',
    status: 'Status: ',
    country: 'Country/Agency: ',
    active: 'Active',
    retired: 'Retired',
    development: 'In Development'
  },
  
  // 日文
  'ja-JP': {
    appTitle: 'ロケット発射・追跡システム',
    controlPanel: 'コントロールパネル',
    rocketName: 'ロケット名: ',
    launchSite: '発射場所',
    targetSite: '目標地点',
    rocketType: 'ロケットタイプ',
    launchRocket: 'ロケット発射',
    reset: 'リセット',
    statusInfo: 'ステータス情報',
    status: '状態: ',
    speed: '速度: ',
    altitude: '高度: ',
    flightTime: '飛行時間: ',
    currentLocation: '現在位置: ',
    trackingMap: 'ロケット軌道追跡',
    launchConfirm: '発射確認',
    launchConfirmMsg: 'ロケットを発射してもよろしいですか？',
    cancel: 'キャンセル',
    confirm: '確認',
    footer: '© 2025 ロケット発射・追跡システム - テクニカルサポート',
    waitingLaunch: '発射待機中',
    launching: '発射中',
    arrived: '目標に到着',
    rocketInFlight: 'ロケットは既に飛行中です',
    fillAllInfo: '必要な情報をすべて入力してください',
    launchSuccess: 'ロケットは目標位置に無事到着しました！',
    launchPoint: '発射点: ',
    targetPoint: '目標点: ',
    
    // ロケットタイプ
    // 中国のロケット
    cz5: '長征5号',
    cz7: '長征7号',
    cz11: '長征11号',
    
    // SpaceXのロケット
    falcon9: 'ファルコン9',
    falconheavy: 'ファルコンヘビー',
    starship: 'スターシップ',
    
    // NASAのロケット
    sls: 'スペース・ローンチ・システム (SLS)',
    saturn5: 'サターンV',
    shuttle: 'スペースシャトル',
    
    // ロシアのロケット
    soyuz: 'ソユーズ',
    proton: 'プロトン',
    
    // ヨーロッパのロケット
    ariane5: 'アリアン5',
    ariane6: 'アリアン6',
    
    // 日本のロケット
    h2a: 'H-IIA',
    h3: 'H3',
    
    // インドのロケット
    gslv: 'GSLV',
    
    // ロケットカテゴリー
    chinaRockets: '中国のロケット',
    usaRockets: 'アメリカのロケット',
    russiaRockets: 'ロシアのロケット',
    europeRockets: 'ヨーロッパのロケット',
    japanRockets: '日本のロケット',
    indiaRockets: 'インドのロケット',
    activeRockets: '現役ロケット',
    developmentRockets: '開発中ロケット',
    retiredRockets: '退役ロケット',
    selectRocket: 'ロケットを選択',
    
    // 発射場
    jqSite: '酒泉衛星発射センター',
    xcSite: '西昌衛星発射センター',
    wcSite: '文昌宇宙船発射場',
    
    // 天気関連の翻訳
    weather: '気象条件',
    weatherClear: '晴れ',
    weatherCloudy: '曇り',
    weatherRainy: '雨',
    weatherWindy: '強風',
    weatherThunder: '雷雨',
    weatherCondition: '天気状況: ',
    weatherImpact: '天気の影響: ',
    impactNone: '影響なし',
    impactMinor: '軽微な影響',
    impactModerate: '中程度の影響',
    impactSevere: '深刻な影響',
    weatherWarning: '気象警告: 現在の気象条件は発射の安全性に影響を与える可能性があります',
    weatherOk: '発射に適した天気です',
    
    // 都市選択の翻訳
    selectCity: '都市を選択',
    majorCities: '世界の主要都市',
    beijing: '北京',
    shanghai: '上海',
    tokyo: '東京',
    newyork: 'ニューヨーク',
    london: 'ロンドン',
    paris: 'パリ',
    moscow: 'モスクワ',
    sydney: 'シドニー',
    riodejaneiro: 'リオデジャネイロ',
    cairo: 'カイロ',
    capetown: 'ケープタウン',
    dubai: 'ドバイ',
    mumbai: 'ムンバイ',
    singapore: 'シンガポール',
    seoul: 'ソウル',
    bangkok: 'バンコク',
    losangeles: 'ロサンゼルス',
    toronto: 'トロント',
    mexicocity: 'メキシコシティ',
    berlin: 'ベルリン',
    rome: 'ローマ',
    madrid: 'マドリード',
    istanbul: 'イスタンブール',
    hongkong: '香港',
    
    // ロケット詳細
    rocketDetails: 'ロケット詳細',
    payload: '積載量: ',
    firstFlight: '初飛行: ',
    status: '状態: ',
    country: '国/機関: ',
    active: '現役',
    retired: '退役',
    development: '開発中'
  }
};

// 默认语言
let currentLang = 'zh-CN';

// 获取翻译文本
function t(key) {
  return translations[currentLang][key] || key;
}

// 切换语言
function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    updatePageText();
    return true;
  }
  return false;
}

// 获取当前语言
function getCurrentLanguage() {
  return currentLang;
}

// 获取支持的语言列表
function getSupportedLanguages() {
  return Object.keys(translations);
}

// 更新页面上的所有文本
function updatePageText() {
  // 更新标题
  document.title = t('appTitle');
  
  // 更新页面元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t(key);
      } else {
        el.textContent = t(key);
      }
    }
  });
  
  // 更新特定元素的属性
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const attrs = JSON.parse(el.getAttribute('data-i18n-attr'));
    for (const [attr, key] of Object.entries(attrs)) {
      el.setAttribute(attr, t(key));
    }
  });
  
  // 更新选项元素
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key);
    }
  });
  
  // 更新选项组标签
  document.querySelectorAll('optgroup[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.label = t(key);
    }
  });
}

export { t, setLanguage, getCurrentLanguage, getSupportedLanguages, updatePageText };
