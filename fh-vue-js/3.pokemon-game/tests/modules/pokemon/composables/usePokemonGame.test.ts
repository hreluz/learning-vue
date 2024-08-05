import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame';
import { withSetup } from '../../../utils/with-setup';

describe('usePokemon', () => {
  test('should initialize with the correct default values', () => {
    const [results, app] = withSetup(usePokemonGame);
  });
});
