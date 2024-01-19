import React, { useState, useEffect } from "react";

import AnnouncementBar from "./shared/components/AnnouncementBar";
import HeaderSection from "./shared/components/HeaderSection";
import MainSection from "./shared/components/MainSection";
import SubscriptionForm from "./shared/components/SubscriptionForm";
import Footer from "./shared/components/Footer";
import UserLoadingSpinner from "./shared/components/UserLoadingSpinner";

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="main-section">
      {loading ? (
        <UserLoadingSpinner />
      ) : (
        <div className="App">
          <AnnouncementBar />
          <HeaderSection />
          <MainSection />
          <SubscriptionForm />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
