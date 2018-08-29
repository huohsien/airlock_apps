/**
 * @file Provides a script interface for interacting with Airlock Browser
 * @version 1.0.0
 * @copyright Outcoder Sarl 2018. All Rights Reserved.
 */

var clLastScanArgs;

/**
 * Subscribes to the airlock.scanning.onScan event.
 * @param {string} jsFunctionName The name of a function.
 * Cannot contain dot point operators.
 * For example, 'foo' is allowed, but 'foo.bar' is not allowed.
 * @see {@link airlock.scanning.onScan.addListener}
 */
function BarCodeSetCallBack(jsFunctionName) {
    airlock.scanning.onScan.addListener(function (args) {
        clLastScanArgs = args;
        window[jsFunctionName](args);
    });

    airlock.scanning.onScanError.addListener(function(args) {
        clLastScanError = args.errorInfo;
    });
}

/**
 * Gets the result of the last scan event.
 * @returns {ScanEventArgs} The last scan event args.
 * @see {@link airlock.scanning.onScan.addListener}
 */
function BarCodeGetReaderData() {
    return clLastScanArgs;
}

/**
 * Simulates pressing hardware trigger for the barcode reader.
 * @see {@link airlock.scanning.beginScan}
 */
function BarCodeSoftScanTrigger() {
    airlock.scanning.beginScan();
}

/**
 * Places the reader into a ready state.
 * You generally do not need to call this function because the scanner
 * is placed into a ready state automatically.
 * Calling this method is equivalent to calling BarCodeSetActive(true).
 * @see {@link airlock.scanning.setScannerActive}
 */
function BarCodeInit() {
    airlock.scanning.setScannerActive(true);
}

/**
 * Resets the scanner configuration. Resets the current devices configuration
 * and removes any settings stored for the barcode reader, including
 * decoder settings and so forth.
 * @returns {Promise} When resolved indicates the reset is complete.
 * @see {@link airlock.scanning.resetConfiguration}
 */
function BarCodeReset() {
    return airlock.scanning.resetConfiguration();
}

/**
 * Gets a value indicating whether the scanner is ready.
 * @returns {boolean} true if the scanner is started and usable; false otherwise.
 * @see {@link airlock.scanning.isScannerActive}
 */
function BarCodeGetActive() {
    return airlock.scanning.isScannerActive();
}

/**
 * Starts or stops the scanner.
 * @param {boolean} active If true the scanner is placed in a started state.
 * If false, the scanner is stopped.
 * @see {@link airlock.scanning.setScannerActive}
 */
function BarCodeSetActive(active) {
    airlock.scanning.setScannerActive(active);
}

/**
 * Gets the reader type as reported by the device SDK.
 * @returns {string} The reader type as reported by the device SDK.
 * @see {@link airlock.scanning.getReaderModel}
 */
function BarCodeGetReaderType() {
    return airlock.scanning.getReaderModel();
}

/**
 * Gets the reader firmware version as reported by the device SDK.
 * @returns {string} The reader firmware version as reported by the device SDK.
 * @see {@link airlock.scanning.getFirmwareVersion}
 */
function BarCodeGetScannerVersion() {
    return airlock.scanning.getFirmwareVersion();
}

/**
 * Returns the scanner configuration as an object.
 * Fields can be set, and the configuration can be applied using setConfiguration.
 * @see {@link BarCodeSetReaderOutputConfiguration}
 * @return {object} The reader configuration.
 * @see {@link airlock.scanning.getConfiguration}
 */
function BarCodeGetReaderOutputConfiguration() {
    return airlock.scanning.getConfiguration();
}

/**
 * Applies the specified scanner configuration to the device.
 * @param {object} configuration The barcode reader configuration.
 * @see {@link airlock.scanning.setConfiguration}
 */
function BarCodeSetReaderOutputConfiguration(configuration) {
    airlock.scanning.setConfiguration(configuration);
}

