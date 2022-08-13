<<<<<<< Updated upstream
import {feylesofQuery, getFeylesof, getFeylesofBySlug, getQuery} from "../../services";
import {getFeylesofBySlugQuery} from "../../services/queries/fromSlug";

=======
import {feylesofQuery, filteredFeylesofQuery, getFeylesof, getFeylesofBySlug, getQuery} from "../../services";
import {Feylesof} from "../../components/Models";
import feylesof from "./index";
import {NextPage} from "next";
import {getFeylesofFromSlug} from "../../services/query";
>>>>>>> Stashed changes


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

// @ts-ignore
export async function getStaticProps(context) {
  const feylesofData = (await getFeylesof(feylesofQuery));
  const { params } = context
  const feylesof = (await getFeylesofBySlug(getFeylesofBySlugQuery, params));
  return {
    props: feylesof
  }
}


<<<<<<< Updated upstream
// @ts-ignore
export default function FeylesofPage(feylesof){

  return (
      <div
          className="max-w-sm hover:bg-gray-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 fixed top-12 left-12 ">
        <a href="#">
          <img className="rounded-t-lg" src= {feylesof.photo.url} alt=""/>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {feylesof.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {feylesof.bio}
          </p>
        </div>
=======
export default function FeylesofPage(param){
  const slug = param.slug
  return (
      <div>
          <h1>{param.slug.node.id}</h1>
>>>>>>> Stashed changes
      </div>
  );
}

