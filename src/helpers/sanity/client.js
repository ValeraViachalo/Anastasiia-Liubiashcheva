import { createClient } from "@sanity/client"

export default createClient({
  projectId: "jum57ah8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
})
