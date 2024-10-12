
import React from 'react';

import { useSelector } from 'react-redux';
import {notifications,activities,contacts} from "../../MockData/notificationMockData"

const ListItem = ({ title, time, imageUrl }) => (
  <div className="flex items-start" role="listitem" aria-label={title}>
    <img src={imageUrl} alt={`Img related to ${title}`} className="rounded-full w-6 h-6" />
    <div className="ml-3">
      <p className="text-sm font-medium lg:text-xs xl:text-sm">{title}</p>
      <p className="text-xs text-gray-400">{time}</p>
    </div>
  </div>
);

const ContactItem = ({ name, imageUrl }) => (
  <div className="flex items-center" role="listitem" aria-label={`Contact: ${name}`}>
    <img src={imageUrl} alt={`Profile of ${name}`} className="rounded-full w-8 h-8" />
    <p className="ml-3 text-sm">{name}</p>
  </div>
);

const Section = ({ title, items, renderItem }) => (
  <div className="mb-6" role="group" aria-labelledby={title.replace(" ", "-").toLowerCase()}>
    <h2 className="text-lg font-semibold mb-4" id={title.replace(" ", "-").toLowerCase()}>{title}</h2>
    <div className="space-y-4" role="list">
      {items.map((item, index) => renderItem(item, index))}
    </div>
  </div>
);

const NotificationBar = () => {
  const darkMode = useSelector((state) => state.dataReducer.darkMode);



  const renderListItem = (item, index) => (
    <ListItem key={item.title + index} {...item} />
  );

  const renderContactItem = (contact, index) => (
    <ContactItem key={contact.name + index} {...contact} />
  );

  return (
    <div className={`w-full h-max p-5 ${darkMode ? "bg-black text-white" : "bg-gray-50 text-black"}`}>
      <Section title="Notifications" items={notifications} renderItem={renderListItem} />
      <Section title="Activities" items={activities} renderItem={renderListItem} />
      <Section title="Contacts" items={contacts} renderItem={renderContactItem} />
    </div>
  );
};

export default NotificationBar;
