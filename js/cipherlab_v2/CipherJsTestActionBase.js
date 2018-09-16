class CipherJsDataItem
{
    constructor(symbology_name, param_name, supported, default_cl_value, valid_values, invalid_values)
    {
        this.symbology_name = symbology_name;
        this.param_name = param_name;
        this.supported = supported;
        this.default_cl_value = default_cl_value;
        this.valid_values = valid_values;
        this.invalid_values = invalid_values;
    }

    toString() 
    {
        return '('+this.symbology_name+', ' + this.name + ', ' + this.supported + ', ' + this.default_cl_value + ', ' + this.valid_values + ', ' + this.invalid_values + ')';
    }
}

class CipherJsTestDataBase{}

CipherJsTestDataBase.ReaderTypeName="";
CipherJsTestDataBase.DecodersStatusDataList=[];
CipherJsTestDataBase.SymbologyDataList=[];

CipherJsTestDataBase.setReaderTypeName=function(readerTypeName)
{
    this.ReaderTypeName=readerTypeName;
}

CipherJsTestDataBase.getReaderTypeName=function()
{
    return this.ReaderTypeName;
}

CipherJsTestDataBase.getDecodersStatusDataList=function()
{
    return this.DecodersStatusDataList;
}

CipherJsTestDataBase.addDecodersStatusData=function(param_name, supported, default_cl_value, valid_values, invalid_values)
{
    var cipher_js_data_item = new CipherJsDataItem("DecodersStatus", param_name, supported, default_cl_value, valid_values, invalid_values);
    this.DecodersStatusDataList.push(cipher_js_data_item);
}
                     
//CipherJsTestDataBase.addDecodersStatusDataAuto=function(name, supported)
//{
//    var default_cl_value;
//    var valid_values;
//    var invalid_values;

//    if(supported==true)
//    {
//        default_cl_value = 0;
//        valid_values = [0,1];
//        invalid_values = [-1, 2];
//    }
//    else
//    {
//        default_cl_value = -1;
//        valid_values = -1;
//        invalid_values = [-2, 0, 1, 2];
//    }

//    this.addDecodersStatusData(name, supported, default_cl_value, valid_values, invalid_values);
//}

CipherJsTestDataBase.getSymbologyNameList=function()
{
    var symbology_name_list = [];
    var last_symbology_name = null;

    this.SymbologyDataList.forEach(function(item) 
    {
        var symbology_name = item.symbology_name;

        if(last_symbology_name==null)
        {
            last_symbology_name = symbology_name;
            symbology_name_list.push(last_symbology_name);
        }
        else
        {
            if(last_symbology_name!=symbology_name)
            {
                last_symbology_name = symbology_name;
                symbology_name_list.push(last_symbology_name);
            }
        }
    });

    return symbology_name_list;
}

CipherJsTestDataBase.getSymbologyData=function(in_symbology_name)
{
    var list = [];

    if(in_symbology_name==null || in_symbology_name=="")
    {
        return list;
    }

    this.SymbologyDataList.forEach(function(item) 
    {
        var symbology_name = item.symbology_name;
        // var param_name = item.param_name;
        // var supported = item.supported;
        // var default_cl_value = item.default_cl_value;
        // var valid_values = item.valid_values;
        // var invalid_values = item.invalid_values;

        if(symbology_name==in_symbology_name)
        {
            list.push(item);
        }
    });

    return list;
}

CipherJsTestDataBase.addSymbologyData=function(symbology_name, param_name, supported, default_cl_value, valid_values, invalid_values)
{
    //alert("addSymbologyData("+symbology_name+", "+param_name+", "+supported+", "+default_cl_value+", "+valid_values+", "+invalid_values+")");

    var cipher_js_data_item = new CipherJsDataItem(symbology_name, param_name, supported, default_cl_value, valid_values, invalid_values);
    this.SymbologyDataList.push(cipher_js_data_item);
}


class CipherJsTestActionBase extends CipherJsTestDataBase{}

CipherJsTestActionBase.doJsAllTestModule=function()
{
    this.doJsScannerAPITestModule();
    this.doJsDecodersStatusTestModule();
    this.doJsSymbologyTestModule();
}

