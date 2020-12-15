browser.browserAction.onClicked.addListener(async (tab) => {
  const tabs = await browser.tabs.query({
    currentWindow: true,
    active: true
  });

  const activeTab = tabs[0];
  await browser.tabs.sendMessage(activeTab.id, {});
});
