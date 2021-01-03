import { useRouter } from "flareact/router";

export default function Post() {
  const router = useRouter();

  const { category, slug } = router.query;

  return new Response(`Category = ${category}, Slug = ${slug}`)
}