CipherJsTestActionBase.doJsScannerAPITestModule=function()
{
    QUnit.module("SCANNER API");

    QUnit.test("BarCodeGetActive", function(assert) 
    {
        var value = null;

        try 
        {
            value = BarCodeGetActive();
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeGetActive", error);
            return;
        }

        assert_same_value("BarCodeGetActive", value, true);
    });

    QUnit.test("BarCodeGetApiVersion", function(assert) 
    {
        var value = null;

        try 
        {
            value = BarCodeGetApiVersion();
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeGetApiVersion", error);
            return;
        }

        assert_same_value("BarCodeGetApiVersion", value, "1.1.17");
    });

    QUnit.test("BarCodeGetErrorMsg", function(assert) 
    {
        var ret_value = null;
        try 
        {
            ret_value = BarCodeGetErrorMsg();
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeGetErrorMsg", error);
            return;
        }

        assert_same_value("BarCodeGetErrorMsg", ret_value, "");
    });

    QUnit.test("BarCodeGetReaderData", function(assert) 
    {
        var ret_value = null;

        try 
        {
            ret_value = BarCodeGetReaderData();
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeGetReaderData", error);
            return;
        }

        assert_same_value("BarCodeGetReaderData", ret_value, "");
    });

    QUnit.test("BarCodeGetReaderOutputConfiguration", function(assert)
    {
        var ret_value = null;
        
        try 
        {
            ret_value = BarCodeGetReaderOutputConfiguration();
            assert_not_null_value("BarCodeGetReaderOutputConfiguration", ret_value, null);
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeGetReaderOutputConfiguration", error);
            return;
        }

        assert_same_value_of_object("enableKeyboardEmulation", ret_value, "InputMethod");
        assert_same_value_of_object("autoEnterWay", ret_value, "SuffixData");
        assert_same_value_of_object("autoEnterChar", ret_value, "\r");
        assert_same_value_of_object("showCodeType", ret_value, false);
        assert_same_value_of_object("showCodeLen", ret_value, false);
        assert_same_value_of_object("szPrefixCode", ret_value, "");
        assert_same_value_of_object("szSuffixCode", ret_value, "");
        assert_same_value_of_object("useDelim", ret_value, 0);
        assert_same_value_of_object("szCharsetName", ret_value, "utf-8");
        assert_same_value_of_object("clearPreviousData", ret_value, 0);
    });

    QUnit.test("BarCodeSetReaderOutputConfiguration(configuration)", function(assert) 
    {
        var ret_value1 = null;
        var ret_value2 = null;
        var ret_value3 = null;

        try 
        {
            ret_value1 = BarCodeGetReaderOutputConfiguration();
            assert_not_null_value("BarCodeGetReaderOutputConfiguration", ret_value1);
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeGetReaderOutputConfiguration", error);
            return;
        }

        try 
        {
            ret_value2 = BarCodeSetReaderOutputConfiguration(ret_value1);
            assert_not_null_value("BarCodeSetReaderOutputConfiguration", ret_value2);
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeSetReaderOutputConfiguration", error);
            return;
        }

        try 
        {
            ret_value3 = BarCodeGetReaderOutputConfiguration();
            assert_not_null_value("BarCodeGetReaderOutputConfiguration", ret_value3);
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeGetReaderOutputConfiguration", error);
            return;
        }

        assert_same_value_of_object("enableKeyboardEmulation", ret_value, "InputMethod");
        assert_same_value_of_object("autoEnterWay", ret_value, "SuffixData");
        assert_same_value_of_object("autoEnterChar", ret_value, "\r");
        assert_same_value_of_object("showCodeType", ret_value, false);
        assert_same_value_of_object("showCodeLen", ret_value, false);
        assert_same_value_of_object("szPrefixCode", ret_value, "");
        assert_same_value_of_object("szSuffixCode", ret_value, "");
        assert_same_value_of_object("useDelim", ret_value, 0);
        assert_same_value_of_object("szCharsetName", ret_value, "utf-8");
        assert_same_value_of_object("clearPreviousData", ret_value, 0);
    }); 

    QUnit.test("BarCodeGetReaderServiceVersion", function(assert) 
    {
        var ret_value = null;

        try 
        {
            ret_value = BarCodeGetReaderServiceVersion();
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeGetReaderServiceVersion", error);    
            return;
        }

        assert_same_value("BarCodeGetReaderServiceVersion", ret_value, "1.2.55");
    });

    QUnit.test("BarCodeGetNotificationParams", function(assert) 
    {
        var ret_value = null;

        try 
        {
            ret_value = BarCodeGetNotificationParams();
            assert_same_value("BarCodeGetNotificationParams", ret_value);
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeGetNotificationParams", error);    
            return;
        }

        assert_same_value_of_object("ledDuration", ret_value, 0);
        assert_same_value_of_object("vibrationCounter", ret_value, 1);
        assert_same_value_of_object("enableVibrator", ret_value, false);
        assert_same_value_of_object("ReaderBeep", ret_value, "Default");
    });

    QUnit.test("BarCodeSetNotificationParams(params)", function(assert) 
    {
        var ret_value1 = null;
        var ret_value2 = null;
        var ret_value3 = null;

        try 
        {
            ret_value1 = BarCodeGetNotificationParams();
            assert_not_null_value("BarCodeGetNotificationParams", ret_value1);
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeGetNotificationParams", error);
            return;
        }

        try 
        {
            ret_value2 = BarCodeSetNotificationParams(ret_value1);
            assert_not_null_value("BarCodeSetNotificationParams", ret_value2);
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeSetNotificationParams", error);
            return;
        }

        try 
        {
            ret_value3 = BarCodeGetNotificationParams();
            assert_not_null_value("BarCodeGetNotificationParams", ret_value3);
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeGetNotificationParams", error);
            return;
        }

        assert_same_value_of_object("ledDuration", ret_value3, 0);
        assert_same_value_of_object("vibrationCounter", ret_value3, 1);
        assert_same_value_of_object("enableVibrator", ret_value3, false);
        assert_same_value_of_object("ReaderBeep", ret_value3, "Default");
    });
}

