//=============================================================================
QUnit.module("SCANNER API");

QUnit.test("BarCodeInit", function(assert) {
  var ret_BarCodeInit = js.BarCodeInit();
  test_api_return_to_true("BarCodeReset", ret_BarCodeInit);
});

QUnit.test("BarCodeReset", function(assert) {
  var ret_BarCodeReset = js.BarCodeReset();
  test_api_return_to_true("BarCodeReset", ret_BarCodeReset);
});

QUnit.test("BarCodeGetActive", function(assert) {
  var ret_BarCodeGetActive = js.BarCodeGetActive();
  test_api_return_to_true("BarCodeGetActive", ret_BarCodeGetActive);
});

QUnit.test("BarCodeSetActive(bActive)", function(assert) {
  js.BarCodeSetActive(false);
  assert.ok(js.BarCodeGetActive() == false, "Set false passed");
  js.BarCodeSetActive(true);
  assert.ok(js.BarCodeGetActive() == true, "Set true passed");
});

QUnit.test("BarCodeGetReaderType", function(assert) {
  var name = reader_getReaderTypeName();
  assert.ok(name=="SM2", "Return value passed["+name+"]");
});

QUnit.test("BarCodeGetScannerVersion", function(assert) {
  var ret_BarCodeGetScannerVersion = js.BarCodeGetScannerVersion();
  assert.ok(js_isEmpty(ret_BarCodeGetScannerVersion) != true, "Return value passed["+ret_BarCodeGetScannerVersion+"]");
});

QUnit.test("BarCodeGetReaderOutputConfiguration", function(assert) {
  var ret_BarCodeGetReaderOutputConfiguration = js.BarCodeGetReaderOutputConfiguration();
  test_api_return_object("BarCodeGetReaderOutputConfiguration", ret_BarCodeGetReaderOutputConfiguration);

  test_BarCodeGetReaderOutputConfiguration_initial_value("enableKeyboardEmulation", "InputMethod", ret_BarCodeGetReaderOutputConfiguration);
  test_BarCodeGetReaderOutputConfiguration_initial_value("autoEnterWay", "SuffixData", ret_BarCodeGetReaderOutputConfiguration);
  test_BarCodeGetReaderOutputConfiguration_initial_value("autoEnterChar", "\r", ret_BarCodeGetReaderOutputConfiguration);
  test_BarCodeGetReaderOutputConfiguration_initial_value("showCodeType", false, ret_BarCodeGetReaderOutputConfiguration);
  test_BarCodeGetReaderOutputConfiguration_initial_value("showCodeLen", false, ret_BarCodeGetReaderOutputConfiguration);
  test_BarCodeGetReaderOutputConfiguration_initial_value("szPrefixCode", "", ret_BarCodeGetReaderOutputConfiguration);
  test_BarCodeGetReaderOutputConfiguration_initial_value("szSuffixCode", "", ret_BarCodeGetReaderOutputConfiguration);
  test_BarCodeGetReaderOutputConfiguration_initial_value("useDelim", 0, ret_BarCodeGetReaderOutputConfiguration);
  test_BarCodeGetReaderOutputConfiguration_initial_value("szCharsetName", "utf-8", ret_BarCodeGetReaderOutputConfiguration);
  test_BarCodeGetReaderOutputConfiguration_initial_value("clearPreviousData", 0, ret_BarCodeGetReaderOutputConfiguration);
});

QUnit.test("BarCodeSetReaderOutputConfiguration(configuration)", function(assert) {
  var ret_BarCodeGetReaderOutputConfiguration = js.BarCodeGetReaderOutputConfiguration();
  test_api_return_object("BarCodeGetReaderOutputConfiguration", ret_BarCodeGetReaderOutputConfiguration);

  var ret_BarCodeSetReaderOutputConfiguration = js.BarCodeSetReaderOutputConfiguration(ret_BarCodeGetReaderOutputConfiguration);

  var ret_BarCodeGetReaderOutputConfiguration2 = js.BarCodeGetReaderOutputConfiguration();
  test_api_return_object("BarCodeGetReaderOutputConfiguration2", ret_BarCodeGetReaderOutputConfiguration2);

  test_BarCodeGetReaderOutputConfiguration_initial_value("enableKeyboardEmulation", "InputMethod", ret_BarCodeGetReaderOutputConfiguration2);
  test_BarCodeGetReaderOutputConfiguration_initial_value("autoEnterWay", "SuffixData", ret_BarCodeGetReaderOutputConfiguration2);
  test_BarCodeGetReaderOutputConfiguration_initial_value("autoEnterChar", "\r", ret_BarCodeGetReaderOutputConfiguration2);
  test_BarCodeGetReaderOutputConfiguration_initial_value("showCodeType", false, ret_BarCodeGetReaderOutputConfiguration2);
  test_BarCodeGetReaderOutputConfiguration_initial_value("showCodeLen", false, ret_BarCodeGetReaderOutputConfiguration2);
  test_BarCodeGetReaderOutputConfiguration_initial_value("szPrefixCode", "", ret_BarCodeGetReaderOutputConfiguration2);
  test_BarCodeGetReaderOutputConfiguration_initial_value("szSuffixCode", "", ret_BarCodeGetReaderOutputConfiguration2);
  test_BarCodeGetReaderOutputConfiguration_initial_value("useDelim", 0, ret_BarCodeGetReaderOutputConfiguration2);
  test_BarCodeGetReaderOutputConfiguration_initial_value("szCharsetName", "utf-8", ret_BarCodeGetReaderOutputConfiguration2);
  test_BarCodeGetReaderOutputConfiguration_initial_value("clearPreviousData", 0, ret_BarCodeGetReaderOutputConfiguration2);
});

QUnit.test("BarCodeGetReaderServiceVersion", function(assert) {
  var ret_BarCodeGetReaderServiceVersion = js.BarCodeGetReaderServiceVersion();
  assert.ok(js_isEmpty(ret_BarCodeGetReaderServiceVersion) != true, "Return value passed["+ret_BarCodeGetReaderServiceVersion+"]");
});

QUnit.test("BarCodeGetNotificationParams", function(assert) {
  var ret_BarCodeGetNotificationParams = js.BarCodeGetNotificationParams();
  test_api_return_object("BarCodeGetNotificationParams", ret_BarCodeGetNotificationParams);

  test_BarCodeGetReaderOutputConfiguration_initial_value("ledDuration", 0, ret_BarCodeGetNotificationParams);
  test_BarCodeGetReaderOutputConfiguration_initial_value("vibrationCounter", 1, ret_BarCodeGetNotificationParams);
  test_BarCodeGetReaderOutputConfiguration_initial_value("enableVibrator", false, ret_BarCodeGetNotificationParams);
  test_BarCodeGetReaderOutputConfiguration_initial_value("ReaderBeep", "Default", ret_BarCodeGetNotificationParams);
});

QUnit.test("BarCodeSetNotificationParams(params)", function(assert) {
  var ref_BarCodeGetNotificationParams = js.BarCodeGetNotificationParams();
  test_api_return_object("BarCodeSetNotificationParams", ref_BarCodeGetNotificationParams);

  var ret_BarCodeSetNotificationParams = js.BarCodeSetNotificationParams(ref_BarCodeGetNotificationParams);
  test_api_return_object("BarCodeSetNotificationParams", ret_BarCodeSetNotificationParams);

  var ret_BarCodeGetNotificationParams2 = js.BarCodeGetNotificationParams();
  test_api_return_object("BarCodeSetNotificationParams", ret_BarCodeGetNotificationParams2);

  test_BarCodeGetReaderOutputConfiguration_initial_value("ledDuration", 0, ret_BarCodeGetNotificationParams2);
  test_BarCodeGetReaderOutputConfiguration_initial_value("vibrationCounter", 1, ret_BarCodeGetNotificationParams2);
  test_BarCodeGetReaderOutputConfiguration_initial_value("enableVibrator", false, ret_BarCodeGetNotificationParams2);
  test_BarCodeGetReaderOutputConfiguration_initial_value("ReaderBeep", "Default", ret_BarCodeGetNotificationParams2);
});






//=============================================================================
QUnit.module("DecodersStatus");

