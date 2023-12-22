import './globals.css';
import One from '../components/One';
import Two from '../components/Two';

const Page = () => {
  return (
    <div className = "main-container">
      <section>
        <One />
      </section>
      <section>
        <Two />
      </section>
    </div>
  );
};

export default Page;