export function NumberOfCharacters({ characters = [] }) {
  if (characters.length === 0) {
    return <p>There is no character</p>;
  }

  return <p>There are {characters.length} characters</p>;
}