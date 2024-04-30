import Image from '../../node_modules/next/image';
import TokenInfo from './components/TokenInfo/TokenInfo';
import TokenChart from './components/TokenChart/TokenChart';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <TokenChart />
      <TokenInfo />
    </main>
  );
}
