function reader_parseReaderInfo(sOrigReaderType)
{
    //alert("parseReaderType");
    var aReaderInfo = sOrigReaderType.split("_");
    var oReaderInfo = {
      Name: aReaderInfo.length == 3 ? aReaderInfo[2] : aReaderInfo[0],
      Dim: aReaderInfo[1],
    };
  
    //alert("parseReaderType.oReaderInfo"+oReaderInfo);
    return oReaderInfo;
}

function reader_getReaderTypeName() 
{
    var readerType = js.BarCodeGetReaderType();
    var oJsReaderInfo = reader_parseReaderInfo(readerType);

    return oJsReaderInfo.Name;
}