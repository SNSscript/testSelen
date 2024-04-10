const http = require("http");

const port = 80;
const server = http.createServer(function (request, response) {

    let result = homeTest();
    result.then(result => {
        console.log('result', result)
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end(result);
    });
});

server.listen(port, () => { console.log("Сервер запущен по адресу http://localhost:80") });




const { Builder, By, Key, until, Actions } = require('selenium-webdriver')

async function homeTest() {
    const driver = await new Builder().forBrowser('firefox').build()
    await driver.get('https://www.ozon.ru');
    await driver.sleep(7000);

    let buttonAntiBot = await driver.findElement({ id: 'reload-button' });
    await buttonAntiBot.click();
    await driver.sleep(5000);

    let html = await driver.getPageSource();
    console.log('html =', html);

};