class CipherJsTest_SM1 extends CipherJsTestActionBase{}

var jsTestSM1 = CipherJsTest_SM1 || {};

CipherJsTest_SM1.initCipherJsData=function()
{
    this.setReaderTypeName("CL_2D_SM1");

    this.addDecodersStatusData("enableCodabar", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableCode11", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableCode39", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableTriopticCode39", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableCode93", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableCode128", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableGs1128", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableIsbt128", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableChinese2Of5", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableIndustrial2Of5", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableInterleaved2Of5", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableMatrix2Of5", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableKorean3Of5", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableUccCoupon", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableGs1DataBar14", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableGs1DataBarLimited", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableGs1DatabarToUpcEan", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableGs1DataBarExpanded", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableMsi", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableEanJan8", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableEanJan13", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableUpcA", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableUpcE", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableUpcE1", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableCompositeCC_AB", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableCompositeCC_C", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableComVositeTlc39", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableUSVlanet", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableUSPostnet", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableUKPostal", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableJapanPostal", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableAustralianPostal", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableDutchPostal", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableUSPSPostal", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableUPUFICSPostal", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enablePlessey", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableTelepen", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableAztec", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableDataMatrix", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableMaxiCode", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enablePDF417", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableMicroPDF417", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableQRcode", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableMicroQR", false, -1, -1, [-2, 0, 1, 2]);

    //Codabar
    this.addSymbologyData("Codabar","enable", true, true, [0,1], [-1,2]);
    this.addSymbologyData("Codabar","transmitCheckDigit", true, true, [0,1], [-1,2]);
    this.addSymbologyData("Codabar","verifyCheckDigit", true, "", [0,1,2,3], [-1,4]);
    this.addSymbologyData("Codabar","notisEditingType", true, "", [0,1,2], [-1,3]);
    this.addSymbologyData("Codabar","length1", true, 4, [0,55], [-1,56]);
    this.addSymbologyData("Codabar","length2", true, 55, [0,55], [-1,56]);
    this.addSymbologyData("Codabar","clsiEditing", true, false, [0,1], [-1,2]);
    this.addSymbologyData("Codabar","notisEditing", false, -1, -1, [-2,0,1]);
}