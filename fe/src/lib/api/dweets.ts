export class DweetService {
  url: string;

  constructor() {
    this.url = process.env.APP_BASE_URL
      ? process.env.APP_BASE_URL
      : "http://localhost:8080";
  }
  async get(params?: { userId?: string; text?: string }) {
    const userId = params?.userId ? `?userId=${params.userId}` : ``;
    const res = await fetch(`${this.url}/dweet${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return data;
  }
  async post(dweet: { text: string; userId: string }) {
    const res = await fetch(`${this.url}/dweet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dweet),
    });

    const data = await res.json();

    console.log(data);
  }
  // put(params?: { name?: string; text?: string }) {}
  // delete(params?: { name?: string; text?: string }) {}
}

export const getDweets = async (params?: {
  userId?: string;
  text?: string;
}) => {
  const userId = params?.userId ? `?userId=${params.userId}` : ``;
  const res = await fetch(`${process.env.APP_BASE_URL}/dweet${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);
};
