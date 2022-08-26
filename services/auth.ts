import { gql } from "graphql-request";

const GetUserByEmail = gql`
query getFeylesofByNickname($nickname: String) {
  feylesof(where: {nickname: $nickname}) {
    password
  }
}
`;

const createFeylesofByNickname = gql`
mutation createFeylesofByNickname($nickname: String!, $password: String!, $name: String!) {
  feylesof: createFeylesof(
    data: {nickname: $nickname, password: $password, slug: $nickname, name: $name}
  ) {
    id
  }
}
`;