//--BarCodeSetDecodersStatus----------------------------------------------------
function test_BarCodeSetDecodersStatus_Valid(){
  test_BarCodeSetDecodersStatus_valid_value("enableAustralianPostal", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableAztec", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableCompositeCC_AB", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableCompositeCC_C", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableCompositeTlc39", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableCode11", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableCode39", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableCode93", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableCode128", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableCodabar", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableChinese2Of5", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableDataMatrix", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableDutchPostal", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableEanJan8", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableEanJan13", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableGs1128", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableGs1DataBar14", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableGs1DataBarLimited", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableGs1DataBarExpanded", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableGs1DatabarToUpcEan", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableIsbt128", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableIndustrial2Of5", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableInterleaved2Of5", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableJapanPostal", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableKorean3Of5", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableMatrix2Of5", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableMaxiCode", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableMicroPDF417", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableMicroQR", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableMsi", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enablePDF417", -1);
  test_BarCodeSetDecodersStatus_valid_value("enablePlessey", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableQRcode", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableTelepen", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableTriopticCode39", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableUpcA", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableUpcE", [0,1]);
  test_BarCodeSetDecodersStatus_valid_value("enableUpcE1", [1,0]);
  test_BarCodeSetDecodersStatus_valid_value("enableUccCoupon", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableUKPostal", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableUPUFICSPostal", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableUSPostnet", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableUSPlanet", -1);
  test_BarCodeSetDecodersStatus_valid_value("enableUSPSPostal", -1);
}

function test_BarCodeSetDecodersStatus_Invalid(){
  test_BarCodeSetDecodersStatus_invalid_value("enableAustralianPostal", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableAztec", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableCompositeCC_AB", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableCompositeCC_C", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableCompositeTlc39", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableCode11", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableCode39", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableCode93", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableCode128", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableCodabar", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableChinese2Of5", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableDataMatrix", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableDutchPostal", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableEanJan8", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableEanJan13", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableGs1128", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableGs1DataBar14", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableGs1DataBarLimited", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableGs1DataBarExpanded", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableGs1DatabarToUpcEan", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableIsbt128", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableIndustrial2Of5", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableInterleaved2Of5", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableJapanPostal", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableKorean3Of5", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableMatrix2Of5", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableMaxiCode", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableMicroPDF417", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableMicroQR", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableMsi", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enablePDF417", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enablePlessey", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableQRcode", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableTelepen", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableTriopticCode39", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableUpcA", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableUpcE", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableUpcE1", [-1,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableUccCoupon", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableUKPostal", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableUPUFICSPostal", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableUSPostnet", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableUSPlanet", [-2,0,2]);
  test_BarCodeSetDecodersStatus_invalid_value("enableUSPSPostal", [-2,0,2]);
}

QUnit.test("BarCodeGetDecodersStatus", function(assert) {
  var ret_BarCodeGetDecodersStatus = js.BarCodeGetDecodersStatus();
  test_api_return_object("BarCodeGetDecodersStatus", ret_BarCodeGetDecodersStatus);

  test_BarCodeGetDecodersStatus_initial_value("enableAustralianPostal", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableAztec", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableCompositeCC_AB", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableCompositeCC_C", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableCompositeTlc39", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableCode11", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableCode39", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableCode93", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableCode128", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableCodabar", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableChinese2Of5", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableDataMatrix", false,  -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableDutchPostal", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableEanJan8", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableEanJan13", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableGs1128", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableGs1DataBar14", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableGs1DataBarLimited", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableGs1DataBarExpanded", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableGs1DatabarToUpcEan", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableIsbt128", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableIndustrial2Of5", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableInterleaved2Of5", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableJapanPostal", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableKorean3Of5", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableMatrix2Of5", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableMaxiCode", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableMicroPDF417", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableMicroQR", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableMsi", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enablePDF417", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enablePlessey", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableQRcode", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableTelepen", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableTriopticCode39", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableUpcA", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableUpcE", true, 1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableUpcE1", true, 0, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableUccCoupon", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableUKPostal", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableUPUFICSPostal", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableUSPostnet", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableUSPlanet", false, -1, ret_BarCodeGetDecodersStatus);
  test_BarCodeGetDecodersStatus_initial_value("enableUSPSPostal", false, -1, ret_BarCodeGetDecodersStatus);

  //==Valid==
  test_BarCodeSetDecodersStatus_Valid();
  //==Invalid==
  test_BarCodeSetDecodersStatus_Invalid();
});












//=============================================================================
QUnit.module("Symbology");


QUnit.test("BarCodeReset", function(assert) {
  var ret_BarCodeReset = js.BarCodeReset();
  test_api_return_to_true("BarCodeReset", ret_BarCodeReset);
});


//--Codabar----------------------------------------------------
function test_Codabar_Valid(){
  test_BarCodeSetSymbology_valid_value("Codabar", "transmitCheckDigit", [1,0]);
  test_BarCodeSetSymbology_valid_value("Codabar", "verifyCheckDigit", [1,2,3,0]);
  test_BarCodeSetSymbology_valid_value("Codabar", "notisEditingType", [1,2,0]);
  test_BarCodeSetSymbology_valid_value("Codabar", "enable", [1,0]);
  test_BarCodeSetSymbology_valid_value("Codabar", "length1", [0,55,4]);
  test_BarCodeSetSymbology_valid_value("Codabar", "length2", [0,55]);
  test_BarCodeSetSymbology_valid_value("Codabar", "clsiEditing", [1,0]);
  test_BarCodeSetSymbology_valid_value("Codabar", "notisEditing", -1);
}

function test_Codabar_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Codabar", "transmitCheckDigit", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Codabar", "verifyCheckDigit", [-2,4]);
  test_BarCodeSetSymbology_invalid_value("Codabar", "notisEditingType", [-2,3]);
  test_BarCodeSetSymbology_invalid_value("Codabar", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Codabar", "length1", [-2,56]);
  test_BarCodeSetSymbology_invalid_value("Codabar", "length2", [-2,56]);
  test_BarCodeSetSymbology_invalid_value("Codabar", "clsiEditing", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Codabar", "notisEditing", [-2,0,2]);
}

QUnit.test("Codabar", function(assert) {
  var ret_Codabar = test_BarCodeGetSymbology_return_object("Codabar", true);
  test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 1, ret_Codabar);
  test_BarCodeGetSymbology_initial_value("verifyCheckDigit", true, 0, ret_Codabar);
  test_BarCodeGetSymbology_initial_value("notisEditingType", true, 0, ret_Codabar);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_Codabar);
  test_BarCodeGetSymbology_initial_value("length1", true, 4, ret_Codabar);
  test_BarCodeGetSymbology_initial_value("length2", true, 55, ret_Codabar);
  test_BarCodeGetSymbology_initial_value("clsiEditing", true, 0, ret_Codabar);
  test_BarCodeGetSymbology_initial_value("notisEditing", false, -1, ret_Codabar);
  
  //==Valid==
  test_Codabar_Valid();
  //==Invalid==
  test_Codabar_Invalid();
});


//--Code11----------------------------------------------------
function test_Code11_Valid(){
  test_BarCodeSetSymbology_valid_value("Code11", "enable", -1);
  //test_BarCodeSetSymbology_valid_value("Code11", "length1", [0,55,4]);
  //test_BarCodeSetSymbology_valid_value("Code11", "length2", [0,55]);
  //test_BarCodeSetSymbology_valid_value("Code11", "numberOfCheckDigits", [1,2,0]);
  //test_BarCodeSetSymbology_valid_value("Code11", "transmitCheckDigit", [1,0]);
}

function test_Code11_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Code11", "enable", [-2,0,2]);
  //test_BarCodeSetSymbology_invalid_value("Code11", "length1", [-2,56]);
  //test_BarCodeSetSymbology_invalid_value("Code11", "length2", [-2,56]);
  //test_BarCodeSetSymbology_invalid_value("Code11", "numberOfCheckDigits", [-2,3]);
  //test_BarCodeSetSymbology_invalid_value("Code11", "transmitCheckDigit", [-1,2]);
}

QUnit.test("Code11", function(assert) {
  var ret_Code11 = test_BarCodeGetSymbology_return_object("Code11", true);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_Code11);
  //test_BarCodeGetSymbology_initial_value("length1", true, 4, ret_Code11);
  //test_BarCodeGetSymbology_initial_value("length2", true, 55, ret_Code11);
  //test_BarCodeGetSymbology_initial_value("numberOfCheckDigits", true, 0, ret_Code11);
  //test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 0, ret_Code11);
  
  //==Valid==
  test_Code11_Valid();
  //==Invalid==
  test_Code11_Invalid();
});


