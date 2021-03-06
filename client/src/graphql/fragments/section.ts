import { gql } from "@apollo/client";
import { PROJECT_DATA_FRAGMENT } from "./project";
export const SECTION_DATA_FRAGMENT = gql`
  fragment SectionData on Section {
    title
    shortDescription
    longDescription
    amount
    position
    bgColor
    image {
      filename
      alt
      position
    }
    projects {
      ...ProjectData
    }
  }

  ${PROJECT_DATA_FRAGMENT}
`;
