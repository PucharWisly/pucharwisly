import NewsList from 'components/NewsList/NewsList';
import React, { useState, useEffect } from 'react';
import css from './Komunikaty.module.css'
import { useLocation } from 'react-router-dom';

const Komunikaty = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [news, setNews] = useState([]);
  const location = useLocation()

  const apiUrl =
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clr82i1dt043r01wadskebz7p/master';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
            query Komunikaty {
              newses(where: {page: "Komunikaty"}) {
                id
                title
                publishedAt
                articleImg {
                  url
                }
              }
            }
            `,
          }),
        })
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setNews(result.data.newses.reverse());
      } catch (error) {
        setError('Error fetching data. Please check the console for details.');
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Coś poszło nie tak</div>}
      <main className={css.container}>
          <article className={css.newsContainer}>
            <NewsList komunikaty={news} location={location } />
        </article>
        </main>
    </>
  );
};

export default Komunikaty;


