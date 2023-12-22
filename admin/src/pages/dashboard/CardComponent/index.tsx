import React from 'react';
import { Flex } from 'antd';
interface totaltProps {
    label: string;
    totalValue: string;
    percentage: string;
}
const CardComponent: React.FC<totaltProps> = (props) => {
    const { label, totalValue, percentage } = props
    return (
        <div style={{ border: "solid 1px rgba(0,0,0,0.2)", borderRadius: "5px", padding: "5px" }}>
            <p>{label}</p>
            <Flex justify="space-between" style={{ width: "100%" }}>
                <div>{totalValue}</div>
                <div>{percentage}</div>
            </Flex>
        </div>
    );
};

export default CardComponent;