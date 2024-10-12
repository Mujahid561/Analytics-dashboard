

import React from 'react';
import DetailBox from '../DetailBox/DetailBox';
import { DetailBoxData } from '../../MockData/MockData'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideNotification } from '../../Redux/DashboardReducer';

function DetailSection({ darkMode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNotification = (el) => {
    if (el?.header === "Orders") {
      dispatch(hideNotification());
      navigate(el?.path);
    }
  };

  return (
    <div className="w-full flex flex-wrap justify-between">
      {DetailBoxData?.map((el, ind) => {
        const marginTop = ind === 2 || ind === 3 ? 'mt-5' : 'mt-0';
        return (
          <div 
            key={el.path || ind} 
            className={`w-[47%] ${marginTop}`} 
            onClick={() => handleNotification(el)}
           
            tabIndex={0} 
            role="button" 
            aria-label={`Navigate to ${el.header}`}
          >
            <DetailBox data={el} darkMode={darkMode} index={ind} />
          </div>
        );
      })}
    </div>
  );
}

export default DetailSection;

