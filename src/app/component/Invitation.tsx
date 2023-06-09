import styles from '@/app/page.module.css'
import DateCounter from "@/app/component/DateCounter";
import Image from "next/image";

export default function Invitation() {
  return (
    <div className={styles.section} id={'invite'}>
      <img className={styles.sectionTop} src='/top2.png' />
      <div className={styles.sectionContent}>
        <div className={styles.nameText}>
          Александр & Сатеник
        </div>
        <div>
          Дорогие гости
          приглашаем Вас на нашу свадьбу, которая состоится 12.08.2023 в банкетном зале "Крокус" по адресу г. Армавир ул. Ефремова 187
        </div>
      </div>
    </div>
  )
}
