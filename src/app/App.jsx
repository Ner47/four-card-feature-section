import { Card } from '../feature/card/ui/Card';
import styles from './App.module.css';

function App() {
  const contents = [
    {
      color: 'cyan',
      title: 'Supervisor',
      text: 'Monitors activity to identify project roadblocks',
      img: 'supervisor',
    },
    {
      color: 'red',
      title: 'Team Builder',
      text: 'Scans our talent network to create the optimal team for your project',
      img: 'teamBuilder',
    },
    {
      color: 'orange',
      title: 'Karma',
      text: 'Regularly evaluates our talent to ensure quality',
      img: 'karma',
    },
    {
      color: 'blue',
      title: 'Calculator',
      text: 'Uses data from past projects to provide better delivery estimates',
      img: 'calculator',
    },
  ];

  return (
    <>
      <main className={styles.page}>
        <header className={styles.page_header}>
          <h1 className={styles.page__title}>
            <span className={styles.page__allocation}>Reliable, efficient delivery</span>
            <br /> Powered by Technology
          </h1>
          <p className={styles.page__text}>
            Our Artificial Intelligence powered tools use millions of project data points to ensure
            that your project is successful
          </p>
        </header>
        <div className={styles.page__cards}>
          <Card content={contents[0]} />
          <div className={styles.page__card_middle}>
            <Card content={contents[1]} />
            <Card content={contents[2]} />
          </div>
          <Card content={contents[3]} />
        </div>
      </main>
    </>
  );
}

export default App;
