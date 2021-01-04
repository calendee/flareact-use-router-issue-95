import { useRouter } from "flareact/router";

export default function Post() {
  const router = useRouter();

  const { category, slug } = router.query;

  return (
    <>
      <h1>{`Category = ${category}, Slug = ${slug}`}</h1>
      <p>{`router.query=${JSON.stringify(router.query)}`}</p>
    </>
  );
}
