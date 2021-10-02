import styles from "styles/Contributors.module.css";
import Profile from "src/components/Profile";
const contributors = () => {
  return (
    <section id="contributors">
      <div className={styles.contributors__section}>
        <div className={styles.posts}>
          <Profile
            title="Lunaticsatoshi"
            image="https://avatars.githubusercontent.com/u/47326452?v=4"
            repos={4}
            followers={2}
            following={2}
            url="https://api.github.com/users/Lunaticsatoshi"
          />
          <Profile
            title="Lunaticsatoshi"
            image="https://avatars.githubusercontent.com/u/47326452?v=4"
            repos={4}
            followers={2}
            following={2}
            url="https://api.github.com/users/Lunaticsatoshi"
          />
          <Profile
            title="Lunaticsatoshi"
            image="https://avatars.githubusercontent.com/u/47326452?v=4"
            repos={4}
            followers={2}
            following={2}
            url="https://api.github.com/users/Lunaticsatoshi"
          />
          <Profile
            title="Lunaticsatoshi"
            image="https://avatars.githubusercontent.com/u/47326452?v=4"
            repos={4}
            followers={2}
            following={2}
            url="https://api.github.com/users/Lunaticsatoshi"
          />
        </div>
      </div>
    </section>
  );
};

export default contributors;
