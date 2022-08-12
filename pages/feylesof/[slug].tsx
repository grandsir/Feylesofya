import {feylesofQuery, getFeylesof, getQuery} from "../../services";
import {Feylesof} from "../../components/Models";
import feylesof from "./index";
import {NextPage} from "next";


export async function getStaticPaths() {
  const feylesofData = (await getFeylesof(feylesofQuery));
  const paths = feylesofData.map((feylesof) => ({
    params: { slug: feylesof.node.slug },
  }))
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const feylesofData = (await getFeylesof(feylesofQuery));
  const { params } = context
  console.log(params)
  return {
    props: params
  }
}


export default function FeylesofPage(param){
  const slug = param.slug
  console.log(slug)
  return (
      <div>
          <h1>{slug}</h1>
      </div>
  );
}

