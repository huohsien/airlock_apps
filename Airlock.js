/**
 * @file Provides a script interface for interacting with Airlock Browser
 * @version 1.0.0
 * @copyright Outcoder Sarl 2018. All Rights Reserved.
 */

/**
 * The root namespace for Airlock Browser.
 * @namespace 
 */
var airlock = airlock || {};

/**
 * @callback EventListener Called when an airlock.Event is fired.
 * @param {object} args An event argument object containing values
 * pertaining to the particular event.
 */

/**
 * @typedef airlock.Event
 * @type {object}
 * @property {function(EventListener):undefined} addListener
 * Adds a listener for the event. listener is a function that a
 * @property {function(EventListener):undefined} removeListener
 * Removes a previously added listener.
 */

/**
 * Provides licensing, updates, versioning, and APIs for exiting the app.
 * @namespace 
 */
airlock.app = {};

/**
 * @typedef AppVersion
 * @property {string} name The version name. For example "1.0".
 * @property {number} code The version code which is incremented upon
 * each release. A previous version has a lower version code.
 */

/**
 * Gets the version of Airlock Browser.
 * @returns {AppVersion} The app version,
 * containing a version name and code.
 */
airlock.app.getVersion = function () {
    return pageHost.ii.getResult("app.getVersion");
};

/**
 * Get a value indicating whether the app has a valid
 * license installed.
 * @returns {boolean} True if licensed; false otherwise.
 */
airlock.app.isLicensed = function() {
    return pageHost.ii.getResult("app.isLicensed");
};

/**
 * Sends the user to the Android home screen while minimizing the browser.
 */
airlock.app.minimize = function () {
    pageHost.ii.getResult("app.minimize", open);
};

/**
 * Causes the app to exit, and the user to be returned to the home screen.
 * @param {boolean} [showNotification] If true, a notification is displayed
 * to the user prior to exit. This helps to prevent the user from assuming
 * the app crashed. Default is true.
 */
airlock.app.exit = function (showNotification) {
    pageHost.ii.getResult("app.exit", showNotification);
};

/**
 * Causes the app to exit, and the app package to be launched if present
 * on the system.
 * @param {string} appPackageName The package name of an app that should
 * be launched after the app exits.
 * @param {boolean} [showNotification] If true, a notification is displayed
 * to the user prior to exit. This helps to prevent the user from assuming
 * the app crashed. Default is true.
 */
airlock.app.exitAndLaunchApp = function (appPackageName, showNotification) {
    pageHost.ii.getResult("app.exitAndLaunchApp", appPackageName, showNotification);
};

/**
 * Launches the app specified by its package name.
 * A valid package name might be, for example, 'com.google.android.apps.photos'.
 * @param {string} packageName The Android package name of the app to open.
 * @example
 * // Launch Google Photos app
 * airlock.device.launchApp('com.google.android.apps.photos');
 */
airlock.app.launchApp = function (packageName) {
    pageHost.ii.getResult("app.launchApp", packageName);
};

/* Scanning */

/**
 * Provides various functions for working with the hardware
 * barcode scanner.
 * @namespace
 */
airlock.scanning = {};

/**
 * Simulates pressing hardware trigger for the barcode reader.
 */
airlock.scanning.beginScan = function() {
    pageHost.ii.getResult("scanning.beginScan");
};

/**
 * Ends the simulated pressing of the hardware trigger.
 * @see {@link airlock.scanning.beginScan}
 */
airlock.scanning.endScan = function() {
    pageHost.ii.getResult("scanning.endScan");
};

/**
 * Retrieves the decoder with the specified name.
 * Device makers use different names for decoders. If you are uncertain
 * of the name, use getDecoderWithNativeId instead.
 * @see {@link airlock.scanning.getDecoderWithNativeId}
 * @param {string} decoderName The name of the decoder. Cannot be null.
 * @returns {object} The decoder object that may allow you to modify its state.
 * @see {@link airlock.scanning.setDecoder}
 * @example
 * var decoder = airlock.scanning.getDecoderWithName('codabar');
 * // Displays 'codabar'
 * alert(decoder.name);
 */
airlock.scanning.getDecoderWithName = function(decoderName) {
    pageHost.ii.assertArgNotNull(decoderName, "decoderName");
    return pageHost.ii.getResult("scanning.getDecoderWithName", decoderName);
};

/**
 * Retrieves the decoder with the specified native identifier,
 * corresponding to the ID within the device SDK.
 * @param {int} id The id of the decoder. Cannot be null.
 * @returns {object} The decoder object that may allow you to modify its state.
 * @see {@link airlock.scanning.setDecoder}
 * @example
 * var codabarDecoder = airlock.scanning.getDecoderWithNativeId(71);
 * // Displays 'codabar'
 * alert(decoder.name);
 */
airlock.scanning.getDecoderWithNativeId = function(id) {
    pageHost.ii.assertArgNotNull(id, "id");
    return pageHost.ii.getResult("scanning.getDecoderWithNativeId", id);
};

/**
 * Retrieves all decoders via a Promise.
 * @returns {Promise<Array.<object>>} A list of all decoders.
 * @example
 * airlock.scanning.getDecoders()
 * .then(function (decoders) {
 *		var text = "";
 *		for (let i = 0; i < decoders.length; i++) {
 *			text += decoders[i].name + ", ";
 *		}
 *		alert(text);
 *	}).catch(function (error) {
 *		alert(`Error: ${error}`);
 *	});
 */
airlock.scanning.getDecoders = function() {
    return hsv12Private.makePromise("scanning.getDecoders");
};

/**
 * Sets the values of a decoder.
 * @param {object} decoder The decoder object. Cannot be null.
 * @throws {Exception} If the device SDK is not supported.
 * @example
 * var codabarDecoder = airlock.scanning.getDecoderWithNativeId(71);
 * codabarDecoder.enabled = true;
 * codabarDecoder.notisEditingType = 1;
 * codabarDecoder.lengthMin = 10;
 * airlock.scanning.setDecoder(codabarDecoder);
 */
airlock.scanning.setDecoder = function(decoder) {
    pageHost.ii.assertArgNotNull(decoder, "decoder");
    pageHost.ii.getResult("scanning.setDecoder", decoder);
};

/**
 * Returns the scanner configuration as an object.
 * Fields can be set, and the configuration can be applied using setConfiguration.
 * @see {@link airlock.scanning.setConfiguration}
 * @return {object} The reader configuration.
 * @example
 * var config = airlock.scanning.getConfiguration();
 * // Displays false
 * alert(config.displayMode);
 */
airlock.scanning.getConfiguration = function() {
    return pageHost.ii.getResult("scanning.getConfiguration");
};

/**
 * Applies the specified scanner configuration to the device.
 * @param {object} configuration The barcode reader configuration.
 * @exception {ScriptCallException} Thrown if the device SDK is not supported.
 * @example
 * var config = airlock.scanning.getConfiguration();
 * config.displayMode = true;
 * airlock.scanning.setConfiguration(config);
 */
airlock.scanning.setConfiguration = function(configuration) {
    pageHost.ii.assertArgNotNull(configuration, "configuration");
    pageHost.ii.getResult("scanning.setConfiguration", configuration);
};

/**
 * Resets the scanner configuration. Resets the current devices configuration
 * and removes any settings stored for the barcode reader, including
 * decoder settings and so forth. An app restart may be required by
 * some device brands.
 * @returns {Promise<boolean>} When resolved indicates the reset is complete.
 * If the resolve value is true, the new configuration has been applied.
 * If false, an app restart is required.
 * @example
 * airlock.scanning.resetConfiguration()
 * .then(function (defaultSettingsApplied) {
 *		alert("Configuration reset."
			+ (defaultSettingsApplied ? "" : "Restart required."));
 * }).catch(function (e) {
 *		alert("Error: " + e);
 *});
 */
