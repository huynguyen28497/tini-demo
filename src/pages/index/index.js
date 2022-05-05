Page({
  onLoad(query) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onTap() {
    my.navigateToMiniApp({
      appId: "com.tini.appstore",
      // appId: "tala.insurtech.ekyc",
      extraData: {
        from: "tini connect 2 app",
        id: "tala.insuretech.demoTini",
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
