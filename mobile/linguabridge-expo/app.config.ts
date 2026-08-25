import type { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "LinguaBridge",
  slug: "linguabridge-mobile",
  version: "1.0.0",
  orientation: "portrait",
  scheme: "linguabridge",
  userInterfaceStyle: "light",
  ios: { supportsTablet: true, bundleIdentifier: "space.manus.linguabridge.mobile" },
  android: { package: "space.manus.linguabridge.mobile", versionCode: 1, permissions: ["RECORD_AUDIO"] },
  plugins: [
    "expo-router",
    "expo-asset",
    ["expo-audio", { microphonePermission: "اسمح لـ LinguaBridge بالوصول إلى الميكروفون للنسخ والترجمة الفورية.", enableBackgroundRecording: false }]
  ],
  experiments: { typedRoutes: true }
};

export default config;
