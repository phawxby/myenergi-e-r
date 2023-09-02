import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addDevice } from "../redux/action";
import { connect } from "react-redux";
import DeviceMonitor from "../components/DeviceMonitor";

const Dashboard = ({ deviceList }) => {
  console.log("dashboard is being rendered");

  // create matix for the UDL
  const xx = 110;
  const yy = 15;

  var displayMatrix = new Array(yy);
  for (var i = 0; i < displayMatrix.length; i++) {
    displayMatrix[i] = new Array(xx).fill("&nbsp;");
  }

  // template for a new device
  const newDevice = {
    id: deviceList.length + 1,
    name: "Device Name",
    connectionType: false,
    IPAddress: "Not",
    port: "Connected",
    serial: "Insert Serial Number",
    terminal: "",
    log: "",
    UDL: displayMatrix,
    showTerminal: true,
    showLog: false,
    showUDL: false,
    showGraph: false,
    v1: [],
    v2: [],
    v3: [],
    v4: [],
    xx: xx,
    yy: yy,
  };

  const dispatch = useDispatch();

  const addNewDevice = () => {
    console.log("adding a new device");
    dispatch(addDevice([...deviceList, newDevice]));
  };

  return (
    <div className="ml-16 min-h-screen min-w-full bg-zinc-700">
      <div className="bg-zinc-800 mb-2 shadow-md ">
        <h1 className="mx-2 text-white bg-zinc-800 font-bold shadow-md">
          Dashboard
        </h1>
      </div>
      {deviceList.map((device, index) => (
        <div key={device.id}>
          {/* {console.log("Showing Device", device.id)} */}
          <DeviceMonitor
            id={device.id}
            thisDevice={deviceList[device.id - 1]}
          />
        </div>
      ))}

      <button onClick={addNewDevice} className="add-device group HiOutlineCog">
        <AiOutlinePlus size="28" />
        <span className="sidebar-tooltip group-hover:scale-100">
          Add a new device
        </span>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  deviceList: state.deviceList,
});

const mapDispatchToProps = {
  addDevice,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