/**
 * Gets the API service version of the device SDK. This value is retrieved
 * from the device SDK itself. There are two version numbers in the current environment for developers.
 * One is "Reader Service Version" and the other is "Reader API version".
 * The two correspond to two different entities.
 * API and its version number are only modified when there are new functions,
 * while reader service and its version number are modified whenever the code
 * of reader service is modified, including both bug fixes and new implementations.
 * So these two version numbers change independently.
 * If there is a new function implemented, both version numbers will change
 * but if the change is simply a bug fix with no API declarations changes
 * then only the version of the reader service will change.
 * @returns {string} The API service version reported by the device SDK.
 */
function BarCodeGetReaderServiceVersion() {
    return pageHost.ii.getResult("scanning.getApiVersionWithPatch");
}

/**
 * Gets the API version of the device SDK. This value is retrieved
 * from the device SDK itself.
 * @returns {string} The API version reported by the device SDK.
 * @see {@link airlock.scanning.getApiVersion}
 */
function BarCodeGetApiVersion() {
    return airlock.scanning.getApiVersion();
}

/**
 * Gets an object (via a promise) containing a property for each decoder,
 * indicating its enabled state.
 * For example, a property is enableAustralianPostal whose value is boolean.
 * True if enabled; false otherwise.
 * @returns {Promise<object>} Returns a promise that when resolved
 * has properties representing each decoder's enabled state.
 */
function BarCodeGetDecodersStatus() {

    return airlock.scanning.getDecoders()
        .then(function (decoders) {
        var decoderMap = new Map();
        var result = {};
        for (var i = 0; i < decoders.length; i++) {
            var decoder = decoders[i];
            var propertyName = `enable${decoder.name}`;
            result[propertyName] = decoder.enabled;
            decoderMap.set(propertyName, decoder);
        }

        result._decoderMap = decoderMap;

        return result;
    });
}

/**
 * Sets the decoder enabled state according to the values
 * set in the specified decodersStatus object.
 * @param {object} decodersStatus Contains properties for each decoder.
 * @see {@link BarCodeGetDecodersStatus}
 */
function BarCodeSetDecodersStatus(decodersStatus) {
    for (var propertyName in decodersStatus) {
        if (!decodersStatus.hasOwnProperty(propertyName)) {
            continue;
        }

        var decoderMap = decodersStatus._decoderMap;
        var decoder = decoderMap.get(propertyName);
        if (!decoder) {
            continue;
        }

        var propertyValue = decodersStatus[propertyName];

        decoder.enabled = propertyValue === true;

        airlock.scanning.setDecoder(decoder);
    }
}

/**
 * Retrieves the decoder with the specified name.
 * Device makers use different names for decoders. If you are uncertain
 * of the name, use getDecoderWithNativeId instead.
 * @param {string} decoderName The name of the decoder. Cannot be null.
 * @returns {object} The decoder object that may allow you to modify its state.
 * @see {@link airlock.scanning.getDecoderWithName}
 */
function BarCodeGetSymbology(decoderName) {
    return airlock.scanning.getDecoderWithName(decoderName);
}

var clLastScanError;

/**
 * Gets the last scan error. Requires subscription to the scan
 * event via BarCodeSetCallBack;
 * @returns {object} The last scan error that occured or undefined.
 * @see {@link BarCodeSetCallBack}
 * @see {@link airlock.scanning.onScanError}
 */
function BarCodeGetErrorMsg() {
    return clLastScanError;
}

/**
 * Releases the resources of the scanner.
 * This is equivalent to calling BarCodeSetActive(false).
 */
function BarCodeRelease() {
    airlock.scanning.setScannerActive(false);
}

/**
 * Sets the values of a decoder.
 * @param {object} decoder The decoder object. Cannot be null.
 * @see {@link airlock.scanning.setDecoder}
 */
function BarCodeSetSymbology(decoder) {
    airlock.scanning.setDecoder(decoder);
}

