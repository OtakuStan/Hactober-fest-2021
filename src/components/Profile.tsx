import { FC } from "react";
import styles from "styles/Profile.module.css";

type Frontmatter = {
  title: string;
  image: string;
  url: string;
  repos: number;
  followers: number;
  following: number;
};

const Profile: FC<Frontmatter> = ({
  image,
  title,
  url,
  repos,
  followers,
  following,
}) => {
  return (
    <div className={styles.profile}>
      <img src={image} className={styles.photo} alt="github" />

      <span className={styles.name}>{title}</span>
      <span className={styles.details}>
        Building next-gen energy tech product at Company
      </span>

      <div className={styles.buttons}>
        <div className={styles.button}>{repos} Repos</div>
        <div className={styles.button}>{followers} Followers</div>
        <div className={styles.button}>{following} Following</div>
      </div>
    </div>
  );
};

export default Profile;
