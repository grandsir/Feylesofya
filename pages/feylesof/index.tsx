import Link from 'next/link'
import {feylesofQuery, getFeylesof, getQuery} from "../../services";
import {Feylesof} from "../../components/Models";
import {NextPage} from "next";

type FeylesofProps = {
  feylesoflar: Feylesof[];
  children: JSX.Element
}

// @ts-ignore
const Feylesof: NextPage = ({feylesoflar}: FeylesofProps) => {
  return (
    <div>
      {feylesoflar.map(feylesof => (
        <Link href={'/feylesof/' + feylesof.slug} key={feylesof.slug}>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const feylesofData = (await getFeylesof(feylesofQuery)) || [];

  return {
    props: { feylesofData }
  }
}

export default Feylesof;