/**
 * Gets or sets the full screen mode. If the fullScreen
 * parameter is undefined, then a value indicating whether the app
 * is in full screen mode is return. If the fullScreen parameter
 * is supplied, then the screen mode is adjusted accordingly.
 * @param {boolean} [fullScreen]
 * Indicates what to set the full screen mode to.
 * @returns {boolean} If the fullScreen parameter is not supplied,
 * a value indicating the current full screen mode of the app.
 * @see {@link airlock.device.isFullScreen}
 * @see {@link airlock.device.setFullScreen}
 */
function JSFullScreenMode(fullScreen) {
    if (fullScreen === null) {
        return airlock.device.isFullScreen();
    }
    return airlock.device.setFullScreen(fullScreen);
}

/**
 * Sends the user to the Android home screen while minimizing the browser.
 * @see {@link airlock.device.minimizeApp}
 */
function JSMinimizeBrowser() {
    airlock.app.minimize();
}

/**
 * Obtains the screen brightness, which is a float value
 * between 0 and 1.
 * @returns {float} brightness between 0 and 1.
 * @see {@link airlock.device.getBrightness}
 */
function JSGetBrightness() {
    return airlock.device.getBrightness();
}

/**
 * Sets the screen brightness to a value between 0 and 1.
 * The specified value is clamped between 0.1 and 1
 * to prevent the device being unusable.
 * @param {number} brightness A value between 0 and 1.
 * @see {@link airlock.device.setBrightness}
 */
function JSSetBrightness(brightness) {
    airlock.device.setBrightness(brightness);
}

/**
 * Gets the text zoom level for the page, which is a positive floating point number,
 * where 1.0 is normal size. 2.0 is double the normal size. 
 * @returns {number} The text zoom level,
 * which is greater than 0; where 1.0 is normal size.
 * @see {@link airlock.browsing.getTextZoomLevel}
 */
function JSGetTextZoomLevel() {
    return airlock.browsing.getTextZoomLevel();
}

/**
 * Sets the text zoom level for the page, which is a positive floating point number,
 * where 1.0 is normal size. 2.0 is double the normal size.
 * @param {number} level The text zoom level,
 * which is greater than 0; where 1.0 is normal size.
 * @see {@link airlock.browsing.setTextZoomLevel}
 */
function JSSetTextZoomLevel(level) {
    airlock.browsing.setTextZoomLevel(level);
}

/**
 * Gets the ringer mode of the device.
 * Ringer mode determines how the phone behaves when a call
 * is incoming. Ringer mode may be 2 (normal), 0 (silent), or 1 (vibrate).
 * @returns {airlock.device.RingerMode} 2 (normal), 0 (silent), or 1 (vibrate)
 * @see {@link airlock.device.getRingerMode}
 */
function JSGetRingerMode() {
    return airlock.device.getRingerMode();
}

/**
 * Sets the ringer mode of the device.
 * Ringer mode determines how the phone behaves when a call
 * is incoming. Ringer mode may be 2 (normal), 0 (silent), or 1 (vibrate).
 * @param {airlock.device.RingerMode} mode Allowed values are
 * 2 (normal), 0 (silent), or 1 (vibrate)
 * @see {@link airlock.device.setRingerMode}
 */
function JSSetRingerMode(mode) {
    airlock.device.setRingerMode(mode);
}

/**
 * Gets a value between 0 and the maximum volume, which can be
 * retrieved using the getMaxVolume function.
 * @param {airlock.device.StreamType} streamType
 * Indicates the source of the volume.
 * @returns {number} A number between zero and getMaxVolume()
 * @see {@link airlock.device.getMaxVolume}
 * @see {@link airlock.device.getVolume}
 */
function JSGetDeviceVolume(streamType) {
    return airlock.device.getVolume(streamType);
}

