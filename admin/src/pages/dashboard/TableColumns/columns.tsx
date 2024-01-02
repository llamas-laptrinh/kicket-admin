import Avatar from "antd/es/avatar/avatar";
// import Style from "./table.module.css";
import Style from "../table.module.css";
import { ArrowDownOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { UserOutlined } from "@ant-design/icons";
interface DataType {
  author: string;
  title: string;
  address: string;
  number: string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

export const data: DataType[] = [
  { author: `Jane Doe `, title: `Cell Text`, address: `Badge`, number: `...` },
  { author: `Jane Doe `, title: `Cell Text`, address: `Badge`, number: `...` },
  {
    author: `Nguyễn Tâm `,
    title: `Học Lập trình`,
    address: `Badge`,
    number: `...`,
  },
];
export default columns;
