import { DweetService } from "@/lib/api/dweets";
import { DweetsAttr } from "@/lib/interface/dweets";
import { create } from "zustand";

type FetchStatus = "loading" | "ok" | "unauthorized" | "error";

interface DweetState {
  dweets: DweetsAttr[];
  status: FetchStatus;
  fetchDweets: (params?: { userId?: string; text?: string }) => Promise<void>;
  setDweets: (dweets: DweetsAttr[]) => void;
  addDweet: (dweet: DweetsAttr) => void;
  deleteDweet: (id: string) => void;
}

export const useDweetStore = create<DweetState>((set) => {
  const dweetApi = new DweetService();
  return {
    dweets: [],
    status: "loading",
    fetchDweets: async (params) => {
      const data = await dweetApi.get(params);

      if (data.type === 401) {
        set({ status: "unauthorized" });
      } else {
        set({ dweets: data });
      }
    },

    setDweets: (dweets) => set({ dweets }),

    addDweet: (dweet) =>
      set((state) => ({
        dweets: [dweet, ...state.dweets],
      })),

    deleteDweet: (id) =>
      set((state) => ({
        dweets: state.dweets.filter((d) => d.id !== id),
      })),
  };
});
