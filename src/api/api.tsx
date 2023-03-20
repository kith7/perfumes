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

type tCreds = {
  email: string;
  password: string;
};
export async function loginUser(credentials: tCreds): Promise<Response> {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(credentials),
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      messsage: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}
