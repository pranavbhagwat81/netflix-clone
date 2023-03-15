import { queryClient } from "../../queryClient";

export const useFetchBannerMovie = (client) =>{
    console.log('data', client.getQueryData('Top Rated'));
    const fetchBannerMovie = ()=>{
        return 
    }

    return useQuery('id',fetchBannerMovie,{
        refetchOnWindowFocus: false,
        staleTime: 10000
    })
}