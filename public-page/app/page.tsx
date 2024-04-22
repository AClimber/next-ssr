import Image from "next/image";
import styles from "./page.module.css";
import {RenderPage} from "@/components/RenderPage";

const getPageData = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ name: 'container', children: [
              // // {name: 'widget'},
              // {name: 'dog'},
              // {name: 'dogswr'},
              // {name: 'dogserver'},
              // {name: 'countries'},
              {name: 'countriesserver'},
          ]});
    }, 3000)
  })
}

export default async function Home() {
  const page = await getPageData();
  console.log(page)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

     <RenderPage data={page}/>
    </main>
  );
}
