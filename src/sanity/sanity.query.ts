import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export async function GetProductData() {
  return sanityClient.fetch(
    groq`
      *[_type=="product"]{
        id,
          name,
            description,
              price,
                "slug":slug.current,
                  "image": image.asset->url,
                    dimensions,
      }
    `
  );
}