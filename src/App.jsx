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
import BSecurity from "./components/building/security/Security";
import BPool from "./components/building/pool/Pool";
import BGarden from "./components/building/garden/Garden";
import BResidents from "./components/building/residents/Residents";
import BVisitors from "./components/building/visitors/Visitors";
import GDashboard from "./components/garden/dashboard/GDashboard";
import GResidents from "./components/garden/residents/Residents";
import GVisitors from "./components/garden/visitors/Visitors";
import GTiming from "./components/garden/timing/Timing";
import GChatroom from "./components/garden/chatroom/Chatroom";
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
import RTiming from "./components/residents/timing/Timing";
import RVehicle from "./components/residents/vehicle/Vehicle";
import RMembership from "./components/residents/membership/Membership";
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
import EditSecurity from "./components/security/security/EditSecurity";
import AddSecurity from "./components/security/security/AddSecurity";
import SChatroom from "./components/security/chatroom/Chatroom";
import VChatroom from "./components/visitors/chatroom/Chatroom";
import VVehicle from "./components/visitors/vehicle/Vehicle";
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
        <Route path="/b-gardens" element={<BGarden />} />
        <Route path="/b-residents" element={<BResidents />} />
        <Route path="/b-visitors" element={<BVisitors />} />

        {/* Garden */}
        <Route path="/g-dashboard" element={<GDashboard />} />
        <Route path="/g-residents" element={<GResidents />} />
        <Route path="/g-visitors" element={<GVisitors />} />
        <Route path="/g-timing" element={<GTiming />} />
        <Route path="/g-chat" element={<GChatroom />} />

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
        <Route path="/r-timing" element={<RTiming />} />
        <Route path="/r-vehicle" element={<RVehicle />} />
        <Route path="/r-membership" element={<RMembership />} />

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
        <Route path="/s-edit/:id/edit" element={<EditSecurity />} />
        <Route path="/s-security/add" element={<AddSecurity />} />

        {/* Visitors */}
        <Route path="/v-chat" element={<VChatroom />} />
        <Route path="/v-vehicle" element={<VVehicle />} />
        <Route path="/v-timing" element={<VTiming />} />
        <Route path="/v-instructions" element={<VInstructions />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
