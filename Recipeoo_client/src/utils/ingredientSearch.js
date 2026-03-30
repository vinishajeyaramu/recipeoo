export const slugify = (text) =>
  text?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export const normalizeIngredientText = (value) =>
  String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const parseIngredientQuery = (query) =>
  String(query || '')
    .split(',')
    .map((item) => normalizeIngredientText(item))
    .filter(Boolean);

export const getRecipeIngredientNames = (recipe) =>
  Array.isArray(recipe.ingredients)
    ? recipe.ingredients
        .map((ingredient) =>
          normalizeIngredientText(
            typeof ingredient === 'string' ? ingredient : ingredient?.name
          )
        )
        .filter(Boolean)
    : [];

export const searchRecipesByName = (recipes, query) => {
  const normalizedQuery = normalizeIngredientText(query);

  if (!normalizedQuery || normalizedQuery.length < 3) {
    return [];
  }

  return recipes.filter((recipe) => {
    const ingredientNames = getRecipeIngredientNames(recipe);
    return (
      normalizeIngredientText(recipe.title).includes(normalizedQuery) ||
      ingredientNames.some((ingredient) => ingredient.includes(normalizedQuery))
    );
  });
};

export const searchRecipesByIngredients = (recipes, query) => {
  const requestedIngredients = parseIngredientQuery(query);

  if (!requestedIngredients.length) {
    return [];
  }

  return recipes
    .map((recipe) => {
      const ingredientNames = getRecipeIngredientNames(recipe);
      const matchedIngredients = requestedIngredients.filter((requested) =>
        ingredientNames.some(
          (ingredient) => ingredient.includes(requested) || requested.includes(ingredient)
        )
      );

      return {
        ...recipe,
        matchedIngredients,
        matchCount: matchedIngredients.length,
        totalRequested: requestedIngredients.length,
        matchPercentage: Math.round((matchedIngredients.length / requestedIngredients.length) * 100),
      };
    })
    .filter((recipe) => recipe.matchCount > 0)
    .sort((first, second) => {
      if (second.matchCount !== first.matchCount) {
        return second.matchCount - first.matchCount;
      }

      return (second.rating || 0) - (first.rating || 0);
    });
};