airlock.scanning.resetConfiguration = function() {
    return hsv12Private.makePromise("scanning.resetConfiguration");
};

/**
 * Gets a value indicating whether the scanner is ready.
 * @returns {boolean} true if the scanner is started and usable; false otherwise.
 * @example
 * var active = airlock.scanning.isScannerActive();
 * // Display true if active; false otherwise.
 * alert(active);
 */
airlock.scanning.isScannerActive = function() {
    return pageHost.ii.getResult("scanning.isScannerActive");
};

/**
 * Starts or stops the scanner.
 * @param {boolean} active If true the scanner is placed in a started state.
 * If false, the scanner is stopped.
 */
airlock.scanning.setScannerActive = function(active) {
    pageHost.ii.getResult("scanning.setScannerActive", active);
};

/**
 * Gets the reader model as reported by the device SDK.
 * @returns {string} The reader type as reported by the device SDK.
 */
airlock.scanning.getReaderModel = function() {
    return pageHost.ii.getResult("scanning.getReaderModel");
};

/**
 * Gets the reader firmware version as reported by the device SDK.
 * @returns {string} The reader firmware version as reported by the device SDK.
 */
airlock.scanning.getFirmwareVersion = function() {
    return pageHost.ii.getResult("scanning.getFirmwareVersion");
};

/**
 * Gets the API version of the device SDK. This value is retrieved
 * from the device SDK itself.
 * @returns {string} The API version reported by the device SDK.
 */
airlock.scanning.getApiVersion = function() {
    return pageHost.ii.getResult("scanning.getApiVersion");
};


/**
 * @typedef ScanEventArgs
 * @property {string} rawDataInBase64 The raw barcode data in Base64 format (if available).
 * @property {string} text The processed barcode data.
 * @property {string|Number} nativeSymbologyId The identifier used
 * in the device manufacturer's SDK for a symbology.
 * @property {string} symbologyName The symbology name, such as 'Code11'.
 * @property {string} sourceScanner The reader ID (if available).
 * @property {number} insertMode Replace = 0, Append = 1, Prepend = 2.
 * Determines the behaviour of the barcode wedge and whether it overwrites,
 * appends, or prepends a text field with the scanned text.
 * @property {boolean} moveToNextField If true, after the scan,
 * the browser will attempt to move to the next field on the page.
 * @property {boolean} keyboardWedgeEnabled If true, it indicates
 * that the app may attempt to populate the current field with the barcode text.
 * @property {Date} timestamp Indicates when the scan occured.
 */

/**
 * onScan Event. Is raised when the barcode reader receives scan data.
 * To subscribe to the event use:
 *		airlock.device.onScan.addListener(aFunction)
 * To unsubscribe to the event use:
 *		airlock.device.onScan.removeListener(aFunction)
 * @event
 * @type {ScanEventArgs}
 * @example
 * // Subscribe
 * airlock.scanning.onScan.addListener(handleScan);
 *
 * function handleScan(args) {
 *		// Displays the barcode data.
 *		alert(args.text);
 * }
 * // Unsubscribe
 * airlock.scanning.onScan.removeListener(handleScan);
 */
airlock.scanning.onScan = pageHost.ii.registerEvent('scanning.onScan');

/**
 * @typedef ScanErrorEventArgs
 * @property {object} errorInfo SDK depenedent information regarding the error.
 * @property {Date} timestamp Indicates when the scan failed.
 */

/**
 * onScanError Event. Is raised when the barcode reader fails to scan a barcode.
 * To subscribe to the event use:
 *		airlock.device.onScanError.addListener(aFunction)
 * To unsubscribe to the event use:
 *		airlock.device.onScanError.removeListener(aFunction)
 * @event
 * @type {ScanErrorEventArgs}
 * @example
 * // Subscribe
 * airlock.scanning.onScanError.addListener(handleScanError);
 *
 * function handleScanError(args) {
 *		// Display error info (if exists)
 *		alert(args.errorInfo);
 * }
 * @example
 * // Unsubscribe
 * airlock.scanning.onScanError.removeListener(handleScanError);
 */
airlock.scanning.onScanError = pageHost.ii.registerEvent('scanning.onScanError');

/* Device */

/**
 * Provides functions for interacting with the device at the OS level.
 * @namespace
 */
airlock.device = {};

/**
 * Obtains the screen brightness, which is a float value
 * between 0 and 1.
 * @returns {float} brightness between 0 and 1.
 */
airlock.device.getBrightness = function() {
    return pageHost.ii.getResult("device.getBrightness");
};

/**
 * Sets the screen brightness to a value between 0 and 1.
 * The specified value is clamped between 0.1 and 1
 * to prevent the device being unusable.
 * @param {number} brightness A value between 0 and 1.
 */
airlock.device.setBrightness = function(brightness) {
    pageHost.ii.getResult("device.setBrightness", brightness);
};

/**
 * Enum RingerMode
 * @enum {number}
 * @readonly
 */
airlock.device.RingerMode = {
    /** Ringer mode that may be audible and may vibrate.
	 * It will be audible if the volume before changing out of this mode was audible.
	 * It will vibrate if the vibrate setting is on.
	 */
    NORMAL: 2,
    /** Ringer mode that will be silent and will not vibrate.
	 * (This overrides the vibrate setting.)
	 */
    SILENT: 0,
    /** Ringer mode that will be silent and will vibrate.
	 * (This will cause the phone ringer to always vibrate,
	 * but the notification vibrate to only vibrate if set.)
	 */
    VIBRATE: 1
};

/**
 * Gets the ringer mode of the device.
 * Ringer mode determines how the phone behaves when a call
 * is incoming. Ringer mode may be 2 (normal), 0 (silent), or 1 (vibrate).
 * @returns {airlock.device.RingerMode} 2 (normal), 0 (silent), or 1 (vibrate)
 */
airlock.device.getRingerMode = function() {
    return pageHost.ii.getResult("device.getRingerMode");
};

/**
 * Sets the ringer mode of the device.
 * Ringer mode determines how the phone behaves when a call
 * is incoming. Ringer mode may be 2 (normal), 0 (silent), or 1 (vibrate).
 * @param {airlock.device.RingerMode} mode Allowed values are
 * 2 (normal), 0 (silent), or 1 (vibrate)
 * @example
 * // Set the ringer mode to vibrate.
 * airlock.device.setRingerMode(airlock.device.RingerMode.VIBRATE);
 */
airlock.device.setRingerMode = function(mode) {
    pageHost.ii.getResult("device.setRingerMode", mode);
};

/**
 * Enum StreamType
 * @enum {number}
 * @readonly
 */
airlock.device.StreamType = {
    /** Suggests using the default stream type.
	 * This may not be used in all places a stream type is needed. */
    NOTIFICATION_DEFAULT: -1,
    /** Used to identify the volume of audio streams for phone calls. */
    VOICE_CALL: 0,
    /** Used to identify the volume of audio streams for system sounds. */
    SYSTEM: 1,
    /** Used to identify the volume of audio streams for the phone ring. */
    RING: 2,
    /** Used to identify the volume of audio streams for music playback. */
    MUSIC: 3,
    /** Used to identify the volume of audio streams for alarms. */
    ALARM: 4,
    /** Used to identify the volume of audio streams for notifications. */
    NOTIFICATION: 5,
    /** Used to identify the volume of audio streams for DTMF Tones.
	 * Dual-tone multi-frequency (DTMF) tones are used by automated
	 * dial-in systems such as voicemail or where prompts are used to navigate. */
    DTMF: 8
};

