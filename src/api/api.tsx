export async function getPerfumes() {
  const res = await fetch("/api/perfumes");
  if (!res.ok) {
    throw {
      message: "Could not fetch perfumes, something went wrong",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.perfumes;
}
