// @flow
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Avatar from "antd/es/avatar/avatar";
import Style from "./table.module.css";
import { ArrowDownOutlined } from "@ant-design/icons";
interface DataType {
  key: React.Key;
  author: string;
  title: string;
  address: string;
  number: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: (
      <div>
        <p style={{ display: "inline-block", marginRight: "10px" }}>Author</p>
        <ArrowDownOutlined />
      </div>
    ),
    dataIndex: "author",
    render: (text) => (
      <div className={Style.useCard}>
        <div className={Style.useAvatar}>
          {" "}
          <Avatar icon={<UserOutlined />} />
        </div>
        <div className={Style.Details}>
          <h4 className={Style.DetailsText}>{text}</h4>
          <p className={Style.TextDetails}>Senior Designer</p>
        </div>
      </div>
    ),
  },
  {
    title: "Title",
    dataIndex: "title",

    render: (text) => (
      <p
        style={{
          fontSize: "15px",
          color: "var(--CoolGray-100, #121619)",

          fontWeight: "400",
          lineHeight: "140%",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
    render: (text) => (
      <p
        style={{
          fontSize: "15px",
          color: "var(--CoolGray-100, #121619)",

          fontWeight: "400",
          lineHeight: "140%",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
    render: (text) => (
      <p
        style={{
          fontSize: "15px",
          color: "var(--CoolGray-100, #121619)",

          fontWeight: "400",
          lineHeight: "140%",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
    render: (text) => (
      <p
        style={{
          fontSize: "15px",
          color: "var(--CoolGray-100, #121619)",

          fontWeight: "400",
          lineHeight: "140%",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    title: "Title",
    dataIndex: "address",
    render: (text) => (
      <p
        style={{
          borderRadius: "10px",
          background: "var(--CoolGray-10, #F2F4F8)",
          display: "inline-block",
          padding: "1px 10px 2px 10px",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    dataIndex: "number",
    render: (text) => <h2>{text}</h2>,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    author: `Jane Doe `,
    title: `Cell Text`,
    address: `Badge`,
    number: `...`,
  });
}

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default App;
