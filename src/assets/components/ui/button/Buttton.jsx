import {styles} from './button.module.css';
function Buttton({ children }) {
  return <a href="#" className={styles.button}>{children}</a>;
}
export default Buttton;