//--Code39----------------------------------------------------
function test_Code39_Valid(){
  test_BarCodeSetSymbology_valid_value("Code39", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("Code39", "length1", [0,55,4]);
  test_BarCodeSetSymbology_valid_value("Code39", "length2", [0,55]);
  test_BarCodeSetSymbology_valid_value("Code39", "checkDigitVerification", [1,0]);
  test_BarCodeSetSymbology_valid_value("Code39", "transmitCheckDigit", [1,0]);
  test_BarCodeSetSymbology_valid_value("Code39", "fullASCII", [1,0]);
  test_BarCodeSetSymbology_valid_value("Code39", "convertToCode32", [1,0]);
  test_BarCodeSetSymbology_valid_value("Code39", "convertToCode32Prefix", [1,0]);
}

function test_Code39_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Code39", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Code39", "length1", [-2,56]);
  test_BarCodeSetSymbology_invalid_value("Code39", "length2", [-2,56]);
  test_BarCodeSetSymbology_invalid_value("Code39", "checkDigitVerification", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Code39", "transmitCheckDigit", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Code39", "fullASCII", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Code39", "convertToCode32", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Code39", "convertToCode32Prefix", [-1,2]);
}

QUnit.test("Code39", function(assert) {
  var ret_Code39 = test_BarCodeGetSymbology_return_object("Code39", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_Code39);
  test_BarCodeGetSymbology_initial_value("length1", true, 4, ret_Code39);
  test_BarCodeGetSymbology_initial_value("length2", true, 55, ret_Code39);
  test_BarCodeGetSymbology_initial_value("checkDigitVerification", true, 0, ret_Code39);
  test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 0, ret_Code39);
  test_BarCodeGetSymbology_initial_value("fullASCII", true, 0, ret_Code39);
  test_BarCodeGetSymbology_initial_value("convertToCode32", true, 0, ret_Code39);
  test_BarCodeGetSymbology_initial_value("convertToCode32Prefix", true, 0, ret_Code39);
  
  //==Valid==
  test_Code39_Valid();
  //==Invalid==
  test_Code39_Invalid();
});


//--TriopticCode39----------------------------------------------------
function test_TriopticCode39_Valid(){
  test_BarCodeSetSymbology_valid_value("TriopticCode39", "enable", [1,0]);
}

function test_TriopticCode39_Invalid(){
  test_BarCodeSetSymbology_invalid_value("TriopticCode39", "enable", [-1,2]);
}

QUnit.test("TriopticCode39", function(assert) {
  js_sleep(100);

  var ret_TriopticCode39 = test_BarCodeGetSymbology_return_object("TriopticCode39", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 0, ret_TriopticCode39);
  
  //==Valid==
  test_TriopticCode39_Valid();
  //==Invalid==
  test_TriopticCode39_Invalid();
});


//--Code93----------------------------------------------------
function test_Code93_Valid(){
  test_BarCodeSetSymbology_valid_value("Code93", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("Code93", "length1", [0,55,4]);
  test_BarCodeSetSymbology_valid_value("Code93", "length2", [0,55]);
}

function test_Code93_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Code93", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Code93", "length1", [-2,56]);
  test_BarCodeSetSymbology_invalid_value("Code93", "length2", [-2,56]);
}

QUnit.test("Code93", function(assert) {
  var ret_Code93 = test_BarCodeGetSymbology_return_object("Code93", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_Code93);
  test_BarCodeGetSymbology_initial_value("length1", true, 4, ret_Code93);
  test_BarCodeGetSymbology_initial_value("length2", true, 55, ret_Code93);
  
  //==Valid==
  test_Code93_Valid();
  //==Invalid==
  test_Code93_Invalid();
});


//--Code128----------------------------------------------------
function test_Code128_Valid(){
  test_BarCodeSetSymbology_valid_value("Code128", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("Code128", "securitylevel", [1,0]);
}

function test_Code128_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Code128", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Code128", "securitylevel", [-1,2]);
}

QUnit.test("Code128", function(assert) {
  var ret_Code128 = test_BarCodeGetSymbology_return_object("Code128", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_Code128);
  test_BarCodeGetSymbology_initial_value("securitylevel", true, 0, ret_Code128);
  
  //==Valid==
  test_Code128_Valid();
  //==Invalid==
  test_Code128_Invalid();
});


//--GS1128----------------------------------------------------
function test_GS1128_Valid(){
  test_BarCodeSetSymbology_valid_value("GS1128", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("GS1128", "fieldSeparator", [127,0]);
  test_BarCodeSetSymbology_valid_value("GS1128", "enableApplicationIdentifier", [1,0]);
  test_BarCodeSetSymbology_valid_value("GS1128", "applicationIdentifierMark1", ["leftSep!@#$%^&*",""]);
  test_BarCodeSetSymbology_valid_value("GS1128", "applicationIdentifierMark2", ["rightSep!@#$%^&*",""]);
}

function test_GS1128_Invalid(){
  test_BarCodeSetSymbology_invalid_value("GS1128", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("GS1128", "fieldSeparator", -2);
  test_BarCodeSetSymbology_invalid_value("GS1128", "enableApplicationIdentifier", [-1,2]);
}

QUnit.test("GS1128", function(assert) {
  var ret_GS1128 = test_BarCodeGetSymbology_return_object("GS1128", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_GS1128);
  test_BarCodeGetSymbology_initial_value("fieldSeparator", true, 0, ret_GS1128);
  test_BarCodeGetSymbology_initial_value("enableApplicationIdentifier", true, 0, ret_GS1128);
  test_BarCodeGetSymbology_initial_value("applicationIdentifierMark1", true, "", ret_GS1128);
  test_BarCodeGetSymbology_initial_value("applicationIdentifierMark2", true, "", ret_GS1128);
  
  //==Valid==
  test_GS1128_Valid();
  //==Invalid==
  test_GS1128_Invalid();
});


//--ISBT128----------------------------------------------------
function test_ISBT128_Valid(){
  test_BarCodeSetSymbology_valid_value("ISBT128", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("ISBT128", "concatenation", -1);
  test_BarCodeSetSymbology_valid_value("ISBT128", "concatenationRedundancy", -1);
}

function test_ISBT128_Invalid(){
  test_BarCodeSetSymbology_invalid_value("ISBT128", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("ISBT128", "concatenation", [-2,0,2]);
  test_BarCodeSetSymbology_invalid_value("ISBT128", "concatenationRedundancy", [-2,0,2]);
}

QUnit.test("ISBT128", function(assert) {
  var ret_ISBT128 = test_BarCodeGetSymbology_return_object("ISBT128", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_ISBT128);
  test_BarCodeGetSymbology_initial_value("concatenation", false, -1, ret_ISBT128);
  test_BarCodeGetSymbology_initial_value("concatenationRedundancy", false, -1, ret_ISBT128);
  
  //==Valid==
  test_ISBT128_Valid();
  //==Invalid==
  test_ISBT128_Invalid();
});


//--Chinese2Of5----------------------------------------------------
function test_Chinese2Of5_Valid(){
  test_BarCodeSetSymbology_valid_value("Chinese2Of5", "enable", -1);
}

function test_Chinese2Of5_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Chinese2Of5", "enable", [-2,0,2]);
}

QUnit.test("Chinese2Of5", function(assert) {
  var ret_Chinese2Of5 = test_BarCodeGetSymbology_return_object("Chinese2Of5", true);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_Chinese2Of5);
  
  //==Valid==
  test_Chinese2Of5_Valid();
  //==Invalid==
  test_Chinese2Of5_Invalid();
});


//--Industrial2Of5----------------------------------------------------
function test_Industrial2Of5_Valid(){
  test_BarCodeSetSymbology_valid_value("Industrial2Of5", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("Industrial2Of5", "length1", [0,55,4]);
  test_BarCodeSetSymbology_valid_value("Industrial2Of5", "length2", [0,55]);
}

function test_Industrial2Of5_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Industrial2Of5", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Industrial2Of5", "length1", [-2,56]);
  test_BarCodeSetSymbology_invalid_value("Industrial2Of5", "length2", [-2,56]);
}

QUnit.test("Industrial2Of5", function(assert) {
  var ret_Industrial2Of5 = test_BarCodeGetSymbology_return_object("Industrial2Of5", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_Industrial2Of5);
  test_BarCodeGetSymbology_initial_value("length1", true, 4, ret_Industrial2Of5);
  test_BarCodeGetSymbology_initial_value("length2", true, 55, ret_Industrial2Of5);
  
  //==Valid==
  test_Industrial2Of5_Valid();
  //==Invalid==
  test_Industrial2Of5_Invalid();
});


//--Interleaved2Of5----------------------------------------------------
function test_Interleaved2Of5_Valid(){
  test_BarCodeSetSymbology_valid_value("Interleaved2Of5", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("Interleaved2Of5", "length1", [0,55,4]);
  test_BarCodeSetSymbology_valid_value("Interleaved2Of5", "length2", [0,55]);
  test_BarCodeSetSymbology_valid_value("Interleaved2Of5", "checkDigitVerification", [1,2,0]);
  test_BarCodeSetSymbology_valid_value("Interleaved2Of5", "transmitCheckDigit", [1,0]);
  test_BarCodeSetSymbology_valid_value("Interleaved2Of5", "convertToEan13", -1);
}

function test_Interleaved2Of5_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Interleaved2Of5", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Interleaved2Of5", "length1", [-2,56]);
  test_BarCodeSetSymbology_invalid_value("Interleaved2Of5", "length2", [-2,56]);
  test_BarCodeSetSymbology_invalid_value("Interleaved2Of5", "checkDigitVerification", [-2,3,4,5]);
  test_BarCodeSetSymbology_invalid_value("Interleaved2Of5", "transmitCheckDigit", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Interleaved2Of5", "convertToEan13", [-2,0,2]);
}

QUnit.test("Interleaved2Of5", function(assert) {
  var ret_Interleaved2Of5 = test_BarCodeGetSymbology_return_object("Interleaved2Of5", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_Interleaved2Of5);
  test_BarCodeGetSymbology_initial_value("length1", true, 4, ret_Interleaved2Of5);
  test_BarCodeGetSymbology_initial_value("length2", true, 55, ret_Interleaved2Of5);
  test_BarCodeGetSymbology_initial_value("checkDigitVerification", true, 0, ret_Interleaved2Of5);
  test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 0, ret_Interleaved2Of5);
  test_BarCodeGetSymbology_initial_value("convertToEan13", false, -1, ret_Interleaved2Of5);
  
  //==Valid==
  test_Interleaved2Of5_Valid();
  //==Invalid==
  test_Interleaved2Of5_Invalid();
});