/**
 * Sets a value between 0 and the maximum volume, which can be
 * retrieved using the getMaxVolume function.
 * @param {airlock.device.StreamType} streamType
 * Indicates the source of the volume.
 * @param {number} volume A value between 0 and the maximum volume,
 * which can be retrieved using the getMaxVolume function.
 * @see {@link airlock.device.setVolume}
 */
function JSSetDeviceVolume(streamType, volume) {
    airlock.device.setVolume(streamType, volume);
}

/**
 * Writes a log message at the specified level. 
 * @param {airlock.log.LogLevel} level The log level of the message.
 * All is 1, Debug is 2, Info is 3, Warn is 4, Error is 5
 * @param {string} message The text to write to the log.
 */
function JSLog(level, message) {
    var mappedLevel = 1;
    switch (level) {
        case 1:
            mappedLevel = 1;
            break;
        case 2:
            mappedLevel = 2;
            break;
        case 3:
            mappedLevel = 4;
            break;
        case 4:
            mappedLevel = 8;
            break;
        case 5:
            mappedLevel = 16;
            break;
    }

    /* The offset is 1, to exclude this method
	 from determining the line number identification and so forth. */
    pageHost.ii.log.writeLog(mappedLevel, message, 1);
}

/**
 * Reads the log and returns the entries using a Promise.
 * @returns {Promise<Array.<LogEntry>>} Resolves a list of log entries.
 * @see {@link airlock.log.getEntries}
 */
function JSReadLogFile() {
    return airlock.log.getEntries();
}

/**
 * Deletes the log entries via a Promise.
 * @returns {number} The number of deleted log entries.
 * @see {@link airlock.log.deleteEntries}
 */
function JSCleanLogFile() {
    return airlock.log.deleteEntries();
}

/**
 * Causes the device to play its notification sound clip.
 * @see {@link airlock.device.beep}
 */
function JSBeep(/*onTime, offTime, freq, count*/) {
    airlock.device.beep();
}

/**
 * Causes the device to vibrate for 100 MS.
 * @see {@link airlock.device.vibrate}
 */
function JSVibrate(/*onTime, offTime, count*/) {
    airlock.device.vibrate();
}

/**
 * Gets a value indicating whether the display is currently locked.
 * The function requires device administration privilidges be assigned to the app.
 * You can do this via the Enterprise Administration screen within Airlock Browser.
 * @see {@link https://developer.android.com/guide/topics/admin/device-admin}
 * @exception {Exception} Occurs if Airlock Browser has not been
 * assigned device administration privileges.
 * @returns {Boolean} true if the screen is locked; false otherwise.
 * @see {@link airlock.device.isScreenLocked}
 */
function JSGetDisplaySleep() {
    return airlock.device.isScreenLocked();
}

/**
 * Engages or disengages the devices screen lock.
 * The function requires device administration privilidges be assigned to the app.
 * You can do this via the Enterprise Administration screen within Airlock Browser.
 * @param {boolean} enable If true the display is locked. If false, its unlocked.
 * @see {@link https://developer.android.com/guide/topics/admin/device-admin}
 * @exception {Exception} Occurs if Airlock Browser has not been
 * assigned device administration privileges.
 * @see {@link airlock.device.lockScreen}
 * @see {@link airlock.device.unlockScreen}
 */
function JSSetDisplaySleep(enable) {
    if (enable) {
        airlock.device.lockScreen();
    } else {
        airlock.device.unlockScreen();
    }
}

/**
 * Gets the screen orientation setting for the application.
 * Screen orientation can be set globally, for all tabs via the app settings screen;
 * for web applications, via the remote application dialog in the launchpad;
 * or individual pages, using this JavaScript API.
 * @returns {airlock.device.OrientationLockType} The orientation enumeration value.
 * 0 is unlocked, 1 is locked portrait, 2 is locked landscape, 3 is system controlled.
 * When the value is 3 (system controlled), an orientation value has not been set using this API
 * and the orientation lock cannot be determined because the current tab
 * may not be active. When 3, the locked or unlocked state is determined
 * by the configuration and/or user settings in the app.
 * @see {@link airlock.device.getOrientationLock}
 */
