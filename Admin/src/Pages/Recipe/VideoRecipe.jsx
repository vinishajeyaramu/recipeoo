import React, { useEffect, useMemo, useState } from 'react';
import './VidepRecipe.css';
import { getAdminApiUrl, getAdminMediaUrl } from '../../config/api';

const API_BASE = getAdminApiUrl();

const emptyCardForm = {
  title: '',
  category: '',
  image: null,
  time: '',
  cuisine: '',
  cuisineImage: null,
  difficulty: '',
  rating: '',
};

const emptyPreparationStep = { title: '', instruction: '' };

const emptyRecipeForm = {
  title: '',
  category: '',
  time: '',
  cuisine: '',
  cuisineImage: null,
  difficulty: '',
  videoUrl: '',
  preparationSteps: [{ ...emptyPreparationStep }],
  stepImages: [null],
};

const normalizeList = (value) => (Array.isArray(value) ? value : []);

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

const parseSteps = (value) => {
  if (!value) return [{ ...emptyPreparationStep }];

  try {
    const parsed = typeof value === 'string' ? JSON.parse(value) : value;
    return Array.isArray(parsed) && parsed.length
      ? parsed.map((step) => ({
          title: step.title || '',
          instruction: step.instruction || '',
        }))
      : [{ ...emptyPreparationStep }];
  } catch {
    return [{ ...emptyPreparationStep }];
  }
};