//--Matrix2Of5----------------------------------------------------
function test_Matrix2Of5_Valid(){
  test_BarCodeSetSymbology_valid_value("Matrix2Of5", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("Matrix2Of5", "length1", [0,55,4]);
  test_BarCodeSetSymbology_valid_value("Matrix2Of5", "length2", [0,55]);
  test_BarCodeSetSymbology_valid_value("Matrix2Of5", "redundancy", [1,0]);
  test_BarCodeSetSymbology_valid_value("Matrix2Of5", "checkDigitVerification", [1,0]);
  test_BarCodeSetSymbology_valid_value("Matrix2Of5", "transmitCheckDigit", [1,0]);
}

function test_Matrix2Of5_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Matrix2Of5", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Matrix2Of5", "length1", [-2,56]);
  test_BarCodeSetSymbology_invalid_value("Matrix2Of5", "length2", [-2,56]);
  test_BarCodeSetSymbology_invalid_value("Matrix2Of5", "redundancy", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Matrix2Of5", "checkDigitVerification", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Matrix2Of5", "transmitCheckDigit", [-1,2]);
}

QUnit.test("Matrix2Of5", function(assert) {
  var ret_Matrix2Of5 = test_BarCodeGetSymbology_return_object("Matrix2Of5", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_Matrix2Of5);
  test_BarCodeGetSymbology_initial_value("length1", true, 4, ret_Matrix2Of5);
  test_BarCodeGetSymbology_initial_value("length2", true, 55, ret_Matrix2Of5);
  test_BarCodeGetSymbology_initial_value("redundancy", true, 0, ret_Matrix2Of5);
  test_BarCodeGetSymbology_initial_value("checkDigitVerification", true, 0, ret_Matrix2Of5);
  test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 0, ret_Matrix2Of5);
  
  //==Valid==
  test_Matrix2Of5_Valid();
  //==Invalid==
  test_Matrix2Of5_Invalid();
});


//--Composite----------------------------------------------------
function test_Composite_Valid(){
  test_BarCodeSetSymbology_valid_value("Composite", "enableCc_C", -1);
  test_BarCodeSetSymbology_valid_value("Composite", "enableCc_AB", -1);
  test_BarCodeSetSymbology_valid_value("Composite", "enableTlc39", -1);
  test_BarCodeSetSymbology_valid_value("Composite", "enableUpcMode", -1);
  test_BarCodeSetSymbology_valid_value("Composite", "enableEmulationMode", -1);
}

function test_Composite_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Composite", "enableCc_C", [-2,0,2]);
  test_BarCodeSetSymbology_invalid_value("Composite", "enableCc_AB", [-2,0,2]);
  test_BarCodeSetSymbology_invalid_value("Composite", "enableTlc39", [-2,0,2]);
  test_BarCodeSetSymbology_invalid_value("Composite", "enableUpcMode", [-2,0,2]);
  test_BarCodeSetSymbology_invalid_value("Composite", "enableEmulationMode", [-2,0,2]);
}

QUnit.test("Composite", function(assert) {
  var ret_Composite = test_BarCodeGetSymbology_return_object("Composite", true);
  test_BarCodeGetSymbology_initial_value("enableCc_C", false, -1, ret_Composite);
  test_BarCodeGetSymbology_initial_value("enableCc_AB", false, -1, ret_Composite);
  test_BarCodeGetSymbology_initial_value("enableTlc39", false, -1, ret_Composite);
  test_BarCodeGetSymbology_initial_value("enableUpcMode", false, -1, ret_Composite);
  test_BarCodeGetSymbology_initial_value("enableEmulationMode", false, -1, ret_Composite);
  
  //==Valid==
  test_Composite_Valid();
  //==Invalid==
  test_Composite_Invalid();
});


//--UccCoupon----------------------------------------------------
function test_UccCoupon_Valid(){
  test_BarCodeSetSymbology_valid_value("UccCoupon", "enable", -1);
}

function test_UccCoupon_Invalid(){
  test_BarCodeSetSymbology_invalid_value("UccCoupon", "enable", [-2,0,2]);
}

QUnit.test("UccCoupon", function(assert) {
  var ret_UccCoupon = test_BarCodeGetSymbology_return_object("UccCoupon", true);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_UccCoupon);
  
  //==Valid==
  test_UccCoupon_Valid();
  //==Invalid==
  test_UccCoupon_Invalid();
});


