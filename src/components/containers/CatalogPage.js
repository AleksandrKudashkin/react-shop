import React from "react";
import Products from "../../constants/Products";
import Catalog from "../Catalog";
import BucketContext from "../../modules/BucketContext";

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bucket: props.bucket }
  }

  render() {
    return (
      <BucketContext.Provider value={this.state.bucket}>
        <Catalog products={Products} />
      </BucketContext.Provider>
    )
  }
}

CatalogPage.defaultProps = {
  bucket: {}
};

export default CatalogPage;
