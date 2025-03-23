# 火箭发射与侦测系统

这是一个使用 @material/web 框架开发的火箭发射与侦测前端项目。该项目提供了多语言界面（中文、英文、日文），用于模拟火箭发射、轨迹追踪和状态监控。

## 功能特点

- 多语言支持（中文、英文、日文）
- 基于 Material Design 3 的现代化 UI
- 世界地图显示火箭轨迹
- 实时模拟火箭飞行状态
- 支持自定义火箭参数
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
├── styles.css          # 样式文件
├── package.json        # 项目配置
└── vite.config.js      # Vite配置
```

## 使用说明

1. 选择界面语言（中文、英文或日文）
2. 在控制面板中填写火箭名称、发射地点和目标地点
3. 选择火箭类型
4. 点击"发射火箭"按钮
5. 在确认对话框中确认发射
6. 观察地图上的火箭轨迹和状态面板中的实时数据
7. 可以随时点击"重置"按钮重新开始

## 预设发射地点

- 酒泉卫星发射中心 / Jiuquan Satellite Launch Center / 酒泉衛星発射センター
- 西昌卫星发射中心 / Xichang Satellite Launch Center / 西昌衛星発射センター
- 文昌航天发射场 / Wenchang Spacecraft Launch Site / 文昌宇宙船発射場

## 火箭类型

- 长征五号 / Long March 5 / 長征5号
- 长征七号 / Long March 7 / 長征7号
- 长征十一号 / Long March 11 / 長征11号
