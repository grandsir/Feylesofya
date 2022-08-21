import React, { useEffect, useState } from 'react';

import Link from 'next/link'
import {getFeylesof} from "../../services";
import {Feylesof} from "../../services/models";
import {NextPage} from "next";

const FeylesofRedirect: NextPage<[{ node: Feylesof }]> = () => {
  const [feylesoflar, setFeylesoflar] = useState<[{node: Feylesof}] | []>([])

  useEffect(() => {
    getFeylesof().then((feylesofs: [{node: Feylesof}] | undefined) => {
      setFeylesoflar(feylesofs ?? []);
    });
  }, []);
  
  return (
    <div>
      { feylesoflar &&
        feylesoflar.map(feylesof => (
        <Link href={'/feylesof/' + feylesof.node.slug} key={feylesof.node.slug}>
        </Link>
        ))
      }
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