/**
 * Gets a value between 0 and the maximum volume, which can be
 * retrieved using the getMaxVolume function.
 * @param {airlock.device.StreamType} streamType
 * Indicates the source of the volume.
 * @returns {number} A number between zero and getMaxVolume()
 * @see {@link airlock.device.getMaxVolume}
 * @example
 * // Gets the music stream volume.
 * var value = airlock.device.getVolume(airlock.device.StreamType.MUSIC);
 */
airlock.device.getVolume = function(streamType) {
    return pageHost.ii.getResult("device.getVolume", streamType);
};

/**
 * Sets a value between 0 and the maximum volume, which can be
 * retrieved using the getMaxVolume function.
 * @param {airlock.device.StreamType} streamType
 * Indicates the source of the volume.
 * @param {number} volume A value between 0 and the maximum volume,
 * which can be retrieved using the getMaxVolume function.
 * @example
 * // Get the maximum music volume.
 * var maxVolume = airlock.device.getMaxVolume(airlock.device.StreamType.MUSIC);
 * // Set the music stream to maximum volume.
 * airlock.device.setVolume(airlock.device.StreamType.MUSIC, value);
 */
airlock.device.setVolume = function(streamType, volume) {
    pageHost.ii.getResult("device.setVolume", streamType, volume);
};

/**
 * Gets the highest volume value that can be applied using
 * the setVolume() function.
 * @see {@link airlock.device.setVolume}
 * @param {airlock.device.StreamType} streamType
 * Indicates the source of the volume.
 * @returns {number} The maximum volume.
 * @example
 * // Get the maximum music volume.
 * var maxVolume = airlock.device.getMaxVolume(airlock.device.StreamType.MUSIC);
 */
airlock.device.getMaxVolume = function(streamType) {
    return pageHost.ii.getResult("device.getMaxVolume", streamType);
};

/**
 * Causes the device to play its notification sound clip.
 */
airlock.device.beep = function() {
    pageHost.ii.getResult("device.beep");
};

/**
 * Causes the device to vibrate for the specified duration.  
 * @param {number} [durationMS] The duration for which to vibrate,
 * in milliseconds. If not specified, a value of 100 MS is used.
 */
airlock.device.vibrate = function(durationMS) {
    pageHost.ii.getResult("device.vibrate", durationMS);
};

/**
 * Gets the length of time in milliseconds following user inactivity
 * where the OS deems the user to be inactive, and locks the screen.
 * @returns {number} The length of time in milliseconds.
 */
airlock.device.getScreenTimeoutMS = function() {
    return pageHost.ii.getResult("device.getScreenTimeoutMS");
};

/**
 * Sets the length of time in milliseconds following user inactivity
 * where the OS deems the user to be inactive, and locks the screen.
 * @param {number} timeoutMS The length of time in milliseconds.
 */
airlock.device.setScreenTimeoutMS = function(timeoutMS) {
    pageHost.ii.getResult("device.setScreenTimeoutMS", timeoutMS);
};

/**
 * @typedef DisplayInfo
 * @property {number} widthPixels Width of the screen in pixels.
 * @property {number} heightPixels Height of the screen in pixels.
 * @property {number} density The logical density of the display.
 * @property {number} scaledDensity A scaling factor for fonts on the display.
 * @property {number} widthDpi The physical pixels per inch of the screen in the X dimension.
 * @property {number} heightDpi The physical pixels per inch of the screen in the Y dimension.
 * @property {number} densityDpi The screen density expressed as dots per inch.
 */

/**
 * @typedef SystemInfo
 * @property {string} manufacturer The manufacturer of the device.
 * @property {string} brand The brand of the device.
 * @property {string} model The model of the device.
 * @property {string} board The name of the underlying board, like 'goldfish'.
 * @property {string} hardware The name of the hardware
 *		(from the kernal command line or /proc).
 * @property {string} serial A hardware serial, if available.
 * @property {string} deviceId A unique identifier for the device.
 *		This value may change with a factory reset.
 * @property {string} apiLevel The Android build level (the SdkInt).
 * @property {string} sdk The Android build name. For example 'kitkat'.
 * @property {string} buildId Either a changelist number or a number like "M4-rc20"
 * @property {string} buildTime A long value that is a Unix epoch timestamp
 *		(in milliseconds) indicating when the device's ROM was built
 * @property {string} buildVersion The OS's user-visible version string.
 *		E.g., "1.0" or "3.4b5".
 * @property {DisplayInfo} displayInfo Indicates the properties of the device display.
 */


/**
 * Gets a SystemInfo object containing various OS properties.
 * @returns {SystemInfo} Containing various OS properties.
 */
airlock.device.getSystemInfo = function() {
    return pageHost.ii.getResult("device.getSystemInfo");
};

/**
 * Gets a value indicating whether the specified package
 * exists on the system.
 * @param {string} packageName The package name.
 * For example, 'com.google.android.apps.photos'.
 * @returns {boolean}
 * True if the package is installed on the system; false otherwise.
 * @example
 * var installed = airlock.device.isPackageInstalled('com.google.android.apps.photos');
 * alert(installed ? "Installed" : "Not Installed");
 */
airlock.device.isPackageInstalled = function (packageName) {
    return pageHost.ii.getResult("device.isPackageInstalled", packageName);
};

/**
 * Gets a value indicating whether the display is currently locked.
 * The function requires device administration privilidges be assigned to the app.
 * You can do this via the Enterprise Administration screen within Airlock Browser.
 * @see {@link https://developer.android.com/guide/topics/admin/device-admin}
 * @exception {Exception} Occurs if Airlock Browser has not been
 * assigned device administration privileges.
 * @returns {Boolean} true if the screen is locked; false otherwise.
 */
airlock.device.isScreenLocked = function() {
    return pageHost.ii.getResult("device.isScreenLocked");
};

/**
 * Engages the devices screen lock.
 * The function requires device administration privilidges be assigned to the app.
 * You can do this via the Enterprise Administration screen within Airlock Browser.
 * @see {@link https://developer.android.com/guide/topics/admin/device-admin}
 * @exception {Exception} Occurs if Airlock Browser has not been
 * assigned device administration privileges.
 */
airlock.device.lockScreen = function() {
    pageHost.ii.getResult("device.lockScreen");
};

/**
 * Disengages the devices screen lock.
 * The function requires device administration privilidges be assigned to the app.
 * You can do this via the Enterprise Administration screen within Airlock Browser.
 * @see {@link https://developer.android.com/guide/topics/admin/device-admin}
 * @exception {Exception} Occurs if Airlock Browser
 * has not been assigned device administration privileges.
 */
airlock.device.unlockScreen = function() {
    pageHost.ii.getResult("device.unlockScreen");
};

/**
 * Enum PowerSource 
 * @enum {number}
 * @readonly
 */
airlock.device.PowerSource = {
    /** A battery power source. */
    BATTERY: 0,
    /** An external power supply such as mains power. */
    EXTERNAL: 1
};

/**
 * Enum BatteryState
 * @type {number}
 * @readonly
 */
airlock.device.BatteryState = {
    /** The battery state is unknown. */
    UNKNOWN: 0,
    /** Indicates the unit is charging. */
    CHARGING: 1,
    /** Indicates the battery is running down. */
    DISCHARGING: 2,
    /** Battery is fully charged. */
    FULL: 4,
    /** Battery is not charging. */
    NOT_CHARGING: 8
};

