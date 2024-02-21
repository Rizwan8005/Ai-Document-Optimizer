import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// api base url
const baseUrl = process.env.REACT_APP_BASE_URL;

export const registerAuthApi = createApi({
  reducerPath: "registerAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    registerAuthor: builder.mutation({
      query: (authorData) => ({
        url: "register-author",
        method: "POST",
        body: authorData,
      }),
    }),
  }),
});

// counterApi
export const counterApi = createApi({
  reducerPath: "counterApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCounterApi: builder.query({
      query: () => ({
        url: "count-users",
        method: "GET",
      }),
    }),
    countApiHits: builder.query({
      query: () => ({
        url: "count-api-hits",
        method: "GET",
      }),
    }),
  }),
});

// post rating and review api
export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    userReview: builder.mutation({
      query: (userReviews) => ({
        url: "submit-rating-and-review",
        method: "POST",
        body: userReviews,
      }),
    }),
  }),
});

// get ratings
export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getReviewsApi: builder.query({
      query: () => ({
        url: "reviews",
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterAuthorMutation } = registerAuthApi;
export const { useGetCounterApiQuery, useCountApiHitsQuery } = counterApi;
export const { useUserReviewMutation } = reviewApi;
export const { useGetReviewsApiQuery } = reviewsApi;