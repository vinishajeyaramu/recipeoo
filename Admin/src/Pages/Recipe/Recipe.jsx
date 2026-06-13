import React, { useEffect, useMemo, useState } from 'react';
import './Recipe.css';

const API_BASE = 'http://localhost:5000/api';

const emptyCardForm = {
  title: '',
  category: '',
  image: null,
  time: '',
  cuisine: '',
  cuisineImage: null,
  difficulty: '',
  serves: '',
};

const emptyIngredientRow = { quantity: '', name: '' };
const emptyDirectionRow = { title: '', instruction: '' };

const emptyRecipeForm = {
  title: '',
  category: '',
  time: '',
  cuisine: '',
  cuisineImage: null,
  difficulty: '',
  rating: '',
  serves: '',
  ingredients: '',
  instructions: '',
  nutrients: '',
  author: '',
  authorImageFile: null,
  recipeLink: '',
  ingredientRows: [{ ...emptyIngredientRow }],
  directionRows: [{ ...emptyDirectionRow }],
  preparationImages: [null],
  images: [],
  video: null,
};

const normalizeList = (value) => (Array.isArray(value) ? value : []);

const getMediaUrl = (value) => {
  if (!value) return '';
  if (typeof value !== 'string') return URL.createObjectURL(value);
  return value.startsWith('/uploads') ? `http://localhost:5000${value}` : value;
};

const validateFields = (form, fields) => {
  for (const field of fields) {
    const value = form[field];
    if (!value || (Array.isArray(value) && value.length === 0)) {
      alert(`${field} is required.`);
      return false;
    }
  }
  return true;
};

const parseJsonRows = (value, fallbackRow) => {
  if (!value) return [{ ...fallbackRow }];

  try {
    const parsed = typeof value === 'string' ? JSON.parse(value) : value;
    return Array.isArray(parsed) && parsed.length ? parsed : [{ ...fallbackRow }];
  } catch {
    return [{ ...fallbackRow, name: value, instruction: value }];
  }
};

