import React from 'react';
import MyTabs from '../../components/Tabs';
import DateRanger from '../../components/DateRanger';
import SearchBar from '../../components/SeachBar'
import { SearchOutlined } from '@ant-design/icons';
import './style.css'

const HomePage: React.FC = () => {
  const styleSearch: React.CSSProperties = {
    width: '224px',
    height: '48px',
    gap: '8px',
    padding: '12px 16px 12px 16px',
    border: 'none',
    borderBottom: '1px solid #C1C7CD',
    backgroundColor: '#F2F4F8',
  }; 

  return (
    <div>
      HomePage <MyTabs /> <DateRanger /> <br />
      <SearchBar
        size='small'
        placeholder='Search for...'
        style={styleSearch}
        prefix={<SearchOutlined />} 
      />
    </div>
  );
}

export default HomePage;