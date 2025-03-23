# 火箭发射与侦测系统

这是一个使用 @material/web 框架开发的火箭发射与侦测前端项目。该项目提供了多语言界面（中文、英文、日文），用于模拟火箭发射、轨迹追踪和状态监控。

## 功能特点

- 多语言支持（中文、英文、日文）
- 基于 Material Design 3 的现代化 UI
- 世界地图显示火箭轨迹
- 实时模拟火箭飞行状态
- 支持自定义火箭参数
- 天气系统影响火箭发射和飞行
- 世界主要城市选择系统
- 多国火箭型号库
- 响应式设计，适配不同设备

## 技术栈

- @material/web: Material Design 3 Web 组件
- Leaflet: 交互式地图库
- Vite: 现代前端构建工具
- i18n: 自定义多语言支持

## 安装与运行

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
/
├── index.html          # 主HTML文件
├── main.js             # 主JavaScript文件
├── i18n.js             # 多语言支持
├── cities.js           # 世界城市数据
├── rockets.js          # 火箭数据库
├── styles.css          # 样式文件
├── package.json        # 项目配置
└── vite.config.js      # Vite配置
```

## 使用说明

1. 选择界面语言（中文、英文或日文）
2. 从下拉菜单中选择火箭类型（查看火箭详细参数）
3. 从下拉菜单中选择发射地点和目标地点
5. 选择天气状况
6. 点击"发射火箭"按钮
7. 在确认对话框中确认发射
8. 观察地图上的火箭轨迹和状态面板中的实时数据
9. 可以随时点击"重置"按钮重新开始

## 预设发射地点

- 酒泉卫星发射中心 / Jiuquan Satellite Launch Center / 酒泉衛星発射センター
- 西昌卫星发射中心 / Xichang Satellite Launch Center / 西昌衛星発射センター
- 文昌航天发射场 / Wenchang Spacecraft Launch Site / 文昌宇宙船発射場

## 世界主要城市

系统包含了世界各大洲的主要城市，包括：

- 亚洲：北京、上海、东京、首尔、新加坡、曼谷、迪拜、孟买、香港等
- 欧洲：伦敦、巴黎、莫斯科、柏林、罗马、马德里、伊斯坦布尔等
- 北美洲：纽约、洛杉矶、多伦多、墨西哥城等
- 南美洲：里约热内卢等
- 非洲：开罗、开普敦等
- 大洋洲：悉尼等

## 火箭类型

系统包含了多个国家和机构的火箭型号：

### 中国火箭
- 长征五号 / Long March 5 / 長征5号
- 长征七号 / Long March 7 / 長征7号
- 长征十一号 / Long March 11 / 長征11号

### 美国火箭
- SpaceX Falcon 9
- SpaceX Falcon Heavy
- SpaceX Starship
- NASA 太空发射系统 (SLS)
- NASA 土星五号 (Saturn V)
- NASA 航天飞机 (Space Shuttle)

### 俄罗斯火箭
- 联盟号 (Soyuz)
- 质子号 (Proton)

### 欧洲火箭
- 阿丽亚娜5号 (Ariane 5)
- 阿丽亚娜6号 (Ariane 6)

### 日本火箭
- H-IIA
- H3

### 印度火箭
- GSLV

## 天气系统

系统包含以下天气类型，每种天气会对火箭性能产生不同影响：

- 晴朗 / Clear / 晴れ - 无影响
- 多云 / Cloudy / 曇り - 轻微影响
- 雨天 / Rainy / 雨 - 中度影响
- 大风 / Windy / 強風 - 中度影响
- 雷暴 / Thunderstorm / 雷雨 - 严重影响（发射危险）
