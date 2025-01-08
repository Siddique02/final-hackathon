

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
            name: "price",
            title: "Product Price",
            type: "number",
        },
        {
            name: "slug",
            title: "Product Slug",
            type: "slug",
            options: {
                source: 'name',
            },
        },
    ]
}