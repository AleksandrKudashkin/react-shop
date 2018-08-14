import React from "react";
import BucketContext from "../modules/BucketContext";
import { size } from "lodash";

const Bucket = () => (
  <BucketContext.Consumer>
    {value =>
      <button>Bucket with: {size(value)} items</button>
    }
  </BucketContext.Consumer>
);

export default Bucket;
