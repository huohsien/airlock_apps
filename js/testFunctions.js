if (typeof airlock == "undefined") {
    var airlock = {
        onReady() {
            alert("airlock dummy was invoked");
        }
    }
}

airlock.onReady("handleAirlockReady()");

function handleAirlockReady() {
    var value = BarCodeGetReaderType();
    document.getElementById("reader_type").textContent = `Reader Type: ${value}`;
    value = BarCodeGetReaderServiceVersion();
    document.getElementById("service_version").textContent = `Service Version: ${value}`;

    var decoderNames = new Array();
    var result = "<h2>Test: BarCodeGetDecodersStatus()</h2><hr>";
    var result2 = "<h2>Test: BarCodeGetReaderOutputConfiguration()</h2> <hr>";
    var result3 = "<h2>Test: BarCodeGetSymbology(...)</h2><hr>";
    var result4 = "<h2> Test: BarCodeGetErrorMsg()</h2><hr>";
    var result5 = "<h2> Test: BarCodeGetUserPreferences()</h2><hr>";
    var result6 = "<h2> Test: BarCodeGetNotificationParams()</h2><hr>";

    // Test: BarCodeGetDecodersStatus()
    try {
        var decoderStatusPromise = BarCodeGetDecodersStatus();

        decoderStatusPromise.then((decoders) => {
            var decoderProperties = Object.keys(decoders); // if comment it out, then will test decoders against predefined propterty in testData.js file
            
            decoderProperties.forEach(propertyName => {
                var decoderName = propertyName.replace(/^enable/, '');
                decoderNames.push(decoderName);

                result = `${result}\n <p>${propertyName}</p> <p>${decoders[propertyName]}</p>`;
            });
            alert(decoderNames[0] + " was pushed")

            document.getElementById("result").innerHTML = result;

        });

    } catch (error) {
        document.getElementById("result").textContent = `error: ${error}`;
    }

    Test: BarCodeGetReaderOutputConfiguration()
    try {
        var readerOutputConfig = BarCodeGetReaderOutputConfiguration();
        // document.getElementById("result2").textContent = JSON.stringify(readerOutputConfig);

        var readerOutputConfigProperties = Object.keys(readerOutputConfig); // if comment it out, then will test decoders against predefined propterty in testData.js file

        readerOutputConfigProperties.forEach(propertyName => {
            result2 = `${result2}\n <p>${propertyName}</p> <p>${readerOutputConfig[propertyName]}</p>`;
        });
        document.getElementById("result2").innerHTML = result2;

    } catch (error) {
        document.getElementById("result2").textContent = `error: ${error}`;
    }

    //Test: BarCodeGetSymbology(...)
    // get symbology names from decoders status
    try {
        var symbologyNames = decoderNames;
        result3 = `${result3}\n <p>${symbologyNames[0]}</p><hr>`;

        symbologyNames.forEach((symbologyName) => {
            
            var symbology = BarCodeGetSymbology(symbologyName);

            var symbologyProperties = Object.keys(symbology);

            symbologyProperties.forEach(propertyName => {
                result3 = `${result3}\n <p>${propertyName}</p> <p>${symbology[propertyName]}</p> <hr>`;
            });
        });

        document.getElementById("result3").innerHTML = result3;

    } catch (error) {
        document.getElementById("result3").textContent = `error: ${error}`;
    }

    //Test: BarCodeGetErrorMsg(...)
    // try {
    //     var errorMessage = BarCodeGetErrorMsg();
    //     result4 = `<h3>${errorMessage}</h3><hr>`;
    //     document.getElementById("result4").innerHTML = result4;

    // } catch (error) {
    //     document.getElementById("result4").textContent = `error: ${error}`;
    // }

    // Test: BarCodeGetUserPreferences(...)
    try {
        var userPreferences = BarCodeGetUserPreferences();
        var userPreferenceKeys = Object.keys(userPreferences);

        userPreferenceKeys.forEach(propertyName => {
            result5 = `${result5}\n <p>${propertyName}</p> <p>${userPreferences[propertyName]}</p>`;
        });

        document.getElementById("result5").innerHTML = result5;

    } catch (error) {
        document.getElementById("result5").textContent = `error: ${error}`;
    }

    //Test: BarCodeGetNotificationParams(...)
    try {
        var notificationParams = BarCodeGetNotificationParams();
        var notificationParamKeys = Object.keys(notificationParams);

        notificationParamKeys.forEach(propertyName => {
            result6 = `${result6}\n <p>${propertyName}</p> <p>${notificationParams[propertyName]}</p>`;
        });

        document.getElementById("result6").innerHTML = result6;

    } catch (error) {
        document.getElementById("result6").textContent = `error: ${error}`;
    }

}