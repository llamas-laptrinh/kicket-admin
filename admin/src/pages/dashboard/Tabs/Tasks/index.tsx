import { Col, Divider, Row } from "antd";
import React from "react"
import BoardComponent from "./BoardComponent";
import { boardProps } from "../../../../types/common";

const Tasks: React.FC = () => {
    const data: boardProps[] = [
        {
            boardName: "In Progress",
            cards: [
                {
                    category: 'study',
                    cardName: 'card 1',
                    assignedUsers: [
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                        { avatar: 'https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg?crop=0.668xw:1.00xh;0.184xw,0&resize=640:*' },
                        { avatar: 'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg' },
                    ]
                },
                {
                    category: 'game',
                    cardName: 'card 2',
                    assignedUsers: [
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                    ]
                },
            ]
        },
        {
            boardName: "Title",
            cards: [
                {
                    category: 'study',
                    cardName: 'card 1',
                    assignedUsers: [
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                    ]
                },
                {
                    category: 'game',
                    cardName: 'card 2',
                    assignedUsers: [
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                    ]
                },
                {
                    category: 'work',
                    cardName: 'card 2',
                    assignedUsers: [
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                    ]
                }]
        },
        {
            boardName: "Completed",
            cards: [
                {
                    category: 'study',
                    cardName: 'card 1',
                    assignedUsers: [
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                        { avatar: 'https://www.topgear.com/sites/default/files/2022/07/13.jpg' },
                    ]
                },
            ]
        }
    ]
    return (
        <div>
            <Divider orientation="left"></Divider>
            <Row gutter={16}>
                {data.map(board => (
                    <Col className="gutter-row" span={8}>
                        <BoardComponent data={board}></BoardComponent>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Tasks;
