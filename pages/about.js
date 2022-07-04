import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend faucibus dolor in dictum. Sed id suscipit quam. Integer mattis, dolor vel cursus lobortis, erat est fringilla leo, vel feugiat sem lorem sit amet eros.</p>
      <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
    </div>
  )
}