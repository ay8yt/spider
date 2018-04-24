const puppeteer = require('puppeteer');
const {paths} = require('./config/default');

(async () => {
	//创建浏览器
	let browser = await puppeteer.launch();
	//创建页面
	let page = await browser.newPage();
	//页面跳转某个路径
	await page.goto('https://www.baidu.com');
	await page.screenshot({
		path: paths.screenshot + `/${Date.now()}.png`
	});

	await browser.close();
})();