const Recipe = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('');
  const [previewMedia, setPreviewMedia] = useState(null);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [cardForm, setCardForm] = useState(emptyCardForm);
  const [recipeForm, setRecipeForm] = useState(emptyRecipeForm);

  const loadData = async () => {
    const [categoryResult, cardsResult, recipesResult] = await Promise.allSettled([
      fetch(`${API_BASE}/categories`).then((res) => res.json()),
      fetch(`${API_BASE}/cards`).then((res) => res.json()),
      fetch(`${API_BASE}/recipes`).then((res) => res.json()),
    ]);

    setCategories(categoryResult.status === 'fulfilled' ? normalizeList(categoryResult.value) : []);

    const cards =
      cardsResult.status === 'fulfilled'
        ? normalizeList(cardsResult.value).map((item) => ({ ...item, itemType: 'card' }))
        : [];
    const recipes =
      recipesResult.status === 'fulfilled'
        ? normalizeList(recipesResult.value).map((item) => ({ ...item, itemType: 'recipe' }))
        : [];

    setItems([...cards, ...recipes]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const closeModals = () => {
    setShowCardModal(false);
    setShowRecipeModal(false);
    setEditingItem(null);
    setCardForm(emptyCardForm);
    setRecipeForm(emptyRecipeForm);
  };

  const openCardModal = () => {
    setEditingItem(null);
    setCardForm(emptyCardForm);
    setShowCardModal(true);
  };

  const openRecipeModal = () => {
    setEditingItem(null);
    setRecipeForm(emptyRecipeForm);
    setShowRecipeModal(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);

    if (item.itemType === 'card') {
      setCardForm({
        title: item.title || '',
        category: item.category || '',
        image: null,
        time: item.time || '',
        cuisine: item.cuisine || '',
        cuisineImage: null,
        difficulty: item.difficulty || '',
        rating: item.rating || '',
        serves: item.serves || '',
      });
      setShowCardModal(true);
      return;
    }

    setRecipeForm({
      title: item.title || '',
      category: item.category || '',
      time: item.time || '',
      cuisine: item.cuisine || '',
      cuisineImage: null,
      difficulty: item.difficulty || '',
      serves: item.serves || '',
      ingredients: item.ingredients || '',
      instructions: item.instructions || '',
      nutrients: item.nutrients || item.description || '',
      author: item.author || '',
      authorImageFile: null,
      recipeLink: item.recipeLink || item.videoUrl || '',
      ingredientRows: parseJsonRows(item.ingredients, emptyIngredientRow).map((row) => ({
        quantity: row.quantity || '',
        name: row.name || '',
      })),
      directionRows: parseJsonRows(item.instructions, emptyDirectionRow).map((row) => ({
        title: row.title || '',
        instruction: row.instruction || row.name || '',
      })),
      preparationImages: [],
      images: [],
      video: null,
    });
    setShowRecipeModal(true);
  };

  const handleCardChange = (event) => {
    const { name, value, files, type } = event.target;
    setCardForm((current) => ({
      ...current,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleRecipeChange = (event) => {
    const { name, value, files, type, multiple } = event.target;
    setRecipeForm((current) => ({
      ...current,
      [name]:
        type === 'file'
          ? multiple
            ? Array.from(files)
            : files[0]
          : value,
    }));
  };

  const updateIngredientRow = (index, field, value) => {
    setRecipeForm((current) => ({
      ...current,
      ingredientRows: current.ingredientRows.map((row, rowIndex) =>
        rowIndex === index ? { ...row, [field]: value } : row
      ),
    }));
  };

  const updateDirectionRow = (index, field, value) => {
    setRecipeForm((current) => ({
      ...current,
      directionRows: current.directionRows.map((row, rowIndex) =>
        rowIndex === index ? { ...row, [field]: value } : row
      ),
    }));
  };

  const updatePreparationImage = (index, file) => {
    setRecipeForm((current) => ({
      ...current,
      preparationImages: current.preparationImages.map((image, imageIndex) =>
        imageIndex === index ? file : image
      ),
    }));
  };

  const addRecipeRow = (field, row) => {
    setRecipeForm((current) => ({
      ...current,
      [field]: [...current[field], { ...row }],
    }));
  };

  const removeRecipeRow = (field, index) => {
    setRecipeForm((current) => ({
      ...current,
      [field]: current[field].length > 1
        ? current[field].filter((_, rowIndex) => rowIndex !== index)
        : current[field],
    }));
  };

  const addPreparationImage = () => {
    setRecipeForm((current) => ({
      ...current,
      preparationImages: [...current.preparationImages, null],
    }));
  };

  const removePreparationImage = (index) => {
    setRecipeForm((current) => ({
      ...current,
      preparationImages: current.preparationImages.length > 1
        ? current.preparationImages.filter((_, imageIndex) => imageIndex !== index)
        : current.preparationImages,
    }));
  };

  const handleDelete = async (item) => {
    const endpoint = item.itemType === 'card' ? 'cards' : 'recipes';

    if (!window.confirm(`Delete "${item.title}"?`)) {
      return;
    }

    if (item._id) {
      try {
        const response = await fetch(`${API_BASE}/${endpoint}/${item._id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Delete failed');
        }
      } catch (error) {
        alert('Unable to delete this item right now.');
        return;
      }
    }

    setItems((current) =>
      current.filter((entry) => (entry._id || entry.title) !== (item._id || item.title))
    );
  };

  const handleCardSubmit = async () => {
    const requiredFields = editingItem
      ? ['title', 'category', 'time', 'cuisine', 'difficulty', 'rating', 'serves']
      : ['title', 'category', 'image', 'time', 'cuisine', 'difficulty', 'rating', 'serves'];

    if (!validateFields(cardForm, requiredFields)) return;

    const formData = new FormData();
    formData.append('title', cardForm.title);
    formData.append('category', cardForm.category);
    formData.append('time', cardForm.time);
    formData.append('cuisine', cardForm.cuisine);
    formData.append('difficulty', cardForm.difficulty);
    formData.append('rating', cardForm.rating);
    formData.append('serves', cardForm.serves);
    formData.append('type', 'Card');
    if (cardForm.image) {
      formData.append('image', cardForm.image);
    }
    if (cardForm.cuisineImage) {
      formData.append('cuisineImage', cardForm.cuisineImage);
    }

    const isEditing = Boolean(editingItem?._id);

    try {
      const response = await fetch(
        `${API_BASE}/cards${isEditing ? `/${editingItem._id}` : ''}`,
        {
          method: isEditing ? 'PUT' : 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Failed to save card');
      }

      const savedItem = { ...(await response.json()), itemType: 'card' };
      setItems((current) =>
        isEditing
          ? current.map((entry) => (entry._id === savedItem._id ? savedItem : entry))
          : [...current, savedItem]
      );
      closeModals();
    } catch (error) {
      alert('Error saving card');
    }
  };

  const handleRecipeSubmit = async () => {
    const requiredFields = editingItem
      ? ['title', 'category', 'time', 'cuisine', 'difficulty', 'serves', 'nutrients', 'author', 'recipeLink']
      : ['title', 'category', 'time', 'cuisine', 'difficulty', 'serves', 'nutrients', 'author', 'recipeLink'];

    if (!validateFields(recipeForm, requiredFields)) return;

    const ingredientRows = recipeForm.ingredientRows.filter((row) => row.quantity || row.name);
    const directionRows = recipeForm.directionRows.filter((row) => row.title || row.instruction);

    if (!ingredientRows.length) {
      alert('At least one ingredient is required.');
      return;
    }

    if (!directionRows.length) {
      alert('At least one direction is required.');
      return;
    }

    const formData = new FormData();
    formData.append('title', recipeForm.title);
    formData.append('category', recipeForm.category);
    formData.append('time', recipeForm.time);
    formData.append('cuisine', recipeForm.cuisine);
    if (recipeForm.cuisineImage) {
      formData.append('cuisineImage', recipeForm.cuisineImage);
    }
    formData.append('difficulty', recipeForm.difficulty);
    formData.append('serves', recipeForm.serves);
    formData.append('ingredients', JSON.stringify(ingredientRows));
    formData.append('instructions', JSON.stringify(directionRows));
    formData.append('nutrients', recipeForm.nutrients);
    formData.append('description', recipeForm.nutrients);
    formData.append('author', recipeForm.author);
    if (recipeForm.authorImageFile) {
      formData.append('authorImageFile', recipeForm.authorImageFile);
    }
    formData.append('recipeLink', recipeForm.recipeLink);
    formData.append('videoUrl', recipeForm.recipeLink);
    formData.append('type', 'Recipe');
    recipeForm.preparationImages.filter(Boolean).forEach((image) => formData.append('images', image));
    if (recipeForm.video) {
      formData.append('video', recipeForm.video);
    }

    const isEditing = Boolean(editingItem?._id);

    try {
      const response = await fetch(
        `${API_BASE}/recipes${isEditing ? `/${editingItem._id}` : ''}`,
        {
          method: isEditing ? 'PUT' : 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Failed to save recipe');
      }

      const savedItem = { ...(await response.json()), itemType: 'recipe' };
      setItems((current) =>
        isEditing
          ? current.map((entry) => (entry._id === savedItem._id ? savedItem : entry))
          : [...current, savedItem]
      );
      closeModals();
    } catch (error) {
      alert('Error saving recipe');
    }
  };

  const filteredData = useMemo(
    () =>
      items.filter((item) =>
        [item.title, item.category, item.cuisine, item.time, item.difficulty]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(filter.toLowerCase()))
      ),
    [filter, items]
  );

  return (
    <>
      <div className="recipe-container">
        <div className="recipe-header">
          <div className="page-title-group">
            <h1>RECIPE</h1>
            <p>Manage recipe cards and detailed recipe entries with working edit and delete actions.</p>
          </div>
        </div>

        <div className="recipe-content">
          <div className="recipe-actions">
            <button onClick={openCardModal}>Add New Card</button>
            <button onClick={openRecipeModal}>Add New Recipe</button>
            <input
              type="text"
              className="filter-input"
              placeholder="Filter title/category/cuisine/time/difficulty"
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
            />
          </div>

          <div className="recipe-table">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Type</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Ingredients</th>
                  <th>Instructions</th>
                  <th>Time</th>
                  <th>Cuisine</th>
                  <th>Cuisine Image</th>
                  <th>Difficulty</th>
                  <th>Serves</th>
                  <th>Rating</th>
                  <th>Image</th>
                  <th>Video</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={item._id || `${item.title}-${index}`}>
                    <td>{index + 1}</td>
                    <td>{item.itemType === 'recipe' ? 'Recipe Details' : 'Recipe Card'}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.ingredients || '-'}</td>
                    <td>{item.instructions || '-'}</td>
                    <td>{item.time}</td>
                    <td>{item.cuisine}</td>
                    <td>
                      {item.cuisineImage ? (
                        <img
                          src={getMediaUrl(item.cuisineImage)}
                          alt={`${item.cuisine || 'cuisine'} visual`}
                          width="42"
                          height="42"
                          style={{ cursor: 'pointer' }}
                          onClick={() => setPreviewMedia({ type: 'image', src: getMediaUrl(item.cuisineImage) })}
                        />
                      ) : (
                        '-'
                      )}
                    </td>
                    <td>{item.difficulty || '-'}</td>
                    <td>{item.serves || '-'}</td>
                    <td>{item.rating}</td>
                    <td>
                      {Array.isArray(item.images) && item.images.length > 0 ? (
                        item.images.map((image, imageIndex) => (
                          <img
                            key={`${item._id || item.title}-image-${imageIndex}`}
                            src={getMediaUrl(image)}
                            alt={`step ${imageIndex + 1}`}
                            width="60"
                            height="60"
                            style={{ marginRight: 4, cursor: 'pointer' }}
                            onClick={() => setPreviewMedia({ type: 'image', src: getMediaUrl(image) })}
                          />
                        ))
                      ) : item.image ? (
                        <img
                          src={getMediaUrl(item.image)}
                          alt="thumb"
                          width="60"
                          height="60"
                          style={{ cursor: 'pointer' }}
                          onClick={() => setPreviewMedia({ type: 'image', src: getMediaUrl(item.image) })}
                        />
                      ) : (
                        '-'
                      )}
                    </td>
                    <td>
                      {item.video ? (
                        <video
                          width="60"
                          height="60"
                          controls
                          style={{ cursor: 'pointer' }}
                          onClick={() => setPreviewMedia({ type: 'video', src: getMediaUrl(item.video) })}
                        >
                          <source src={getMediaUrl(item.video)} type="video/mp4" />
                        </video>
                      ) : (
                        '-'
                      )}
                    </td>
                    <td>
                      <div className="table-action-group">
                        <button className="table-action-button edit" onClick={() => openEditModal(item)}>
                          Edit
                        </button>
                        <button className="table-action-button delete" onClick={() => handleDelete(item)}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showCardModal && (
        <div className="card-modal-overlay">
          <div className="card-modal">
            <h2>{editingItem ? 'Edit Card' : 'Add New Card'}</h2>
            <input name="title" placeholder="Title" value={cardForm.title} onChange={handleCardChange} />
            <select name="category" value={cardForm.category} onChange={handleCardChange}>
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={category._id || index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <input name="image" type="file" onChange={handleCardChange} />
            <input name="time" placeholder="Time" value={cardForm.time} onChange={handleCardChange} />
            <input name="cuisine" placeholder="Cuisine" value={cardForm.cuisine} onChange={handleCardChange} />
            <label className="field-label">Cuisine Image</label>
            <input name="cuisineImage" type="file" onChange={handleCardChange} />
            <input name="difficulty" placeholder="Difficulty" value={cardForm.difficulty} onChange={handleCardChange} />
            <input name="rating" placeholder="Rating" value={cardForm.rating} onChange={handleCardChange} />
            <input name="serves" placeholder="Serves" value={cardForm.serves} onChange={handleCardChange} />
            <div className="modal-buttons">
              <button onClick={handleCardSubmit}>{editingItem ? 'Update' : 'Save'}</button>
              <button onClick={closeModals}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showRecipeModal && (
        <div className="recipe-modal-overlay">
          <div className="recipe-modal">
            <h2>{editingItem ? 'Edit Recipe' : 'Add New Recipe'}</h2>
            <input name="title" placeholder="Title" value={recipeForm.title} onChange={handleRecipeChange} />
            <select name="category" value={recipeForm.category} onChange={handleRecipeChange}>
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={category._id || index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <input name="video" type="file" onChange={handleRecipeChange} />
            <input name="time" placeholder="Time" value={recipeForm.time} onChange={handleRecipeChange} />
            <input name="cuisine" placeholder="Cuisine" value={recipeForm.cuisine} onChange={handleRecipeChange} />
            <label className="field-label">Cuisine Image</label>
            <input name="cuisineImage" type="file" onChange={handleRecipeChange} />
            <input name="difficulty" placeholder="Difficulty" value={recipeForm.difficulty} onChange={handleRecipeChange} />
            <input name="serves" placeholder="Serves" value={recipeForm.serves} onChange={handleRecipeChange} />
            <input name="recipeLink" placeholder="Recipe Link" value={recipeForm.recipeLink} onChange={handleRecipeChange} />
            <input name="author" placeholder="Author Name" value={recipeForm.author} onChange={handleRecipeChange} />
            <label className="field-label">Author Image</label>
            <input name="authorImageFile" type="file" onChange={handleRecipeChange} />
            <textarea className="text-box" name="nutrients" placeholder="Nutrients" value={recipeForm.nutrients} onChange={handleRecipeChange} />

            <div className="dynamic-form-section">
              <div className="dynamic-form-heading">
                <h3>Ingredients</h3>
                <button type="button" onClick={() => addRecipeRow('ingredientRows', emptyIngredientRow)}>+</button>
              </div>
              {recipeForm.ingredientRows.map((row, index) => (
                <div className="dynamic-form-row" key={`ingredient-${index}`}>
                  <input
                    placeholder="Quantity"
                    value={row.quantity}
                    onChange={(event) => updateIngredientRow(index, 'quantity', event.target.value)}
                  />
                  <input
                    placeholder="Ingredient Name"
                    value={row.name}
                    onChange={(event) => updateIngredientRow(index, 'name', event.target.value)}
                  />
                  <button type="button" onClick={() => removeRecipeRow('ingredientRows', index)}>-</button>
                </div>
              ))}
            </div>

            <div className="dynamic-form-section">
              <div className="dynamic-form-heading">
                <h3>Directions</h3>
                <button type="button" onClick={() => addRecipeRow('directionRows', emptyDirectionRow)}>+</button>
              </div>
              {recipeForm.directionRows.map((row, index) => (
                <div className="dynamic-form-row direction-row" key={`direction-${index}`}>
                  <input
                    placeholder="Direction Heading"
                    value={row.title}
                    onChange={(event) => updateDirectionRow(index, 'title', event.target.value)}
                  />
                  <textarea
                    className="text-box"
                    placeholder="Direction Details"
                    value={row.instruction}
                    onChange={(event) => updateDirectionRow(index, 'instruction', event.target.value)}
                  />
                  <button type="button" onClick={() => removeRecipeRow('directionRows', index)}>-</button>
                </div>
              ))}
            </div>

            <div className="dynamic-form-section">
              <div className="dynamic-form-heading">
                <h3>Preparation Images</h3>
                <button type="button" onClick={addPreparationImage}>+</button>
              </div>
              {recipeForm.preparationImages.map((image, index) => (
                <div className="dynamic-form-row" key={`preparation-image-${index}`}>
                  <input
                    type="file"
                    onChange={(event) => updatePreparationImage(index, event.target.files[0])}
                  />
                  <button type="button" onClick={() => removePreparationImage(index)}>-</button>
                </div>
              ))}
            </div>
            <div className="modal-buttons">
              <button onClick={handleRecipeSubmit}>{editingItem ? 'Update' : 'Save'}</button>
              <button onClick={closeModals}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {previewMedia && (
        <div className="media-preview-overlay" onClick={() => setPreviewMedia(null)}>
          <div className="media-preview-content" onClick={(event) => event.stopPropagation()}>
            {previewMedia.type === 'image' ? (
              <img src={previewMedia.src} alt="Preview" />
            ) : (
              <video controls autoPlay>
                <source src={previewMedia.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
