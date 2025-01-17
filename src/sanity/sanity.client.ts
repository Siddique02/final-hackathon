import { createClient, type ClientConfig } from "next-sanity";



const SanityClient: ClientConfig = {
    projectId: "e9azbf1r",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
}

export default createClient(SanityClient);