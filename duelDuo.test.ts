
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('draw button display choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    draw.click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('add bot to duo button displays in div', async () => {
    await driver.findElement(By.id('draw')).click()
    const addToDuo = await driver.findElement(By.xpath('(//button)[3]'))
    addToDuo.click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed(); 
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})