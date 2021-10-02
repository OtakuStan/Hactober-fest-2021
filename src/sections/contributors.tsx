import { FC, Profiler } from "react";
import styles from "styles/Contributors.module.css";
import Profile from "src/components/Profile";
type Profiles = {
  profiles: any;
};
const contributors: FC<Profiles> = ({ profiles }) => {
  return (
    <section id="contributors">
      <div className={styles.contributors__section}>
        <div className={styles.section__title}>
          <h1>Contributors</h1>
          <div className={styles.margin}></div>
        </div>
        <div className={styles.posts}>
          {profiles.map((profile: any) => {
            return (
              <Profile
                key={profile.frontmatterWithGithub.id}
                username={profile.frontmatterWithGithub.username}
                title={profile.frontmatterWithGithub.name}
                description={profile.frontmatterWithGithub.description}
                bio={profile.frontmatterWithGithub.bio}
                image={profile.frontmatterWithGithub.avatar_url}
                url={profile.frontmatterWithGithub.html_url}
                repos={profile.frontmatterWithGithub.public_repos}
                followers={profile.frontmatterWithGithub.followers}
                following={profile.frontmatterWithGithub.following}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default contributors;
