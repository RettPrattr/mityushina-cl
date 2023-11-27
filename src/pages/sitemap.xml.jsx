//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = `${process.env.API_LINK}/api/cases`;

function generateSiteMap(cases) {
    // console.log(cases, "CASES SITEMAP")
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
        <loc>https://kapustin.team/</loc>
        <lastmod>2023-06-19T20:36:42+00:00</lastmod>
        <priority>1.0</priority>
     </url>
    <url>
        <loc>https://kapustin.team/form</loc>
        <lastmod>2023-06-19T20:36:42+00:00</lastmod>
        <priority>0.8</priority>
    </url>
    <url>
    <loc>https://kapustin.team/tinder</loc>
        <lastmod>2023-06-19T20:36:42+00:00</lastmod>
        <priority>0.8</priority>
    </url>
     ${cases?.data?.map((c) => {
        //  console.log(c, "CASE SITEMAP")
         return `
                    <url>
                        <loc>${`https://kapustin.team/cases/${c?.attributes.slug}`}</loc>
                        <lastmod>${c?.attributes.updatedAt}</lastmod>
                        <priority>0.9</priority>
                    </url>
                `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const cases = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(cases);

//   console.log(sitemap, "CASES SITEMAP")

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {sitemap},
  };
}

export default SiteMap;