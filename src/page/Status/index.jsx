import React, { useState } from 'react';
import { Table, Progress, Button } from 'antd';

import './index.css';


const initialTableData = [
  {
    key: 1,
    type: "型号1",
    rest_power: 87,
    is_work: 1,
    is_error: 0,
    work_percent: 33
  },
  {
    key: 2,
    type: "型号1",
    rest_power: 100,
    is_work: 0,
    is_error: 0,
    work_percent: 0
  },
  {
    key: 3,
    type: "型号1",
    rest_power: 100,
    is_work: 0,
    is_error: 0,
    work_percent: 0
  },
  {
    key: 4,
    type: "型号1",
    rest_power: 100,
    is_work: 0,
    is_error: 0,
    work_percent: 0
  },
  {
    key: 5,
    type: "型号1",
    rest_power: 100,
    is_work: 0,
    is_error: 0,
    work_percent: 0
  }
]


const Status = () => {

  const [tableData, setTableData] = useState(initialTableData);

  const columns = [
    {
      title: "无人机编号",
      dataIndex: "key",
      key: "key",
      align: "center",
      width: 120
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
      align: "center",
      width: 120
    },
    {
      title: "电量",
      dataIndex: "rest_power",
      key: "rest_power",
      align: "center",
      render: (text) => <Progress percent={text} />
    },
    {
      title: "任务状态",
      dataIndex: "is_work",
      key: "is_work",
      align: "center",
      render: (text) => <span>{text ? "任务中" : "无任务"}</span>,
      width: 120
    },
    {
      title: "错误状态",
      dataIndex: "is_error",
      key: "is_error",
      align: "center",
      render: (text) => <span>{text ? "错误发生" : "无错误"}</span>,
      width: 120
    },
    {
      title: "任务进度",
      dataIndex: "work_percent",
      key: "work_percent",
      align: "center",
      render: (text) => <Progress type="circle" percent={text} width={80} />
    },
    {
      title: "开始任务",
      key: "control",
      align: "center",
      render: (_text, record) => (
        <Button 
          onClick={startWork(record)}
          disabled={record['is_work']}
        >开始任务</Button>
      ),
      width: 180
    }
  ]

  const startWork = (data) => {
    console.log(`无人机${data.key}开始工作`)
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={tableData}
        bordered
        pagination={false}
      />
    </div>
  )
}
// // 走马灯
// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

// // 无人机状态分页面
// const Status = () => {
//     // TODO: 对无人机各参数（需要调用后端接口的数据）进行处理 ( 对实时数据如电量、续航时间进行动态显示 )
//     return (
//         <div className='status'>
//           <Divider className='divider'>参数面板</Divider>
//           {/* 走马灯组件 */}
//           <Carousel className='carousel' effect="fade">
//               {/* 单个灯 */}
//               <div className='page'>
//                 {/* 描述列表 */}
//                 <Descriptions className='title' title="当前设备">
//                   <Descriptions.Item className='item' label="编号">{1}</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数1">{222}</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">{333}</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">{444}}</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">{444}}</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="飞行参数">
//                   <Descriptions.Item className='item' label="俯仰(pitch)">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="横滚(roll)">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="航向(yaw)">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="对地高度(Height)">444</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="设备型号">
//                   <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="设备型号">
//                   <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="设备型号">
//                   <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="设备型号">
//                   <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
//                 </Descriptions>
//               </div>
//               <div className='page'>
//                 {/* 描述列表 */}
//                 <Descriptions className='title' title="当前设备">
//                   <Descriptions.Item className='item' label="编号">{2}</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数1">{222}</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">{333}</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">{444}}</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">{444}}</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="飞行参数">
//                   <Descriptions.Item className='item' label="俯仰(pitch)">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="横滚(roll)">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="航向(yaw)">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="对地高度(Height)">444</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="设备型号">
//                   <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="设备型号">
//                   <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="设备型号">
//                   <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="设备型号">
//                   <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
//                 </Descriptions>
//               </div>
//               <div className='page'>
//                 {/* 描述列表 */}
//                 <Descriptions className='title' title="当前设备">
//                   <Descriptions.Item className='item' label="编号">{3}</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数1">{222}</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">{333}</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">{444}}</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">{444}}</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="飞行参数">
//                   <Descriptions.Item className='item' label="俯仰(pitch)">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="横滚(roll)">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="航向(yaw)">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="对地高度(Height)">444</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="设备型号">
//                   <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="设备型号">
//                   <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="设备型号">
//                   <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
//                 </Descriptions>
//                 <Descriptions className='title' title="设备型号">
//                   <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
//                   <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
//                 </Descriptions>
//               </div>
//               <div className='page'>
//                 <h3 style={contentStyle}>4</h3>
//               </div>
//             </Carousel>
          
//           {/* 显示状态参数的六个子组件 */}
//           {/* <div className='par'>
//             <Parameter />
//             <Parameter />
//             <Parameter />
//             <Parameter />
//             <Parameter />
//             <Parameter />
//           </div> */}

//         </div>
//     )
// }

export default Status;