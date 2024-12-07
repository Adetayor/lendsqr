import React from 'react';
import styles from './top-nav.module.scss';
import { MdImageSearch } from 'react-icons/md';
import Link from 'next/link';
import { BsBell } from 'react-icons/bs';
import Image from 'next/image';

export function TopNav() {
  return (
    <header className={styles.header}>
      <div>
        <input type='text' />
        <button>
          {' '}
          <MdImageSearch />{' '}
        </button>
      </div>

      <div>
        <Link href={'/docs'}>
          <span>Docs</span>
        </Link>
        <BsBell />

        <div>
          <Image src='/' width={100} height={100} alt='avatar' />
        </div>
      </div>
    </header>
  );
}
