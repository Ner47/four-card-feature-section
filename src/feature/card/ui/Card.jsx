import { iconCalculator, iconKarma, iconSupervisor, iconTeamBuilder } from '../../../shared/assets';
import styles from './Card.module.css';

export function Card({ content }) {
  const colors = {
    red: 'hsl(0, 78%, 62%)',
    cyan: 'hsl(180, 62%, 55%)',
    orange: 'hsl(34, 97%, 64%)',
    blue: 'hsl(212, 86%, 64%)',
  };

  const images = {
    supervisor: iconSupervisor,
    teamBuilder: iconTeamBuilder,
    karma: iconKarma,
    calculator: iconCalculator,
  };

  return (
    <article className={`${styles.card} ${content.type}`}>
      <div className={styles.card__line} style={{ background: colors[content.color] }}></div>
      <h2 className={styles.card__title}>{content.title}</h2>
      <p className={styles.card__text}>{content.text}</p>
      <img className={styles.card__img} src={images[content.img]} alt="" aria-hidden="true" />
    </article>
  );
}
