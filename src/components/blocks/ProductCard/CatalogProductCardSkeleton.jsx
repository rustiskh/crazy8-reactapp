import React from "react"
import ContentLoader from "react-content-loader"

const CatalogProductCardSkeleton = () => (
  <ContentLoader 
    className="product-card"
    speed={2}
    width={282}
    height={457}
    viewBox="0 0 282 457"
    backgroundColor="#4eff9f"
    foregroundColor="#62f2aa"
  >
    <rect x="0" y="0" rx="20" ry="20" width="282" height="457" />
  </ContentLoader>
)

export default CatalogProductCardSkeleton;

