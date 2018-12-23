ionic cordova build android --prod --release;

#cp D:/workspace/projects/ionic/siddashreebank/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk siddhashri-unsigned.apk;

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks D:/workspace/projects/ionic/siddashreebank/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk my-alias;

./zipalign -v 4 ./zipalign -v 4 D:/workspace/projects/ionic/siddashreebank/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk siddhashri-release.apk;

echo -ne '\007'