/**
 * @typedef PowerInfo
 * @property {airlock.device.PowerSource} powerSource 0 is battery, 1 is external (mains power)
 * @property {number} remainingBatteryMinutes
 * An estimate of the number of minutes of remaining battery charge.
 * @property {number} remainingBatteryPercent
 * A value between 0 and 100 indicating the battery charge remaining.
 * Note that this value may not be indicative of the time until
 * the device runs out of charge, as the device may be connected
 * to mains power and charging. See the batteryState value.
 * @property {airlock.device.BatteryState} batteryState
 * Indicates the charging state of battery.
 */

/**
 * Gets an object reprenting the device's power source and charging state.
 * @returns {PowerInfo} With fields representing the device's power source and charge level.
 * @example
 * var powerInfo = airlock.device.getPower();
 * // Test for external power source.
 * if (powerInfo.powerSource === airlock.device.PowerSource.EXTERNAL) {
 *		// Perform power intensive task.
 * }
 */
airlock.device.getPower = function() {
    return pageHost.ii.getResult("device.getPower");
};

/**
 * onPowerChanged Event. Is raised when the devices power source is changed;
 * the device is plugged-in to mains power for example.
 * It is also raised when the battery level changes.
 * To subscribe to the event use:
 *		airlock.device.onPowerChanged.addListener(function (powerInfo) {})
 * To unsubscribe to the event use:
 *		airlock.device.onPowerChanged.removeListener(afunctionReference)
 * @event
 * @type {PowerInfo}
 * @example
 * // Subscribe to event
 * airlock.device.onPowerChanged.addListener(handlePowerChanged);
 *
 * function handlePowerChanged(args) {
 *		if (args.powerSource === airlock.device.PowerSource.BATTERY) {
 *			// Using battery. Display remaining battery percentage.
 *			alert(args.remainingBatteryPercent)
 *		}
 * }
 *
 * // Unsubscribe
 * airlock.device.onPowerChanged.removeListener(handlePowerChanged);
 */
airlock.device.onPowerChanged = pageHost.ii.registerEvent("device.onPowerChanged");


/* Printing */

/**
 * Provides for printing of documents.
 * @namespace 
 */
airlock.printing = {};

/**
 * Displays the print dialog, allowing the user to send the page to the printer.
 * @returns {Primise} When resolved, the print request has been handed to the OS,
 * which ordinarily displays a print dialog.
 * @example
 * airlock.printing.printPage()
 * .then(function () {
 *		alert('Print request sent to OS');
 * }).catch(function (e) {
 *		alert("Error sending print request " + e);
 * });
 */
airlock.printing.printPage = function () {
    return hsv12Private.makePromise("printing.printPage");
};


/* Speech */

/**
 * Provides text-to-speech services.
 * @namespace 
 */
airlock.speech = {};

/**
 * Uses the devices text-to-speech capability to speek the specified text.
 * @param {string} text The text to speek.
 */
airlock.speech.speakText = function (text) {
    pageHost.ii.getResult("speech.speakText", text);
};

/* UI */

/**
 * Provides various functions and events for working
 * with the browser user interface.
 * @namespace 
 */
airlock.ui = {};

/**
 * Gets the name of the app's UI language.
 * The name is a combination of an ISO 639 two-letter
 * lowercase culture code associated with a language
 * and an ISO 3166 two-letter uppercase subculture code
 * associated with a country or region.
 * For example, en-AU denotes Australian english.
 * @returns {string} A language code resembling 'en-AU'.
 */
airlock.ui.getUILanguage = function() {
    return pageHost.ii.getResult("ui.getUILanguage");
};

/**
 * Get a value indicating whether the app is in full screen mode.
 * When full screen, the app's application bar is reduced to an ellipsis
 * and the tabs are hidden.
 * @returns {boolean} true if the browser is in full screen mode; false otherwise.
 * @see {@link airlock.ui.setFullScreen}
 */
airlock.ui.isFullScreen = function() {
    return pageHost.ii.getResult("ui.isFullScreen");
};

/**
 * Changes the apps full screen mode.
 * When full screen, the app's application bar is reduced to an ellipsis
 * and the tabs are hidden.
 * @see {@link airlock.ui.isFullScreen}
 * @param {boolean} fullScreen The new setting.
 * If the value matches the current state, there is no effect.
 * @exception {Exception} Occurs if fullScreen argument is undefined.
 */
airlock.ui.setFullScreen = function(fullScreen) {
    pageHost.ii.getResult("ui.setFullScreen", fullScreen);
};

/**
 * Gets a value indicating whether the sliding panel,
 * containing web applications, is visible.
 * @returns {boolean} true if the launchpad is open; false otherwise.
 */
airlock.ui.isLaunchpadOpen = function() {
    return pageHost.ii.getResult("ui.isLaunchpadOpen");
};

/**
 * Changes the open state of the launchpad from opened to closed and vice versa.
 * @param {boolean} open The new value. If the state of the launchpad matches
 * the value of the parameter, no change occurs.
 * @exception {Exception} Occurs if argument is undefined.
 */
airlock.ui.setLaunchpadOpen = function(open) {
    pageHost.ii.getResult("ui.setLaunchpadOpen", open);
};

/**
 * Enum OrientationLockType
 * @enum {number}
 * @readonly
 */
airlock.ui.OrientationLockType = {
    /**
	 * Indicates the orientation is dynamic and free
	 * to be rotated to portrait or landscape.
	 */
    UNLOCKED: 0,
    /** The browser tab is locked to the portrait orientation. */
    LOCK_PORTRAIT: 1,
    /** The browser tab is locked to the landscape orientation. */
    LOCK_LANDSCAPE: 2,
    /**
	 * The locked or unlocked state is determined
	 * by the configuration and/or user settings in the app.
	 */
    SYSTEM_CONTROLLED: 3
};

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
 */
airlock.ui.getOrientationLock = function() {
    return pageHost.ii.getResult("ui.getOrientationLock");
};

/**
 * Sets the orientation for the browser tab, when it is active.
 * The value set via this function overrides any orientation lock values
 * from the settings within the app.
 * Passing null to this function unsets any previously set value and causes
 * the browser to fall back to remote web application, or browser, settings.
 * Screen orientation can be set globally, for all tabs via the app settings screen;
 * for web applications, via the remote application dialog in the launchpad;
 * or individual pages, using this JavaScript API.
 * @param {airlock.ui.OrientationLockType} lockType
 * The orientation enumeration value.
 * 0 is unlocked, 1 is locked portrait, 2 is locked landscape,
 * 3 is system controlled.
 * When the value is 3 (system controlled), an orientation value
 * has not been set using this API and the orientation lock
 * cannot be determined because the current tab
 * may not be active. When 3, the locked or unlocked state is determined
 * by the configuration and/or user settings in the app.
 */
airlock.ui.setOrientationLock = function(lockType) {
    pageHost.ii.getResult("ui.setOrientationLock", lockType);
};

/* Networking */

/**
 * Provides functions and events for working
 * with the network capabilities of a device.
 * @namespace
 */
airlock.networking = {};

/**
 * Enum for network connection type values.
 * @enum {number}
 * @readonly
 */
airlock.networking.NetworkConnectionType = {
    /** No network connection. */
    NONE: 0,
    /** Connected to a local area network. */
    LAN: 1,
    /** Connected to a mobile broadband network. */
    MOBILE_BROADBAND: 2
};

