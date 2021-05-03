import React, { useEffect } from 'react';
import { Table, Tag, Space } from 'antd';

const Optable = () => {
    const columns = [
        {
            title: '编  号',
            dataIndex: 'number',
            key: 'number',
        },

        {
            title: '开关锁',
            key: 'lock',
            render:text=>
                <Space size="small">
                {/* <a>yes</a> */}
                    <input type="checkbox" name="lock" value='1' />解锁
                </Space>
            , 
        },

        {
            title: '启  动',
            key: 'fly',
            render:text=> 
              <Space size="small">
                <input type="checkbox" name="fly" value='2'/>起飞
              </Space>
            ,
        },

        {
          title: '悬  停',
          key: 'pause',
          render:text=> (
            <Space size="small">
              <input type="checkbox" name="pause" value='3'/>暂停
            </Space>
          ),
        },

        {
            title: '返  航',
            key: 'goback',
            render: text=> (
              <Space size="small">
                <input type="checkbox" name="goback" value='4'/>返回
              </Space>
            ),
        },

        {
            title: '记  录',
            key: 'memory',
            render: text=> (
                <Space size="small">
                    <input type="checkbox" name="memory" value='5'/>开启
                </Space>
            ),
        },
      ];
    
    const type = ['a','b','c','d','e','f'];
    const data = [
        {
            key: '1',
            number: '01'+' (型号'+ type[0] +')',
        },
        {
            key: '2',
            number: '02'+' (型号'+ type[1] +')',
        },
        {
            key: '3',
            number: '03'+' (型号'+ type[2] +')',
        },
        {
            key: '4',
            number: '04'+' (型号'+ type[3] +')',
        },
        {
            key: '5',
            number: '05'+' (型号'+ type[4] +')',
        },
        {
            key: '6',
            number: '06'+' (型号'+ type[5] +')',
        },     
    ];

    return (
        <Table columns={columns} dataSource={data} />
    )

}
      
export default Optable;