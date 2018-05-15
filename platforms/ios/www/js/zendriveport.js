
// Please get a key from http://developers.Zendrive.com if you don't have one
var applicationKey = "VTVHX5Vv6zItZUVAX1k9pXEUk0YM3tTo";

var ZenDrivePort = {

    processStartOfDrive: function (zendriveDriveStartInfo) {
        console.log("processStartOfDrive: " + JSON.stringify(zendriveDriveStartInfo));
        alert('Started tracking');
    },

    processActiveDrive: function (zendriveActiveDriveInfo) {
        var stringifiedActiveDriveInfo = "null";
        if (zendriveActiveDriveInfo != null) {
            stringifiedActiveDriveInfo = JSON.stringify(zendriveActiveDriveInfo);
        }
        console.log("processActiveDrive: " + stringifiedActiveDriveInfo);
    },

    processEndOfDrive: function (zendriveDriveInfo) {
        console.log("processEndOfDrive: " + JSON.stringify(zendriveDriveInfo));
        alert('Stopped tracking');
    },

    processLocationDenied: function () {
        console.log("Location denied, please enable location services to keep Zendrive working");
    },

    callSetup: function () {

        var company = 'pullup';
        var user = 'zieglerc';
        var name = 'Christian Ziegler';

        // Unique id of the driver using the app.
        var driverId = company + "-" + user;
        
        var config = new Zendrive.ZendriveConfiguration(applicationKey, driverId);
        var driverAttributes = new Zendrive.ZendriveDriverAttributes();
        driverAttributes.firstName = name;
        //driverAttributes.lastName = "";
        driverAttributes.email = "";
        driverAttributes.group = 'company-' + company;
        //driverAttributes.phoneNumber = '';

        config.driverAttributes = driverAttributes;
        config.driveDetectionMode = Zendrive.ZendriveDriveDetectionMode.ZendriveDriveDetectionModeAutoON;

        console.log('Zendrive config: ' + JSON.stringify(config));
        
        Zendrive.setup(config, new Zendrive.ZendriveCallback(this.processStartOfDrive,
            this.processEndOfDrive, this.processLocationDenied), function () {

                console.log("Setup done!");
                alert('Setup done');

                if (!window.localStorage.getItem('zendrive_trackingId') || window.localStorage.getItem('zendrive_trackingId') == '') {
                    //Inicio do zendrive automatico
                    ZenDrivePort.callStartDrive();
                }

            },
            function (error) {
                alert('Setup failed');
                console.log("Setup failed: " + error);
            });
    },

    callTeardown: function () {
        Zendrive.teardown();
        console.log("Teardown Done!");
    },

    generateDriveTrackingId: function () {
        var d = new Date();
        var n = d.getTime();
        trackingId = n.toString()
        window.localStorage.setItem('zendrive_trackingId', trackingId);
        return trackingId;
    },

    callStartDrive: function () {
        trackingId = this.generateDriveTrackingId();
        Zendrive.startDrive(trackingId, this.processStartOfDrive);
    },

    callGetActiveDrive: function () {
        Zendrive.getActiveDriveInfo(this.processActiveDrive);
    },

    callStopDrive: function () {
        Zendrive.stopDrive(window.localStorage.getItem('zendrive_trackingId'));
        window.localStorage.setItem('zendrive_trackingId', '');
        trackingId = null;
    },

    callStartSession: function () {
        var sessionId = "Session1";
        Zendrive.startSession(sessionId);
        console.log("Session started");
    },

    callStopSession: function () {
        Zendrive.stopSession();
        console.log("Session stopped");
    },

    setDriveDetectionOn: function () {
        Zendrive.setDriveDetectionMode(Zendrive.ZendriveDriveDetectionMode.ZendriveDriveDetectionModeAutoON);
        console.log("Drive detection mode ON");
    },

    setDriveDetectionOff: function () {
        Zendrive.setDriveDetectionMode(Zendrive.ZendriveDriveDetectionMode.ZendriveDriveDetectionModeAutoOFF);
        console.log("Drive detection mode OFF");
    }
}