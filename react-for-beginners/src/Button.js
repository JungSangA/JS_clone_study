import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.protoType = {
  text: PropTypes.string.isRequired,
};
// 외부에서 이 Button을 쓸 수 있도록 설정해주는것
export default Button;
