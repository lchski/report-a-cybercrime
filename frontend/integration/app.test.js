describe('cybercrime', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/old/form2')
  })

  it('should be titled "cybercrime"', async () => {
    await expect(page.title()).resolves.toMatch('Tell us your cybercrime story')
  })

  it('should match a input with a "textInput" name then fill it with text', async () => {
    await expect(page).toFill(
      'textarea[name="whatWasInvolvedOther"]',
      'Hello world',
    )
  })

  it('should match a input with a "textInput" name then fill it with text', async () => {
    await expect(page).toClick("input[type=checkbox][value='website']")
    await expect(page).toClick("input[type=checkbox][value='email']")
    await expect(page).toClick("input[type=checkbox][value='social media']")
    await expect(page).toClick("input[type=checkbox][value='text message']")
    await expect(page).toClick("input[type=checkbox][value='bank account']")
  })
})