function JSGetAutoRotate() {
    return airlock.device.getOrientationLock();
}

/**
 * Sets the orientation for the browser tab, when it is active.
 * The value set via this function overrides any orientation lock values
 * from the settings within the app.
 * @param {number} mode 1 is unlocked, 2 is locked portrait, 3 is locked landscape.
 * @see {@link airlock.device.setOrientationLock}
 */
function JSSetAutoRotate(mode) {
    var lockType;
    switch (mode) {
        case 1:
            lockType = airlock.ui.OrientationLockType.UNLOCKED;
            break;
        case 2:
            lockType = airlock.ui.OrientationLockType.LOCK_PORTRAIT;
            break;
        case 3:
            lockType = airlock.ui.OrientationLockType.LOCK_LANDSCAPE;
            break;
        default:
            lockType = airlock.ui.OrientationLockType.SYSTEM_CONTROLLED;
    }
    airlock.device.setOrientationLock(lockType);
}

/**
 * Gets an object reprenting the device's power source and charging state.
 * @returns {PowerInfo} With fields representing the device's power source and charge level.
 * @see {@link airlock.device.getPower}
 */
function JSGetBatteryLevel() {
    return airlock.device.getPower();
}

/**
 * Gets the name of the app's UI language.
 * The name is a combination of an ISO 639 two-letter
 * lowercase culture code associated with a language
 * and an ISO 3166 two-letter uppercase subculture code
 * associated with a country or region.
 * For example, en-AU denotes Australian english.
 * @returns {string} A language code resembling 'en-AU'.
 * @see {@link airlock.device.getUILanguage}
 */
function JSGetDisplayLanguage() {
    return airlock.device.getUILanguage();
}

/**
 * Gets the information for the current network connection, if any.
 * @see {@link NetworkInfo}
 * @returns {NetworkInfo} The network connection information.
 * @see {@link airlock.device.getNetworkInfo}
 */
function JSGetCurrentSsid() {
    var info = airlock.device.getNetworkInfo();
    return info.ssid;
}

/**
 * Gets a promise that returns a list of WirelessNetwork objects.
 * @returns {Promise<Array.<WirelessNetwork>>} A promise that containing
 * a list of wireless networks when fulfilled.
 * The promis may take several seconds to resolve.
 * @see {@link airlock.device.getWirelessNetworks}
 */
function JSGetSsidList() {
    return airlock.device.getWirelessNetworks();
}

/**
 * Enables or disables wireless networking.
 * @param {number} mode If 1, WIFI is enabled; otherwise, it is disabled.
 * @see {@link airlock.networking.setWifiEnabled}
 */
function JSSetWifiPower(mode) {
    airlock.networking.setWifiEnabled(mode === 1 || mode === "1");
}

/**
 * Gets or sets whether the device
 * is able to connect to wireless networks.
 * @returns {number} 1 if able to connect; 0 otherwise.
 * @see {@link airlock.networking.isWifiEnabled}
 */
function JSGetWifiPower() {
    return airlock.networking.isWifiEnabled() ? 1 : 0;
}

/**
 * Gets a SystemInfo object containing various OS properties.
 * @returns {SystemInfo} Containing various OS properties.
 * @see {@link airlock.device.getSystemInfo}
 */
function JSGetSystemInfo() {
    return airlock.device.getSystemInfo();
}

/**
 * Launches the app specified by its package name.
 * A valid package name might be, for example, 'com.google.android.apps.photos'.
 * @param {string} packageName The Android package name of the app to open.
 * @see {@link airlock.device.launchApp}
 */
function JSLaunchApp(packageName) {
    airlock.device.launchApp(packageName);
}

/**
 * Exits the app and launches a third-party app
 * specified using its package name. If no package is specified,
 * the app just exits.
 * @param {string} [appPackageName] The package to launch upon exit.
 * @returns {boolean} True if the package exists; false otherwise.
 */
