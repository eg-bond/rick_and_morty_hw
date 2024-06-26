import { Link } from 'react-router-dom';
import type { AppRoutes, CharactersDataT } from '../../../../types';

function CharacterLayout({
  character,
  route,
}: {
  character: CharactersDataT;
  route: AppRoutes.Characters;
}) {
  return (
    <>
      <div>
        <img src={character.image} alt={character.name} />
        <p>Имя: {character.name}</p>
        <p>Статус: {character.status}</p>
        <p>Вид: {character.species}</p>
        <p>Пол: {character.gender}</p>
      </div>
      <Link to={`/${route}`}>Вернуться к выбору персонажа</Link>
    </>
  );
}

export default CharacterLayout;
