import { getAssetUrl } from '../config/api';
import html2canvas from 'html2canvas';
import { recipecards } from '../Pages/All Recipies/AllRecipe';

const slugify = (value) =>
  String(value || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

const escapeHtml = (value) =>
  String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const getRecipeImage = (image) => {
  if (!image) return '';
  return image.startsWith('/uploads') ? getAssetUrl(image) : image;
};

const findDetailedRecipe = (recipe = {}) => {
  const candidateIds = [recipe.id, recipe._id].filter(Boolean).map(String);
  const recipeSlug = slugify(recipe.title);

  return (
    recipecards.find((item) => candidateIds.includes(String(item.id || item._id || ''))) ||
    recipecards.find((item) => slugify(item.title) === recipeSlug) ||
    null
  );
};

const resolveRecipeDownloadData = (recipe = {}) => {
  const detailedRecipe = findDetailedRecipe(recipe);

  if (!detailedRecipe) {
    return recipe;
  }

  return {
    ...detailedRecipe,
    ...recipe,
    ingredients:
      Array.isArray(recipe.ingredients) && recipe.ingredients.length
        ? recipe.ingredients
        : detailedRecipe.ingredients,
    directions:
      Array.isArray(recipe.directions) && recipe.directions.length
        ? recipe.directions
        : detailedRecipe.directions,
    description: recipe.description || detailedRecipe.description,
    description2: recipe.description2 || detailedRecipe.description2,
    author: recipe.author || detailedRecipe.author,
    authorImage: recipe.authorImage || detailedRecipe.authorImage,
    videoUrl: recipe.videoUrl || detailedRecipe.videoUrl,
    image: recipe.image || detailedRecipe.image,
    galleryImages:
      Array.isArray(recipe.galleryImages) && recipe.galleryImages.length
        ? recipe.galleryImages
        : detailedRecipe.galleryImages,
  };
};

const renderIngredients = (ingredients = []) =>
  ingredients
    .map(
      (item) =>
        `<li><strong>${escapeHtml(item.quantity || '')}</strong> ${escapeHtml(item.name || '')}</li>`
    )
    .join('');

const renderDirections = (directions = []) =>
  directions
    .map(
      (step, index) => `
        <li>
          <h3>Step ${index + 1}: ${escapeHtml(step.title || 'Direction')}</h3>
          <p>${escapeHtml(step.instruction || '')}</p>
          ${
            step.image
              ? `<img class="step-image" src="${escapeHtml(getRecipeImage(step.image))}" alt="${escapeHtml(
                  step.title || `Step ${index + 1}`
                )}" />`
              : ''
          }
        </li>
      `
    )
    .join('');

const renderGalleryImages = (recipe = {}) => {
  const directionImages = (recipe.directions || [])
    .map((step) => step?.image)
    .filter(Boolean);
  const galleryImages = [...(recipe.galleryImages || []), ...directionImages].filter(Boolean);
  const uniqueImages = galleryImages.filter(
    (image, index, array) => array.indexOf(image) === index
  );

  if (!uniqueImages.length) return '';

  return uniqueImages
    .map(
      (image, index) =>
        `<img src="${escapeHtml(getRecipeImage(image))}" alt="${escapeHtml(
          `${recipe?.title || 'Recipe'} image ${index + 1}`
        )}" />`
    )
    .join('');
};

const renderRecipeDetailsGallery = (recipe = {}) => {
  const directionImages = (recipe.directions || [])
    .map((step) => step?.image)
    .filter(Boolean);
  const galleryImages = [...directionImages, ...(recipe.galleryImages || [])].filter(Boolean);
  const uniqueImages = galleryImages.filter(
    (image, index, array) => array.indexOf(image) === index
  );

  if (!uniqueImages.length) return '';

  return uniqueImages
    .map(
      (image, index) => `
        <div class="details-gallery-item">
          <img src="${escapeHtml(getRecipeImage(image))}" alt="${escapeHtml(
            `${recipe?.title || 'Recipe'} image ${index + 1}`
          )}" />
        </div>
      `
    )
    .join('');
};

