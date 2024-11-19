import styles from './MainPage.module.scss';
import MainImage from '../../../shared/images/image.png';
import { Image } from '../../../shared/ui/Image/Image';
import { Title } from '../../../shared/ui/Title/Title';
import { Button } from '../../../shared/ui/Button/CSS Modules/ButtonCss';
import { ButtonSize } from '@/shared/ui/Button/ButtonConstants';
import { ButtonSC } from '@/shared/ui/Button/Styled Components/ButtonSC';

export const MainPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Image className={styles.image} width={'340px'} src={MainImage} alt='Изображение сраницы' />
      <Title text={'Максимум практики'} />
      <p className={styles.text}>
        Сравним реализацию кнопок
      </p>
      <ul className={styles.buttonsContainer}>
        <li className={styles.button}>
          <Button text='CSS Modules' size={ButtonSize.M} />
        </li>
        <li className={styles.button}>
          <ButtonSC text='Styled-components' size={ButtonSize.M} />
        </li>
      </ul>
    </div>
  )
}