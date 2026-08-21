import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../generated/siteConfig";


function HomeSEO() {
  const { business, seo } = siteConfig;


  const title = seo?.title || business.name;
  const description =
    seo?.description || business.description;


  const keywords = seo?.keywords?.join(", ") || "";


  return (
    <Helmet>
      <title>{title}</title>


      <meta
        name="description"
        content={description}
      />


      <meta
        name="robots"
        content="index, follow"
      />


      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}


      <meta
        property="og:title"
        content={title}
      />


      <meta
        property="og:description"
        content={description}
      />


      <meta
        property="og:type"
        content="website"
      />


      {seo?.siteUrl && (
        <meta
          property="og:url"
          content={seo.siteUrl}
        />
      )}


      {seo?.shareImage && (
        <meta
          property="og:image"
          content={seo.shareImage}
        />
      )}
    </Helmet>
  );
}


export default HomeSEO;
