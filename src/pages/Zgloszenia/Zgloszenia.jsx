import { Link } from 'react-router-dom'
import css from './Zgloszenia.module.css'

const Zgloszenia = () => {

  return (
    <>
      <main className={css.main}>
        <article className={css.article}>
          <table className={css.table}>
            <td>
              <tr>
                <b>Średni</b>:{' '}
                <Link
                  target="_blank"
                  to="https://liveresultat.orientering.se/followfull.php?comp=28505&lang=sv"
                >
                  Live
                </Link>
              </tr>
              <tr>
                {' '}
                <Link
                  target="_blank"
                  to="https://drive.google.com/file/d/1-RviOYwApwzaf6wyD169ql037wuvIx-t/view?usp=sharing"
                >
                  Wyniki
                </Link>
              </tr>
              <tr>
                {' '}
                <Link
                  target="_blank"
                  to="https://drive.google.com/file/d/1GavvwQj19zq0gQpvTu-WXCZycLphvMSE/view?usp=sharing"
                >
                  Międzyczasy
                </Link>
              </tr>
            </td>
            <td>
              <tr>
                <b>Klasyk</b>:{' '}
                <Link
                  target="_blank"
                  to="https://liveresultat.orientering.se/followfull.php?comp=28506&lang=sv"
                >
                  Live
                </Link>
              </tr>
              <tr>
                {' '}
                <Link>Wyniki</Link>
              </tr>
              <tr>
                {' '}
                <Link>Międzyczasy</Link>
              </tr>
            </td>
          </table>
          <Link
            target="_blank"
            to="https://www.livelox.com/Events/Show/127107/Puchar-Wisly-Etap-1-Middle"
          >
            <img
              src={require('./../../images/Livelox-QR-code-Puchar Wisły,  Etap 1.png')}
              alt=""
              width='200'
              height='200'
            />
          </Link>
        </article>
      </main>
    </>
  );
}

export default Zgloszenia