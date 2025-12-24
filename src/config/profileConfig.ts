import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	avatar: "/assets/images/favicon.ico",
	// 名字
	name: "AUNya",
	// 个人签名
	bio: "是一个热爱二次元的小萌新~ ",

	// 链接配置
	// 已经预装的图标集：fa6-brands，fa6-regular，fa6-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "Bilibli",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/3546708996786634",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/tb-miao",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa6-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
	
	// 网站状态检测配置
	websiteStatus: {
		enable: true,
		websites: [
			{
				name: "当前网站",
				url: "", // 留空则检测当前网站
			},
			{
				name: "网站监测",
				url: "https://status.tbmiao.dpdns.org/",
			},
		],
		checkInterval: 30000, // 检测间隔，单位毫秒
	},
};
