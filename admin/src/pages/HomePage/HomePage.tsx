import React from 'react';
import MyTabs from '../../components/TabsComponent';
import DateRanger from '../../components/DateRanger';

const HomePage: React.FC = () => {
  return (
    <div> HomePage <MyTabs/> <DateRanger /></div>
  );
}

export default HomePage;