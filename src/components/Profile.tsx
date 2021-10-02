import { FC } from "react";
import Image from "next/image";
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
    <div className={styles.card}>
      <Image src={image} alt="GitHub Profile Image" />

      <h3>{title}</h3>

      <div>
        <div>
          <p>Repos</p>
          <h4>{repos}</h4>
        </div>
        <div>
          <p>Followers</p>
          <h4>{followers}</h4>
        </div>

        <div>
          <p>Following</p>
          <h4>{following}</h4>
        </div>
      </div>

      <button onClick={() => window.open(url, "_blank")}></button>
    </div>
  );
};

export default Profile;