const VideoRecipe = () => {
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
      fetch(`${API_BASE}/video-cards`).then((res) => res.json()),
      fetch(`${API_BASE}/video-recipes`).then((res) => res.json()),
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
      videoUrl: item.videoUrl || '',
      preparationSteps: parseSteps(item.preparationSteps || item.instructions),
      stepImages: Array.isArray(item.preparationSteps) && item.preparationSteps.length
        ? item.preparationSteps.map((step) => step?.image || null)
        : [null],
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

  const updatePreparationStep = (index, field, value) => {
    setRecipeForm((current) => ({
      ...current,
      preparationSteps: current.preparationSteps.map((step, stepIndex) =>
        stepIndex === index ? { ...step, [field]: value } : step
      ),
    }));
  };

  const updateStepImage = (index, file) => {
    setRecipeForm((current) => ({
      ...current,
      stepImages: current.stepImages.map((image, imageIndex) => (imageIndex === index ? file : image)),
    }));
  };

  const addPreparationStep = () => {
    setRecipeForm((current) => ({
      ...current,
      preparationSteps: [...current.preparationSteps, { ...emptyPreparationStep }],
      stepImages: [...current.stepImages, null],
    }));
  };

  const removePreparationStep = (index) => {
    setRecipeForm((current) => ({
      ...current,
      preparationSteps:
        current.preparationSteps.length > 1
          ? current.preparationSteps.filter((_, stepIndex) => stepIndex !== index)
          : current.preparationSteps,
      stepImages:
        current.stepImages.length > 1
          ? current.stepImages.filter((_, stepIndex) => stepIndex !== index)
          : current.stepImages,
    }));
  };

  const handleDelete = async (item) => {
    const endpoint = item.itemType === 'card' ? 'video-cards' : 'video-recipes';

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
      ? ['title', 'category', 'time', 'cuisine', 'difficulty', 'rating']
      : ['title', 'category', 'image', 'time', 'cuisine', 'difficulty', 'rating'];

    if (!validateFields(cardForm, requiredFields)) return;

    const formData = new FormData();
    formData.append('title', cardForm.title);
    formData.append('category', cardForm.category);
    formData.append('time', cardForm.time);
    formData.append('cuisine', cardForm.cuisine);
    formData.append('difficulty', cardForm.difficulty);
    formData.append('rating', cardForm.rating);
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
        `${API_BASE}/video-cards${isEditing ? `/${editingItem._id}` : ''}`,
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
      alert('Error saving video card');
    }
  };

  const handleRecipeSubmit = async () => {
    const requiredFields = editingItem
      ? ['title', 'category', 'time', 'difficulty', 'cuisine', 'videoUrl']
      : ['title', 'category', 'time', 'difficulty', 'cuisine', 'videoUrl'];

    if (!validateFields(recipeForm, requiredFields)) return;

    const preparationSteps = recipeForm.preparationSteps.filter(
      (step) => step.title || step.instruction
    );

    if (!preparationSteps.length) {
      alert('Add at least one preparation step.');
      return;
    }

    const formData = new FormData();
    formData.append('title', recipeForm.title);
    formData.append('category', recipeForm.category);
    formData.append('time', recipeForm.time);
    formData.append('cuisine', recipeForm.cuisine);
    formData.append('difficulty', recipeForm.difficulty);
    formData.append('videoUrl', recipeForm.videoUrl);
    formData.append('preparationSteps', JSON.stringify(preparationSteps));
    formData.append('type', 'Recipe');
    if (recipeForm.cuisineImage) {
      formData.append('cuisineImage', recipeForm.cuisineImage);
    }
    recipeForm.stepImages.filter(Boolean).forEach((image) => formData.append('stepImages', image));

    const isEditing = Boolean(editingItem?._id);

    try {
      const response = await fetch(
        `${API_BASE}/video-recipes${isEditing ? `/${editingItem._id}` : ''}`,
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
      alert('Error saving video recipe');
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
            <h1>VIDEO RECIPE</h1>
            <p>Manage video recipe cards and detail entries with focused fields.</p>
          </div>
        </div>

        <div className="recipe-content">
          <div className="recipe-actions">
            <button onClick={openCardModal}>Add New Video Card</button>
            <button onClick={openRecipeModal}>Add New Video Recipe</button>
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
                  <th>Time</th>
                  <th>Cuisine</th>
                  <th>Cuisine Image</th>
                  <th>Difficulty</th>
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
                    <td>{item.itemType === 'recipe' ? 'Video Recipe' : 'Video Card'}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.time}</td>
                    <td>{item.cuisine}</td>
                    <td>
                      {item.cuisineImage ? (
                        <img
                          src={getAdminMediaUrl(item.cuisineImage)}
                          alt={`${item.cuisine || 'cuisine'} visual`}
                          width="42"
                          height="42"
                          style={{ cursor: 'pointer' }}
                          onClick={() => setPreviewMedia({ type: 'image', src: getAdminMediaUrl(item.cuisineImage) })}
                        />
                      ) : (
                        '-'
                      )}
                    </td>
                    <td>{item.difficulty || '-'}</td>
                    <td>{item.rating}</td>
                    <td>
                      {Array.isArray(item.images) && item.images.length > 0 ? (
                        item.images.map((image, imageIndex) => (
                          <img
                            key={`${item._id || item.title}-image-${imageIndex}`}
                            src={getAdminMediaUrl(image)}
                            alt={`step ${imageIndex + 1}`}
                            width="60"
                            height="60"
                            style={{ marginRight: 4, cursor: 'pointer' }}
                            onClick={() => setPreviewMedia({ type: 'image', src: getAdminMediaUrl(image) })}
                          />
                        ))
                      ) : item.image ? (
                        <img
                          src={getAdminMediaUrl(item.image)}
                          alt="thumb"
                          width="60"
                          height="60"
                          style={{ cursor: 'pointer' }}
                          onClick={() => setPreviewMedia({ type: 'image', src: getAdminMediaUrl(item.image) })}
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
                          onClick={() => setPreviewMedia({ type: 'video', src: getAdminMediaUrl(item.video) })}
                        >
                          <source src={getAdminMediaUrl(item.video)} type="video/mp4" />
                        </video>
                      ) : (
                        item.videoUrl ? (
                          <a href={item.videoUrl} target="_blank" rel="noreferrer">Open link</a>
                        ) : (
                          '-'
                        )
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
            <h2>{editingItem ? 'Edit Video Card' : 'Add New Video Card'}</h2>
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
            <h2>{editingItem ? 'Edit Video Recipe' : 'Add New Video Recipe'}</h2>
            <input name="title" placeholder="Title" value={recipeForm.title} onChange={handleRecipeChange} />
            <select name="category" value={recipeForm.category} onChange={handleRecipeChange}>
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={category._id || index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <input name="time" placeholder="Time" value={recipeForm.time} onChange={handleRecipeChange} />
            <input name="difficulty" placeholder="Difficulty" value={recipeForm.difficulty} onChange={handleRecipeChange} />
            <input name="cuisine" placeholder="Cuisine" value={recipeForm.cuisine} onChange={handleRecipeChange} />
            <label className="field-label">Cuisine Image</label>
            <input name="cuisineImage" type="file" onChange={handleRecipeChange} />
            <input name="videoUrl" placeholder="Video Link" value={recipeForm.videoUrl} onChange={handleRecipeChange} />
            <div className="dynamic-form-section blog-dynamic-section" style={{ marginTop: '14px' }}>
              <div className="dynamic-form-heading">
                <h3>Preparation Steps</h3>
                <button type="button" onClick={addPreparationStep}>+</button>
              </div>
              {recipeForm.preparationSteps.map((step, index) => (
                <div className="blog-list-section" key={`prep-step-${index}`}>
                  <div className="dynamic-form-row blog-section-heading-row">
                    <input
                      placeholder="Step title"
                      value={step.title}
                      onChange={(event) => updatePreparationStep(index, 'title', event.target.value)}
                    />
                    <button type="button" onClick={() => removePreparationStep(index)}>-</button>
                  </div>
                  <textarea
                    className="text-box"
                    placeholder="Step instruction"
                    value={step.instruction}
                    onChange={(event) => updatePreparationStep(index, 'instruction', event.target.value)}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => updateStepImage(index, event.target.files?.[0] || null)}
                  />
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

export default VideoRecipe;