/**
 * @typedef NetworkInfo
 * @type {object}
 * @property {boolean} approachingDataLimit Gets a value indicating whether
 * the mobile broadband account is approaching a data limit.
 * In which case, usage should be minimized.
 * @property {boolean} connected Gets a value indicating if the application
 * has a network connection for transmitting data.
 * @property {boolean} limitData Gets a value indicating whether
 * application data usage should be minimized.
 * @property {airlock.networking.NetworkConnectionType} networkConnectionType
 * The type of network connection. It can be 0 (none), 1 (lan), or 2 (mobile broadband).
 * @property {boolean} roaming Gets a value indicating whether
 * the mobile broadband account is relying on a third-party telecom;
 * which may mean increased data usage costs for the user.
 * If <c>true</c>, usage should be minimized.
 * @property {string} ssid The Service Set Identifier. SSID is a case sensitive,
 * 32 alphanumeric character unique identifier attached to the header
 * of packets sent over a wireless local-area network (WLAN).
 * @property {boolean} wifiEnabled Gets or sets whether the device
 * is able to connect to wireless networks.
 */

/**
 * Gets the information for the current network connection, if any.
 * @see {@link NetworkInfo}
 * @returns {NetworkInfo} The network connection information.
 * @example
 * var info = airlock.networking.getNetworkInfo();
 * // Display the SSID
 * alert(info.ssid);
 */
airlock.networking.getNetworkInfo = function() {
    return pageHost.ii.getResult("networking.getNetworkInfo");
};

/**
 * @typedef WirelessNetwork
 * @type {object}
 * @property {string} bssid The address of the access point.
 * @property {string} ssid The Service Set Identifier.
 * SSID is a case sensitive, 32 alphanumeric character unique identifier attached
 * to the header of packets sent over a wireless local-area network(WLAN).
 * @property {string} capabilities Describes the authentication, key management
 * and encryption schemes supported by the access point.
 * @property {string} isPasspointNetwork Gets a value indicating if this network
 * is a passpoint network, which is an improved method for connecting
 * to Wi-Fi hotspots from the Wi-Fi Alliance.
 * @property {number} level The detected signal level in dBm, also known as the RSSI.
 * @property {string} operatorFriendlyName The user readable name of the network.
 * The name can be up to 64 alphanumeric characters, and can include
 * special characters and spaces. If the name includes quotation marks ("),
 * include a backslash character (\) before each quotation mark. (e.g. \"example\")
 */

/**
 * Gets a promise that returns a list of WirelessNetwork objects.
 * @returns {Promise<Array.<WirelessNetwork>>} A promise that containing
 *		a list of wireless networks when fulfilled.
 *		The promis may take several seconds to resolve.
 * @example
 * airlock.networking.getWirelessNetworks()
 * .then(function (result) {
 *		var text = '';
 *		// Get the SSID's for each network.
 *		for (var i = 0; i < result.length; i++) {
 *			var network = result[i];
 *			text += network.ssid + "\n";
 *		}
 *		alert(text);
 * }).catch(function (error) {
 *		alert("Error: " + error);
 * });
 */
airlock.networking.getWirelessNetworks = function() {
    return hsv12Private.makePromise("networking.getWirelessNetworksAsync");
};

/**
 * Gets or sets whether the device
 * is able to connect to wireless networks.
 * @returns {boolean} True if able to connect; false otherwise.
 */
airlock.networking.isWifiEnabled = function() {
    return pageHost.ii.getResult("networking.isWifiEnabled");
};

/**
 * Enables or disables wireless networking.
 * @param {boolean} enabled If true, WIFI is enabled; false, it is disabled.
 */
airlock.networking.setWifiEnabled = function(enabled) {
    pageHost.ii.getResult("networking.setWifiEnabled", enabled);
};

/**
 * onConnectionChanged Event. This event is raised when the device
 * connects or disconnects to/from a network.
 * To subscribe to the event use:
 *		airlock.networking.onConnectionChanged.addListener(function (networkInfo) {})
 * To unsubscribe to the event use:
 *		airlock.networking.onConnectionChanged.removeListener(afunctionReference)
 * @event
 * @type {NetworkInfo}
 * @example
 * // Subscribe to event
 * airlock.networking.onConnectionChanged.addListener(handleConnectionChanged);
 *
 * function handleConnectionChanged(args) {
 *		// Display whether the device is connected to a network.
 *		alert(args.connected);
 * }
 *
 * // Unsubscribe
 * airlock.networking.onConnectionChanged.removeListener(handleConnectionChanged);
 */
airlock.networking.onConnectionChanged = pageHost.ii.registerEvent("networking.onConnectionChanged");

/* Browsing */

/**
 * Allows modification of the user's web browsing experience.
 * @namespace 
 */
airlock.browsing = {};

/**
 * Enum for navigation error action.
 * @enum {number}
 * @readonly
 */
airlock.networking.NavigationErrorAction = {
    /** Displays the error page. */
    REDIRECT_TO_ERROR_PAGE: 0,
    /** Prevents navigation to the page and does not display an error. */
    PREVENT_NAVIGATION: 1
};

/**
 * Gets the navigation error action associate with the URL, if specified.
 * If a URL is not specified, the navigation error action for the current
 * remote web application is returned. And, if that is not specified,
 * the browser's navigation error action setting is returned.
 * @param {string} [url] The URL of the page for which
 * to determine the navigation error action. Can be undefined.
 * @returns {airlock.networking.NavigationErrorAction}
 * The error action that is employed when a navigation error occurs.
 */
airlock.browsing.getNavigationErrorAction = function(url) {
    return pageHost.ii.getResult("browsing.getNavigationErrorAction", url);
};

/**
 * Sets the navigation error action associate with the specified URL.
 * If a URL is not specified, the navigation error action for the current
 * remote web application is returned. And, if that is not specified,
 * the browser's navigation error action setting is returned.
 * @param {airlock.networking.NavigationErrorAction} [action]
 * The action to perform when a navigation error occurs.
 * @param {string} [url] The URL of the page for which
 * to determine the navigation error action. Can be undefined.
 * @example
 * // Prevent navigation from a page with a broken link.
 * airlock.browsing.setNavigationErrorAction(
 *		airlock.networking.NavigationErrorAction.PREVENT_NAVIGATION,
 *		"http://www.example.com/PageWith404.html");
 */
airlock.browsing.setNavigationErrorAction = function(action, url) {
    pageHost.ii.getResult("browsing.setNavigationErrorAction", action, url);
};

/**
 * Gets the text zoom level for the page, which is a positive floating point number,
 * where 1.0 is normal size. 2.0 is double the normal size. 
 * @returns {number} The text zoom level,
 * which is greater than 0; where 1.0 is normal size. 
 */
airlock.browsing.getTextZoomLevel = function() {
    return pageHost.ii.getResult("browsing.getTextZoomLevel");
};

/**
 * Sets the text zoom level for the page, which is a positive floating point number,
 * where 1.0 is normal size. 2.0 is double the normal size.
 * @param {number} level The text zoom level,
 * which is greater than 0; where 1.0 is normal size.
 */
airlock.browsing.setTextZoomLevel = function(level) {
    pageHost.ii.getResult("browsing.setTextZoomLevel", level);
};


/* Logging */

/**
 * Provides persistent logging capabilities.
 * @namespace 
 */
airlock.log = {};

/**
 * Enum LogLevel
 * @enum {number}
 * @readonly
 */
airlock.log.LogLevel = {

    /** The least restrictive level. */
    ALL: 0,
    /** For debugging purposes. More verbose than the Info level
	* and less verbose than the Trace level. */
    DEBUG: 2,
    /** Signifies verbose information. More verbose than the Warn level
	* and less verbose than the Debug level. */
    INFO: 4,
    /** Signifies a warning from e.g. an unexpected event. */
    WARN: 8,
    /** When an application error occurs. */
    ERROR: 16,
    /** When the application is no longer
	* able to function or is in an unreliable state.
	* Highly restrive logging. */
    FATAL: 32,
    /** Logging is disabled. */
    NONE: 64
};

