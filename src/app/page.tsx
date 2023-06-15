import styles from './page.module.css'
import Image from "next/image";
import Invitation from "@/app/component/Invitation";
import Wishes from "@/app/component/Wishes";
import Schedule from "@/app/component/Schedule";
import ReactFullpage from '@fullpage/react-fullpage';


export default function Home() {
  return (
    <div  className={styles.container}>
      {/*<div className={styles.menu}>*/}
      {/*  <a className={`${styles.menuButton} ${styles.menuButton1}`} href={'#invite'}>*/}
      {/*    <div className={styles.menuButtonContent}>Приглашение</div>*/}
      {/*  </a>*/}
      {/*  <a className={`${styles.menuButton} ${styles.menuButton2}`} href={'#schedule'}>Расписание</a>*/}
      {/*  <a className={`${styles.menuButton} ${styles.menuButton3}`} href={'#wishes'}>Пожелания</a>*/}
      {/*</div>*/}
      <ReactFullpage>
            <ReactFullpage.Wrapper>
              <div className="section">
                <Invitation />

              </div>
              <div className="section">
                <Schedule />

              </div>
              <div className="section">
                <Wishes />

              </div>
            </ReactFullpage.Wrapper>
      </ReactFullpage>
    </div>
  )
}
