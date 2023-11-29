import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: '4yts2s6194dp',
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'portfolioProjects',
      });
      const projectsFromCMS = response.items.map((item) => {
        const { github, image, text, url, title } = item.fields;
        const img = image?.fields?.file?.url;
        const id = item.sys.id;
        return { title, url, text, github, img, id };
      });
      setProjects(projectsFromCMS);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
