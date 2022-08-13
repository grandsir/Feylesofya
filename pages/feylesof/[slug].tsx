import {feylesofQuery, getFeylesof, getFeylesofBySlug} from "../../services";
import {getFeylesofBySlugQuery} from "../../services/slugs/slugQueries";

export async function getStaticPaths() {
  const feylesofData = (await getFeylesof(feylesofQuery));

  // @ts-ignore
  const paths = feylesofData.map(feylesof => ({
    params: { slug: feylesof.node.slug },
  }))
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const feylesof = (await getFeylesofBySlug(getFeylesofBySlugQuery, params));
  return {
    props: feylesof
  }
}

//@ts-ignore
export default function FeylesofPage(feylesof){
  return (
      <div>
        <img src={ feylesof.photo.url }/>
        <h1>{feylesof.name}</h1>
      </div>
  );
}

