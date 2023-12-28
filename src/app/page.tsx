import './globals.css';
import styles from './../styles/Main.module.scss';

import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';

const Page = () => {
  return (
    <>
      <main id = "mainContainer">
        <section id = "hero">
          <One />
        </section>
        <section id = "section">
          <Two />
        </section>
        <section>
          <Three />
        </section>
      </main>
    </>
  );
};

export default Page;