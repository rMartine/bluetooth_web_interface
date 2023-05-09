// getBluetoothDevices() - returns a promise that resolves to an arry with all available BT devices
/*export const getBluetoothDevices = () => {
    return new Promise((resolve, reject) => {
        navigator.bluetooth.getDevices()
        .then((devices) => {
            console.log('Devices found:', devices);
            resolve(devices);
        })
        .catch((error) => {
            reject(error);
        });
    });
};*/

export const getBluetoothDevices = () => {
    return new Promise((resolve, reject) => {
        navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: ['battery_service'],
        })
        .then((device) => {
            resolve([device]);
        })
        .catch((error) => {
            reject(error);
        });
    });
};

export const connectToDevice = (device) => {
    return new Promise((resolve, reject) => {
        device.gatt.connect()
        .then((server) => {
            resolve(server);
        })
        .catch((error) => {
            reject(error);
        });
    });
};

export const getDeviceCharacteristics = (device) => {
    return new Promise((resolve, reject) => {
        device.getPrimaryService('battery_service')
        .then((service) => {
            return service.getCharacteristics();
        })
        .then((characteristics) => {
            resolve(characteristics);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

export const btDisconnectDevice = (device) => {
    return new Promise((resolve, reject) => {
        device.gatt.disconnect()
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
}