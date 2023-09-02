// action.js

// add a new device to the store
export const addDevice = (value) => ({
  type: "ADD_DEVICE",
  payload: value,
});

export const updateConnectionType = (deviceId, newConnectionType) => {
  return {
    type: "UPDATE_CONNECTION_TYPE",
    payload: { deviceId, newConnectionType },
  };
};

export const updateIPAddress = (deviceIdForIPAddress, newIPAddress) => {
  return {
    type: "UPDATE_IP_ADDRESS",
    payload: { deviceIdForIPAddress, newIPAddress },
  };
};

export const updatePort = (deviceIdForPort, newPort) => {
  return {
    type: "UPDATE_PORT",
    payload: { deviceIdForPort, newPort },
  };
};

export const updateSerial = (deviceIdForSerial, newSerial) => {
  return {
    type: "UPDATE_SERIAL",
    payload: { deviceIdForSerial, newSerial },
  };
};

export const updateDeviceName = (deviceIdForName, newName) => {
  return {
    type: "UPDATE_NAME",
    payload: { deviceIdForName, newName },
  };
};
