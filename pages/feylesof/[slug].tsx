import {getFeylesof, getFeylesofBySlug} from "../../services";

export async function getStaticPaths() {
  const feylesofData = (await getFeylesof());

  // @ts-ignore
  const paths = feylesofData.map(feylesof => ({
    params: { slug: feylesof.node.slug },
  }))
  return {
    paths: paths,
    fallback: false,
  }
}


//@ts-ignore
export async function getStaticProps(context) {
  const { params } = context
  const feylesof = (await getFeylesofBySlug(params));
  return {
    props: feylesof
  }
}

//@ts-ignore
export default function FeylesofPage(feylesof){
  return (
      <div>
        <img src={ feylesof.photo.url } alt={feylesof.name}/>
        <h1>{feylesof.name}</h1>
      </div>
  );
}

