import styles from '@/app/page.module.css'
import DateCounter from "@/app/component/DateCounter";
import Header from "@/app/component/Header";
import Image from "next/image";

export default function Wishes() {
  return (
    <div className={styles.section} id={'wishes'}>
      <img className={styles.sectionTop} src='/top2.png' />
      <div className={styles.sectionContent}>
        <div>
          <div className={styles.sectionHeader}>Пожелания</div>
          <div className={styles.wishesContentContainer}>
            <div className={styles.wishesContent}>
              <Image src={'/point.svg'} width={35} height={35} />
              Пожалуйста, подтвердите ваше присутствие на нашем празднике до  01 августа 2023 года любым удобным для вас способом.
            </div>
            <div className={styles.wishesContent}>
              <Image src={'/point.svg'} width={35} height={35} />
              Пожалуйста, воздержитесь от криков «Горько» на празднике, ведь поцелуй - знак выражения чувств, он не может быть по заказу.
            </div>
            <div className={styles.wishesContent}>
              <Image src={'/point.svg'} width={35} height={35} />
              Убедительная проcьба приходить на регистрацию и на банкет не позже чем за 30 минут до начала официальной части, чтобы вы могли занять свое место и не пропустили важные моменты.
            </div>
            <div className={styles.wishesContent}>
              <Image src={'/point.svg'} width={35} height={35} />
              Если у вас возникли какие-то вопросы или Вам нужна помощь с транфером или размещением, свяжитесь пожалуйста с нами любым удобным для вас способом
            </div>
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeMAvthvlRzHkPyMfx6hiNXaXVqSvNBQvB6wSOQI5ZFbSx-zg/viewform?embedded=true"
            width="100%" height="fit-" frameBorder="0" marginHeight="0" marginWidth="0">Загрузка…
          </iframe>
        </div>
      </div>
    </div>
  )
}
