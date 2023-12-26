import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';
import './style.css';

const DateRanger: React.FC = () => {
  const [dateRange, setDateRange] = useState<{ startDate: string | null; endDate: string | null }>({
    startDate: null,
    endDate: null,
  });

  const handleDateChange = (dateType: string) => (date: any, dateString: string) => {
    setDateRange((prev) => ({ ...prev, [dateType]: dateString }));
  };

  const datePickerStyle = {
    border: 'none',
    color: 'black',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
  };

  const arrowStyle = {
    background: '#DDE1E6',
    fontSize: '24px',
    height: '45px',
    width: '45px',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <Space>
      <DatePicker
        onChange={handleDateChange('startDate')}
        placeholder="Start Date"
        style={datePickerStyle}
        suffixIcon={<CalendarOutlined style={{ color: 'black', fontSize: '24px', borderRadius: '50%' }} />}
      />
      <Space style={arrowStyle}>
        <ArrowRightOutlined />
      </Space>
      <DatePicker
        onChange={handleDateChange('endDate')}
        placeholder="End Date"
        style={datePickerStyle}
        suffixIcon={<CalendarOutlined style={{ color: 'black', fontSize: '24px' }} />}
      />
    </Space>
  );
};

export default DateRanger;
