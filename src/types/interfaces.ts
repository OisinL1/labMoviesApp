export interface BaseActorProps {
  id: number;
  name: string;
  profile_path?: string;
  popularity?: number;
  known_for_department?: string;
}

export interface ActorDetailsProps extends BaseActorProps {
  biography?: string;
  birthday?: string;
  place_of_birth?: string;
  also_known_as?: string[];
  deathday?: string;
  gender?: number;
  homepage?: string;
}

export interface BaseActorListProps {
  actors: BaseActorProps[];
  action: (a: BaseActorProps) => React.ReactNode;
}

export interface TemplateActorListPageProps extends BaseActorListProps {
  title: string;
}

export interface DiscoverActors {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseActorProps[];
}
export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
    genre_ids?: number[];
  }

  export interface Review{
    id: string;
    content: string
    author: string
  }

  export interface MovieDetailsProps extends BaseMovieProps {
    genres: {
      id: number;
      name: string;
    }[];
    production_countries: {
      iso_3166_1: string;
      name: string;
    }[];
  }

   export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  action: (m: BaseMovieProps) => React.ReactNode;
}  

export interface Review {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    movieId: number,
  }

  export interface MovieImage {
  file_path: string;
  aspect_ratio?: number; 
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
}

export interface GenreData {
  genres: {
    id: string;
    name: string
  }[];
}

export interface DiscoverMovies {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

export interface BaseTvProps {
  id: number;
  name: string; 
  original_name?: string;
  overview: string;
  first_air_date?: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline?: string;
  number_of_seasons?: number;
  number_of_episodes?: number;
  favourite?: boolean;
  genre_ids?: number[];
}

export interface TvDetailsProps extends BaseTvProps {
  genres: {
    id: number;
    name: string;
  }[];
  production_countries?: {
    iso_3166_1: string;
    name: string;
  }[];
}

export interface BaseTvListProps {
  tvSeries: BaseTvProps[];
  action: (t: BaseTvProps) => React.ReactNode;
}

export interface TvListPageTemplateProps extends BaseTvListProps {
  title: string;
}

export interface TvImage {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface TvPageProps {
  tv: TvDetailsProps;
  images: TvImage[];
}

export interface DiscoverTvSeries {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseTvProps[];
}

export type FilterOption = "title" | "genre";