export const openRecipePrintView = (recipe) => {
  const resolvedRecipe = resolveRecipeDownloadData(recipe);
  const printWindow = window.open('', '_blank', 'width=1000,height=1200');
  if (!printWindow) return false;

  const imageSrc = getRecipeImage(resolvedRecipe?.image);

  printWindow.document.write(`
    <html>
      <head>
        <title>${escapeHtml(resolvedRecipe?.title || 'Recipeoo Download')}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 32px;
            background: #ffffff;
            color: #222222;
            line-height: 1.6;
          }
          .hero-image {
            width: 100%;
            max-height: 420px;
            object-fit: cover;
            border-radius: 16px;
            margin-bottom: 24px;
          }
          .author {
            margin: 0 0 12px;
            color: #8a6a1f;
            font-weight: 600;
          }
          .meta {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin: 16px 0 24px;
            color: #666666;
            font-size: 14px;
          }
          .meta span {
            background: #f7f4ec;
            border-radius: 999px;
            padding: 6px 12px;
          }
          h1, h2, h3 {
            margin: 0 0 12px;
          }
          ul, ol {
            padding-left: 22px;
          }
          .section {
            margin-top: 28px;
          }
          .section p {
            margin: 0 0 14px;
          }
          .step-image {
            width: 100%;
            max-width: 560px;
            display: block;
            margin-top: 12px;
            border-radius: 12px;
          }
          .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 16px;
            margin-top: 16px;
          }
          .gallery img {
            width: 100%;
            border-radius: 14px;
            object-fit: cover;
          }
          @media print {
            body {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        ${imageSrc ? `<img class="hero-image" src="${imageSrc}" alt="${escapeHtml(resolvedRecipe?.title || 'Recipe')}" />` : ''}
        <h1>${escapeHtml(resolvedRecipe?.title || 'Recipe')}</h1>
        ${resolvedRecipe?.author ? `<p class="author">By ${escapeHtml(resolvedRecipe.author)}</p>` : ''}
        <p>${escapeHtml(resolvedRecipe?.description || '')}</p>
        ${resolvedRecipe?.description2 ? `<p>${escapeHtml(resolvedRecipe.description2)}</p>` : ''}
        <div class="meta">
          <span>${escapeHtml(resolvedRecipe?.category || 'Recipe')}</span>
          <span>${escapeHtml(resolvedRecipe?.cuisine || 'Cuisine')}</span>
          <span>${escapeHtml(resolvedRecipe?.time || 'Time')}</span>
          <span>${escapeHtml(resolvedRecipe?.servings || 'Servings')}</span>
          <span>${escapeHtml(resolvedRecipe?.difficulty || 'Difficulty')}</span>
        </div>

        <div class="section">
          <h2>Ingredients</h2>
          <ul>${renderIngredients(resolvedRecipe?.ingredients)}</ul>
        </div>

        <div class="section">
          <h2>Directions</h2>
          <ol>${renderDirections(resolvedRecipe?.directions)}</ol>
        </div>

        ${
          renderGalleryImages(resolvedRecipe)
            ? `
              <div class="section">
                <h2>Recipe Images</h2>
                <div class="gallery">${renderGalleryImages(resolvedRecipe)}</div>
              </div>
            `
            : ''
        }

        <script>
          window.onload = function () {
            window.print();
            window.onafterprint = function () { window.close(); };
          };
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
  return true;
};

const sanitizeFileName = (value) =>
  (value || 'recipe').toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const buildRecipeDownloadMarkup = (recipe = {}) => {
  const imageSrc = getRecipeImage(recipe?.image);
  const authorImageSrc = getRecipeImage(recipe?.authorImage);
  const galleryMarkup = renderRecipeDetailsGallery(recipe);

  return `
    <div class="recipe-download-sheet recipe-details-sheet">
      <div class="sheet-header">
        <div class="sheet-hero">
          ${
            imageSrc
              ? `<img class="hero-image" src="${imageSrc}" alt="${escapeHtml(
                  recipe?.title || 'Recipe'
                )}" />`
              : ''
          }
        </div>
        <div class="sheet-summary">
          <p class="sheet-category">${escapeHtml(recipe?.category || 'Recipe')}</p>
          <h1>${escapeHtml(recipe?.title || 'Recipe')}</h1>
          <div class="sheet-meta-grid">
            <div class="sheet-meta-card">
              <div class="sheet-meta-label">Cooking Time</div>
              <div class="sheet-meta-value">${escapeHtml(recipe?.time || '-')}</div>
            </div>
            <div class="sheet-meta-card">
              <div class="sheet-meta-label">Cuisine</div>
              <div class="sheet-meta-value">${escapeHtml(recipe?.cuisine || '-')}</div>
            </div>
            <div class="sheet-meta-card">
              <div class="sheet-meta-label">Difficulty</div>
              <div class="sheet-meta-value">${escapeHtml(recipe?.difficulty || '-')}</div>
            </div>
            <div class="sheet-meta-card">
              <div class="sheet-meta-label">Servings</div>
              <div class="sheet-meta-value">${escapeHtml(recipe?.servings || '-')}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="sheet-author">
        <div class="sheet-author-card">
          ${
            authorImageSrc
              ? `<img class="sheet-author-image" src="${escapeHtml(authorImageSrc)}" alt="${escapeHtml(
                  recipe?.author || 'Author'
                )}" />`
              : '<div class="sheet-author-placeholder">R</div>'
          }
          <div>
            <div class="sheet-author-name">${escapeHtml(recipe?.author || 'Recipeoo Author')}</div>
            <div class="sheet-author-role">Recipe Author</div>
          </div>
        </div>
      </div>

      <div class="sheet-section">
        <div class="sheet-section-title">Ingredients</div>
        <div class="sheet-ingredients">
          ${(recipe?.ingredients || [])
            .map(
              (item) => `
                <div class="sheet-ingredient-item">
                  <span class="sheet-ingredient-qty">${escapeHtml(item.quantity || '')}</span>
                  <span class="sheet-ingredient-name">${escapeHtml(item.name || '')}</span>
                </div>
              `
            )
            .join('')}
        </div>
      </div>

      <div class="sheet-section">
        <div class="sheet-section-title">Directions</div>
        <div class="sheet-directions">
          ${(recipe?.directions || [])
            .map(
              (step, index) => `
                <div class="sheet-direction-card">
                  <div class="sheet-direction-head">Step ${index + 1}: ${escapeHtml(
                    step.title || 'Direction'
                  )}</div>
                  <div class="sheet-direction-body">
                    ${
                      step.image
                        ? `<img class="sheet-direction-image" src="${escapeHtml(
                            getRecipeImage(step.image)
                          )}" alt="${escapeHtml(step.title || `Step ${index + 1}`)}" />`
                        : ''
                    }
                    <p>${escapeHtml(step.instruction || '')}</p>
                  </div>
                </div>
              `
            )
            .join('')}
        </div>
      </div>

      ${
        recipe?.description || recipe?.description2
          ? `
            <div class="sheet-section">
              <div class="sheet-section-title">Nutritions</div>
              <div class="sheet-copy">
                ${recipe?.description ? `<p>${escapeHtml(recipe.description)}</p>` : ''}
                ${recipe?.description2 ? `<p>${escapeHtml(recipe.description2)}</p>` : ''}
              </div>
            </div>
          `
          : ''
      }

      ${
        galleryMarkup
          ? `
            <div class="sheet-section">
              <div class="sheet-section-title">Images</div>
              <div class="details-gallery">${galleryMarkup}</div>
            </div>
          `
          : ''
      }
    </div>
  `;
};