//--GS1DataBar14----------------------------------------------------
function test_GS1DataBar14_Valid(){
  test_BarCodeSetSymbology_valid_value("GS1DataBar14", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("GS1DataBar14", "convertToUpcEan", -1);
  test_BarCodeSetSymbology_valid_value("GS1DataBar14", "securityLevel", -1);
}

function test_GS1DataBar14_Invalid(){
  test_BarCodeSetSymbology_invalid_value("GS1DataBar14", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("GS1DataBar14", "convertToUpcEan", [-2,0,2]);
  test_BarCodeSetSymbology_invalid_value("GS1DataBar14", "securityLevel", [-2,0,2]);
}

QUnit.test("GS1DataBar14", function(assert) {
  var ret_GS1DataBar14 = test_BarCodeGetSymbology_return_object("GS1DataBar14", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_GS1DataBar14);
  test_BarCodeGetSymbology_initial_value("convertToUpcEan", false, -1, ret_GS1DataBar14);
  test_BarCodeGetSymbology_initial_value("securityLevel", false, -1, ret_GS1DataBar14);
  
  //==Valid==
  test_GS1DataBar14_Valid();
  //==Invalid==
  test_GS1DataBar14_Invalid();
});


//--GS1DataBarLimited----------------------------------------------------
function test_GS1DataBarLimited_Valid(){
  test_BarCodeSetSymbology_valid_value("GS1DataBarLimited", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("GS1DataBarLimited", "convertToUpcEan", -1);
  test_BarCodeSetSymbology_valid_value("GS1DataBarLimited", "securityLevel", -1);
}

function test_GS1DataBarLimited_Invalid(){
  test_BarCodeSetSymbology_invalid_value("GS1DataBarLimited", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("GS1DataBarLimited", "convertToUpcEan", [-2,0,2]);
  test_BarCodeSetSymbology_invalid_value("GS1DataBarLimited", "securityLevel", [-2,0,2]);
}

QUnit.test("GS1DataBarLimited", function(assert) {
  var ret_GS1DataBarLimited = test_BarCodeGetSymbology_return_object("GS1DataBarLimited", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_GS1DataBarLimited);
  test_BarCodeGetSymbology_initial_value("convertToUpcEan", false, -1, ret_GS1DataBarLimited);
  test_BarCodeGetSymbology_initial_value("securityLevel", false, -1, ret_GS1DataBarLimited);
  
  //==Valid==
  test_GS1DataBarLimited_Valid();
  //==Invalid==
  test_GS1DataBarLimited_Invalid();
});


//--GS1DataBarExpanded----------------------------------------------------
function test_GS1DataBarExpanded_Valid(){
  test_BarCodeSetSymbology_valid_value("GS1DataBarExpanded", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("GS1DataBarExpanded", "fieldSeparator", [127,0]);
  test_BarCodeSetSymbology_valid_value("GS1DataBarExpanded", "securityLevel", -1);
}

function test_GS1DataBarExpanded_Invalid(){
  test_BarCodeSetSymbology_invalid_value("GS1DataBarExpanded", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("GS1DataBarExpanded", "fieldSeparator", -2);
  test_BarCodeSetSymbology_invalid_value("GS1DataBarExpanded", "securityLevel", [-2,0,2]);
}

QUnit.test("GS1DataBarExpanded", function(assert) {
  var ret_GS1DataBarExpanded = test_BarCodeGetSymbology_return_object("GS1DataBarExpanded", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_GS1DataBarExpanded);
  test_BarCodeGetSymbology_initial_value("fieldSeparator", true, 0, ret_GS1DataBarExpanded);
  test_BarCodeGetSymbology_initial_value("securityLevel", false, -1, ret_GS1DataBarExpanded);
  
  //==Valid==
  test_GS1DataBarExpanded_Valid();
  //==Invalid==
  test_GS1DataBarExpanded_Invalid();
});


//--Korean3Of5----------------------------------------------------
function test_Korean3Of5_Valid(){
  test_BarCodeSetSymbology_valid_value("Korean3Of5", "enable", -1);
}

function test_Korean3Of5_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Korean3Of5", "enable", [-2,0,2]);
}

QUnit.test("Korean3Of5", function(assert) {
  var ret_Korean3Of5 = test_BarCodeGetSymbology_return_object("Korean3Of5", true);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_Korean3Of5);
  
  //==Valid==
  test_Korean3Of5_Valid();
  //==Invalid==
  test_Korean3Of5_Invalid();
});


//--Msi----------------------------------------------------
function test_Msi_Valid(){
  test_BarCodeSetSymbology_valid_value("Msi", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("Msi", "length1", [0,55,4]);
  test_BarCodeSetSymbology_valid_value("Msi", "length2", [0,55]);
  test_BarCodeSetSymbology_valid_value("Msi", "checkDigitOption", [2,1]);
  test_BarCodeSetSymbology_valid_value("Msi", "transmitCheckDigit", [1,0]);
  test_BarCodeSetSymbology_valid_value("Msi", "checkDigitAlgorithm", [1,2]);
}

function test_Msi_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Msi", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Msi", "enable", [-2,56]);
  test_BarCodeSetSymbology_invalid_value("Msi", "enable", [-2,56]);
  test_BarCodeSetSymbology_invalid_value("Msi", "checkDigitOption", [0,3]);
  test_BarCodeSetSymbology_invalid_value("Msi", "transmitCheckDigit", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Msi", "checkDigitAlgorithm", [0,3]);
}

QUnit.test("Msi", function(assert) {
  var ret_Msi = test_BarCodeGetSymbology_return_object("Msi", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_Msi);
  test_BarCodeGetSymbology_initial_value("length1", true, 4, ret_Msi);
  test_BarCodeGetSymbology_initial_value("length2", true, 55, ret_Msi);
  test_BarCodeGetSymbology_initial_value("checkDigitOption", true, 1, ret_Msi);
  test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 0, ret_Msi);
  test_BarCodeGetSymbology_initial_value("checkDigitAlgorithm", true, 2, ret_Msi);
  
  //==Valid==
  test_Msi_Valid();
  //==Invalid==
  test_Msi_Invalid();
});


//--USPostal----------------------------------------------------
function test_USPostal_Valid(){
  test_BarCodeSetSymbology_valid_value("USPostal", "enablePlanet", -1);
  test_BarCodeSetSymbology_valid_value("USPostal", "enablePostnet", -1);
  //test_BarCodeSetSymbology_valid_value("USPostal", "transmitCheckDigit", [0,1]);
}

function test_USPostal_Invalid(){
  test_BarCodeSetSymbology_invalid_value("USPostal", "enablePlanet", [-2,0,2]);
  test_BarCodeSetSymbology_invalid_value("USPostal", "enablePostnet", [-2,0,2]);
  //test_BarCodeSetSymbology_invalid_value("USPostal", "transmitCheckDigit", [-1,2]);
}

QUnit.test("USPostal", function(assert) {
  var ret_USPostal = test_BarCodeGetSymbology_return_object("USPostal", true);
  test_BarCodeGetSymbology_initial_value("enablePlanet", false, -1, ret_USPostal);
  test_BarCodeGetSymbology_initial_value("enablePostnet", false, -1, ret_USPostal);
  //test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 1, ret_USPostal);
  
  //==Valid==
  test_USPostal_Valid();
  //==Invalid==
  test_USPostal_Invalid();
});


//--UKPostal----------------------------------------------------
function test_UKPostal_Valid(){
  test_BarCodeSetSymbology_valid_value("UKPostal", "enable", -1);
  //test_BarCodeSetSymbology_valid_value("UKPostal", "transmitCheckDigit", [0,1]);
}

function test_UKPostal_Invalid(){
  test_BarCodeSetSymbology_invalid_value("UKPostal", "enable", [-2,0,2]);
  //test_BarCodeSetSymbology_invalid_value("UKPostal", "transmitCheckDigit", [-1,2]);
}

QUnit.test("UKPostal", function(assert) {
  var ret_UKPostal = test_BarCodeGetSymbology_return_object("UKPostal", true);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_UKPostal);
  //test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 1, ret_UKPostal);
  
  //==Valid==
  test_UKPostal_Valid();
  //==Invalid==
  test_UKPostal_Invalid();
});


//--JapanPostal----------------------------------------------------
function test_JapanPostal_Valid(){
  test_BarCodeSetSymbology_valid_value("JapanPostal", "enable", -1);
}

function test_JapanPostal_Invalid(){
  test_BarCodeSetSymbology_invalid_value("JapanPostal", "enable", [-2,0,2]);
}

QUnit.test("JapanPostal", function(assert) {
  var ret_JapanPostal = test_BarCodeGetSymbology_return_object("JapanPostal", true);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_JapanPostal);
  
  //==Valid==
  test_JapanPostal_Valid();
  //==Invalid==
  test_JapanPostal_Invalid();
});


//--AustralianPostal----------------------------------------------------
function test_AustralianPostal_Valid(){
  test_BarCodeSetSymbology_valid_value("AustralianPostal", "enable", -1);
}

function test_AustralianPostal_Invalid(){
  test_BarCodeSetSymbology_invalid_value("AustralianPostal", "enable", [-2,0,2]);
}

QUnit.test("AustralianPostal", function(assert) {
  var ret_AustralianPostal = test_BarCodeGetSymbology_return_object("AustralianPostal", true);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_AustralianPostal);
  
  //==Valid==
  test_AustralianPostal_Valid();
  //==Invalid==
  test_AustralianPostal_Invalid();
});


//--DutchPostal----------------------------------------------------
function test_DutchPostal_Valid(){
  test_BarCodeSetSymbology_valid_value("DutchPostal", "enable", -1);
}

function test_DutchPostal_Invalid(){
  test_BarCodeSetSymbology_invalid_value("DutchPostal", "enable", [-2,0,2]);
}