CipherJsTestActionBase.doJsDecodersStatusTestModule=function()
{
    QUnit.module("DecodersStatus");

    QUnit.test("BarCodeGetDecodersStatus[init]", function(assert)
    {
        try 
        {
            BarCodeReset();
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeReset", error);
            return;
        }

        var ret_value = null;

        try 
        {
            ret_value = BarCodeGetDecodersStatus();
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeGetDecodersStatus", error);
            return;
        }

        var testData = CipherJsTestDataBase.getDecodersStatusDataList();
        testData.forEach(function(item) 
        {
            var param_name = item.param_name;
            var supported = item.supported;
            var default_cl_value = item.default_cl_value;
            var valid_values = item.valid_values;
            var invalid_values = item.invalid_values;

            assert_BarCodeGetDecodersStatus_init_value(param_name, supported, ret_value, default_cl_value);
        });
    });

    QUnit.test("BarCodeSetDecodersStatus[valid]", function(assert)
    {
        var testData = CipherJsTestDataBase.getDecodersStatusDataList();
        testData.forEach(function(item) 
        {
            var param_name = item.param_name;
            var supported = item.supported;
            var default_cl_value = item.default_cl_value;
            var valid_values = item.valid_values;
            var invalid_values = item.invalid_values;

            assert_BarCodeSetDecodersStatus_valid_value(param_name, valid_values);
        });
    });

    QUnit.test("BarCodeSetDecodersStatus[invalid]", function(assert)
    {
        var testData = CipherJsTestDataBase.getDecodersStatusDataList();
        testData.forEach(function(item) 
        {
            var param_name = item.param_name;
            var supported = item.supported;
            var default_cl_value = item.default_cl_value;
            var valid_values = item.valid_values;
            var invalid_values = item.invalid_values;

            assert_BarCodeSetDecodersStatus_invalid_value(name, invalid_values);
        });
    });
}

CipherJsTestActionBase.doJsSymbologyItemTestModule=function(symbology_name, cipherJsSymbologyDataItem)
{
    //alert("doJsSymbologyItemTestModule("+symbology_name+","+cipherJsSymbologyDataItem+")");

    QUnit.test(symbology_name+"[init]", function(assert)
    {
        var ret_BarCodeGetSymbology = null;

        try 
        {
            ret_BarCodeGetSymbology = BarCodeGetSymbology(symbology_name);
        } 
        catch (error) 
        {
            assert_not_defined_api("BarCodeGetSymbology", error);
            return;
        }

        cipherJsSymbologyDataItem.forEach(function(item) 
        {
            var param_name = item.param_name;
            var supported = item.supported;
            var default_cl_value = item.default_cl_value;
            var valid_values = item.valid_values;
            var invalid_values = item.invalid_values;

            //alert("param_name="+param_name);
            //alert("supported="+supported);
            //alert("ret_BarCodeGetSymbology="+ret_BarCodeGetSymbology);
            //alert("default_cl_value="+default_cl_value);

            assert_BarCodeGetSymbology_init_value(param_name,supported,ret_BarCodeGetSymbology,default_cl_value);
        });
    });

    QUnit.test(symbology_name+"[valid]", function(assert)
    {
        cipherJsSymbologyDataItem.forEach(function(item) 
        {
            var param_name = item.param_name;
            var supported = item.supported;
            var default_cl_value = item.default_cl_value;
            var valid_values = item.valid_values;
            var invalid_values = item.invalid_values;

            assert_BarCodeSetSymbology_valid_value(symbology_name, param_name, valid_values);
        });
    });

    QUnit.test(symbology_name+"[invalid]", function(assert)
    {
        cipherJsSymbologyDataItem.forEach(function(item) 
        {
            var param_name = item.param_name;
            var supported = item.supported;
            var default_cl_value = item.default_cl_value;
            var valid_values = item.valid_values;
            var invalid_values = item.invalid_values;

            assert_BarCodeSetSymbology_invalid_value(symbology_name, param_name, invalid_values);
        });
    });
}

CipherJsTestActionBase.doJsSymbologyTestModule=function()
{
    QUnit.module("Symbology");

    var symbologyNameList = CipherJsTestDataBase.getSymbologyNameList();
    if(symbologyNameList==null)
    {
        alert("No SymbologyNameList!!");
        return;
    }

    symbologyNameList.forEach(function(item) 
    {
        var symbology_name = item;
        var data_list = CipherJsTestDataBase.getSymbologyData(symbology_name);

        CipherJsTestActionBase.doJsSymbologyItemTestModule(symbology_name, data_list);
    });
}




