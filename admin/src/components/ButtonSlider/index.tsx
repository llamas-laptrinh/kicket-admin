import { Badge, Button, Dropdown, Menu, Space, Typography } from 'antd';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';

interface ButtonSliderProps {
    type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
    isShowNotification?: boolean;
    isShowDropdown?: boolean;
}

const Index: React.FC<ButtonSliderProps> = ({
    type,
    onClick,
    children,
    icon,
    isShowDropdown = false,
    isShowNotification = false,
    ...rests
}) => {
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
                        <DownOutlined style={{ color: 'black'}} />
                        </Space>
                    </Typography.Link>
                </Dropdown>
            );
        }
        return null;
    };

    return (
            <Button type={type} onClick={onClick} icon={icon} {...rests}>
                {children}
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

export default Index;