QUnit.test("DutchPostal", function(assert) {
  js_sleep(100);

  var ret_DutchPostal = test_BarCodeGetSymbology_return_object("DutchPostal", true);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_DutchPostal);
  
  //==Valid==
  test_DutchPostal_Valid();
  //==Invalid==
  test_DutchPostal_Invalid();
});


//--USPSPostal----------------------------------------------------
function test_USPSPostal_Valid(){
  test_BarCodeSetSymbology_valid_value("USPSPostal", "enable", -1);
}

function test_USPSPostal_Invalid(){
  test_BarCodeSetSymbology_invalid_value("USPSPostal", "enable", [-2,0,2]);
}

QUnit.test("USPSPostal", function(assert) {
  var ret_USPSPostal = test_BarCodeGetSymbology_return_object("USPSPostal", true);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_USPSPostal);
  
  //==Valid==
  test_USPSPostal_Valid();
  //==Invalid==
  test_USPSPostal_Invalid();
});


//--UPUFICSPostal----------------------------------------------------
function test_UPUFICSPostal_Valid(){
  test_BarCodeSetSymbology_valid_value("UPUFICSPostal", "enable", -1);
}

function test_UPUFICSPostal_Invalid(){
  test_BarCodeSetSymbology_invalid_value("UPUFICSPostal", "enable", [-2,0,2]);
}

QUnit.test("UPUFICSPostal", function(assert) {
  var ret_UPUFICSPostal = test_BarCodeGetSymbology_return_object("UPUFICSPostal", true);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_UPUFICSPostal);
  
  //==Valid==
  test_UPUFICSPostal_Valid();
  //==Invalid==
  test_UPUFICSPostal_Invalid();
});


//--Ean8----------------------------------------------------
function test_Ean8_Valid(){
  test_BarCodeSetSymbology_valid_value("Ean8", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("Ean8", "addon2", [2,1]);
  test_BarCodeSetSymbology_valid_value("Ean8", "addon5", [2,1]);
  test_BarCodeSetSymbology_valid_value("Ean8", "transmitCheckDigit", [0,1]);
  test_BarCodeSetSymbology_valid_value("Ean8", "convertToEan13", [1,0]);
}

function test_Ean8_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Ean8", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Ean8", "addon2", [0,3]);
  test_BarCodeSetSymbology_invalid_value("Ean8", "addon5", [0,3]);
  test_BarCodeSetSymbology_invalid_value("Ean8", "transmitCheckDigit", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Ean8", "convertToEan13", [-1,2]);
}

QUnit.test("Ean8", function(assert) {
  js_sleep(100);

  var ret_Ean8 = test_BarCodeGetSymbology_return_object("Ean8", true);

  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_Ean8);
  test_BarCodeGetSymbology_initial_value("addon2", true, 1, ret_Ean8);
  test_BarCodeGetSymbology_initial_value("addon5", true, 1, ret_Ean8);
  test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 1, ret_Ean8);
  test_BarCodeGetSymbology_initial_value("convertToEan13", true, 0, ret_Ean8);
  
  //==Valid==
  test_Ean8_Valid();
  //==Invalid==
  test_Ean8_Invalid();
});


//--Ean13----------------------------------------------------
function test_Ean13_Valid(){
  test_BarCodeSetSymbology_valid_value("Ean13", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("Ean13", "addon2", [2,1]);
  test_BarCodeSetSymbology_valid_value("Ean13", "addon5", [2,1]);
  test_BarCodeSetSymbology_valid_value("Ean13", "convertToISBN", [1,0]);
  test_BarCodeSetSymbology_valid_value("Ean13", "convertToISSN", -1);
  test_BarCodeSetSymbology_valid_value("Ean13", "booklandISBNFormat", [1,0]);
  test_BarCodeSetSymbology_valid_value("Ean13", "transmitCheckDigit", [0,1]);
}

function test_Ean13_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Ean13", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Ean13", "addon2", [0,3]);
  test_BarCodeSetSymbology_invalid_value("Ean13", "addon5", [0,3]);
  test_BarCodeSetSymbology_invalid_value("Ean13", "convertToISBN", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Ean13", "convertToISSN", [-2,0,2]);
  test_BarCodeSetSymbology_invalid_value("Ean13", "booklandISBNFormat", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("Ean13", "transmitCheckDigit", [-1,2]);
}

QUnit.test("Ean13", function(assert) {
  var ret_Ean13 = test_BarCodeGetSymbology_return_object("Ean13", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_Ean13);
  test_BarCodeGetSymbology_initial_value("addon2", true, 1, ret_Ean13);
  test_BarCodeGetSymbology_initial_value("addon5", true, 1, ret_Ean13);
  test_BarCodeGetSymbology_initial_value("convertToISBN", true, 0, ret_Ean13);
  test_BarCodeGetSymbology_initial_value("convertToISSN", false, -1, ret_Ean13);
  test_BarCodeGetSymbology_initial_value("booklandISBNFormat", true, 0, ret_Ean13);
  test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 1, ret_Ean13);
  
  //==Valid==
  test_Ean13_Valid();
  //==Invalid==
  test_Ean13_Invalid();
});


