export const apiGet = async (url: string, headers?: any) => {
  const response = await fetch(url, { headers });
  return await response.json();
};

export const apiPost = async (url: string, data?: any, headers?: any) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    console.error(`Error: ${response.status} ${response.statusText}`);
    throw new Error(await response.text());
  }

  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    throw new Error("Invalid JSON response");
  }
};

export const apiPut = async (url: string, data?: any) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  return await response.json();
};

export const apiDelete = async (url: string) => {
  const response = await fetch(url, {
    method: "DELETE",
  });

  return await response.json();
};