/**
 * Sets the minimum log level
 * @param {airlock.log.LogLevel} level Any log messages below this threshold are ignored.
 * @example
 * // Limit logging to warning message or higher.
 * airlock.log.setMinLevel(airlock.log.LogLevel.WARN);
 */
airlock.log.setMinLevel = function(level) {
    pageHost.ii.getResult("log.setMinLevel", level);
};

/**
 * Writes a log entry at the LogLevel.DEBUG level.
 * The log entry is not processed if the minimum log level
 * is greater than the DEBUG level.
 * @param {string} message The text content to write to the log.
 * @param {string} [error] An error associated with the entry. Can be null.
 * @see {@link airlock.log.LogLevel}
 * @example
 * airlock.log.debug("Message from my web page");
 */
airlock.log.debug = function(message, error) {
    pageHost.ii.log.writeLog(2, message, error, 1);
};

/**
 * Writes a log entry at the LogLevel.INFO level.
 * The log entry is not processed if the minimum log level
 * is greater than the INFO level.
 * @param {string} message The text content to write to the log.
 * @param {string} [error] An error associated with the entry. Can be null.
 * @see {@link airlock.log.LogLevel}
 * @example
 * airlock.log.info("Message from my web page");
 */
airlock.log.info = function(message, error) {
    pageHost.ii.log.writeLog(4, message, error, 1);
};

/**
 * Writes a log entry at the LogLevel.WARN level.
 * The log entry is not processed if the minimum log level
 * is greater than the WARN level.
 * @param {string} message The text content to write to the log.
 * @param {string} [error] An error associated with the entry. Can be null.
 * @see {@link airlock.log.LogLevel}
 * @example
 * airlock.log.warn("Message from my web page", error);
 */
airlock.log.warn = function(message, error) {
    pageHost.ii.log.writeLog(8, message, error, 1);
};

/**
 * Writes a log entry at the LogLevel.ERROR level.
 * The log entry is not processed if the minimum log level
 * is greater than the ERROR level.
 * @param {string} message The text content to write to the log.
 * @param {string} [error] An error associated with the entry. Can be null.
 * @see {@link airlock.log.LogLevel}
 * @example
 * airlock.log.info("Message from my web page", error);
 */
airlock.log.error = function(message, error) {
    pageHost.ii.log.writeLog(16, message, error, 1);
};


/**
 * @typedef LogEntry
 * @property {string} message The text content of the log entry.
 * @property {string} exception The error associated with this entry. Can be undefined.
 * @property {Date} occuredUtc The time and date in universal time
 * when this entry was written to the log.
 * @property {airlock.log.LogLevel} logLevel The log level of this entry.
 * @property {string} url The URL of the page or JavaScript file
 * where the log entry was written.
 * @property {number} The line number in the file where the call
 * to write to the log was made.
 * @property {string} function The name of the function
 * where the log call took place.
 */


/**
 * Reads the log and returns the entries using a Promise.
 * Optionally, a date range can be specified using the startDate and endDate
 * parameters. If supplied, only those entries that fall between startDate
 * and endDate are returned.
 * @param {Date} [startDate] If supplied, only entries that were made
 * after this date and time are returned.
 * @param {Date} [endDate] If supplied, only entries that were made
 * prior to this date and time are returned.
 * @returns {Promise<Array.<LogEntry>>} Resolves a list of log entries.
 * @example
 * var startDate = new Date();
 * // Create a Date object that indicates the time one minute ago.
 * startDate.setMinutes(startDate.getMinutes() - 1);
 *
 * // Get Entries less than 1 minute old.
 * airlock.log.getEntries(startDate)
 *	.then(function (logEntries) {
 *		let text = "";
 *		for (let i = 0; i < logEntries.length; i++) {
 *			let entry = logEntries[i];
 *			text += getPropertyValues(entry) + "\n";
 *		}
 *		alert(text);
 *	}).catch(function(error) {
 *		alert(`Error ${error}`);
 *	});
 */
airlock.log.getEntries = function(startDate, endDate) {
    return hsv12Private.makePromise("log.getEntries", startDate, endDate);
};

/**
 * Deletes the log entries via a Promise.
 * Optionally, a date range can be specified using the startDate and endDate
 * parameters. If supplied, only those entries that fall between startDate
 * and endDate are deleted. If both startDate and endDate are undefined,
 * all log entries are deleted.
 * @param {Date} [startDate] If supplied, only entries that were made
 * after this date and time are deleted.
 * @param {Date} [endDate] If supplied, only entries that were made
 * prior to this date and time are deleted.
 * @returns {number} The number of deleted log entries.
 * @example
 * var endDate = new Date();
 * // Create a Date object that indicates the time one minute ago.
 * endDate.setMinutes(endDate.getMinutes() - 1);
 *
 * // Delete Log Entries greater than 1 minute old.
 * airlock.log.deleteEntries(null, endDate)
 *		.then(function (value) {
 *			alert(`Deleted ${value} entries.`);
 *		}).catch(function (error) {
 *			alert(`Error ${error}`);
 *		});
 */
airlock.log.deleteEntries = function(startDate, endDate) {
    return hsv12Private.makePromise("log.deleteEntries", startDate, endDate);
};


/* IO */

/**
 * Provides APIs for reading and writing files.
 * @namespace 
 */
airlock.io = {};

/**
 * Copies the file at the specified sourcePath to the destinationPath.
 * Returns a Promise that when resolved indicates that the file has finished
 * copying. If the Promise is rejected, an error is returned.
 * @param {string} sourcePath The path to the file that is to be copied.
 * @param {string} destinationPath The location of where to copy the file to.
 * @param {boolean} [overwriteIfExists] If this function is called
 * and the destination file already exists, and error is raised.
 * However, if you specify overwriteExists as true, that an exception is not
 * raised and the destination file is replaced with the source file.
 * @returns {Promise} Indicating completion or failure of the copy operation.
 * An error is produced by the Promise if an IO Exception is raised.
 * @example
 * airlock.io.copyFile(sourcePath, destinationPath)
 *		.then(function () {
 *			alert(`File copied to: ${destinationPath}`);
 *		}).catch(function (error) {
 *			alert(`Error ${error}`);
 *		});
 */
airlock.io.copyFile = function(sourcePath, destinationPath, overwriteIfExists) {
    return hsv12Private.makePromise("io.copyFile", sourcePath, destinationPath, overwriteIfExists);
};

/**
 * Moves the file at the specified sourcePath to the destinationPath.
 * Returns a Promise that when resolved indicates that the file has finished
 * being moved. If the Promise is rejected, an error is returned.
 * @param {string} sourcePath The path to the file that is to be move from.
 * @param {string} destinationPath The location of where to move the file to.
 * @returns {Promise} Indicating completion or failure of the move operation.
 * An error is produced by the Promise if an IO Exception is thrown.
 * @see {@link https://docs.microsoft.com/en-us/dotnet/api/system.io.file.move}
 * @example
 * airlock.io.moveFile(sourcePath, destinationPath)
 *	.then(function () {
 *		alert(`File moved to: ${destinationPath}`);
 *	}).catch(function (error) {
 *		alert(`Error ${error}`);
 *	});
 */
airlock.io.moveFile = function(sourcePath, destinationPath) {
    return hsv12Private.makePromise("io.moveFile", sourcePath, destinationPath);
};

/**
 * Deletes a file at the specified location.
 * Returns a promise indicating success or failure of the operation.
 * @param {string} path The location of the file to be deleted.
 * @returns {Promise} If the promise is rejected it indicates the delete was unsuccessful.
 * @example
 * airlock.io.deleteFile(filePath)
 *	.then(function () {
 *		alert(`File deleted.`);
 *	}).catch(function (error) {
 *		alert(`Error ${error}`);
 *	});
 */
