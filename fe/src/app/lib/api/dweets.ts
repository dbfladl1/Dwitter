export class Dweets {
  url: string;

  constructor() {
    this.url = process.env.APP_BASE_URL
      ? process.env.APP_BASE_URL
      : "http://localhost:8080";
  }
  async get(params?: { userId?: string; text?: string }) {
    const userId = params?.userId ? `?userId=${params.userId}` : ``;
    console.log("u", userId);
    console.log("u", this.url);
    const res = await fetch(`${this.url}/dweet${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = res.json();

    console.log("res",res);
  }
  post() {}
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
