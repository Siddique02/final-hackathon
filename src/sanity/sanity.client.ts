import { createClient, type ClientConfig } from "next-sanity";


const SanityClient: ClientConfig = {
    projectId: "zbqefj13",
    dataset: "production",
    useCdn: false,
    apiVersion: "2024-12-22",
}

export default createClient(SanityClient);