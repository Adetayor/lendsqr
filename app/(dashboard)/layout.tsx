import { Sidebar, TopNav } from '@/components';
import React, { PropsWithChildren } from 'react';
import styles from './layout.module.scss';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.main_container}>
      <Sidebar />
      <main className={styles.main}>
        <TopNav />
        <section className={styles.section}>{children}</section>
      </main>
    </div>
  );
}
