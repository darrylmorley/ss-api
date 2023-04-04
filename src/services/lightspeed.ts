import LightspeedRetailSDK from "lightspeed-retail-sdk";

const api = new LightspeedRetailSDK({
  accountID: "218964",
  clientID: process.env.LIGHTSPEED_ID,
  clientSecret: process.env.LIGHTSPEED_SECRET,
  refreshToken: process.env.LIGHTSPEED_REFRESH_TOKEN,
});