const createHiddenRecipeSheet = (recipe) => {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = '-99999px';
  container.style.top = '0';
  container.style.width = '900px';
  container.style.padding = '32px';
  container.style.background = '#ffffff';
  container.style.color = '#222222';
  container.style.zIndex = '-1';
  container.innerHTML = `
    <style>
      .recipe-download-sheet {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #1b1b1b;
      }
      .recipe-download-sheet .hero-image {
        width: 100%;
        max-height: 480px;
        object-fit: cover;
        border-radius: 28px;
        display: block;
      }
      .recipe-details-sheet .sheet-header {
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
        gap: 28px;
        align-items: center;
      }
      .recipe-details-sheet .sheet-category {
        margin: 0 0 10px;
        color: #8a6a1f;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .recipe-details-sheet h1 {
        font-size: 34px;
        line-height: 1.2;
        margin-bottom: 20px;
      }
      .recipe-details-sheet .sheet-meta-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }
      .recipe-details-sheet .sheet-meta-card {
        background: #f8f3e7;
        border: 1px solid #ead7aa;
        border-radius: 18px;
        padding: 14px 16px;
      }
      .recipe-details-sheet .sheet-meta-label {
        color: #7a6a46;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .recipe-details-sheet .sheet-meta-value {
        font-size: 16px;
        font-weight: 700;
        margin-top: 6px;
      }
      .recipe-details-sheet .sheet-author {
        margin-top: 28px;
      }
      .recipe-details-sheet .sheet-author-card {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 16px 18px;
        background: #ffffff;
        border: 1px solid #ece4d4;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
      }
      .recipe-details-sheet .sheet-author-image,
      .recipe-details-sheet .sheet-author-placeholder {
        width: 62px;
        height: 62px;
        border-radius: 50%;
        object-fit: cover;
        flex-shrink: 0;
      }
      .recipe-details-sheet .sheet-author-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ebb22f;
        color: #ffffff;
        font-weight: 700;
      }
      .recipe-details-sheet .sheet-author-name {
        font-size: 18px;
        font-weight: 700;
      }
      .recipe-details-sheet .sheet-author-role {
        color: #6e6e6e;
        font-size: 14px;
      }
      .recipe-download-sheet h1,
      .recipe-download-sheet h2,
      .recipe-download-sheet h3 {
        margin: 0 0 12px;
      }
      .recipe-details-sheet .sheet-section {
        margin-top: 30px;
      }
      .recipe-details-sheet .sheet-section-title {
        font-size: 24px;
        font-weight: 800;
        margin-bottom: 16px;
      }
      .recipe-details-sheet .sheet-ingredients {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px 18px;
      }
      .recipe-details-sheet .sheet-ingredient-item {
        display: flex;
        gap: 10px;
        align-items: baseline;
        padding: 10px 0;
        border-bottom: 1px solid #ececec;
      }
      .recipe-details-sheet .sheet-ingredient-qty {
        min-width: 90px;
        color: #8a6a1f;
        font-weight: 700;
      }
      .recipe-details-sheet .sheet-ingredient-name {
        flex: 1;
      }
      .recipe-details-sheet .sheet-directions {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .recipe-details-sheet .sheet-direction-card {
        border: 1px solid #ece4d4;
        border-radius: 22px;
        padding: 18px;
        background: #fffdf8;
      }
      .recipe-details-sheet .sheet-direction-head {
        font-size: 18px;
        font-weight: 800;
        margin-bottom: 14px;
      }
      .recipe-details-sheet .sheet-direction-body p {
        margin: 0;
      }
      .recipe-details-sheet .sheet-direction-image {
        width: 100%;
        max-height: 360px;
        object-fit: cover;
        display: block;
        margin-bottom: 14px;
        border-radius: 18px;
      }
      .recipe-details-sheet .sheet-copy p {
        margin: 0 0 12px;
      }
      .recipe-details-sheet .details-gallery {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
      }
      .recipe-details-sheet .details-gallery img {
        width: 100%;
        border-radius: 18px;
        object-fit: cover;
        display: block;
      }
      @media (max-width: 900px) {
        .recipe-details-sheet .sheet-header,
        .recipe-details-sheet .sheet-ingredients,
        .recipe-details-sheet .details-gallery,
        .recipe-details-sheet .sheet-meta-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
    ${buildRecipeDownloadMarkup(recipe)}
  `;

  document.body.appendChild(container);
  return container;
};

