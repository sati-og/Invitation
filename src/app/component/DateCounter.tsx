import styles from '@/app/page.module.css'

const ourDate = new Date('2023-08-12')
export default function DateCounter() {

  console.log("@@@ourDate", ourDate);
  const now = new Date();
  const timeDiff = Math.abs(now.getTime() - ourDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));



  console.log('!!!!', diffDays)
  return (
    <div>
      {diffDays}
    </div>
  )
}