airlock.io.deleteFile = function(path) {
    return hsv12Private.makePromise("io.deleteFile", path);
};

/**
 * Returns a Promise indicating if the file at the specified location, exists.
 * @param {string} path The path to the file. Cannot be null.
 * @returns {Promise<boolean>} True if the file exists; false otherwise.
 * @example
 * airlock.io.fileExists(filePath)
 *	.then(function (fileExists) {
 *		alert(`File exists: ${fileExists}`);
 *	}).catch(function (error) {
 *		alert(`Error: ${error}`);
 *	});
 */
airlock.io.fileExists = function(path) {
    return hsv12Private.makePromise("io.fileExists", path);
};

/**
 * Returns a Promise indicating if the directory at the specified location, exists.
 * @param {string} path The path to the directory. Cannot be null.
 * @returns {Promise<boolean>} True if the file exists; false otherwise.
 * @example
 * airlock.io.directoryExists(directoryPath)
 *	.then(function (fileExists) {
 *		alert(`Directory exists: ${fileExists}`);
 *	}).catch(function (error) {
 *		alert(`Error: ${error}`);
 *	});
 */
airlock.io.directoryExists = function(path) {
    return hsv12Private.makePromise("io.directoryExists", path);
};

/**
 * Enum FileMode
 * @enum {Number}
 * @readonly
 * @see {@link https://docs.microsoft.com/en-us/dotnet/api/system.io.filemode}
 */
airlock.io.FileMode = {
    /* Specifies that the operating system should create a new file.
	 * If the file already exists, an IOException exception is thrown. */
    CREATE_NEW: 1,
    /**
	 * Specifies that the operating system should create a new file.
	 * If the file already exists, it will be overwritten.
	 * This requires Write permission.
	 * FileMode.Create is equivalent to requesting that if the file does not exist,
	 * use CreateNew; otherwise, use Truncate. If the file already exists
	 * but is a hidden file, an UnauthorizedAccessException exception is thrown.
	 */
    CREATE: 2,
    /**
	 * Specifies that the operating system should open an existing file.
	 * A FileNotFoundException exception is thrown if the file does not exist.
	 */
    OPEN: 3,
    /**
	 * Specifies that the operating system should open a file if it exists;
	 * otherwise, a new file should be created.
	 */
    OPEN_OR_CREATE: 4,
    /**
	 * Specifies that the operating system should open an existing file.
	 * When the file is opened, it should be truncated so that its size is zero bytes.
	 * This requires Write permission. Attempting to read from a file opened
	 * with FileMode.Truncate causes an ArgumentException exception.
	 */
    TRUNCATE: 5,
    /**
	 * Opens the file if it exists and seeks to the end of the file,
	 * or creates a new file. This requires Append permission.
	 * FileMode.Append can be used only in conjunction with FileAccess.Write.
	 * Trying to seek to a position before the end of the file
	 * throws an IOException exception, and any attempt
	 * to read fails and throws a NotSupportedException exception.
	 */
    APPEND: 6
};

/**
 * Use this function to open or create a file.
 * It returns a handle (file identifier) to the file, via a Promise.
 * Once the handle is obtained, the file can be written to
 * or read from using the identifer (depending on the specified fileMode).
 * @param {string} path The path to the file.
 * @param {airlock.io.FileMode} fileMode The file mode, which determines
 * what can be done with the file and whether the file
 * should be opened, created or so forth.
 * @returns {Promise<number>} A promise that resolves to a file identifier.
 * @example
 * var file1Handle;
 *
 * airlock.io.openFile(filePath, airlock.io.FileMode.OPEN_OR_CREATE)
 *		.then(function (fileHandle) {
 *			file1Handle = fileHandle;
 *			alert(`Successfully opened ${filePath}`);
 *		}).catch(function (error) {
 *			alert(`Error ${error}`);
 *		});
 */
airlock.io.openFile = function(path, fileMode) {
    return hsv12Private.makePromise("io.openFile", path, fileMode);
};

/**
 * Closes the file stream that is presently open for the file.
 * Upon closing a file, its handle becomes invalid.
 * @param {number} handle A file identifier for the file
 * that was previously returned from openFile.
 * @returns {Promise} A promise that when resolved confirms
 * that the file has been closed.
 * @example
 * airlock.io.closeFile(file1Handle)
 *		.then(function () {
 *			alert(`File closed.`);
 *		}).catch(function (error) {
 *			alert(`Error ${error}`);
 *		});
 */
airlock.io.closeFile = function(handle) {
    return hsv12Private.makePromise("io.closeFile", handle);
};

/**
 * Creates a directory at the specified path.
 * Note that, this function has no effect, and does not raise an error,
 * if the directory already exists.
 * @param {string} path The path to the directory to be created.
 * @returns {Promise} When resolved the promise confirms
 * that the directory has been created.
 * @example
 * airlock.io.createDirectory(newDir)
 *		.then(function () {
 *			alert(`Created directory ${newDir}`);
 *		}).catch(function (error) {
 *			alert(`Error ${error}`);
 *		});
 */
airlock.io.createDirectory = function(path) {
    return hsv12Private.makePromise("io.createDirectory", path);
};

/**
 * Deletes the directory at the specified location.
 * A promise is returned indicating success or failure of the operation.
 * @param {string} path The file system path to the directory that is to be deleted.
 * @param {boolean} [recursive] If true, then the directory and its contents are deleted.
 * If false, and the directory is not empty, then an IOException is raised.
 * The default value is false.
 * @returns {Promise} When resolved the promise confirms
 * that the directory has been deleted.
 * @example
 * airlock.io.deleteDirectory(newDir, recursive)
 *		.then(function () {
 *			alert(`Deleted directory ${newDir}`);
 *		}).catch(function (error) {
 *			alert(`Error ${error}`);
 *		});
 */
airlock.io.deleteDirectory = function(path, recursive) {
    return hsv12Private.makePromise("io.deleteDirectory", path, recursive);
};

/**
 * Returns a list of file names (including their paths) via a Promise.
 * @param {string} directoryPath The path of the directory to look in.
 * @param {string} [searchPattern] The search pattern to match against the names of files.
 * This parameter can contain a combination of valid literal path and wildcard (* and ?) characters,
 * but it does not support regular expressions.
 * @param {boolean} [recursive] If true, files in nested directories are also returned.
 * @returns {Promise<Array.<string>>} The names of the files identified as matching the query.
 * @example
 * airlock.io.getFiles(directoryPath, "*.*", true)
 *		.then(function (result) {
 *			alert(`${directoryPath} contains: ${result.join("\n")}`);
 *		}).catch(function (error) {
 *			alert(`Error ${error}`);
 *		});
 */
airlock.io.getFiles = function(directoryPath, searchPattern, recursive) {
    return hsv12Private.makePromise("io.getFiles", directoryPath, searchPattern, recursive);
};

/**
 * Returns a list of directory names (including their paths) via a Promise.
 * @param {string} directoryPath The path of the directory to look in.
 * @param {string} [searchPattern] The search pattern to match against the names of directories.
 * This parameter can contain a combination of valid literal path and wildcard (* and ?) characters,
 * but it does not support regular expressions.
 * @param {boolean} [recursive] If true, directories in nested directories are also returned.
 * @returns {Promise<Array.<string>>} The names of the files identified as matching the query.
 * @example
 * airlock.io.getDirectories(outputDir, "*.*", true)
 *		.then(function (result) {
 *			alert(`${outputDir} contains: ${result.join("\n")}`);
 *		}).catch(function (error) {
 *			alert(`Error ${error}`);
 *		});
 */
