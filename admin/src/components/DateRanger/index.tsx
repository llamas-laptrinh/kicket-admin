import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';
import './style.css'

const DateRanger: React.FC = () => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const handleStartDateChange = (date: any, dateString: string) => {
    setStartDate(dateString);
  };

  const handleEndDateChange = (date: any, dateString: string) => {
    setEndDate(dateString);
  };

  const datePickerStyle = {
    border: 'none',
    color: 'black',
    fontSize: '24px'
  };

  const arrowStyle = {
    background: '#DDE1E6',
    fontSize: '24px',
    height: '48px',
    width: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Space>
      <DatePicker
        onChange={handleStartDateChange}
        placeholder="Start Date"
        style={datePickerStyle}
        suffixIcon={<CalendarOutlined style={{ color: 'black', fontSize: '24px', borderRadius: '50%' }} />}
      />
      <div style={arrowStyle}>
        <ArrowRightOutlined />
      </div>
      <DatePicker
        onChange={handleEndDateChange}
        placeholder="End Date"
        style={datePickerStyle}
        suffixIcon={<CalendarOutlined style={{ color: 'black', fontSize: '24px' }} />}
      />
    </Space>
  );
};

export default DateRanger;
