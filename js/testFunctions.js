if (typeof airlock == "undefined") {
    var airlock = {
        onReady() {
            alert("airlock dummy was invoked");
        }
    }
}
function handleUseWedgeChanged(select, textElement) {
    if (typeof airlock != "undefined") {
        try {
            var value = parseInt(select.value);
            airlock.scanning.setPopulationMethod(value);
        } catch (error) {
            // textElement.textContent = "Error: " + error;
            alert("Error: " + error);
        }
    }
}

function initWedge(textElement) {
    try {
        var populationMethod = airlock.scanning.getPopulationMethod();
        var select = document.getElementById("populationMethodSelect");
        select.value = populationMethod + "";
    } catch (error) {
        // textElement.textContent = "Error: " + error;
        alert("Error: " + error);
    }
}

airlock.onReady("handleAirlockReady()");

function handleAirlockReady() {

    initWedge('testScannerText');

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
                result = `${result}\n <p>${propertyName}</p> <p>${decoders[propertyName]}</p><hr>`;
            });

            document.getElementById("result").innerHTML = result;

            //Test: BarCodeGetSymbology(...)
            // get symbology names from decoders status
            try {
                var symbologyNames = decoderNames;

                symbologyNames.forEach((symbologyName) => {

                    if (symbologyName != "_decoderMap") {

                        var symbology = BarCodeGetSymbology(symbologyName);
                        var symbologyProperties = Object.keys(symbology);
                        result3 = `${result3}\n <h3>${symbologyName}</h3><hr>`;
                        symbologyProperties.forEach(propertyName => {
                            if (propertyName != "name" && propertyName != "decoderId") {
                                result3 = `${result3}\n <p>${propertyName}</p> <p>${symbology[propertyName]}</p><hr>`;
                            }
                        });

                    }
                });

                document.getElementById("result3").innerHTML = result3;

            } catch (error) {
                document.getElementById("result3").textContent = `error: ${error}`;
            }
        });

    } catch (error) {
        document.getElementById("result").textContent = `error: ${error}`;
    }

    //Test: BarCodeGetReaderOutputConfiguration()
    try {
        var readerOutputConfig = BarCodeGetReaderOutputConfiguration();
        var readerOutputConfigProperties = Object.keys(readerOutputConfig); // if comment it out, then will test decoders against predefined propterty in testData.js file

        readerOutputConfigProperties.forEach(propertyName => {
            result2 = `${result2}\n <p>${propertyName}</p> <p>${readerOutputConfig[propertyName]}</p>`;
        });
        document.getElementById("result2").innerHTML = result2;

    } catch (error) {
        document.getElementById("result2").textContent = `error: ${error}`;
    }


    //Test: BarCodeGetErrorMsg(...)
    try {
        var errorMessage = BarCodeGetErrorMsg();
        result4 = `${result4}\n <p>${errorMessage}</p><hr>`;
        document.getElementById("result4").innerHTML = result4;

    } catch (error) {
        document.getElementById("result4").textContent = `error: ${error}`;
    }

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