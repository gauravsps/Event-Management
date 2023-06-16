const API_BASE_URL = "http://localhost:3000"; // Replace with your API base URL

export async function api<T>({
  path,
  method,
  body,
  token,
}: {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: object;
  token?: string;
}): Promise<T> {
  
  const url = `${API_BASE_URL}${path}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  const data: T = await response.json();
  const result = {
    data,
    ok: response.ok,
  };
  return result as T;
}
