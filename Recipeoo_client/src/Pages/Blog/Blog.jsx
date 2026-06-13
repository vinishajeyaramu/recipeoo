import React from 'react';
import './Blog.css';
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import BlogCard from '../../Resuable Components/Blogcards/Blogcards';
import blog_card1 from '../../Assets/Images/blog1.jpg'
import blog_card2 from '../../Assets/Images/blog2.jpg'
import blog_card3 from '../../Assets/Images/blog3.jpg'
import blog_card4 from '../../Assets/Images/blog4.jpg'
import blog_card5 from '../../Assets/Images/blog5.jpg'
import blog_card6 from '../../Assets/Images/blog6.jpg'
import blog_card7 from '../../Assets/Images/blog7.jpg'
import blog_card8 from '../../Assets/Images/blog8.jpg'
import blog_card9 from '../../Assets/Images/blog9.jpg'
import blog_card10 from '../../Assets/Images/blog10.jpg'
import blog_card11 from '../../Assets/Images/blog11.jpg'
import blog_card12 from '../../Assets/Images/blog12.jpg'
import blog_hero1 from '../../Assets/Images/blog1.jpg'
import blog_hero2 from '../../Assets/Images/blog2.jpg'
import blog_hero3 from '../../Assets/Images/blog3.jpg'
import blog_hero4 from '../../Assets/Images/blog4.jpg'
import blog_hero5 from '../../Assets/Images/blog5.jpg'
import blog_hero6 from '../../Assets/Images/blog6.jpg'
import blog_hero7 from '../../Assets/Images/blog7.jpg'
import blog_hero8 from '../../Assets/Images/blog8.jpg'
import blog_hero9 from '../../Assets/Images/blog9.jpg'
import blog_hero10 from '../../Assets/Images/blog10.jpg'
import blog_hero11 from '../../Assets/Images/blog11.jpg'
import blog_hero12 from '../../Assets/Images/blog12.jpg'
const drinksProps = {
  title: 'Blog',
  description:
    'Discover tips, trends, and stories to enhance your culinary journey. From expert advice to creative ideas, explore everything food enthusiasts need to stay inspired!',
};

const tagData = [
  { name: 'COMFORT FOOD', link: '/tags/comfort-food' },
  { name: 'DAIRY-FREE', link: '/tags/dairy-free' },
  { name: 'DESSERTS', link: '/tags/desserts' },
  { name: 'GLUTEN-FREE', link: '/tags/gluten-free' },
  { name: 'HEALTHY', link: '/tags/healthy' },
  { name: 'HIGH-PROTEIN', link: '/tags/high-protein' },
  { name: 'HOLIDAY', link: '/tags/holiday' },
  { name: 'KID-FRIENDLY', link: '/tags/kid-friendly' },
];

const tagData2 = [
  { name: 'LOW-CARB', link: '/tags/low-carb' },
  { name: 'MEAL PREP', link: '/tags/meal-prep' },
  { name: 'MEAT', link: '/tags/meat' },
  { name: 'ONE-POT', link: '/tags/one-pot' },
  { name: 'QUICK MEALS', link: '/tags/quick-meals' },
  { name: 'SPICY', link: '/tags/spicy' },
  { name: 'VEGETARIAN', link: '/tags/vegetarian' },
  { name: 'VIDEO RECIPE', link: '/tags/video-recipe' },
];

