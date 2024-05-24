import styles from './big-button.module.scss';

/* eslint-disable-next-line */
export interface BigButtonProps {}

export function BigButton(props: BigButtonProps) {
  return (
    <div className={styles['container']}>
      <p><button className={styles['big-button']}>The Big Button</button></p>
    </div>
  );
}

export default BigButton;
