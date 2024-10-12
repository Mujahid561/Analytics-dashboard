
import React, { useEffect, useMemo } from "react";
import RevenueChart from "../RevenueChart/RevenueChart";
import RevenueByLocation from "../RevenueByLocation/RevenueByLocation";
import SalesChart from "../SalesChart/SalesChart";
import TopSellingProducts from "../TopSellingProducts/TopSellingProducts";
import ProjectionsChart from "../ProjectionsChart/ProjectionsChart";
import DetailSection from "../DetailSection/DetailSection";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../../Redux/DashboardReducer";

const Section = ({ children, className, ariaLabel }) => (
  <div className={`rounded-lg ${className}`} aria-label={ariaLabel}>
    {children}
  </div>
);

const Overview = () => {
  const darkMode = useSelector((state) => state.dataReducer.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showNotification());
  }, [dispatch]);

  const containerClasses = useMemo(
    () => `w-full flex-col h-full pb-10 relative ${darkMode ? "text-white bg-black" : "text-black bg-white"}`,
    [darkMode]
  );

  return (
    <main className={containerClasses} role="main" aria-label="Overview Section">
      <header className="mb-3 ml-3 text-xl font-bold">eCommerce Overview</header>
      
      <div className="flex flex-wrap justify-between h-[31vh] gap-4">
        <Section className="w-[48%] flex-1" ariaLabel="Details Section">
          <DetailSection darkMode={darkMode} />
        </Section>
        <Section className="w-[48%] flex-1" ariaLabel="Projections Chart Section">
          <ProjectionsChart darkMode={darkMode} />
        </Section>
      </div>
      
      <div className="flex flex-wrap justify-between mt-8 h-[35.8vh] gap-4">
        <Section className="w-[74%] flex-[3]" ariaLabel="Revenue Chart Section">
          <RevenueChart darkMode={darkMode} />
        </Section>
        <Section className="w-[23%] flex-1" ariaLabel="Revenue By Location Section">
          <RevenueByLocation darkMode={darkMode} />
        </Section>
      </div>
      
      <div className="flex flex-wrap justify-between mt-8 h-[35.8vh] gap-4">
        <Section className="w-[74%] flex-[3]" ariaLabel="Top Selling Products Section">
          <TopSellingProducts darkMode={darkMode} />
        </Section>
        <Section className="w-[23%] flex-1" ariaLabel="Sales Chart Section">
          <SalesChart darkMode={darkMode} />
        </Section>
      </div>
    </main>
  );
};

export default Overview;
