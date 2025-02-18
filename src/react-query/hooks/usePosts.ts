import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
   

  return useInfiniteQuery<Post[], Error>({
    // queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data),
    staleTime: 10 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastpage, allpages) => {
      return lastpage.length > 0 ? allpages.length + 1 : undefined;
    },
  });
};

export default usePosts;