airlock.io.getDirectories = function(directoryPath, searchPattern, recursive) {
    return hsv12Private.makePromise("io.getDirectories", directoryPath, searchPattern, recursive);
};

/**
 * @typedef FileInfo
 * @property {string} directory The path to the file's directory.
 * @property {Number} sizeBytes  The size of the file in bytes.
 * @property {Date} modifiedTime The date and time that the file was last modified in universal time.
 * @property {Date} modifiedTimeUtc The date and time that the file was last modified in universal time.
 * @property {Date} creationTime The date and time that the file was created.
 * @property {Date} creationTimeUtc The date and time that the file was created in universal time.
 * @property {Date} accessedTime The date and time that the file was last accessed.
 * @property {Date} accessedTimeUtc The date and time that the file was last accessed in universal time.
 */

/**
 * Retrieves the information pertaining to the file at the specified location.
 * @param {string} path The path to the file.
 * @returns {FileInfo} The promise resolves a FileInfo object
 * that contains the directory, size, modified/created/accessed times.
 * @example
 * airlock.io.getFileInfo(sourcePath)
 *		.then(function (result) {
 *			alert(result.sizeBytes);
 *		}).catch(function (error) {
 *			alert(`Error ${error}`);
 *		});
 */
airlock.io.getFileInfo = function(path) {
    return hsv12Private.makePromise("io.getFileInfo", path);
};

/**
 * Reads the contents of a file as text.
 * @param {number} handle The file identifier.
 * @param {number} length The length (in bytes) of the file to read.
 * @param {number} [offset] The offset within the file to start reading.
 * If not specified, the current file offset is used.
 * @returns {Promise<string>} A promise that resolves a string of text
 * read from the file.
 * @example
 * var fileLength = airlock.io.getFileSizeBytes(file1Handle);
 *
 * airlock.io.readText(file1Handle, fileLength, 0)
 * 	.then(function (text) {
 * 		alert(text);
 * 	}).catch(function (error) {
 * 		alert(`Error ${error}`);
 * 	});
 */
airlock.io.readText = function(handle, length, offset) {
    return hsv12Private.makePromise("io.readText", handle, length, offset);
};

/**
 * Reads the contents of a file as bytes and returns them as a base64 string.
 * @param {number} handle The file identifier.
 * @param {number} length The length (in bytes) of the file to read.
 * @param {number} [offset] The offset within the file to start reading.
 * If not specified, the current file offset is used.
 * @returns {Promise<string>} A promise that resolves
 * a base64 string read from the file.
 * @example
 * var fileLength = airlock.io.getFileSizeBytes(binaryFile1Handle);
 * 
 * airlock.io.readBase64(binaryFile1Handle, fileLength, 0)
 * 	.then(function (base64) {
 * 		var text = atob(base64);
 * 		alert(text);
 * 	}).catch(function (error) {
 * 		alert(`Error ${error}`);
 * 	});
 */
airlock.io.readBase64 = function(handle, length, offset) {
    return hsv12Private.makePromise("io.readBase64", handle, length, offset);
};

/**
 * Reads the entire contents of a file as text.
 * @param {string} filePath The path to the file.
 * @returns {Promise<string>} A promise that resolves a string
 * that is the contents of the file.
 * @exception A sharing violation exception is thrown
 * if you have an open file handle for the file when using this API.
 * @example
 * airlock.io.readAllText(filePath)
 *	.then(function (text) {
 *		alert(`${text}`);
 *	}).catch(function (error) {
 *		alert(`Error: ${error}`);
 *	});
 */
airlock.io.readAllText = function(filePath) {
    return hsv12Private.makePromise("io.readAllText", filePath);
};

/**
 * Reads a line of text from a file.
 * @param {number} handle The file identifier.
 * @returns {Promise<string>} A promise that resolves
 * a line of text that was read from the file.
 * @example
 * airlock.io.readLine(file1Handle)
 * 	.then(function (text) {
 * 		alert(`${text}`);
 * 	}).catch(function (error) {
 * 		alert(`Error: ${error}`);
 * 	});
 */
airlock.io.readLine = function(handle) {
    return hsv12Private.makePromise("io.readLine", handle);
};

/**
 * Writes the specified text to a file
 * with the specified handle (file identifier)
 * at the file's current offset.
 * @param {number} handle The file identifier.
 * @param {string} text The text to write to the file.
 * @returns {Promise} A promise that when resolved
 * indicates success of the operation.
 * @example
 * airlock.io.writeText(file1Handle, "These pretzels are making me thirsty.")
 * 	.then(function () {
 * 		alert(textElement, "Done");
 * 	}).catch(function (error) {
 * 		alert(textElement, `Error ${error}`);
 * 	});
 */
airlock.io.writeText = function(handle, text) {
    return hsv12Private.makePromise("io.writeText", handle, text);
};

/**
 * Writes the specified base64 string to a file
 * with the specified handle (file identifier)
 * at the file's current offset.
 * @param {number} handle The file identifier.
 * @param {string} base64String The base64 text to write to the file.
 * @returns {Promise} A promise that when resolved
 * indicates success of the operation.
 * @example
 * var textToWrite = "That rug really tied the room together.";
 * 
 * var base64 = btoa(textToWrite);
 *
 * airlock.io.writeBase64(binaryFile1Handle, base64)
 * 	.then(function () {
 * 		alert("Done");
 * 	}).catch(function (error) {
 * 		alert(`Error ${error}`);
 * 	});
 */
airlock.io.writeBase64 = function(handle, base64String) {
    return hsv12Private.makePromise("io.writeBase64", handle, base64String);
};

/**
 * Seeks to a location (byte offset) within a file.
 * After which, when a read or write operation is undertaken
 * it will occur at the location specified by the offset parameter.
 * @param {number} handle The file identifier.
 * @param {number} offset The offset in bytes to move to.
 * @example
 * let position = 1024; // 1024 bytes past the start of the file.
 * airlock.io.seek(file1Handle, position);
 */
airlock.io.seek = function(handle, offset) {
    pageHost.ii.getResult("io.seek", handle, offset);
};

/**
 * Gets the current location (byte offset) within a file.
 * When a read or write operation is undertaken
 * it will occur at the location specified by the offset parameter.
 * @param {number} handle The file identifier.
 * @returns {number} The current offset in bytes.
 */
airlock.io.getFileOffset = function(handle) {
    return pageHost.ii.getResult("io.getFileOffset", handle);
};

/**
 * Gets the size of a file in bytes.
 * @param {number} handle The file identifier.
 * @returns {number} The size of the file in bytes.
 */
airlock.io.getFileSizeBytes = function(handle) {
    return pageHost.ii.getResult("io.getFileSizeBytes", handle);
};

/**
 * Updates the last modified timestamp of a file to the current time.
 * @param {string} filePath The file path.
 */
airlock.io.touch = function(filePath) {
    pageHost.ii.getResult("io.touch", filePath);
};

/**
 * Gets Airlock Browser's files directory.
 * This is typically located at /data/data/com.outcoder.ibrowser/files
 * @returns {string} The path to the application's files directory.
 */
airlock.io.getAppFilesDirectory = function() {
    return pageHost.ii.getResult("io.getAppFilesDirectory");
};

/**
 * Gets the path to the shared directory on the device.
 * This may or may not be located on an SD card.
 * @returns {string} The path to the device's shared storage location for apps.
 * @see {@link https://developer.android.com/reference/android/os/Environment#getExternalStorageDirectory()}
 */
airlock.io.getExternalStorageDirectory = function() {
    return pageHost.ii.getResult("io.getExternalStorageDirectory");
};