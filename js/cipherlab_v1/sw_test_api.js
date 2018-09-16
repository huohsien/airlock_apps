
function test_BarCodeGetErrorMsg(in_name)
{
    var msg = js.BarCodeGetErrorMsg();
    var sParamNmInMsg = in_name;
    //if (in_name == "decodingillumniation")
    //{
    //    sParamNmInMsg = "decodingIllumination";
    //}
        
    // else if (in_name == "timeoutBetweenSameSymbology")
    //     sParamNmInMsg = "timeoutBetweenSameSymbol";

    var bError = true;
    var sMsg2 = "";
    if(msg==null)
    {
        bError = false;
        sMsg2="[null]";
    }
    else if(msg.indexOf(sParamNmInMsg)<0)
    {
        bError = false;
        sMsg2="["+msg+"]";
    }

    QUnit.assert.ok(bError, "[" + in_name + "]ErrorMsg passed"+sMsg2);
}

function test_api_return_object(in_name, in_obj) 
{
    var bOK = true;
    var sMsg="";
    if(in_obj == null)
    {
        bOK=false;
        sMsg="[null]";
    }
    else if(typeof(in_obj) == "undefined")
    {
        bOK=false;
        sMsg="[undefined]";
    }

    QUnit.assert.ok(bOK, "[" + in_name + "]API return value passed"+sMsg);
}

function test_api_return_to_true(in_name, in_value) 
{
    QUnit.assert.ok(in_value==true, "[" + in_name + "]API return value passed["+in_value+"]");
}

function test_BarCodeGetReaderOutputConfiguration_initial_value(in_name, in_iValue, in_obj)
{
    var value = in_obj[in_name];
    QUnit.assert.ok(value==in_iValue, "[" + in_name + "]initialization passed["+value+"][!="+in_iValue+"]");
}

function test_BarCodeGetDecodersStatus_initial_value(in_name, in_bSuported, in_iValue, in_obj)
{
    var value = in_obj[in_name];

    if(in_bSuported==true)
    {
        QUnit.assert.ok(typeof(value)!='undefined', "[" + in_name + "]supported passed");
    }
    else
    {
        //alert("test_BarCodeGetDecodersStatus_supported.in_name="+in_name);
        //alert("test_BarCodeGetDecodersStatus_supported.value="+value);
        QUnit.assert.ok(value==-1, "[" + in_name + "]not supported passed");
    }

    var sMsg3 = "";
    if(value!=in_iValue)
    {
        sMsg3 = "[!="+in_iValue+"]";
    }

    QUnit.assert.ok(value==in_iValue, "[" + in_name + "]initial value passed["+value+"]"+sMsg3);
}

function test_BarCodeSetDecodersStatus_valid_value(in_name, in_iValue)
{
    var in_iValues = js_toArray(in_iValue);
    
    for (var i = 0; i < in_iValues.length; i++) 
    {
        var iValue = in_iValues[i];

        var ojsdecoderstat = js.BarCodeGetDecodersStatus();
        ojsdecoderstat[in_name]=iValue;
    
        var ret = js.BarCodeSetDecodersStatus(ojsdecoderstat);
        var new_ojsdecoderstat = js.BarCodeGetDecodersStatus();
        var new_value = new_ojsdecoderstat[in_name];
    
        QUnit.assert.ok(new_value==iValue, "[Valid][" + in_name + "]set " + iValue + " passed["+new_value+"]");
        QUnit.assert.ok(ret==true, "[Valid][" + in_name + "]return TRUE passed["+ret+"]");
    }
}

function test_BarCodeSetDecodersStatus_invalid_value(in_name, in_iValue)
{
    var in_iValues = js_toArray(in_iValue);
    
    for (var i = 0; i < in_iValues.length; i++) 
    {
        var iValue = in_iValues[i];

        var ojsdecoderstat = js.BarCodeGetDecodersStatus();
        var old_value = ojsdecoderstat[in_name];
        ojsdecoderstat[in_name]=iValue;
    
        var ret = js.BarCodeSetDecodersStatus(ojsdecoderstat);
        var new_ojsdecoderstat = js.BarCodeGetDecodersStatus();
        var new_value = new_ojsdecoderstat[in_name];
    
        QUnit.assert.ok(new_value==old_value, "[Invalid][" + in_name + "]set " + iValue + " passed["+new_value+"]");
        QUnit.assert.ok(ret==false, "[Invalid][" + in_name + "]return FALSE passed["+ret+"]");
        
        test_BarCodeGetErrorMsg(in_name);
    }
}

function test_BarCodeGetUserPreferences_initial_value(in_name, in_bSuported, in_iValue, in_obj)
{
    var value = in_obj[in_name];
    if(in_bSuported==true)
    {
        QUnit.assert.ok(typeof(value)!='undefined', "[" + in_name + "]supported passed["+value+"]");
    }
    else
    {
        QUnit.assert.ok(value==-1, "[" + in_name + "]not supported passed["+value+"]");        
    }

    var sMsg3 = "";
    if(value!=in_iValue)
    {
        sMsg3 = "[!="+in_iValue+"]";
    }

    QUnit.assert.ok(value==in_iValue, "[" + in_name + "]initial value passed["+value+"]"+sMsg3);
}

