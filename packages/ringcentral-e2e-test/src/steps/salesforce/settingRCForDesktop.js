export default class SettingRCForDesktop {
  static async enterSettings() {
    await $(app).waitFor(1000);
    await $(app).waitForSelector('[title="More Menu"]', { selector: 'css' });
    await $(app).click('[title="More Menu"]', { selector: 'css' });
    await $(app).waitForSelector('[title="Settings"]', { selector: 'css' });
    await $(app).click('[title="Settings"]', { selector: 'css' });
    await $(app).waitFor(1000);
  }

  static async settingRCForDesktop() {
    await $(app).click('#viewport > div > div > div > div > div > div.node_modules-ringcentral-widgets-components-SettingsPanel-_styles_root_1Eq2f > div > a:nth-child(1) > div > div > div.node_modules-ringcentral-widgets-components-IconField-_styles_content_2rExK')
    const DropdownSelectText = await $(app).getText('[class*="DropdownSelect"]');
    if (DropdownSelectText.trim() !== 'RingCentral for Desktop') {
      await $(app).click('[class*="DropdownSelect"]', { selector: 'css' });
      await $(app).click('[title="RingCentral for Desktop"]', { selector: 'css' });
      await $(app).click('[class*=SaveButton]', { selector: 'css' });
      await $(app).waitForSelector('[class*="AlertDisplay"]', { selector: 'css' });
      await $(app).execute('phone.alert.dismissAll');
      await $(app).waitFor(2000);
    }
  }

  static get steps() {
    return [
      this.enterSettings,
      this.gotoCalling,
      this.settingRCForDesktop,
    ];
  }
}