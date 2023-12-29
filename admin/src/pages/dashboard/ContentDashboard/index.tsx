import { Col, Row, Space } from 'antd';
import React from 'react';
import MyTabs from '../../../components/Tabs';
import Infocard from '../Infocard';
import Gauges from '../../../components/Charts/Gauges';
import PolarChart from '../../../components/Charts/Polar'
import MapChart from '../../../components/Charts/Map';
import NestedChart from '../../../components/Charts/NestedChart';
import * as am5 from '@amcharts/amcharts5';
import '../styles.css';
import DoughnutChart from '../../../components/Charts/Doughnut';

const customData = [
  { 
    title:'Users Total',
    value:'11.8M',
    precent:'+2.5%',
    background:'#F2F4F8'
  },
  {
    title:'New Users',
    value:'8.235k',
    precent:'-1,2%',
    color:'#FFFFFF',
    background:'#FB0007'
  },
  {
    title:'Active Users',
    value:'2.352M',
    precent:'+11%',
    background:'#F2F4F8'
  },
  {
    title:'New Users',
    value:'8K',
    precent:'+5,2%',
    background:'#F2F4F8'
  },
]
const gaudesVaulue: number = 70;

const polarData = [{
  category: "Health",
  value: 5,
  columnSettings: {
      fill: am5.color(0x095256),
  }
}, {
  category: "Career",
  value: 4,
  columnSettings: {
      fill: am5.color(0x087f8c),
  }
}, {
  category: "Love",
  value: 7,
  columnSettings: {
      fill: am5.color(0x5aaa95),
  }
}, {
  category: "Spirituality",
  value: 9,
  columnSettings: {
      fill: am5.color(0x86a873),
  }
}, {
  category: "Family",
  value: 3,
  columnSettings: {
      fill: am5.color(0xbb9f06),
  }
},
];

const countryCodes = [
  "AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ",
  "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA", "KY", "CF", "TD", "CL", "CN",
  "CX", "CC", "CO", "KM", "CD", "CG", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER",
  "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT",
  "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO",
  "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT",
  "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE",
  "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "MK", "RO", "RU", "RW",
  "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA",
  "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC",
  "TV", "UG", "UA", "AE", "GB", "UM", "US", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW", "AX"
];
const mapData = countryCodes.map(countryCode => ({
  id: countryCode,
  value: Math.floor(Math.random() * 1000)
}));

let nestedData = [{
  country: "Lithuania",
  litres: 501.9,
  bottles: 1500
}, {
  country: "Czech Republic",
  litres: 301.9,
  bottles: 990
}, {
  country: "Ireland",
  litres: 201.1,
  bottles: 785
}, {
  country: "Germany",
  litres: 165.8,
  bottles: 255
}, {
  country: "Australia",
  litres: 139.9,
  bottles: 452
}, {
  country: "Austria",
  litres: 128.3,
  bottles: 332
}, {
  country: "UK",
  litres: 99,
  bottles: 150
}, {
  country: "Belgium",
  litres: 60,
  bottles: 178
}, {
  country: "The Netherlands",
  litres: 50,
  bottles: 50
}];
const outerData = [
  { name: 'A', value: 10 },
  { name: 'B', value: 40 },
  { name: 'C', value: 20 },
  { name: 'D', value: 10 },
];

const middleData = [
  { name: 'X', value: 100 },
  { name: 'Y', value: 30 },
  { name: 'Z', value: 20 },
];



const index: React.FC = () => {

  const customContend = (
    <div>
        <Space style={{ display: 'flex', gap: 24}}>
          {customData.map((data, index) => (
            <Infocard 
            key={index}
            title={data.title}
            value={data.value}
            precent={data.precent}
            color={data.color}
            background={data.background}
            />
          ))}
        </Space>
        <Row gutter={24}>
        <Col span={6}>
                    <div className='border mt-5'>
                        <strong >Target</strong>
                        <Gauges data={gaudesVaulue} />
                    </div>
        </Col>
        <Col span={6}>
                    <div className='border mt-5'>
                        <strong>Most Active Account Types</strong>
                        <PolarChart data={polarData} />
                    </div>
        </Col>
        <Col span={12}>
                    <div className='border mt-5'>
                        <div>
                            <strong>Active Countries</strong>
                            <MapChart data={mapData}></MapChart>
                        </div>
                    </div>
                </Col>
        </Row>
        <Row gutter={24}>
            <Col span={12}>
              <div className='border mt-5'>
                  <strong>Users by Country</strong>
                  <NestedChart data={nestedData} />
              </div>
            </Col>
            <Col span={12}>
  <div className='customCss'>
      <DoughnutChart outerData={outerData} middleData={middleData} />
    <table className='tableChart'>
      <tr>
        <td>
          User Name
        </td>
        <td>
          $1.2M
        </td>
        <td>
          +8.2%
        </td>
      </tr>
    </table>
  </div>
</Col>


        </Row>
    </div>
  );
  return (
        <MyTabs overviewContent={customContend}  />
  );
}

export default index;