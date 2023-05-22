import Image from 'next/image';
import styles from './page.module.css';

import { sayHello } from 'lib';
import { Button } from 'ui';

export default function Home() {
  return (
    <main className={styles.main}>
      <Button>button</Button>
    </main>
  );
}
