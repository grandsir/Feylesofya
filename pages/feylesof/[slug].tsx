import {feylesofQuery, getFeylesof} from "../../services";
import {Feylesof} from "../../components/Models";


export async function getStaticPaths() {
  const feylesofData = (await getFeylesof(feylesofQuery));
  const paths = feylesofData.map((feylesof: Feylesof) => ({
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
  return {
    props: params
  }
}

//@ts-ignore
export default function FeylesofPage(param){
  const slug = param.slug
  console.log(slug)
  return (
      <div>
          <h1>{slug}</h1>
      </div>
  );
}