const waitForImages = async (container) => {
  const images = Array.from(container.querySelectorAll('img'));
  if (!images.length) return;

  await Promise.all(
    images.map(
      (image) =>
        new Promise((resolve) => {
          if (image.complete) {
            resolve();
            return;
          }

          image.onload = () => resolve();
          image.onerror = () => resolve();
        })
    )
  );
};

const renderRecipeCanvas = async (recipe) => {
  const resolvedRecipe = resolveRecipeDownloadData(recipe);
  const container = createHiddenRecipeSheet(resolvedRecipe);

  try {
    await waitForImages(container);

    return await html2canvas(container, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true,
    });
  } finally {
    document.body.removeChild(container);
  }
};

export const downloadRecipeAsJpg = async (recipe) => {
  try {
    const resolvedRecipe = resolveRecipeDownloadData(recipe);
    const canvas = await renderRecipeCanvas(resolvedRecipe);
    if (!canvas) return false;

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.download = `${sanitizeFileName(resolvedRecipe?.title)}-details.jpg`;
    link.click();
    return true;
  } catch (error) {
    console.error('Failed to download recipe JPG', error);
    return false;
  }
};

export const downloadRecipeAsPdf = async (recipe) => {
  try {
    const resolvedRecipe = resolveRecipeDownloadData(recipe);
    const canvas = await renderRecipeCanvas(resolvedRecipe);
    if (!canvas) return false;

    const imageUrl = canvas.toDataURL('image/jpeg', 0.95);
    const printWindow = window.open('', '_blank', 'width=1000,height=1200');
    if (!printWindow) return false;

    printWindow.document.write(`
      <html>
        <head>
          <title>${escapeHtml(resolvedRecipe?.title || 'Recipeoo Download')}</title>
          <style>
            body { margin: 0; padding: 24px; background: #ffffff; text-align: center; }
            img { max-width: 100%; height: auto; }
            @media print { body { padding: 0; } }
          </style>
        </head>
        <body>
          <img src="${imageUrl}" alt="${escapeHtml(resolvedRecipe?.title || 'Recipe')}" onload="window.print(); window.onafterprint = () => window.close();" />
        </body>
      </html>
    `);
    printWindow.document.close();
    return true;
  } catch (error) {
    console.error('Failed to download recipe PDF', error);
    return false;
  }
};
