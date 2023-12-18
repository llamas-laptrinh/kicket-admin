import React from 'react';
import MyTabs from '../../components/Tabs';
import DateRanger from '../../components/DateRanger';
import SearchBar from '../../components/SeachBar'
import ButtonSlider from '../../components/ButtonSlider'
import { SearchOutlined } from '@ant-design/icons';

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

  const styleButton: React.CSSProperties = {
          width: '224px',
          height: '48px',
          gap: '5px',
          padding: '12px 8px 12px 8px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-around',
  }

  const handlerClickOnButton = () => {

  }
  
  return (
    <div>
      HomePage <MyTabs /> <DateRanger /> <br />
      <SearchBar
        size='small'
        placeholder='Search for...'
        style={styleSearch}
        prefix={<SearchOutlined />} 
      />
      <ButtonSlider
        onClick={handlerClickOnButton}
        icon={<SearchOutlined style={{ marginRight: '-30px'}} />}
        style={styleButton}
        isShowNotification={true}
        isShowDropdown={true}
      >
        chao ban
      </ButtonSlider>
    </div>
  );
}

export default HomePage;