//--UpcA----------------------------------------------------
function test_v_Valid(){
  test_BarCodeSetSymbology_valid_value("UpcA", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("UpcA", "addon2", [2,1]);
  test_BarCodeSetSymbology_valid_value("UpcA", "addon5", [2,1]);
  test_BarCodeSetSymbology_valid_value("UpcA", "transmitCheckDigit", [0,1]);
  test_BarCodeSetSymbology_valid_value("UpcA", "transmitSystemNumber", [0,2,1]);
  test_BarCodeSetSymbology_valid_value("UpcA", "convertToEan13", [1,0]);
}

function test_UpcA_Invalid(){
  test_BarCodeSetSymbology_invalid_value("UpcA", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("UpcA", "addon2", [0,3]);
  test_BarCodeSetSymbology_invalid_value("UpcA", "addon5", [0,3]);
  test_BarCodeSetSymbology_invalid_value("UpcA", "transmitCheckDigit", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("UpcA", "transmitSystemNumber", [-1,3]);
  test_BarCodeSetSymbology_invalid_value("UpcA", "convertToEan13", [-1,2]);
}

QUnit.test("UpcA", function(assert) {
  var ret_UpcA = test_BarCodeGetSymbology_return_object("UpcA", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_UpcA);
  test_BarCodeGetSymbology_initial_value("addon2", true, 1, ret_UpcA);
  test_BarCodeGetSymbology_initial_value("addon5", true, 1, ret_UpcA);
  test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 1, ret_UpcA);
  test_BarCodeGetSymbology_initial_value("transmitSystemNumber", true, 1, ret_UpcA);
  test_BarCodeGetSymbology_initial_value("convertToEan13", true, 0, ret_UpcA);
  
  //==Valid==
  test_UpcA_Valid();
  //==Invalid==
  test_UpcA_Invalid();
});


//--UpcE----------------------------------------------------
function test_UpcE_Valid(){
  test_BarCodeSetSymbology_valid_value("UpcE", "enable", [0,1]);
  test_BarCodeSetSymbology_valid_value("UpcE", "addon2", [2,1]);
  test_BarCodeSetSymbology_valid_value("UpcE", "addon5", [2,1]);
  test_BarCodeSetSymbology_valid_value("UpcE", "transmitCheckDigit", [0,1]);
  test_BarCodeSetSymbology_valid_value("UpcE", "transmitSystemNumber", [0,2,1]);
  test_BarCodeSetSymbology_valid_value("UpcE", "convertToUpcA", [1,0]);
}

function test_UpcE_Invalid(){
  test_BarCodeSetSymbology_invalid_value("UpcE", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("UpcE", "addon2", [0,3]);
  test_BarCodeSetSymbology_invalid_value("UpcE", "addon5", [0,3]);
  test_BarCodeSetSymbology_invalid_value("UpcE", "transmitCheckDigit", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("UpcE", "transmitSystemNumber", [-1,3]);
  test_BarCodeSetSymbology_invalid_value("UpcE", "convertToUpcA", [-1,2]);
}

QUnit.test("UpcE", function(assert) {
  var ret_UpcE = test_BarCodeGetSymbology_return_object("UpcE", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 1, ret_UpcE);
  test_BarCodeGetSymbology_initial_value("addon2", true, 1, ret_UpcE);
  test_BarCodeGetSymbology_initial_value("addon5", true, 1, ret_UpcE);
  test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 1, ret_UpcE);
  test_BarCodeGetSymbology_initial_value("transmitSystemNumber", true, 1, ret_UpcE);
  test_BarCodeGetSymbology_initial_value("convertToUpcA", true, 0, ret_UpcE);
  
  //==Valid==
  test_UpcE_Valid();
  //==Invalid==
  test_UpcE_Invalid();
});


//--UpcE1----------------------------------------------------
function test_UpcE1_Valid(){
  test_BarCodeSetSymbology_valid_value("UpcE1", "enable", [1,0]);
  test_BarCodeSetSymbology_valid_value("UpcE1", "addon2", [2,1]);
  test_BarCodeSetSymbology_valid_value("UpcE1", "addon5", [2,1]);
  test_BarCodeSetSymbology_valid_value("UpcE1", "transmitCheckDigit", [0,1]);
  test_BarCodeSetSymbology_valid_value("UpcE1", "transmitSystemNumber", [0,2,1]);
  test_BarCodeSetSymbology_valid_value("UpcE1", "convertToUpcA", [1,0]);
}

function test_UpcE1_Invalid(){
  test_BarCodeSetSymbology_invalid_value("UpcE1", "enable", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("UpcE1", "addon2", [0,3]);
  test_BarCodeSetSymbology_invalid_value("UpcE1", "addon5", [0,3]);
  test_BarCodeSetSymbology_invalid_value("UpcE1", "transmitCheckDigit", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("UpcE1", "transmitSystemNumber", [-1,2]);
  test_BarCodeSetSymbology_invalid_value("UpcE1", "convertToUpcA", [-1,2]);
}

QUnit.test("UpcE1", function(assert) {
  var ret_UpcE1 = test_BarCodeGetSymbology_return_object("UpcE1", true);
  test_BarCodeGetSymbology_initial_value("enable", true, 0, ret_UpcE1);
  test_BarCodeGetSymbology_initial_value("addon2", true, 1, ret_UpcE1);
  test_BarCodeGetSymbology_initial_value("addon5", true, 1, ret_UpcE1);
  test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 1, ret_UpcE1);
  test_BarCodeGetSymbology_initial_value("transmitSystemNumber", true, 1, ret_UpcE1);
  test_BarCodeGetSymbology_initial_value("convertToUpcA", true, 0, ret_UpcE1);
  
  //==Valid==
  test_UpcE1_Valid();
  //==Invalid==
  test_UpcE1_Invalid();
});


//--Aztec----------------------------------------------------
function test_Aztec_Valid(){
  test_BarCodeSetSymbology_valid_value("Aztec", "enable", -1);
}

function test_Aztec_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Aztec", "enable", [-2,0,2]);
}

QUnit.test("Aztec", function(assert) {
  var ret_Aztec = test_BarCodeGetSymbology_return_object("Aztec", false);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_Aztec);
  
  //==Valid==
  //test_Aztec_Valid();
  //==Invalid==
  //test_Aztec_Invalid();
});


//--DataMatrix----------------------------------------------------
function test_DataMatrix_Valid(){
  test_BarCodeSetSymbology_valid_value("DataMatrix", "enable", -1);
  //test_BarCodeSetSymbology_valid_value("DataMatrix", "fieldSeparator", [128,0]);
  //test_BarCodeSetSymbology_valid_value("DataMatrix", "mirrorImage", [1,2,0]);
}

function test_DataMatrix_Invalid(){
  test_BarCodeSetSymbology_invalid_value("DataMatrix", "enable", [-2,0,2]);
  //test_BarCodeSetSymbology_invalid_value("DataMatrix", "fieldSeparator", -2);
  //test_BarCodeSetSymbology_invalid_value("DataMatrix", "mirrorImage", [-2,3]);
}

QUnit.test("DataMatrix", function(assert) {
  var ret_DataMatrix = test_BarCodeGetSymbology_return_object("DataMatrix", false);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_DataMatrix);
  //test_BarCodeGetSymbology_initial_value("fieldSeparator", true, 0, ret_DataMatrix);
  //test_BarCodeGetSymbology_initial_value("mirrorImage", true, 0, ret_DataMatrix);
  
  //==Valid==
  test_DataMatrix_Valid();
  //==Invalid==
  test_DataMatrix_Invalid();
});


//--MaxiCode----------------------------------------------------
function test_MaxiCode_Valid(){
  test_BarCodeSetSymbology_valid_value("MaxiCode", "enable", -1);
}

function test_MaxiCode_Invalid(){
  test_BarCodeSetSymbology_invalid_value("MaxiCode", "enable", [-2,0,2]);
}

QUnit.test("MaxiCode", function(assert) {
  var ret_MaxiCode = test_BarCodeGetSymbology_return_object("MaxiCode", false);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_MaxiCode);
  
  //==Valid==
  test_MaxiCode_Valid();
  //==Invalid==
  test_MaxiCode_Invalid();
});


//--MicroPDF417----------------------------------------------------
function test_MicroPDF417_Valid(){
  test_BarCodeSetSymbology_valid_value("MicroPDF417", "enable", -1);
  //test_BarCodeSetSymbology_valid_value("MicroPDF417", "code128Emulation", [1,0]);
}

function test_MicroPDF417_Invalid(){
  test_BarCodeSetSymbology_invalid_value("MicroPDF417", "enable", [-2,0,2]);
  //test_BarCodeSetSymbology_invalid_value("MicroPDF417", "code128Emulation", [-1,2]);
}

QUnit.test("MicroPDF417", function(assert) {
  var ret_MicroPDF417 = test_BarCodeGetSymbology_return_object("MicroPDF417", false);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_MicroPDF417);
  //test_BarCodeGetSymbology_initial_value("code128Emulation", true, 0, ret_MicroPDF417);
  
  //==Valid==
  test_MicroPDF417_Valid();
  //==Invalid==
  test_MicroPDF417_Invalid();
});


//--MicroQR----------------------------------------------------
function test_MicroQR_Valid(){
  test_BarCodeSetSymbology_valid_value("MicroQR", "enable", -1);
}

function test_MicroQR_Invalid(){
  test_BarCodeSetSymbology_invalid_value("MicroQR", "enable", [-2,0,2]);
}

QUnit.test("MicroQR", function(assert) {
  var ret_MicroQR = test_BarCodeGetSymbology_return_object("MicroQR", false);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_MicroQR);
  
  //==Valid==
  //test_MicroQR_Valid();
  //==Invalid==
  //test_MicroQR_Invalid();
});


//--PDF417----------------------------------------------------
function test_PDF417_Valid(){
  test_BarCodeSetSymbology_valid_value("PDF417", "enable", -1);
  //test_BarCodeSetSymbology_valid_value("PDF417", "transmitMode", -1);
  //test_BarCodeSetSymbology_valid_value("PDF417", "escapeCharacter", -1);
  //test_BarCodeSetSymbology_valid_value("PDF417", "transmitControlHeader", -1);
}

function test_PDF417_Invalid(){
  test_BarCodeSetSymbology_invalid_value("PDF417", "enable", [-2,0,2]);
  //test_BarCodeSetSymbology_invalid_value("PDF417", "transmitMode", [-2,0,2]);
  //test_BarCodeSetSymbology_invalid_value("PDF417", "escapeCharacter", [-2,0,2]);
  //test_BarCodeSetSymbology_invalid_value("PDF417", "transmitControlHeader", [-2,0,2]);
}

QUnit.test("PDF417", function(assert) {
  var ret_PDF417 = test_BarCodeGetSymbology_return_object("PDF417", false);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_PDF417);
  //test_BarCodeGetSymbology_initial_value("transmitMode", false, -1, ret_PDF417);
  //test_BarCodeGetSymbology_initial_value("escapeCharacter", false, -1, ret_PDF417);
  //test_BarCodeGetSymbology_initial_value("transmitControlHeader", false, -1, ret_PDF417);
  
  //==Valid==
  //test_PDF417_Valid();
  //==Invalid==
  //test_PDF417_Invalid();
});


//--QRCode----------------------------------------------------
function test_QRCode_Valid(){
  test_BarCodeSetSymbology_valid_value("QRCode", "enable", -1);
}

function test_QRCode_Invalid(){
  test_BarCodeSetSymbology_invalid_value("QRCode", "enable", [-2,0,2]);
}

QUnit.test("QRCode", function(assert) {
  var ret_QRCode = test_BarCodeGetSymbology_return_object("QRCode", false);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_QRCode);
  
  //==Valid==
  //test_QRCode_Valid();
  //==Invalid==
  //test_QRCode_Invalid();
});