function JSCloseBrowser(appPackageName) {
    if (!appPackageName) {
        airlock.app.exit();
        return true;
    }

    if (!airlock.device.isPackageInstalled(appPackageName)) {
        return false;
    }

    airlock.app.exitAndLaunchApp(appPackageName);
    return true;
}

/**
 * Copies the file at the specified sourcePath to the destinationPath.
 * Returns a Promise that when resolved indicates that the file has finished
 * copying. If the Promise is rejected, an error is returned.
 * @param {string} sourcePath The path to the file that is to be copied.
 * @param {string} destinationPath The location of where to copy the file to.
 * @returns {Promise} Indicating completion or failure of the copy operation.
 * An error is produced by the Promise if an IO Exception is raised.
 * @see {@link airlock.io.copyFile}
 */
function JSCopyFile(sourcePath, destinationPath) {
    return airlock.io.copyFile(sourcePath, destinationPath);
}

/**
 * Deletes a file at the specified location.
 * Returns a promise indicating success or failure of the operation.
 * @param {string} path The location of the file to be deleted.
 * @returns {Promise} If the promise is rejected it indicates the delete was unsuccessful.
 * @see {@link airlock.io.deleteFile}
 */
function JSDeleteFile(path) {
    return airlock.io.deleteFile(path);
}

/**
 * Moves the file at the specified sourcePath to the destinationPath.
 * Returns a Promise that when resolved indicates that the file has finished
 * being moved. If the Promise is rejected, an error is returned.
 * @param {string} sourcePath The path to the file that is to be move from.
 * @param {string} destinationPath The location of where to move the file to.
 * @returns {Promise} Indicating completion or failure of the move operation.
 * An error is produced by the Promise if an IO Exception is thrown.
 * @see {@link https://docs.microsoft.com/en-us/dotnet/api/system.io.file.move}
 * @see {@link airlock.io.moveFile}
 */
function JSRenameFile(sourcePath, destinationPath) {
    return airlock.io.moveFile(sourcePath, destinationPath);
}

/**
 * Returns a Promise indicating if the file at the specified location, exists.
 * @param {string} path The path to the file. Cannot be null.
 * @returns {Promise<boolean>} True if the file exists; false otherwise.
 * @see {@link airlock.io.fileExists}
 */
function JSFileExists(path) {
    return airlock.io.fileExists(path);
}

/**
 * Gets Airlock Browser's files directory.
 * This is typically located at /data/data/com.outcoder.ibrowser/files
 * @returns {string} The path to the application's files directory.
 * @see {@link airlock.io.getAppFilesDirectory}
 */
function JSFileGetCurrentDir() {
    return airlock.io.getAppFilesDirectory();
}

/**
 * Gets the path to the shared directory on the device.
 * This may or may not be located on an SD card.
 * @returns {string} The path to the device's shared storage location for apps.
 * @see {@link https://developer.android.com/reference/android/os/Environment#getExternalStorageDirectory()}
 * @see {@link airlock.io.getExternalStorageDirectory}
 */
function JSFileGetSDDir() {
    return airlock.io.getExternalStorageDirectory();
}

/**
 * Use this function to open a file.
 * It returns a handle (file identifier) to the file, via a Promise.
 * Once the handle is obtained, the file can be written to
 * or read from using the identifer.
 * @param {string} path The path to the file.
 * @returns {Promise<number>} A promise that resolves to a file identifier.
 * @see {@link airlock.io.openFile}
 */
function JSFileOpen(path) {
    return airlock.io.openFile(path, 3);
}

/**
 * Use this function to create a file.
 * It returns a handle (file identifier) to the file, via a Promise.
 * Once the handle is obtained, the file can be written to using
 * the identifer.
 * @param {string} path The path to the file.
 * @returns {Promise<number>} A promise that resolves to a file identifier.
 * @see {@link airlock.io.openFile}
 */
