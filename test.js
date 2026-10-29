const {Builder, By} = require("selenium-webdriver");

async function test() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("file:///D:/vs_codes/myjava/index.html");

    await driver.findElement(By.id("a")).sendKeys("10");
    await driver.findElement(By.id("b")).sendKeys("20");

    await driver.findElement(By.id("button")).click();

    let result = await driver.findElement(By.id("result")).getText();

    if (result == "Answer: 30") {
        console.log("Test Passed");
    } else {
        console.log("Test Failed");
    }

    await driver.quit();
}

test();