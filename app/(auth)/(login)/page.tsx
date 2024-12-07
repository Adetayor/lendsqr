'use client';
import React from 'react';
import styles from './login.module.scss';
import { TextField, Button } from '@/components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Login() {
  const router = useRouter();

  const handleNavigation = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/users');
  };
  return (
    <main className={styles.login_container}>
      {/* logo */}
      <h1>logo</h1>
      {/* main section */}
      <section>
        <aside className={styles.left_container}></aside>
        <aside className={styles.right_container}>
          <div className={styles.login_card}>
            <h3>Welcome!</h3>
            <span>Enter details to login.</span>
            <form
              onSubmit={(e: React.FormEvent) => handleNavigation(e)}
              className={styles.login_form}
            >
              <TextField type='email' placeholder='Email' />
              <TextField type='password' placeholder='Password' rightAddon />
              <Link href='/forgot_password'>
                <span className={styles.forgot_password}>FORGOT PASSWORD</span>
              </Link>
              <Button className={styles.button} type='submit'>
                Login
              </Button>
            </form>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Login;
