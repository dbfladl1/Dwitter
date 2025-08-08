import { DweetService } from "@/lib/api/dweets";
import { DweetsAttr } from "@/lib/interface/dweets";
import { create } from "zustand";


interface DweetState {
  dweets: DweetsAttr[];
  fetchDweets: (params?:{userId?: string, text?:string}) => Promise<void>;
  setDweets: (dweets: DweetsAttr[]) => void;
  addDweet: (dweet: DweetsAttr) => void;
  deleteDweet: (id: string) => void;
}

export const useDweetStore = create<DweetState>((set) => {
  const dweetApi = new DweetService();
  return {
    dweets: [],
    fetchDweets: async (params) => {
      const data = await dweetApi.get(params);
      set({ dweets: data });
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
