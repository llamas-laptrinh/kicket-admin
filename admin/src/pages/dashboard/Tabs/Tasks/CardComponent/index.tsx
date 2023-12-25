import { Button, Card, Flex } from 'antd';
import React from 'react'
import styles from './style.module.css'
import { PlusOutlined, CalendarOutlined, PushpinOutlined, FlagOutlined, MoreOutlined } from '@ant-design/icons';
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
                {data.cardImage!='' && 
                    < img className={styles.imageCard} src={data.cardImage}/>
                }
                {data.assignedUsers.map((item) => {
                    if (item.avatar != '') return (
                        <img className={styles.user_tag} src={item.avatar} />
                    )
                    else return (
                        <img className={styles.user_tag} src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" />

                    )
                }


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


