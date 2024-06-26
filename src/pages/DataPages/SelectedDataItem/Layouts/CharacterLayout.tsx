import { Link } from 'react-router-dom';
import { AppRoutes } from '@/types/routesTypes';
import type { CharactersDataT } from '@/types/dataPagesTypes';

interface CharacterLayoutProps {
  character: CharactersDataT;
  route: AppRoutes.Characters;
}

function CharacterLayout({ character, route }: CharacterLayoutProps) {
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
