import { Badge, Button, Dropdown, Menu, Space, Typography } from 'antd';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface ButtonSliderProps {
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  styleTextButton?: React.CSSProperties;
  textbutton?: React.ReactNode;
  isShowNotification?: boolean;
  isShowDropdown?: boolean;
  navigator?: string;
  onSelectButton?: (text: string) => void;
}

const ButtonSlider: React.FC<ButtonSliderProps> = ({
  type,
  icon,
  isShowDropdown = false,
  isShowNotification = false,
  styleTextButton,
  textbutton,
  navigator = '',
  onSelectButton,
  ...rests
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigator) {
      navigate(navigator);
    }

    if (onSelectButton) {
      onSelectButton(textbutton as string);
    }
  };

  const renderDropdown = () => {
    if (isShowDropdown) {
      const items = [
        {
          key: '1',
          label: 'Item 1',
        },
        {
          key: '2',
          label: 'Item 2',
        },
        {
          key: '3',
          label: 'Item 3',
        },
      ];

      return (
        <Dropdown
          overlay={
            <Menu>
              {items.map((item) => (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
              ))}
            </Menu>
          }
        >
          <Typography.Link>
            <Space>
              <DownOutlined style={{ color: 'black' }} />
            </Space>
          </Typography.Link>
        </Dropdown>
      );
    }
    return null;
  };

  return (
    <Button type={type} icon={icon} {...rests} onClick={handleClick}>
      <span style={styleTextButton}>{textbutton}</span>
      {isShowNotification && (
        <Space>
          <Badge
            className="site-badge-count-109"
            count={109}
            style={{ backgroundColor: 'red' }}
          />
          {renderDropdown()}
        </Space>
      )}
    </Button>
  );
};

export default ButtonSlider;
