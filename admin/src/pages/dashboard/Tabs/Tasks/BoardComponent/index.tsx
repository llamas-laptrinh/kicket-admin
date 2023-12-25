import { Button, Flex } from 'antd';
import React from 'react'
import { MoreOutlined } from '@ant-design/icons';
import CardComponent from '../CardComponent';
import styles from './BoardComponent.module.css'
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { PlusOutlined } from '@ant-design/icons';
import {boardProps} from '../../../../../types/common';


const BoardComponent: React.FC<{ data: boardProps }> = ({ data }) => {
    const rotate: number = 90;
    const size: SizeType = 'large'
    return (
        <div>
            <div className={styles.BoardComponent}>
                <Flex justify='space-between'>
                    <p>{data.boardName}</p>
                    <Button type="text" icon={<MoreOutlined rotate={rotate} style={{ fontSize: "30px" }} />} size={size} />
                </Flex>
                {data.cards.map(card=>(
                    <CardComponent data={card}></CardComponent>

                ))}
                <Button className={styles.add_task_btn} type="text" icon={<PlusOutlined />} size={size} >New task</Button>

            </div>
        </div>
    )
}
export default BoardComponent;


