import { React, useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

export default function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}
