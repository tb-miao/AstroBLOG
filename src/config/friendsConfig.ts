import type { FriendLink } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "夏夜流萤",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=7618557&s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Firefly Docs",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "Firefly主题模板文档",
		siteurl: "https://docs-firefly.cuteleaf.cn",
		tags: ["Docs"],
		weight: 9,
		enabled: true,
	},
	{
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
		weight: 8,
		enabled: true,
	},
	{
		title: "韩小韩博客",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=1655466387&s=640",
		desc: "运气是计划之外的东西.",
		siteurl: "https://www.vvhan.com",
		tags: ["Blog"],
		weight: 7, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "网站服务状态监控系统",
		imgurl: "https://www.caonima.cc/favicon.ico",
		desc: "网站服务状态监控系统",
		siteurl: "https://www.caonima.cc/",
		tags: ["Blog"],
		weight: 6, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "CoolCat Network Studio",
		imgurl: "https://www.coolcat.cn/favicon.ico",
		desc: "专注于IT技术学习和分享，提供网站建设、网站设计与开发",
		siteurl: "https://www.coolcat.cn",
		tags: ["CNS"],
		weight: 5, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "yCENzh's Blog",
		imgurl: "https://ico.kucat.cn/get.php?url=https://fuwari.oh1.top",
		desc: "Ciallo～(∠・ω&lt; )⌒☆ ",
		siteurl: "https://fuwari.oh1.top",
		tags: ["Blog"],
		weight: 4, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "带我入坑网站的超级大坏比",
		imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=3347510139&spec=5",
		desc: "Dmocken的免费推广位",
		siteurl: "https://phira.dmocken.top",
		tags: ["Blog"],
		weight: 3, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Dahi Blog",
		imgurl: "https://oxs.dahi.icu/pic/avatar.png",
		desc: "時光流轉，願你有一天能與重要的人重逢",
		siteurl: "https://dahi.icu/",
		tags: ["Blog"],
		weight: 2, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "AlexMa's Blog",
		imgurl: "https://blog-backend.alexma.top/api/v2/objects/avatar/112zjnt1f3c2cf3prp.webp",
		desc: "Create things with love.",
		siteurl: "https://blog.alexma.top",
		tags: ["Blog"],
		weight: 1, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Geekertao's Blog",
		imgurl: "https://obj.geekertao.top/geekertao.jpg",
		desc: "Geekertao's Blog",
		siteurl: "https://www.geekertao.com/",
		tags: ["Geekertao's Blog"],
		weight: 11, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
	return friendsConfig
		.filter((friend) => friend.enabled)
		.sort((a, b) => b.weight - a.weight); // 按权重降序排序
};
