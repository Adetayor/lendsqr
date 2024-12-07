'use client';
import React from 'react';
import { Card, Table, TableProps, Tag } from 'antd';
import { IoMdMore } from 'react-icons/io';
import styles from './user.module.scss';
import { BiUser } from 'react-icons/bi';

function Users() {
  const dataSource = [
    {
      key: '1',
      org: 'Mike',
      username: 'adeeji',
      email: '10 Downing Street',
      phone: '099459590404',
      date: '21/11/2024',
      status: 'inactive',
    },
    {
      key: '1',
      org: 'Mike',
      username: 'adeeji',
      email: '10 Downing Street',
      phone: '099459590404',
      date: '21/11/2024',
      status: 'inactive',
    },
    {
      key: '1',
      org: 'Mike',
      username: 'adeeji',
      email: '10 Downing Street',
      phone: '099459590404',
      date: '21/11/2024',
      status: 'inactive',
    },
    {
      key: '1',
      org: 'Mike',
      username: 'adeeji',
      email: '10 Downing Street',
      phone: '099459590404',
      date: '21/11/2024',
      status: 'inactive',
    },
    {
      key: '1',
      org: 'Mike',
      username: 'adeeji',
      email: '10 Downing Street',
      phone: '099459590404',
      date: '21/11/2024',
      status: 'inactive',
    },
  ];

  const columns: TableProps<any>['columns'] = [
    {
      title: 'ORGANIZATION',
      dataIndex: 'org',
      key: 'org',
    },
    {
      title: 'USERNAME',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'EMAIL',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'PHONE NUMBER',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'DATE JOINED',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status, key }) => {
        const color = status ? 'green' : 'volcano';
        return (
          <Tag color={color} key={key}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: (_, { status, key }) => {
        return <IoMdMore size={29} />;
      },
    },
  ];
  return (
    <section className={styles.user_section}>
      <h1>Users</h1>
      <div className={styles.user_card_container}>
        {Array(4)
          .fill('')
          .map((item, idx) => (
            <Card className={styles.user_card}>
              <div>
                <BiUser />
              </div>

              <span>Users</span>
              <h5>2,456</h5>
            </Card>
          ))}
      </div>

      <div className={styles.user_table}>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </section>
  );
}

export default Users;
