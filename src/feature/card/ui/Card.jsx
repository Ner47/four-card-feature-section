import { iconCalculator, iconKarma, iconSupervisor, iconTeamBuilder } from '../../../shared/assets';
import styles from './Card.module.css';

export function Card({ content }) {
  const images = {
    supervisor: iconSupervisor,
    teamBuilder: iconTeamBuilder,
    karma: iconKarma,
    calculator: iconCalculator,
  };

  return (
    <article className={styles.card}>
      <div className={styles.card__line} style={{ '--accent': `var(--${content.color})` }}></div>
      <h2 className={styles.card__title}>{content.title}</h2>
      <p className={styles.card__text}>{content.text}</p>
      <img className={styles.card__img} src={images[content.img]} alt="" aria-hidden="true" />
    </article>
  );
}