//--Plessey----------------------------------------------------
function test_Plessey_Valid() {
  test_BarCodeSetSymbology_valid_value("Plessey", "enable", -1);
}

function test_Plessey_Invalid() {
  test_BarCodeSetSymbology_invalid_value("Plessey", "enable", [-2,0,2]);
} 

QUnit.test("Plessey", function(assert) {
  var ret_Plessey = test_BarCodeGetSymbology_return_object("Plessey", false);
  test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_Plessey);
  //test_BarCodeGetSymbology_initial_value("unconventionalStop", true, 0, ret_Plessey);
  //test_BarCodeGetSymbology_initial_value("transmitCheckDigit", true, 0, ret_Plessey);
  //test_BarCodeGetSymbology_initial_value("length1", true, 4, ret_Plessey);
  //test_BarCodeGetSymbology_initial_value("length2", true, 55, ret_Plessey);
  
  //==Valid==
  //test_Plessey_Valid();
  //==Invalid==
  //test_Plesseys_Invalid();
});


//--Telepen----------------------------------------------------
function test_Telepen_Valid(){
  test_BarCodeSetSymbology_valid_value("Telepen", "enable", -1);
}

function test_Telepen_Invalid(){
  test_BarCodeSetSymbology_invalid_value("Telepen", "enable", [-2,0,2]);
}

QUnit.test("Telepen", function(assert) {
   var ret_Telepen = test_BarCodeGetSymbology_return_object("Telepen", false);
   test_BarCodeGetSymbology_initial_value("enable", false, -1, ret_Telepen);
   //test_BarCodeGetSymbology_initial_value("format", true, "", ret_Telepen);
   //test_BarCodeGetSymbology_initial_value("length1", true, 4, ret_Telepen);
   //test_BarCodeGetSymbology_initial_value("length2", true, 55, ret_Telepen);
  
  //==Valid==
  //test_Telepen_Valid();
  //==Invalid==
  //test_Telepen_Invalid();
});









//=============================================================================
QUnit.module('UserPreferences');
//--BarCodeGetUserPreferences----------------------------------------------------
function test_BarCodeGetUserPreferences_Valid(){
  test_BarCodeSetUserPreferences_valid_value("addonSecurityLevel", [2,30,10]);
  test_BarCodeSetUserPreferences_valid_value("displayMode", -1);
  test_BarCodeSetUserPreferences_valid_value("laserOnTime", [6000,3000]);    
  test_BarCodeSetUserPreferences_valid_value("negativeBarcodes", -1);
  test_BarCodeSetUserPreferences_valid_value("pickListMode", -1);
  test_BarCodeSetUserPreferences_valid_value("redundancyLevel", [1,2,3,4,1]);
  test_BarCodeSetUserPreferences_valid_value("scanAngle", -1);
  test_BarCodeSetUserPreferences_valid_value("securityLevel", -1);
  test_BarCodeSetUserPreferences_valid_value("timeoutBetweenSameSymbology", [0,9900,1000]);
  test_BarCodeSetUserPreferences_valid_value("transmitCodeIdChar", [1,0]);
  test_BarCodeSetUserPreferences_valid_value("triggerMode", [1,0]);
  test_BarCodeSetUserPreferences_valid_value("decodingillumniation", -1);
  test_BarCodeSetUserPreferences_valid_value("decodingAimingPattern", -1);
  test_BarCodeSetUserPreferences_valid_value("interCharGapSize", -1);
  test_BarCodeSetUserPreferences_valid_value("timeoutPresentationMode", -1);
  test_BarCodeSetUserPreferences_valid_value("decodingIlluminationPowerLevel", -1);
  test_BarCodeSetUserPreferences_valid_value("aimerMode", -1);
  test_BarCodeSetUserPreferences_valid_value("centerDecoding", -1);
  test_BarCodeSetUserPreferences_valid_value("centerDecodingTolerance", -1);
}

function test_BarCodeGetUserPreferences_Invalid(){
  test_BarCodeSetUserPreferences_invalid_value("addonSecurityLevel", [1,31]);
  test_BarCodeSetUserPreferences_invalid_value("displayMode", [-2,0,2]);
  test_BarCodeSetUserPreferences_invalid_value("laserOnTime", -2);    
  test_BarCodeSetUserPreferences_invalid_value("negativeBarcodes", [-2,0,2]);
  test_BarCodeSetUserPreferences_invalid_value("pickListMode", [-2,0,2]);
  test_BarCodeSetUserPreferences_invalid_value("redundancyLevel", [0,5]);
  test_BarCodeSetUserPreferences_invalid_value("scanAngle", [-2,0,2]);
  test_BarCodeSetUserPreferences_invalid_value("securityLevel", [-2,0,2]);
  test_BarCodeSetUserPreferences_invalid_value("timeoutBetweenSameSymbology", [-1,9901]);
  test_BarCodeSetUserPreferences_invalid_value("transmitCodeIdChar", [-1,2]);
  test_BarCodeSetUserPreferences_invalid_value("triggerMode", [-1,3,4]);
  test_BarCodeSetUserPreferences_invalid_value("decodingillumniation", [-2,0,2]);
  test_BarCodeSetUserPreferences_invalid_value("decodingAimingPattern", [-2,0,2]);
  test_BarCodeSetUserPreferences_invalid_value("interCharGapSize", [-2,6,2]);
  test_BarCodeSetUserPreferences_invalid_value("timeoutPresentationMode", [-2,2,60000]);
  test_BarCodeSetUserPreferences_invalid_value("decodingIlluminationPowerLevel", [-2,0,2]);
  test_BarCodeSetUserPreferences_invalid_value("aimerMode", [-2,0,2]);
  test_BarCodeSetUserPreferences_invalid_value("centerDecoding", [-2,0,2]);
  test_BarCodeSetUserPreferences_invalid_value("centerDecodingTolerance", [-2,0,2]);
}

QUnit.test("BarCodeGetUserPreferences", function( assert ){
  var ret = js.BarCodeGetUserPreferences();
  test_api_return_object("BarCodeGetUserPreferences", ret);

  test_BarCodeGetUserPreferences_initial_value("addonSecurityLevel", true, 10, ret);
  test_BarCodeGetUserPreferences_initial_value("displayMode", false, -1, ret);
  test_BarCodeGetUserPreferences_initial_value("laserOnTime", true, 3000, ret);
  test_BarCodeGetUserPreferences_initial_value("negativeBarcodes", false, -1, ret);
  test_BarCodeGetUserPreferences_initial_value("pickListMode", false, -1, ret);
  test_BarCodeGetUserPreferences_initial_value("redundancyLevel", true, 1, ret);
  test_BarCodeGetUserPreferences_initial_value("scanAngle", false, -1, ret);
  test_BarCodeGetUserPreferences_initial_value("securityLevel", false, -1, ret);
  test_BarCodeGetUserPreferences_initial_value("timeoutBetweenSameSymbology", true, 1000, ret);
  test_BarCodeGetUserPreferences_initial_value("transmitCodeIdChar", true, 0, ret);
  test_BarCodeGetUserPreferences_initial_value("triggerMode", true, 0, ret);
  test_BarCodeGetUserPreferences_initial_value("decodingillumniation", false, -1, ret);
  test_BarCodeGetUserPreferences_initial_value("decodingAimingPattern", false, -1, ret);
  test_BarCodeGetUserPreferences_initial_value("interCharGapSize", false, -1, ret);
  test_BarCodeGetUserPreferences_initial_value("timeoutPresentationMode", false, -1, ret);
  test_BarCodeGetUserPreferences_initial_value("decodingIlluminationPowerLevel", false, -1, ret);
  test_BarCodeGetUserPreferences_initial_value("aimerMode", false, -1, ret);
  test_BarCodeGetUserPreferences_initial_value("centerDecoding", false, -1, ret);
  test_BarCodeGetUserPreferences_initial_value("centerDecodingTolerance", false, -1, ret);    
  
  //==Valid==
  test_BarCodeGetUserPreferences_Valid();
  //==Invalid==
  test_BarCodeGetUserPreferences_Invalid();
});


QUnit.test("BarCodeReset", function(assert) {
  var ret_BarCodeReset = js.BarCodeReset();
  test_api_return_to_true("BarCodeReset", ret_BarCodeReset);
});