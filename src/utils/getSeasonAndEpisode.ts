export function getSeasonAndEpisode(input: string) {
  // Check if the input string is in the expected format
  if (!/^S(\d+)E(\d+)$/.test(input)) {
    return { season: null, episode: null };
  }

  // Extract the season and episode numbers from the input string
  const match = input.match(/^S(\d+)E(\d+)$/);
  const [, season, episode] = match ?? ['', '', ''];

  // Convert the extracted values to numbers and return them
  return {
    season: parseInt(season, 10),
    ep: parseInt(episode, 10),
  };
}