function test_BarCodeSetUserPreferences_valid_value(in_name, in_iValue)
{
    var in_iValues = js_toArray(in_iValue);

    for (var i = 0; i < in_iValues.length; i++) 
    {
        var iValue = in_iValues[i];

        var objUserPreferences = js.BarCodeGetUserPreferences();
        objUserPreferences[in_name]=iValue;
    
        var ret = js.BarCodeSetUserPreferences(objUserPreferences);
        var new_objUserPreferences = js.BarCodeGetUserPreferences();
        var new_value = new_objUserPreferences[in_name];
    
        QUnit.assert.ok(new_value==iValue, "[Valid][" + in_name + "]set " + iValue + " passed["+new_value+"]");
        QUnit.assert.ok(ret==true, "[Valid][" + in_name + "]return TRUE passed["+ret+"]");
    }
}

function test_BarCodeSetUserPreferences_invalid_value(in_name, in_iValue)
{
    var in_iValues = js_toArray(in_iValue);

    for (var i = 0; i < in_iValues.length; i++) 
    {
        var iValue = in_iValues[i];

        var objUserPreferences = js.BarCodeGetUserPreferences();
        var old_value = objUserPreferences[in_name];
        objUserPreferences[in_name]=iValue;
    
        var ret = js.BarCodeSetUserPreferences(objUserPreferences);
        var new_objUserPreferences = js.BarCodeGetUserPreferences();
        var new_value = new_objUserPreferences[in_name];
    
        QUnit.assert.ok(new_value==old_value, "[Invalid][" + in_name + "]set " + iValue + " passed["+new_value+"]");
        QUnit.assert.ok(ret==false, "[Invalid][" + in_name + "]return FALSE passed["+ret+"]");
    
        test_BarCodeGetErrorMsg(in_name);
    }
}

function test_BarCodeGetSymbology_return_object(in_name, in_bSuported)
{
    var ret_BarCodeGetSymbology=js.BarCodeGetSymbology(in_name);

    var bOK=true;
    var sMsg="";
    if(ret_BarCodeGetSymbology==null)
    {
        bOK=false;
        sMsg="[null]";
    }
    
    if(typeof(ret_BarCodeGetSymbology)=='undefined')
    {
        bOK=false;
        sMsg+="[undefined]";
    }

    if(in_bSuported==true)
    {
        QUnit.assert.ok(bOK==true, "[" + in_name + "]API return value passed"+sMsg);
        return ret_BarCodeGetSymbology;
    }
    else
    {
        QUnit.assert.ok(bOK==false, "[" + in_name + "]return not supported value passed"+sMsg);
    }
}

function test_BarCodeGetSymbology_initial_value(in_paramName_name, in_bSuported, in_iValue, in_obj)
{
    var value = in_obj[in_paramName_name];

    if(in_bSuported==true)
    {
        QUnit.assert.ok(typeof(value)!='undefined', "[" + in_paramName_name + "]supported passed["+value+"]");
    }
    else
    {
        var sMsg2 = "";
        if(typeof(value)=='undefined')
        {
            //value=-1;
            sMsg2 = "<undefined>";
            value=-1;
        }


        QUnit.assert.ok(value==-1, "[" + in_paramName_name + "]not supported passed["+value+"]"+sMsg2);
    }

    var sMsg3 = "";
    if(value!=in_iValue)
    {
        sMsg3="[!="+in_iValue+"]";
    }

    QUnit.assert.ok(value==in_iValue, "[" + in_paramName_name + "]initial value passed["+value+"]"+sMsg3);
}

function test_BarCodeSetSymbology_valid_value(symbology_name, in_name, in_iValue)
{
    var in_iValues = js_toArray(in_iValue);
    
    for (var i = 0; i < in_iValues.length; i++) 
    {
        var iValue = in_iValues[i];

        var objSymbology = js.BarCodeGetSymbology(symbology_name);
        objSymbology[in_name]=iValue;
    
        var ret = js.BarCodeSetSymbology(objSymbology);
        var new_objSymbology = js.BarCodeGetSymbology(symbology_name);
        var new_value = new_objSymbology[in_name];
    
        QUnit.assert.ok(new_value==iValue, "[Valid][" + in_name + "]set " + iValue + " passed["+new_value+"]");
        QUnit.assert.ok(ret==true, "[Valid][" + in_name + "]return TRUE passed["+ret+"]");
    }
}

function test_BarCodeSetSymbology_invalid_value(symbology_name, in_name, in_iValue)
{
    var in_iValues = js_toArray(in_iValue);
    
    for (var i = 0; i < in_iValues.length; i++) 
    {
        var iValue = in_iValues[i];

        var objSymbology = js.BarCodeGetSymbology(symbology_name);
        var old_value = objSymbology[in_name];
        objSymbology[in_name]=iValue;
    
        var ret = js.BarCodeSetSymbology(objSymbology);
        var new_objSymbology = js.BarCodeGetSymbology(symbology_name);
        var new_value = new_objSymbology[in_name];
    
        QUnit.assert.ok(new_value==old_value, "[Invalid][" + in_name + "]set " + iValue + " passed["+new_value+"]");
        QUnit.assert.ok(ret==false, "[Invalid][" + in_name + "]return FALSE passed["+ret+"]");
    
        test_BarCodeGetErrorMsg(in_name);
    }
}