function JSFileCreate(path) {
    return airlock.io.openFile(path, 1);
}

/**
 * Closes the file stream that is presently open for the file.
 * Upon closing a file, its handle becomes invalid.
 * @param {number} handle A file identifier for the file
 * that was previously returned from openFile.
 * @returns {Promise} A promise that when resolved confirms
 * that the file has been closed.
 * @see {@link airlock.io.closeFile}
 */
function JSFileClose(handle) {
    return airlock.io.closeFile(handle);
}

/**
 * Reads the contents of a file as bytes and returns them as a base64 string.
 * @param {number} handle The file identifier.
 * @param {number} length The length (in bytes) of the file to read.
 * @returns {Promise<string>} A promise that resolves
 * a base64 string read from the file.
 * @see {@link airlock.io.readBase64}
 */
function JSFileReadBase64(handle, length) {
    return airlock.io.readBase64(handle, length);
}

/**
 * Reads the contents of a file as text.
 * @param {number} handle The file identifier.
 * @param {number} length The length (in bytes) of the file to read.
  * @returns {Promise<string>} A promise that resolves a string of text
 * read from the file.
 * @see {@link airlock.io.readText}
 */
function JSFileRead(handle, length) {
    return airlock.io.readText(handle, length);
}

/**
 * Writes the specified base64 string to a file
 * with the specified handle (file identifier)
 * at the file's current offset.
 * @param {number} handle The file identifier.
 * @param {string} base64String The base64 text to write to the file.
 * @returns {Promise} A promise that when resolved
 * indicates success of the operation.
 * @see {@link airlock.io.writeBase64}
 */
function JSFileWriteBase64(handle, base64String) {
    return airlock.io.writeBase64(handle, base64String);
}

/**
 * Writes the specified text to a file
 * with the specified handle (file identifier)
 * at the file's current offset.
 * @param {number} handle The file identifier.
 * @param {string} text The text to write to the file.
 * @returns {Promise} A promise that when resolved
 * indicates success of the operation.
 * @see {@link airlock.io.writeText}
 */
function JSFileWriteText(handle, text) {
    return airlock.io.writeText(handle, text);
}

/**
 * Gets the current location (byte offset) within a file.
 * When a read or write operation is undertaken
 * it will occur at the location specified by the offset parameter.
 * @param {number} handle The file identifier.
 * @returns {number} The current offset in bytes.
 * @see {@link airlock.io.getFileOffset}
 */
function JSGetFileOffset(handle) {
    return airlock.io.getFileOffset(handle);
}

/**
 * Seeks to a location (byte offset) within a file.
 * After which, when a read or write operation is undertaken
 * it will occur at the location specified by the offset parameter.
 * @param {number} handle The file identifier.
 * @param {number} offset The offset in bytes to move to.
 * @see {@link airlock.io.seek}
 */
function JSFileSeek(handle, offset) {
    airlock.io.seek(handle, offset);
}

/**
 * Gets the size of a file in bytes.
 * @param {number} handle The file identifier.
 * @returns {number} The size of the file in bytes.
 * @see {@link airlock.io.getFileSizeBytes}
 */
function JSGetFileSize(handle) {
    return airlock.io.getFileSizeBytes(handle);
}

/**
 * Sets the navigation error action associate with the specified URL.
 * If a URL is not specified, the navigation error action for the current
 * remote web application is returned. And, if that is not specified,
 * the browser's navigation error action setting is returned.
 * @param {airlock.networking.NavigationErrorAction} [action]
 * The action to perform when a navigation error occurs.
 * @param {string} [url] The URL of the page for which
 * to determine the navigation error action. Can be undefined.
 * @see {@link airlock.browsing.setNavigationErrorAction}
 */
function JSSetHttpErrorAction(action, url) {
    airlock.browsing.setNavigationErrorAction(action, url);
}