import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Footer from "./features/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./features/Navbar/Navbar";
import Services from "./components/Services/Services";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Signup from "./components/Signup/Signup";
import BDashboard from "./components/building/dashboard/BDashboard";
import BPayment from "./components/building/dashboard/BPayment";
import BChatRoom from "./components/building/dashboard/BChatRoom";
import BChatRoomChat from "./components/building/dashboard/BChatRoomChat";
import BSecurity from "./components/building/security/Security";
import BPool from "./components/building/pool/Pool";
import BGarden from "./components/building/garden/Garden";
import AddBGarden from "./components/building/garden/AddBGarden";
import EditBGarden from "./components/building/garden/EditBGarden";
import BResidents from "./components/building/residents/Residents";
import EditBResident from "./components/building/residents/EditBResident";
import AddBPoolManager from "./components/building/pool/AddBPoolManager";
import EditBPoolManager from "./components/building/pool/EditBPoolManager";
import BActivities from "./components/building/dashboard/BActivities";
import BActivitiesEdit from "./components/building/dashboard/BActivitiesEdit";
import BActivitiesAdd from "./components/building/dashboard/BActivitiesAdd";
import BVisitors from "./components/building/visitors/Visitors";
import AddBVisitors from "./components/building/visitors/AddBVisitors";
import EditBVisitors from "./components/building/visitors/EditBVisitors";
import GDashboard from "./components/garden/dashboard/GDashboard";
import GTimings from "./components/garden/dashboard/GTimings";
import GTimingsAdd from "./components/garden/dashboard/GTimingsAdd";
import GTimingsEdit from "./components/garden/dashboard/GTimingsEdit";
import GResidents from "./components/garden/residents/Residents";
import AddGResidents from "./components/garden/residents/AddGResidents";
import EditGResidents from "./components/garden/residents/EditGResidents";
import GVisitors from "./components/garden/visitors/Visitors";
import AddGVisitors from "./components/garden/visitors/AddGVisitors";
import EditGVisitors from "./components/garden/visitors/EditGVisitors";
import GTiming from "./components/garden/timing/Timing";
import GChatroom from "./components/garden/chatroom/Chatroom";
import GChatroomChat from "./components/garden/chatroom/GChatroomChat";
import PChatroom from "./components/pool/chatroom/Chatroom";
import PChatroomChat from "./components/pool/chatroom/PChatroomChat";
import PTiming from "./components/pool/timing/Timing";
import PResidents from "./components/pool/residents/Residents";
import PVisitors from "./components/pool/visitors/Visitors";
import PDashboard from "./components/pool/dashboard/GDashboard";
import PPool from "./components/pool/dashboard/PPool";
import PPoolAdd from "./components/pool/dashboard/PPoolAdd";
import PPoolEdit from "./components/pool/dashboard/PPoolEdit";
import RChatroom from "./components/residents/chatroom/Chatroom";
import RChatroomChat from "./components/residents/chatroom/RChatroomChat";
import RTiming from "./components/residents/timing/Timing";
import RVehicle from "./components/residents/vehicle/Vehicle";
import AddRVehicle from "./components/residents/vehicle/AddRVehicle";
import EditRVehicle from "./components/residents/vehicle/EditRVehicle";
import RMembership from "./components/residents/membership/Membership";
import RPayments from "./components/residents/membership/RPayments";
import RPaymentsAdd from "./components/residents/membership/RPaymentsAdd";
import RPaymentsEdit from "./components/residents/membership/RPaymentsEdit";
import RAccountUpdate from "./components/residents/membership/RAccountUpdate";
import RAccountPassword from "./components/residents/membership/RAccountPassword";
import SDashboard from "./components/security/dashboard/GDashboard"; 
import SResidents from "./components/security/residents/Residents";
import AddResidents from "./components/security/residents/AddResidents";
import EditResident from "./components/security/residents/EditResident";
import SSecurity from "./components/security/security/Security";
import STiming from "./components/security/timing/Timing";
import AddSTiming from "./components/security/timing/AddSTiming";
import EditSTiming from "./components/security/timing/EditSTiming";
import SVisitors from "./components/security/visitors/Visitors";
import AddVisitor from "./components/security/visitors/AddVisitor";
import EditSecurity from "./components/building/security/EditSecurity";
import AddSecurity from "./components/building/security/AddSecurity";
import AddBResidents from "./components/building/residents/AddBResidents";
import SChatroom from "./components/security/chatroom/Chatroom";
import SChatroomChat from "./components/security/chatroom/SChatroomChat";
import VChatroom from "./components/visitors/chatroom/Chatroom";
import VChatroomChat from "./components/visitors/chatroom/VChatroomChat";
import VVehicle from "./components/visitors/vehicle/Vehicle";
import VVehicleAdd from "./components/visitors/vehicle/VVehicleAdd";
import VVehicleEdit from "./components/visitors/vehicle/VVehicleEdit";
import VAccountUpdate from "./components/visitors/vehicle/VAccountUpdate";
import VAccountPassword from "./components/visitors/vehicle/VAccountPassword";
import VTiming from "./components/visitors/timing/Timing";
import VInstructions from "./components/visitors/instructions/Instructions"; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<Signup />} />

        {/* Building */}
        <Route path="/b-dashboard" element={<BDashboard />} />
        <Route path="/b-security" element={<BSecurity />} />
        <Route path="/b-pool" element={<BPool />} />
        <Route path="/b-activities" element={<BActivities />} />
        <Route path="/b-activities/add" element={<BActivitiesAdd />} />
        <Route path="/b-activies-edit/:id/edit" element={<BActivitiesEdit />} />
        <Route path="/b-gardens" element={<BGarden />} />
        <Route path="/b-payments" element={<BPayment />} />
        <Route path="/b-chatroom" element={<BChatRoom />} />
        <Route path="/b-chatroom-chat/:id" element={<BChatRoomChat />} />
        <Route path="/b-gardens/add" element={<AddBGarden />} />
        <Route path="/b-garderner-edit/:id/edit" element={<EditBGarden />} />
        <Route path="/b-residents" element={<BResidents />} />
        <Route path="/b-visitors" element={<BVisitors />} />
        <Route path="/b-visitors/add" element={<AddBVisitors />} />
        <Route path="/b-edit-visitors/:id/edit" element={<EditBVisitors />} />
        <Route path="/b-security/add" element={<AddSecurity />} />
        <Route path="/b-edit/:id/edit" element={<EditSecurity />} />
        <Route path="/b-residents/add" element={<AddBResidents />} />
        <Route path="/b-residents/:id/edit" element={<EditBResident />} />
        <Route path="/b-pool-manager/:id/edit" element={<EditBPoolManager />} />
        <Route path="/b-pool/add-manager" element={<AddBPoolManager />} />

        {/* Garden */}
        <Route path="/g-dashboard" element={<GDashboard />} />
        <Route path="/g-timings" element={<GTimings />} />
        <Route path="/g-timings/add" element={<GTimingsAdd />} />
        <Route path="/g-activies-edit/:id/edit" element={<GTimingsEdit />} />
        <Route path="/g-residents" element={<GResidents />} />
        <Route path="/g-residents/add" element={<AddGResidents />} />
        <Route path="/g-residents-edit/:id/edit" element={<EditGResidents />} />
        <Route path="/g-visitors" element={<GVisitors />} />
        <Route path="/g-visitors/add" element={<AddGVisitors />} />
        <Route path="/g-edit-visitors/:id/edit" element={<EditGVisitors />} />
        <Route path="/g-timing" element={<GTiming />} />
        <Route path="/g-chat" element={<GChatroom />} />
        <Route path="/g-chatroom-chat/:id" element={<GChatroomChat />} />

        {/* Pool */}
        <Route path="/p-chat" element={<PChatroom />} />
        <Route path="/p-chatroom-chat/:id" element={<PChatroomChat />} />
        <Route path="/p-timing" element={<PTiming />} />
        <Route path="/p-all-pools" element={<PPool />} />
        <Route path="/p-all-pools/add" element={<PPoolAdd />} />
        <Route path="/p-all-pools-edit/:id/edit" element={<PPoolEdit />} />
        <Route path="/p-residents" element={<PResidents />} />
        <Route path="/p-visitors" element={<PVisitors />} />
        <Route path="/p-dashboard" element={<PDashboard />} />

        {/* Residents */}
        <Route path="/r-chat" element={<RChatroom />} />
        <Route path="/r-chatroom-chat/:id" element={<RChatroomChat />} />
        <Route path="/r-timing" element={<RTiming />} />
        <Route path="/r-vehicle" element={<RVehicle />} />
        <Route path="/r-vehicle/add" element={<AddRVehicle />} />
        <Route path="/r-edit-vehicle/:id/edit" element={<EditRVehicle />} />
        <Route path="/r-membership" element={<RMembership />} />
        <Route path="/r-payments" element={<RPayments />} />
        <Route path="/r-payments/add" element={<RPaymentsAdd />} />
        <Route path="/r-edit-payment/:id/edit" element={<RPaymentsEdit />} />
        <Route path="/r-update-account" element={<RAccountUpdate />} />
        <Route path="/r-update-password" element={<RAccountPassword />} />

        {/* Security */}
        <Route path="/s-dashboard" element={<SDashboard />} />
        <Route path="/s-residents" element={<SResidents />} />
        <Route path="/s-residents/add" element={<AddResidents />} />
        <Route path="/s-residents/:id/edit" element={<EditResident />} />
        <Route path="/s-security" element={<SSecurity />} />
        <Route path="/s-timing" element={<STiming />} />
        <Route path="/s-timing/add" element={<AddSTiming />} />
        <Route path="/s-r-edit/:id/edit" element={<EditSTiming />} />
        <Route path="/s-visitors" element={<SVisitors />} />
        <Route path="/s-visitors/add" element={<AddVisitor />} />
        <Route path="/s-chat" element={<SChatroom />} />
        <Route path="/s-chatroom-chat/:id" element={<SChatroomChat />} />
        <Route path="/s-edit/:id/edit" element={<EditSecurity />} />

        {/* Visitors */}
        <Route path="/v-chat" element={<VChatroom />} />
        <Route path="/v-vehicle" element={<VVehicle />} />
        <Route path="/v-vehicle/add" element={<VVehicleAdd />} />
        <Route path="/v-edit-vehicle/:id/edit" element={<VVehicleEdit />} />
        <Route path="/v-timing" element={<VTiming />} />
        <Route path="/v-instructions" element={<VInstructions />} />
        <Route path="/v-chatroom-chat/:id" element={<VChatroomChat />} />
        <Route path="/v-update-account" element={<VAccountUpdate />} />
        <Route path="/v-update-password" element={<VAccountPassword />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
