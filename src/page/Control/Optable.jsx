import React, { useEffect } from "react";
import { Table, Button } from "antd";

// 下面的default状态后续会抽出
const ERROR = 0;
const LOCKED = 1;
const UNLOCKED = 2;
const FLYING = 3;
const Hovering = 4;
const FINISHING = 5;
const BACKING = 6;

const Optable = () => {
  // TODO: 表格标题这一栏添加点击复选框全选与反选事件；单元格里的复选框添加点击事件(如果能添加新建/删除成员的按钮当然最好)
  const columns = [
    {
      title: "编  号",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "开关锁",
      key: "lock",
      render: () => <Button>锁定</Button>,
    },
    {
      title: "启  动",
      key: "fly",
      render: () => <Button>起飞</Button>,
    },
    {
      title: "悬  停",
      key: "pause",
      render: () => <Button>悬停</Button>,
    },
    {
      title: "返  航",
      key: "goback",
      render: () => <Button>锁定</Button>,
    },
    {
      title: "记  录",
      key: "memory",
      render: () => <Button>锁定</Button>,
    },
  ];

  const type = ["a", "b", "c", "d", "e", "f"];
  const data = [
    {
      key: "1",
      number: `01(型号${type[0]})`,
    },
    {
      key: "2",
      number: `01(型号${type[0]})`,
    },
    {
      key: "3",
      number: `01(型号${type[0]})`,
    },
    {
      key: "4",
      number: `01(型号${type[0]})`,
    },
    {
      key: "5",
      number: `01(型号${type[0]})`,
    },
    {
      key: "6",
      number: `01(型号${type[0]})`,
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Optable;
