class CipherJsTest_EX25 extends CipherJsTestActionBase{}
var jsTestEX25 = CipherJsTest_EX25 || {};

CipherJsTest_EX25.initCipherJsData=function()
{
    this.setReaderTypeName("EX25");

    this.addDecodersStatusData("enableCodabar", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableCode11", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableCode39", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableTriopticCode39", true, 0, [0,1], [-1, 2]);
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
    this.addDecodersStatusData("enableCompositeCC_AB", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableCompositeCC_C", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableComVositeTlc39", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableUSVlanet", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableUSPostnet", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableUKPostal", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableJapanPostal", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableAustralianPostal", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableDutchPostal", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableUSPSPostal", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enableUPUFICSPostal", false, -1, -1, [-2, 0, 1, 2]);
    this.addDecodersStatusData("enablePlessey", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableTelepen", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableAztec", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableDataMatrix", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableMaxiCode", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enablePDF417", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableMicroPDF417", true, 0, [0,1], [-1, 2]);
    this.addDecodersStatusData("enableQRcode", true, 0, [0,1], [-1, 2]);
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