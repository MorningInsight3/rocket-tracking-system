// 多语言支持
const translations = {
  // 中文
  'zh-CN': {
    appTitle: '火箭发射与侦测系统',
    controlPanel: '控制面板',
    rocketName: '火箭名称',
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
    cz5: '长征五号',
    cz7: '长征七号',
    cz11: '长征十一号',
    jqSite: '酒泉卫星发射中心',
    xcSite: '西昌卫星发射中心',
    wcSite: '文昌航天发射场'
  },
  
  // 英文
  'en-US': {
    appTitle: 'Rocket Launch & Tracking System',
    controlPanel: 'Control Panel',
    rocketName: 'Rocket Name',
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
    cz5: 'Long March 5',
    cz7: 'Long March 7',
    cz11: 'Long March 11',
    jqSite: 'Jiuquan Satellite Launch Center',
    xcSite: 'Xichang Satellite Launch Center',
    wcSite: 'Wenchang Spacecraft Launch Site'
  },
  
  // 日文
  'ja-JP': {
    appTitle: 'ロケット発射・追跡システム',
    controlPanel: 'コントロールパネル',
    rocketName: 'ロケット名',
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
    cz5: '長征5号',
    cz7: '長征7号',
    cz11: '長征11号',
    jqSite: '酒泉衛星発射センター',
    xcSite: '西昌衛星発射センター',
    wcSite: '文昌宇宙船発射場'
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
}

export { t, setLanguage, getCurrentLanguage, getSupportedLanguages, updatePageText };
