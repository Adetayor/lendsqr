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
      org: 'Lendsqr',
      username: 'adedeji',
      email: 'adedeji@lendsqr.com',
      phone: '08078903721',
      date: 'May 15, 2020 10:00 AM',
      status: 'Inactive',
    },
    {
      key: '1',
      org: 'Irorun',
      username: 'Deji Ogana',
      email: 'debby2@irorun.com',
      phone: '08160780922',
      date: 'Apr 30, 2020 10:00 AM',
      status: 'Pending',
    },
    {
      key: '1',
      org: 'Lendstar',
      username: 'Grace Effiom',
      email: 'grace@lenstar.com',
      phone: '07060780922',
      date: 'Apr 30, 2020 10:00 AM',
      status: 'Backlisted',
    },
    {
      key: '1',
      org: 'Lendsqr',
      username: 'Tosin Dokunmu',
      email: 'tosin@lendsqr.com',
      phone: '07003309226',
      date: 'Apr 10, 2020 10:00 AM',
      status: 'Pending',
    },
    {
      key: '1',
      org: 'Lendstar',
      username: 'Grace Effiom',
      email: 'grace@lenstar.com',
      phone: '07060780922',
      date: 'Apr 30, 2020 10:00 AM',
      status: 'Active',
    },
    {
      key: '1',
      org: 'Lendsqr',
      username: 'Tosin Dokunmu',
      email: 'tosin@lendsqr.com',
      phone: '07003309226',
      date: 'Apr 10, 2020 10:00 AM',
      status: 'Active',
    },
    {
      key: '1',
      org: 'Lendstar',
      username: 'Grace Effiom',
      email: 'grace@lenstar.com',
      phone: '07060780922',
      date: 'Apr 30, 2020 10:00 AM',
      status: 'Blacklisted',
    },
    {
      key: '1',
      org: 'Lendsqr',
      username: 'Tosin Dokunmu',
      email: 'tosin@lendsqr.com',
      phone: '07003309226',
      date: 'Apr 10, 2020 10:00 AM',
      status: 'Inactive',
    },
    {
      key: '1',
      org: 'Lendstar',
      username: 'Grace Effiom',
      email: 'grace@lenstar.com',
      phone: '07060780922',
      date: 'Apr 30, 2020 10:00 AM',
      status: 'Inactive',
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
  const userCards = [
      {
        title: 'USER',
        count: 2_453,
        icon: <BiUser />
      },
      {
        title: 'ACTIVE USER',
        count: 2_453,
        icon: <BiUser />
      },
      {
        title: 'USERS WITH LOANS',
        count: '12,453',
        icon: <BiUser />
      },
      {
        title: 'USERS WITH SAVING',
        count: 102_453,
        icon: <BiUser />
      },
  ];
  return (
    <section className={styles.user_section}>
      <h1>USERS</h1>
      <div className={styles.user_card_container}>
        { userCards
          .map((item, idx) => (
            <Card className={styles.user_card}>
              <div>
                {item.icon}
              </div>

              <span>{item.title}</span>
              <h5>{item.count}</h5>
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
