import React from 'react';
import styles from './sidebar.module.scss';
import { MdHome } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import { BiUser } from 'react-icons/bi';
import Image from 'next/image';

const customerData = [
  {
    url: '/users',
    label: 'Users',
    icon: <BiUser />,
  },
  {
    url: '/guarantors',
    label: 'Guarantors',
    icon: <BiUser />,
  },
  {
    url: '/loan',
    label: 'Loan',
    icon: <BiUser />,
  },
  {
    url: '/decision Model',
    label: 'Decision Model',
    icon: <BiUser />,
  },
  {
    url: '/decision Model',
    label: 'Savings',
    icon: <BiUser />,
  },
  {
    url: '/decision Model',
    label: 'Loan Requests',
    icon: <BiUser />,
  },
  {
    url: '/decision Model',
    label: 'Whitelist',
    icon: <BiUser />,
  },
  {
    url: '/decision Model',
    label: 'Karma',
    icon: <BiUser />,
  },
];

const businessData = [
  {
    url: '/users',
    label: 'Users',
    icon: <BiUser />,
  },
  {
    url: '/guarantors',
    label: 'Guarantors',
    icon: <BiUser />,
  },
  {
    url: '/loan',
    label: 'Loan',
    icon: <BiUser />,
  },
  {
    url: '/decision Model',
    label: 'Decision Model',
    icon: <BiUser />,
  },
  {
    url: '/decision Model',
    label: 'Savings',
    icon: <BiUser />,
  },
  {
    url: '/decision Model',
    label: 'Loan Requests',
    icon: <BiUser />,
  },
  {
    url: '/decision Model',
    label: 'Whitelist',
    icon: <BiUser />,
  },
  {
    url: '/decision Model',
    label: 'Karma',
    icon: <BiUser />,
  },
];

const settingsData = [
  {
    url: '/users',
    label: 'Users',
    icon: <BiUser />,
  },
  {
    url: '/guarantors',
    label: 'Guarantors',
    icon: <BiUser />,
  },
  {
    url: '/loan',
    label: 'Loan',
    icon: <BiUser />,
  },
];

type Props = {
  link: {
    url: string;
    label: string;
    icon: any;
  };
};

function SidebarItem({ link }: Props) {
  return (
    <Link href={link.url}>
      <span className={styles.sidebar_item}>
        {link.icon}
        {link.label}
      </span>
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Link href='/dashboard' className='size-fit'>
        <div className={styles.logo}>
          <Image src='/login.svg' alt='Logo' width={170.96} height={40.08} />
        </div>
      </Link>

      <div className={styles.nav}>
        <button className={styles.switch}>
          <div>
            <MdHome /> Switch Organization
          </div>
          <FaChevronDown />
        </button>

        <SidebarItem
          link={{
            url: '/dashboard',
            label: 'Dashboard',
            icon: <MdHome />,
          }}
        />

        <span className={styles.menu_header}>Customer</span>

        {customerData?.map((data, idx) => {
          return <SidebarItem key={idx} link={data} />;
        })}

        <span className={styles.menu_header}>Busineses</span>
        {businessData?.map((data, idx) => {
          return <SidebarItem key={idx} link={data} />;
        })}

        <span className={styles.menu_header}>Settings</span>
        {settingsData?.map((data, idx) => {
          return <SidebarItem key={idx} link={data} />;
        })}
      </div>
    </aside>
  );
}
