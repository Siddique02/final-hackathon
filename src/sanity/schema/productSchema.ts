


export const ProductSchema = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Product Name",
            type: "string",
        },
        {
            name: "description",
            title: "Product Description",
            type: "string",
        },
        {
            name: "image",
            title: "Product Image",
            type: "image",
        },
        {
            name: "id",
            title: "Product Id",
            type: "string",
        },
        {
            name: "features",
            title: "Product Features",
            type: "array",
            of: [{type: "string"}]
        },
        {
            name: "dimensions",
            title: "Product Dimensions",
            type: "object",
            fields: [
                {
                    name: "width",
                    title: "Width",
                    type: "string"
                },
                {
                    name: "height",
                    title: "Height",
                    type: "string"
                },
                {
                    name: "depth",
                    title: "Depth",
                    type: "string"
                },
            ]
        },
        {
            name: "category",
            title: "Product Category",
            type: "object",
            fields: [
                {
                    name: "name",
                    title: "Name",
                    type: "string"
                },
                {
                    name: "slug",
                    title: "Slug",
                    type: "string"
                },
            ]
        },
        {
            name: "price",
            title: "Product Price",
            type: "number",
        },
        {
            name: "tags",
            title: "Product Tags",
            type: "array",
            of: [{type: "string"}]
        }
    ]
}