export const blogData = [
  {
    image: blog_card1,
    heroImage:blog_hero1,
    tag: 'HEALTH',
    category: 'HEALTH',
    title: 'Power Up Your Mornings: 5 Quick and Healthy Breakfast Ideas',
    author: 'Olivia Thompson',
    time: '6 months ago',
    comments: 4,
    readTime: '8 Min',
    slug: '5-quick-breakfast-ideas',
    excerpt:
      'Start your mornings with nourishing breakfasts that feel energizing, colorful, balanced, and realistic for busy everyday routines.',
    intro:
      'A healthy breakfast does not need to involve complicated recipes or hours in the kitchen. The best morning meals are often the simplest ones-balanced combinations of protein, fiber, healthy fats, and natural carbohydrates that keep you energized without feeling heavy. Whether you are rushing to work, preparing kids for school, or trying to create healthier habits, having a few reliable breakfast ideas can completely change the way your mornings feel. Instead of skipping meals or relying on processed snacks, small intentional choices can provide steady energy, improve focus, and make the entire day feel more structured and productive.',
    sectionOneTitle: 'Build Breakfast Around Protein and Fiber',
    sectionOneBody:
      'Protein and fiber are two of the most important building blocks of a satisfying breakfast because they help keep hunger stable throughout the morning. Meals built around eggs, Greek yogurt, cottage cheese, oats, chia seeds, or nut butter tend to digest more slowly and provide longer-lasting energy compared to sugary pastries or heavily processed cereals. Pairing protein with fiber-rich ingredients like berries, bananas, spinach, oats, or whole-grain toast creates balance while supporting digestion and focus. Even simple combinations such as scrambled eggs with toast and fruit or overnight oats with nuts can feel filling and comforting without requiring much preparation time.',
    sectionTwoTitle: 'Keep Mornings Simple and Sustainable',
    sectionTwoBody:
      'One of the biggest reasons healthy breakfast habits fail is because people try to make them too complicated. Sustainable routines are built around convenience and repetition rather than perfection. Washing fruit ahead of time, preparing overnight oats, batch-boiling eggs, or portioning smoothie ingredients into freezer bags can dramatically reduce weekday stress. A simple breakfast repeated consistently is usually more effective than an ambitious recipe that only happens once a month. The goal is to create meals that feel realistic enough to maintain during busy mornings while still providing nourishment and comfort.',
    sectionThreeTitle: '5 Quick Healthy Breakfast Ideas',
    sectionThreeBody:
      '1. Greek Yogurt Power Bowl: Layer thick Greek yogurt with berries, banana slices, chia seeds, granola, and a drizzle of honey for a breakfast rich in protein and antioxidants.\n\n2. Peanut Butter Banana Toast: Spread natural peanut butter over toasted whole-grain bread and top with sliced bananas and cinnamon for a quick balance of healthy fats and natural sweetness.\n\n3. Overnight Oats: Combine rolled oats, milk, chia seeds, and fruit in a jar the night before for a ready-to-eat breakfast that saves time.\n\n4. Egg and Avocado Wrap: Fill a warm tortilla with scrambled eggs, avocado, spinach, and tomatoes for a protein-packed breakfast that feels substantial.\n\n5. Green Smoothie Blend: Blend bananas, spinach, oats, yogurt, and almond milk together for a refreshing breakfast that is easy to take on the go.',
    tipsTitle: 'Quick Breakfast Tips',
    tipsList: [
      'Choose one strong protein source first before adding extras.',
      'Prepare ingredients the night before whenever possible.',
      'Keep frozen fruit available for smoothies and oatmeal.',
      'Use healthy fats like nuts, seeds, or avocado for balance.',
      'Avoid overcomplicating meals with too many ingredients.',
      'Repeat reliable breakfasts to build sustainable routines.',
    ],
  },
  {
    image: blog_card2,
    heroImage: blog_hero2,
    tag: 'SPOTLIGHTS',
    category: 'SPOTLIGHTS',
    title: 'Master Knife Skills for Effortless Cooking Prep',
    author: 'Olivia Thompson',
    time: '6 months ago',
    comments: 4,
    readTime: '8 Min',
    slug: 'master-knife-skills',
    excerpt:
      'Strong knife skills make cooking faster, safer, cleaner, and far more enjoyable in everyday kitchens.',
    intro:
      'Knife skills are one of the most important foundations in cooking because nearly every meal begins with preparation. Learning how to cut ingredients safely and consistently does far more than improve presentation-it speeds up cooking, helps ingredients cook evenly, and makes kitchen work feel more organized and controlled. Many home cooks struggle with prep work not because recipes are difficult, but because inefficient cutting techniques make cooking feel slow and frustrating. With just a few proper habits and repeated practice, knife work can become smoother, safer, and significantly more enjoyable.',
    sectionOneTitle: 'Start With Safety and Stability',
    sectionOneBody:
      'Safe cutting begins with stability. A slipping cutting board or unstable ingredient increases the risk of accidents and creates uneven cuts. Place a damp kitchen towel underneath your board to prevent movement, and always create a flat base on rounded vegetables before cutting further. Your guiding hand should use a claw grip, where fingertips curl inward and the knife blade rests lightly against your knuckles for protection. Stability and control matter far more than speed, especially for beginners. Smooth, confident movements eventually develop naturally through repetition.',
    sectionTwoTitle: 'Consistency Improves Cooking Results',
    sectionTwoBody:
      'Uniform cuts are important because ingredients that are similar in size cook at similar speeds. Large uneven chunks often leave some pieces undercooked while others become too soft or burnt. Practicing consistent slices, dices, and julienne cuts improves both texture and presentation. Start by working slowly with common vegetables such as onions, carrots, cucumbers, and bell peppers. Instead of rushing, focus on repeating the same motion while maintaining similar sizing. Over time, muscle memory develops and prep work becomes faster without sacrificing precision.',
    sectionThreeTitle: 'Essential Knife Skills Every Home Cook Should Practice',
    sectionThreeBody:
      '1. Slicing: Smooth forward-and-down motions used for vegetables, meats, and herbs.\n\n2. Dicing: Creating evenly sized cubes that cook consistently in soups, sautes, and sauces.\n\n3. Chiffonade: Rolling leafy greens or herbs tightly before slicing into thin ribbons.\n\n4. Mincing: Fine repetitive chopping ideal for garlic, herbs, and aromatics.\n\n5. Rock Chop Technique: Using the curved edge of the knife while keeping the tip anchored for efficient chopping motion.\n\n6. Julienne Cuts: Thin matchstick-style cuts useful for salads, stir-fries, and garnishes.',
    tipsTitle: 'Knife Skill Tips',
    tipsList: [
      'Keep knives sharpened regularly for cleaner and safer cuts.',
      'Use the correct knife size for the ingredient being prepared.',
      'Practice slowly before trying to improve speed.',
      'Maintain a dry and stable cutting surface.',
      'Allow the knife to do the work instead of forcing pressure.',
      'Focus on repetition and consistency over perfection.',
    ],
    
  },
  {
    image: blog_card3,
    heroImage: blog_hero3,
    tag: 'COLLECTIONS',
    category: 'COLLECTIONS',
    title: 'Savor Every Bite: A Celebration of Pizza Moments',
    author: 'Olivia Thompson',
    time: '6 months ago',
    comments: 4,
    readTime: '8 Min',
    slug: 'celebration-of-pizza-moments',
    excerpt:
      'Pizza remains one of the world\'s most comforting foods because it blends creativity, nostalgia, and shared experiences into every slice.',
    intro:
      'Pizza has a unique ability to fit nearly every mood and occasion. It can be quick and casual on a busy weeknight, elevated and artisanal for gatherings, or deeply nostalgic during movie nights and celebrations. Across cultures and kitchens, pizza continues to evolve while still maintaining the comforting familiarity that makes it universally loved. From classic Margherita pies to inventive topping combinations loaded with seasonal ingredients, pizza offers endless flexibility without losing its identity. More than just a meal, pizza often becomes part of shared experiences and memorable moments around the table.',
    sectionOneTitle: 'Why Classic Pizza Styles Continue to Endure',
    sectionOneBody:
      'Classic pizza combinations remain popular because they focus on balance rather than excess. Traditional Margherita pizza highlights the harmony between tomato sauce, mozzarella, basil, and crust, while mushroom or pepperoni pizzas emphasize savory richness and texture contrast. Great pizza does not always depend on complicated toppings-it often succeeds because of quality dough, proper baking temperature, and balanced ingredients. Thin crust, deep dish, wood-fired, and New York-style pizzas all provide different experiences while still delivering the same familiar comfort people continue returning to.',
    sectionTwoTitle: 'Pizza Nights Create Shared Experiences',
    sectionTwoBody:
      'One reason pizza remains such a social food is because it naturally encourages sharing and customization. Homemade pizza nights allow everyone to participate by selecting sauces, cheeses, vegetables, meats, and herbs based on personal taste. The process itself becomes interactive and memorable rather than simply serving dinner. Families often gather around the kitchen while stretching dough, adding toppings, and watching pizzas bake together. Even simple frozen or takeout pizzas can become part of comforting routines tied to celebrations, sports nights, and relaxed weekends.',
    sectionThreeTitle: 'Creative Ways to Elevate Homemade Pizza',
    sectionThreeBody:
      'Experimenting with toppings and finishing ingredients can completely transform homemade pizza. Fresh basil, arugula, hot honey, roasted garlic, caramelized onions, burrata cheese, and chili flakes can add complexity without overwhelming the crust. Using pizza stones or preheated baking trays helps create crispier crust texture similar to restaurant-style pizzas. Seasonal ingredients also make pizza feel fresh year-round, from summer tomatoes and herbs to roasted autumn vegetables and winter mushrooms. Balancing richness with acidity and freshness creates more satisfying flavor combinations.',
    tipsTitle: 'Pizza Night Tips',
    tipsList: [
      'Preheat the oven thoroughly before baking pizza.',
      'Avoid adding too many toppings that weigh down the crust.',
      'Finish with fresh herbs after baking for brighter flavor.',
      'Use high-moisture cheese carefully to avoid soggy texture.',
      'Allow dough to rest at room temperature before stretching.',
      'Pair pizza with salads or roasted vegetables for balance.',
    ],
  },
  {
    image: blog_card4,
    heroImage: blog_hero4,
    tag: 'TIPS',
    category: 'TIPS',
    title: 'Quick and Tasty Stir-Fry Recipes for Busy Evenings',
    author: 'Olivia Thompson',
    time: '1 year ago',
    comments: 4,
    readTime: '6 Min',
    slug: 'quick-tasty-stir-fry-recipes',
    excerpt:'Fast stir-fry meals combine bold flavor, colorful vegetables, and simple cooking techniques perfect for hectic weeknight dinners.',
    intro:'Stir-fry recipes are one of the easiest ways to prepare flavorful meals without spending hours in the kitchen. With a hot pan, fresh vegetables, simple sauces, and quick-cooking proteins, you can create satisfying dinners in less than thirty minutes. Stir-frying works especially well for busy evenings because it requires minimal cleanup while still delivering vibrant textures and bold flavors. Whether you prefer chicken, beef, tofu, shrimp, or vegetable-based dishes, stir-fries offer flexibility and convenience without sacrificing nutrition or comfort.',
    sectionOneTitle:'Build Flavor With Simple Ingredients',
    sectionOneBody:'Great stir-fries rely on balance rather than complicated recipes. Garlic, ginger, soy sauce, sesame oil, chili paste, and citrus juices create strong flavor foundations using only a few ingredients. Fresh vegetables like bell peppers, broccoli, snap peas, carrots, mushrooms, and onions add texture and color while cooking quickly over high heat. Choosing proteins that cook fast, such as thinly sliced chicken or shrimp, keeps the entire meal efficient and weeknight-friendly. Simple ingredients combined properly can produce restaurant-style flavor with very little effort.',
    sectionTwoTitle:'High Heat Makes the Difference',
    sectionTwoBody:'The key to successful stir-frying is cooking over high heat while keeping ingredients moving constantly. A properly heated wok or skillet allows vegetables to stay crisp while developing light caramelization that adds smoky depth and texture. Overcrowding the pan traps steam and causes ingredients to soften instead of sear, so cooking in smaller batches often produces better results. Preparing all ingredients before heating the pan is also important because stir-frying happens quickly once cooking begins. Organized preparation helps the process feel smooth and stress-free.',
    sectionThreeTitle:'5 Quick Stir-Fry Ideas for Busy Nights',
    sectionThreeBody:'1. Garlic Chicken Stir-Fry: Toss sliced chicken breast with broccoli, carrots, garlic, soy sauce, and sesame oil for a balanced weeknight dinner.\n\n2. Sweet Chili Shrimp Stir-Fry: Combine shrimp, bell peppers, snap peas, and sweet chili sauce for a quick meal with sweet and spicy flavor.\n\n3. Teriyaki Beef and Broccoli: Thinly sliced beef cooked with broccoli florets and glossy teriyaki sauce creates a comforting takeout-style favorite.\n\n4. Spicy Tofu Vegetable Stir-Fry: Crispy tofu paired with mushrooms, cabbage, carrots, and chili garlic sauce makes a flavorful plant-based option.\n\n5. Noodle Stir-Fry Bowl: Toss cooked noodles with vegetables, soy sauce, ginger, garlic, and scrambled eggs for an easy one-pan dinner.',
    tipsTitle:'Stir-Fry Cooking Tips',
    tipsList: [
      'Prepare all ingredients before turning on the heat.',
      'Use high heat for better texture and flavor.',
      'Do not overcrowd the pan while cooking.',
      'Slice vegetables and proteins into similar sizes.',
      'Add sauces near the end to avoid burning.',
      'Serve immediately while the vegetables stay crisp.',
    ],
  },
  {
    image: blog_card5,
    heroImage: blog_hero5,
    tag: 'SPOTLIGHTS',
    category: 'SPOTLIGHTS',
    title: 'Create Lasting Memories Around the Family Table',
    author: 'Olivia Thompson',
    time: '1 year ago',
    comments: 4,
    readTime: '6 Min',
    slug: 'create-lasting-memories-family-table',
    excerpt:'Shared meals bring people together through conversation, comfort, traditions, and meaningful everyday moments.',
    intro:'The family table has always been more than just a place to eat. It is where conversations unfold, stories are shared, celebrations happen, and ordinary evenings become lasting memories. In busy modern routines filled with screens, schedules, and distractions, gathering together for meals creates an important sense of connection and stability. Whether it is a large weekend dinner, a casual breakfast, or a quick weeknight meal, sitting together encourages communication, strengthens relationships, and turns food into a shared experience rather than simply a daily necessity.',
    sectionOneTitle: 'Simple Meals Often Create the Strongest Memories',
    sectionOneBody:'Family meals do not need to be elaborate or perfectly planned to feel meaningful. Some of the most memorable moments happen during simple dinners made with familiar comfort foods and relaxed conversation. Homemade pasta nights, pizza evenings, soups during rainy weather, or weekend breakfasts can become traditions that people remember for years. The atmosphere matters more than perfection. Warm lighting, shared dishes, laughter, and uninterrupted conversation help create an environment where everyone feels welcomed and connected around the table.',
    sectionTwoTitle: 'Shared Cooking Builds Stronger Connections',
    sectionTwoBody:'Cooking together often becomes just as meaningful as the meal itself. Allowing family members to help prepare ingredients, stir sauces, knead dough, or set the table creates involvement and teamwork in the kitchen. Children especially benefit from participating because cooking teaches patience, responsibility, creativity, and confidence. Even small tasks such as washing vegetables or arranging toppings can make people feel included. Shared preparation transforms dinner from a routine obligation into an enjoyable collaborative experience that encourages communication and bonding.',
    sectionThreeTitle: 'Create Traditions That Feel Personal',
    sectionThreeBody:'Meaningful traditions do not need to be complicated or expensive. Weekly taco nights, Sunday brunches, homemade dessert evenings, or seasonal holiday recipes can become comforting rituals that families look forward to regularly. Personal traditions create familiarity and emotional connection while giving everyone something predictable to share during busy schedules. Over time, these repeated experiences become deeply tied to memories, comfort, and togetherness. Food often carries emotional significance because it becomes connected to moments spent with the people closest to us.',
    tipsTitle: 'Family Table Tips',
    tipsList: [
      'Set aside distractions like phones or television during meals.',
      'Encourage everyone to participate in conversation.',
      'Create simple weekly meal traditions to look forward to.',
      'Invite family members to help with preparation and serving.',
      'Focus on togetherness instead of perfect presentation.',
      'Use meals as opportunities to reconnect after busy days.',
    ],
  },
  {
    image: blog_card6,
    heroImage: blog_hero6,
    tag: 'INGREDIENTS',
    category: 'INGREDIENTS',
    title: 'One-Pot Wonders to Simplify Your Weeknight Meals',
    author: 'Olivia Thompson',
    time: '6 months ago',
    comments: 4,
    readTime: '8 Min',
    slug: 'celebration-of-pizza-moments',
    excerpt:
      'Pizza remains one of the world\'s most comforting foods because it blends creativity, nostalgia, and shared experiences into every slice.',
    intro:
      'Pizza has a unique ability to fit nearly every mood and occasion. It can be quick and casual on a busy weeknight, elevated and artisanal for gatherings, or deeply nostalgic during movie nights and celebrations. Across cultures and kitchens, pizza continues to evolve while still maintaining the comforting familiarity that makes it universally loved. From classic Margherita pies to inventive topping combinations loaded with seasonal ingredients, pizza offers endless flexibility without losing its identity. More than just a meal, pizza often becomes part of shared experiences and memorable moments around the table.',
    sectionOneTitle: 'Why Classic Pizza Styles Continue to Endure',
    sectionOneBody:
      'Classic pizza combinations remain popular because they focus on balance rather than excess. Traditional Margherita pizza highlights the harmony between tomato sauce, mozzarella, basil, and crust, while mushroom or pepperoni pizzas emphasize savory richness and texture contrast. Great pizza does not always depend on complicated toppings-it often succeeds because of quality dough, proper baking temperature, and balanced ingredients. Thin crust, deep dish, wood-fired, and New York-style pizzas all provide different experiences while still delivering the same familiar comfort people continue returning to.',
    sectionTwoTitle: 'Pizza Nights Create Shared Experiences',
    sectionTwoBody:
      'One reason pizza remains such a social food is because it naturally encourages sharing and customization. Homemade pizza nights allow everyone to participate by selecting sauces, cheeses, vegetables, meats, and herbs based on personal taste. The process itself becomes interactive and memorable rather than simply serving dinner. Families often gather around the kitchen while stretching dough, adding toppings, and watching pizzas bake together. Even simple frozen or takeout pizzas can become part of comforting routines tied to celebrations, sports nights, and relaxed weekends.',
    sectionThreeTitle: 'Creative Ways to Elevate Homemade Pizza',
    sectionThreeBody:
      'Experimenting with toppings and finishing ingredients can completely transform homemade pizza. Fresh basil, arugula, hot honey, roasted garlic, caramelized onions, burrata cheese, and chili flakes can add complexity without overwhelming the crust. Using pizza stones or preheated baking trays helps create crispier crust texture similar to restaurant-style pizzas. Seasonal ingredients also make pizza feel fresh year-round, from summer tomatoes and herbs to roasted autumn vegetables and winter mushrooms. Balancing richness with acidity and freshness creates more satisfying flavor combinations.',
    tipsTitle: 'Pizza Night Tips',
    tipsList: [
      'Preheat the oven thoroughly before baking pizza.',
      'Avoid adding too many toppings that weigh down the crust.',
      'Finish with fresh herbs after baking for brighter flavor.',
      'Use high-moisture cheese carefully to avoid soggy texture.',
      'Allow dough to rest at room temperature before stretching.',
      'Pair pizza with salads or roasted vegetables for balance.',
    ],
  },
  {
    image: blog_card7,
    heroImage: blog_hero7,
    tag: 'SPOTLIGHTS',
    category: 'SPOTLIGHTS',
    title: 'Homemade Burger Night Done Right',
    author: 'Olivia Thompson',
    time: '6 months ago',
    comments: 4,
    readTime: '6 Min',
    slug: 'homemade-burger-night-done-right',
    excerpt:'Homemade burger nights combine comfort, creativity, and bold flavor while bringing everyone together around customizable meals.',
    intro:'Burger nights are more than quick dinners—they are interactive meals that allow everyone to build combinations they genuinely enjoy. From juicy grilled patties and toasted buns to fresh toppings and flavorful sauces, homemade burgers create comfort-food experiences that feel relaxed and satisfying. Unlike fast-food versions, homemade burgers give you full control over ingredients, cooking style, seasoning, and freshness. Whether preparing classic cheeseburgers, spicy chicken burgers, or plant-based options, burger nights make weeknight cooking feel fun, customizable, and surprisingly simple.',
    sectionOneTitle: 'Start With Quality Ingredients',
    sectionOneBody:'A great homemade burger begins with balanced ingredients rather than excessive toppings. Fresh ground beef with moderate fat content helps create juicy patties that stay flavorful during cooking, while soft toasted buns improve both texture and structure. Fresh vegetables such as lettuce, tomatoes, onions, and pickles provide crunch and brightness that balance the richness of the meat and cheese. Simple seasoning with salt, pepper, garlic powder, or smoked paprika often creates better flavor than overcomplicated spice blends.',
    sectionTwoTitle: 'Cooking Technique Makes the Difference',
    sectionTwoBody:'Proper cooking technique is what transforms basic burger ingredients into restaurant-style results. Avoid pressing patties too aggressively while cooking because it releases flavorful juices and dries out the meat. A hot skillet or grill helps create caramelized crust while keeping the center tender and juicy. Toasting burger buns lightly prevents sogginess while adding texture and warmth. Layering ingredients carefully also improves the overall eating experience by keeping the burger balanced and easier to handle.',
    sectionThreeTitle: 'Creative Burger Night Ideas',
    sectionThreeBody:'1. Classic Cheeseburger: Juicy beef patties topped with cheddar cheese, lettuce, tomatoes, onions, and burger sauce.\n\n2. BBQ Bacon Burger: Smoky barbecue sauce paired with crispy bacon, caramelized onions, and sharp cheese.\n\n3. Spicy Chicken Burger: Crispy chicken fillet served with spicy mayo, pickles, and crunchy slaw.\n\n4. Mushroom Swiss Burger: Sauteed mushrooms and melted Swiss cheese create rich savory flavor.\n\n5. Veggie Black Bean Burger: A hearty plant-based option loaded with avocado, lettuce, and roasted peppers.',
    tipsTitle: 'Burger Night Tips',
    tipsList: [
      'Toast buns lightly before assembling burgers.',
      'Avoid overmixing meat while forming patties.',
      'Use high heat to develop a flavorful crust.',
      'Let cooked patties rest briefly before serving.',
      'Prepare toppings ahead of time for easier assembly.',
      'Balance rich ingredients with fresh crunchy vegetables.',
    ],

  },
  {
    image: blog_card8,
    heroImage: blog_hero8,
    tag: 'COLLECTIONS',
    category: 'COLLECTIONS',
    title: 'Rustic Comfort Food for Cozy Nights In',
    author: 'Olivia Thompson',
    time: '6 months ago',
    comments: 4,
    readTime: '7 Min',
    slug: 'rustic-comfort-food-cozy-nights',
    excerpt:'Rustic comfort foods create warmth, familiarity, and satisfying flavors perfect for slow relaxing evenings at home.',
    intro:  'Comfort food has a unique way of making evenings feel calmer and more inviting, especially during colder seasons or quiet weekends at home. Rustic dishes built around slow-cooked ingredients, hearty textures, and rich flavors create meals that feel deeply satisfying without needing complicated presentation. From creamy mashed potatoes and soups to baked casseroles and warm bread, comfort food focuses on nourishment, simplicity, and emotional warmth. These meals often become tied to memories, traditions, and moments of relaxation shared with family and friends.',
    sectionOneTitle: 'Simple Ingredients Create Rich Flavor',
    sectionOneBody: 'Rustic cooking often relies on everyday ingredients prepared thoughtfully rather than expensive or highly technical components. Potatoes, onions, garlic, herbs, beans, pasta, root vegetables, and slow-cooked meats develop deeper flavor through gradual cooking methods. Roasting vegetables, simmering broths slowly, and baking dishes until golden create aromas and textures that instantly make kitchens feel warm and welcoming. Simplicity is what gives rustic comfort food its timeless appeal.',
    sectionTwoTitle: 'Slow Cooking Encourages Relaxed Evenings',
    sectionTwoBody:    'Many comfort-food recipes naturally encourage slower, more relaxed cooking experiences. Soups simmer quietly, casseroles bake gradually, and stews deepen in flavor over time without requiring constant attention. These slower cooking styles help create cozy atmospheres while filling the home with rich comforting aromas. Rustic meals are especially enjoyable because they invite people to slow down, gather together, and enjoy food without rushing.',
    sectionThreeTitle: 'Comfort Food Ideas for Cozy Nights',
    sectionThreeBody:    '1. Creamy Chicken Pot Pie: Tender chicken and vegetables baked beneath a golden flaky crust.\n\n2. Slow-Cooked Beef Stew: Hearty beef simmered with potatoes, carrots, onions, and herbs.\n\n3. Baked Mac and Cheese: Rich cheese sauce baked until bubbly with crispy golden topping.\n\n4. Rustic Tomato Soup and Bread: Smooth tomato soup paired with warm toasted artisan bread.\n\n5. Garlic Herb Roasted Chicken: Crispy roasted chicken served with buttery mashed potatoes and vegetables.',
    tipsTitle: 'Comfort Food Tips',
    tipsList: [
      'Use fresh herbs to deepen flavor naturally.',
      'Cook slowly to allow flavors to develop fully.',
      'Serve meals warm with simple side dishes.',
      'Choose recipes that feel nostalgic and familiar.',
      'Use hearty textures for more satisfying meals.',
      'Create relaxed table settings to enhance the experience.',
    ],
  },
  {
    image: blog_card9,
    heroImage: blog_hero9,
    tag: 'HEALTH',
    category: 'HEALTH',
    title: 'Transform Your Salads with Flavorful Dressings',
    author: 'Olivia Thompson',
    time: '6 months ago',
    comments: 4,
    readTime: '7 Min',
    slug: 'transform-salads-flavorful-dressings',
    excerpt:    'Fresh homemade dressings can completely transform salads by adding balance, texture, brightness, and bold flavor.',
    intro:'A great salad dressing does far more than coat vegetables—it brings balance, depth, and personality to the entire dish. Even simple salads become more exciting when paired with fresh vinaigrettes, creamy herb blends, or citrus-based dressings made with quality ingredients. Homemade dressings also allow better control over flavor, freshness, and nutrition compared to many heavily processed store-bought versions. By learning a few simple combinations, salads can shift from feeling repetitive to becoming vibrant and satisfying meals worth looking forward to.',
    sectionOneTitle: 'Balance Is the Secret to Great Dressings',
    sectionOneBody:'The best salad dressings achieve balance between acidity, richness, sweetness, and seasoning. Ingredients like olive oil, lemon juice, vinegar, yogurt, mustard, honey, garlic, and herbs work together to create layered flavor without overwhelming the salad itself. Acidic ingredients brighten vegetables while oils create smooth texture and help distribute flavor evenly. Even small additions like black pepper, chili flakes, or fresh herbs can completely change the character of a dressing while making salads taste more dynamic and refreshing.',
    sectionTwoTitle: 'Homemade Dressings Add Freshness and Variety',
    sectionTwoBody:'Making dressings at home allows endless creativity while avoiding overly heavy or sugary bottled alternatives. Light citrus vinaigrettes work beautifully for green salads, while creamy yogurt or tahini dressings pair well with grain bowls and roasted vegetables. Homemade dressings also encourage seasonal variety by incorporating fresh herbs, fruits, nuts, and spices throughout the year. A few simple recipes prepared in advance can make healthy eating feel much more enjoyable and sustainable.',
    sectionThreeTitle: 'Easy Homemade Dressing Ideas',
    sectionThreeBody:'1. Lemon Herb Vinaigrette: Olive oil, lemon juice, garlic, oregano, and black pepper create bright refreshing flavor.\n\n2. Honey Mustard Dressing: Dijon mustard, honey, vinegar, and olive oil make a balanced sweet-savory combination.\n\n3. Creamy Yogurt Dressing: Greek yogurt blended with herbs, garlic, and lemon creates a lighter creamy option.\n\n4. Sesame Ginger Dressing: Soy sauce, sesame oil, ginger, and rice vinegar pair perfectly with crunchy vegetables.\n\n5. Avocado Lime Dressing: Creamy avocado blended with lime juice and cilantro creates smooth rich texture.',
    tipsTitle: 'Salad Dressing Tips',
    tipsList: [
      'Whisk dressings thoroughly for smoother texture.',
      'Taste and adjust seasoning gradually.',
      'Use fresh citrus for brighter flavor.',
      'Store homemade dressings in sealed jars.',
      'Add dressings shortly before serving salads.',
      'Balance creamy ingredients with acidic elements.',
    ],

  },
  {
    image: blog_card10,
    heroImage: blog_hero10,
    tag: 'INGREDIENTS',
    category: 'INGREDIENTS',
    title: 'Grill Juicy Chicken to Perfection Every Time',
    author: 'Olivia Thompson',
    time: '6 months ago',
    comments: 4,
    readTime: '6 Min',
    slug: 'grill-juicy-chicken-perfectly',
    excerpt:'Perfect grilled chicken combines smoky flavor, juicy texture, balanced seasoning, and proper cooking technique.',
    intro:'Grilled chicken remains one of the most versatile and reliable meals because it works beautifully in salads, sandwiches, wraps, bowls, and full dinner plates. While grilling may appear simple, achieving juicy texture and deep smoky flavor consistently requires attention to preparation, seasoning, and heat management. Dry overcooked chicken is often the result of uneven cooking or poor timing rather than the grill itself. With proper marination, controlled heat, and a few reliable techniques, homemade grilled chicken can become flavorful, tender, and restaurant-quality every time.',
    sectionOneTitle: 'Marination Builds Flavor and Moisture',
    sectionOneBody:'Marinating chicken before grilling helps improve both flavor and texture by allowing seasonings and moisture to penetrate the meat gradually. Ingredients such as olive oil, yogurt, lemon juice, garlic, herbs, paprika, and spices help tenderize chicken while building balanced smoky flavor. Even short marination times can improve results significantly, especially when using thinner chicken cuts. Balanced seasoning creates depth without overpowering the natural flavor of the chicken itself.',
    sectionTwoTitle: 'Control Heat for Better Texture',
    sectionTwoBody:'Managing grill temperature properly is one of the most important parts of cooking juicy chicken. Extremely high heat can burn the exterior before the center finishes cooking, while low heat may dry out the meat over time. Using medium-high heat allows chicken to develop caramelized grill marks while staying tender inside. Turning chicken only when necessary and allowing it to rest briefly after grilling helps preserve juices and improve texture.',
    sectionThreeTitle: 'Popular Grilled Chicken Variations',
    sectionThreeBody:'1. Lemon Herb Chicken: Fresh herbs, garlic, lemon juice, and olive oil create bright Mediterranean flavor.\n\n2. Smoky BBQ Chicken: Barbecue sauce paired with paprika and garlic creates sweet smoky richness.\n\n3. Spicy Chili Lime Chicken: Lime juice and chili seasoning provide bold tangy heat.\n\n4. Garlic Butter Chicken Skewers: Tender grilled chicken brushed with warm garlic butter.\n\n5. Yogurt Marinated Chicken: Yogurt-based marinades help create especially tender juicy texture.',
    tipsTitle: 'Grilling Tips',
    tipsList: [
      'Preheat the grill before adding chicken.',
      'Pat chicken dry before grilling for better browning.',
      'Avoid flipping chicken too frequently.',
      'Use a meat thermometer for accuracy.',
      'Allow grilled chicken to rest before slicing.',
      'Brush sauces near the end to prevent burning.',
    ],

  },
  {
    image: blog_card11,
    heroImage: blog_hero11,
    tag: 'TIPS',
    category: 'TIPS',
    title: 'Bringing the Joy of Cooking to Your Everyday Kitchen',
    author: 'Olivia Thompson',
    time: '6 months ago',
    comments: 4,
    readTime: '7 Min',
    slug: 'bringing-joy-everyday-cooking',
    excerpt:'Cooking becomes more enjoyable when everyday meals feel creative, relaxed, personal, and rewarding instead of stressful.',
    intro:'Cooking at home is often viewed as another daily responsibility, but it can also become a creative and deeply satisfying part of everyday life. Small changes in routine, mindset, and kitchen organization can transform cooking from a stressful obligation into an enjoyable experience filled with comfort and creativity. Whether experimenting with new recipes, sharing meals with loved ones, or simply preparing favorite comfort foods, cooking creates opportunities for expression, relaxation, and connection that extend beyond the food itself.',
    sectionOneTitle: 'Create a Kitchen Environment You Enjoy',
    sectionOneBody:'A welcoming kitchen atmosphere can dramatically improve the cooking experience. Good lighting, organized ingredients, clean surfaces, and enjoyable music help make cooking feel calmer and less rushed. Keeping frequently used tools accessible also reduces frustration and improves workflow during meal preparation. Small details such as fresh herbs, candles, or neatly arranged ingredients can make even simple cooking routines feel more intentional and enjoyable.',
    sectionTwoTitle: 'Focus on Progress Instead of Perfection',
    sectionTwoBody:'Many people lose confidence in cooking because they expect every meal to look or taste perfect immediately. Enjoyment grows when cooking becomes a process of experimentation rather than pressure. Mistakes often teach valuable lessons about seasoning, timing, texture, and flavor combinations. Trying new recipes gradually, improving familiar dishes, and celebrating small successes builds confidence naturally over time while keeping cooking exciting and rewarding.',
    sectionThreeTitle: 'Ways to Make Everyday Cooking More Enjoyable',
    sectionThreeBody:'1. Try one new recipe each week.\n\n2. Cook meals inspired by favorite restaurants or travel experiences.\n\n3. Use fresh herbs and seasonal ingredients for brighter flavor.\n\n4. Invite family or friends to cook together occasionally.\n\n5. Create themed dinner nights to make meals feel more special.\n\n6. Keep reliable comfort-food recipes available for busy days.',
    tipsTitle: 'Everyday Cooking Tips',
    tipsList: [
      'Keep your kitchen organized and clutter-free.',
      'Plan simple meals ahead of busy weekdays.',
      'Use quality ingredients whenever possible.',
      'Experiment gradually with new flavors and techniques.',
      'Allow yourself flexibility instead of perfection.',
      'Treat cooking as creative personal time.',
    ],

    conclusion:
      'Cooking becomes far more rewarding when approached with curiosity, flexibility, and enjoyment rather than pressure. Simple routines, creative exploration, and comfortable kitchen habits can transform everyday meals into meaningful experiences that nourish both body and mindset.',

    galleryImages: [],
  },
  {
    image: blog_card12,
    heroImage: blog_hero12,
    tag: 'SPOTLIGHTS',
    category: 'SPOTLIGHTS',
    title: 'Behind the Scenes: How Chefs Collaborate for Perfection',
    author: 'Olivia Thompson',
    time: '6 months ago',
    comments: 4,
    readTime: '8 Min',
    slug: 'how-chefs-collaborate-for-perfection',
    excerpt:'Professional kitchens rely on teamwork, timing, communication, and precision to create consistently exceptional dining experiences.',
    intro:'Behind every beautifully plated restaurant meal is a highly coordinated team working together under intense pressure and strict timing. Professional kitchens function through collaboration, communication, preparation, and trust between chefs responsible for different sections and responsibilities. While diners often focus on the final dish, the process behind the scenes involves constant coordination to ensure consistency, speed, and quality throughout service. Understanding how chefs collaborate reveals the discipline and teamwork required to maintain excellence in modern kitchens.',
    sectionOneTitle: 'Kitchen Roles Work Together Constantly',
    sectionOneBody:'Professional kitchens are divided into stations where chefs specialize in different responsibilities such as grilling, sauces, pastries, preparation, or plating. These sections must work together seamlessly during service because every dish depends on timing and coordination between stations. Clear communication helps chefs stay synchronized while ensuring orders are completed accurately and efficiently. Even small delays in one section can affect the entire kitchen flow, which is why teamwork and organization are essential throughout every shift.',
    sectionTwoTitle: 'Preparation Creates Consistency',
    sectionTwoBody:'Much of a chef’s work happens long before customers arrive. Ingredients are prepped carefully, sauces are reduced, vegetables are portioned, proteins are marinated, and stations are organized before service begins. This preparation process, known as mise en place, allows kitchens to operate smoothly during busy hours. Proper preparation reduces stress, improves speed, and helps maintain consistent quality across every plate served throughout the evening.',
    sectionThreeTitle: 'Communication Keeps Service Running Smoothly',
    sectionThreeBody:'Strong communication is one of the most valuable skills inside professional kitchens. Chefs constantly update each other about cooking times, completed dishes, ingredient shortages, and incoming orders while managing high-pressure environments. Respectful teamwork allows kitchens to stay organized even during demanding service periods. Collaboration also encourages creativity because chefs often exchange ideas, techniques, and feedback that improve recipes and presentation over time.',
    tipsTitle: 'Professional Kitchen Insights',
    tipsList: [
      'Preparation is just as important as cooking itself.',
      'Clear communication prevents service delays.',
      'Teamwork matters more than individual speed.',
      'Organization improves consistency and efficiency.',
      'Professional kitchens rely heavily on timing.',
      'Respect and discipline help maintain smooth workflow.',
    ],

  },
];

const Blog = () => {
  return (
    <>
      <div className="page-header-sec">
        <Pageheader pageheader={drinksProps} />
      </div>
      <div className="blog-container">
        {blogData.length ? (
          blogData.map((blog, index) => (
            <BlogCard
              key={`${blog.title}-${index}`}
              blog={{
                ...blog,
                link: `/blog/${blog.slug}`,
                authorLink: `/blog/${blog.slug}`,
                tagLink: `/blog/${blog.slug}`,
              }}
            />
          ))
        ) : (
          <p>No blog posts available yet.</p>
        )}
      </div>
      <div className="tags-sec">
        <PopularTags
          tags={tagData}
          tags2={tagData2}
          heading="Explore Popular Tags"
          subheading="From quick meals to healthy dishes, our popular tags make it easy to explore delicious options with one click."
        />
      </div>
    </>
  );
};

export default Blog;
