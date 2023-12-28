import './globals.css';
import styles from './../styles/Main.module.scss';

import One from '../components/One';
import Two from '../components/Two';

const Page = () => {
  return (
    <>
      <main id = "mainContainer">
        <section>
          <One />
        </section>
        <section>
          <Two />
        </section>
      </main>
    </>
  );
};

export default Page;