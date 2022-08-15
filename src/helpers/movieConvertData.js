export const movieConvertData = data => {
  return data.Object.keys().map(
    ({
      id,
      release_date,
      title,
      name,
      vote_average,
      vote_count,
      overview,
      genre_ids,
      poster_path,
    }) => ({
      id: id,
      //   title: name || title,
      rating: parseInt(vote_average),
      voted: vote_count,
      overview: overview,
      //   genres: genre_ids,
      poster: poster_path,
      date: release_date.getYear(),
    })
  );
};
