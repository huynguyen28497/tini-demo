Page({
  onLoad(query) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onTap() {
    my.navigateToMiniApp({
      // appId: "com.tini.appstore",
      appId: "tiki.insuretech.ekyc",
      extraData: {
        from: "tini connect 2 app",
        id: "tiki.insuretech.demoTini",
      },
      success: (e) => {
        my.alert({ content: JSON.stringify({ e: e, mess: "success" }) });
      },
      fail: (e) => {
        my.alert({ content: JSON.stringify(e) });
      },
    });
  },
});
