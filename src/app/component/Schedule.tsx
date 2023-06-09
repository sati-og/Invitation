import styles from '@/app/page.module.css'
import DateCounter from "@/app/component/DateCounter";
import Image from "next/image";
import * as url from "url";

export default function Schedule() {
  return (
    <div className={styles.section} id={'schedule'}>
      {/*<img className={styles.sectionTop} src='/button2.jpg' />*/}
      <div className={styles.sectionContent} style={{  backgroundImage: 'url("/button2.jpg")'}}>
        <div>
          <div className={styles.sectionHeader}>Расписание</div>
          <div className={styles.scheduleSection}>
            <div>12:00</div>
            <div>
            Сборы жениха и невесты
          </div>
          </div>
          <div className={styles.scheduleSection}>
            <div>16:00</div>
            <div>Торжественная регистрация</div>
            <div>территория ресторана "Белуга" ул.Тенистая 30</div>
          </div>
          <div className={styles.scheduleSection}>
            <div>18:00</div>
            <div>Банкет</div>
            <div>банкетный зал "Крокус" ул. Ефремова 187</div>
          </div>
        </div>
      </div>
    </div>
  )
}
