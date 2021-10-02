import { FC } from "react";
import styles from "styles/Profile.module.css";

type Frontmatter = {
  title: string;
  description: string;
  username: string;
  bio: string;
  image: string;
  url: string;
  repos: number;
  followers: number;
  following: number;
};

const Profile: FC<Frontmatter> = ({
  image,
  title,
  description,
  username,
  bio,
  url,
  repos,
  followers,
  following,
}) => {
  return (
    <div className={styles.profile} onClick={() => window.open(url,"_blank")}> 
      <img src={image} className={styles.photo} alt="github" />

      <span className={styles.name}>{title}</span>
      <span className={styles.username}>@{username}</span>
      <span className={styles.details}>
        {description ? description : bio}
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
