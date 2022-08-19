import Link from 'next/link'
import {getFeylesof} from "../../services";
import {Feylesof} from "../../services/models";
import {NextPage} from "next";

const FeylesofRedirect: NextPage<[{node: Feylesof}]> = (feylesoflar) => {
  return (
    <div>
      {feylesoflar.map(feylesof => (
        <Link href={'/feylesof/' + feylesof.node.slug} key={feylesof.node.slug}>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const feylesofData = (await getFeylesof()) || [];

  return {
    props: { feylesofData }
  }
}

export default FeylesofRedirect;