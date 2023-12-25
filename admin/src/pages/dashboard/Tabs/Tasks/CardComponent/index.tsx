import { Button, Card, Flex } from 'antd';
import React from 'react'
import styles from './style.module.css'
import { UserOutlined, PlusOutlined, CalendarOutlined, PushpinOutlined, FlagOutlined, MoreOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { card } from '../../../../../types/common';
const CardComponent: React.FC<{ data: card }> = ({ data }) => {
    const rotate = 90;
    const size: SizeType = 'large';
    return (
        <div className={styles.myCard}>
            <Card
                hoverable
                style={{ width: "100%" }}
            >
                <p>{data.category}</p>
                <p>{data.cardName}</p>
                <img className={styles.imageCard} src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds"></img>
                {data.assignedUsers.map((item) => (
                    // <UserOutlined className={styles.user_tag} />
                    <img className={styles.user_tag} src={item.avatar} />
                )
                )}
                <Flex justify="space-between">
                    <div>
                        <Button type="text" icon={<PlusOutlined />} size={size} />
                        <Button type="text" icon={<CalendarOutlined />} size={size} />
                        <Button type="text" icon={<PushpinOutlined />} size={size} />
                        <Button type="text" icon={<FlagOutlined />} size={size} />
                    </div>
                    <div>

                        <Button type="text" icon={<MoreOutlined rotate={rotate} style={{ fontSize: "30px" }} />} size={size} />
                    </div>
                </Flex>
            </Card>
        </div >

    )
}
export default CardComponent;


