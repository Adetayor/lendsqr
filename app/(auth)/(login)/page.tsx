import React from 'react'
import styles from './login.module.scss'

function Login() {
  return (
    <main className={styles.login_container}>
      {/* logo */}
      <h1>logo</h1>
      {/* main section */}
      <section>
        <aside className={styles.left_container}>
        </aside>
        <aside className={styles.right_container}>
          <div>
            <h3>Welcome!</h3>
            <span>Enter details to login.</span>
            <div></div>
          </div>
        </aside>
      </section>
    
    </main>
  )
}

export default Login