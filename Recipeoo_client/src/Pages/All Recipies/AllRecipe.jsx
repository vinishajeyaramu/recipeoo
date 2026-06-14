import React, { useState, useEffect ,useRef} from 'react';
import './AllRecipes.css'
import RecipeCard from '../../Resuable Components/Recipercards/Recipecards'
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import { useSearchParams } from 'react-router-dom';
import recipe0 from '../../Assets/Images/garlic mushroom.jpg'
import dir10 from '../../Assets/Images/dir1-0.jpeg'
import dir20 from '../../Assets/Images/dir2-0.jpeg'
import dir30 from '../../Assets/Images/dir3-0.jpeg'  
import dir40  from '../../Assets/Images/dir4-0.jpeg'
import recipe1 from '../../Assets/Images/zesty lemon quinoa.jpg'
import dir11 from '../../Assets/Images/dir1-1.jpeg'
import dir21 from '../../Assets/Images/dir2-1.jpeg'
import dir31 from '../../Assets/Images/dir3-1.jpeg'  
import dir41  from '../../Assets/Images/dir4-1.jpeg'
import recipe2 from '../../Assets/Images/recipe-4-630x785.jpg'
import dir12 from '../../Assets/Images/dir1-2.jpeg'
import dir22 from '../../Assets/Images/dir2-2.jpeg'
import dir32 from '../../Assets/Images/dir3-2.jpeg'  
import dir42  from '../../Assets/Images/dir4-2.jpeg'
import recipe3 from '../../Assets/Images/recipe-5-630x785.jpg'
import dir13 from '../../Assets/Images/dir1-3.jpeg'
import dir23 from '../../Assets/Images/dir2-3.jpeg'
import dir33 from '../../Assets/Images/dir3-3.jpeg'  
import dir43  from '../../Assets/Images/dir4-3.png'
import recipe4 from '../../Assets/Images/recipe-6-630x785.jpg'
import dir14 from '../../Assets/Images/dir1-4.jpeg'
import dir24 from '../../Assets/Images/dir2-4.jpeg'
import dir34 from '../../Assets/Images/dir3-4.jpeg'  
import dir44  from '../../Assets/Images/dir4-4.jpeg'
import recipe5 from '../../Assets/Images/recipe-7-630x785.jpg'
import dir15 from '../../Assets/Images/dir1-5.jpeg'
import dir25 from '../../Assets/Images/dir2-5.jpeg'
import dir35 from '../../Assets/Images/dir3-5.jpeg'  
import dir45  from '../../Assets/Images/dir4-5.jpeg'
import recipe6 from '../../Assets/Images/recipe-30-630x785.jpg'
import dir16 from '../../Assets/Images/dir1-6.jpeg'
import dir26 from '../../Assets/Images/dir2-6.jpeg'
import dir36 from '../../Assets/Images/dir3-6.jpeg'  
import dir46  from '../../Assets/Images/dir4-6.jpeg'
import recipe7 from '../../Assets/Images/recipe-9-630x785.jpg'
import dir17 from '../../Assets/Images/dir1-7.jpeg'
import dir27 from '../../Assets/Images/dir2-7.jpeg'
import dir37 from '../../Assets/Images/dir3-7.jpeg'  
import dir47  from '../../Assets/Images/dir4-7.jpg'
import recipe8 from '../../Assets/Images/recipe-35-630x785.jpg'
import dir18 from '../../Assets/Images/dir1-8.jpeg'
import dir28 from '../../Assets/Images/dir2-8.jpeg'
import dir38 from '../../Assets/Images/dir3-8.jpeg'  
import dir48  from '../../Assets/Images/dir4-8.jpeg'
import recipe9 from '../../Assets/Images/recipe-34-630x785.jpg'
import dir19 from '../../Assets/Images/dir1-9.jpeg'
import dir29 from '../../Assets/Images/dir2-9.jpeg'
import dir39 from '../../Assets/Images/dir3-9.jpeg'  
import dir49  from '../../Assets/Images/dir4-9.jpeg'
import recipe10 from '../../Assets/Images/recipe-33-630x785.jpg'
import dir110 from '../../Assets/Images/dir1-10.jpeg'
import dir210 from '../../Assets/Images/dir2-10.jpeg'
import dir310 from '../../Assets/Images/dir3-10.jpeg'  
import dir410  from '../../Assets/Images/dir4-10.jpeg'
import recipe11 from '../../Assets/Images/recipe-32-630x785.jpg'
import dir111 from '../../Assets/Images/dir1-11.jpeg'
import dir211 from '../../Assets/Images/dir2-11.jpeg'
import dir311 from '../../Assets/Images/dir3-11.jpg'  
import dir411  from '../../Assets/Images/dir4-11.jpeg'
import recipe12 from '../../Assets/Images/recipe-29-630x785.jpg'
import dir112 from '../../Assets/Images/dir1-12.png'
import dir212 from '../../Assets/Images/dir2-12.png'
import dir312 from '../../Assets/Images/dir3-12.jpeg'  
import dir412  from '../../Assets/Images/dir4-12.png'
import recipe13 from '../../Assets/Images/recipe-28-630x785.jpg'
import dir113 from '../../Assets/Images/dir1-13.jpeg'
import dir213 from '../../Assets/Images/dir2-13.jpeg'
import dir313 from '../../Assets/Images/dir3-13.jpg'  
import dir413  from '../../Assets/Images/dir4-13.jpeg'
import recipe14 from '../../Assets/Images/recipe-27-630x785.jpg'
import dir114 from '../../Assets/Images/dir1-14.jpeg'
import dir214 from '../../Assets/Images/dir2-14.jpeg'
import dir314 from '../../Assets/Images/dir3-14.jpeg'  
import dir414  from '../../Assets/Images/dir4-14.jpeg'
import recipe15 from '../../Assets/Images/recipe-26-630x785.jpg'
import dir115 from '../../Assets/Images/dir1-15.jpeg'
import dir215 from '../../Assets/Images/dir2-15.jpeg'
import dir315 from '../../Assets/Images/dir3-15.jpeg'  
import dir415  from '../../Assets/Images/dir4-15.jpeg'
import recipe16 from '../../Assets/Images/recipe-25-630x785.jpg'
import dir116 from '../../Assets/Images/dir1-16.jpeg'
import dir216 from '../../Assets/Images/dir2-16.jpeg'
import dir316 from '../../Assets/Images/dir3-16.jpeg'  
import dir416  from '../../Assets/Images/dir4-16.jpeg'
import recipe17 from '../../Assets/Images/recipe-24-630x785.jpg'
import dir117 from '../../Assets/Images/dir1-17.jpeg'
import dir217 from '../../Assets/Images/dir2-17.jpeg'
import dir317 from '../../Assets/Images/dir3-17.jpeg'  
import dir417  from '../../Assets/Images/dir4-17.jpeg'
import recipe18 from '../../Assets/Images/recipe-23-630x785.jpg'
import dir118 from '../../Assets/Images/dir1-18.jpeg'
import dir218 from '../../Assets/Images/dir2-18.jpeg'
import dir318 from '../../Assets/Images/dir3-18.jpeg'  
import dir418  from '../../Assets/Images/dir4-18.jpeg'
import recipe19 from '../../Assets/Images/recipe-10-630x785.jpg'
import dir119 from '../../Assets/Images/dir1-19.jpeg'
import dir219 from '../../Assets/Images/dir2-19.jpeg'
import dir319 from '../../Assets/Images/dir3-19.jpeg'  
import dir419  from '../../Assets/Images/dir4-19.jpeg'
import recipe20 from '../../Assets/Images/recipe-12-630x785.jpg'
import dir120 from '../../Assets/Images/dir1-20.jpg'
import dir220 from '../../Assets/Images/dir2-20.jpeg'
import dir320 from '../../Assets/Images/dir3-20.jpeg'  
import dir420  from '../../Assets/Images/dir4-20.jpeg'
import recipe21 from '../../Assets/Images/recipe-13-630x785.jpg'
import dir121 from '../../Assets/Images/dir1-21.jpg'
import dir221 from '../../Assets/Images/dir2-21.png'
import dir321 from '../../Assets/Images/dir3-21.jpeg'  
import dir421  from '../../Assets/Images/dir4-21.jpeg'
import recipe22 from '../../Assets/Images/recipe-1-630x785.jpg'
import dir122 from '../../Assets/Images/dir1-22.jpeg'
import dir222 from '../../Assets/Images/dir2-22.jpeg'
import dir322 from '../../Assets/Images/dir3-22.jpeg'  
import dir422  from '../../Assets/Images/dir4-22.jpeg'
import recipe23 from '../../Assets/Images/recipe-14-630x785.jpg'
import dir123 from '../../Assets/Images/dir1-23.jpeg'
import dir223 from '../../Assets/Images/dir2-23.jpeg'
import dir323 from '../../Assets/Images/dir3-23.jpeg'  
import dir423  from '../../Assets/Images/dir4-23.jpeg'
import recipe24 from '../../Assets/Images/recipe-15-630x785.jpg'
import dir124 from '../../Assets/Images/dir1-24.jpeg'
import dir224 from '../../Assets/Images/dir2-24.jpeg'
import dir324 from '../../Assets/Images/dir3-24.jpeg'  
import dir424  from '../../Assets/Images/dir4-24.jpeg'
import recipe25 from '../../Assets/Images/recipe-16-630x785.jpg'
import dir125 from '../../Assets/Images/dir1-25.jpeg'
import dir225 from '../../Assets/Images/dir2-25.jpeg'
import dir325 from '../../Assets/Images/dir3-25.jpeg'  
import dir425  from '../../Assets/Images/dir4-25.jpeg'
import recipe26 from '../../Assets/Images/recipe-17-630x785.jpg'
import dir126 from '../../Assets/Images/dir1-26.jpeg'
import dir226 from '../../Assets/Images/dir2-26.jpeg'
import dir326 from '../../Assets/Images/dir3-26.jpeg'  
import dir426  from '../../Assets/Images/dir4-26.jpeg'
import recipe27 from '../../Assets/Images/recipe-18-630x785.jpg'
import dir127 from '../../Assets/Images/dir1-27.jpeg'
import dir227 from '../../Assets/Images/dir2-27.jpeg'
import dir327 from '../../Assets/Images/dir3-27.jpeg'  
import dir427  from '../../Assets/Images/dir4-27.jpeg'
import recipe28 from '../../Assets/Images/recipe-19-630x785.jpg'
import dir128 from '../../Assets/Images/dir1-28.jpeg'
import dir228 from '../../Assets/Images/dir2-28.jpeg'
import dir328 from '../../Assets/Images/dir3-28.jpeg'  
import dir428  from '../../Assets/Images/dir4-28.jpeg'
import recipe29 from '../../Assets/Images/recipe-20-630x785.jpg'
import dir129 from '../../Assets/Images/dir1-29.jpg'
import dir229 from '../../Assets/Images/dir2-29.jpg'
import dir329 from '../../Assets/Images/dir3-29.jpeg'  
import dir429  from '../../Assets/Images/dir4-29.jpeg'
import recipe30 from '../../Assets/Images/recipe-21-630x785.jpg'
import dir130 from '../../Assets/Images/dir1-30.jpeg'
import dir230 from '../../Assets/Images/dir2-30.jpeg'
import dir330 from '../../Assets/Images/dir3-30.jpg'  
import dir430  from '../../Assets/Images/dir4-30.jpeg'
import recipe31 from '../../Assets/Images/recipe-11-630x785.jpg'
import dir131 from '../../Assets/Images/dir1-31.jpg'
import dir231 from '../../Assets/Images/dir2-31.jpeg'
import dir331 from '../../Assets/Images/dir3-31.jpg'  
import dir431  from '../../Assets/Images/dir4-31.jpeg'
import recipe32 from '../../Assets/Images/recipe-22-630x785.jpg'
import dir132 from '../../Assets/Images/dir1-32.jpeg'
import dir232 from '../../Assets/Images/dir2-32.jpeg'
import dir332 from '../../Assets/Images/dir3-32.jpeg'  
import dir432  from '../../Assets/Images/dir4-32.jpeg'
import recipe33 from '../../Assets/Images/recipe-36-630x785.jpg'
import dir133 from '../../Assets/Images/dir1-33.jpeg'
import dir233 from '../../Assets/Images/dir2-33.jpeg'
import dir333 from '../../Assets/Images/dir3-33.jpeg'  
import dir433  from '../../Assets/Images/dir4-33.jpg'
import recipe34 from '../../Assets/Images/recipe-50-630x785.jpg'
import dir134 from '../../Assets/Images/dir1-34.jpeg'
import dir234 from '../../Assets/Images/dir2-34.jpeg'
import dir334 from '../../Assets/Images/dir3-34.jpeg'  
import dir434  from '../../Assets/Images/dir4-34.jpeg'
import recipe35 from '../../Assets/Images/recipe-49-630x785.jpg'
import dir135 from '../../Assets/Images/dir1-35.jpeg'
import dir235 from '../../Assets/Images/dir2-36.jpeg'
import dir335 from '../../Assets/Images/dir3-36.jpeg'
import dir435  from '../../Assets/Images/dir4-36.png'
import recipe36 from '../../Assets/Images/recipe-48-630x785.jpg'
import dir136 from '../../Assets/Images/dir1-36.jpeg'
import dir236 from '../../Assets/Images/dir2-36.jpeg'
import dir336 from '../../Assets/Images/dir3-36.jpeg'
import dir436  from '../../Assets/Images/dir4-36.png'
import recipe37 from '../../Assets/Images/recipe-47-630x785.jpg'
import dir137 from '../../Assets/Images/dir1-37.jpeg'
import dir237 from '../../Assets/Images/dir2-37.jpeg'
import dir337 from '../../Assets/Images/dir3-37.jpeg'
import dir437  from '../../Assets/Images/dir4-37.jpg'
import recipe38 from '../../Assets/Images/recipe-46-630x785.jpg'
import dir138 from '../../Assets/Images/dir1-38.jpeg'
import dir238 from '../../Assets/Images/dir2-38.jpeg'
import dir338 from '../../Assets/Images/dir3-38.jpeg'
import dir438  from '../../Assets/Images/dir4-38.jpeg'
import recipe39 from '../../Assets/Images/recipe-45-630x785.jpg'
import dir139 from '../../Assets/Images/dir1-39.jpeg'
import dir239 from '../../Assets/Images/dir2-39.jpeg'
import dir339 from '../../Assets/Images/dir3-39.jpeg'
import dir439  from '../../Assets/Images/dir4-39.jpeg'
import recipe40 from '../../Assets/Images/recipe-51-630x785.jpg'
import dir140 from '../../Assets/Images/dir1-40.jpg'
import dir240 from '../../Assets/Images/dir2-40.jpg'
import dir340 from '../../Assets/Images/dir3-40.jpeg'
import dir440  from '../../Assets/Images/dir4-40.jpeg'
import recipe41 from '../../Assets/Images/recipe-44-630x785.jpg'
import dir141 from '../../Assets/Images/dir1-41.jpeg'
import dir241 from '../../Assets/Images/dir2-41.jpeg'
import dir341 from '../../Assets/Images/dir3-41.jpg'
import dir441  from '../../Assets/Images/dir4-41.jpg'
import recipe42 from '../../Assets/Images/recipe-43-630x785.jpg'
import dir142 from '../../Assets/Images/dir2-53.jpeg'
import dir242 from '../../Assets/Images/dir2-42.jpeg'
import dir342 from '../../Assets/Images/dir3-42.jpg'
import dir442  from '../../Assets/Images/dir4-42.jpeg'
import recipe43 from '../../Assets/Images/recipe-42-630x785 (1).jpg'
import dir143 from '../../Assets/Images/dir1-43.jpeg'
import dir243 from '../../Assets/Images/dir2-43.jpeg'
import dir343 from '../../Assets/Images/dir3-43.jpeg'
import dir443  from '../../Assets/Images/dir4-43.jpeg'
import recipe44 from '../../Assets/Images/rsz_how-to-cook-steamed-lobster-tails-recipe-10-scaled.jpg'
import dir144 from '../../Assets/Images/dir1-44.jpeg'
import dir244 from '../../Assets/Images/dir2-44.jpeg'
import dir344 from '../../Assets/Images/dir3-44.jpeg'
import dir444  from '../../Assets/Images/dir4-44.jpeg'
import recipe45 from '../../Assets/Images/rsz_spinach-and-feta-stuffed-chicken-breast-10.jpg'
import dir145 from '../../Assets/Images/dir1-45.jpeg'
import dir245 from '../../Assets/Images/dir2-45.jpeg'
import dir345 from '../../Assets/Images/dir3-45.jpeg'
import dir445  from '../../Assets/Images/dir4-45.jpg'
import recipe46 from '../../Assets/Images/recipe-39-630x785.jpg'
import dir146 from '../../Assets/Images/dir1-46.jpeg'
import dir246 from '../../Assets/Images/dir2-46.jpg'
import dir346 from '../../Assets/Images/dir3-46.jpeg'
import dir446  from '../../Assets/Images/dir4-46.jpg'
import recipe47 from '../../Assets/Images/recipe-38-630x785.jpg'
import dir147 from '../../Assets/Images/dir1-47.jpeg'
import dir247 from '../../Assets/Images/dir2-47.jpeg'
import dir347 from '../../Assets/Images/dir3-47.jpg'
import dir447  from '../../Assets/Images/dir4-47.jpg'
import recipe48 from '../../Assets/Images/recipe-37-630x785.jpg'
import dir148 from '../../Assets/Images/dir1-48.jpeg'
import dir248 from '../../Assets/Images/dir2-48.jpeg'
import dir348 from '../../Assets/Images/dir3-48.jpeg'
import dir448  from '../../Assets/Images/dir4-48.jpg'
import recipe49 from '../../Assets/Images/recipe-59-630x785.jpg'
import dir149 from '../../Assets/Images/dir1-49.jpeg'
import dir249 from '../../Assets/Images/dir2-49.jpeg'
import dir349 from '../../Assets/Images/dir3-49.jpeg'
import dir449 from '../../Assets/Images/dir4-49.jpeg'
import recipe50 from '../../Assets/Images/recipe-58-630x785.jpg'
import dir150 from '../../Assets/Images/dir1-50.jpg'
import dir250 from '../../Assets/Images/dir2-50.jpeg'
import dir350 from '../../Assets/Images/dir3-50.jpeg'
import dir450 from '../../Assets/Images/dir4-50.jpg'
import recipe51 from '../../Assets/Images/recipe-57-630x785.jpg'
import dir151 from '../../Assets/Images/dir1-51.jpeg'
import dir251 from '../../Assets/Images/dir2-51.jpeg'
import dir351 from '../../Assets/Images/dir3-51.jpg'
import dir451 from '../../Assets/Images/dir4-51.jpg'
import recipe52 from '../../Assets/Images/recipe-52-630x785.jpg'
import dir152 from '../../Assets/Images/dir1-52.jpeg'
import dir252 from '../../Assets/Images/dir2-52.jpeg'
import dir352 from '../../Assets/Images/dir3-52.jpeg'
import dir452 from '../../Assets/Images/dir4-52.jpeg'
import recipe53 from '../../Assets/Images/recipe-56-630x785.jpg'
import dir153 from '../../Assets/Images/dir1-53.jpeg'
import dir253 from '../../Assets/Images/dir2-53.jpeg'
import dir353 from '../../Assets/Images/dir3-53.jpg'
import dir453 from '../../Assets/Images/dir4-53.jpeg'
import recipe54 from '../../Assets/Images/recipe-55-630x785.jpg'
import dir154 from '../../Assets/Images/dir1-54.jpeg'
import dir254 from '../../Assets/Images/dir2-54.jpg'
import dir354 from '../../Assets/Images/dir3-54.jpg'
import dir454 from '../../Assets/Images/dir4-54.jpeg'
import recipe55 from '../../Assets/Images/rsz_1garlic-butter-baked-tilapia-3.jpg'
import dir155 from '../../Assets/Images/dir1-55.jpeg'
import dir255 from '../../Assets/Images/dir2-55.jpg'
import dir355 from '../../Assets/Images/dir3-55.jpeg'
import dir455 from '../../Assets/Images/dir4-55.jpeg'
import recipe56 from '../../Assets/Images/recipe-53-630x785.jpg'
import dir156 from '../../Assets/Images/dir1-56.jpeg'
import dir256 from '../../Assets/Images/dir2-56.png'
import dir356 from '../../Assets/Images/dir3-56.webp'
import dir456 from '../../Assets/Images/dir4-56.jpeg'
import recipe57 from '../../Assets/Images/recipe-60-630x785.jpg'
import dir157 from '../../Assets/Images/dir1-57.jpeg'
import dir257 from '../../Assets/Images/dir2-57.jpeg'
import dir357 from '../../Assets/Images/dir3-57.jpeg'
import dir457 from '../../Assets/Images/dir4-57.jpeg'
import recipe58 from '../../Assets/Images/recipe-61-630x785.jpg'
import dir158 from '../../Assets/Images/dir1-58.jpeg'
import dir258 from '../../Assets/Images/dir2-58.jpeg'
import dir358 from '../../Assets/Images/dir3-58.jpeg'
import dir458 from '../../Assets/Images/dir4-77.webp'
import recipe59 from '../../Assets/Images/recipe-62-630x785.jpg'
import dir159 from '../../Assets/Images/dir1-59.jpg'
import dir259 from '../../Assets/Images/dir2-59.jpg'
import dir359 from '../../Assets/Images/dir3-59.jpg'
import dir459 from '../../Assets/Images/dir4-59.jpeg'
import recipe60 from '../../Assets/Images/recipe-31-630x785.jpg'
import dir160 from '../../Assets/Images/dir1-60.jpg'
import dir260 from '../../Assets/Images/dir2-60.jpeg'
import dir360 from '../../Assets/Images/dir3-60.jpg'
import dir460 from '../../Assets/Images/dir4-60.jpeg'
import recipe61 from '../../Assets/Images/recipe-63-630x785.jpg'
import dir161 from '../../Assets/Images/dir1-61.jpeg'
import dir261 from '../../Assets/Images/dir2-61.jpeg'
import dir361 from '../../Assets/Images/dir3-61.jpg'
import dir461 from '../../Assets/Images/dir4-61.jpeg'
import recipe62 from '../../Assets/Images/recipe-64-630x785.jpg'
import dir162 from '../../Assets/Images/dir1-62.webp'
import dir262 from '../../Assets/Images/dir2-62.jpeg'
import dir362 from '../../Assets/Images/dir3-62.jpeg'
import dir462 from '../../Assets/Images/dir4-62.jpeg'
import recipe63 from '../../Assets/Images/recipe-65-630x785.jpg'
import dir163 from '../../Assets/Images/dir1-63.jpeg'
import dir263 from '../../Assets/Images/dir2-63.jpeg'
import dir363 from '../../Assets/Images/dir3-63.jpeg'
import dir463 from '../../Assets/Images/dir4-63.jpg'
import recipe64 from '../../Assets/Images/recipe-64.jpeg'
import dir164 from '../../Assets/Images/dir1-64.jpeg'
import dir264 from '../../Assets/Images/dir2-64.jpeg'
import dir364 from '../../Assets/Images/dir3-64.jpeg'
import dir464 from '../../Assets/Images/dir4-64.jpeg'
import dir564 from '../../Assets/Images/dir5-64.jpeg'
import recipe65 from '../../Assets/Images/recipe-65.jpeg'
import dir165 from '../../Assets/Images/dir1-65.jpg'
import dir265 from '../../Assets/Images/dir2-65.jpeg'
import dir365 from '../../Assets/Images/dir3-65.jpeg'
import dir465 from '../../Assets/Images/dir4-65.webp'
import recipe66 from '../../Assets/Images/recipe-66.jpeg'
import dir166 from '../../Assets/Images/dir1-66.webp'
import dir266 from '../../Assets/Images/dir2-66.webp'
import dir366 from '../../Assets/Images/dir3-66.jpg'
import dir466 from '../../Assets/Images/dir2-82.png'
import recipe67 from '../../Assets/Images/recipe-67.jpeg'
import dir167 from '../../Assets/Images/dir1-67.jpeg'
import dir267 from '../../Assets/Images/dir2-67.jpeg'
import dir367 from '../../Assets/Images/dir3-67.jpeg'
import dir467 from '../../Assets/Images/dir4-67.jpg'
import recipe68 from '../../Assets/Images/recipe-68.jpg'
import dir168 from '../../Assets/Images/dir1-68.jpeg'
import dir268 from '../../Assets/Images/dir2-68.jpeg'
import dir368 from '../../Assets/Images/dir3-68.jpeg'
import dir468 from '../../Assets/Images/dir4-68.jpg'
import recipe69 from '../../Assets/Images/recipe-69.jpg'
import dir169 from '../../Assets/Images/dir1-69.jpeg'
import dir269 from '../../Assets/Images/dir2-69.webp'
import dir369 from '../../Assets/Images/dir3-69.jpeg'
import dir469 from '../../Assets/Images/dir4-69.jpeg'
import recipe70 from '../../Assets/Images/recipe-70.jpeg'
import dir170 from '../../Assets/Images/dir1-70.jpeg'
import dir270 from '../../Assets/Images/dir2-70.jpeg'
import dir370 from '../../Assets/Images/dir3-70.jpeg'
import dir470 from '../../Assets/Images/dir4-70.jpeg'
import recipe71 from '../../Assets/Images/recipe-71.jpg'
import dir171 from '../../Assets/Images/dir1-71.jpg'
import dir271 from '../../Assets/Images/dir2-71.webp' 
import dir371 from '../../Assets/Images/dir3-71.jpeg'
import dir471 from '../../Assets/Images/dir4-71.jpeg'
import recipe72 from '../../Assets/Images/recipe-72.jpeg'
import dir172 from '../../Assets/Images/dir1-72.jpeg'
import dir272 from '../../Assets/Images/dir2-72.jpeg'
import dir372 from '../../Assets/Images/dir3-72.jpeg'
import dir472 from '../../Assets/Images/dir4-72.jpeg'
import recipe73 from '../../Assets/Images/recipe-73.jpeg'
import dir173 from '../../Assets/Images/dir1-73.jpeg'
import dir273 from '../../Assets/Images/dir2-73.jpg'
import dir373 from '../../Assets/Images/dir3-73.jpeg'
import dir473 from '../../Assets/Images/dir4-73.jpg'
import recipe74 from '../../Assets/Images/recipe-74.jpeg'
import dir174 from '../../Assets/Images/dir1-74.jpeg'
import dir274 from '../../Assets/Images/dir2-74.jpeg'
import dir374 from '../../Assets/Images/dir3-74.jpeg'
import dir474 from '../../Assets/Images/dir4-74.jpg'
import recipe75 from '../../Assets/Images/recipe-75.jpeg'
import dir175 from '../../Assets/Images/dir1-75.jpeg'
import dir275 from '../../Assets/Images/dir2-75.jpeg'
import dir375 from '../../Assets/Images/dir3-75.jpeg'
import dir475 from '../../Assets/Images/dir4-75.webp'
import recipe76 from '../../Assets/Images/recipe-76.jpeg'
import dir176 from '../../Assets/Images/dir1-76.jpeg'
import dir276 from '../../Assets/Images/dir2-76.jpeg'
import dir376 from '../../Assets/Images/dir3-76.jpeg'
import dir476 from '../../Assets/Images/dir4-76.jpeg'
import recipe77 from '../../Assets/Images/recipe-77.jpeg'
import dir177 from '../../Assets/Images/dir1-77.jpeg'
import dir277 from '../../Assets/Images/dir2-77.jpeg'
import dir377 from '../../Assets/Images/dir3-77.jpg'
import dir477 from '../../Assets/Images/dir4-77.webp'
import recipe78 from '../../Assets/Images/recipe-78.jpeg'
import dir178 from '../../Assets/Images/dir1-78.jpeg'
import dir278 from '../../Assets/Images/dir2-78.jpeg'
import dir378 from '../../Assets/Images/dir3-78.jpeg'
import dir478 from '../../Assets/Images/dir4-78.jpg'
import dir578 from '../../Assets/Images/dir5-78.jpeg'
import recipe79 from '../../Assets/Images/recipe-79.jpg'
import dir179 from '../../Assets/Images/dir1-79.jpeg'
import dir279 from '../../Assets/Images/dir2-79.jpeg'
import dir379 from '../../Assets/Images/dir3-79.jpeg'
import dir479 from '../../Assets/Images/dir4-79.jpg'
import dir579 from '../../Assets/Images/dir5-79.png'
import dir679 from '../../Assets/Images/dir6-79.jpeg'
import dir779 from '../../Assets/Images/dir7-79.jpg'
import dir879 from '../../Assets/Images/dir8-79.jpeg'
import recipe80 from '../../Assets/Images/recipe-80.jpg'
import dir180 from '../../Assets/Images/dir1-80.jpeg'
import dir280 from '../../Assets/Images/dir2-80.jpeg'
import dir380 from '../../Assets/Images/dir3-80.jpeg'
import dir480 from '../../Assets/Images/dir4-80.png'
import dir580 from '../../Assets/Images/dir5-80.jpeg'
import dir680 from '../../Assets/Images/dir6-80.jpeg'
import dir780 from '../../Assets/Images/dir7-80.jpeg' 
import recipe81 from '../../Assets/Images/recipe-81.jpg'
import dir181 from '../../Assets/Images/dir1-81.webp'
import dir281 from '../../Assets/Images/dir2-81.png'
import dir381 from '../../Assets/Images/dir3-81.png'
import dir481 from '../../Assets/Images/dir4-81.jpeg'
import dir581 from '../../Assets/Images/dir5-81.jpg'
import dir681 from '../../Assets/Images/dir6-81.jpeg'
import dir781 from '../../Assets/Images/dir7-81.jpg'
import dir881 from '../../Assets/Images/dir8-81.jpeg'
import recipe82 from '../../Assets/Images/recipe-82.jpg'
import dir182 from '../../Assets/Images/dir1-82.png'
import dir282 from '../../Assets/Images/dir2-82.png'
import dir382 from '../../Assets/Images/dir3-82.png'
import dir482 from '../../Assets/Images/dir4-82.png'
import dir582 from '../../Assets/Images/dir5-82.png'
import dir682 from '../../Assets/Images/dir6-82.png'
import dir782 from '../../Assets/Images/recipe-82.jpg'
import recipe83 from '../../Assets/Images/recipe-83.jpg'
import dir183 from '../../Assets/Images/dir183.jpg'
import dir283 from '../../Assets/Images/dir2-83.png'
import dir383 from '../../Assets/Images/dir3-83.png'
import dir483 from '../../Assets/Images/dir4-83.png'
import dir583 from '../../Assets/Images/dir5-83.png'
import dir683 from '../../Assets/Images/dir6-83.png'
import author_img from '../../Assets/Images/author.jpeg'
import flag1 from '../../Assets/Images/lb.png'
import flag2 from '../../Assets/Images/ma.png'
import flag3 from '../../Assets/Images/fr.png'
import flag4 from '../../Assets/Images/th.png'
import flag5 from '../../Assets/Images/et.png'
import flag6 from '../../Assets/Images/kr.png'
import flag7 from '../../Assets/Images/tr.png'
import flag8 from '../../Assets/Images/mx.png'
import flag9 from '../../Assets/Images/us.png'
import flag10 from '../../Assets/Images/de.png'
import flag11 from '../../Assets/Images/gr.png'
import flag12 from '../../Assets/Images/in.png'
import flag13 from '../../Assets/Images/ir.png'
import flag14 from '../../Assets/Images/it.png'
import flag15 from '../../Assets/Images/vn.png'
import flag16 from '../../Assets/Images/br.png'
import flag17 from '../../Assets/Images/cn.png'
import flag18 from '../../Assets/Images/es.png'
import flag19 from '../../Assets/Images/jp.png'
import { LuPizza } from "react-icons/lu";
import { GiCakeSlice } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { LuWheat } from "react-icons/lu";
import { GiSteak } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { IoFishOutline } from "react-icons/io5";
import { TbSoupFilled } from "react-icons/tb";
import { LuVegan } from "react-icons/lu";
import { getApiUrl } from '../../config/api';
const pageProps = {
  title: "All Recipes",
  description:
    "Discover an array of delicious recipes for every occasion. From quick snacks to gourmet meals, explore endless inspiration, expert tips, and creative ideas for your kitchen adventures!",
  subtitle: "Delicious Recipes Await",
};
export const categories = [
  { title: "Appetizers", count: "2 recipes", icon: <LuPizza />, link: "/category/appetizers" },
  { title: "Desserts", count: "4 recipes", icon: <GiCakeSlice />, link: "/category/desserts" },
  { title: "Drinks", count:"3 recipes", icon: <BiSolidDrink />, link: "/category/drinks" },
  { title: "Healthy", count: "3 recipes", icon: <LuWheat />, link: "/category/healthy" },
  { title: "Meat", count: "5 recipes", icon: <GiSteak />, link: "/category/meat" },
  { title: "Salads", count: "3 recipes", icon: <GiFruitBowl />, link: "/category/salads" },
  { title: "Seafood", count: "4 recipes", icon: <IoFishOutline />, link: "/category/seafood" },
  { title: "Soups", count: "4 recipes", icon: <TbSoupFilled />, link: "/category/soups" },
  { title: "Vegan", count: "4 recipes", icon: <LuVegan />, link: "/category/vegan" },
];
const recipecards = [
    {
      id:0,
      image: recipe0,
      rating: 4.8,
      category: 'Pasta',
      title: 'Creamy Garlic Mushroom Penne Pasta',
      time: '50 min',
      cuisine: 'Lebanese',
      servings:"Serves 4",
      flag: flag1,
      difficulty: 'Beginner',
      tags:['COMFORT FOOD', 'VEGETARIAN', 'KID-FRIENDLY', 'DAIRY-FREE'],
      description: 'This creamy garlic mushroom penne pasta delivers comforting flavors while providing carbohydrates for sustained energy and mushrooms rich in antioxidants and essential minerals. The garlic supports immune health naturally, while parmesan cheese and cream contribute calcium and protein for a satisfying meal. Fresh parsley adds vitamins and freshness that balance the richness of the sauce. The combination of olive oil and butter creates a smooth texture while supplying healthy fats for better nutrient absorption. Tender penne pasta absorbs the creamy garlic sauce beautifully, creating a wholesome and filling dish perfect for cozy meals.',
      description2: 'This rich and creamy pasta combines hearty ingredients with balanced nutrition to create a comforting and flavorful dinner option. Mushrooms provide fiber and important nutrients that support overall wellness, while garlic adds aromatic depth with natural health benefits. Parmesan cheese enhances the dish with savory protein and calcium, making every bite creamy and satisfying. Olive oil contributes healthy fats that help create a silky sauce and improve flavor balance throughout the pasta. Finished with fresh parsley and cracked pepper, this dish offers warmth, nourishment, and restaurant-style comfort in every serving.',
      ingredients: [
        { quantity: '300 grams', name: 'Penne Pasta' },
        { quantity: '250 grams', name: 'Mushrooms' },
        { quantity: '4 cloves', name: 'Garlic' },
        { quantity: '200 ml', name: 'Heavy Cream' },
        { quantity: '2 tbsp', name: 'Butter' },
        { quantity: '2 tbsp', name: 'Olive Oil' },
        { quantity: '1 tsp', name: 'Salt' },
        { quantity: '1/2 tsp', name: 'Black Pepper' },
        { quantity: '2 tbsp', name: 'Fresh Parsley' },
        { quantity: '50 grams', name: 'Parmesan Cheese' },
      ],
      directions: [
        { title: 'The Pasta Blanching Foundation', image: dir10, instruction: 'Bring a large pot of heavily salted water to a rolling boil over high heat. Drop in the penne pasta and cook, stirring occasionally to prevent the tubes from sticking together, until it hits a perfect, firm al dente texture. The Pro Tip: Right before you tip the pasta into a colander, submerge a measuring cup into the pot to reserve exactly 1 cup of the starchy cooking water. This liquid is liquid gold; it contains loose starches shed by the boiling wheat that are absolutely essential for breaking down, thinning out, and binding your final cream sauce later.' },
        { title: 'The High-Heat Moisture Sauté', image: dir20, instruction: 'Melt the butter into the olive oil in a wide, heavy-bottomed skillet over medium-high heat. Once the butter is hot and foaming, drop your sliced mushrooms into the pan in an even layer. The Sensory Cue: Let the mushrooms sear completely undisturbed for the first 3 minutes without tossing them. They will initially sweat and release an abundance of moisture, making the pan look wet. Continue cooking for another 4 to 5 minutes until that liquid fully evaporates and the edges turn deeply caramelized, golden-brown, and slightly crisp.' },
        { title: 'The Heavy Cream Fusion', image: dir30, instruction: 'Turn the heat down to medium, toss your minced garlic cloves directly into the mushroom fat, and sauté for exactly 60 seconds. The Golden Rule: Watch the pan closely during this minute; you want to stir continuously to release the aromatic oils of the garlic without letting the small pieces turn dark brown or bitter. Pour in the heavy cream, scatter a pinch of salt and cracked black pepper, and bring the liquid to a gentle, steady simmer. Let it cook for 3 to 4 minutes until it reduces slightly into a velvety garlic cream that beautifully coats the back of a wooden spoon.' },
        { title: 'The Starch Friction Toss', image: dir40, instruction: 'Toss the drained penne pasta and grated parmesan cheese directly into the simmering cream sauce, folding it together immediately over low heat. The Styling Tip: If the cream clings too tightly to the pasta or looks heavy and dry, ladle in your reserved hot pasta water 1 tablespoon at a time while shaking the pan vigorously. The friction of tossing combines the hot starches with the fats in the cream and cheese, instantly creating a glossy, fluid, restaurant-quality emulsion. Top with a shower of freshly chopped parsley and serve hot.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/mVsKiuTzABw?si=I1ht_cgLAqrS3tU8',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id:1,
      image: recipe1,
      rating: 4.5,
      category: 'Salads',
      title: 'Zesty Lemon Quinoa with Fresh Herbs',
      time: '60 min',
      cuisine: 'Moroccan',
      servings:"Serves 1",
      flag: flag2,
      difficulty: 'Beginner',
      tags: ['HEALTHY', 'VEGETARIAN', 'LOW-CARB', 'DAIRY-FREE', 'GLUTEN-FREE'],
      description: ' This zesty lemon quinoa salad is packed with plant-based protein, fiber, and refreshing herbs that help support digestion and long-lasting energy. Quinoa provides essential amino acids and minerals, making the salad both nutritious and filling without feeling heavy. Fresh parsley and mint deliver antioxidants and natural freshness, while cucumber adds hydration and a crisp texture. The lemon dressing supplies vitamin C and bright citrus flavor that enhances the wholesome ingredients beautifully. Tossed together with olive oil and herbs, this refreshing salad creates a healthy and energizing meal for any time of day.',
      description2: 'This light and vibrant quinoa salad combines wholesome grains with nutrient-rich vegetables and herbs for a refreshing and balanced dish. Quinoa supports muscle health with its natural protein content, while cucumber provides cooling hydration and freshness. Lemon juice and olive oil create a bright dressing rich in healthy fats and antioxidants that complement the fresh herbs perfectly. Mint and parsley add aromatic flavor while contributing vitamins and minerals that support wellness. Served chilled or at room temperature, this salad offers a nourishing combination of freshness, texture, and natural energy.',
      ingredients: [
        { quantity: '1 cup', name: 'Quinoa' },
        { quantity: '2 cups', name: 'Water' },
        { quantity: '2 pieces', name: 'Lemon' },
        { quantity: '3 tbsp', name: 'Olive Oil' },
        { quantity: '1 bunch', name: 'Fresh Parsley' },
        { quantity: '1 bunch', name: 'Fresh Mint' },
        { quantity: '1 piece', name: 'Cucumber' },
        { quantity: '1/2 tsp', name: 'Salt' },
        { quantity: '1/4 tsp', name: 'Black Pepper' },
      ],
      directions: [
        { title: 'The Germination Steam Stop', image: dir11, instruction: 'Dump the dry quinoa into a fine-mesh sieve and rinse it thoroughly under cold running water to strip away its naturally bitter outer saponin coating. Combine the washed grains with 2 cups of fresh water in a small saucepan, bring it to a boil, then immediately snap a lid on top and drop the heat to low. Let it simmer for 15 minutes. The Sensory Cue: Remove the pan from the burner and leave it covered, undisturbed, for an additional 5 minutes. When you uncover it, look for tiny translucent spirals (the germ) wrapped around each fully expanded grain. Fluff up the structure gently with a fork and spread it across a baking sheet to cool down rapidly.' },
        { title: 'The Sharp Citrus Emulsion', image: dir21, instruction: 'While the quinoa cools down to room temperature, tackle the flavor base. Squeeze the juice of your two fresh lemons into a deep glass mixing bowl, filtering out any seeds. The Kinetic Trick: Slowly stream your olive oil into the citrus juice while whisking continuously with a wire whisk. Constantly beating the mixture forces the heavy oil molecules to shatter and suspend evenly within the acidic juice, binding them into a bright, pale yellow, and uniform citrus dressing. Whisk in the salt and pepper to finish.' },
        { title: 'The Deseeded Matchstick Dice', image: dir31, instruction: 'Finely mince your fresh parsley and mint leaves, discarding any thick, woody stems. Strip the skin of your cucumber if desired, then slice it completely in half lengthwise. The Pro Tip: Use the tip of a small metal teaspoon to scrape firmly down the center channel of the cucumber halves to scoop out the gelatinous, watery seed pods. Removing this soft core ensures your cucumber pieces stay incredibly crisp and prevents them from bleeding water into your finished grain salad over the next 24 to 48 hours. Finely dice the remaining firm green flesh.' },
        { title: 'The Infused Herb Toss', image: dir41, instruction: 'Add the completely cooled quinoa grains, the minced herbs, and your diced cucumber directly into the bowl with the lemon dressing. Use a pair of silicone spatulas to gently lift and fold the ingredients together from the bottom up until everything is uniformly distributed. The Golden Rule: Cover the bowl and let the finished salad rest on the counter or in the fridge for 15 to 20 minutes before serving. This brief resting window allows the porous, dry grains of quinoa to fully drink up the aromatic citrus juices, maximizing the refreshing, zesty punch of every forkful.' },
      ],
      videoUrl: '',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id:2,
      image: recipe2,
      rating: 4.8,
      category: 'Meat',
      title: 'Smoky Barbecue Pulled Beef Sandwiches',
      time: '15 min',
      cuisine: 'French',
      servings:"Serves 11",
      flag: flag3,
      difficulty: 'Easy',
      tags: ['MEAT', 'COMFORT FOOD', 'HIGH-PROTEIN'],
      description: 'These smoky barbecue pulled beef sandwiches are loaded with tender slow-cooked beef that provides high-quality protein and iron for lasting energy and muscle support. The rich barbecue sauce adds deep smoky flavor while onions and garlic contribute natural antioxidants and savory depth. Soft brioche buns create a satisfying texture that balances the juicy shredded beef perfectly. Smoked spices like paprika and cumin enhance the dish with warmth and aromatic richness while complementing the hearty meat. Every sandwich delivers a comforting combination of bold flavor, nourishment, and satisfying texture ideal for hearty meals.',
      description2: 'This flavorful pulled beef sandwich recipe combines protein-rich beef with smoky seasonings and soft toasted buns for a deeply satisfying dish. Slow cooking allows the meat to become tender and juicy while locking in savory flavor throughout every bite. Garlic, onions, and spices provide aromatic depth along with natural nutrients that enhance the overall richness of the meal. Brioche buns add softness and balance to the bold barbecue filling, creating the perfect comfort-food texture. Served warm with toppings like pickles or coleslaw, these sandwiches offer a hearty and energizing dining experience.',
      ingredients: [
        { quantity: '1 kg', name: 'Beef Chuck Roast' },
        { quantity: '1 cup', name: 'BBQ Sauce' },
        { quantity: '1 piece', name: 'Onion' },
        { quantity: '4 cloves', name: 'Garlic' },
        { quantity: '1 tsp', name: 'Smoked Paprika' },
        { quantity: '1 tsp', name: 'Cumin' },
        { quantity: '1 tsp', name: 'Salt' },
        { quantity: '6 pieces', name: 'Brioche Buns' },
      ],
      directions: [
        { title: 'The Sear and Fond Creation', image: dir12, instruction: 'Rub every surface of the beef chuck roast thoroughly with the smoked paprika, cumin, and salt, pressing the dry spice rub firmly into the grain of the meat. The Pro Tip: Heat a splash of high-smoke-point oil in a heavy iron skillet over high heat and sear the roast for 3–4 minutes per side before it goes into the slow cooker. Searing locks in the juices and creates a rich, deeply caramelized, dark brown crust (the fond) that adds massive savory complexity to the final sauce—a depth of flavor that slow cooking alone simply cannot achieve.' },
        { title: 'The Low-Heat Collagen Melt', image: dir22, instruction: 'Roughly slice your onion and smash the garlic cloves, scattering them uniformly along the bottom of your slow cooker basin to act as a fragrant, natural cooking trivet. Rest the seared beef chuck roast directly on top of this aromatic bed, and pour exactly half of your barbecue sauce evenly over the crown of the meat. The Golden Rule: Secure the lid tightly and set the machine to cook on Low for 8 full hours. Resist any temptation to open the lid to check on it; keeping the steam sealed inside maintains the low, stable thermal environment necessary to fully break down the tough, stringy collagen fibers into gelatinous, melt-in-your-mouth strands.' },
        { title: 'The Double-Fork Strand Pull', image: dir32, instruction: 'Carefully lift the fragile beef roast out of the slow cooker and transfer it to a large, wide rimmed baking tray. The Sensory Cue: The beef is perfectly cooked when it feels structureless and naturally begins to separate under its own weight. Use two heavy dinner forks to pull the beef apart, shredding it along its natural muscle grain lines into succulent, fine strands. Take a moment to pick out and discard any large, unrendered pockets of pure fat, leaving behind only the clean, tender pulled meat.' },
        { title: 'The Glazed Bun Assembly', image: dir42, instruction: 'Strain the rich, savory meat juices left behind in the slow cooker basin into your shredded beef to rehydrate the meat, then fold in the remaining half cup of fresh barbecue sauce until the strands are coated in a thick, glossy glaze. The Styling Tip: Toast your brioche buns face-down in a dry pan until the edges are golden-crisp before assembly. Mound a generous, high-piled heap of the warm pulled beef onto the bottom bun, and cap it with a cool layer of creamy coleslaw and sliced pickles to create a beautiful sensory contrast of warm, sweet, smoky meat against crisp, cold, and acidic toppings.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/iexqibQHeBo?si=MNpmM70caOJK84TR',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id:3,
      image: recipe3,
      rating: 4.8,
      category: 'Breakfasts',
      title: 'Fluffy Banana Pancakes with Maple Syrup',
      time: '60 min',
      cuisine: 'Thai',
      servings:"Serves 1",
      flag: flag4,
      difficulty: 'Advanced',
      tags: ['KID-FRIENDLY', 'COMFORT FOOD', 'DAIRY-FREE'],
      description: 'These fluffy banana pancakes provide natural energy from ripe bananas while delivering a soft and airy texture perfect for comforting breakfasts. Bananas supply potassium and natural sweetness that reduce the need for extra sugar while supporting hydration and muscle function. Eggs and milk contribute protein and calcium, helping create a balanced and satisfying morning meal. Maple syrup adds warm sweetness that pairs beautifully with the tender pancakes and enhances their rich flavor. Every stack offers a wholesome blend of comforting texture, natural nutrients, and delicious homemade goodness.',
      description2: 'This nourishing pancake recipe combines ripe bananas, eggs, and milk to create a breakfast filled with natural sweetness and essential nutrients. Bananas provide fiber and important vitamins that support digestion and sustained energy throughout the day. The fluffy pancake texture comes from a balanced batter enriched with protein and calcium from eggs and milk. Warm maple syrup creates a smooth finishing touch while complementing the fruity banana flavor perfectly. Served with fresh berries or nuts, these pancakes make a comforting and energizing breakfast option for all ages.',
      ingredients: [
        { quantity: '2 pieces', name: 'Ripe Bananas' },
        { quantity: '1.5 cups', name: 'All-Purpose Flour' },
        { quantity: '1 cup', name: 'Milk' },
        { quantity: '2 pieces', name: 'Eggs' },
        { quantity: '2 tbsp', name: 'Butter' },
        { quantity: '1 tsp', name: 'Baking Powder' },
        { quantity: '1/2 tsp', name: 'Salt' },
        { quantity: '1/4 cup', name: 'Maple Syrup' },
      ],
      directions: [
        { title: 'The Pureed Banana Emulsion', image: dir13, instruction: `Peel the ripe bananas and place them into a wide mixing bowl. Use the back of a sturdy dinner fork to mash them thoroughly until they break down into a completely fluid, smooth paste free of large, stubborn lumps. Whisk in the whole eggs, milk, and melted butter until the mixture is fully emulsified and uniform. The Pro Tip: Make sure your bananas are heavily speckled with brown spots. Ripe bananas aren't just easier to mash; their starches have completely converted into simple sugars, providing the intense, natural sweetness and moisture necessary to flavor the pancake core without needing processed sugar in the batter.` },
        { title: 'The Minimalist Gluten Fold', image: dir23, instruction: `In a separate large basin, sift together the all-purpose flour, baking powder, and salt. Pour your wet banana mixture directly into the center of the dry ingredients. The Golden Rule: Use a wide rubber spatula to fold the mixtures together gently just until the dry flour streaks completely vanish. Stop mixing immediately after. It is completely fine—and actually desirable—if the batter looks thick and lumpy. Over-mixing agitates the flour's gluten proteins, which will turn your pancakes tough, dense, and gummy instead of light, tender, and cake-like.` },
        { title: 'The Surface Bubble Indicator', image: dir33, instruction: 'Heat a wide, heavy-bottomed non-stick griddle over medium heat and lightly brush the surface with a small pat of butter. Ladle exactly 1/4 cup of batter per pancake onto the hot surface, leaving plenty of space between them. The Sensory Cue: Do not touch or flip the pancakes too early. Watch the top surface of the cooking batter closely; when small bubbles pop open and form permanent, open air holes across the center, and the shiny wet edges start to look matte and dry, it is the foolproof sign that the bottom is perfectly browned and sturdy enough to flip. Flip cleanly with a flat spatula and cook the second side for another 60 seconds.' },
        { title: 'The Stacked Thermal Drizzle', image: dir43, instruction: 'Transfer the cooked pancakes directly onto a warm platter, stacking them vertically to trap the residual steam between the layers, keeping them moist. The Styling Tip: Stacking them immediately helps keep the centers soft while preventing the outer surfaces from drying out in the open air. Arrange fresh banana slices, toasted walnuts, or fresh berries over the apex of your stack, and finish with a generous, slow zig-zag drizzle of warm amber maple syrup right before serving so the porous, fluffy crumb can drink it up instantly.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/NbGPOTDf6Jc?si=P75I75LhDpq8qcQc',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id:4,
      image: recipe4,
      rating: 4.9,
      category: 'Desserts',
      title: 'Molten Chocolate Lava Cake Dessert',
      time: '80 min',
      cuisine: 'Ethiopian',
      servings:"Serves 2",
      flag: flag5,
      difficulty: 'Advanced',
      tags: ['DESSERTS', 'HOLIDAY', 'KID-FRIENDLY'],
      description: 'This molten chocolate lava cake delivers rich chocolate flavor while providing antioxidants from premium dark chocolate and protein from eggs for a satisfying dessert experience. The soft cake exterior surrounds a warm flowing chocolate center that creates an indulgent texture in every spoonful. Dark chocolate contains natural cocoa compounds that add depth and richness while butter contributes smoothness and moisture throughout the cake. Eggs help create the delicate structure while enhancing the creamy consistency of the molten center. Every serving offers a luxurious balance of sweetness, warmth, and decadent chocolate flavor.',
      description2: 'This decadent lava cake combines silky melted chocolate with a delicate cake shell to create a dessert full of rich flavor and comforting texture. Dark chocolate supplies bold cocoa taste along with antioxidants that make the dessert deeply satisfying and aromatic. Eggs and butter create a soft, airy crumb while keeping the center smooth and molten after baking. The warm flowing chocolate filling pairs perfectly with ice cream or fresh berries for a balanced dessert presentation. Served fresh from the oven, this dessert delivers an elegant and indulgent chocolate experience in every bite.',
      ingredients: [
        { quantity: '200 grams', name: 'Dark Chocolate' },
        { quantity: '100 grams', name: 'Butter' },
        { quantity: '3 pieces', name: 'Eggs' },
        { quantity: '3 pieces', name: 'Egg Yolks' },
        { quantity: '100 grams', name: 'Sugar' },
        { quantity: '50 grams', name: 'All-Purpose Flour' },
        { quantity: '1 pinch', name: 'Salt' },
      ],
      directions: [
        { title: 'The Double-Boiler Fluid Gloss', image: dir14, instruction: 'Chop your dark chocolate into fine shards and place it in a heatproof glass bowl along with the butter cubes. Set the bowl over a saucepan of gently simmering water. The Pro Tip: Ensure the bottom of the glass bowl does not touch the surface of the boiling water below. Heat changes chocolate fast; stirring continuously with a rubber spatula prevents scorching, helping the fats melt down smoothly into a uniform, glossy liquid stream before setting it aside to cool slightly.' },
        { title: 'The Pale Ribbon Aeration', image: dir24, instruction: 'In a deep mixing bowl, combine your 3 whole eggs, 3 extra egg yolks, and the granulated sugar. Use a hand mixer on high speed to whip the mixture vigorously for 3–4 minutes. The Sensory Cue: You will know the aeration process is successful when the liquid lifts, expands in volume, and turns into a thick, pale yellow cream that holds its shape like a heavy ribbon for a few seconds when the beaters are lifted out of the bowl.' },
        { title: 'The Density Alignment Fold', image: dir34, instruction: 'Gently pour the warm, liquid melted chocolate down the inner walls of the whipped egg bowl. Sift your all-purpose flour and salt directly over the surface. The Golden Rule: Use a wide silicone spatula to cut through the center and fold the ingredients together using slow, deliberate circular motions. Do not beat or whisk at this stage; over-working the batter will deflate the trapped air bubbles and over-develop the flour gluten, destroying the delicate cake exterior.' },
        { title: 'The Rigid Crust Core Check', image: dir44, instruction: 'Divide the chocolate batter evenly among 4 heavily greased and cocoa-powdered ceramic ramekins. Bake in a preheated oven at 200°C for exactly 10–12 minutes. The Sensory Cue: Watch the surface structure closely toward the end of the timeline. The absolute outer edges of the cake must look completely set, rigid, and matte, while the precise center circle should still jiggle softly when shaken. Invert gently onto flat plates and serve immediately while hot.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/gW3JtHpuzrk?si=mBkuMfL1AI_OoIR0',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id:5,
      image: recipe5,
      rating: 4.4,
      category: 'Side Dishes',
      title: 'Crispy Parmesan Garlic Zucchini Sticks',
      time: '100 min',
      cuisine: 'Korean',
      servings:"Serves 1",
      flag: flag6,
      difficulty: 'Advanced',
      tags: ['VEGETARIAN', 'LOW-CARB', 'GLUTEN-FREE', 'KID-FRIENDLY'],
      description: 'These crispy parmesan garlic zucchini sticks are a healthier alternative to fries while providing fiber, vitamins, and minerals from fresh zucchini. Parmesan cheese adds savory flavor along with calcium and protein that create a rich golden crust during baking. Garlic and Italian herbs enhance the sticks with aromatic depth while supporting natural wellness benefits. The crunchy breadcrumb coating creates a satisfying texture without deep frying, making the dish lighter yet flavorful. Every bite delivers a delicious balance of crispiness, cheesy richness, and wholesome vegetable goodness perfect for snacking or side dishes.',
      description2: 'This baked zucchini stick recipe combines fresh vegetables with parmesan and herbs to create a crispy and nutritious appetizer or side dish. Zucchini provides hydration and fiber while remaining light and tender inside its crunchy coating. Parmesan cheese contributes protein and calcium that enhance both texture and savory flavor during baking. Garlic and Italian seasoning bring aromatic richness that pairs beautifully with marinara or creamy dipping sauces. Baked until golden and crisp, these zucchini sticks offer a wholesome and satisfying alternative to traditional fried snacks.',
      ingredients: [
        { quantity: '3 pieces', name: 'Zucchini' },
        { quantity: '100 grams', name: 'Parmesan Cheese' },
        { quantity: '1 cup', name: 'Breadcrumbs' },
        { quantity: '2 pieces', name: 'Eggs' },
        { quantity: '3 cloves', name: 'Garlic' },
        { quantity: '1 tsp', name: 'Italian Seasoning' },
        { quantity: '1/2 tsp', name: 'Salt' },
        { quantity: '1/4 tsp', name: 'Black Pepper' },
      ],
      directions: [
        { title: 'The Surface Tension Dehydration', image: dir15, instruction: 'Slice the zucchinis horizontally, then cut each piece down into uniform 1-centimeter thick sticks. Line a flat tray with paper towels, arrange the zucchini sticks in a single layer, and sprinkle a small pinch of salt over them. Let them sit for 10 minutes to draw out excess moisture, then firmly pat them completely dry with clean paper towels to ensure they bake crisp instead of steaming.' },
        { title: 'The Static Crumb Matrix', image: dir25, instruction: 'Set up your breading station by placing two wide, shallow bowls side-by-side. In the first bowl, crack your eggs and whisk them with the minced garlic until completely fluid and uniform. In the second bowl, thoroughly toss together the breadcrumbs, finely grated parmesan cheese, Italian seasoning, salt, and black pepper. The Golden Rule: Ensure the parmesan is grated on a fine microplane so it seamlessly integrates into the breadcrumbs, creating a uniform, continuous coating that will melt evenly into a crunchy outer shield.' },
        { title: 'The Double-Hand Breading Shield', image: dir35, instruction: 'Line a large baking sheet with parchment paper. Using your left hand for wet steps and your right hand for dry steps, dip a zucchini stick into the garlic egg wash until fully coated, let the excess drip off, and drop it into the crumb basin. Use your dry right hand to shovel the cheese mix over the stick, pressing down firmly on all sides to anchor the crust. The Golden Rule: Space the coated sticks at least 2 centimeters apart on the baking sheet; crowding them will trap steam, destroying the crisp texture you are building.' },
        { title: 'The High-Heat Convection Crunch', image: dir45, instruction: 'Slide the baking sheet into a preheated oven at 220°C and bake for 20–25 minutes. The Sensory Cue: Do not disturb or flip them for the first 15 minutes to let the cheese bond set. The sticks are perfectly finished when the breadcrumb jacket lifts, turns a deep toasted golden-orange color, and feels completely rigid and solid when tapped gently with kitchen tongs. Arrange them stacked log-cabin style on a platter and serve immediately while hot alongside warm marinara sauce.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/zPaUjRmBvN0?si=KMIF3Ue2cm0xq9qF',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:6,
      image: recipe6,
      rating: 4.9,
      category: 'BBQ & Grilling',
      title: 'Smoky Barbeque Beef Ribs with Dry Rub',
      time: '85 min',
      cuisine: 'Lebanese',
      servings:"Serves 11",
      flag: flag1,
      difficulty: 'Advanced',
      tags: ['MEAT', 'COMFORT FOOD', 'HIGH-PROTEIN', 'DAIRY-FREE', 'GLUTEN-FREE'],
      description: 'These smoky barbecue beef ribs are packed with high-quality protein and rich savory flavor, making them a hearty and satisfying meal option. Slow grilling allows the beef to become tender while preserving its juicy texture and deep smoky taste throughout every bite. Spices like paprika, cumin, garlic, and onion powder add aromatic richness along with natural antioxidants that enhance the bold barbecue flavor. The caramelized barbecue glaze creates a sticky and flavorful coating that perfectly complements the smoky meat. Every rib delivers a comforting combination of protein, warmth, and slow-cooked barbecue goodness.',
      description2: 'This slow-cooked beef rib recipe combines bold spices and smoky grilling techniques to create a rich and flavorful barbecue experience. Beef ribs provide essential protein and iron that support strength and long-lasting energy while remaining juicy and tender after cooking. The dry rub seasoning adds layers of savory warmth that blend beautifully with the sweet and smoky barbecue sauce. Slow cooking breaks down the meat into a soft texture while intensifying the deep grilled flavor. Served hot with classic sides, these ribs create a satisfying and indulgent meal perfect for gatherings and celebrations.',
      ingredients: [
        { quantity: '2 kg', name: 'Beef Ribs' },
        { quantity: '2 tbsp', name: 'Smoked Paprika' },
        { quantity: '1 tbsp', name: 'Brown Sugar' },
        { quantity: '1 tbsp', name: 'Garlic Powder' },
        { quantity: '1 tbsp', name: 'Onion Powder' },
        { quantity: '1 tsp', name: 'Cumin' },
        { quantity: '1 tsp', name: 'Salt' },
        { quantity: '1 cup', name: 'BBQ Sauce' },
      ],
      directions: [
        { title: 'Building the Permeable Rub Barrier', image: dir16, instruction: `In a small mixing bowl, thoroughly blend the smoked paprika, brown sugar, garlic powder, onion powder, cumin, and salt. The Pro Tip: Before applying the spice blend, use a sheet of paper towel to firmly grip and peel away the tough, papery membrane (the silver skin) from the bone side of the ribs if it hasn't been removed. If left intact, this membrane acts as an impenetrable shield that blocks your dry rub from seasoning the meat, and it turns into a chewy, rubbery layer when cooked. Pat the meat completely dry before massaging the spices across every exposed surface.` },
        { title: 'The Osmotic Dry-Brining Rest', image: dir26, instruction: 'Wrap the highly seasoned rack of ribs tightly in plastic wrap and place it in the refrigerator for at least 2 hours, or ideally overnight. The Golden Rule: Giving the meat a prolonged cold rest triggers an osmotic process. Initially, the salt draws surface moisture out of the meat, melting the sugar and spices into a wet glaze. Over the next hour, the muscle fibers reabsorb that highly concentrated, flavorful liquid deep into the core of the beef, ensuring the ribs are seasoned throughout rather than just on the outer surface.' },
        { title: 'The Low-Heat Collagen Breakdown', image: dir36, instruction: 'Set up your grill for indirect cooking at a low temperature (around 110°C to 135°C), placing the ribs away from the direct flames. Close the hood and cook for 3–4 hours, turning the rack occasionally. The Sensory Cue: You are not looking for a fast sear here; tough beef ribs require sustained, gentle heat to slowly melt their dense collagen into rich, unctuous gelatin. You will know they are tracking perfectly when the meat starts to shrink and pull away from the tips of the bones, exposing roughly 1 to 2 centimeters of bare bone end.' },
        { title: 'The Caramelized Lacquer Finish', image: dir46, instruction: 'During the final 30 minutes of cooking, open the grill hood and use a silicone pastry brush to apply a thick coat of barbecue sauce over the meat side of the ribs. The Styling Tip: Close the lid and let the heat set the sauce into a shiny, tacky lacquer layer. Repeat this brushing step once more 15 minutes later to build a deep, multi-layered glaze. The sugars in the sauce will bubble and caramelize into dark, complex, sweet-and-savory spots against the smoky bark. Slice carefully between the bones using a long, sharp carving knife and serve piping hot.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/MGcyzm0_6Ds?si=iBGuCh3ySzabSdTm',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:7,
      image: recipe7,
      rating: 4.8,
      category: 'Gluten-Free',
      title: 'Gluten-Free Almond Waffles with Berries',
      time: '20 min',
      cuisine: 'Lebanese',
      servings:"Serves 11",
      flag: flag1,
      difficulty: 'Easy',
      tags: ['GLUTEN-FREE', 'DAIRY-FREE', 'KID-FRIENDLY'],
      description: 'These gluten-free almond waffles are rich in healthy fats, protein, and fiber from wholesome almond flour, creating a nutritious and satisfying breakfast option. Almond flour provides vitamin E and essential nutrients while keeping the waffles naturally gluten-free and light in texture. Eggs and almond milk add protein and creaminess that help create crisp golden edges with a soft center. Fresh mixed berries contribute antioxidants and natural sweetness that brighten the flavor of the waffles beautifully. Every warm serving delivers a balanced combination of crunch, freshness, and nourishing ingredients perfect for energizing mornings.',
    description2: 'These gluten-free almond waffles are rich in healthy fats, protein, and fiber from wholesome almond flour, creating a nutritious and satisfying breakfast option. Almond flour provides vitamin E and essential nutrients while keeping the waffles naturally gluten-free and light in texture. Eggs and almond milk add protein and creaminess that help create crisp golden edges with a soft center. Fresh mixed berries contribute antioxidants and natural sweetness that brighten the flavor of the waffles beautifully. Every warm serving delivers a balanced combination of crunch, freshness, and nourishing ingredients perfect for energizing mornings.',
    ingredients: [
      { quantity: '2 cups', name: 'Almond Flour' },
      { quantity: '2 pieces', name: 'Eggs' },
      { quantity: '1/2 cup', name: 'Almond Milk' },
      { quantity: '2 tbsp', name: 'Coconut Oil' },
      { quantity: '1 tsp', name: 'Vanilla Extract' },
      { quantity: '1 tsp', name: 'Baking Powder' },
      { quantity: '1 cup', name: 'Mixed Berries' },
      { quantity: '2 tbsp', name: 'Maple Syrup' },
    ],
    directions: [
      { title: 'The Emulsified Liquid Base', image: dir17, instruction: 'In a medium mixing bowl, vigorously whisk together the eggs, almond milk, melted coconut oil, and vanilla extract until completely uniform and slightly frothy. The Pro Tip: Ensure your almond milk and eggs are at room temperature before mixing. If they are straight out of the fridge, the cold will instantly cause your melted coconut oil to solidify into tiny, hard wax-like beads, preventing a proper emulsion and leading to uneven fat distribution in your cooked waffles.' },
      { title: 'Hydrating the Grainless Endosperm', image: dir27, instruction: `Add the almond flour and baking powder directly into the liquid base, whisking gently until a smooth, thick batter forms. The Golden Rule: Unlike traditional wheat flour, almond flour has zero gluten, so you do not need to worry about over-mixing or making the waffles tough. However, because almond flour absorbs moisture much slower than grain flours, let the mixed batter rest on your counter for 5 full minutes before cooking. This gives the nut flour time to thoroughly hydrate, swelling slightly to create a more cohesive batter that won't fall apart on the iron plates.` },
      { title: 'The Steam-Vent Release Matrix', image: dir37, instruction: `Generously brush or spray your preheated waffle iron with oil, then ladle the rested batter into the center, spreading it slightly toward the edges. Close the lid immediately. The Sensory Cue: Do not rely solely on the waffle iron's automatic green indicator light—instead, watch the steam escaping from the sides of the machine. Almond flour batters release a high volume of internal moisture; when the heavy clouds of steam finally slow down to a tiny, faint whisper, it is a foolproof sign that the interior egg structure has set and the waffle is ready to be opened.` },
      { title: 'The Macerated Gloss Finish', image: dir47, instruction: 'While the waffles are baking, place your fresh mixed berries into a small bowl, drizzle them with a tablespoon of maple syrup, and toss gently with a spoon. The Styling Tip: Let the berries sit for 3–4 minutes to macerate—the sugars in the syrup will draw out the natural juices of the fruit, turning a simple pint of berries into a glossy, vibrant topping with its own rich, natural fruit syrup. Stack the crisp, golden almond waffles high on a plate, spoon the glossy macerated berries over the apex, and finish with a final, slow zig-zag drizzle of warm maple syrup.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/ZkSN2qBwfIA?si=PSqvIpx04GljLN_U',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:8,
      image: recipe8,
      rating: 4.8,
      category: 'Meat',
      title: 'Slow Cooker Beef and Black Bean Chili',
      time: '45 min',
      cuisine: 'Turkish',
      servings:"Serves 5",
      flag: flag7,
      difficulty: 'Intermediate',
      tags: ['MEAT', 'COMFORT FOOD', 'MEAL PREP', 'HIGH-PROTEIN', 'ONE-POT', 'GLUTEN-FREE', 'DAIRY-FREE'],
      description: 'This slow cooker beef and black bean chili is packed with protein, fiber, and rich savory flavor that makes it both nourishing and deeply satisfying. Ground beef provides iron and high-quality protein to support muscle strength and lasting energy throughout the day. Black beans add fiber and plant-based nutrients that help promote digestion and fullness while creating a hearty texture. Tomatoes, garlic, and onions contribute antioxidants and natural flavor depth that enhance the slow-cooked richness of the chili. Every warm bowl delivers comforting spices, balanced nutrition, and wholesome ingredients perfect for meal prep or cozy dinners.',
    description2: 'This hearty beef and black bean chili combines slow-cooked ingredients with bold spices to create a warming and protein-rich comfort meal. Black beans provide essential fiber and minerals that support digestion and sustained energy while complementing the tender beef beautifully. Garlic, cumin, and chili powder create deep smoky flavor while adding aromatic warmth throughout the dish. Tomatoes help balance the richness with natural acidity and nutrients that enhance the savory base. Served hot with toppings like cheese or sour cream, this chili offers a filling and comforting combination of nutrition and flavor.',
    ingredients: [
      { quantity: '500 grams', name: 'Ground Beef' },
      { quantity: '2 cans', name: 'Black Beans' },
      { quantity: '1 can', name: 'Diced Tomatoes' },
      { quantity: '1 piece', name: 'Onion' },
      { quantity: '3 cloves', name: 'Garlic' },
      { quantity: '2 tbsp', name: 'Chili Powder' },
      { quantity: '1 tsp', name: 'Cumin' },
      { quantity: '1 tsp', name: 'Salt' },
    ],
    directions: [
      { title: 'Searing for Deep Fond Development', image: dir18, instruction: 'Heat a drop of cooking oil in a large skillet over medium-high heat. Add the ground beef and break it apart with a wooden spoon. The Pro Tip: Do not rush this step by just cooking the meat until it turns gray. Let it sizzle undisturbed for a few minutes until it develops a deeply browned, crispy texture on the bottom. This caramelization builds complex flavor notes that a slow cooker cannot replicate on its own. Drain off any excessive rendered grease, leaving just a thin coat of fat on the beef.' },
      { title: 'Blooming the Dried Spices', image: dir28, instruction: 'Before transferring everything to the slow cooker, toss the finely diced onion, minced garlic, chili powder, and cumin directly into the warm skillet with the browned beef. Stir continuously for about 2 minutes. The Golden Rule: The heat from the pan activates the essential oils locked inside the dried spices, transforming them from raw, dusty powders into an incredibly fragrant, rich flavor base.' },
      { title: 'Low and Slow Emulsion', image: dir38, instruction: 'Transfer the spiced beef mixture into your slow cooker. Pour in the diced tomatoes with their juices and the drained black beans. Stir well to ensure the ingredients are evenly distributed. Cover with the lid and set it to cook on Low for 6 to 8 hours (or High for 3 to 4 hours). The Sensory Cue: You will know it is ready when the chili thickens significantly, the onions melt into the broth, and a rich, glossy layer forms on the surface.' },
      { title: 'The Comfort Bowl Presentation', image: dir48, instruction: 'Ladle the thick chili into deep, heavy ceramic bowls while it is piping hot. The Styling Tip: Instead of mixing your toppings in, lay them sequentially across the surface—a neat dollop of cool sour cream right in the center, a ring of shredded cheddar cheese around it to melt, and a scattered handful of vibrant green fresh cilantro leaves to contrast the deep, dark red chili underneath.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/Sl-xoVIbc7w?si=bSvw_z-ZVjwPKA-D',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:9,
      image: recipe9,
      rating: 4.8,
      category: 'Drinks',
      title: 'Cucumber Mint Smoothie with Lime Zest',
      time: '100 min',
      cuisine: 'French',
      servings:"Serves 4",
      flag: flag3,
      difficulty: 'Easy',
      tags: ['HEALTHY', 'LOW-CARB', 'DAIRY-FREE', 'GLUTEN-FREE'],
      description: 'This cucumber mint smoothie is filled with hydrating ingredients and refreshing flavors that help cool and energize the body naturally. Fresh cucumber provides hydration and essential minerals while mint adds a cooling herbal freshness that feels light and revitalizing. Coconut water supplies natural electrolytes that support hydration and post-workout recovery throughout the day. Lime juice contributes vitamin C and a bright citrus flavor that enhances the crisp cucumber taste beautifully. Every chilled glass delivers a refreshing blend of wellness, freshness, and light natural sweetness perfect for warm days.',
    description2: 'This refreshing smoothie combines cucumber, mint, and coconut water to create a light and nourishing beverage packed with hydration and natural nutrients. Cucumber contains water-rich freshness that supports hydration while mint provides a cooling and soothing flavor profile. Coconut water adds electrolytes and minerals that help replenish the body after physical activity or hot weather. Lime juice and honey balance the drink with citrus brightness and natural sweetness without making it heavy. Served ice cold, this smoothie offers a revitalizing combination of freshness, energy, and clean flavor in every sip.',
    ingredients: [
      { quantity: '1 piece', name: 'Cucumber' },
      { quantity: '1 bunch', name: 'Fresh Mint' },
      { quantity: '2 pieces', name: 'Lime' },
      { quantity: '1 cup', name: 'Coconut Water' },
      { quantity: '1 cup', name: 'Ice Cubes' },
      { quantity: '1 tbsp', name: 'Honey' },
    ],
    directions: [
      { title: 'Hydration Component Preparation', image: dir19, instruction: 'Peel your cucumber completely and chop it into small chunks. The Pro Tip: If your cucumber has large, hard seeds, scrape them out with a spoon before chopping. Leaving the seeds out ensures your smoothie keeps a smooth, silky texture rather than a watery, split consistency with floating gritty bits. Zest one of your limes before juicing both to preserve the intensely fragrant surface oils.' },
      { title: 'High-Speed Emulsion', image: dir29, instruction: 'Drop the cucumber chunks, fresh mint leaves, lime juice, coconut water, honey, and ice cubes into a high-speed blender. Secure the lid tightly and start on a low speed to crush the ice, then ramp up to maximum speed for a full 60 seconds. You want to completely pulverize the fibrous mint leaves into tiny, microscopic specks so the drink turns a uniform, vibrant pale green.' },
      { title: 'Balancing Brightness and Sweetness', image: dir39, instruction: `Stop the blender and take a small sip to check the balance. The Golden Rule: Smoothies can taste different depending on how sweet or watery your specific cucumber is. If the lime juice hits too sharp, blend in another small drizzle of honey; if it tastes flat, add an extra squeeze of fresh lime juice to wake up the fresh cucumber notes.` },
      { title: 'The Frosty Spa Glass Finish', image: dir49, instruction: 'Pour the vibrant green smoothie into tall, chilled glasses over a couple of fresh ice cubes. The Styling Tip: Lightly sprinkle the reserved bright green lime zest across the top foam layer just before serving. This adds an immediate punch of citrus aroma the second your guest lifts the glass, perfectly complementing the cooling undertones of the mint and cucumber.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/a6Aqh_n28vA?si=mAYHwhiUJYPqCtTl',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:10,
      image: recipe10,
      rating: 4.5,
      category: 'Side Dishes',
      title: 'Butternut Squash Risotto with Parmesan',
      time: '115 min',
      cuisine: 'Mexican',
      servings:"Serves 3",
      flag: flag8,
      difficulty: 'Advanced',
      tags: ['VEGETARIAN', 'COMFORT FOOD', 'ONE-POT', 'KID-FRIENDLY'],
      description: 'This butternut squash risotto combines creamy arborio rice with naturally sweet roasted squash to create a comforting and nutrient-rich meal. Butternut squash provides vitamin A, fiber, and antioxidants that support overall wellness while adding smooth sweetness to the dish. Arborio rice creates a rich creamy texture that perfectly absorbs the savory vegetable stock and parmesan flavor. Garlic and onions enhance the risotto with aromatic depth and natural nutrients that balance the richness beautifully. Every spoonful delivers warmth, creaminess, and satisfying comfort with elegant restaurant-style flavor.',
    description2: 'This creamy risotto recipe blends roasted butternut squash with parmesan and arborio rice to create a rich and wholesome vegetarian dish. Roasted squash adds natural sweetness and nutrients while parmesan cheese contributes savory protein and calcium for extra depth. Slow-cooked arborio rice creates a silky texture that feels luxurious and filling in every bite. Garlic, onions, and herbs provide aromatic flavor while complementing the sweetness of the squash perfectly. Served warm with sage or toasted nuts, this risotto offers a comforting combination of nourishment and creamy elegance.',
    ingredients: [
      { quantity: '1 piece', name: 'Butternut Squash' },
      { quantity: '1.5 cups', name: 'Arborio Rice' },
      { quantity: '1 piece', name: 'Onion' },
      { quantity: '3 cloves', name: 'Garlic' },
      { quantity: '1 cup', name: 'White Wine' },
      { quantity: '1 liter', name: 'Vegetable Stock' },
      { quantity: '50 grams', name: 'Parmesan Cheese' },
      { quantity: '2 tbsp', name: 'Butter' },
    ],
    directions: [
      { title: 'High-Heat Caramelization', image: dir110, instruction: 'Peel, seed, and cut your butternut squash into neat 1-centimeter cubes. Toss them with olive oil and a pinch of salt, then spread them in a single layer on a baking sheet. Roast at 200°C for 25 minutes. The Sensory Cue: Look for the edges of the squash cubes to turn a deep golden-brown and wrinkle slightly. This roasting step concentrates the natural sugars of the squash, providing a sweet flavor balance to the savory rice base.' },
      { title: 'Toasting the Starchy Grain', image: dir210, instruction: 'Melt the butter in a wide, heavy-bottomed pan over medium heat. Sauté the finely chopped onion and garlic for 3 minutes until soft. Add the dry Arborio rice directly into the pan. The Pro Tip: Stir the dry rice continuously in the melted butter for 2 minutes until the edges of the grains turn translucent while the center remains opaque. This toasts the outer shell of the rice, preventing it from turning into a mushy porridge during the long simmering process.' },
      { title: 'The Gradual Starch Extraction', image: dir310, instruction: 'Pour in the dry white wine to deglaze the pan, stirring until it is completely absorbed by the rice. Keep your vegetable stock simmering in a separate pot on the back burner. Add the warm stock one ladle at a time, stirring the rice almost continuously. The Golden Rule: Wait until the rice absorbs almost all the liquid in the pan before adding the next ladle. The constant friction of the rice grains rubbing against each other rubs off the surface starches, creating a velvety, ultra-creamy sauce without needing any cream.' },
      { title: `The Creamy "All'Onda" Fold`, image: dir410, instruction: `When the rice is al dente (tender with a slight bite in the center), remove the pan from the heat. Fold in the roasted butternut squash cubes and the finely grated parmesan cheese. The Styling Tip: Give the pan a few vigorous shakes—the risotto should move smoothly like a slow wave (what Italians call all'onda). Spoon it onto flat rimmed plates, tap the bottom of the plate to let it spread evenly, and garnish with crisp sage leaves or a few toasted pine nuts.` },
    ],
    videoUrl: 'https://www.youtube.com/embed/EX9WKmR-OB8?si=CqtcPraaRkORhiac',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:11,
      image: recipe11,
      rating: 4.6,
      category: 'Vegetarian',
      title: 'Vegetable and Halloumi Grilled Skewers',
      time: '75 min',
      cuisine: 'American',
      servings:"Serves 1",
      flag: flag9,
      difficulty: 'Advanced',
      tags: ['VEGETARIAN', 'HEALTHY', 'GLUTEN-FREE', 'DAIRY-FREE'],
       description: 'These vegetable and halloumi grilled skewers are packed with colorful vegetables, smoky grilled flavor, and satisfying protein from halloumi cheese. Bell peppers, zucchini, and onions provide vitamins, fiber, and antioxidants that support balanced nutrition and freshness. Halloumi cheese adds a rich savory texture while supplying protein and calcium that make the skewers more filling and satisfying. Olive oil and oregano create a flavorful herb coating that enhances the charred vegetables beautifully during grilling. Every skewer delivers a healthy balance of smoky flavor, nutrition, and vibrant Mediterranean-inspired ingredients.',
    description2: 'This grilled skewer recipe combines fresh vegetables with golden halloumi cheese to create a flavorful and nourishing vegetarian meal. Bell peppers and zucchini provide natural sweetness, hydration, and essential vitamins while red onions add savory depth after grilling. Halloumi cheese offers a salty and satisfying texture that pairs perfectly with the smoky charred vegetables. Olive oil and herbs enhance the ingredients with rich Mediterranean flavor and healthy fats for better taste balance. Finished with fresh lemon juice, these skewers deliver freshness, protein, and grilled comfort in every bite.',
    ingredients: [
      { quantity: '250 grams', name: 'Halloumi Cheese' },
      { quantity: '2 pieces', name: 'Bell Peppers' },
      { quantity: '1 piece', name: 'Zucchini' },
      { quantity: '1 piece', name: 'Red Onion' },
      { quantity: '3 tbsp', name: 'Olive Oil' },
      { quantity: '1 tsp', name: 'Dried Oregano' },
      { quantity: '1/2 tsp', name: 'Black Pepper' },
      { quantity: '1 piece', name: 'Lemon' },
    ],
    directions: [
      { title: 'Geometric Precision Chopping', image: dir111, instruction: 'Cut your halloumi cheese, bell peppers, zucchini, and red onion into uniform, thick 3-centimeter squares. The Pro Tip: Cutting the cheese and vegetables to the exact same dimension ensures that every single ingredient makes firm contact with the flat grill surface at the same time, preventing the smaller pieces from staying raw while the larger items scorch.' },
      { title: 'The Herb and Lipid Infusion', image: dir211, instruction: 'In a wide mixing bowl, whisk together the olive oil, dried oregano, and freshly cracked black pepper. Add the cheese and vegetable squares into the bowl, tossing gently with your hands to coat every surface with a thin layer of seasoned oil. Let the mixture sit at room temperature for 15 minutes so the porous halloumi absorbs the herbaceous flavors.' },
      { title: 'Alternating Taut Threading', image: dir311, instruction: 'Carefully thread the marinated chunks onto your skewers, alternating between a colorful vegetable and a slice of firm halloumi cheese. The Golden Rule: Pack the ingredients closely together on the stick without smashing them completely flat. Packing them securely prevents the vegetables from spinning loosely when you try to flip the skewer on the grill, ensuring an even cook on both sides.' },
      { title: 'The Searing Char Finish', image: dir411, instruction: 'Preheat your grill or a heavy griddle pan to medium-high heat. Lay the skewers down and grill for 10–12 minutes, flipping them a quarter-turn every few minutes. The Sensory Cue: Halloumi is a unique cheese that does not melt away over an open flame; look for it to develop deep, beautiful dark brown grill marks while the edges of the red onions and peppers become lightly charred and tender. Transfer to a serving platter and finish with a bright, hot squeeze of fresh lemon juice across the skewers.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/RsThTMk-VGM?si=vOI3SZuYBImiYb8i',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:12,
      image: recipe12,
      rating: 5,
      category: 'Breakfasts',
      title: 'Ham and Cheese Croissant Breakfast Bake',
      time: '110 min',
      cuisine: 'Greek',
      servings:"Serves 8",
      flag: flag11,
      difficulty: 'Intermediate',
      tags: ['COMFORT FOOD', 'KID-FRIENDLY', 'HIGH-PROTEIN'],
        description: 'This ham and cheese croissant breakfast bake is filled with buttery layers, savory ham, and creamy cheese that create a rich and satisfying brunch dish. Croissants provide a flaky texture that absorbs the egg custard beautifully while remaining soft and comforting after baking. Eggs and milk contribute protein and calcium that make the bake hearty and nourishing for breakfast or brunch gatherings. Gruyere cheese adds a deep savory richness while ham provides flavorful protein that balances the buttery pastry layers perfectly. Every slice delivers warmth, creamy texture, and comforting homemade flavor ideal for sharing.',
    description2: 'This baked croissant casserole combines fluffy eggs, savory ham, and melted cheese into a rich and comforting breakfast dish packed with satisfying flavor. Croissants create buttery layers that soak up the creamy custard while keeping the texture soft and tender throughout the bake. Eggs and milk provide essential protein and nutrients that help make the dish filling and balanced for morning meals. Gruyere cheese adds a nutty richness that melts beautifully into the pastry and ham layers. Served warm from the oven, this breakfast bake offers indulgent comfort and crowd-pleasing flavor in every bite.',
    ingredients: [
      { quantity: '6 pieces', name: 'Croissants' },
      { quantity: '200 grams', name: 'Ham' },
      { quantity: '150 grams', name: 'Gruyere Cheese' },
      { quantity: '4 pieces', name: 'Eggs' },
      { quantity: '1.5 cups', name: 'Milk' },
      { quantity: '1/2 tsp', name: 'Dijon Mustard' },
      { quantity: '1/4 tsp', name: 'Nutmeg' },
      { quantity: '1/2 tsp', name: 'Salt' },
    ],
    directions: [
      { title: 'The Symmetrical Split Foundation', image: dir112, instruction: 'Using a sharp serrated knife, slice your 6 full croissants completely in half horizontally (like burger buns). The Pro Tip: If the croissants are fresh out of the bakery and extremely soft, arrange the split halves open-faced on a large baking sheet and toast them at 150°C for 6–8 minutes until the cut surfaces feel dry and slightly crisp to the touch. This par-toasting step reinforces the delicate, buttery interior layers of the full pastry, ensuring they can carry the heavy weight of the custard without collapsing into a flat, gummy mass.' },
      { title: 'The Shingled Cross-Section Interlock', image: dir212, instruction: 'Arrange the bottom halves of the full croissants snugly along the floor of a well-greased rectangular baking dish, letting their sides overlap slightly like roof shingles. Layer the sliced or diced ham evenly over this pastry base, and scatter exactly two-thirds of your finely grated Gruyère cheese directly onto the meat. The Golden Rule: Place the top halves of the croissants back over the cheese matrix, aligning them neatly to reconstruct the full croissant shapes. This creates a beautifully organized, double-layer sandwich structure that slices cleanly into individual portions later.' },
      { title: 'The Slow Capillary Saturation', image: dir312, instruction: 'In a separate mixing bowl, vigorously whisk together the eggs, milk, Dijon mustard, salt, and ground nutmeg until completely uniform and free of streaks. The Kinetic Trick: Pour the liquid custard slowly into the pan, focusing specifically on pouring it into the open seams between the full croissants and over their tops. Press down gently on the crowns of the full croissants with a flat silicone spatula to force them to submerge briefly. Let the dish sit completely undisturbed on the counter for 15–20 minutes so the custard can travel upward through the delicate capillary layers of the whole pastries.' },
      { title: 'The Domed Flaky Crown Finish', image: dir412, instruction: `Scatter the remaining one-third of the sharp Gruyère cheese uniformly across the exposed crowns of the full croissants. Slide the dish into a preheated oven at 180°C and bake for 35–40 minutes. The Sensory Cue: Because full croissants house denser pockets of dough, watch for the entire center of the dish to puff up dramatically. The bake is perfectly finished when you shake the pan and the custard beneath the pastry doesn't jiggle, and the cheese melted over the croissant ridges turns bubbly, deeply caramelized, and shatteringly crisp. Let it cool for 5 minutes before slicing down the natural seams between the whole croissants.` },
    ],
    videoUrl: 'https://www.youtube.com/embed/owEt56RyX1Q?si=lUr20ZZVj-ZDSgSH',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,
    },
    {
      id:13,
      image: recipe13,
      rating: 4.5,
      category: 'Salads',
      title: 'Asian Sesame Noodles with Crunchy Veggies',
      time: '60 min',
      cuisine: 'Moroccan',
      servings:"Serves 10",
      flag: flag2,
      difficulty: 'Beginner',
      tags: ['COMFORT FOOD', 'KID-FRIENDLY', 'DAIRY-FREE'],
      description: 'This Asian sesame noodle salad combines tender noodles with crunchy vegetables and a bold sesame dressing for a refreshing and flavorful meal. Carrots and cucumbers provide fiber, hydration, and essential vitamins that add freshness and texture to the dish. Sesame oil and sesame seeds contribute healthy fats and nutty richness that enhance the savory umami flavor beautifully. Soy sauce and rice vinegar create a balanced dressing that coats the noodles with deep aromatic flavor while keeping the salad light. Every bowl delivers a satisfying combination of crunch, freshness, and comforting noodle texture.',
    description2: 'This vibrant sesame noodle salad blends crisp vegetables with flavorful noodles to create a balanced dish filled with texture and nutrition. Fresh cucumbers and carrots provide refreshing crunch and natural nutrients while sesame seeds add richness and healthy fats. Soy sauce, sesame oil, and rice vinegar create a savory dressing with a bold umami flavor that ties all the ingredients together perfectly. The noodles remain tender and silky while absorbing the aromatic sesame coating beautifully. Served chilled or at room temperature, this salad offers freshness, comfort, and satisfying flavor in every bite.',
    ingredients: [
      { quantity: '200 grams', name: 'Noodles' },
      { quantity: '1 piece', name: 'Carrot' },
      { quantity: '1 piece', name: 'Cucumber' },
      { quantity: '3 tbsp', name: 'Soy Sauce' },
      { quantity: '2 tbsp', name: 'Sesame Oil' },
      { quantity: '1 tbsp', name: 'Rice Vinegar' },
      { quantity: '1 tbsp', name: 'Honey' },
      { quantity: '2 tbsp', name: 'Sesame Seeds' },
    ],
    directions: [
      { title: 'The Shock-Chill Noodle Stop', image: dir113, instruction: 'Cook your noodles in a large pot of boiling water according to the package directions. The Pro Tip: The exact second the noodles reach an al dente texture, drain them into a colander and rinse them immediately under a stream of ice-cold running water. This instantaneous temperature drop halts the cooking process completely and washes away excess surface starches, preventing the noodles from turning gummy or sticking together into a massive clump.' },
      { title: 'Emulsifying the Bold Sesame Dressing', image: dir213, instruction: 'In a small bowl, whisk together the soy sauce, toasted sesame oil, rice vinegar, and honey. Whisk vigorously until the sweet honey completely dissolves and blends into the oil and vinegar, forming a smooth, uniform, dark amber dressing that clings to the noodles easily.' },
      { title: 'Precision Julienne Vegetable Prep', image: dir313, instruction: 'Slice your carrot,tri-color capcicums,broccoli and cucumber into thin, matchstick-sized strips (a classic julienne cut). The Golden Rule: When prepping the cucumber, slice only the firm outer flesh and discard the wet, watery seed core. Leaving out the watery center ensures your salad stays incredibly crisp and crunchy, preventing excess water from bleeding out and diluting your bold sesame dressing over time.ALso prep the shrimp.And in a sauce pan add broccoli,shrimp and capcicum and boil it for 10 mins,add salt and pepper as required.' },
      { title: 'The High-Contrast Toss', image: dir413, instruction: 'In a large serving bowl, combine the cold, slippery noodles, the julienned crunchy vegetables, and the emulsified dressing. Use a pair of tongs to lift and toss the ingredients until everything is glossy and evenly coated. The Styling Tip: Pile the noodles high in a wide serving bowl and scatter the white sesame seeds across the top just before serving to create a clean, professional, high-contrast look.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/LEqId4lkDho?si=453mMNRWMgo6hmwA',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,
    },
    {
      id:14,
      image: recipe14,
      rating: 4.5,
      category: 'Breads',
      title: 'Herbed Focaccia Bread with Olive Oil Drizzle',
      time: '80 min',
      cuisine: 'Spanish',
      servings:"Serves 2",
      flag: flag18,
      difficulty: 'Intermediate',
      tags: ['VEGETARIAN', 'COMFORT FOOD', 'DAIRY-FREE', 'KID-FRIENDLY'],
       description: 'This herbed focaccia bread features a soft airy interior and a crispy olive oil crust that creates a comforting and flavorful homemade bread experience. Olive oil provides healthy fats and rich Mediterranean flavor while rosemary adds aromatic freshness and natural herbal depth. The slow-risen dough develops a light texture that remains tender inside while turning golden and crisp during baking. Flaky sea salt enhances the savory flavor and balances the richness of the olive oil beautifully. Every slice delivers warmth, softness, and wholesome rustic flavor perfect for meals or sharing.',
    description2: 'This soft focaccia bread combines olive oil, rosemary, and freshly baked dough to create a rich and comforting bread filled with Mediterranean-inspired flavor. Olive oil keeps the bread moist while contributing healthy fats and a smooth savory finish throughout every bite. Fresh rosemary adds earthy aroma and freshness that pairs perfectly with the golden crisp crust. The airy dough texture makes the bread light and fluffy inside while remaining crunchy around the edges after baking. Served warm on its own or with meals, this focaccia offers simple ingredients transformed into delicious homemade comfort.',
    ingredients: [
      { quantity: '3 cups', name: 'All-Purpose Flour' },
      { quantity: '1 tsp', name: 'Active Dry Yeast' },
      { quantity: '1 cup', name: 'Warm Water' },
      { quantity: '4 tbsp', name: 'Olive Oil' },
      { quantity: '1 tsp', name: 'Salt' },
      { quantity: '2 tbsp', name: 'Fresh Rosemary' },
      { quantity: '1 tsp', name: 'Flaky Sea Salt' },
    ],
    directions: [
      { title: 'The Warm Yeast Activation', image: dir114, instruction: 'In a large mixing bowl, stir the active dry yeast into 1 cup of warm water (aim for roughly 40°C to ensure it activates properly) along with a tiny pinch of flour. Let it sit undisturbed for 5 minutes until a thick layer of foamy bubbles forms on the surface. Add the all-purpose flour, 2 tablespoons of the olive oil, and the fine salt. Knead the dough vigorously for about 5–7 minutes until it becomes smooth, soft, and slightly tacky. Cover and let it rise in a warm spot for 1 hour until doubled in size.' },
      { title: 'The Deep-Dimple Stretching', image: dir214, instruction: 'Pour 1 tablespoon of olive oil onto the bottom of a rectangular metal baking pan. Transfer your risen dough into the pan, gently stretching it out with your hands to fill the corners. The Pro Tip: Press your fingertips straight down into the dough until you feel the metal bottom of the pan, creating deep, dramatic dimples across the entire surface. These characteristic indentations act as mini reservoirs that catch and hold pools of flavorful olive oil during the baking process.' },
      { title: 'The Herb and Oil Reservoir Fill', image: dir314, instruction: 'Drizzle the remaining tablespoon of olive oil evenly over the dimpled surface, letting it pool in the deep finger pockets. Strip the fresh rosemary leaves from their woody stems and scatter them across the dough, then finish with a generous sprinkle of flaky sea salt. The Golden Rule: Let the dough rest uncovered in the pan for a second rise of 15 minutes before baking; this relaxes the gluten and allows the dough to puff up beautifully around the olive oil pockets.' },
      { title: 'The Golden Crisp Bake', image: dir414, instruction: `Slide the pan into a hot oven preheated to 220°C and bake for 20–25 minutes. The Sensory Cue: Watch for the top to turn a deep, uniform golden-brown and the bottom edges to become crisp from frying lightly in the pan's olive oil. Transfer the focaccia to a wire rack to cool slightly so the bottom crust stays perfectly crunchy instead of trapping steam against the pan.` },
    ],
    videoUrl: 'https://www.youtube.com/embed/E_EZ78hwWB8?si=T508CsmjKLfWhWtV',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,
    },
    {
      id:15,
      image: recipe15,
      rating: 4.9,
      category: 'Gluten-Free',
      title: 'Flourless Peanut Butter Chocolate Cookies',
      time: '115 min',
      cuisine: 'Spanish',
      servings:"Serves 5",
      flag: flag18,
      difficulty: 'Easy',
      tags: ['GLUTEN-FREE', 'DAIRY-FREE', 'DESSERTS', 'KID-FRIENDLY'],
       description: 'These flourless peanut butter chocolate cookies are rich, fudgy, and packed with nutty flavor while remaining naturally gluten-free and satisfying. Peanut butter provides protein and healthy fats that create a soft chewy texture and help make the cookies filling. Dark chocolate chips add sweetness and antioxidants that balance the rich peanut butter flavor beautifully in every bite. Eggs help bind the dough while adding structure and a tender texture without the need for flour. Every cookie delivers a comforting combination of sweetness, chocolate richness, and melt-in-the-mouth texture perfect for dessert cravings.',
    description2: 'This flourless cookie recipe combines peanut butter and chocolate into a rich dessert filled with bold flavor and soft fudgy texture. Peanut butter contributes protein, healthy fats, and creamy richness that keep the cookies moist and satisfying after baking. Chocolate chips melt throughout the dough, creating pockets of sweetness and deep cocoa flavor in every bite. The simple ingredient combination keeps the cookies naturally gluten-free while maintaining a soft bakery-style consistency. Served warm or cooled, these cookies offer a delicious blend of nuttiness, chocolate, and homemade comfort.',
    ingredients: [
      { quantity: '1 cup', name: 'Peanut Butter' },
      { quantity: '1 cup', name: 'Sugar' },
      { quantity: '1 piece', name: 'Egg' },
      { quantity: '1 tsp', name: 'Vanilla Extract' },
      { quantity: '1/2 cup', name: 'Chocolate Chips' },
      { quantity: '1/2 tsp', name: 'Baking Soda' },
      { quantity: '1 pinch', name: 'Salt' },
    ],
    directions: [
      { title: 'Creaming the Gluten-Free Dough', image: dir115, instruction: 'In a medium mixing bowl, combine the creamy peanut butter and granulated sugar. Use a stiff wooden spoon or a spatula to beat them together for about 2 minutes until the sugar grains are evenly distributed throughout the thick nut fat. Add the whole egg, vanilla extract, and baking soda. The Pro Tip: Beat the egg vigorously into the peanut butter mixture until the dough suddenly tightens up and pulls away from the sides of the bowl. This physical change signals that the egg proteins have emulsified with the oils, providing the essential structure needed to keep these flourless cookies from spreading into flat puddles on the tray.' },
      { title: 'The Chocolate Fold-In', image: dir215, instruction: 'Gently fold your chocolate chips into the firm peanut butter dough until they are scattered evenly throughout. The Golden Rule: Do not over-mix once the chocolate chips go in, or the friction heat from your spoon can cause the chocolate fats to smear into the peanut butter dough, changing the final texture of the cookie.' },
      { title: 'Criss-Cross Tension Shaping', image: dir315, instruction: 'Scoop up table-spoon sized portions of the dough and roll them between your palms into 12 neat, smooth balls. Arrange them on a baking sheet lined with parchment paper, leaving 5 centimeters of space between each. The Sensory Cue: Use the tines of a metal fork to gently press a criss-cross pattern onto the top of each ball, flattening it to about 1 centimeter of thickness. This classic pattern breaks up the dense surface tension of the peanut butter, helping the cookies bake evenly all the way through to the center.' },
      { title: 'The Soft-Set Pan Cool', image: dir415, instruction: 'Bake the cookies at 175°C for exactly 10–12 minutes until the outer edges turn a light golden-brown and look firm to the touch. The Golden Rule: When you pull them out of the oven, the centers will still look incredibly soft and fragile. Leave the cookies undisturbed on the hot baking sheet for a full 5 minutes; they will finish cooking through from the residual heat of the pan, setting into a rich, fudgy texture that holds together perfectly when lifted.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/jO-Es5fsLzY?si=YK1zwjEUVTH7gEt4',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:16,
      image: recipe16,
      rating: 4.9,
      category: 'Drinks',
      title: 'Refreshing Mint and Cucumber Lemonade',
      time: '85 min',
      cuisine: 'Italian',
      servings:"Serves 6",
      flag: flag14,
      difficulty: 'Easy',
      tags: ['HEALTHY', 'LOW-CARB', 'DAIRY-FREE', 'GLUTEN-FREE', 'KID-FRIENDLY'],
      description: 'This refreshing mint and cucumber lemonade is packed with hydration, vitamin C, and natural antioxidants from fresh lemon, mint, and cucumber. The crisp cucumber helps cool and refresh the body while mint supports healthy digestion and adds an invigorating aroma. Fresh lemon juice delivers immunity-boosting nutrients and bright citrus flavor in every sip. This light and revitalizing drink is perfect for staying refreshed and energized during warm days.',
description2: 'The naturally hydrating ingredients make this lemonade a healthier alternative to sugary soft drinks and artificial beverages. Cucumber contains water-rich nutrients that help keep the body cool and refreshed for longer periods. Mint and lemon work together to create a soothing and digestive-friendly summer drink packed with freshness. Served chilled over ice, this vibrant lemonade is both nourishing and incredibly satisfying.',
    ingredients: [
      { quantity: '1 piece', name: 'Cucumber' },
      { quantity: '1 bunch', name: 'Fresh Mint' },
      { quantity: '3 pieces', name: 'Lemon' },
      { quantity: '4 tbsp', name: 'Sugar' },
      { quantity: '4 cups', name: 'Cold Water' },
      { quantity: '2 cups', name: 'Ice Cubes' },
    ],
    directions: [
      { title: 'Cold-Infused Mint Simple Syrup', image: dir116, instruction: 'In a small saucepan, combine the sugar and 1 cup of hot water, stirring over low heat just until the sugar grains completely dissolve. Remove the pan from the heat immediately, submerge the fresh mint leaves into the warm liquid, and cover with a lid to steep for 10 minutes. The Pro Tip: Do not boil the mint leaves directly in the syrup. Steeping them off the heat extracts the bright, crisp, essential aromatic oils without cooking the leaves, preventing a bitter, vegetal, or "cooked tea" aftertaste. Strain and cool completely.' },
      { title: 'Clarifying the Cucumber Essence', image: dir216, instruction: 'Peel your cucumber, chop it roughly, and drop the pieces into a high-speed blender. Process on high until it forms a completely liquefied puree. The Golden Rule: Pour the puree through a fine-mesh sieve or a layer of cheesecloth, using the back of a spoon to press down and extract only the clear, translucent green juice. Leaving the fibrous pulp out ensures your final lemonade has a smooth, elegant mouthfeel rather than a gritty, thick texture.' },
      { title: 'The Chill-Mix Integration', image: dir316, instruction: 'In a large glass pitcher, combine the cooled mint simple syrup, the clarified green cucumber juice, freshly squeezed lemon juice, and the remaining 3 cups of cold water. Stir thoroughly with a long spoon to integrate the sweet syrup with the crisp vegetable and tart citrus layers.' },
      { title: 'The Layered Presentation', image: dir416, instruction: 'Fill your serving glasses to the brim with ice cubes just before pouring the drink. The Styling Tip: Slap a few fresh mint leaves between your palms before dropping them on top of the liquid—this physical pop bursts the surface cells, instantly releasing a fresh mint aroma. Garnish the rim with paper-thin rounds of cucumber for an upscale, spa-like aesthetic.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/5wz7-mQSr4Q?si=GKSUlyaeCUVlaZY0',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:17,
      image: recipe17,
      rating: 4.9,
      category: 'Seafood',
      title: 'Grilled Salmon with Lemon Butter Sauce',
      time: '50 min',
      cuisine: 'Korean',
      servings:"Serves 3",
      flag: flag6,
      difficulty: 'Intermediate',
      tags: ['HIGH-PROTEIN', 'HEALTHY', 'GLUTEN-FREE', 'DAIRY-FREE'],
       description: 'This grilled salmon with lemon butter sauce is rich in heart-healthy omega-3 fatty acids, high-quality protein, and essential nutrients that support overall wellness. Salmon helps promote brain function, muscle recovery, and healthy skin while delivering a deliciously tender texture. The buttery lemon sauce enhances the natural richness of the fish without overpowering its fresh flavor. Every bite offers a perfect balance of nutrition, freshness, and savory satisfaction.',
description2: 'Fresh lemon and dill bring antioxidants, vitamins, and refreshing citrus notes that brighten the entire dish beautifully. The lean protein in salmon helps keep meals filling and balanced while supporting energy and strength throughout the day. Olive oil and herbs contribute healthy fats and aromatic depth that elevate the restaurant-quality flavor. This wholesome seafood dish is elegant enough for special occasions yet healthy enough for everyday dinners.',
    ingredients: [
      { quantity: '4 pieces', name: 'Salmon Fillets' },
      { quantity: '3 tbsp', name: 'Butter' },
      { quantity: '2 pieces', name: 'Lemon' },
      { quantity: '3 cloves', name: 'Garlic' },
      { quantity: '2 tbsp', name: 'Olive Oil' },
      { quantity: '1 tbsp', name: 'Fresh Dill' },
      { quantity: '1/2 tsp', name: 'Salt' },
      { quantity: '1/4 tsp', name: 'Black Pepper' },
    ],
    directions: [
      { title: 'Moisture Removal and Searing Prep', image: dir117, instruction: 'Pat the salmon fillets completely dry on both sides using a thick paper towel. Season the flesh sides generously with salt and black pepper just before cooking. The Pro Tip: Removing all surface moisture prevents the fish from steaming in the pan, allowing the natural proteins to form a beautiful, even, deeply caramelized golden crust when it makes contact with the hot oil.' },
      { title: 'The Cast-Iron Crisp Sear', image: dir217, instruction: 'Heat the olive oil in a heavy-bottomed skillet or cast-iron pan over medium-high heat until it begins to shimmer. Place the salmon fillets in the pan skin-side down first (contrary to the original step, starting skin-side down renders the fat pocket underneath the skin, preventing curling). Press down gently with a spatula for 10 seconds to ensure even contact. Sear for 4 minutes until the skin is shatteringly crisp, then flip gently and cook the flesh side for another 3 minutes. Remove the salmon and set aside on a warm plate.' },
      { title: 'Emulsifying the Pan Sauce Fond', image: dir317, instruction: 'Turn the heat down to low and drop the butter into the same pan, letting it melt into the residual salmon oils. Add the minced garlic and sauté for 1 minute until fragrant but not browned. Pour in the freshly squeezed lemon juice, using a wooden spoon to scrape up any browned bits stuck to the bottom of the pan. The Golden Rule: Let the sauce simmer on low for 2 minutes to reduce slightly and emulsify into a glossy, cohesive glaze. (Note: If adhering strictly to the "dairy-free" tag, swap standard butter for a high-quality plant-based butter alternative).' },
      { title: 'The Gourmet Plating finish', image: dir417, instruction: 'Place the seared salmon fillets onto individual serving plates with the crispy skin facing upward or slightly tilted. The Styling Tip: Spoon the luxurious, hot garlic-lemon butter sauce around and over the lower portion of the fish, leaving the top crust dry to preserve its crunch. Garnish generously with freshly chopped dill weeds to cut through the rich fats with an herbaceous punch.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/ACfeJuZuyxY?si=brCti3_QIk9A3orT',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:18,
      image: recipe18,
      rating: 4.5,
      category: 'Soups',
      title: 'Vegetable Lentil Stew with Fresh Herbs',
      time: '80 min',
      cuisine: 'Brazilian',
      servings:"Serves 1",
      flag: flag16,
      difficulty: 'Easy',
      tags: ['VEGETARIAN', 'HEALTHY', 'MEAL PREP', 'ONE-POT', 'DAIRY-FREE', 'GLUTEN-FREE'],
     description: 'This vegetable lentil stew is loaded with plant-based protein, dietary fiber, iron, and nourishing vegetables that create a deeply satisfying meal. Red lentils provide lasting energy while helping support digestion and overall wellness through their rich nutrient profile. The combination of carrots, celery, tomatoes, and herbs creates a flavorful broth filled with vitamins and minerals. Every spoonful delivers comforting warmth, wholesome ingredients, and rich homemade flavor.',
description2: 'The hearty lentils and vegetables create a naturally filling one-pot meal that is both healthy and budget-friendly for everyday cooking. Fresh herbs and aromatic spices add depth while supporting digestion and enhancing the earthy flavors of the stew. The creamy texture develops naturally from the lentils without needing heavy cream or processed ingredients. This nourishing dish is ideal for meal prep, cold evenings, or anyone seeking a healthy comfort meal.',
    ingredients: [
      { quantity: '1.5 cups', name: 'Red Lentils' },
      { quantity: '2 pieces', name: 'Carrots' },
      { quantity: '2 pieces', name: 'Celery Stalks' },
      { quantity: '1 piece', name: 'Onion' },
      { quantity: '3 cloves', name: 'Garlic' },
      { quantity: '1 can', name: 'Diced Tomatoes' },
      { quantity: '1 liter', name: 'Vegetable Stock' },
      { quantity: '1 tsp', name: 'Cumin' },
    ],
    directions: [
      { title: 'Building the Mirepoix Foundation', image: dir118, instruction: 'Heat a splash of olive oil in a large, heavy-bottomed Dutch oven over medium heat. Add the finely diced onion, carrots, and celery stalks, cooking for about 5 minutes. The Sensory Cue: You are looking for the onions to turn translucent and the carrots to sweeten slightly without picking up dark brown edges. Add the minced garlic during the last minute of sweating to release its aromatic oils without burning it.' },
      { title: 'Blooming the Cumin and Toasting Lentils', image: dir218, instruction: 'Rinse the red lentils thoroughly under cold water until the water runs clear, then drain. Add the lentils, diced tomatoes, and ground cumin directly into the softened vegetables. The Pro Tip: Stir the dry lentils continuously in the hot pan for 1 to 2 minutes before adding any liquid. Toasting the lentils lightly in the fat coats them evenly and locks in a nutty undertone that deepens the overall flavor profile of the stew.' },
      { title: 'The Rapid Low-Simmer Braise', image: dir318, instruction: 'Pour in the vegetable stock and stir well, scraping the bottom of the pot to ensure no lentils are stuck. Bring the mixture to a rolling boil, then immediately turn the heat down to low, cover with a tight-fitting lid, and simmer gently for 25–30 minutes. Red lentils break down much faster than brown varieties, creating a naturally thick, creamy, and velvety broth base without needing added flour or starches.' },
      { title: 'The Herb and Acid Calibration', image: dir418, instruction: 'Once the lentils are tender and creamy, turn off the heat. Season with extra salt and pepper to taste. The Styling Tip: Ladle the hearty stew into deep ceramic bowls. Just before serving, stir in a handful of fresh chopped herbs (like parsley or cilantro) and finish with a tiny squeeze of fresh lemon juice or a drizzle of extra virgin olive oil. The hit of fresh acid wakes up the earthy lentils and brightens the entire dish.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/mdT3tFEug00?si=wFLHuT1twW7tODtp',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:19,
      image: recipe19,
      rating: 4.8,
      category: 'Soups',
      title: 'Classic Minestrone Soup with Fresh Vegetables',
      time: '45 min',
      cuisine: 'Brazilian',
      servings:"Serves 3",
      flag: flag16,
      difficulty: 'Easy',
      tags: ['COMFORT FOOD', 'VEGETARIAN', 'MEAL PREP', 'ONE-POT', 'DAIRY-FREE'],
       description: 'This classic minestrone soup is filled with fiber-rich beans, fresh vegetables, pasta, and savory tomato broth that create a balanced and nutritious meal. Cannellini beans provide plant protein and long-lasting energy while vegetables contribute essential vitamins and minerals. The rich tomato base adds comforting flavor along with antioxidants that support overall wellness and immunity. Every bowl is hearty, colorful, and packed with wholesome homemade goodness.',
description2: 'The combination of beans, vegetables, and pasta makes this soup both comforting and deeply satisfying without feeling overly heavy. Olive oil and fresh vegetables provide healthy nutrients while the broth stays rich, flavorful, and warming. The naturally balanced ingredients make this soup ideal for healthy family dinners or simple meal preparation throughout the week. Served hot with fresh herbs or bread, this nourishing soup becomes the perfect cozy comfort meal.',
    ingredients: [
      { quantity: '1 can', name: 'Cannellini Beans' },
      { quantity: '2 pieces', name: 'Zucchini' },
      { quantity: '2 pieces', name: 'Carrots' },
      { quantity: '1 piece', name: 'Onion' },
      { quantity: '1 can', name: 'Diced Tomatoes' },
      { quantity: '1 cup', name: 'Small Pasta' },
      { quantity: '1 liter', name: 'Vegetable Stock' },
      { quantity: '2 tbsp', name: 'Olive Oil' },
    ],
    directions: [
      { title: 'Sweating the Aromatic Base', image: dir119, instruction: 'Heat the olive oil in a large soup pot over medium heat. Add the diced onion, carrots, and zucchini cubes, cooking for 5 minutes. The Pro Tip: Cut your zucchini and carrots into uniform squares that match the size of your small pasta shape. Sweating them gently at the start caramelizes their natural sugars, ensuring the vegetables stay tender but firm inside the hot tomato broth later.' },
      { title: 'Infusing the Rich Tomato Broth', image: dir219, instruction: 'Dump the canned diced tomatoes along with their rich juices into the pot, followed by the vegetable stock. Bring the mixture to a rapid boil, then drop the heat to medium-low. Cover and let it simmer for 10 minutes so the tomato acidity mellows out and marries with the sweet vegetable base.' },
      { title: 'The Direct Pasta Cook Starch Trick', image: dir319, instruction: 'Drain and rinse the cannellini beans, then add them into the bubbling broth along with the dry, small pasta shapes (like ditalini or mini shells). Cook uncovered for 10 minutes, stirring occasionally. The Golden Rule: Cooking the pasta directly inside the soup broth allows it to absorb the savory tomato flavors, while the starches released by the boiling pasta naturally thicken the minestrone into a rich, comforting consistency.' },
      { title: 'The Italian Trattoria Presentation', image: dir419, instruction: 'Ladle the piping-hot minestrone into wide, shallow soup bowls, making sure every portion gets an even mix of beans, pasta, and vibrant vegetables. The Styling Tip: Finish each bowl with a light dusting of finely grated parmesan cheese and a delicate, circular drizzle of high-quality extra virgin olive oil over the surface. The heat from the soup will melt the cheese instantly, creating a savory, glossy pattern on top.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/TTvBfBHa1qQ?si=etEn-bdIEjLqXZIf',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,
    },
    {
      id:20,
      image: recipe20,
      rating: 5,
      category: 'Appetizers',
      title: 'Cheesy Spinach and Artichoke Dip Platter',
      time: '65 min',
      cuisine: 'American',
      servings:"Serves 6",
      flag: flag9,
      difficulty: 'Easy',
      tags: ['VEGETARIAN', 'KID-FRIENDLY', 'GLUTEN-FREE'],
     description: 'This cheesy spinach and artichoke dip is rich, creamy, and packed with comforting flavors along with nutrients from spinach and artichokes. Spinach provides iron, fiber, and antioxidants while the artichokes contribute vitamins and digestive-supporting nutrients. The blend of cream cheese, mozzarella, and parmesan creates a satisfying texture with rich savory flavor in every bite. Warm, bubbly, and flavorful, this appetizer is perfect for parties, gatherings, or snack platters.',
description2: 'The combination of leafy greens and creamy cheeses creates a balanced appetizer that feels indulgent while still containing nutritious ingredients. Garlic and herbs enhance the flavor naturally while adding aromatic depth and antioxidant properties. Served with vegetables, crackers, or pita chips, the dip becomes a crowd-pleasing dish suitable for every occasion. Its creamy texture and golden cheesy crust make it impossible to resist straight from the oven.',
    ingredients: [
      { quantity: '250 grams', name: 'Cream Cheese' },
      { quantity: '1 cup', name: 'Frozen Spinach' },
      { quantity: '1 can', name: 'Artichoke Hearts' },
      { quantity: '1 cup', name: 'Sour Cream' },
      { quantity: '1 cup', name: 'Mozzarella Cheese' },
      { quantity: '50 grams', name: 'Parmesan Cheese' },
      { quantity: '3 cloves', name: 'Garlic' },
      { quantity: '1/2 tsp', name: 'Salt' },
    ],
    directions: [
      { title: 'The Ultimate Moisture Drain', image: dir120, instruction: 'Thaw the frozen spinach completely. Place it inside a clean kitchen towel, gather the corners, and twist firmly over the sink to wring out every possible drop of water. Drain the canned artichoke hearts and press them gently with a paper towel before giving them a rough chop. The Pro Tip: Removing excess liquid from both vegetables prevents the dip from breaking, separating, or turning watery in the oven, ensuring a thick, restaurant-quality spread.' },
      { title: 'Building the Velvety Base', image: dir220, instruction: 'In a large mixing bowl, beat the softened cream cheese and sour cream together until completely smooth and free of lumps. Stir in the minced garlic and salt. Fold in the bone-dry spinach and chopped artichoke hearts until they are uniformly distributed throughout the cream base.' },
      { title: 'Folding in the Melty Cheese', image: dir320, instruction: 'Add the entire cup of shredded mozzarella and exactly half of the finely grated parmesan cheese directly into the mixture. Stir well to incorporate. The Styling Tip: Transfer the dense mixture into an oven-safe ceramic skillet or baking dish, using the back of a spatula to smooth the top into an even layer that fills the corners.' },
      { title: 'The Golden, Bubbling Broil', image: dir420, instruction: 'Scatter the remaining half of the parmesan cheese over the top of the dip to form a crust. Bake in a preheated oven at 180°C for 25 minutes. The Sensory Cue: You are looking for the edges to bubble vigorously and the parmesan on top to melt into a deeply golden, speckled crust. Let it cool for 5 minutes before serving alongside a colorful platter of warm pita chips, crisp crackers, and fresh vegetables.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/vVGJgihkM6w?si=eYq6wGxlrHZa8nO2',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:21,
      image: recipe21,
      rating: 4.8,
      category: 'Breads',
      title: 'Savory Garlic Herb Butter Dinner Rolls',
      time: '85 min',
      cuisine: 'Mexican',
      servings:"Serves 3",
      flag: flag8,
      difficulty: 'Beginner',
      description: 'This savory garlic herb butter dinner roll recipe creates soft, fluffy bread rolls enriched with comforting flavors and wholesome ingredients. Milk, eggs, and butter provide protein and calcium while helping the rolls stay tender and moist after baking. Fresh herbs and garlic add aromatic flavor and natural antioxidants that elevate the homemade bread beautifully. These warm dinner rolls pair perfectly with soups, salads, and hearty family meals.',
      description2: 'The freshly baked rolls fill the kitchen with an irresistible buttery aroma while delivering a soft and airy texture in every bite. Homemade bread offers comforting carbohydrates for energy along with rich flavor from garlic herb butter brushed over the warm crust. The golden tops and pillowy centers create the perfect balance between crispy exterior and fluffy interior. These satisfying rolls are ideal for holiday dinners, family gatherings, or everyday comfort meals.',
      ingredients: [
        { quantity: '3 cups', name: 'All-Purpose Flour' },
        { quantity: '1 tsp', name: 'Active Dry Yeast' },
        { quantity: '1 cup', name: 'Warm Milk' },
        { quantity: '3 tbsp', name: 'Butter' },
        { quantity: '1 piece', name: 'Egg' },
        { quantity: '3 cloves', name: 'Garlic' },
        { quantity: '2 tbsp', name: 'Fresh Herbs' },
        { quantity: '1 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'Activating the Yeast and Kneading', image: dir121, instruction: 'In a large bowl, combine the warm milk (ideally between 38°C and 43°C) with the active dry yeast and a tiny pinch of sugar; let it sit for 5 minutes until frothy to ensure the yeast is alive. Add the all-purpose flour, beaten egg, melted butter, and salt. Mix into a shaggy dough, turn out onto a floured surface, and knead vigorously for 8 minutes until smooth and elastic. Place the dough ball into a greased bowl, cover with a damp cloth, and let it rise in a warm spot for 1 hour until doubled in size.' },
        { title: 'Precision Portioning and Shaping', image: dir221, instruction: 'Punch down the risen dough to release excess gas. Turn it out onto your counter and divide it into 12 equal pieces. The Pro Tip: To shape them perfectly, cup your hand over a dough piece against the counter and move it in a tight circular motion. This creates surface tension, forming a perfectly smooth, taut round ball. Arrange the 12 balls in a greased baking pan, leaving a small gap between each.' },
        { title: 'The Crucial Proofing Rise', image: dir321, instruction: 'Cover the baking pan loosely with a clean, light kitchen towel and let the rolls sit for a second rise of about 30 minutes. The Sensory Cue: Do not skip this step; you are looking for the rolls to expand, become visibly puffy, and gently press against one another. This build-up of air ensures the final baked rolls have a feather-light, tear-apart texture.' },
        { title: 'The Golden Bake and Herb Glaze', image: dir421, instruction: 'Bake the rolls in a preheated oven at 190°C for 18–20 minutes until the tops are a uniform deep golden brown. While they are baking, melt your remaining butter with minced garlic and finely chopped fresh herbs in a small saucepan. The Golden Rule: The very second the rolls come out of the oven, brush the hot crusts generously with the fragrant garlic herb butter. The intense residual heat will cook the raw garlic instantly, releasing an incredible aroma and sealing in moisture for ultra-soft rolls.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/MosqwvMkUzw?si=LwfAWyJaCsj9chnw',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:22,
      image: recipe22,
      rating: 4.5,
      category: 'BBQ & Grilling',
      title: 'Spicy Grilled Chicken Skewers with Lemon and Herbs',
      time: '30 min',
      cuisine: 'Turkish',
      servings:"Serves 10",
      flag: flag7,
      difficulty: 'Intermediate',
      tags: ['MEAT', 'HIGH-PROTEIN', 'SPICY', 'GLUTEN-FREE', 'DAIRY-FREE'],
      ddescription: 'This spicy grilled chicken skewer recipe is packed with lean protein, bold spices, and fresh herbs that create a healthy and flavorful grilled meal. Chicken breast provides muscle-supporting protein while lemon juice and olive oil help keep the meat tender and juicy during grilling. Garlic, paprika, cumin, and chili flakes add antioxidants and smoky depth that elevate every bite with vibrant flavor. The smoky char from the grill creates a satisfying texture while keeping the dish light and nutritious.',
      description2: 'The fresh herb and citrus marinade infuses the chicken with bright Mediterranean-inspired flavors while supporting a balanced high-protein diet. Olive oil contributes healthy fats that complement the warming spices and aromatic garlic beautifully. Served with salad, pita bread, or yogurt-based sauces, these skewers become a complete and satisfying meal for any occasion. Perfect for BBQ nights or healthy dinners, this dish combines nutrition, freshness, and irresistible grilled flavor.',
      ingredients: [
        { quantity: '500 grams', name: 'Chicken Breast' },
        { quantity: '2 pieces', name: 'Lemon' },
        { quantity: '3 tbsp', name: 'Olive Oil' },
        { quantity: '4 cloves', name: 'Garlic' },
        { quantity: '1 tsp', name: 'Paprika' },
        { quantity: '1 tsp', name: 'Cumin' },
        { quantity: '1/2 tsp', name: 'Chili Flakes' },
        { quantity: '1 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'Emulsifying the Citric Acid Marinade', image: dir122, instruction: 'In a wide, shallow glass baking dish or a large gallon-sized zip-top bag, whisk together the fresh lemon juice, olive oil, minced garlic, paprika, ground cumin, chili flakes, and salt. Whisk vigorously until the oil and citrus form a cohesive, vibrant red emulsion. Because we are working with a whole chicken, this generous amount of acid and oil is crucial to ensure the marinade can coat all the nooks and crannies of the bird.' },
        { title: 'The 30-Minute Flavor Soak', image: dir222, instruction: 'Prepare your whole chicken by spatchcocking it (removing the backbone so it lays completely flat) or cutting it into bone-in pieces to guarantee it cooks evenly on the grill. Pat the skin completely dry with paper towels, then poke a few shallow small cuts into the thickest parts of the breasts and thighs. Submerge the chicken into the marinade, massaging it thoroughly under the skin and into the cuts. The Golden Rule: Seal and refrigerate for 1 to 2 hours. Because the chicken is whole and on the bone, it requires more time than cubes to absorb the flavors, but do not exceed 4 hours, or the heavy lemon acidity will begin breaking down the muscle fibers into a chalky texture.' },
        { title: 'Threading and Skewer Prep', image: dir322, instruction: 'Remove the chicken from the refrigerator 20 minutes before it hits the heat to take the chill off. The Pro Tip: Lift the chicken out of the marinade and scrape off any excess pools of oil or large chunks of garlic from the skin, as these will scorch and turn bitter over the fire. Patting the surface lightly one last time ensures that the skin can crisp up and brown beautifully instead of steaming from trapped surface moisture.' },
        { title: 'The High-Heat Grilling Sear', image: dir422, instruction: 'Preheat your grill for two-zone cooking (direct high heat on one side, indirect lower heat on the other) and oil the grates lightly. The Sensory Cue: Place the chicken skin-side down over the direct heat for 4–5 minutes until it develops deep, smoky grill marks and releases easily from the grates. Flip the chicken bone-side down and move it over to the indirect heat side. Close the grill lid and let it roast for 35–45 minutes, until the skin is a crackling golden-brown and the internal temperature reaches 74°C in the thickest part of the thigh. Transfer to a cutting board and rest for 10 minutes to lock in the juices before carving.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/IDGzxrKkPKc?si=2zLYnzlUeGoCo_V8',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:23,
      image: recipe23,
      rating: 4.6,
      category: 'Seafood',
      title: 'Garlic Butter Shrimp with Lemon Sauce',
      time: '60 min',
      cuisine: 'Italian',
      servings:"Serves 6",
      flag: flag14,
      difficulty: 'Easy',
      tags: ['HIGH-PROTEIN', 'COMFORT FOOD', 'GLUTEN-FREE', 'DAIRY-FREE'],
      description: 'This garlic butter shrimp recipe is rich in lean seafood protein, selenium, and essential nutrients that support muscle health and overall wellness. Shrimp cooks quickly while remaining juicy and tender, making this dish both convenient and incredibly satisfying for seafood lovers. Fresh garlic and parsley add antioxidants and aromatic flavor that balance the richness of the buttery sauce beautifully. Every bite delivers bright lemon flavor, savory richness, and restaurant-style comfort in minutes.',
      description2: 'The combination of shrimp, garlic butter, and fresh herbs creates a luxurious meal that feels indulgent while still being naturally high in protein. Lemon juice adds freshness and helps cut through the richness of the sauce for a balanced and vibrant flavor profile. The silky garlic butter sauce coats every shrimp perfectly, creating a delicious pairing for pasta, rice, or crusty bread. Quick to prepare yet packed with flavor, this dish is ideal for elegant dinners or easy weeknight meals.',
      ingredients: [
        { quantity: '500 grams', name: 'Large Shrimp' },
        { quantity: '4 tbsp', name: 'Butter' },
        { quantity: '5 cloves', name: 'Garlic' },
        { quantity: '1 piece', name: 'Lemon' },
        { quantity: '2 tbsp', name: 'Fresh Parsley' },
        { quantity: '1/4 tsp', name: 'Chili Flakes' },
        { quantity: '1/2 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'The Moisture Control Prep', image: dir123, instruction: 'Peel and devein the large shrimp, leaving the tails attached if you prefer an elegant presentation. The Pro Tip: Place the cleaned shrimp between two layers of paper towels and press down firmly to absorb all surface moisture. Getting the shrimp completely dry is crucial; if they are wet when they hit the pan, they will steam in their own liquids and turn rubbery instead of searing beautifully in the fat.' },
        { title: 'Blooming the Alliums and Chili', image: dir223, instruction: 'Melt the butter in a large skillet over medium heat. Once the butter begins to foam but before it browns, drop in the sliced garlic and dried chili flakes. Sauté for exactly 1 minute, stirring constantly. You want the garlic to soften and infuse its oils into the butter without turning brown or bitter.' },
        { title: 'The Flash-Sear Sizzle', image: dir323, instruction: 'Turn the heat up slightly to medium-high and add the dry shrimp to the pan in a single, even layer. Cook undisturbed for 2 minutes on the first side until the bottoms turn opaque and a light pink color. Flip each shrimp over and cook for another 1–2 minutes. The Sensory Cue: Watch closely—the shrimp are perfectly cooked the exact moment they curl into a loose "C" shape. If they tighten into a tight "O", they are overcooked.' },
        { title: 'The Glossy Emulsion Finish', image: dir423, instruction: 'Remove the skillet from the heat immediately. Pour in the fresh lemon juice and toss in the finely chopped fresh parsley, stirring vigorously. The Styling Tip: The sudden introduction of cool acid into the warm butter forms a glossy, restaurant-style pan sauce that glazes the shrimp. Spoon the shrimp and all of the luxurious garlic butter sauce into a shallow bowl, and serve immediately alongside crusty bread to catch every drop.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/c398_SPU_Io?si=R1fkoBAynOL9oM2n',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:24,
      image: recipe24,
      rating: 4.6,
      category: 'BBQ & Grilling',
      title: 'Honey BBQ Chicken Wings with Smoky Glaze',
      time: '45 min',
      cuisine: 'American',
      servings:"Serves 2",
      flag: flag9,
      difficulty: 'Easy',
      tags: ['MEAT', 'HIGH-PROTEIN', 'KID-FRIENDLY', 'GLUTEN-FREE', 'DAIRY-FREE'],
      description: 'This honey BBQ chicken wings recipe delivers juicy high-protein chicken coated in a sticky, smoky glaze packed with bold barbecue flavor. The wings are seasoned with smoked paprika, garlic, and savory spices that create deep aroma and irresistible taste in every bite. Honey adds natural sweetness while helping the glaze caramelize into a glossy coating during cooking. Crispy on the outside and tender inside, these wings are perfect for sharing at parties or gatherings.',
      description2: 'The smoky barbecue glaze combines sweet, savory, and slightly tangy flavors that make every wing rich and deeply satisfying. Chicken wings provide protein and comforting flavor while the spices and garlic contribute aromatic depth and warmth. Baking or grilling helps achieve crispy skin while keeping the meat juicy and flavorful underneath the glaze. Perfect for game nights, appetizers, or family dinners, these wings are guaranteed crowd-pleasing favorites.',
      ingredients: [
        { quantity: '1 kg', name: 'Chicken Wings' },
        { quantity: '1/2 cup', name: 'BBQ Sauce' },
        { quantity: '3 tbsp', name: 'Honey' },
        { quantity: '2 tbsp', name: 'Soy Sauce' },
        { quantity: '2 cloves', name: 'Garlic' },
        { quantity: '1 tsp', name: 'Smoked Paprika' },
        { quantity: '1/2 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'Rub Infusion and Rest', image: dir124, instruction: 'Pat the chicken wings completely dry with a paper towel. In a large bowl, toss the wings with smoked paprika, salt, and a light splash of cooking oil. The Pro Tip: Patting the skin dry is essential for achieving a crispy exterior in the oven, while letting the seasoned wings rest for 15 minutes allows the salt to penetrate the meat, locking in moisture before it hits the high heat.' },
        { title: 'Emulsifying the Sticky Glaze', image: dir224, instruction: 'In a medium bowl, whisk together the BBQ sauce, honey, soy sauce (use tamari or a certified gluten-free soy sauce to match your tags), and minced garlic. Whisk until the honey is completely dissolved and the glaze is uniform. This sweet-and-savory emulsion will caramelize beautifully on the wing tips without scorching too early.' },
        { title: 'The High-Heat Render', image: dir324, instruction: 'Arrange the wings in a single layer on a large, parchment-lined baking sheet, leaving space between each piece so they roast instead of steam. Bake in a preheated oven at 220°C for 35 minutes. The Golden Rule: Flip the wings halfway through the cooking time. This ensures the fat renders out evenly from both sides, yielding a uniform crunch all over.' },
        { title: 'The Dual-Stage Caramelization', image: dir424, instruction: 'Remove the tray from the oven and use a pastry brush to coat each wing generously with the honey BBQ glaze. Return the wings to the oven for a final 10 minutes. The Sensory Cue: Watch for the glaze to bubble vigorously and darken into a sticky, lacquered finish at the edges. Let the wings rest for 3 minutes before serving to allow the molten sugars to set.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/vx0wHOZOZEw?si=LJAublJ7EOyZFQk9',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:25,
      image: recipe25,
      rating: 5,
      category: 'Instant Pot',
      title: 'Instant Pot Creamy Beef Stroganoff',
      time: '45 min',
      cuisine: 'Italian',
      servings:"Serves 2",
      flag: flag14,
      difficulty: 'Intermediate',
      tags: ['MEAT', 'COMFORT FOOD', 'ONE-POT', 'HIGH-PROTEIN'],
      description: 'This Instant Pot creamy beef stroganoff is rich in protein, iron, and hearty ingredients that create the ultimate comforting one-pot meal. Tender beef sirloin becomes melt-in-your-mouth soft while mushrooms and onions build a deep savory flavor throughout the creamy sauce. Sour cream adds luxurious richness and smooth texture that perfectly coats the noodles in every bite. Warm, filling, and satisfying, this classic comfort dish feels homemade and deeply nourishing.',
      description2: 'The pressure cooker locks in flavor while dramatically reducing cooking time, making this recipe ideal for busy weeknight dinners. Beef broth and mushrooms create a robust umami-rich base that pairs beautifully with the creamy stroganoff sauce. Protein-rich beef and hearty noodles provide lasting energy and a comforting dining experience for the whole family. Every spoonful delivers velvety texture, rich flavor, and classic comfort food satisfaction.',
      ingredients: [
        { quantity: '700 grams', name: 'Beef Sirloin' },
        { quantity: '250 grams', name: 'Mushrooms' },
        { quantity: '1 piece', name: 'Onion' },
        { quantity: '3 cloves', name: 'Garlic' },
        { quantity: '1 cup', name: 'Beef Broth' },
        { quantity: '1 cup', name: 'Sour Cream' },
        { quantity: '2 tbsp', name: 'Flour' },
        { quantity: '300 grams', name: 'Egg Noodles' },
      ],
      directions: [
        { title: 'High-Sear Searing', image: dir125, instruction: `Set the Instant Pot to the highest 'Sauté' setting and allow it to get completely hot. Add a splash of oil and sear the beef sirloin strips in small batches, cooking for 1–2 minutes until a deep brown crust forms. The Pro Tip: Do not crowd the pot, or the beef will boil in its own juices and become tough. Remove each batch and set aside, leaving the brown bits (the fond) stuck to the bottom of the inner pot.` },
        { title: 'Deglazing the Aromatics', image: dir225, instruction: `Add the diced onion, minced garlic, and sliced mushrooms directly into the pot. Sauté for 3–4 minutes until the vegetables soften and release their moisture. Use a wooden spoon to scrape up all the caramelized beef bits from the bottom of the liner—this step is vital to prevent a 'Burn' warning and to infuse the entire mushroom base with deep, savory flavor.`},
        { title: 'The Pressurized Braise', image: dir325, instruction: `Return the seared beef and any resting juices back to the pot. Stir in the flour to coat the ingredients, then pour in the beef broth, mixing thoroughly. Secure the lid, turn the valve to 'Sealing', and select Manual/Pressure Cook on High for 15 minutes. The high pressure breaks down the fibers of the sirloin, turning it incredibly tender in a fraction of traditional braising time.` },
        { title: 'The Velvet Cream Finish', image: dir425, instruction: 'Once the timer goes off, perform a Quick Release to stop the cooking process immediately. In a small bowl, temper the sour cream by whisking it with a ladle of the hot broth from the pot before stirring it directly into the sauce. The Golden Rule: Tempering prevents the cold dairy from curdling when it hits the heat, resulting in a perfectly smooth, velvety cream sauce. Ladle generously over hot, cooked egg noodles.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/F7-UL9BGqzA?si=mT8lr7Ogr6CJ2yUE',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:26,
      image: recipe26,
      rating: 4.8,
      category: 'Sugar-Free',
      title: 'Golden Turmeric Soup with Fresh Veggies',
      time: '10 min',
      cuisine: 'Vietnamese',
      servings:"Serves 4",
      flag: flag15,
      difficulty: 'Easy',
      tags: ['HEALTHY', 'VEGETARIAN', 'LOW-CARB', 'ONE-POT', 'DAIRY-FREE', 'GLUTEN-FREE'],
      description: 'This golden turmeric soup is filled with anti-inflammatory ingredients like turmeric, ginger, garlic, and fresh vegetables that help support wellness and immunity. Coconut milk creates a silky creamy texture while naturally balancing the warming spice profile of the soup beautifully. Carrots and onions contribute vitamins, antioxidants, and natural sweetness that deepen the flavor of every spoonful. Bright, comforting, and nourishing, this soup is perfect for healthy everyday eating.',
      description2: 'Turmeric and ginger are known for their soothing and wellness-supporting properties, making this soup both flavorful and deeply revitalizing. The smooth blended texture creates a comforting bowl that feels light yet satisfying at the same time. Coconut milk adds healthy fats and rich creaminess without needing dairy-based ingredients or heavy cream. Served warm with herbs or bread, this vibrant golden soup becomes a cozy and wholesome meal option.',
      ingredients: [
        { quantity: '1 tsp', name: 'Turmeric' },
        { quantity: '2 pieces', name: 'Carrots' },
        { quantity: '1 piece', name: 'Onion' },
        { quantity: '3 cloves', name: 'Garlic' },
        { quantity: '1 can', name: 'Coconut Milk' },
        { quantity: '500 ml', name: 'Vegetable Stock' },
        { quantity: '1 tsp', name: 'Ginger' },
        { quantity: '1 tbsp', name: 'Olive Oil' },
      ],
      directions: [
        { title: 'Activating the Base Aromatics', image: dir126, instruction: 'Heat the olive oil in a large, heavy-bottomed soup pot over medium heat. Add the diced onion, minced garlic, and grated fresh ginger, cooking for 3–4 minutes. The Sensory Cue: You want the aromatics to become soft and fragrant without developing any dark brown color, building a clean, sweet flavor base for the bright soup.' },
        { title: 'Blooming the Turmeric', image: dir226, instruction: 'Sprinkle the ground turmeric directly into the hot oil and aromatics, stirring continuously for exactly 1 minute. The Pro Tip: Turmeric contains fat-soluble compounds, meaning its health benefits and warm, earthy flavors are unlocked and amplified when toasted directly in a fat like olive oil rather than being boiled in liquid later.' },
        { title: 'The Velvet Simmer', image: dir326, instruction: 'Add the sliced carrots, vegetable stock, and rich coconut milk to the pot, stirring well to incorporate the golden oil base. Bring the mixture to a boil, then reduce the heat to low, cover with a lid, and let it simmer for 20 minutes. This gives the carrots ample time to become completely fork-tender while absorbing the warming spice profile.' },
        { title: 'The Silk Blend and Plating', image: dir426, instruction: 'Remove the pot from the heat. Use an immersion blender (or transfer in batches to a high-speed stand blender) to process the soup until it is completely smooth and looks like liquid gold. The Styling Tip: Pour the velvety soup into deep bowls and finish with a crack of fresh black pepper and a tiny swirl of extra coconut milk on top for visual contrast. Serve alongside warm, crusty bread.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/cE0FqOa7rcw?si=pJI0u93JPrVhBuGF',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:27,
      image: recipe27,
      rating: 4.6,
      category: 'Healthy',
      title: 'Chickpea and Kale Salad with Lemon Dressing',
      time: '5 min',
      cuisine: 'Spanish',
      servings:"Serves 1",
      flag: flag18,
      difficulty: 'Beginner',
      tags: ['HEALTHY', 'VEGETARIAN', 'LOW-CARB', 'DAIRY-FREE', 'GLUTEN-FREE', 'HIGH-PROTEIN'],
     description: 'This chickpea and kale salad is packed with plant-based protein, fiber, vitamins, and minerals that help support digestion, energy, and overall wellness. Kale provides iron and antioxidant-rich leafy greens while chickpeas create a hearty and satisfying base for the salad. Lemon dressing and olive oil add refreshing brightness and healthy fats that enhance both nutrition and flavor naturally. Crunchy pumpkin seeds and creamy feta complete the salad with texture and savory balance.',
    description2: 'The nutrient-dense ingredients make this salad ideal for healthy lunches, meal prep, or quick nourishing dinners throughout the week. Massaged kale becomes tender and flavorful while absorbing the citrus dressing beautifully in every bite. Chickpeas help keep the meal filling and protein-rich without relying heavily on processed ingredients or heavy sauces. Fresh, vibrant, and wholesome, this salad delivers satisfying flavor along with balanced everyday nutrition.',
      ingredients: [
        { quantity: '1 can', name: 'Chickpeas' },
        { quantity: '3 cups', name: 'Kale' },
        { quantity: '1 piece', name: 'Lemon' },
        { quantity: '3 tbsp', name: 'Olive Oil' },
        { quantity: '1 tsp', name: 'Cumin' },
        { quantity: '1/2 tsp', name: 'Salt' },
        { quantity: '50 grams', name: 'Feta Cheese' },
        { quantity: '2 tbsp', name: 'Pumpkin Seeds' },
      ],
      directions: [
        { title: 'The Essential Kale Massage', image: dir127, instruction: 'De-stem the fresh kale leaves and tear them into bite-sized pieces. Place them in a large salad bowl and drizzle with a tablespoon of olive oil. The Pro Tip: Use your hands to firmly massage the leaves for a full 2 minutes until they shrink in volume, turn a dark green, and become silky-soft. This mechanical action breaks down the tough cellulose fibers of the raw kale, making it tender, pleasant to chew, and much easier to digest.' },
        { title: 'Emulsifying the Cumin-Lemon Dressing', image: dir227, instruction: 'In a small bowl, whisk together the fresh lemon juice, remaining olive oil, ground cumin, and salt. Whisk vigorously until the oil and citrus form a smooth emulsion. The ground cumin is the secret here; its warm, earthy notes cut through the sharp citrus acidity and ground the bitter undertones of the kale.' },
        { title: 'The Base Infusion', image: dir327, instruction: 'Drain and rinse the canned chickpeas thoroughly, then pat them dry with a kitchen towel. Add the chickpeas to the massaged kale and pour the emulsion over the top. Toss everything thoroughly with salad tongs, ensuring the chickpeas are well-coated and the crevices of the massaged kale capture the dressing.' },
        { title: 'The Textured Plating Garnish', image: dir427, instruction: 'Transfer the salad to a shallow serving plate. The Styling Tip: Just before serving, crumble the creamy feta cheese over the top and scatter the pumpkin seeds evenly across the dish. Keeping these ingredients on top preserves the crunch of the seeds and keeps the feta from muddying the dressing, creating a restaurant-quality contrast of textures.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/PrJH8QFmtFE?si=S_kfLaj3HUN1JqfF',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:28,
      image: recipe28,
      rating: 4.6,
      category: 'Vegan',
      title: 'Vegan Black Bean Tacos with Avocado Salsa',
      time: '15 min',
      cuisine: 'Greek',
      servings:"Serves 12",
      flag: flag11,
      difficulty: 'Easy',
      tags: ['VEGETARIAN', 'DAIRY-FREE', 'HEALTHY', 'GLUTEN-FREE', 'KID-FRIENDLY'],
      description: 'This vegan black bean taco recipe is rich in plant-based protein, fiber, and healthy fats that create a balanced and satisfying meal full of bold flavor. Black beans provide lasting energy and essential nutrients while avocado adds creamy texture and heart-healthy fats to every bite. Fresh lime juice, cilantro, and tomatoes bring brightness and freshness that perfectly balance the smoky taco spices. Warm tortillas and flavorful fillings create a comforting taco experience everyone can enjoy.',
      description2: 'The combination of seasoned beans and fresh avocado salsa creates a delicious contrast between warm savory flavors and cool refreshing toppings. Corn tortillas keep the tacos light while adding authentic texture and natural sweetness from toasted corn flavor. Packed with wholesome ingredients and vibrant spices, these tacos are both nourishing and quick to prepare for busy meals. Perfect for taco nights or casual dinners, this recipe proves plant-based meals can be hearty and flavorful.',
      ingredients: [
        { quantity: '2 cans', name: 'Black Beans' },
        { quantity: '2 pieces', name: 'Avocado' },
        { quantity: '1 piece', name: 'Tomato' },
        { quantity: '1 piece', name: 'Lime' },
        { quantity: '8 pieces', name: 'Corn Tortillas' },
        { quantity: '1 tsp', name: 'Cumin' },
        { quantity: '1 tsp', name: 'Chili Powder' },
        { quantity: '1 bunch', name: 'Fresh Cilantro' },
      ],
      directions: [
        { title: 'Simmering the Smoky Bean Base', image: dir128, instruction: 'Empty the canned black beans into a small skillet over medium heat along with their canning liquid, or a splash of water if drained. Stir in the ground cumin, chili powder, and a pinch of salt. The Pro Tip: Simmer for 5 minutes until hot, then use the back of a fork to lightly smash roughly half of the beans. This creates a thick, creamy paste that binds the whole beans together, ensuring the filling anchors beautifully inside the taco shell without rolling out when bit into.' },
        { title: 'Crafting the Citrus Avocado Salsa', image: dir228, instruction: 'In a medium bowl, roughly mash the flesh of the two ripe avocados, leaving plenty of chunky texture. Gently fold in the finely diced tomato, fresh lime juice, and a generous handful of finely chopped cilantro. The fresh lime juice keeps the avocado a vibrant green and cuts through its buttery density with a bright, refreshing tang.' },
        { title: 'The Dry-Pan Tortilla Toast', image: dir328, instruction: `Heat a dry, non-stick skillet or cast-iron griddle over medium-high heat. Place the corn tortillas in the pan in a single layer, heating them for roughly 30 seconds per side. Look for small, charred brown blisters to develop. This toasts the starches, bringing out a rich, nutty corn flavor while making the tortillas soft and pliable so they don't break under the weight of the filling.` },
        { title: 'The Structured Assembly', image: dir428, instruction: 'Lay the warm tortillas flat and spoon a generous base layer of the hot, seasoned black beans down the center. The Styling Tip: Top the warm beans with a cold scoop of the vibrant avocado salsa, and garnish with extra fresh cilantro leaves. The sharp contrast between the warm, smoky beans and the cool, zesty salsa creates an instant gourmet mouthfeel.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/zz4DmePdILU?si=eWAGX-z_hIj_82ck',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:29,
      image: recipe29,
      rating: 5,
      category: 'Desserts',
      title: 'Apple Crumble with Cinnamon Oat Topping',
      time: '35 min',
      cuisine: 'Korean',
      servings:"Serves 7",
      flag: flag6,
      difficulty: 'Easy',
      tags: ['DESSERTS', 'HOLIDAY', 'KID-FRIENDLY', 'DAIRY-FREE'],
      description: 'This apple crumble recipe combines tender cinnamon-spiced apples with a buttery oat topping to create the ultimate cozy dessert experience. Apples provide natural sweetness, fiber, and antioxidants while oats add wholesome texture and comforting flavor to every serving. Cinnamon enhances the warm aroma and pairs beautifully with the bubbling fruit underneath the golden crumble topping. Rich, sweet, and comforting, this dessert delivers homemade warmth in every spoonful.',
      description2: 'The crisp oat topping contrasts perfectly with the soft baked apples, creating a delicious balance of texture and flavor throughout the dessert. Brown sugar and butter caramelize during baking to form a golden crust that smells incredible straight from the oven. Served warm with vanilla ice cream or cream, the dessert becomes even richer and more indulgent for special occasions. Perfect for holidays or family gatherings, this classic crumble feels nostalgic, comforting, and deeply satisfying.',
      ingredients: [
        { quantity: '6 pieces', name: 'Apples' },
        { quantity: '1 cup', name: 'Rolled Oats' },
        { quantity: '1/2 cup', name: 'Flour' },
        { quantity: '1/2 cup', name: 'Brown Sugar' },
        { quantity: '100 grams', name: 'Cold Butter' },
        { quantity: '1 tsp', name: 'Cinnamon' },
        { quantity: '1 tbsp', name: 'Lemon Juice' },
      ],
      directions: [
        { title: 'Macerating the Spiced Apple Layer', image: dir129, instruction: 'Peel, core, and slice the apples into uniform 1-centimeter thick wedges. In a large baking dish, toss the slices with fresh lemon juice, ground cinnamon, and 2 tablespoons of the brown sugar. The Pro Tip: The lemon juice prevents the apples from oxidizing while its acidity balances the sweetness. Tossing them directly in the baking dish saves clean-up and lets the apples begin releasing their natural juices, which will form a rich syrup as they bake.' },
        { title: 'Working the Cold-Butter Crumble', image: dir229, instruction: `In a separate mixing bowl, combine the rolled oats, flour, and the remaining brown sugar. Cut the cold butter into small cubes and drop them into the dry mix. Use your fingertips to quickly rub the butter into the flour and oats until no large chunks remain and the mixture resembles coarse, clumpy sand. The Golden Rule: Keep your movements quick so the heat from your hands doesn't melt the butter; keeping the butter cold is what creates those distinct, flaky, and crispy pockets of crumble in the oven.` },
        { title: 'The Spacious Layered Bake', image: dir329, instruction: `Scatter the oat crumble mixture loosely and evenly over the top of the spiced apples, ensuring you don't pack it down tightly so steam can escape. Place the dish in a preheated oven at 180°C and bake for 35 minutes. You will know it is done when the oat topping turns a deep golden-brown and the sweet, ruby-colored apple juices are bubbling vigorously around the edges of the dish.` },
        { title: 'The Sizzling Finish and Presentation', image: dir429, instruction: 'Remove the crumble from the oven and let it stand for 5 minutes before serving. This brief rest allows the hot fruit juices to thicken into a rich glaze. The Styling Tip: Serve the crumble warm directly from the baking dish, plating deep scoops that reveal the contrast between the tender, ruby-red apples underneath and the crisp, golden crust on top. Top each serving with a clean scoop of vanilla ice cream or a splash of fresh cream.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/xWENtTrFjXk?si=XlW_hWrzWIioV4db',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:30,
      image: recipe30,
      rating: 4.6,
      category: 'Vegetarian',
      title: 'Spinach Ricotta Stuffed Vegan Pasta Shells',
      time: '25 min',
      cuisine: 'Italian',
      servings:"Serves 8",
      flag: flag14,
      difficulty: 'Intermediate',
      tags: ['VEGETARIAN', 'COMFORT FOOD', 'KID-FRIENDLY'],
      description: 'This spinach ricotta stuffed pasta shell recipe is packed with creamy cheese, hearty pasta, and nutritious spinach for a comforting vegetarian meal. Ricotta and mozzarella provide protein and calcium while spinach adds iron, vitamins, and earthy flavor to the rich filling. Marinara sauce brings bright tomato flavor and balances the creamy baked cheese beautifully in every bite. Warm, cheesy, and satisfying, this baked pasta dish is perfect for family dinners or gatherings.',
      description2: 'The stuffed shells bake into a bubbling casserole with melted golden cheese and rich savory sauce layered throughout the dish. Spinach and ricotta create a creamy filling that feels indulgent while still providing balanced nutrition and wholesome ingredients. The comforting combination of pasta, tomato sauce, and melted cheese makes this recipe a favorite for both adults and kids alike. Perfect for meal prep or freezing, this pasta bake delivers classic homemade comfort food flavor.',
      ingredients: [
        { quantity: '20 pieces', name: 'Jumbo Pasta Shells' },
        { quantity: '250 grams', name: 'Ricotta Cheese' },
        { quantity: '200 grams', name: 'Frozen Spinach' },
        { quantity: '1 cup', name: 'Marinara Sauce' },
        { quantity: '150 grams', name: 'Mozzarella Cheese' },
        { quantity: '50 grams', name: 'Parmesan Cheese' },
        { quantity: '1 piece', name: 'Egg' },
        { quantity: '1/2 tsp', name: 'Nutmeg' },
      ],
      directions: [
        { title: 'The Sturdy Pasta Foundation', image: dir130, instruction: 'Bring a large pot of heavily salted water to a rolling boil and cook the jumbo pasta shells until they are just under al dente—approximately 1 to 2 minutes less than the package instructions. The Pro Tip: Because these shells will undergo a second cooking stage in the oven, leaving them slightly firm prevents them from becoming mushy or tearing. Drain the shells carefully and spread them out in a single layer on a clean baking sheet lined with parchment paper to cool; this keeps them from sticking together or collapsing as they cool.' },
        { title: 'The Moisture-Controlled Ricotta Filling', image: dir230, instruction: 'Thaw the frozen spinach completely, place it in a clean kitchen towel or fine-mesh sieve, and squeeze out every possible drop of excess water. In a large bowl, combine the bone-dry spinach, ricotta cheese, egg, grated parmesan, and ground nutmeg. The Golden Rule: Removing the moisture from the spinach is critical; any trapped liquid will release during baking, breaking the egg emulsion and turning your rich, velvety ricotta filling into a watery mess. The tiny pinch of nutmeg is the traditional Italian secret that cuts through the dairy and wakes up the earthy notes of the spinach.' },
        { title: 'The Piping Bag Stuffing Technique', image: dir330, instruction: 'Spread a thin, even layer of the savory marinara sauce over the bottom of a large ceramic baking dish to create a moist bed for the pasta. Spoon the spinach and ricotta mixture into a large ziplock bag and snip off one of the bottom corners to create a makeshift piping bag. The Styling Tip: Pipe the filling generously into the cavity of each cooled jumbo shell. This method is not only much faster and cleaner than using a spoon, but it also ensures the shells are plumply and uniformly filled for an elegant, professional presentation as you nestle them open-side-up into the sauce.' },
        { title: 'The Bubbling Mosaic Bake', image: dir430, instruction: `Drizzle the remaining marinara sauce carefully over the stuffed shells, then smother the top with a generous layer of shredded mozzarella cheese. Cover the baking dish tightly with aluminum foil—ensuring the foil doesn't touch the cheese—and bake at 190°C for 20 minutes. Remove the foil for the final 5 minutes of baking, allowing the cheese to melt into a bubbly, deeply golden, and slightly caramelized blanket. Let the pasta rest for 5 minutes before serving to allow the molten cheese to set perfectly for clean plating.` },
      ],
      videoUrl: 'https://www.youtube.com/embed/JKZ0QDJM5Sg?si=J5JK7iluMNDiX6Jn',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:31,
      image: recipe31,
      rating: 4.6,
      category: 'Vegan',
      title: 'Maple Roasted Sweet Potatoes with Pecans',
      time: '60 min',
      cuisine: 'Turkish',
      servings:"Serves 3",
      flag: flag7,
      difficulty: 'Beginner',
      tags: ['DAIRY-FREE', 'VEGETARIAN', 'HEALTHY', 'GLUTEN-FREE'],
      description: 'This maple roasted sweet potato recipe is packed with fiber, vitamins, and antioxidants from naturally sweet potatoes, crunchy pecans, and warming spices. Sweet potatoes provide complex carbohydrates and vitamin-rich nourishment while maple syrup enhances their caramelized roasted flavor beautifully. Toasted pecans add healthy fats, crunch, and nutty richness that complement the soft roasted vegetables perfectly. Every bite delivers comforting sweetness, earthy flavor, and satisfying texture in one wholesome side dish.',
      description2: 'The roasted sweet potatoes develop crispy caramelized edges while remaining soft and fluffy inside for the perfect balance of texture. Cinnamon and maple syrup create a warm holiday-inspired flavor profile that pairs wonderfully with savory meals and festive dinners. Pecans add richness and crunch while contributing nutrients and natural buttery flavor throughout the dish. Perfect for holiday tables or everyday comfort meals, this recipe is healthy, vibrant, and deeply satisfying.',
      ingredients: [
        { quantity: '4 pieces', name: 'Sweet Potatoes' },
        { quantity: '3 tbsp', name: 'Maple Syrup' },
        { quantity: '2 tbsp', name: 'Coconut Oil' },
        { quantity: '1/2 cup', name: 'Pecans' },
        { quantity: '1/2 tsp', name: 'Cinnamon' },
        { quantity: '1/4 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'Slicing and Glaze Fusion', image: dir131, instruction: 'Peel the sweet potatoes and cut them into uniform 2-centimeter cubes. Wipe your choice of fresh mushrooms (such as cremini or button mushrooms) clean with a damp paper towel and quarter them to match the size of the potato cubes. In a large mixing bowl, whisk together the melted coconut oil, maple syrup, ground cinnamon, and salt. Dump both the sweet potato cubes and the mushrooms into the bowl and toss thoroughly. The Pro Tip: Mushrooms are incredibly porous and will quickly absorb the aromatic glaze, ensuring they develop a deep, savory-sweet flavor profile that beautifully complements the natural sweetness of the potatoes.' },
        { title: 'The High-Heat Caramelization Roast', image: dir231, instruction: 'Spread the coated sweet potato cubes and glazed mushrooms out onto a large baking sheet. The Golden Rule: Arrange everything in a single, spacious layer; overloading the tray will cause the water released by the mushrooms to steam the vegetables instead of roasting them. Bake in a preheated oven at 200°C for 30 minutes. Use a spatula to flip the ingredients halfway through the cooking time, allowing the potato edges to crisp up and the mushrooms to develop a rich, deeply browned, and concentrated exterior.' },
        { title: 'Fragrant Dry-Pan Toasting', image: dir331, instruction: 'While the oven finishes roasting, place a small, dry skillet over medium heat. Add the chopped pecans and toast them for roughly 3–4 minutes, shaking the pan continuously to prevent scorching. The Sensory Cue: Watch for the nuts to turn a shade darker and release an intensely warm, nutty aroma. Remove the pecans from the hot pan immediately once finished, as the residual heat of the metal can quickly burn their delicate oils.' },
        { title: 'The Layered Plating Presentation', image: dir431, instruction: 'Transfer the hot, caramelized sweet potatoes and savory roasted mushrooms from the baking tray into a shallow ceramic serving dish. The Styling Tip: Scatter the crunchy toasted pecans evenly across the top to contrast with the tender, pillowy textures underneath. Finish the presentation with a final, delicate drizzle of fresh maple syrup over the entire plate. The residual heat will warm the syrup instantly, creating a glossy, restaurant-quality varnish that unifies the earthy mushrooms and sweet potatoes perfectly.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/qLY-ocpXF10?si=ITroLMkfzBYaPSLj',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:32,
      image: recipe32,
      rating: 4.4,
      category: 'Snacks',
      title: 'Baked Chicken Tenders with Parmesan Crust',
      time: '90 min',
      cuisine: 'German',
      servings:"Serves 7",
      flag: flag10,
      difficulty: 'Easy',
      tags: ['HIGH-PROTEIN', 'KID-FRIENDLY', 'GLUTEN-FREE'],
     description: 'These baked chicken tenders with parmesan crust are coated in a crispy golden layer that delivers incredible crunch without deep frying. The juicy chicken stays tender inside while the parmesan adds a rich savory flavor to every bite. Packed with protein and baked using minimal oil, this healthier comfort food is perfect for family dinners or meal prep. The flavorful herb seasoning and cheesy crust make these tenders irresistibly delicious for both kids and adults.',
description2: 'Serve these crispy tenders with honey mustard, ranch, or spicy garlic dip for the ultimate snack or dinner. The oven-baked method keeps them lighter while still achieving restaurant-style texture and crunch. Parmesan cheese adds calcium and bold umami flavor that pairs beautifully with the seasoned coating. They stay crispy even after reheating, making them ideal for lunchboxes and quick weekday meals.',
    ingredients: [
      { quantity: '500 grams', name: 'Chicken Tenders' },
      { quantity: '1 cup', name: 'Breadcrumbs' },
      { quantity: '50 grams', name: 'Parmesan Cheese' },
      { quantity: '2 pieces', name: 'Eggs' },
      { quantity: '1 tsp', name: 'Garlic Powder' },
      { quantity: '1 tsp', name: 'Italian Seasoning' },
      { quantity: '1/2 tsp', name: 'Salt' },
    ],
    directions: [
      { title: 'Designing the Breading Station', image: dir132, instruction: `Set up your breading assembly line using two shallow wide bowls side-by-side to ensure a clean workflow. In the first bowl, thoroughly beat the two eggs with a small splash of water until completely smooth. In the second bowl, combine the breadcrumbs (use gluten-free breadcrumbs to match your tags), finely grated parmesan cheese, garlic powder, Italian seasoning, and salt. The Pro Tip: Use your fingers to rub the cheese and spices directly into the crumbs to ensure the savory parmesan is evenly distributed and doesn't clump up during the coating process.` },
      { title: 'The "Wet Hand, Dry Hand" Technique', image: dir232, instruction: 'Pat the chicken tenders completely dry with a paper towel to help the coating adhere. Using your left hand (the "wet hand"), dip a chicken tender into the beaten egg, allowing any excess to drip off completely. Drop the chicken into the dry crumb mixture, and use your right hand (the "dry hand") to scoop the breadcrumbs over the top, pressing down firmly to lock the crust into place. This classic kitchen technique keeps your hands clean and prevents the breading from building up on your fingers.' },
      { title: 'Elevating for Maximum Airflow', image: dir332, instruction: 'Place the fully coated chicken tenders onto a baking sheet. The Golden Rule: For a truly restaurant-quality crunch, place a metal wire rack inside your baking sheet and lightly grease it with cooking spray before arranging the tenders in a single layer. Elevating the chicken allows the hot air of the oven to circulate completely underneath the meat, ensuring the bottom stays shatteringly crisp rather than getting soggy from trapped steam.' },
      { title: 'The High-Heat Crisp and Rest', image: dir432, instruction: 'Slide the baking sheet into a preheated oven at 220°C and bake for 20–22 minutes. The Sensory Cue: You are looking for a beautiful, golden-brown crust and a firm bounce when the chicken is gently pressed. Once cooked through, remove the tray from the oven and let the tenders rest on the wire rack for 3 minutes before serving. This brief resting period allows the cheese crust to set firmly and lets the juices redistribute, ensuring every bite is incredibly tender and crispy.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/LN-HARiARik?si=jCP4---6AlioPea6',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,
  
    },
    {
      id:33,
      image: recipe33,
      rating: 4.6,
      category: 'Vegan',
      title: 'Vegan Chocolate Mousse with Avocado',
      time: '85 min',
      cuisine: 'French',
      servings:"Serves 6",
      flag: flag3,
      difficulty: 'Easy',
      tags: ['DESSERTS', 'DAIRY-FREE', 'VEGETARIAN', 'GLUTEN-FREE', 'KID-FRIENDLY'],
      description: 'This vegan chocolate mousse with avocado is unbelievably rich, silky, and creamy while remaining completely dairy-free and naturally wholesome. Ripe avocados create a smooth luxurious texture packed with healthy fats and nutrients without overpowering the chocolate flavor. Cocoa powder delivers deep chocolate richness while maple syrup adds natural sweetness and balance. The result is a decadent dessert that feels indulgent while offering a healthier plant-based twist.',
      description2: 'Every spoonful is smooth, airy, and loaded with antioxidant-rich cocoa and heart-healthy avocado goodness. This mousse comes together in minutes with no baking or complicated preparation required. Chilling the dessert enhances the velvety texture and intensifies the rich chocolate flavor beautifully. Garnish with berries, coconut cream, or chocolate curls for an elegant dessert that looks as luxurious as it tastes.',
      ingredients: [
        { quantity: '2 pieces', name: 'Ripe Avocados' },
        { quantity: '4 tbsp', name: 'Cocoa Powder' },
        { quantity: '4 tbsp', name: 'Maple Syrup' },
        { quantity: '1 tsp', name: 'Vanilla Extract' },
        { quantity: '3 tbsp', name: 'Almond Milk' },
        { quantity: '1 pinch', name: 'Salt' },
      ],
      directions: [
        { title: 'The High-Speed Emulsion', image: dir133, instruction: 'Slice the ripe avocados, remove the pits, and scoop the flesh directly into a food processor or a high-speed blender. Add the cocoa powder, maple syrup, vanilla extract, almond milk, and a tiny pinch of salt. The Pro Tip: It is absolutely vital to use soft, perfectly ripe avocados with zero brown spots to ensure a clean flavor profile. Blend on high for 2–3 minutes, scraping down the sides of the bowl halfway through, until the green color completely vanishes and the mixture transforms into a glossy, uniform, silk-like chocolate cream.' },
        { title: 'The Sweetness Calibration', image: dir233, instruction: 'Stop the machine and taste the mixture to calibrate the flavor. Depending on the natural size and oil content of your avocados, you may want to add an extra tablespoon of maple syrup to balance the deep bitterness of the cocoa powder, or a drop more vanilla to enhance the aromatics. Give the mousse a final 10-second pulse to fully incorporate any adjustments. The tiny pinch of salt added in the previous step is the secret weapon here; it suppresses any lingering vegetal undertones from the avocado and makes the chocolate flavor taste much richer.' },
        { title: 'The Crucial Chilling Stage', image: dir333, instruction: `Spoon the smooth chocolate emulsion out of the blender and divide it evenly into individual dessert glasses or small ramekins. Use the back of a spoon to smooth down the surface. The Golden Rule: You must refrigerate the mousse for at least 30 to 60 minutes before serving. This chilling time isn't just about temperature; it allows the natural cocoa fats to firm up and the flavors to fully meld, turning a soft blend into a dense, decadent, steakhouse-quality mousse texture.` },
        { title: 'The Gourmet Presentation', image: dir433, instruction: 'Remove the chilled dessert glasses from the refrigerator right before serving. The Styling Tip: Garnish the top with a dollop of whipped coconut cream, a few fresh raspberries, or a delicate grating of dairy-free dark chocolate curls. The bright, tart acidity of fresh berries cuts beautifully through the rich, buttery mouthfeel of the avocado-based chocolate, creating a visually stunning and balanced dessert that looks entirely traditional.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/ldxz6CjFV1o?si=4BX-5sXZ1GG0EVyC',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id:34,
      image: recipe34,
      rating: 4.9,
      category: 'Gluten-Free',
      title: 'Zucchini Noodles with Creamy Avocado Sauce',
      time: '90 min',
      cuisine: 'Ethiopian',
      servings:"Serves 3",
      flag: flag5,
      difficulty: 'Easy',
      tags: ['GLUTEN-FREE', 'DAIRY-FREE', 'HEALTHY', 'LOW-CARB', 'VEGETARIAN'],
      description: 'These zucchini noodles with creamy avocado sauce are fresh, vibrant, and packed with nourishing ingredients that make healthy eating incredibly satisfying. Spiralized zucchini creates a light low-carb alternative to pasta while still delivering a refreshing bite and satisfying texture. The creamy avocado sauce is blended with basil, garlic, and lemon for a rich silky coating full of healthy fats and flavor. This raw no-cook recipe is perfect for warm days when you want something quick, cooling, and energizing.',
      description2: 'The avocado sauce delivers a buttery creaminess without any dairy while keeping the dish naturally gluten-free and wholesome. Fresh basil and lemon brighten every bite and prevent the avocado from losing its vibrant green color. Zucchini provides fiber, hydration, and important vitamins while keeping the meal light and refreshing. Serve immediately with cherry tomatoes or herbs for a colorful dish that feels elegant yet effortless.',
      ingredients: [
        { quantity: '4 pieces', name: 'Zucchini' },
        { quantity: '2 pieces', name: 'Ripe Avocados' },
        { quantity: '1 piece', name: 'Lemon' },
        { quantity: '2 cloves', name: 'Garlic' },
        { quantity: '1/4 cup', name: 'Fresh Basil' },
        { quantity: '3 tbsp', name: 'Olive Oil' },
        { quantity: '1/2 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'Spiralizing and Moisture Control', image: dir134, instruction: 'Using a spiralizer, vegetable peeler, or mandoline, cut the zucchinis into long, thin strands that resemble spaghetti noodles. The Pro Tip: Zucchini releases a massive amount of water once it comes into contact with salt. To prevent your final dish from becoming watery, place the zucchini noodles in a colander, sprinkle with a tiny pinch of salt, and let them sit for 5 minutes. Gently pat them dry with a clean paper towel before assembling to ensure the cream sauce clings perfectly to the strands.' },
        { title: 'Emulsifying the Velvet Sauce', image: dir234, instruction: `In a food processor or high-speed blender, combine the flesh of the two ripe avocados, fresh lemon juice, garlic cloves, fresh basil leaves, olive oil, and salt. Blend on high until the mixture transforms into a vibrant, ultra-smooth, silk-like sauce. The high acidity of the fresh lemon juice is crucial here; it doesn't just cut through the rich, buttery density of the avocado fats, it also acts as a natural antioxidant to keep the sauce a beautiful, bright green color without oxidizing.` },
        { title: 'The Cold Coat Technique', image: dir334, instruction: 'Transfer the prepped and dried zucchini noodles into a large mixing bowl. Pour the creamy avocado emulsion over the top. Using two large spoons or tongs, toss the noodles gently until every strand is thoroughly coated in the rich green sauce. This is a raw, no-cook preparation designed to preserve the crisp, refreshing "snap" of the fresh zucchini and the volatile aromatic oils of the fresh basil.' },
        { title: 'The Plating and Garnishing Touch', image: dir434, instruction: 'Divide the coated zucchini noodles evenly among serving plates, lifting and twirling them to create height on the dish. The Styling Tip: Garnish the top with halved cherry tomatoes and a few whole fresh basil leaves. The bright red of the tomatoes provides a stunning color contrast against the emerald green noodles, while adding a sweet, juicy burst of flavor that cuts beautifully through the rich sauce. Serve immediately while fresh and crisp.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/H1zQfFpE7s0?si=KlNAm1x_yBbV5iGq',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id:35,
      image: recipe35,
      rating: 4.8,
      category: 'Breads',
      title: 'Cheese Stuffed Flatbread with Fresh Herbs',
      time: '5 min',
      cuisine: 'Vietnamese',
      servings:"Serves 5",
      flag: flag15,
      difficulty: 'Beginner',
      tags: ['COMFORT FOOD', 'VEGETARIAN', 'KID-FRIENDLY'],
      description: 'This cheese stuffed flatbread combines a crispy golden exterior with gooey melted cheese and fragrant herbs tucked inside every layer. The soft yogurt-based dough creates a tender chewy texture that cooks beautifully in minutes on a hot pan. Fresh herbs infuse the bread with vibrant aroma while the mozzarella filling melts into a rich stretchy center. Simple ingredients come together to create a comforting snack or side dish that feels warm and satisfying.',
description2: 'Each bite offers the perfect contrast between crisp pan-seared bread and molten cheesy filling bursting with flavor. The fresh herbs provide brightness while the buttery finish creates a delicious bakery-style richness. This versatile flatbread can be served as a snack, appetizer, or alongside soups and curries for a hearty meal. Quick preparation and minimal ingredients make it an easy comfort food recipe for busy days.',
    ingredients: [
      { quantity: '2 cups', name: 'All-Purpose Flour' },
      { quantity: '150 grams', name: 'Mozzarella Cheese' },
      { quantity: '1 cup', name: 'Yogurt' },
      { quantity: '2 tbsp', name: 'Fresh Herbs' },
      { quantity: '2 tbsp', name: 'Butter' },
      { quantity: '1/2 tsp', name: 'Salt' },
    ],
    directions: [
      { title: 'The Two-Ingredient Dough Foundation', image: dir135, instruction: 'In a large mixing bowl, combine the all-purpose flour, yogurt, and salt. Stir until a shaggy dough forms, then turn it out onto a lightly floured surface and knead for about 5 minutes until the dough is elastic and smooth to the touch. The Pro Tip: Using yogurt instead of water creates a much softer, more pliable dough that bubbles up beautifully in the pan. Divide the dough into five equal portions and let them rest for 10 minutes covered with a damp cloth; this relaxes the gluten and makes the rolling process effortless.' },
      { title: 'The Pocket-Seal Technique', image: dir235, instruction: 'Take a portion of the dough and roll it out into a thin, even circle using a rolling pin. Place a generous handful of shredded mozzarella and a sprinkle of finely chopped fresh herbs in the center. Carefully gather the edges of the dough toward the middle, pinching them together tightly to create a sealed "bundle." Flip the bundle over so the pleated side is face-down, and gently roll it flat again. This technique ensures the cheese is encased in a thin, even layer of dough without any thick, doughy spots.' },
      { title: 'The Golden Dry-Pan Sear', image: dir335, instruction: 'Heat a non-stick skillet or a heavy cast-iron pan over medium heat. Place the stuffed flatbread in the dry pan and cook for approximately 3 minutes. The Sensory Cue: You are looking for the bread to puff up slightly and develop deep golden-brown spots. Flip the flatbread and cook for another 2–3 minutes on the other side. Cooking without oil initially allows the dough to bake through properly while giving the mozzarella enough time to reach a molten, "oozing" consistency inside.' },
      { title: 'The Herb-Butter Glaze', image: dir435, instruction: 'Immediately after removing the flatbread from the heat, brush the top generously with melted butter. The Styling Tip: While the butter is still wet, sprinkle a fresh batch of finely minced herbs (like parsley, cilantro, or chives) over the surface. The residual heat from the bread will slightly toast the herbs, releasing their fragrance and creating a professional, vibrant finish. Slice into wedges and serve immediately while the cheese is at its peak melt.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/SC0RGM8qMjQ?si=j5MZyWi_IwtIR5ti',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:36,
      image: recipe36,
      rating: 4.6,
      category: 'Sugar-Free',
      title: 'Berry Chia Jam Bars with Oat Crumble',
      time: '10 min',
      cuisine: 'Mexican',
      servings:"Serves 2",
      flag: flag8,
      difficulty: 'Beginner',
      tags: ['DESSERTS', 'GLUTEN-FREE', 'DAIRY-FREE', 'KID-FRIENDLY'],
       description: 'These berry chia jam bars with oat crumble are naturally sweet, wholesome, and packed with fruity flavor in every bite. Juicy mixed berries combine with chia seeds to create a thick homemade jam loaded with fiber and antioxidants. The buttery oat crumble provides a delicious crunchy texture that perfectly balances the soft berry filling underneath. Made with nourishing ingredients and natural sweetness, these bars are ideal for breakfast, snacks, or dessert.',
description2: 'Chia seeds naturally thicken the berry filling while adding plant-based nutrients and satisfying texture. Rolled oats and almond flour create a hearty crumble topping that tastes comforting and lightly nutty. These bars are naturally gluten-free and easy to prepare with simple pantry ingredients. Enjoy them chilled or slightly warm with tea or coffee for a healthy treat that still feels indulgent.',
    ingredients: [
      { quantity: '2 cups', name: 'Rolled Oats' },
      { quantity: '1 cup', name: 'Mixed Berries' },
      { quantity: '3 tbsp', name: 'Chia Seeds' },
      { quantity: '3 tbsp', name: 'Maple Syrup' },
      { quantity: '100 grams', name: 'Butter' },
      { quantity: '1/2 cup', name: 'Almond Flour' },
      { quantity: '1/4 tsp', name: 'Salt' },
    ],
    directions: [
      { title: 'Simmering the "Quick" Chia Jam', image: dir136, instruction: 'Place the mixed berries in a small saucepan over medium heat, mashing them gently with a fork as they warm to release their natural juices. Once the fruit has broken down into a chunky sauce, remove from heat and stir in the chia seeds and maple syrup. The Pro Tip: Let the mixture sit for at least 10 minutes. The chia seeds will absorb the liquid and swell, transforming the berries into a thick, spreadable jam without the need for refined pectins or long simmering times.' },
      { title: 'Crafting the Wholesome Crumble', image: dir236 , instruction: 'In a separate bowl, combine the rolled oats, almond flour, and salt. Add the softened butter (or a vegan butter alternative) and work the mixture with your fingertips or a pastry cutter until it resembles coarse, sandy crumbs. The almond flour is the secret ingredient here; it adds a nutty richness and a tender, melt-in-your-mouth texture that perfectly balances the chewy texture of the whole oats.' },
      { title: 'Layering for Structural Integrity', image: dir336, instruction: 'Line a small square baking pan with parchment paper, leaving an overhang on the sides for easy removal. Take roughly two-thirds of the oat crumble mixture and press it firmly and evenly into the bottom of the pan to create a solid base. Spread the cooled berry chia jam in an even layer over the top. Finally, sprinkle the remaining crumble loosely over the jam, allowing some of the vibrant berry color to peek through the oat clusters.' },
      { title: 'The Golden Bake and Setting Period', image: dir436, instruction: `Bake the bars in a preheated oven at 175°C for 25 minutes until the oat topping is golden-brown and the fruit jam is bubbling slightly at the edges. The Golden Rule: You must allow the bars to cool completely in the pan before attempting to slice them. Because this recipe is naturally jammy and uses wholesome flours, the bars need that cooling time to "set" and firm up, ensuring you get clean, professional squares that don't crumble apart.`},
    ],
    videoUrl: 'https://www.youtube.com/embed/4_xXaTz6mRY?si=yyXDiHxXYXJzjHiZ',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:37,
      image: recipe37,
      rating: 4.6,
      category: 'Side Dishes',
      title: 'Crispy Garlic Roasted Baby Potatoes',
      time: '110 min',
      cuisine: 'Moroccan',
      servings:"Serves 6",
      flag: flag2,
      difficulty: 'Easy',
      tags: ['VEGETARIAN', 'COMFORT FOOD', 'MEAL PREP', 'DAIRY-FREE', 'GLUTEN-FREE'],
      description: 'These crispy garlic roasted baby potatoes are perfectly golden and crunchy on the outside while remaining fluffy and tender in the center. Roasting at high heat caramelizes the potatoes beautifully and intensifies their naturally savory flavor. Garlic, rosemary, and thyme infuse every bite with earthy aromatic richness that pairs well with almost any meal. This simple side dish delivers incredible texture and comfort using only a few wholesome ingredients.',
      description2: 'Parboiling the potatoes before roasting creates a crisp outer crust while keeping the insides soft and creamy. Olive oil and herbs coat every potato evenly for maximum flavor and beautiful golden color during baking. These roasted potatoes are naturally gluten-free, dairy-free, and perfect for meal prep or gatherings. Serve them hot with fresh parsley for an easy side dish that feels both rustic and elegant.',
      ingredients: [
        { quantity: '800 grams', name: 'Baby Potatoes' },
        { quantity: '4 cloves', name: 'Garlic' },
        { quantity: '3 tbsp', name: 'Olive Oil' },
        { quantity: '1 tsp', name: 'Dried Rosemary' },
        { quantity: '1 tsp', name: 'Dried Thyme' },
        { quantity: '1 tsp', name: 'Salt' },
        { quantity: '1/4 tsp', name: 'Black Pepper' },
      ],
      directions: [
        { title: 'The Essential Parboil', image: dir137, instruction: 'Place the baby potatoes in a large pot of salted water and bring to a boil. Simmer for about 10 minutes until they are just fork-tender but not falling apart. The Pro Tip: After draining, give the potatoes a vigorous shake in the colander. This roughens up the edges of the potatoes, creating a starchy surface layer that will transform into a shatteringly crisp crust once it hits the hot oil in the oven.' },
        { title: 'The Herb and Garlic Infusion', image: dir237, instruction: 'In a large mixing bowl, combine the parboiled potatoes with olive oil, minced garlic, dried rosemary, thyme, salt, and black pepper. Toss thoroughly to ensure each potato is evenly coated. The Flavor Rule: By seasoning the potatoes while they are still warm from the boil, the pores of the potato stay open, allowing the aromatic garlic and herbs to penetrate deeper into the center rather than just sitting on the skin.' },
        { title: 'The High-Heat Roast', image: dir337, instruction: `Spread the potatoes in a single layer on a large baking sheet, ensuring they aren't overcrowded so they roast rather than steam. Place them in a preheated oven at 220°C for 30–35 minutes. Halfway through the roasting time, use a spatula to flip the potatoes. This ensures that the contact points with the metal tray become deeply golden and crispy on all sides, creating that perfect contrast with the fluffy, steamed interior.` },
        { title: 'The Fresh Finish', image: dir437, instruction: 'Remove the tray from the oven once the potatoes are golden-brown and make a distinct "clinking" sound against the pan. Transfer them immediately to a serving bowl while they are still sizzling. The Styling Tip: Garnish with a generous handful of finely chopped fresh parsley. The residual heat from the potatoes will wake up the oils in the fresh herbs, providing a bright, earthy aroma that balances the rich, roasted garlic flavor perfectly.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/JsMetXx4Rso?si=w6aGdhHE9RzHBedY',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:38,
      image: recipe38,
      rating: 4.8,
      category: 'Pasta',
      title: 'Mexican Street Corn Salad with Pasta',
      time: '55 min',
      cuisine: 'Mexican',
      servings:"Serves 10",
      flag: flag8,
      difficulty: 'Easy',
      tags: ['COMFORT FOOD', 'MEAL PREP', 'KID-FRIENDLY'],
      description: 'This Mexican street corn pasta salad combines smoky charred corn, creamy dressing, and tender pasta into one bold and satisfying dish. Inspired by classic elote flavors, every bite is packed with tangy lime, chili spice, and savory cotija cheese. The creamy dressing coats the pasta perfectly while the grilled corn adds sweetness and a smoky roasted depth. It is a colorful crowd-pleasing recipe ideal for summer gatherings, potlucks, or casual dinners.',
description2: 'Fresh cilantro and lime brighten the rich creamy dressing while adding authentic Mexican-inspired flavor to the dish. The charred corn creates delicious caramelized notes that make the salad incredibly flavorful and unique. This pasta salad can be served warm or chilled and tastes even better after the flavors meld together. It is easy to prepare in large batches and works wonderfully as both a side dish and a filling main meal.',
    ingredients: [
      { quantity: '300 grams', name: 'Pasta' },
      { quantity: '3 pieces', name: 'Corn Cobs' },
      { quantity: '100 grams', name: 'Cotija Cheese' },
      { quantity: '3 tbsp', name: 'Mayonnaise' },
      { quantity: '2 tbsp', name: 'Sour Cream' },
      { quantity: '1 piece', name: 'Lime' },
      { quantity: '1 tsp', name: 'Chili Powder' },
      { quantity: '1 bunch', name: 'Fresh Cilantro' },
    ],
    directions: [
      { title: 'The Al Dente Foundation', image: dir138, instruction: 'Bring a large pot of salted water to a rolling boil and cook the pasta until it is perfectly al dente. The Pro Tip: Since this is a salad, rinse the pasta briefly under cold water immediately after draining. This stops the cooking process and removes excess surface starch, ensuring the pasta remains firm and individual rather than clumping together once the creamy dressing is applied.' },
      { title: 'Achieving the Authentic Char', image: dir238, instruction: 'Grill the corn cobs over high heat or char them in a heavy, dry cast-iron skillet until the kernels are slightly blackened and blistered in spots. Once the corn is cool enough to handle, stand the cob upright and use a sharp knife to shave the kernels off. This "elote-style" char is essential, as it introduces a smoky, caramelized sweetness that defines the flavor profile of the entire dish.' },
      { title: 'The Zesty Crema Dressing', image: dir338, instruction: 'In a large mixing bowl, whisk together the mayonnaise, sour cream, fresh lime juice, and chili powder. Whisk until the mixture is completely smooth and the chili powder is evenly distributed. This dressing acts as the "glue" for the salad, combining the richness of the fats with the sharp acidity of the lime to create a bright, tangy coating that complements the smoky corn.' },
      { title: 'The Final Toss and Garnish', image: dir438, instruction: 'Add the cooled pasta and charred corn kernels to the bowl with the dressing. Toss thoroughly with a large spoon until every piece of pasta is well-coated. The Styling Tip: Just before serving, sprinkle the crumbled cotija cheese and finely chopped fresh cilantro over the top. If you are preparing this for meal prep, wait to add the cilantro until the last moment to keep it vibrant and prevent it from wilting.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/j9hBsRVh18g?si=siI-XJ3vT_bw5dZM',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:39,
      image: recipe39,
      rating: 4.9,
      category: 'Breakfasts',
      title: 'Breakfast Muffins with Lemon Poppy Seeds',
      time: '70 min',
      cuisine: 'Turkish',
      servings:"Serves 12",
      flag: flag7,
      difficulty: 'Beginner',
      tags: ['KID-FRIENDLY', 'DESSERTS', 'DAIRY-FREE'],
       description: 'These breakfast muffins with lemon poppy seeds are light, fluffy, and bursting with refreshing citrus flavor in every bite. Fresh lemon zest and juice infuse the batter with bright aromatic oils that create a bakery-style freshness. Poppy seeds add a delicate crunch and nutty flavor while yogurt keeps the muffins moist and tender. Perfect for breakfast or snacks, these muffins feel comforting while remaining wonderfully light and vibrant.',
description2: 'The citrus aroma fills the kitchen beautifully while baking and creates an energizing start to the day. Yogurt helps the muffins rise tall and keeps them soft even after cooling or freezing. These muffins are easy to make ahead for busy mornings and pair perfectly with tea or coffee. Their balanced sweetness and fresh lemon flavor make them enjoyable for both kids and adults.',
    ingredients: [
      { quantity: '2 cups', name: 'All-Purpose Flour' },
      { quantity: '2 pieces', name: 'Lemon' },
      { quantity: '2 tbsp', name: 'Poppy Seeds' },
      { quantity: '1/2 cup', name: 'Sugar' },
      { quantity: '2 pieces', name: 'Eggs' },
      { quantity: '1/2 cup', name: 'Butter' },
      { quantity: '1/2 cup', name: 'Yogurt' },
      { quantity: '1 tsp', name: 'Baking Powder' },
    ],
    directions: [
      { title: 'Infusing the Dry Aromatics', image: dir139, instruction: 'In a large bowl, whisk together the all-purpose flour, sugar, poppy seeds, and baking powder. The Pro Tip: Zest the two lemons directly into the sugar and use your fingertips to rub the zest into the sugar granules for about a minute. This mechanical action releases the essential oils from the lemon peel, ensuring every bite of the muffin is deeply infused with a bright, citrusy aroma rather than just localized specks of flavor.' },
      { title: 'Mix Wet Ingredients', image: dir239, instruction: 'In a separate medium bowl, beat the eggs together with the melted (and slightly cooled) butter, yogurt, and fresh lemon juice. The inclusion of yogurt is key to this recipe; its natural acidity reacts with the baking powder to create a significant "lift," resulting in a tall, bakery-style muffin top. Whisk until the mixture is smooth and completely homogenous, ensuring the dairy and fats are well-emulsified.' },
      { title: 'The Gentle Incorporation', image: dir339, instruction: 'Pour the wet mixture into the bowl of dry ingredients. Using a wide spatula, fold the two together gently. The Golden Rule: Stop mixing the moment the last streak of flour disappears. Over-mixing at this stage will develop the gluten in the flour, which turns a light, tender muffin into one that is tough and rubbery. A few small lumps in the batter are perfectly fine and will disappear during the baking process.' },
      { title: 'The Precision Rise and Bake', image: dir439, instruction: 'Line a 12-cup muffin tin with paper liners or grease thoroughly with butter. Fill each cup about three-quarters full to allow space for the batter to rise. Bake at 190°C for 18–20 minutes. You’ll know they are done when the tops are springy to the touch and a toothpick inserted into the center comes out clean. Let the muffins cool in the tin for 5 minutes before transferring them to a wire rack; this prevents the bottoms from becoming soggy while they finish setting.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/kBJG4M0lEhY?si=UBRZJTneS22rN4Ra',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:40,
      image: recipe40,
      rating: 4.9,
      category: 'Vegetarian',
      title: 'Black Bean and Corn Tacos with Salsa',
      time: '45 min',
      cuisine: 'American',
      servings:"Serves 6",
      flag: flag9,
      difficulty: 'Easy',
      tags: ['VEGETARIAN', 'HEALTHY', 'KID-FRIENDLY', 'DAIRY-FREE', 'GLUTEN-FREE'],
      description: 'These black bean and corn tacos are hearty, colorful, and packed with smoky flavor from seasoned beans, sweet corn, and fresh toppings. The black beans provide plant-based protein and creamy texture while cumin adds warmth and earthy depth. Fresh salsa, avocado, and lime create a refreshing contrast that balances the savory filling beautifully. Quick to prepare and naturally satisfying, these tacos make a delicious vegetarian meal everyone can enjoy.',
      description2: 'The toasted tortillas add a subtle smoky flavor and hold the filling together perfectly for easy serving. Avocado provides healthy fats and creamy richness that pairs beautifully with the spiced black beans. This quick recipe is naturally wholesome, colorful, and customizable with your favorite toppings or sauces. Serve them fresh and warm for a simple dinner that feels vibrant, nourishing, and comforting.',
    ingredients: [
      { quantity: '2 cans', name: 'Black Beans' },
      { quantity: '1 cup', name: 'Corn' },
      { quantity: '1 piece', name: 'Onion' },
      { quantity: '1 tsp', name: 'Cumin' },
      { quantity: '8 pieces', name: 'Small Tortillas' },
      { quantity: '1 piece', name: 'Lime' },
      { quantity: '1 piece', name: 'Avocado' },
      { quantity: '1 cup', name: 'Salsa' },
    ],
    directions: [
      { title: 'Sautéing the Smoky Filling', image: dir140, instruction: 'Finely dice the onion and sauté it in a large skillet over medium heat with a splash of oil until translucent and soft. Drain and rinse the black beans thoroughly, then add them to the skillet along with the corn and ground cumin. The Pro Tip: Use a fork or a potato masher to lightly crush about a quarter of the beans; this releases their natural starches and creates a creamier, cohesive texture that holds together better inside the taco shell, preventing the filling from falling out as you eat.' },
      { title: 'The Dry-Pan Tortilla Toast', image: dir240, instruction: 'Heat a dry, non-stick pan or a cast-iron griddle over medium-high heat. Place the small tortillas in the pan one or two at a time, heating for approximately 30 seconds per side. Look for slight char marks or small air bubbles to form—this toasted "blister" not only improves the flavor with a nutty, roasted aroma but also makes the tortillas more pliable and less likely to crack when folded.' },
      { title: 'Strategic Assembly', image: dir340, instruction: 'Spoon a generous portion of the warm black bean and corn mixture into the center of each toasted tortilla. Layer on the fresh salsa and top with thin slices of ripe avocado. The Styling Tip: By placing the heavy bean mixture at the bottom and the lighter salsa and avocado on top, you ensure the taco remains structurally sound. If you are using corn tortillas, they are naturally gluten-free, but you may want to double them up for extra stability if your salsa is particularly juicy.' },
      { title: 'The Bright Acidic Finish', image: dir440, instruction: 'Just before serving, hit each taco with a fresh squeeze of lime juice. The sharp acidity of the lime acts as a flavor enhancer, cutting through the earthiness of the beans and the richness of the avocado to make the entire dish "pop." Garnish with a sprig of fresh cilantro if desired, and serve immediately while the shells are warm and the filling is savory and aromatic.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/dQkbL2sV-co?si=d_DJs4bJPtGrtng2',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:41,
      image: recipe41,
      rating: 4.6,
      category: 'Desserts',
      title: 'Spiced Apple Cake with Cinnamon Glaze',
      time: '55 min',
      cuisine: 'Chinese',
      servings:"Serves 5",
      flag: flag17,
      difficulty: 'Intermediate',
      tags: ['DESSERTS', 'HOLIDAY', 'KID-FRIENDLY', 'DAIRY-FREE'],
      description: 'This spiced apple cake with cinnamon glaze is soft, moist, and filled with warm comforting flavors perfect for cozy gatherings. Fresh apples add natural sweetness and juicy texture while cinnamon and nutmeg create deep aromatic warmth throughout the cake. The tender crumb stays rich and flavorful while the sweet cinnamon glaze adds a beautiful finishing touch on top. Every slice delivers a balance of fruitiness, spice, and buttery softness that feels comforting and festive.',
description2: 'Chunks of fresh apple create pockets of juicy flavor that keep the cake moist and satisfying with every bite. The cinnamon glaze hardens slightly after cooling, adding sweetness and a lovely bakery-style appearance. This cake pairs perfectly with tea, coffee, or warm drinks during cooler seasons and holiday celebrations. It is simple enough for everyday baking yet elegant enough to serve for special occasions.',
    ingredients: [
      { quantity: '3 pieces', name: 'Apples' },
      { quantity: '2 cups', name: 'All-Purpose Flour' },
      { quantity: '1 cup', name: 'Sugar' },
      { quantity: '3 pieces', name: 'Eggs' },
      { quantity: '1/2 cup', name: 'Butter' },
      { quantity: '1 tsp', name: 'Cinnamon' },
      { quantity: '1/2 tsp', name: 'Nutmeg' },
      { quantity: '1 tsp', name: 'Baking Powder' },
    ],
    directions: [
      { title: 'Aromatic Apple Preparation', image: dir141, instruction: 'Peel, core, and dice the fresh apples into uniform 1-centimeter chunks. In a small bowl, toss the pieces with a generous dusting of cinnamon and a tablespoon of the measured sugar. The Pro Tip: This pre-coating ensures the apples macerate slightly, releasing their juices to create pockets of concentrated flavor throughout the cake, while the cinnamon prevents the fruit from oxidizing and turning brown.' },
      { title: 'The Aerated Batter Base', image: dir241, instruction: 'In a large mixing bowl, cream the softened butter and remaining sugar together for 3–5 minutes until the mixture is pale and light. Incorporate the eggs one at a time, beating thoroughly after each addition to ensure a stable emulsion. Sift in the all-purpose flour, baking powder, and nutmeg, then use a spatula to fold the dry ingredients into the wet mixture. Focus on a gentle folding motion to keep the air in the batter, which is essential for a light, tender crumb.' },
      { title: 'The Fruit Integration', image: dir341, instruction: 'Add the cinnamon-spiced apple chunks into the batter. Using a wide spatula, gently fold the fruit through the mixture until evenly distributed. Be careful not to overwork the batter at this stage; you want the apples to be suspended in the cake without deflating the air pockets you’ve created. The moisture from the apples will work with the baking powder to give the cake its signature "moist" texture.' },
      { title: 'The Precision Bake and Glaze', image: dir441, instruction: 'Pour the batter into a greased and floured cake tin, smoothing the top with your spatula. Bake at 175°C for 45 minutes, or until a wooden skewer inserted into the center comes out clean. The Finishing Touch: Allow the cake to cool completely before applying the cinnamon glaze. If the cake is too warm, the glaze will melt and run off; waiting until it is cool ensures the drizzle sets into a beautiful, opaque, and sweet finish that complements the warm spices of the interior.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/7vg2842aPJQ?si=MEcZzEiRMFaOmm9Y',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:42,
      image: recipe42,
      rating: 4.8,
      category: 'BBQ & Grilling',
      title: 'Grilled Shrimp Skewers with Honey Lime Glaze',
      time: '55 min',
      cuisine: 'Indian',
      servings:"Serves 8",
      flag: flag12,
      difficulty: 'Intermediate',
      tags: ['HIGH-PROTEIN', 'SPICY', 'GLUTEN-FREE', 'DAIRY-FREE'],
      description: 'These grilled shrimp skewers with honey lime glaze are smoky, juicy, and coated in a sweet tangy sauce that caramelizes beautifully on the grill. Fresh lime juice brightens the shrimp while honey creates a glossy sticky finish full of flavor. Garlic and chili flakes add savory heat that balances the sweetness and enhances the natural richness of the seafood. Fast cooking and bold flavor make this dish perfect for quick dinners or outdoor gatherings.',
description2: 'The shrimp remain tender and succulent while the grill adds delicious charred edges and smoky aroma. Honey and lime create a vibrant glaze that clings beautifully to the seafood for maximum flavor in every bite. This protein-rich recipe pairs wonderfully with rice, salads, or grilled vegetables for a complete balanced meal. Serve immediately with extra lime wedges to enhance the bright fresh flavors even more.',
    ingredients: [
      { quantity: '500 grams', name: 'Large Shrimp' },
      { quantity: '3 tbsp', name: 'Honey' },
      { quantity: '2 pieces', name: 'Lime' },
      { quantity: '2 tbsp', name: 'Soy Sauce' },
      { quantity: '2 cloves', name: 'Garlic' },
      { quantity: '1 tsp', name: 'Chili Flakes' },
      { quantity: '2 tbsp', name: 'Olive Oil' },
    ],
    directions: [
      { title: 'The Emulsified Honey-Lime Glaze', image: dir142, instruction: 'In a medium bowl, whisk together the honey, fresh lime juice, soy sauce (or Tamari), minced garlic, and red chili flakes. The Pro Tip: Whisk until the honey is completely incorporated into the citrus juice; this creates a stable emulsion that will cling to the shrimp rather than sliding off. The chili flakes add a beautiful visual pop and a heat that builds gently against the sweetness of the honey.' },
      { title: 'The Quick-Flavor Infusion', image: dir242, instruction: 'Toss the large, peeled, and deveined shrimp into the glaze. Let them marinate for exactly 15 minutes. Avoid marinating for much longer, as the high acidity of the lime juice can begin to "cook" the delicate shrimp protein (similar to ceviche), which can affect the final texture on the grill.' },
      { title: 'The Professional Skewer Prep', image: dir342, instruction: 'Thread the marinated shrimp onto wooden skewers that have been soaked in water for at least 20 minutes. The Styling Tip: For a restaurant-quality look, thread the shrimp through both the head and tail ends so they form a tight "C" shape. This prevents them from spinning on the skewer when you try to flip them, ensuring even contact with the grill grates.' },
      { title: 'High-Heat Grilling and Finishing', image: dir442, instruction: 'Place the skewers on a preheated medium-high grill. Cook for 2–3 minutes per side until the shrimp are opaque and pink with charred, caramelized edges. During the final 30 seconds, brush a fresh layer of the glaze over the shrimp to create a sticky, high-gloss finish. Serve immediately with extra lime wedges to brighten the smoky, charred flavors.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/gx_G25Uiw_s?si=Lw7oU64eA4p5rnZR',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:43,
      image: recipe43,
      rating: 4.8,
      category: 'Instant Pot',
      title: 'Vegetarian Chili in the Instant Pot',
      time: '85 min',
      cuisine: 'Thai',
      servings:"Serves 3",
      flag: flag4,
      difficulty: 'Easy',
      tags: ['VEGETARIAN', 'ONE-POT', 'MEAL PREP', 'DAIRY-FREE', 'GLUTEN-FREE', 'HIGH-PROTEIN'],
      description: 'This vegetarian Instant Pot chili is thick, hearty, and loaded with beans, vegetables, and bold warming spices that create deep comforting flavor. Pressure cooking allows the ingredients to develop a rich slow-simmered taste in a fraction of the time. Mixed beans provide plant-based protein and fiber while tomatoes and smoked spices create a savory satisfying base. Every bowl feels nourishing, filling, and perfect for cozy dinners or meal prep throughout the week.',
description2: 'The Instant Pot makes this chili incredibly convenient while still delivering a rich and velvety texture. Chili powder, cumin, and smoked paprika create layers of warmth and smoky depth that intensify as the dish sits. This wholesome one-pot meal is naturally gluten-free, dairy-free, and packed with nutrients from beans and vegetables. Top it with avocado, cilantro, or lime for a bright fresh finish that balances the hearty flavors beautifully.',
    ingredients: [
      { quantity: '2 cans', name: 'Mixed Beans' },
      { quantity: '1 can', name: 'Diced Tomatoes' },
      { quantity: '1 piece', name: 'Bell Pepper' },
      { quantity: '1 piece', name: 'Onion' },
      { quantity: '2 tbsp', name: 'Chili Powder' },
      { quantity: '1 tsp', name: 'Cumin' },
      { quantity: '1 tsp', name: 'Smoked Paprika' },
      { quantity: '500 ml', name: 'Vegetable Stock' },
    ],
    directions: [
      { title: 'Sauté and Deglaze', image: dir143, instruction: 'Set the Instant Pot to "Sauté" mode. Add a splash of oil and cook the diced onion and bell pepper for about 3 minutes until they begin to soften. The Pro Tip: After the vegetables are soft, add a tiny splash of the vegetable stock to scrape any browned bits off the bottom of the pot. This prevents the "Burn" notice and ensures all those savory caramelized flavors end up in your soup.' },
      { title: 'Blooming the Spices', image: dir243, instruction: 'Add the chili powder, cumin, and smoked paprika to the vegetables. Stir constantly for about 60 seconds. This "blooming" technique uses the heat of the pot to release the essential oils within the dried spices, transforming them from dusty powders into vibrant, fragrant layers of flavor that will permeate the entire batch of chili.' },
      { title: 'The Pressure Infusion', image: dir343, instruction: 'Add the mixed beans, diced tomatoes (including the juice), and vegetable stock. Lock the lid and set to "High Pressure" for 15 minutes. While the beans are already canned and "cooked," this high-pressure environment forces the spices and tomato acidity into the heart of the beans, giving the dish a "simmered-all-day" depth in just a few minutes.' },
      { title: 'The Finishing Quick Release', image: dir443, instruction: 'Once the timer goes off, perform a "Quick Release" to vent the steam. Give the chili a good stir; the starch from the beans will have thickened the liquid into a hearty, velvety sauce. Taste and adjust the salt if needed. Serve piping hot in bowls, topped with fresh avocado, cilantro, or a squeeze of lime for a bright finish.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/hyKahhLPpVE?si=heyVrrJizNqrEoC-',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,
    },
    {
      id:44,
      image: recipe44,
      rating: 4.4,
      category: 'Seafood',
      title: 'Garlic Butter Lobster Tails with Lemon',
      time: '15 min',
      cuisine: 'German',
      servings:"Serves 5",
      flag: flag10,
      difficulty: 'Advanced',
      tags: ['HIGH-PROTEIN', 'COMFORT FOOD', 'GLUTEN-FREE', 'DAIRY-FREE'],
     description: 'These garlic butter lobster tails are rich, buttery, and incredibly luxurious while being surprisingly simple to prepare at home. The tender lobster meat is broiled until perfectly juicy and finished with fragrant garlic butter and fresh lemon. Paprika adds warmth and subtle smokiness while the butter enhances the lobster’s naturally sweet delicate flavor. Every bite feels elegant and indulgent, making this seafood dish perfect for celebrations or romantic dinners.',
description2: 'The butterfly presentation allows the lobster meat to cook evenly while creating a beautiful restaurant-style appearance. Garlic butter seeps into every crevice of the seafood, adding savory richness and irresistible aroma. Fresh lemon juice brightens the dish and balances the buttery texture with refreshing acidity. Serve alongside crusty bread or roasted vegetables for a memorable meal that feels refined yet effortless.',
    ingredients: [
      { quantity: '4 pieces', name: 'Lobster Tails' },
      { quantity: '4 tbsp', name: 'Butter' },
      { quantity: '4 cloves', name: 'Garlic' },
      { quantity: '1 piece', name: 'Lemon' },
      { quantity: '1 tbsp', name: 'Fresh Parsley' },
      { quantity: '1/4 tsp', name: 'Paprika' },
      { quantity: '1/2 tsp', name: 'Salt' },
    ],
    directions: [
      { title: 'The Butterfly "Piggyback" Technique', image: dir144, instruction: `Using sharp kitchen shears, cut down the center of the top shell toward the tail, stopping just before the fin. Using your fingers, gently spread the shell apart and lift the lobster meat upward, resting it on top of the shell. This "butterfly" style isn't just for looks; it allows the high heat of the broiler to reach the meat directly, ensuring a quick, even cook while creating a stunning, elevated presentation.` },
      { title: 'Infusing the Garlic Butter', image: dir244, instruction: 'In a small saucepan over low heat, melt the butter with the minced garlic, paprika, and a squeeze of fresh lemon. The Pro Tip: Keep the heat low to avoid browning the garlic bits, which can turn bitter. The paprika adds a subtle smokiness and gives the lobster meat a beautiful, warm golden hue as it broils.' },
      { title: 'The High-Heat Broil', image: dir344, instruction: 'Place the prepped tails on a baking sheet and brush the meat generously with the garlic butter. Broil on high for 8–10 minutes. The Sensory Cue: You’re looking for the shell to turn bright red and the meat to become opaque and slightly firm to the touch. Avoid overcooking, as lobster can turn from succulent to rubbery very quickly—the internal temperature should hit exactly 60°C.' },
      { title: 'The Finishing Drizzle', image: dir444, instruction: 'Once out of the oven, immediately hit the tails with the remaining warm garlic butter. Garnish with a shower of finely chopped fresh parsley and serve with lemon wedges on the side. The acidity of the lemon perfectly balances the richness of the butter and the natural sweetness of the lobster.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/_3NyjYbizGA?si=LhOLcRVzI3bGJojy',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:45,
      image: recipe45,
      rating: 4.8,
      category: 'Meat',
      title: 'Spinach and Feta Stuffed Chicken Breasts',
      time: '55 min',
      cuisine: 'Turkish',
      servings:"Serves 8",
      flag: flag7,
      difficulty: 'Intermediate',
      tags: ['HIGH-PROTEIN', 'HEALTHY', 'MEAT', 'GLUTEN-FREE'],
       description: 'These spinach and feta stuffed chicken breasts are juicy, flavorful, and packed with creamy savory filling in every slice. Tender chicken is stuffed with garlicky spinach and salty feta cheese, creating a rich and satisfying combination of textures and flavors. Searing the chicken first locks in moisture while giving the outside a beautiful golden crust before baking. This protein-packed dish feels elegant enough for entertaining while remaining simple enough for weeknight dinners.',
description2: 'The spinach and feta filling keeps the chicken moist while adding Mediterranean-inspired flavor and creamy richness. Garlic and Italian herbs enhance the savory profile and pair beautifully with roasted vegetables or fresh salads. Baking after searing ensures the chicken stays tender inside while maintaining a crisp flavorful exterior. This healthy gluten-free meal is satisfying, visually impressive, and perfect for balanced family dinners.',
    ingredients: [
      { quantity: '4 pieces', name: 'Chicken Breasts' },
      { quantity: '100 grams', name: 'Feta Cheese' },
      { quantity: '100 grams', name: 'Baby Spinach' },
      { quantity: '3 cloves', name: 'Garlic' },
      { quantity: '2 tbsp', name: 'Olive Oil' },
      { quantity: '1 tsp', name: 'Italian Seasoning' },
      { quantity: '1/2 tsp', name: 'Salt' },
    ],
    directions: [
      { title: 'The Sauté and Squeeze Filling', image: dir145, instruction: 'Wilt the baby spinach in a pan with a touch of olive oil and the minced garlic. The Pro Tip: Once wilted, let the spinach cool slightly and squeeze out any excess moisture with a paper towel before mixing it with the crumbled feta. This prevents the filling from becoming watery and ensures the chicken stays juicy rather than soggy during the bake.' },
      { title: 'The Pocket Technique', image: dir245, instruction: 'Using a sharp knife, cut a horizontal slit into the thickest part of each chicken breast to create a deep pocket, being careful not to cut all the way through. Stuff each pocket generously with the spinach and feta mixture. Secure the opening with 2–3 toothpicks to lock the filling inside, ensuring that salty, creamy goodness melts into the meat rather than leaking out into the pan.' },
      { title: 'The Flavor-Lock Sear', image: dir345, instruction: 'Rub the outside of the chicken with Italian seasoning and salt. Heat olive oil in an oven-safe skillet over medium-high heat. Sear the chicken for 3 minutes per side until a deep, golden-brown crust forms. This "sear-to-oven" method is a professional favorite; it creates a beautiful texture on the outside while the oven handles the gentle, even cooking of the interior.' },
      { title: 'The Convection Finish', image: dir445, instruction: 'Transfer the entire skillet directly into a preheated oven at 190°C for 20 minutes. This two-stage cooking process ensures the chicken reaches a safe internal temperature of 74°C while remaining incredibly tender. Let the meat rest for 5 minutes after removing it from the oven to allow the juices to redistribute before you pull out the toothpicks and slice.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/YjFLTjBkF78?si=HuZT8YOjIBBUEqUd',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:46,
      image: recipe46,
      rating: 4.5,
      category: 'Healthy',
      title: 'Air-Fried Cauliflower Bites with Spices',
      time: '45 min',
      cuisine: 'Spanish',
      servings:"Serves 2",
      flag: flag18,
      difficulty: 'Easy',
      tags: ['HEALTHY', 'LOW-CARB', 'VEGETARIAN', 'GLUTEN-FREE', 'DAIRY-FREE', 'KID-FRIENDLY'],
      description: 'These air-fried cauliflower bites are crispy, flavorful, and coated in warm spices that create an irresistible crunchy snack or side dish. Air frying gives the cauliflower a golden roasted texture with very little oil while keeping the inside tender and satisfying. Smoked paprika, cumin, and turmeric add bold earthy flavor and vibrant color to every bite. This healthy recipe transforms simple cauliflower into a delicious crowd-pleasing appetizer full of texture and nutrients.',
description2: 'The air fryer creates a crispy exterior without deep frying, making these bites lighter while still incredibly satisfying. Lemon juice added at the end brightens the spices and enhances the natural sweetness of the roasted cauliflower beautifully. Packed with fiber and nutrients, this low-carb snack is wholesome enough for everyday meals or healthy entertaining. Serve hot with your favorite dipping sauce for the perfect crunchy flavorful side.',
    ingredients: [
      { quantity: '1 piece', name: 'Cauliflower Head' },
      { quantity: '2 tbsp', name: 'Olive Oil' },
      { quantity: '1 tsp', name: 'Cumin' },
      { quantity: '1 tsp', name: 'Smoked Paprika' },
      { quantity: '1/2 tsp', name: 'Turmeric' },
      { quantity: '1/2 tsp', name: 'Salt' },
      { quantity: '1 tbsp', name: 'Lemon Juice' },
    ],
    directions: [
      { title: 'The Uniform Florets', image: dir146, instruction: 'Break the cauliflower head down into small, bite-sized florets. The Pro Tip: Try to keep the pieces as uniform in size as possible. This ensures that every bite cooks at the same rate, preventing smaller pieces from burning while the larger ones remain raw in the center. Ensure the florets are completely dry after washing; any excess water will cause the cauliflower to steam rather than crisp up.' },
      { title: 'The Spice Emulsion', image: dir246, instruction: 'In a large bowl, whisk the olive oil with the cumin, smoked paprika, turmeric, and salt. Add the cauliflower florets and toss vigorously until every crevice is coated in the vibrant, golden oil. The turmeric provides a beautiful color, while the smoked paprika adds a "charred" depth of flavor that mimics deep-frying.' },
      { title: 'The Single-Layer Air Fry', image: dir346, instruction: 'Arrange the seasoned florets in your air fryer basket in a single layer—do not overcrowd. Cook at 200°C for 15 minutes. The Golden Rule: Shake the basket halfway through the cooking time. This redistributes the oil and ensures the hot air reaches all sides of the florets, resulting in a consistent, "fried" crunch across the entire batch.' },
      { title: 'The Bright Acidic Finish', image: dir446 , instruction: 'Immediately after removing the bites from the air fryer, hit them with a fresh squeeze of lemon juice. The acidity of the lemon cuts through the earthy spices and highlights the natural sweetness of the roasted cauliflower. Serve immediately while hot and crispy, perhaps paired with a cool herb-tossed dip.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/nXpZ0iQAcqw?si=c-G2NwIHgf2XaHHo',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,
    },
    {
      id:47,
      image: recipe47,
      rating: 4.8,
      category: 'Soups',
      title: 'Tomato Basil Cream Soup with Croutons',
      time: '80 min',
      cuisine: 'German',
      servings:"Serves 3",
      flag: flag10,
      difficulty: 'Easy',
      tags: ['COMFORT FOOD', 'MEAL PREP', 'ONE-POT', 'VEGETARIAN', 'KID-FRIENDLY'],
       description: 'This tomato basil cream soup is rich, velvety, and deeply comforting with the perfect balance of sweet roasted tomatoes and fresh basil. Roasting the tomatoes intensifies their natural sweetness and creates a bold savory flavor that forms the heart of the soup. Cream adds silky smooth texture while garlic and onions build aromatic depth throughout every spoonful. Warm, hearty, and satisfying, this classic soup is perfect for cozy lunches or comforting dinners.',
description2: 'Fresh basil brings brightness and herbal aroma that balances the richness of the creamy tomato base beautifully. The smooth blended texture creates a restaurant-style soup that pairs perfectly with grilled cheese or crusty bread. Roasted tomatoes provide antioxidants and deep concentrated flavor while cream softens the natural acidity. This make-ahead friendly soup reheats wonderfully and becomes even more flavorful as the ingredients meld together.',
    ingredients: [
      { quantity: '1 kg', name: 'Tomatoes' },
      { quantity: '1 bunch', name: 'Fresh Basil' },
      { quantity: '1 piece', name: 'Onion' },
      { quantity: '4 cloves', name: 'Garlic' },
      { quantity: '1 cup', name: 'Heavy Cream' },
      { quantity: '500 ml', name: 'Vegetable Stock' },
      { quantity: '2 tbsp', name: 'Olive Oil' },
      { quantity: '1 tsp', name: 'Sugar' },
    ],
    directions: [
      { title: 'The Flavor-Intensifying Roast', image: dir147, instruction: 'Halve the tomatoes and place them cut-side up on a baking sheet. Drizzle with a little olive oil and roast at 200°C for 25 minutes. The Pro Tip: Roasting the tomatoes first caramelizes their natural sugars and evaporates excess water, resulting in a much deeper, more concentrated "umami" flavor than using raw or canned tomatoes. Look for slightly charred edges—that’s where the flavor lives.' },
      { title: 'Building the Aromatic Base', image: dir247, instruction: 'While the tomatoes roast, sauté the finely diced onion and garlic in a heavy-bottomed pot with olive oil. Cook over medium-low heat until they are soft, translucent, and fragrant, but not browned. This slow-sweating technique creates a sweet, mellow base that balances the natural acidity of the tomatoes without overpowering them.' },
      { title: 'The High-Speed Silk Blend', image: dir347, instruction: 'Transfer the roasted tomatoes (and all the juices from the pan) into the pot with the onions, fresh basil, and vegetable stock. Use an immersion blender or a high-speed blender to process the mixture until it is completely smooth. If you want a truly "fine-dining" texture, you can pass the blended soup through a fine-mesh sieve to remove any remaining tomato skins or seeds.' },
      { title: 'Balancing and Tempering', image: dir447, instruction: `Stir in the heavy cream and a teaspoon of sugar. The sugar isn't meant to make the soup sweet; it acts as a "buffer" to neutralize any sharp acidity from the tomatoes. Heat the soup gently on low—do not let it reach a rolling boil once the cream is added, as this can cause the dairy to separate. Serve hot, topped with crunchy croutons and a few hand-torn basil leaves for a fresh, peppery finish.` },
    ],
    videoUrl: 'https://www.youtube.com/embed/szjZ3vqwyXE?si=s3pJfWdRk3vgBJNc',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:48,
      image: recipe48,
      rating: 4.6,
      category: 'Snacks',
      title: 'Crispy Sesame Glazed Chicken Wings',
      time: '80 min',
      cuisine: 'Lebanese',
      servings:"Serves 6",
      flag: flag1,
      difficulty: 'Easy',
      tags: ['HIGH-PROTEIN', 'SPICY', 'KID-FRIENDLY', 'GLUTEN-FREE', 'DAIRY-FREE'],
       description: 'Tender chicken wings are baked until irresistibly crispy, then coated in a rich sesame glaze that delivers the perfect balance of sweet, savory, and smoky flavors. Every bite is packed with juicy texture and a glossy caramelized finish that makes these wings impossible to resist. Toasted sesame seeds and garlic elevate the flavor with a warm nutty aroma. Perfect for game nights, family gatherings, or restaurant-style snacking at home.',
description2: 'These sesame glazed wings combine crunchy skin with a sticky homemade sauce that clings beautifully to every piece. The honey, soy, and garlic create deep umami richness while the sesame oil adds authentic Asian-inspired flavor. They are easy enough for weeknight cooking yet impressive enough for entertaining guests. Serve them hot with green onions and extra sesame seeds for the ultimate crowd-pleasing appetizer.',
    ingredients: [
      { quantity: '1 kg', name: 'Chicken Wings' },
      { quantity: '3 tbsp', name: 'Soy Sauce' },
      { quantity: '2 tbsp', name: 'Honey' },
      { quantity: '2 tbsp', name: 'Sesame Oil' },
      { quantity: '3 cloves', name: 'Garlic' },
      { quantity: '2 tbsp', name: 'Sesame Seeds' },
      { quantity: '1 tsp', name: 'Ginger' },
    ],
    directions: [
      { title: 'The High-Heat Crisp', image: dir148, instruction: 'Pat the chicken wings completely dry with paper towels—moisture is the enemy of crispiness. Season lightly with salt and place them on a wire rack over a baking sheet. Bake at 220°C for 35 minutes. The Pro Tip: Using a wire rack allows hot air to circulate under the wings, ensuring the skin becomes shatteringly crisp on all sides without having to flip them constantly.' },
      { title: 'Reducing the Glossy Glaze', image: dir248, instruction: 'While the wings bake, combine the soy sauce (or Tamari), honey, sesame oil, minced garlic, and grated ginger in a small saucepan over medium heat. Simmer for about 3–5 minutes until the mixture reduces slightly and becomes thick enough to coat the back of a spoon. This simmering stage is crucial to mellow the raw garlic and ginger while concentrating the honey into a sticky, professional-grade glaze.' },
      { title: 'The Aerated Toss', image: dir348, instruction: 'Once the wings are golden and crispy, transfer them immediately to a large stainless-steel bowl. Pour the warm glaze over the wings and toss vigorously. The goal is to create a thin, even "varnish" over the crispy skin rather than soaking them; this ensures they stay crunchy even after being coated in the sweet and savory sauce.' },
      { title: 'The Toasted Garnish', image: dir448, instruction: 'Transfer the coated wings to a serving platter. Immediately sprinkle with sesame seeds and finely sliced green onions. The residual heat from the glaze will slightly toast the seeds and soften the onions, releasing their aromatics just as the dish hits the table.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/ZDvX0GM75GU?si=UenGtE3jJyM9t1KY',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:49,
      image: recipe49,
      rating: 4.9,
      category: 'Meat',
      title: 'Grilled Lamb Chops with Rosemary Marinade',
      time: '80 min',
      cuisine: 'Thai',
      servings:"Serves 8",
      flag: flag4,
      difficulty: 'Advanced',
      tags: ['MEAT', 'HIGH-PROTEIN', 'HOLIDAY', 'GLUTEN-FREE', 'DAIRY-FREE'],
       description: 'These grilled lamb chops are marinated in fragrant rosemary, garlic, olive oil, and lemon juice to create a deeply flavorful and tender bite. The high-heat grilling develops a smoky crust while keeping the inside juicy and succulent. Each chop is infused with herbaceous Mediterranean-inspired flavors that feel both rustic and elegant. A luxurious dish perfect for celebrations, dinner parties, or gourmet-style home cooking.',
description2: 'The rosemary marinade penetrates the lamb beautifully, creating layers of earthy and citrusy flavor in every bite. Grilling over intense heat caramelizes the natural fats for an irresistible smoky finish. Resting the meat after cooking ensures maximum tenderness and juiciness throughout. Pair these lamb chops with roasted vegetables, mashed potatoes, or fresh salad for a restaurant-quality experience.',
    ingredients: [
      { quantity: '8 pieces', name: 'Lamb Chops' },
      { quantity: '3 tbsp', name: 'Fresh Rosemary' },
      { quantity: '4 cloves', name: 'Garlic' },
      { quantity: '3 tbsp', name: 'Olive Oil' },
      { quantity: '1 piece', name: 'Lemon' },
      { quantity: '1 tsp', name: 'Salt' },
      { quantity: '1/2 tsp', name: 'Black Pepper' },
    ],
    directions: [
      { title: 'Crafting the Infused Marinade', image: dir149, instruction: 'Finely mince the fresh rosemary and garlic. In a small bowl, whisk them together with the olive oil, lemon juice, salt, and black pepper. The Pro Tip: Brushing or bruising the rosemary leaves before mincing helps release the essential oils, ensuring the woody, aromatic flavor penetrates the meat rather than just sitting on the surface.' },
      { title: 'The Deep-Flavor Marination', image: dir249, instruction: 'Coat each lamb chop thoroughly in the marinade, ensuring both sides are well-covered. For a quick meal, 30 minutes at room temperature will suffice, but for a truly advanced depth of flavor, cover and refrigerate them overnight. If refrigerating, make sure to pull the chops out of the fridge 20 minutes before grilling; bringing the meat to room temperature ensures even cooking throughout.' },
      { title: 'The High-Heat Sear', image: dir349, instruction: 'Preheat your grill to high heat. Place the lamb chops down and leave them undisturbed for 3–4 minutes to develop a rich, caramelized crust. Flip once and grill for another 3 minutes for a perfect medium-rare (internal temperature of 54°C). The high heat is essential to render the fat on the edges, making it crispy and flavorful rather than chewy.' },
      { title: 'The Essential Rest', image: dir449, instruction: 'Transfer the chops to a warm platter and tent loosely with foil. Let them rest for at least 5 minutes. This allows the juices—which have been pushed to the center by the heat—to redistribute back through the fibers of the meat. This short wait is the difference between a dry chop and one that is succulent and tender from the first bite to the last.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/IHXt_X5vUAM?si=2TYOJmgEMSH-wbiD',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:50,
      image: recipe50,
      rating: 4.5,
      category: 'Healthy',
      title: 'Asian Slaw with Tangy Sesame Dressing',
      time: '10 min',
      cuisine: 'Italian',
      servings:"Serves 4",
      flag: flag14,
      difficulty: 'Beginner',
      tags: ['HEALTHY', 'LOW-CARB', 'DAIRY-FREE', 'GLUTEN-FREE'],
       description: 'This vibrant Asian slaw is loaded with crunchy cabbage, crisp carrots, and a bold sesame dressing that delivers the perfect mix of sweet, tangy, and savory flavors. Every forkful is refreshing, colorful, and packed with texture. The sesame oil and rice vinegar create a light yet flavorful dressing that coats every strand beautifully. It is a healthy side dish that complements grilled meats, seafood, or noodles effortlessly.',
description2: 'Fresh vegetables stay crunchy while soaking up the flavorful sesame dressing for a perfectly balanced salad. The resting time allows the cabbage to soften slightly without losing its satisfying bite. Toasted sesame seeds and green onions add nutty depth and freshness to every serving. Ideal for meal prep, picnics, or quick healthy lunches with bold Asian-inspired flavor.',
    ingredients: [
      { quantity: '2 cups', name: 'Cabbage' },
      { quantity: '1 piece', name: 'Carrot' },
      { quantity: '2 tbsp', name: 'Sesame Oil' },
      { quantity: '3 tbsp', name: 'Rice Vinegar' },
      { quantity: '2 tbsp', name: 'Soy Sauce' },
      { quantity: '1 tbsp', name: 'Honey' },
      { quantity: '2 tbsp', name: 'Sesame Seeds' },
      { quantity: '3 pieces', name: 'Green Onions' },
    ],
    directions: [
      { title: 'The Precision Shred', image: dir150, instruction: `Thinly shred the cabbage (a mix of red and green adds beautiful color) and julienne the carrot into fine matchsticks. The Pro Tip: For the best texture, use a mandoline or a very sharp chef's knife to get the cabbage as fine as possible. Thinly sliced vegetables create more surface area, allowing the dressing to coat every strand and slightly soften the cabbage without losing its signature "snap."` },
      { title: 'Emulsifying the Dressing', image:dir250, instruction: 'In a small bowl, whisk together the sesame oil, rice vinegar, soy sauce (or Tamari), and honey. Whisk vigorously until the honey is fully dissolved and the oil has emulsified into the vinegar. This creates a cohesive, silky dressing that clings to the vegetables rather than pooling at the bottom of the bowl.' },
      { title: 'The Marination Toss', image: dir350, instruction: 'Combine the shredded cabbage and carrots in a large mixing bowl. Pour the dressing over the vegetables and toss thoroughly using tongs. The Secret: Let the slaw sit for at least 15–20 minutes before serving. This short resting period allows the acidity in the rice vinegar to slightly "pickle" the vegetables, deepening the flavor and making the slaw more tender while keeping it crunchy.' },
      { title: 'The Final Garnish', image: dir450, instruction: 'Just before serving, toss in the sliced green onions and a generous sprinkle of sesame seeds. For an extra professional touch, lightly toast the sesame seeds in a dry pan for 2 minutes before adding them; this releases their natural oils and provides a much deeper, nuttier aroma that complements the toasted sesame oil in the dressing.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/DmJzirkIbZM?si=7qyUrK5MmtkLgXQ2',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:51,
      image: recipe51,
      rating: 4.6,
      category: 'Desserts',
      title: 'Chocolate Chip Cookies with Gooey Marshmallows',
      time: '85 min',
      cuisine: 'Greek',
      servings:"Serves 1",
      flag: flag11,
      difficulty: 'Easy',
      tags: ['DESSERTS', 'KID-FRIENDLY'],
       description: 'These chocolate chip cookies are soft, chewy, and filled with gooey marshmallow pockets that melt beautifully into the dough. Rich chocolate chips and buttery brown sugar create a warm bakery-style flavor in every bite. The marshmallows caramelize slightly in the oven, giving the cookies a toasted campfire-inspired sweetness. Perfect for dessert platters, parties, or comforting homemade treats.',
description2: 'Classic chocolate chip cookies get an indulgent upgrade with melted marshmallows tucked into every bite. The cookies bake with crisp golden edges while staying soft and gooey in the center. Extra chocolate chips on top create a beautiful bakery-style presentation straight from the oven. Enjoy them warm with milk or ice cream for the ultimate dessert experience.',
    ingredients: [
      { quantity: '2 cups', name: 'All-Purpose Flour' },
      { quantity: '1 cup', name: 'Chocolate Chips' },
      { quantity: '1 cup', name: 'Mini Marshmallows' },
      { quantity: '1 cup', name: 'Butter' },
      { quantity: '3/4 cup', name: 'Brown Sugar' },
      { quantity: '2 pieces', name: 'Eggs' },
      { quantity: '1 tsp', name: 'Vanilla Extract' },
      { quantity: '1 tsp', name: 'Baking Soda' },
    ],
    directions: [
      { title: 'Creaming for Structure', image: dir151 , instruction: 'In a large bowl, beat the softened butter and brown sugar together for at least 3–5 minutes until the mixture is pale, light, and doubled in volume. This "creaming" process incorporates air, which is vital for a cookie that is soft in the center with a slight chew. Add the eggs one at a time, followed by the vanilla extract, beating well after each addition to create a stable emulsion.' },
      { title: 'The Gentle Dry Integration', image: dir251, instruction: 'Sift the all-purpose flour and baking soda directly into the wet ingredients. Use a spatula to fold them in just until the last streaks of flour disappear. The Pro Tip: Over-mixing at this stage will develop gluten, leading to a tough, bready cookie. Keeping the mixing to a minimum ensures a tender, melt-in-your-mouth crumb.' },
      { title: 'The Mix-In Folding Technique', image: dir351, instruction: 'Gently fold in the chocolate chips and mini marshmallows. To get those perfect "pockets" of goo, try to keep the marshmallows somewhat chilled before adding them. If you want a more professional look, reserve a few chocolate chips and marshmallows to press into the top of each dough ball just before they go into the oven.' },
      { title: 'The Precision Bake & Set', image: dir451, instruction: 'Drop rounded tablespoons of dough onto a parchment-lined baking tray, leaving plenty of space for spreading. Bake at 175°C for 10–12 minutes. The Sensory Cue: Remove them when the edges are just beginning to turn golden brown, even if the centers still look slightly underdone. The marshmallows will be puffed and molten; as the cookies cool on the tray for 5 minutes, they will "set," creating that iconic chewy texture and gooey marshmallow center.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/XDfFH-nUrUM?si=1w1xJLjK1KojMPGv',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,
    },
    {
      id:52,
      image: recipe52,
      rating: 4.6,
      category: 'Snacks',
      title: 'Classic Italian Margherita Pizza Slices',
      time: '90 min',
      cuisine: 'Italian',
      servings:"Serves 2",
      flag: flag14,
      difficulty: 'Intermediate',
      tags: ['COMFORT FOOD', 'KID-FRIENDLY', 'VEGETARIAN'],
      description: 'This authentic margherita pizza features a crisp airy crust topped with rich tomato sauce, creamy mozzarella, and fragrant fresh basil. The combination of simple ingredients creates bold Italian flavor with every bite. High-heat baking produces a lightly charred crust and bubbling cheese just like traditional pizzeria pizza. A timeless comfort food loved for its freshness, simplicity, and balance.',
description2: 'Fresh mozzarella melts beautifully over the tangy tomato base while basil adds a burst of herbal freshness after baking. The hand-stretched dough creates a light and chewy crust with crisp golden edges. Using a very hot oven ensures the pizza cooks quickly while maintaining authentic texture and flavor. Perfect for pizza nights, gatherings, or classic homemade Italian meals.',
    ingredients: [
      { quantity: '2 cups', name: 'Pizza Flour' },
      { quantity: '1 cup', name: 'Tomato Sauce' },
      { quantity: '200 grams', name: 'Fresh Mozzarella' },
      { quantity: '1 bunch', name: 'Fresh Basil' },
      { quantity: '2 tbsp', name: 'Olive Oil' },
      { quantity: '1 tsp', name: 'Active Dry Yeast' },
      { quantity: '1/2 tsp', name: 'Salt' },
    ],
    directions: [
      { title: 'The Long-Fermentation Dough', image: dir152, instruction: 'In a large bowl, combine the pizza flour, yeast, salt, olive oil, and warm water. Knead the dough vigorously for 10 minutes until it is smooth, elastic, and bounces back when poked. Place it in a lightly oiled bowl, cover with a damp cloth, and let it rise in a warm spot for at least 1 hour. For a more professional flavor, you can let it proof in the fridge overnight to develop those characteristic air bubbles in the crust.' },
      { title: 'The Hand-Stretching Technique', image: dir252, instruction: 'Preheat your oven to its highest possible setting (usually 250°C–275°C). On a floured surface, gently press the air from the center of the dough toward the edges to form a rim. Stretch the dough into a thin round using your knuckles, being careful not to tear the center. Avoid using a rolling pin; hand-stretching preserves the internal air pockets, ensuring the crust remains light and airy rather than dense.' },
      { title: 'Minimalist Layering', image: dir352, instruction: 'Spread a thin layer of high-quality tomato sauce over the base, leaving about an inch for the crust. Tear the fresh mozzarella into bite-sized chunks and scatter them evenly. The Pro Tip: Pat the mozzarella dry with paper towels before adding it; fresh mozzarella has high water content, and drying it prevents your pizza from becoming soggy in the middle.' },
      { title: 'The High-Heat Flash Bake', image: dir452, instruction: 'Slide the pizza onto a preheated baking stone or a heavy inverted baking sheet. Bake for 8–10 minutes until the cheese is bubbling and the crust has developed charred, golden spots. Immediately upon removing from the oven, scatter fresh basil leaves over the top and add a final drizzle of extra virgin olive oil. Adding the basil after baking prevents the leaves from turning bitter and black.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/vcfNpDtVqOw?si=G0Ty0JlOJW_VFQ81',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,
  
    },
    {
      id:53,
      image: recipe53,
      rating: 4.5,
      category: 'Instant Pot',
      title: 'Instant Pot Honey Garlic Beef Chops',
      time: '15 min',
      cuisine: 'Turkish',
      servings:"Serves 12",
      flag: flag7,
      difficulty: 'Easy',
      tags: ['MEAT', 'ONE-POT', 'QUICK MEALS', 'HIGH-PROTEIN', 'GLUTEN-FREE', 'DAIRY-FREE'],
       description: 'These Instant Pot honey garlic beef chops are tender, juicy, and coated in a rich sweet-savory glaze packed with garlic flavor. Pressure cooking locks in moisture while transforming the beef into fork-tender perfection in a fraction of the usual time. The glossy honey garlic sauce clings beautifully to every chop for maximum flavor. A comforting one-pot dinner ideal for busy weeknights.',
description2: 'Searing the beef first creates deep caramelized flavor that enhances the entire dish. The pressure cooker intensifies the honey, soy, and garlic into a bold savory glaze with incredible richness. A cornstarch slurry thickens the sauce into a silky coating perfect for spooning over rice or mashed potatoes. Quick, hearty, and satisfying with minimal cleanup required.',
    ingredients: [
      { quantity: '4 pieces', name: 'Beef Chops' },
      { quantity: '4 tbsp', name: 'Honey' },
      { quantity: '5 cloves', name: 'Garlic' },
      { quantity: '3 tbsp', name: 'Soy Sauce' },
      { quantity: '1 cup', name: 'Beef Broth' },
      { quantity: '1 tbsp', name: 'Cornstarch' },
      { quantity: '2 tbsp', name: 'Olive Oil' },
    ],
    directions: [
      { title: 'The Maillard Sear', image: dir153, instruction: 'Set your Instant Pot to "Sauté" mode and add the olive oil. Once the pot is hot, sear the beef chops for 3 minutes per side. The Pro Tip: Do not skip this step! Searing creates a deep brown crust that locks in moisture and provides the foundational savory depth for the entire dish. Once seared, remove the chops temporarily and add a splash of the broth to scrape up the browned bits from the bottom to prevent a "Burn" notice.' },
      { title: 'The Honey-Garlic Infusion', image: dir253, instruction: 'In a small bowl, whisk together the honey, minced garlic, soy sauce, and the remaining beef broth. Place the seared beef chops back into the pot and pour the sauce over them. The combination of honey and soy creates a perfect sweet-and-salty balance, while the pressure from the cooker will force the garlic essence deep into the fibers of the meat.' },
      { title: 'Precision Pressure Cooking', image: dir353, instruction: 'Lock the lid and set the Instant Pot to "High Pressure" for 20 minutes. After the timer goes off, allow for a 10-minute natural pressure release before toggling the valve to "Quick Release." This gradual drop in pressure is critical for beef; it prevents the muscle fibers from seizing up, ensuring the chops remain tender and succulent rather than tough.' },
      { title: 'The Glaze and Thickening Phase', image: dir453, instruction: 'Carefully remove the beef and set it aside on a warm plate. In a small cup, mix the cornstarch with two tablespoons of cold water to create a "slurry." Switch the Instant Pot back to "Sauté" mode and stir the slurry into the bubbling sauce. Whisk constantly for 1–2 minutes until the sauce transforms into a thick, high-gloss glaze. Pour the reduction over the beef and serve immediately.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/Se1eAwfpfrU?si=b3sNTftw3x341pFW',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:54,
      image: recipe54,
      rating: 4.9,
      category: 'BBQ & Grilling',
      title: 'Grilled Pineapple Shrimp Skewers with Sweet Chili',
      time: '55 min',
      cuisine: 'American',
      servings:"Serves 1",
      flag: flag9,
      difficulty: 'Intermediate',
      tags: ['HIGH-PROTEIN', 'SPICY', 'GLUTEN-FREE', 'DAIRY-FREE'],
      description: 'These grilled pineapple shrimp skewers combine juicy shrimp and caramelized pineapple for a tropical explosion of sweet and spicy flavor. The sweet chili glaze creates a sticky smoky coating that perfectly complements the charred grill marks. Bright lime juice and garlic add freshness and depth to every bite. A colorful summer dish ideal for cookouts, gatherings, or light dinners.',
description2: 'The pineapple becomes beautifully caramelized on the grill while the shrimp stay tender and juicy inside. Sweet chili sauce balances heat and sweetness for a bold island-inspired flavor profile. Quick cooking makes these skewers perfect for fast meals without sacrificing taste or presentation. Serve them with rice, salad, or extra dipping sauce for a vibrant seafood feast.',
    ingredients: [
      { quantity: '500 grams', name: 'Large Shrimp' },
      { quantity: '1 piece', name: 'Pineapple' },
      { quantity: '3 tbsp', name: 'Sweet Chili Sauce' },
      { quantity: '2 tbsp', name: 'Soy Sauce' },
      { quantity: '1 piece', name: 'Lime' },
      { quantity: '2 cloves', name: 'Garlic' },
      { quantity: '1 tbsp', name: 'Olive Oil' },
    ],
    directions: [
      { title: 'Tropical Prep and Texture', image: dir154, instruction: 'Peel and devein the large shrimp, leaving the tails on for a more professional look and easier handling. Cube the fresh pineapple into 1-inch chunks, ensuring they are roughly the same thickness as the shrimp. This uniformity is the secret to even cooking; it ensures the pineapple edges caramelize at the exact moment the shrimp reaches its juicy peak.' },
      { title: 'Infusing the Sweet Chili Glaze', image: dir254, instruction: 'In a small bowl, whisk together the sweet chili sauce, soy sauce, fresh lime juice, and minced garlic. This glaze is a masterclass in balance: the chili provides a gentle heat, the soy adds umami depth, and the lime cuts through the sugar to keep the flavor bright and tropical. Set aside a small portion of the glaze in a separate dish to use as a fresh dipping sauce later.' },
      { title: 'Threading and High-Heat Grilling', image: dir354, instruction: 'Alternately thread the shrimp and pineapple cubes onto your skewers. Lightly brush the assembly with olive oil to prevent sticking. Place the skewers over a preheated medium-high grill. Cook for 2–3 minutes per side. The Sensory Cue: Look for the shrimp to turn opaque and the pineapple edges to develop dark, caramelized "grill marks," which signal that the natural sugars are concentrating.' },
      { title: 'The Glaze and Caramelization Finish', image: dir454, instruction: 'During the final 60 seconds of grilling, generously brush the skewers with the sweet chili glaze. Do not apply the glaze too early; the high sugar content can burn before the shrimp is cooked. Allow the heat to "set" the glaze until it becomes bubbly and slightly charred. Remove from the heat immediately and serve with the reserved fresh glaze and a wedge of lime.' },
    ],
    videoUrl: 'https://www.youtube.com/embed/0CvoPVQuUQI?si=GnWMamHt48fAYiV-',
    galleryImages: [],
    author: 'Olivia Thompson',
    authorImage: author_img,

    },
    {
      id:55,
      image: recipe55,
      rating: 4.8,
      category: 'Seafood',
      title: 'Herb Crusted Tilapia with Lemon Garlic Butter',
      time: '60 min',
      cuisine: 'Italian',
      servings:"Serves 5",
      flag: flag14,
      difficulty: 'Intermediate',
      tags: ['HIGH-PROTEIN', 'HEALTHY', 'GLUTEN-FREE'],
      description: 'This herb crusted tilapia is flaky, tender, and topped with a golden breadcrumb coating infused with garlic and fresh herbs. The crisp crust contrasts beautifully with the delicate fish while lemon butter sauce adds bright richness. Every bite feels light yet satisfying, making it perfect for healthy dinners. A quick seafood recipe with elegant restaurant-style flavor.',
description2: 'Fresh herbs and breadcrumbs create a crispy flavorful crust that seals in the fish’s natural moisture. Baking at high heat ensures the tilapia stays juicy while the topping turns perfectly golden. The lemon garlic butter sauce adds a silky citrus finish that enhances the seafood beautifully. Serve with vegetables, salad, or rice for a balanced and wholesome meal.',
      ingredients: [
        { quantity: '4 pieces', name: 'Tilapia Fillets' },
        { quantity: '1 cup', name: 'Breadcrumbs' },
        { quantity: '3 cloves', name: 'Garlic' },
        { quantity: '2 tbsp', name: 'Fresh Herbs' },
        { quantity: '3 tbsp', name: 'Butter' },
        { quantity: '1 piece', name: 'Lemon' },
        { quantity: '2 tbsp', name: 'Olive Oil' },
      ],
      directions: [
        { title: 'Create the Aromatic Herb Crust', image: dir155, instruction: 'In a medium bowl, combine the breadcrumbs, minced garlic, finely chopped fresh herbs (like parsley, dill, or thyme), and olive oil. Stir the mixture until the breadcrumbs are evenly moistened and resemble wet sand. This oil integration is the secret to a professional crust; it ensures the breadcrumbs turn a deep, uniform gold in the oven rather than staying pale and dry.' },
        { title: 'The Precision Coating', image: dir255, instruction: 'Pat the tilapia fillets completely dry with paper towels to remove excess moisture. Place them on a lined baking sheet and press a generous layer of the herb mixture onto the top of each fillet. Apply firm pressure so the crust adheres to the fish; this creates a protective "blanket" that seals in the juices while the fish bakes, preventing the delicate white meat from drying out.' },
        { title: 'The Flash Bake', image: dir355, instruction: 'Slide the fillets into a preheated oven at 200°C and bake for 12–15 minutes. The Sensory Cue: Look for the crust to turn a rich, toasted brown and for the fish to become opaque. The fillets are perfectly done when they yield and flake easily when pierced with a fork. Since tilapia is thin, this high-heat method ensures the crust crisps up at the exact moment the fish reaches its peak tenderness.' },
        { title: 'The Finishing Lemon Butter Glaze', image:dir455 , instruction: 'While the fish rests for a minute, melt the butter in a small pan over low heat with a clove of smashed garlic and the juice of half a lemon. Drizzle this bright, velvety sauce directly over the warm fillets just before serving. The acidity of the lemon cuts through the rich butter and savory crust, providing a vibrant finish that highlights the natural lightness of the seafood.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/o8M8aq8QVRc?si=XD8rXYqqLy4zFosJ',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:56,
      image: recipe56,
      rating: 4.9,
      category: 'Vegan',
      title: 'Creamy Vegan Stroganoff with Mushrooms',
      time: '20 min',
      cuisine: 'Persian',
      servings:"Serves 1",
      flag: flag13,
      difficulty: 'Easy',
      tags: ['VEGETARIAN', 'DAIRY-FREE', 'COMFORT FOOD', 'ONE-POT', 'GLUTEN-FREE'],
      description: 'This creamy vegan stroganoff is rich, hearty, and loaded with deeply caramelized mushrooms in a velvety dairy-free sauce. Coconut cream creates luxurious texture while garlic and paprika add comforting savory warmth. The mushrooms provide a satisfying “meaty” bite that makes this dish incredibly filling and flavorful. A comforting plant-based meal perfect for cozy lunches or dinners.',
description2: 'Slow simmering allows the mushroom flavors to blend beautifully into the creamy sauce for maximum richness. Coconut cream creates a silky texture without using dairy while soy sauce adds deep umami flavor. Served over noodles or rice, this vegan stroganoff feels indulgent yet wholesome. Fresh parsley adds brightness and balance to the rich savory finish.',
      ingredients: [
        { quantity: '400 grams', name: 'Mushrooms' },
        { quantity: '1 piece', name: 'Onion' },
        { quantity: '3 cloves', name: 'Garlic' },
        { quantity: '1 cup', name: 'Vegetable Broth' },
        { quantity: '1 cup', name: 'Coconut Cream' },
        { quantity: '2 tbsp', name: 'Soy Sauce' },
        { quantity: '1 tsp', name: 'Paprika' },
        { quantity: '300 grams', name: 'Noodles' },
      ],
      directions: [
        { title: 'The High-Heat Mushroom Sear', image: dir156, instruction: 'In a large skillet, sauté the finely diced onion and garlic until translucent. Add the mushrooms, but here is The Pro Tip: Do not crowd the pan and resist the urge to stir them immediately. Let them sit over medium-high heat for 3–4 minutes to develop a deep, golden-brown crust. This caramelization is where all the "meaty" umami flavor lives, providing the essential heartiness for a vegan version of this dish.' },
        { title: 'Deglaze and Infuse', image: dir256, instruction: 'Stir in the vegetable broth, soy sauce, and paprika. Use a wooden spoon to scrape up any browned bits (the fond) from the bottom of the pan—this is concentrated flavor that will season your sauce from within. The soy sauce adds a savory saltiness that mimics the traditional beef base, while the paprika provides a subtle, smoky warmth.' },
        { title: 'The Silky Coconut Emulsion', image: dir356, instruction: 'Pour in the coconut cream and reduce the heat to low. Allow the mixture to simmer gently for about 10 minutes. During this time, the sauce will reduce and thicken into a velvety, luxurious consistency that clings to the back of a spoon. By simmering slowly, you allow the flavors of the garlic and mushrooms to fully meld with the richness of the cream.' },
        { title: 'Serve', image: dir456, instruction: 'Taste the sauce and adjust the seasoning if needed. Spoon the rich mushroom stroganoff generously over a bed of warm, cooked noodles or fluffy rice. Garnish with a handful of fresh parsley to add a bright, herbal contrast to the deep, savory notes of the cream sauce.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/G7xEEvyQ0FM?si=aTEgbKGEoaYApLMJ',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id:57,
      image: recipe57,
      rating: 4.9,
      category: 'Breads',
      title: 'Cheddar Biscuits with Fresh Chives',
      time: '25 min',
      cuisine: 'Japanese',
      servings:"Serves 3",
      flag: flag19,
      difficulty: 'Beginner',
      tags: ['COMFORT FOOD', 'KID-FRIENDLY'],
     description: 'These cheddar biscuits are soft, fluffy, and filled with sharp cheesy flavor balanced by fresh chives and buttery richness. The tender crumb and flaky layers make them perfect alongside soups, stews, or breakfast spreads. Cold butter creates steam pockets while baking, giving the biscuits their irresistible texture. A warm comforting bread recipe that comes together quickly without yeast.',
description2: 'Sharp cheddar melts beautifully into the dough while fresh chives add a mild onion flavor throughout each biscuit. High-heat baking creates crisp golden tops with soft buttery centers inside. The simple drop-biscuit method makes them beginner-friendly while still tasting bakery-quality. Best enjoyed fresh from the oven with butter, soup, or hearty comfort meals.',
      ingredients: [
        { quantity: '2 cups', name: 'All-Purpose Flour' },
        { quantity: '100 grams', name: 'Cheddar Cheese' },
        { quantity: '3 tbsp', name: 'Fresh Chives' },
        { quantity: '100 grams', name: 'Cold Butter' },
        { quantity: '3/4 cup', name: 'Buttermilk' },
        { quantity: '2 tsp', name: 'Baking Powder' },
        { quantity: '1/2 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'Sift and Aerate the Dry Base', image: dir157, instruction: 'Sift the all-purpose flour, baking powder, and salt into a large mixing bowl. Sifting is a small step that makes a huge difference; it removes lumps and aerates the flour, which allows the leavening agents to lift the dough more effectively for a lighter, fluffier biscuit.' },
        { title: 'The Cold-Fat Cutting Technique', image: dir257, instruction: 'Using a pastry cutter or two knives, cut the ice-cold butter into the flour mixture until it resembles coarse crumbs. The Secret: Aim for a mix of sizes—some like sand and others the size of small peas. These larger bits of butter will melt in the oven, creating steam pockets that result in a beautiful, flaky internal structure.' },
        { title: 'The Gentle Fold', image: dir357, instruction: 'Gently stir in the cold buttermilk, shredded cheddar, and fresh chives using a silicone spatula. Mix only until the flour is just moistened and a "shaggy" dough forms. The Golden Rule: Avoid over-mixing; the more you stir, the tougher the biscuit will become. A messy-looking dough at this stage leads to the most tender results.' },
        { title: 'High-Heat "Drop" Bake', image: dir457, instruction: 'Use a large spoon or an ice cream scoop to drop rounded portions of dough onto a parchment-lined baking tray. Bake at 220°C for 12–15 minutes. The intense heat causes a "thermal shock" that activates the baking powder instantly, giving the biscuits a dramatic rise and a craggy, golden-brown crust.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/ZMX-4sp-tuE?si=SbiGw4X0Ws_AEEK2',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:58,
      image: recipe58,
      rating: 4.9,
      category: 'Appetizers',
      title: 'Red Pepper Hummus with Crispy Pita Chips',
      time: '95 min',
      cuisine: 'Mexican',
      servings:"Serves 5",
      flag: flag8,
      difficulty: 'Easy',
      tags: ['VEGETARIAN', 'HEALTHY', 'QUICK MEALS', 'DAIRY-FREE', 'GLUTEN-FREE'],
      description: 'This roasted red pepper hummus is smooth, creamy, and bursting with smoky sweet pepper flavor blended with tahini, garlic, and lemon. The homemade pita chips provide the perfect crunchy contrast for dipping and scooping. Every bite feels fresh, healthy, and packed with Mediterranean-inspired flavor. A colorful appetizer perfect for parties, snacks, or light lunches.',
description2: 'Blending the hummus until silky smooth creates a light airy texture far superior to store-bought versions. Roasted peppers add sweetness and depth while tahini brings creamy nutty richness. Homemade pita chips bake into crisp golden triangles that pair perfectly with the dip. Finished with olive oil and paprika, this appetizer looks as impressive as it tastes.',
      ingredients: [
        { quantity: '1 can', name: 'Chickpeas' },
        { quantity: '2 pieces', name: 'Roasted Red Peppers' },
        { quantity: '3 tbsp', name: 'Tahini' },
        { quantity: '2 pieces', name: 'Lemon' },
        { quantity: '2 cloves', name: 'Garlic' },
        { quantity: '3 tbsp', name: 'Olive Oil' },
        { quantity: '4 pieces', name: 'Pita Bread' },
        { quantity: '1/2 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'The Silky Emulsion Blend', image: dir158, instruction: 'Combine the drained chickpeas, roasted red peppers, tahini, lemon juice, and garlic in a food processor. Blend on high for a full 2–3 minutes. While the motor is running, slowly drizzle in the olive oil. This long blending time and slow oil integration create a stable emulsion, resulting in a light, airy texture that is much smoother than standard store-bought versions.' },
        { title: 'The "Ice-Shock" Consistency Adjustment', image: dir258, instruction: 'Taste your hummus for a balance of salt and acidity. For a truly professional, "whipped" finish, add a single ice cube or a tablespoon of ice-cold water while the processor is still running. This "shocks" the fats in the tahini, turning the hummus a lighter color and creating a velvety, ribbon-like consistency that melts in your mouth.' },
        { title: 'The Double-Seasoned Pita Chips', image: dir358, instruction: 'Cut the pita bread into uniform triangles. In a large bowl, toss the pieces with olive oil and a pinch of salt until every surface is evenly coated. Spread them in a single layer on a baking sheet and bake at 190°C for 8–10 minutes. By tossing them in a bowl first, you ensure a consistent, golden-brown crunch across every chip.' },
        { title: 'The Finishing Presentation', image: dir458, instruction: 'Transfer the hummus to a wide, shallow bowl. Using the back of a spoon, create a deep, circular swirl from the center outward. Fill this "well" with a final drizzle of extra virgin olive oil and a dash of smoked paprika if desired. Serve the warm, crispy pita chips tucked around the side for a beautiful, inviting appetizer.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/uyr2mXqn3Yo?si=cC0_alAzmRoSSWQo',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:59,
      image: recipe59,
      rating: 4.9,
      category: 'Soups',
      title: 'Thai Coconut Curry Soup with Shrimp',
      time: '45 min',
      cuisine: 'Thai',
      servings:"Serves 11",
      flag: flag4,
      difficulty: 'Intermediate',
      tags: ['SPICY', 'COMFORT FOOD', 'ONE-POT', 'GLUTEN-FREE', 'DAIRY-FREE', 'HIGH-PROTEIN'],
      description: 'This Thai coconut curry soup is creamy, fragrant, and layered with bold spicy flavors balanced by fresh lime and herbs. Tender shrimp cook gently in the aromatic broth while coconut milk creates luxurious richness. Lemongrass and curry paste infuse every spoonful with authentic Thai-inspired flavor. A comforting one-pot soup that feels both vibrant and satisfying.',
description2: 'Blooming the curry paste intensifies the spices and creates a deeply flavorful broth with restaurant-quality depth. Coconut milk softens the heat while lime juice adds bright refreshing balance. Perfectly cooked shrimp remain juicy and tender inside the silky soup base. Garnished with fresh cilantro, this soup delivers warmth, freshness, and spice in every bowl.',
      ingredients: [
        { quantity: '500 grams', name: 'Large Shrimp' },
        { quantity: '1 can', name: 'Coconut Milk' },
        { quantity: '2 tbsp', name: 'Red Curry Paste' },
        { quantity: '1 liter', name: 'Chicken Broth' },
        { quantity: '2 stalks', name: 'Lemongrass' },
        { quantity: '1 piece', name: 'Lime' },
        { quantity: '1 bunch', name: 'Fresh Cilantro' },
        { quantity: '2 tbsp', name: 'Fish Sauce' },
      ],
      directions: [
        { title: 'Bloom the Curry Paste', image: dir159, instruction: 'Heat a splash of oil in a large heavy-bottomed pot over medium heat. Sauté the red curry paste for 2–3 minutes, stirring constantly. You are looking for the aromatics to become intense and the oil to take on a bright, shimmering red hue. This "blooming" process is essential to toast the dried chilies and spices, removing their raw edge and deepening the overall flavor.' },
        { title: 'Simmer the Aromatics', image: dir259, instruction: 'Pour in the chicken broth and coconut milk. Take your lemongrass stalks and bruise them heavily with the back of a knife or a heavy pan to release their essential oils before adding them to the pot. Let the liquid simmer gently for 10 minutes; this allows the woody, citrusy notes of the lemongrass to fully permeate the creamy coconut base.' },
        { title: 'The Precise Shrimp Poach', image: dir359, instruction: 'Add the large shrimp to the simmering broth. Watch them closely—as soon as they curl into a gentle "C" shape and turn opaque pink (usually 3–4 minutes), they are perfectly cooked. Avoid overcooking, as shrimp can quickly become rubbery; they should be tender and succulent when bitten.' },
        { title: 'The Three-Flavor Balance', image: dir459, instruction: 'Turn off the heat and remove the lemongrass stalks. Stir in the fish sauce and fresh lime juice. Thai cuisine relies on the perfect harmony of salty, sour, and spicy. Taste the broth and adjust if needed—a little extra lime for brightness or a splash more fish sauce for depth. Serve in deep bowls topped with a generous handful of fresh, hand-torn cilantro.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/m4nbJ4HYIDg?si=6s6NhxL7kb2jxI7B',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:60,
      image: recipe60,
      rating: 4.9,
      category: 'Salads',
      title: 'Peach and Burrata Salad with Balsamic Glaze',
      time: '80 min',
      cuisine: 'Ethiopian',
      servings:"Serves 7",
      flag: flag5,
      difficulty: 'Easy',
      tags: ['HEALTHY', 'LOW-CARB', 'GLUTEN-FREE', 'VEGETARIAN'],
       description: 'This peach and burrata salad combines sweet juicy peaches with creamy burrata cheese and peppery arugula for a refreshing gourmet-style dish. Balsamic glaze adds tangy richness while basil brings fresh aromatic flavor throughout. The contrast between warm grilled peaches and cool creamy cheese creates incredible texture and balance. A beautiful summer salad perfect for elegant lunches or dinner parties.',
description2: 'Grilling the peaches enhances their sweetness while adding smoky caramelized notes to the salad. Burrata melts slightly over the warm fruit, creating a luxurious creamy finish. Balsamic glaze ties all the flavors together with sweet acidity and richness. Simple yet sophisticated, this salad feels fresh, colorful, and restaurant-worthy with minimal effort.',
      ingredients: [
        { quantity: '3 pieces', name: 'Ripe Peaches' },
        { quantity: '2 balls', name: 'Burrata Cheese' },
        { quantity: '3 tbsp', name: 'Balsamic Glaze' },
        { quantity: '2 tbsp', name: 'Olive Oil' },
        { quantity: '1 bunch', name: 'Fresh Basil' },
        { quantity: '50 grams', name: 'Arugula' },
        { quantity: '1/4 tsp', name: 'Salt' },
        { quantity: '1/4 tsp', name: 'Black Pepper' },
      ],
      directions: [
        { title: 'The Caramelized Peach Prep', image: dir160, instruction: 'Slice the ripe peaches into thick, uniform wedges. To elevate the dish, sear the slices on a smoking-hot grill pan for about 60 seconds per side. You are looking for distinct dark char marks while keeping the interior firm; this adds a smoky, sophisticated depth that creates a beautiful contrast with the cold cheese.' },
        { title: 'The Structural Assembly', image: dir260, instruction: 'Create a vibrant bed of fresh, peppery arugula on a large serving platter. Arrange the grilled peaches while they are still slightly warm. Take the cold burrata balls and carefully tear them open by hand directly over the peaches, allowing the rich, creamy stracciatella center to spill out and act as a secondary dressing for the greens.' },
        { title: 'The Glaze and Infusion', image: dir360, instruction: 'Drizzle the high-quality extra virgin olive oil first to coat the arugula, then follow with the thick balsamic glaze in a purposeful zigzag pattern. The glaze acts as a sweet-tart "anchor" that ties the floral sweetness of the fruit and the buttery richness of the dairy together perfectly.' },
        { title: 'The Aromatic Finish', image: dir460, instruction: 'Hand-tear the fresh basil leaves just before serving—chopping them with a knife can cause the edges to bruise and turn black. Scatter the torn leaves over the salad along with a final crack of black pepper and a pinch of flaky sea salt to make the natural sugars in the peaches pop.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/xj6Jt2SzPZA?si=Q9KQ_6mrqyVFvn4I',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
  
    },
    {
      id:61,
      image: recipe61,
      rating: 4.4,
      category: 'Instant Pot',
      title: 'Vegan Lentil Curry in the Instant Pot',
      time: '5 min',
      cuisine: 'Ethiopian',
      servings:"Serves 6",
      flag: flag5,
      difficulty: 'Easy',
      tags: ['VEGETARIAN', 'ONE-POT', 'DAIRY-FREE', 'GLUTEN-FREE', 'HIGH-PROTEIN'],
     description: 'This vegan lentil curry is rich, hearty, and packed with plant-based protein, aromatic spices, and creamy coconut flavor. Cooking it in the Instant Pot makes the lentils perfectly tender while keeping the preparation simple and fast. Tomatoes and spices create deep warming flavor in every spoonful. A nourishing comfort meal perfect for busy weeknights or meal prep.',
description2: 'Blooming the curry spices before pressure cooking intensifies the flavor and creates a fragrant savory base. Coconut milk blends into the lentils after cooking for a silky creamy texture without dairy. The Instant Pot transforms simple pantry ingredients into a satisfying wholesome curry with minimal effort. Serve with naan or fluffy basmati rice for a comforting complete meal.',
      ingredients: [
        { quantity: '2 cups', name: 'Red Lentils' },
        { quantity: '1 can', name: 'Diced Tomatoes' },
        { quantity: '1 can', name: 'Coconut Milk' },
        { quantity: '1 piece', name: 'Onion' },
        { quantity: '3 cloves', name: 'Garlic' },
        { quantity: '1 tsp', name: 'Curry Powder' },
        { quantity: '1 tsp', name: 'Cumin' },
        { quantity: '500 ml', name: 'Vegetable Broth' },
      ],
      directions: [
        { title: 'Sauté and Deglaze', image: dir161, instruction: 'Set your Instant Pot to "Sauté" mode. Add a splash of oil and cook the finely diced onion and minced garlic until softened and translucent (about 3–4 minutes). The Pro Tip: If any brown bits stick to the bottom, add a tablespoon of the vegetable broth and scrape them up with a wooden spoon. This "deglazing" prevents the dreaded "Burn" notice once the pot comes to pressure.' },
        { title: 'Bloom the Aromatics', image: dir261, instruction: 'Stir in the curry powder and cumin, cooking for exactly 60 seconds until fragrant. This heat "blooms" the fat-soluble compounds in the spices, intensifying their flavor profile and ensuring the curry has a deep, rounded warmth rather than a raw, powdery taste.' },
        { title: 'Strategic Layering', image: dir361, instruction: 'Add the red lentils, diced tomatoes, and vegetable broth. Give the mixture a thorough stir. The Golden Rule: Pour the coconut milk on top last and do not stir it in. Placing the thicker, creamier coconut milk on top of the liquid ingredients prevents it from settling at the bottom and potentially scorching during the high-pressure cycle.' },
        { title: 'Pressure Cook and Natural Release', image: dir461, instruction: 'Seal the lid and set the Instant Pot to High Pressure for 10 minutes. Once the timer ends, allow for a 5-minute natural pressure release before switching to quick release. This short rest prevents the starchy lentils from foaming and clogging the steam valve. Open the lid, stir the coconut milk into the lentils until creamy and vibrant, and serve immediately.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/hLyJa8zVRPc?si=cx7-hIcAMjCdrIFH',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id:62,
      image: recipe62,
      rating: 4.6,
      category: 'Breakfasts',
      title: 'Homemade Cinnamon Raisin Bagels with Honey',
      time: '85 min',
      cuisine: 'Italian',
      servings:"Serves 11",
      flag: flag14,
      difficulty: 'Intermediate',
      tags: ['COMFORT FOOD', 'KID-FRIENDLY', 'DAIRY-FREE'],
      description: 'These homemade cinnamon raisin bagels are chewy, lightly sweet, and packed with warm cinnamon flavor and juicy raisins. The boiling process gives them their signature glossy crust and dense bakery-style texture. Every bite feels comforting, aromatic, and freshly baked from an artisan bakery. Perfect for breakfast, brunch, or toasted snacks with butter or cream cheese.',
description2: 'Bread flour creates the classic chewy texture while honey adds subtle sweetness and golden color during baking. Boiling the dough before baking develops the authentic bagel crust that is crisp outside and soft inside. Raisins become plump and flavorful throughout the warm cinnamon dough. Fresh from the oven, these bagels are rich, fragrant, and deeply satisfying.',
      ingredients: [
        { quantity: '3 cups', name: 'Bread Flour' },
        { quantity: '1 tsp', name: 'Active Dry Yeast' },
        { quantity: '1 cup', name: 'Warm Water' },
        { quantity: '1/2 cup', name: 'Raisins' },
        { quantity: '1 tsp', name: 'Cinnamon' },
        { quantity: '2 tbsp', name: 'Honey' },
        { quantity: '1 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'Develop the High-Gluten Dough', image: dir162, instruction: 'In a large bowl, whisk the warm water, honey, and yeast until dissolved. Gradually incorporate the bread flour, cinnamon, and salt. Knead the dough vigorously for 10 minutes—either by hand or with a stand mixer—until it is smooth, elastic, and quite firm. Fold in the raisins during the final two minutes of kneading. Using bread flour is essential here, as its high protein content provides the structural strength needed for a dense, chewy bagel.' },
        { title: 'The Proofing Stage', image: dir262, instruction: "Lightly oil a bowl and place the dough inside, turning it once to coat the surface. Cover with a damp cloth and let it rise in a warm, draft-free spot for about 1 hour, or until it has doubled in size. This fermentation period allows the yeast to create carbon dioxide, which lightens the dense dough just enough to ensure it isn't too heavy after baking." },
        { title: 'The Honey-Water Poach', image: dir362, instruction: 'Divide the dough into 8 equal portions and roll them into smooth balls. Use your thumb to poke a hole through the center of each, stretching it slightly to form a ring. Drop the bagels into a pot of boiling water sweetened with a tablespoon of honey. Boil for 1 minute per side. This "gelatinizes" the exterior starch, which is the secret to achieving a thick, shiny, and authentic bagel crust.' },
        { title: 'The High-Heat Bake', image: dir462, instruction: 'Transfer the boiled bagels onto a parchment-lined baking sheet. Bake at 220°C for 18–20 minutes. The high temperature creates an immediate "oven spring," locking in the moisture while the honey in the dough and the boiling water caramelizes into a deep, mahogany gold. Let them cool on a wire rack for at least 15 minutes to allow the interior crumb to set before slicing.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/vV9Wm4tdRYA?si=BqgPQQSFd70xxshj',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id:63,
      image: recipe63,
      rating: 4.6,
      category: 'Meat',
      title: 'Roasted Chicken Thighs with Garlic Herb Butter',
      time: '15 min',
      cuisine: 'Indian',
      servings:"Serves 1",
      flag: flag12,
      difficulty: 'Easy',
      tags: ['MEAT', 'HIGH-PROTEIN', 'QUICK MEALS', 'GLUTEN-FREE'],
       description: 'These roasted chicken thighs are juicy, crispy, and infused with rich garlic herb butter beneath the golden skin. Roasting at high heat creates beautifully crisp edges while keeping the meat tender and flavorful inside. Lemon zest and herbs brighten the buttery richness for a perfectly balanced dish. A simple yet impressive dinner recipe that delivers comforting flavor every time.',
description2: 'Sliding the herb butter under the skin allows the chicken to baste itself while roasting for maximum juiciness. The skin turns deeply golden and crisp while the garlic and herbs perfume the entire dish. Resting the chicken after cooking keeps every bite moist and tender throughout. Serve with potatoes, vegetables, or salad for a hearty satisfying meal.',
      ingredients: [
        { quantity: '6 pieces', name: 'Chicken Thighs' },
        { quantity: '4 tbsp', name: 'Butter' },
        { quantity: '5 cloves', name: 'Garlic' },
        { quantity: '2 tbsp', name: 'Fresh Herbs' },
        { quantity: '1 piece', name: 'Lemon' },
        { quantity: '1 tsp', name: 'Salt' },
        { quantity: '1/2 tsp', name: 'Black Pepper' },
      ],
      directions: [
        { title: 'Create the Compound Herb Butter', image: dir163, instruction: 'In a small bowl, combine the softened butter with minced garlic, finely chopped fresh herbs (like rosemary or thyme), lemon zest, salt, and black pepper. Use a fork to cream the ingredients together until they form a smooth, fragrant paste. This compound butter serves as an internal basting liquid that will season the meat from the inside out.' },
        { title: 'The Under-Skin Infusion', image: dir263, instruction: 'LPat the chicken thighs completely dry with paper towels; moisture is the enemy of crispy skin. Carefully slide your fingers between the skin and the meat to create a small pocket, being careful not to tear the skin. Push a generous teaspoon of the herb butter into each pocket and spread it evenly. This "shield" of butter prevents the meat from drying out during the high-heat roast.' },
        { title: 'The High-Heat Roast', image: dir363, instruction:"Place the thighs in a roasting pan, ensuring they aren't crowded so the hot air can circulate around each piece. Roast at 200°C for 40–45 minutes. During the final 10 minutes, the butter under the skin will begin to fry the skin from the inside, while the oven heat crisps it from the outside, resulting in a deep golden, parchment-like texture." },
        { title: 'The Resting and Glazing Phase', image: dir463, instruction: 'Remove the pan from the oven once the chicken reaches an internal temperature of 74°C. The Golden Rule: Let the chicken rest for 5–7 minutes before serving. This allows the hot juices to redistribute back into the fibers. For a professional finish, tilt the pan and spoon the accumulated garlic-herb juices back over the skin to give it a high-gloss, savory glaze.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/jihp1eaEVsM?si=5BVl3b2BwhwzDDhs',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id: 64,
      image: recipe64,
      rating: 4.7,
      category: 'Desserts',
      title: 'Double Chocolate Brownie with Walnut Crunch',
      time: '45 min',
      cuisine: 'American',
      servings: 'Serves 6',
      flag: flag9,
      difficulty: 'Easy',
      tags: ['DESSERTS', 'KID-FRIENDLY'],
      description: 'These double chocolate brownies are packed with rich dark chocolate that provides antioxidants and magnesium, while crunchy walnuts contribute healthy omega-3 fats and plant-based nutrients. The combination of cocoa and nuts creates a satisfying dessert that offers both indulgent flavor and nourishing benefits in every fudgy bite.',
  description2: 'The dark chocolate helps support mood and energy levels with natural cocoa compounds, while walnuts add fiber, protein, and heart-friendly fats for extra nutritional value. Together, they create a decadent dessert with a balanced texture of gooey chocolate and crisp walnut crunch.',
      ingredients: [
        { quantity: '200 grams', name: 'Dark Chocolate' },
        { quantity: '150 grams', name: 'Butter' },
        { quantity: '1 cup', name: 'Sugar' },
        { quantity: '3 pieces', name: 'Eggs' },
        { quantity: '3/4 cup', name: 'All-Purpose Flour' },
        { quantity: '1/2 cup', name: 'Chocolate Chips' },
        { quantity: '1 cup', name: 'Walnuts' },
        { quantity: '1/2 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'Create the Glossy Chocolate Base', image: dir164, instruction: 'Gently melt the dark chocolate and butter together using a double boiler or in short bursts in the microwave. Once smooth, whisk in the sugar while the mixture is still warm. This heat helps partially dissolve the sugar, which is the secret to creating that iconic, thin, "paper-like" crackly crust on top of the brownies once they bake.' },
        { title: 'Emulsify for Fudginess', image: dir264, instruction: 'Whisk the eggs into the cooled chocolate mixture one at a time. Beat the batter vigorously for about 1–2 minutes until it becomes thick, glossy, and slightly lighter in color. This process creates a strong emulsion, ensuring your brownies have a tight, fudgy crumb rather than a cake-like texture.' },
        { title: 'The Gentle Fold', image: dir364, instruction: 'Sift the all-purpose flour and salt directly over the chocolate base. Using a silicone spatula, gently fold the dry ingredients in just until no white streaks remain. The Pro Tip: Do not over-mix at this stage; over-working the flour develops gluten, which can make the brownies tough and bready instead of tender and rich.' },
        { title: 'The Crunch and Texture Integration', image: dir464, instruction: 'Fold in the chocolate chips and the walnuts. To maximize the "crunch," toast the walnuts in a dry pan for 3 minutes before adding them to the batter to release their natural oils. Pour the batter into a lined baking pan, smoothing the top with your spatula, and bake at 175°C for 25–30 minutes.' },
        {title: 'The Carry-Over Bake and Set', image: dir564, instruction: 'Remove the brownies from the oven when a toothpick inserted into the center comes out with a few moist crumbs attached—if it’s completely clean, they are overbaked. Let them cool completely in the pan for at least 30 minutes. This resting phase allows the fats to solidify, "setting" the fudgy center so you can achieve clean, professional slices.'}
      ],
      videoUrl: 'https://www.youtube.com/embed/9KSvCpC6qu8?si=iL0JEIapcOuuxLAK',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id: 65,
      image: recipe65,
      rating: 4.5,
      category: 'Drinks',
      title: 'Detox Green Smoothie with Spinach and Ginger',
      time: '10 min',
      cuisine: 'Brazilian',
      servings: 'Serves 2',
      flag: flag16,
      difficulty: 'Beginner',
      tags: ['HEALTHY', 'DAIRY-FREE', 'GLUTEN-FREE'],
       description: 'This detox green smoothie is packed with vitamin C, iron, antioxidants, and hydrating nutrients that help support digestion and overall wellness.',
  description2: 'The spinach provides iron and fiber, while ginger and lemon contribute anti-inflammatory and immune-supporting benefits with refreshing flavor.',
      ingredients: [
        { quantity: '2 cups', name: 'Fresh Spinach' },
        { quantity: '1 piece', name: 'Green Apple' },
        { quantity: '1 piece', name: 'Cucumber' },
        { quantity: '1 piece', name: 'Lemon' },
        { quantity: '1 tsp', name: 'Fresh Ginger' },
        { quantity: '1 cup', name: 'Coconut Water' },
        { quantity: '1 cup', name: 'Ice' },
      ],
      directions: [
        { title: 'Layer the Liquid and Greens', image: dir165, instruction: 'Begin by pouring the chilled coconut water into the base of your blender, followed immediately by the fresh spinach. Blend these two on high for 30 seconds before adding any other ingredients. This "pre-liquefying" step is the secret to a professional green smoothie; it completely pulverizes the spinach fibers, ensuring there are no leafy "bits" in your final drink.' },
        { title: 'Infuse the Aromatics', image: dir265, instruction: 'Add the grated fresh ginger and the lemon juice to the green liquid. By adding these concentrated aromatics before the bulkier fruit, you ensure the spicy warmth of the ginger and the bright citrus are evenly emulsified throughout the base. This prevents the ginger from settling at the bottom or clumping into a single spicy sip.' },
        { title: 'Build the Texture and Body', image: dir365, instruction: 'Add the chopped green apple and cucumber. The apple provides natural sweetness and pectin for thickness, while the cucumber adds a high water content and a crisp, clean finish. Blend on high until the mixture looks uniform and vibrant. If you prefer a thinner, juice-like consistency, splash in an extra two tablespoons of coconut water during this stage.' },
        { title: 'The Frosty Emulsion', image: dir465, instruction: 'Add the ice cubes last. Pulse several times to break the ice, then blend on high for a final 20 seconds. Adding ice at the very end creates a "frosty" emulsion that keeps the smoothie chilled without over-diluting the vibrant flavors. Pour immediately into chilled glasses to enjoy the peak freshness and enzymatic benefits of the raw greens.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/4KCOBt46ECU?si=45-1ky-f2Jeber_P',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id: 66,
      image: recipe66,
      rating: 4.6,
      category: 'Meat',
      title: 'Korean BBQ Beef Bulgogi with Steamed Rice',
      time: '40 min',
      cuisine: 'Korean',
      servings: 'Serves 4',
      flag: flag6,
      difficulty: 'Intermediate',
      tags: ['MEAT', 'HIGH-PROTEIN'],
      description: 'This Korean BBQ beef bulgogi is rich in high-quality protein, iron, and essential amino acids that help support muscle strength and energy.',
  description2: 'The sesame oil and garlic add heart-healthy fats and antioxidants, while the beef delivers satisfying protein for a balanced meal.',
      ingredients: [
        { quantity: '500 grams', name: 'Beef Sirloin' },
        { quantity: '4 tbsp', name: 'Soy Sauce' },
        { quantity: '2 tbsp', name: 'Sesame Oil' },
        { quantity: '2 tbsp', name: 'Sugar' },
        { quantity: '4 cloves', name: 'Garlic' },
        { quantity: '1 tsp', name: 'Ginger' },
        { quantity: '1 piece', name: 'Pear' },
        { quantity: '2 tbsp', name: 'Sesame Seeds' },
      ],
      directions: [
        { title: 'Create the Enzymatic Marinade', image: dir166, instruction: 'In a small blender or bowl, combine the soy sauce, sesame oil, sugar, minced garlic, and grated ginger. The critical ingredient here is the grated pear; it contains a natural enzyme called calpain that acts as a powerful tenderizer. Whisk or blend until the sugar is fully dissolved and the marinade is smooth.' },
        { title: 'Precision Slicing and Marinating', image: dir266, instruction: 'For the most authentic texture, slice the beef across the grain into paper-thin strips. The Pro Tip: Place the beef in the freezer for 20 minutes before slicing to make it firm enough for ultra-thin cuts. Submerge the beef in the marinade for at least 30 minutes, though 2 hours is ideal to allow the pear enzymes to fully break down the tough fibers.' },
        { title: 'The High-Heat Batched Sear', image: dir366, instruction: 'Heat a cast-iron skillet or wok over very high heat until it begins to smoke. Drain the excess liquid from the beef and cook it in small, single-layer batches. Do not crowd the pan; crowding will cause the meat to steam in its own juices rather than sear. Cook for only 2–3 minutes per batch until the edges are crispy and the sugars in the marinade have deeply caramelized.' },
        { title: 'The Rest and Presentation', image: dir466, instruction: 'Once all batches are cooked, let the beef rest for 2 minutes to allow the savory juices to redistribute. Layer the caramelized beef over a bed of fluffy steamed rice. Finish with a generous sprinkle of toasted sesame seeds and finely sliced green onions for a sharp, fresh contrast to the rich, umami-packed glaze.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/UYIUTOrL618?si=td6fAWrF2ZI3VNy5',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id: 67,
      image: recipe67,
      rating: 4.8,
      category: 'Healthy',
      title: 'Kale and Quinoa Power Bowl with Tahini',
      time: '25 min',
      cuisine: 'American',
      servings: 'Serves 2',
      flag: flag9,
      difficulty: 'Easy',
      tags: ['HEALTHY', 'VEGETARIAN', 'GLUTEN-FREE', 'DAIRY-FREE'],
     description: 'This kale and quinoa power bowl is loaded with plant-based protein, fiber, healthy fats, and vitamins that help keep you energized and full.',
  description2: 'The quinoa and chickpeas provide complete nutrition, while kale and avocado contribute antioxidants, potassium, and heart-friendly nutrients.',
      ingredients: [
        { quantity: '1 cup', name: 'Quinoa' },
        { quantity: '3 cups', name: 'Kale' },
        { quantity: '3 tbsp', name: 'Tahini' },
        { quantity: '1 piece', name: 'Lemon' },
        { quantity: '1 piece', name: 'Avocado' },
        { quantity: '1/2 cup', name: 'Chickpeas' },
        { quantity: '2 tbsp', name: 'Olive Oil' },
        { quantity: '1/2 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'The Steam-Dry Quinoa Method', image: dir167, instruction: 'Rinse the quinoa thoroughly to remove its natural bitter coating. Simmer in two parts water with a pinch of salt for 15 minutes, then turn off the heat and let it sit covered for 5 minutes. Spread the cooked quinoa onto a flat tray to cool; this "air-drying" step ensures the grains remain separate and light rather than clumping together in the bowl.' },
        { title: 'The "Velvet" Kale Massage', image: dir267, instruction: 'De-stem and finely chop the kale, placing it in a large bowl with a drizzle of olive oil and a pinch of salt. Use your hands to aggressively massage the leaves for 2 minutes. You will notice the kale transform from a tough, fibrous texture to a dark, vibrant green that is soft and silky on the palate.' },
        { title: 'Emulsify the Tahini Dressing', image: dir367, instruction: 'In a small glass bowl, whisk the tahini and fresh lemon juice. The mixture may initially "seize" or thicken—this is normal. Gradually whisk in a tablespoon of warm water at a time until the dressing transforms into a smooth, pourable "ribbon" consistency. This emulsion ensures the dressing clings perfectly to the kale without feeling heavy.' },
        { title: 'The Layered Assembly', image: dir467, instruction: 'Build the bowl by creating a base of the fluffed quinoa and massaged kale. Arrange the chickpeas and creamy avocado slices on top to create a vibrant visual contrast. Drizzle the tahini dressing generously over the surface. The combination of the warm grains and the chilled, massaged greens creates a sophisticated temperature and texture balance.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/Bg9j5cA-T3o?si=xsP-vqH6Qw6_f94T',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    { 
      id: 68,
      image: recipe68,
      rating: 4.7,
      category: 'Soups',
      title: 'Lemon Chicken Orzo Soup with Fresh Herbs',
      time: '35 min',
      cuisine: 'Greek',
      servings: 'Serves 4',
      flag: flag11,
      difficulty: 'Easy',
      tags: ['COMFORT FOOD', 'HIGH-PROTEIN', 'ONE-POT'],
      description: 'This lemon chicken orzo soup delivers lean protein, hydrating broth, and immune-supporting vitamin C in a warm and comforting bowl.',
  description2: 'The chicken provides muscle-building protein, while carrots, celery, and lemon offer antioxidants and nourishing vitamins for balanced nutrition.',
      ingredients: [
        { quantity: '2 pieces', name: 'Chicken Breasts' },
        { quantity: '1 cup', name: 'Orzo Pasta' },
        { quantity: '2 pieces', name: 'Carrots' },
        { quantity: '2 stalks', name: 'Celery' },
        { quantity: '1 piece', name: 'Onion' },
        { quantity: '2 pieces', name: 'Lemon' },
        { quantity: '1.5 liters', name: 'Chicken Broth' },
        { quantity: '2 tbsp', name: 'Fresh Dill' },
      ],
      directions: [
        { title: 'Sauté the Mirepoix Base', image: dir168, instruction: 'Heat a tablespoon of oil in a large heavy-bottomed pot over medium heat. Add the finely diced onion, carrots, and celery. Sauté these vegetables for 6–8 minutes until they are softened and the onions are translucent. This slow start builds a sweet, savory foundation that balances the sharp acidity of the lemon later on.' },
        { title: 'Poach and Infuse the Broth', image: dir268, instruction: 'Pour in the chicken broth and add the whole chicken breasts. Bring the liquid to a gentle simmer, then reduce the heat to low. Cover and poach the chicken for about 15–20 minutes. Poaching the chicken whole in the broth keeps the meat succulent and tender while simultaneously enriching the soup base with natural juices.' },
        { title: 'Shred and Cook the Orzo', image: dir368, instruction: 'Remove the cooked chicken and set it aside on a cutting board to rest. While the chicken rests, add the orzo pasta directly into the simmering broth. Cook for 8–10 minutes until the orzo is tender but still has a slight "bite." While the pasta cooks, use two forks to shred the chicken into bite-sized pieces, then stir the meat back into the pot for the final two minutes of cooking.' },
        { title: 'The "Zesty" Emulsion Finish', image: dir468, instruction: 'Turn off the heat. Stir in the fresh lemon juice and the finely chopped dill. The Golden Rule: Never boil the soup after adding the fresh lemon and herbs; high heat can turn the dill bitter and dull the bright, citrusy notes. Serve immediately in deep bowls, perhaps with an extra slice of lemon on the side to heighten the Greek-inspired aromati' },
      ],
      videoUrl: 'https://www.youtube.com/embed/0yZDGuqLHLI?si=o44WNBxYYjcz7bWQ',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id: 69,
      image: recipe69,
      rating: 4.5,
      category: 'Salads',
      title: 'Loaded Greek Salad with Feta and Olives',
      time: '15 min',
      cuisine: 'Moroccan',
      servings: 'Serves 3',
      flag: flag2,
      difficulty: 'Beginner',
      tags: ['HEALTHY', 'VEGETARIAN', 'GLUTEN-FREE'],
        description: 'This loaded Greek salad is filled with fresh vegetables, healthy fats, calcium, and antioxidants that support heart and bone health.',
  description2: 'The feta cheese supplies calcium and protein, while olive oil and olives provide Mediterranean-inspired healthy fats and nutrients.',
      ingredients: [
        { quantity: '3 pieces', name: 'Tomatoes' },
        { quantity: '1 piece', name: 'Cucumber' },
        { quantity: '1 piece', name: 'Red Onion' },
        { quantity: '150 grams', name: 'Feta Cheese' },
        { quantity: '1/2 cup', name: 'Kalamata Olives' },
        { quantity: '3 tbsp', name: 'Olive Oil' },
        { quantity: '1 tbsp', name: 'Red Wine Vinegar' },
        { quantity: '1 tsp', name: 'Dried Oregano' },
      ],
      directions: [
        { title: 'Macerate the Red Onions', image: dir169, instruction: 'Begin by thinly slicing the red onion into delicate half-moons. Place them in a small bowl with the red wine vinegar and a tiny pinch of salt. Let them sit for 10 minutes while you prep the other ingredients. This "quick-pickle" method draws out the harsh sulfurous bite of the onion, turning them a bright pink and giving the salad a professional, mellow acidity.' },
        { title: 'Geometry of the Vegetables', image: dir269, instruction: 'Cube the tomatoes and cucumber into large, uniform chunks (roughly 2cm). The Pro Tip: Keep the cucumber skin on for extra crunch and color, but remove the watery core of the tomatoes if they are very ripe. This specific "rustic" cut ensures the vegetables hold their shape and texture without getting lost once the dressing is applied.' },
        { title: 'Emulsify the Mediterranean Vinaigrette', image: dir369, instruction: "In a glass jar or small bowl, whisk together the high-quality olive oil and dried oregano with the vinegar used to soak the onions. By whisking the oregano into the oil first, you allow the herb's aromatics to bloom, ensuring the earthy, floral scent is evenly distributed throughout the salad rather than clumping on a single vegetable." },
        { title: 'The Layered Assembly', image: dir469, instruction: 'In a large shallow bowl, toss the tomatoes, cucumbers, and Kalamata olives with the prepared dressing. Add the softened red onions. Instead of crumbling the feta into tiny pieces, place a single thick block of feta in the center or break it into large, creamy chunks. This preserves the "creamy vs. crunchy" contrast that makes a Greek salad iconic. Finish with a final crack of black pepper and serve immediately.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/dDhOpHcAJGo?si=5fC8earlOu5mBoPj',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id: 70,
      image: recipe70,
      rating: 4.6,
      category: 'Pasta',
      title: 'Noodle Stir Fry with Vegetables and Soy Sauce',
      time: '20 min',
      cuisine: 'Chinese',
      servings: 'Serves 3', 
      flag: flag17,
      difficulty: 'Easy',
      tags: ['VEGETARIAN', 'DAIRY-FREE', 'QUICK MEALS'],
      description: 'This noodle stir fry offers carbohydrates for energy along with fiber-rich vegetables and flavorful ingredients that support balanced nutrition.',
  description2: 'The mixed vegetables add vitamins and antioxidants, while sesame seeds and sesame oil contribute healthy fats and minerals.',
      ingredients: [
        { quantity: '200 grams', name: 'Noodles' },
        { quantity: '2 cups', name: 'Mixed Vegetables' },
        { quantity: '3 tbsp', name: 'Soy Sauce' },
        { quantity: '2 tbsp', name: 'Sesame Oil' },
        { quantity: '3 cloves', name: 'Garlic' },
        { quantity: '1 tsp', name: 'Ginger' },
        { quantity: '1 tbsp', name: 'Cornstarch' },
        { quantity: '2 tbsp', name: 'Sesame Seeds' },
      ],
      directions: [
        { title: 'Prepare the "Al Dente" Foundation', image: dir170, instruction: 'Cook your noodles in boiling water until they are just tender but still have a firm "bite" (al dente). Drain them immediately and rinse under cold running water to stop the cooking process and remove excess surface starch. The Pro Tip: Toss the cold noodles with a teaspoon of sesame oil; this creates a non-stick barrier that ensures every strand remains separate during the high-heat stir fry.' },
        { title: 'Emulsify the Glossy Stir-Fry Sauce', image: dir270, instruction: 'In a small bowl, whisk together the soy sauce, sesame oil, and cornstarch until the mixture is perfectly smooth and no white streaks remain. The cornstarch is the "magic ingredient"—it acts as a thickener that will transform the thin liquid into a rich, silky glaze that clings to every noodle and vegetable rather than pooling at the bottom of the wok.' },
        { title: 'The High-Heat Aromatics and Char', image: dir370, instruction: 'Heat a wok or large skillet over high heat until it begins to lightly smoke. Add a splash of oil, followed by the minced garlic and grated ginger. Stir rapidly for 30 seconds to release their fragrance, then toss in the mixed vegetables. Use a constant tossing motion for 3 minutes to achieve a "crisp-tender" texture; you want the vegetables to stay vibrant and crunchy, not soft or steamed.' },
        { title: 'The Final Glaze and "Wok Hei" Finish', image: dir470, instruction: 'Add the cooked noodles to the wok and toss them with the vegetables. Give your sauce mixture a final stir (cornstarch settles quickly) and pour it over the noodles. Continuously toss over high heat for 60–90 seconds. You will see the sauce transform from a liquid into a deep, glossy coating that "locks" onto the ingredients. Serve immediately, topped with a generous sprinkle of toasted sesame seeds for a final layer of nutty crunch.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/fLiFdOR_ifI?si=3yJVhTzI9P74Vx97',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id: 71,
      image: recipe71,
      rating: 4.4,
      category: 'Healthy',
      title: 'Nutty Banana Oat Breakfast Bars with Honey',
      time: '30 min',
      cuisine: 'Vietnamese',
      servings: 'Serves 8',
      flag: flag15,
      difficulty: 'Beginner',
      tags: ['HEALTHY', 'KID-FRIENDLY', 'DAIRY-FREE'],
       description: 'These nutty banana oat breakfast bars are packed with fiber, potassium, and healthy fats that provide long-lasting energy throughout the day.',
  description2: 'The oats support digestion, bananas offer natural sweetness and potassium, while nuts and peanut butter add protein and heart-healthy fats.',
      ingredients: [
        { quantity: '3 pieces', name: 'Ripe Bananas' },
        { quantity: '2 cups', name: 'Rolled Oats' },
        { quantity: '1/2 cup', name: 'Mixed Nuts' },
        { quantity: '3 tbsp', name: 'Honey' },
        { quantity: '1/4 cup', name: 'Peanut Butter' },
        { quantity: '1 tsp', name: 'Cinnamon' },
        { quantity: '1/2 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'Create a "Liquid Binder" Base', image: dir171, instruction: 'In a large mixing bowl, mash the ripe bananas until they reach a completely smooth, liquid consistency. Stir in the peanut butter, honey, cinnamon, and salt. Whisk these wet ingredients vigorously for 60 seconds to create a thick, emulsified syrup. This step is vital; the honey and peanut butter act as a "glue" that prevents the bars from crumbling once they are sliced.' },
        { title: 'Hydrate the Rolled Oats', image: dir271, instruction: "Fold the rolled oats and the chopped mixed nuts into the wet banana mixture. Stir thoroughly until every single oat flake is dark and glossy, indicating it is fully coated. The Pro Tip: Let the mixture sit in the bowl for 5 minutes before baking. This allows the oats to begin absorbing the moisture from the bananas, ensuring a moist, chewy interior that won't dry out in the oven." },
        { title: 'The Compression Technique', image: dir371, instruction: 'Transfer the mixture into a square baking pan lined with parchment paper. Use the back of a large metal spoon or a flat-bottomed glass to firmly press the oats into an even layer. Aggressive compression is the secret to a professional breakfast bar; it forces the ingredients to bond together, creating a dense, sturdy bar that can survive being tossed into a gym bag or lunchbox.' },
        { title: 'The Golden Bake and Setting Phase', image: dir471, instruction: 'Bake at 180°C for 20–25 minutes until the edges are deep golden-brown and the center feels firm to a light touch. The Golden Rule: Do not attempt to slice these while they are warm. Let the bars cool completely in the pan for at least one hour. As the honey and peanut butter cool, they solidify, "locking" the oats and nuts into a clean, sliceable structure.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/gVHBo3YdrYk?si=CnKojarBJEgTm_fe',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id: 72,
      image: recipe72,
      rating: 4.7,
      category: 'Breakfasts',
      title: 'Overnight Oats with Berries and Chia Seeds',
      time: '5 min',
      cuisine: 'Ethiopian',
      servings: 'Serves 1',
      flag: flag5,
      difficulty: 'Beginner',
      tags: ['HEALTHY', 'VEGETARIAN', 'DAIRY-FREE', 'GLUTEN-FREE'],
         description: 'These overnight oats are rich in fiber, omega-3 fatty acids, and antioxidants that help support digestion and sustained morning energy.',
  description2: 'The chia seeds provide healthy fats and protein, while berries contribute vitamin C and natural antioxidants for a refreshing breakfast.',
      ingredients: [
        { quantity: '1 cup', name: 'Rolled Oats' },
        { quantity: '1 cup', name: 'Almond Milk' },
        { quantity: '2 tbsp', name: 'Chia Seeds' },
        { quantity: '1 tbsp', name: 'Maple Syrup' },
        { quantity: '1 cup', name: 'Mixed Berries' },
        { quantity: '1 tsp', name: 'Vanilla Extract' },
      ],
      directions: [
        { title: 'The Emulsified Base', image: dir172, instruction: 'In a wide-mouth glass jar, whisk the almond milk, maple syrup, and vanilla extract until the sweetener is fully dissolved. By flavoring the milk first, you ensure that every oat flake and chia seed absorbs a consistent, balanced sweetness, rather than having the syrup settle at the bottom of the jar.' },
        { title: 'Hydrate the "Gel" Layer', image: dir272, instruction: 'Add the rolled oats and chia seeds to the liquid. Stir vigorously for at least 60 seconds to ensure the chia seeds are suspended and not clumped together. The Pro Tip: Wait two minutes and stir one more time before sealing; this "double-stir" prevents the seeds from sinking, allowing them to expand evenly into a thick, velvety gel that binds the oats together.' },
        { title: 'The Cold-Infusion Phase', image: dir372, instruction: 'Seal the jar tightly and refrigerate for at least 4 hours, though 8 hours (overnight) is ideal for the heartier rolled oats to fully soften. This slow, cold-steeping process preserves the natural nutty flavor of the oats and the delicate antioxidants in the chia seeds without the "mushy" texture sometimes found in cooked oatmeal.' },
        { title: 'The Morning "Aeration" and Plating', image: dir472, instruction: 'In the morning, the mixture will be quite dense. Give it a thorough stir to aerate the oats and check the consistency; if it’s too firm, fold in an extra tablespoon of almond milk to loosen it. Top with the fresh mixed berries right before serving to maintain their firm texture and bright, acidic contrast against the creamy, chilled oats.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/NeBf5ewmI0A?si=8nNHFTDfuH0aBtvK',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id: 73,
      image: recipe73,
      rating: 4.5,
      category: 'Soups',
      title: 'Onion and Thyme French Soup with Croutons',
      time: '50 min',
      cuisine: 'French',
      servings: 'Serves 4',
      flag: flag3,
      difficulty: 'Intermediate',
      tags: ['COMFORT FOOD', 'VEGETARIAN', 'ONE-POT'],
       description: 'This onion and thyme French soup provides comforting warmth, minerals, and savory nutrients with slow-caramelized onions and rich broth.',
  description2: 'The onions contain antioxidants and natural sweetness, while Gruyère cheese adds calcium and protein for a satisfying finish.',
      ingredients: [
        { quantity: '5 pieces', name: 'Large Onions' },
        { quantity: '3 tbsp', name: 'Butter' },
        { quantity: '1 cup', name: 'White Wine' },
        { quantity: '1 liter', name: 'Beef Broth' },
        { quantity: '1 tsp', name: 'Fresh Thyme' },
        { quantity: '4 slices', name: 'Baguette' },
        { quantity: '100 grams', name: 'Gruyere Cheese' },
        { quantity: '1/2 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'The Low-and-Slow Caramelization', image: dir173, instruction: "In a heavy-bottomed Dutch oven, melt the butter over medium-low heat. Add the thinly sliced onions with a small pinch of salt to help them release moisture. Cook them slowly for 40–50 minutes, stirring occasionally. The Secret: If the onions start to stick, add a tablespoon of water to scrape up the brown bits (the fond). You are looking for a deep, jammy mahogany color—this is where 90% of the soup's flavor is born." },
        { title: 'Deglaze and Build the Broth', image: dir273, instruction: 'Increase the heat to medium and pour in the white wine. Use a wooden spoon to vigorously scrape the bottom of the pot, dissolving all the caramelized sugars into the liquid. Once the wine has reduced by half, stir in the fresh thyme and the beef broth. This deglazing process ensures that every bit of savory "umami" from the onions is fully integrated into the soup base.' },
        { title: 'The Melding Simmer', image: dir373, instruction: 'Bring the soup to a gentle boil, then immediately reduce the heat to a low simmer. Cover partially and let the flavors meld for 20 minutes. Taste the broth—the onions should be butter-tender and the liquid should be rich and slightly sweet. Adjust the salt only at this final stage, as the broth will have concentrated during the simmer.' },
        { title: 'The "Gratinée" Finish', image: dir473, instruction: 'Ladle the hot soup into oven-safe crocks. Place a thick, toasted slice of baguette on top of each bowl to act as a "raft" for the cheese. Generously heap the grated Gruyère over the bread, ensuring some cheese touches the edges of the bowl to create a seal. Broil in a preheated oven for 3–5 minutes until the cheese is bubbling, browned in spots, and forms a crisp, lacey crust. Serve immediately while the cheese is molten.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/dYgbCAyc2H4?si=URIQS4uiFfUgzm1f',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,                     

    },
    {
      id: 74,
      image: recipe74,
      rating: 4.6,
      category: 'Breakfasts',
      title: 'Quick Avocado Toast with Poached Egg',
      time: '10 min',
      cuisine: 'Mexican',
      servings: 'Serves 1',
      flag: flag8,
      difficulty: 'Beginner',
      tags: ['HEALTHY', 'QUICK MEALS', 'HIGH-PROTEIN'],
         description: 'This quick avocado toast with poached egg delivers healthy fats, protein, and fiber that help support focus, fullness, and balanced energy.',
  description2: 'The avocado provides heart-friendly fats and potassium, while the eggs contribute high-quality protein and essential vitamins.',
      ingredients: [
        { quantity: '2 slices', name: 'Sourdough Bread' },
        { quantity: '1 piece', name: 'Avocado' },
        { quantity: '2 pieces', name: 'Eggs' },
        { quantity: '1 piece', name: 'Lemon' },
        { quantity: '1/4 tsp', name: 'Chili Flakes' },
        { quantity: '1/2 tsp', name: 'Salt' },
        { quantity: '1 tbsp', name: 'White Vinegar' },
      ],
      directions: [
        { title: 'Caramelize the Sourdough', image: dir174, instruction: 'Toast your sourdough slices until they are a deep golden brown and have a distinct "crunch" when tapped. For a professional touch, lightly brush the hot bread with a drop of olive oil or a halved garlic clove; this creates a fragrant, savory barrier that prevents the creamy avocado from making the bread soggy.' },
        { title: 'The "Chunky-Smooth" Avocado Mash', image: dir274, instruction: 'In a small bowl, roughly mash the avocado with the fresh lemon juice and salt. The Pro Tip: Instead of pureeing it, leave about 30% of the avocado in small chunks. This "chunky-smooth" texture provides a more interesting mouthfeel and keeps the avocado from oxidizing too quickly, maintaining its vibrant green color.' },
        { title: 'The Vortex Poaching Technique', image: dir374, instruction: 'Bring a deep pot of water and the white vinegar to a very gentle simmer—you want tiny "shrimp-eye" bubbles, not a rolling boil. Use a spoon to create a gentle whirlpool (vortex) in the water, then carefully drop each egg into the center. The spinning water will wrap the whites around the yolk, creating a neat, teardrop shape. Poach for exactly 3 minutes for a warm, liquid gold center.' },
        { title: 'Seasoned Assembly', image: dir474, instruction: 'Spread a thick layer of the seasoned avocado across the warm sourdough, creating small ridges with your spoon to hold the egg. Lift the poached eggs out with a slotted spoon and pat them dry on a paper towel to remove excess vinegar-water. Place the eggs on top, pierce the yolk slightly, and finish with a generous sprinkle of chili flakes and a pinch of flaky sea salt to heighten all the flavors.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/GxL9fTvf4go?si=VgwlUHgWl5lK202l',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id: 75,
      image: recipe75,
      rating: 4.4,
      category: 'Salads',
      title: 'Quinoa Tabbouleh Salad with Lemon Dressing',
      time: '20 min',
      cuisine: 'Lebanese',
      servings: 'Serves 4',
      flag: flag1,
      difficulty: 'Easy',
      tags: ['HEALTHY', 'VEGETARIAN', 'GLUTEN-FREE', 'DAIRY-FREE'],
       description: 'This quinoa tabbouleh salad is packed with plant protein, fresh herbs, fiber, and vitamin-rich vegetables for a refreshing healthy meal.',
  description2: 'The quinoa supplies complete protein, while parsley, mint, and lemon deliver antioxidants and bright immune-supporting nutrients.',
      ingredients: [
        { quantity: '1 cup', name: 'Quinoa' },
        { quantity: '2 bunches', name: 'Fresh Parsley' },
        { quantity: '1 bunch', name: 'Fresh Mint' },
        { quantity: '3 pieces', name: 'Tomatoes' },
        { quantity: '1 piece', name: 'Cucumber' },
        { quantity: '3 pieces', name: 'Lemon' },
        { quantity: '4 tbsp', name: 'Olive Oil' },
        { quantity: '1/2 tsp', name: 'Salt' },
      ],
      directions: [
        { title: 'The "Steam-Dry" Quinoa Method', image: dir175, instruction: 'Rinse the quinoa thoroughly to remove its natural bitter coating (saponin). Simmer in 2 cups of water with a pinch of salt for 15 minutes, then turn off the heat and let it sit covered for 5 minutes. Spread the cooked quinoa onto a large flat tray to cool completely; this "air-drying" step prevents the grains from clumping, ensuring the salad stays light and airy rather than soggy.' },
        { title: 'Precision Herb Preparation', image: dir275, instruction: 'Authentic tabbouleh is an herb salad with a little grain, not the other way around. Wash the parsley and mint, then dry them aggressively using a salad spinner or paper towels. Using a very sharp knife, finely mince the leaves—avoid using a food processor, which can bruise the herbs and turn them into a paste. You want tiny, distinct green flecks that provide a clean, peppery crunch.' },
        { title: 'Seed and Dice the Aromatics', image: dir375, instruction: 'Dice the tomatoes and cucumber into very small, uniform cubes (about 5mm). The Pro Tip: Remove the watery seeds from the tomatoes before dicing. This prevents excess juice from pooling at the bottom of the bowl, allowing the bright flavors of the lemon and olive oil to remain concentrated and cling to the quinoa.' },
        { title: 'Emulsify and Infuse', image: dir475, instruction: 'In a small glass jar, vigorously shake the fresh lemon juice, high-quality extra virgin olive oil, and salt until they emulsify into a cloudy, thick dressing. Toss the cooled quinoa with the herbs and vegetables, then pour the dressing over the top. Let the salad sit for 10 minutes before serving; this "resting phase" allows the quinoa to soak up the citrus, softening the bite of the raw herbs.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/8R1Rppo-GIM?si=V2kQ-Pme6SWZmJaQ',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,
    },
    {
      id: 76,
      image: recipe76,
      rating: 4.5,
      category: 'Pasta',
      title: 'Udon Noodle Soup with Mushrooms and Tofu',
      time: '30 min',
      cuisine: 'Japanese',
      servings: 'Serves 2',
      flag: flag19,
      difficulty: 'Easy',
      tags: ['VEGETARIAN', 'DAIRY-FREE', 'ONE-POT'],
       description: 'This udon noodle soup combines comforting carbohydrates, plant-based protein, and savory nutrients for a balanced and nourishing bowl.',
  description2: 'The tofu adds protein and calcium, while mushrooms and miso contribute antioxidants and gut-friendly fermented benefits.',
      ingredients: [
        { quantity: '300 grams', name: 'Udon Noodles' },
        { quantity: '200 grams', name: 'Tofu' },
        { quantity: '200 grams', name: 'Mushrooms' },
        { quantity: '1 liter', name: 'Vegetable Broth' },
        { quantity: '3 tbsp', name: 'Soy Sauce' },
        { quantity: '1 tbsp', name: 'Miso Paste' },
        { quantity: '3 pieces', name: 'Green Onions' },
        { quantity: '1 tsp', name: 'Sesame Oil' },
      ],
      directions: [
        { title: 'Sear the Mushrooms for Umami', image:dir176, instruction: 'Before starting the broth, heat the sesame oil in a large pot over medium-high heat. Add the sliced mushrooms in a single layer and sear them undisturbed for 3–4 minutes until they are deeply browned and slightly "meaty." This step is crucial; it triggers the Maillard reaction, which creates a rich, savory depth that a simple boiled broth cannot achieve.' },
        { title: 'Infuse the Savory Broth', image: dir276, instruction: 'Pour the vegetable broth and soy sauce over the seared mushrooms. Bring the liquid to a gentle simmer, then add the cubed tofu. Let the tofu poach in the flavored liquid for 5–7 minutes; this allows the porous tofu to act like a sponge, absorbing the salt and earthiness of the mushrooms while it warms through.' },
        { title: 'The Proper Miso Emulsion', image: dir376, instruction: 'In a small bowl, whisk the miso paste with a ladle of the hot (but not boiling) broth until it forms a smooth, lump-free slurry. The Golden Rule: Turn the heat to its lowest setting and stir the miso slurry back into the pot. Do not let the broth boil after adding the miso, as high heat destroys its delicate fermented flavors and beneficial nutrients.' },
        { title: 'Assemble and Flash-Heat the Noodles', image: dir476, instruction: 'Cook the thick udon noodles separately in boiling water until they reach a "chewy" or al dente texture. Drain and divide them immediately into two deep bowls. Ladle the piping-hot mushroom and tofu broth over the noodles—this "flash-heats" them one last time. Finish by scattering a generous handful of finely sliced green onions over the top for a bright, sharp contrast to the rich, earthy soup.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/FyQOaIWDPRk?si=l_k9eY3KnrGd3DBL',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id: 77,
      image: recipe77,
      rating: 4.3,
      category: 'Healthy',
      title: 'Ultimate Veggie Buddha Bowl with Hummus',
      time: '25 min',
      cuisine: 'Indian',
      servings: 'Serves 2',
      flag: flag12,
      difficulty: 'Easy', 
      tags: ['HEALTHY', 'VEGETARIAN', 'DAIRY-FREE', 'GLUTEN-FREE'],
       description: 'This ultimate veggie Buddha bowl is filled with fiber, vitamins, healthy fats, and plant protein that help fuel the body naturally.',
  description2: 'The roasted vegetables and chickpeas provide satisfying nutrients, while hummus and avocado add creamy texture with heart-healthy fats.',
      ingredients: [{ quantity: '1 cup', name: 'Brown Rice' },{ quantity: '1 piece', name: 'Sweet Potato' },{ quantity: '1 can', name: 'Chickpeas' },{ quantity: '2 cups', name: 'Kale' },{ quantity: '1 piece', name: 'Avocado' },{ quantity: '3 tbsp', name: 'Hummus' },{ quantity: '2 tbsp', name: 'Tahini' },{ quantity: '1 piece', name: 'Lemon' },],
      directions: [
        { title: 'Simmer the Nutrient-Dense Grains', image: dir177, instruction: 'Rinse the brown rice under cold water to remove excess starch, then combine with two parts water and a pinch of salt. Bring to a boil, then reduce to a low simmer and cover tightly for 30–35 minutes. Once cooked, let the rice rest covered for 5 minutes before fluffing; this "steaming phase" ensures the grains are tender and separate rather than sticky.' },
        { title: 'The High-Heat Roast and Crisp', image: dir277, instruction: 'Toss the diced sweet potato and drained chickpeas with a drizzle of oil, salt, and your favorite spices on a large baking tray. Roast at 200°C for 25 minutes, giving the tray a firm shake halfway through. You are looking for the sweet potatoes to caramelize at the edges and the chickpeas to become "popcorn-crispy," providing a vital textural crunch to the bowl.' },
        { title: 'The Kale "Velvet" Massage', image:dir377, instruction: 'While the vegetables roast, de-stem and finely chop the kale. Place it in a bowl with a teaspoon of olive oil and a squeeze of lemon. Use your hands to aggressively "massage" the leaves for 2 minutes until they turn a dark, vibrant green and feel soft and silky. This process breaks down the tough cellulose fibers, making the kale sweet and tender rather than bitter and chewy.' },
        { title: 'Emulsify and Assemble', image: dir477, instruction: 'Create a professional dressing by whisking the hummus, tahini, and remaining lemon juice with a splash of warm water until it reaches a "ribbon" consistency. Build your bowl by layering the warm rice and roasted vegetables over the massaged kale. Top with creamy avocado slices and a heavy drizzle of the tahini-hummus emulsion to tie the earthy and bright flavors together.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/cSVwY3NPOSw?si=MO17paHYq1ftSZdZ',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id: 78,
      image: recipe78,
      rating: 4.7,
      category: 'Breakfasts',
      title: 'Whole Wheat Banana Pancakes with Maple Syrup',
      time: '20 min',
      cuisine: 'American',
      servings: 'Serves 4',
      flag: flag9,
      difficulty: 'Beginner',
      tags: ['HEALTHY', 'KID-FRIENDLY', 'VEGETARIAN'],
        description: 'These whole wheat banana pancakes provide fiber, natural sweetness, and wholesome carbohydrates that make breakfast both nutritious and satisfying.',
  description2: 'The whole wheat flour supports digestion, bananas provide potassium, and eggs add protein for a balanced and energizing start to the day.',
      ingredients: [{ quantity: '2 pieces', name: 'Ripe Bananas' },{ quantity: '1.5 cups', name: 'Whole Wheat Flour' },{ quantity: '1 cup', name: 'Milk' },{ quantity: '2 pieces', name: 'Eggs' },{ quantity: '2 tbsp', name: 'Coconut Oil' }, { quantity: '1 tsp', name: 'Baking Powder' },{ quantity: '1 tsp', name: 'Cinnamon' },{ quantity: '1/4 cup', name: 'Maple Syrup' },],
      directions: [
        { title: 'Create a "Liquid-Gold" Banana Base', image: dir178, instruction: 'Peel the ripe bananas and mash them in a wide bowl using a fork or potato masher until they reach a smooth, liquid-like consistency with only tiny, soft lumps. Whisk in the eggs, milk, and melted coconut oil until the wet ingredients are fully emulsified and frothy; this aeration is the secret to a lighter pancake.' },
        { title: 'The Gentle Folding Technique', image: dir278, instruction: 'Sift the whole wheat flour, baking powder, and cinnamon directly into the wet mixture. Use a spatula to gently fold the ingredients together only until the flour streaks disappear. The Golden Rule: Do not over-mix; a few small lumps in the batter are perfectly fine and ensure the pancakes stay tender rather than rubbery.' },
        { title: 'The Essential Hydration Rest', image: dir378, instruction: 'Allow the batter to sit undisturbed for 5 to 10 minutes. This "resting phase" allows the thirsty whole wheat bran to fully hydrate and the baking powder to activate. You will see small bubbles forming on the surface, which indicates the batter is ready to rise into thick, pillowy pancakes.' },
        { title: 'The "Bubble and Flip" Indicator', image:dir478 , instruction: 'Heat a non-stick griddle over medium-low heat with a tiny drop of coconut oil. Ladle the batter onto the pan and wait until the edges look matte and small bubbles pop on the surface. Because of the natural sugars in the banana, these will brown quickly—flip gently once the bubbles stay open and cook for an additional 60 seconds.' },
        { title: 'Final Glaze and Service', image: dir578, instruction: 'Stack the warm pancakes immediately to trap the residual steam, keeping them soft. Drizzle generously with maple syrup while they are hot so the syrup seeps into the porous whole wheat crumb. Top with a few fresh banana slices for a bright, textural contrast to the warm cinnamon notes.' },
      ],
      videoUrl: 'https://www.youtube.com/embed/nh22nnt6h4E?si=Mv-C36SmhreuAeG6',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img,

    },
    {
      id: 79,
     image: recipe79,
      rating: 4.7,
      category: 'Soups',
      title: 'White Bean and Kale Soup with Garlic Bread',
      time: '40 min',
      cuisine: 'Italian',
      servings: 'Serves 4',
      flag: flag4,
      difficulty: 'Beginner',
      tags: ['HEALTHY', 'VEGETARIAN', 'COMFORT FOOD', 'HIGH-FIBER'],
      description: 'This white bean and kale soup is thick, hearty, and naturally rich in plant-based protein, dietary fiber, iron, and essential vitamins from the nutrient-dense kale and beans. The slow-simmered vegetables and herbs create a deeply comforting broth while supporting digestion and long-lasting fullness. Olive oil contributes heart-healthy fats, and the garlic adds immune-supporting antioxidants that make this soup both wholesome and satisfying.',
description2: 'The crispy garlic bread perfectly complements the creamy texture of the soup while adding warmth and crunch to every bite. Thanks to the combination of fiber-rich beans, mineral-packed kale, and nourishing broth, this rustic Italian-inspired meal provides balanced nutrition, steady energy, and comforting flavors ideal for cozy lunches or healthy family dinners.',
      ingredients: [{ quantity: '2 cups', name: 'White Beans (cooked or canned, drained)' },{ quantity: '1 bunch', name: 'Kale (chopped, stems removed)' },{ quantity: '1 medium', name: 'Onion (chopped)' },{ quantity: '3 cloves', name: 'Garlic (minced)' },{ quantity: '1 medium', name: 'Carrot (diced)' },{ quantity: '1 stalk', name: 'Celery (chopped)' },{ quantity: '4 cups', name: 'Vegetable Broth' },{ quantity: '2 tbsp', name: 'Olive Oil' },{ quantity: '1/2 tsp', name: 'Dried Thyme' },{ quantity: '1/2 tsp', name: 'Dried Oregano' },{ quantity: 'to taste', name: 'Salt' },{ quantity: '1/4 tsp', name: 'Black Pepper' },{ quantity: '4 slices', name: 'Bread (for garlic bread)' },{ quantity: '2 tbsp', name: 'Butter (softened)' },{ quantity: '2 cloves', name: 'Garlic (for garlic bread)' },{ quantity: '1 tbsp', name: 'Fresh Parsley (chopped, optional)' }],
      directions: [
        {title: 'Develop the Soffritto Base',image: dir179,instruction: 'In a heavy-bottomed Dutch oven or stockpot, heat the olive oil over medium-low heat. Add the finely diced onion, carrot, and celery—this trinity is known as soffritto. Rather than a quick sauté, cook these vegetables slowly for 8–10 minutes. You want them to "sweat" and become translucent and sweet, which creates the foundational depth for the entire soup.'},
        {title: 'Bloom the Auromatics',image: dir279,instruction: 'Increase the heat to medium and stir in the minced garlic, dried thyme, and oregano. Sauté for exactly 60 seconds. This short burst of heat "wakes up" the dried herbs, releasing their essential oils into the fat, ensuring the herbal notes are integrated into the broth rather than just floating on top.'},
        {title: 'The Creaminess Technique',image: dir379,instruction: ' Pour in the vegetable broth and the drained white beans. Before simmering, take a potato masher or a large spoon and crush about 1/2 cup of the beans directly against the side of the pot. This releases natural starches into the liquid, transforming a thin broth into a rich, slightly creamy, and "stew-like" consistency without needing any dairy.'},
        {title: 'The Slow Simmer', image: dir479,instruction: 'Bring the soup to a gentle boil, then immediately reduce the heat to low. Cover the pot partially and let it simmer for 15–20 minutes. This resting phase allows the beans to absorb the savory flavors of the broth and the vegetables to become butter-tender.'},
        {title: 'temper the Kale',image: dir579,instruction: 'Increase the heat slightly and fold in the chopped kale. Because kale is a hearty, fibrous green, it needs 5–7 minutes to properly wilt and soften. During this time, the kale will infuse the soup with an earthy sweetness. If the soup looks too thick after the kale reduces, add a splash of warm water or extra broth to reach your desired consistency.'},
        {title: 'Prepare the Infused Garlic Bread',image: dir679,instruction: 'While the soup finishes, prepare the accompaniment. Instead of just spreading garlic on top, cream together the softened butter, minced garlic, and parsley into a smooth paste. Generously coat both sides of your bread slices. Toast in a 200°C oven or on a hot griddle until the edges are golden-brown and the center is slightly chewy—this provides the perfect textural contrast for dipping.'},
        {title:'Brighten and Season',image:dir779,instruction:'Turn off the heat. Taste the soup and add salt and freshly cracked black pepper. The Chef’s Touch: Add a small squeeze of fresh lemon juice or a teaspoon of balsamic vinegar right before serving. This hit of acidity cuts through the starchiness of the beans and makes the flavors "pop."'},
        {title: 'Final Plating',image: dir879,instruction: 'Ladle the hot soup into deep bowls. Finish with a final drizzle of high-quality extra virgin olive oil and a sprinkle of fresh parsley. Serve immediately with the warm, crisp garlic bread on the side for a complete, nourishing meal.'}
      ],
      videoUrl: 'https://www.youtube.com/embed/Pj3GR7b-s7s?si=AqUDCPd0cxNY2qRj',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img
  
    },
    {
      id: 80,
      image: recipe80,
      rating: 4.8,
      category: 'Appetizers',
      title: 'Xtra Crispy Baked Chicken Wings with Sauce',
      time: '50 min',
      cuisine: 'American',
      servings: 'Serves 4',
      flag: flag2,
      difficulty: 'Intermediate',
      tags: ['CRISPY', 'BAKED', 'HIGH-PROTEIN', 'PARTY'],
      description: 'These extra crispy baked chicken wings are packed with high-quality protein that helps support muscle recovery and keeps you feeling satisfied for longer. Baking instead of deep frying significantly reduces excess oil while still delivering a crunchy golden texture. The flavorful spice blend provides warmth and depth, while the homemade sauce adds a balanced combination of savory, sweet, and spicy notes without overwhelming heaviness.',
      description2: 'The wings remain juicy inside while developing a crisp outer layer through smart baking techniques that render the natural fats from the chicken skin. Rich in protein and bursting with bold flavors from garlic, paprika, and hot sauce, this crowd-pleasing appetizer offers a lighter alternative to traditional fried wings while still delivering restaurant-style crunch and satisfaction.',
      ingredients: [{ quantity: '1 kg', name: 'Chicken Wings (split and tips removed)' },{ quantity: '1 tbsp', name: 'Baking Powder (aluminum-free)' },{ quantity: '1 tsp', name: 'Salt' },{ quantity: '1/2 tsp', name: 'Black Pepper' },{ quantity: '1 tsp', name: 'Garlic Powder' },{ quantity: '1 tsp', name: 'Paprika' },{ quantity: '1/2 tsp', name: 'Chili Powder' },{ quantity: '2 tbsp', name: 'Butter (melted)' },{ quantity: '3 tbsp', name: 'Hot Sauce' },{ quantity: '1 tbsp', name: 'Honey' },  { quantity: '1 tsp', name: 'Soy Sauce' }],
      directions: [
        {title: 'Achieve Absolute Surface Dryness',image: dir180,instruction: 'The primary enemy of a crispy wing is moisture. Remove the chicken wings from their packaging and spend time aggressively patting each piece dry with heavy-duty paper towels. The skin should feel tacky and matte, not slippery. If you have the time, place the unseasoned wings on a wire rack in the refrigerator for 1 hour to "air-dry," which significantly improves the final crunch.'},
        {title: 'The Chemistry of the Coating',image: dir280,instruction: 'In a large, dry mixing bowl, whisk together the aluminum-free baking powder, salt, garlic powder, paprika, and chili powder. It is vital to use aluminum-free powder to avoid a bitter, metallic aftertaste that heat can activate. Toss the bone-dry wings in this mixture until they wear a very thin, dusty "frosting." Do not over-coat; you want a fine layer that will react with the chicken’s natural fats.'},
        {title: 'Elevate for Convection Airflow',image: dir380,instruction: 'Line a large baking tray with foil for easy cleanup, then place a sturdy wire cooling rack on top. Lightly grease the rack with a small amount of oil. Arrange the wings in a single layer, ensuring they are not touching. This elevation is critical—it allows the hot oven air to circulate 360 degrees around the meat, rendering the subcutaneous fat so the wings "fry" in their own juices rather than steaming in them.'},
        {title: 'The Two-Stage Render and Crisp',image: dir480,instruction: 'Preheat your oven to 220°C. For the most professional results, start the wings at a lower shelf in the oven for the first 20 minutes to begin the fat-rendering process. Then, move them to the upper-middle rack for the remaining 20–25 minutes. Flip the wings halfway through. You are looking for the skin to become tight, blistered with tiny microscopic bubbles, and a deep mahogany gold.'},
        {title: 'Emulsify the Signature Glaze',image: dir580,instruction: 'While the wings are reaching their peak crispness, prepare the sauce. In a small saucepan over low heat, combine the melted butter, hot sauce, honey, and soy sauce. Whisk continuously to emulsify the fats with the acids. The honey provides a sticky gloss, while the soy sauce adds a deep "umami" saltiness that traditional buffalo sauces lack. Keep the sauce warm but do not let it boil.'},
        {title: 'The Final Toss and "Flash" Finish',image: dir680,instruction: 'Once the wings are out of the oven, let them rest on the rack for exactly 2 minutes. This allows the internal juices to settle and the crust to fully harden. Transfer to a large metal bowl, pour the warm sauce over them, and toss rapidly. By tossing them just before serving, you ensure the sauce coats the "micro-blisters" without having enough time to soak into the skin and make it soggy.'},
        {title: 'Presentation and Service',image: dir780,instruction: 'Serve the wings immediately while the contrast between the piping-hot, crunchy skin and the juicy interior is at its peak. Pair with a cooling dip like blue cheese or ranch to balance the heat of the chili and the richness of the rendered chicken fat.'}
      ],
      videoUrl: 'https://www.youtube.com/embed/mh2AXh1eRmE?si=7Fi_0gBPwDGPMWUQ',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img
    },
    {
      id: 81,
      image: recipe81,
      rating: 4.9,
      category: 'Desserts',
      title: 'Xmas Spiced Gingerbread Cookies with Icing',
      time: '1 hr',
      cuisine: 'European',
      servings: 'Makes 20 cookies',
      flag: flag5,
      difficulty: 'Intermediate',
      tags: ['HOLIDAY', 'VEGETARIAN', 'BAKING', 'SWEET'],
      description: 'These Xmas spiced gingerbread cookies are filled with warming spices like ginger, cinnamon, and cloves that provide comforting flavor along with natural antioxidant properties. Molasses adds deep caramel sweetness while also contributing minerals such as iron and calcium, creating cookies that are rich, aromatic, and perfectly festive for the holiday season.',
      description2: 'The crisp edges and soft centers create a delightful texture contrast, while the decorative icing adds sweetness and visual charm to every cookie. The blend of fragrant spices not only enhances the cozy holiday flavor but also gives these classic treats a nostalgic warmth that makes them perfect for festive gatherings, gifting, and seasonal celebrations.',
      ingredients: [ { quantity: '2 1/4 cups', name: 'All-Purpose Flour' }, { quantity: '1/2 cup', name: 'Unsalted Butter (softened)' }, { quantity: '1/2 cup', name: 'Brown Sugar' }, { quantity: '1/2 cup', name: 'Molasses' }, { quantity: '1 large', name: 'Egg' }, { quantity: '1 tsp', name: 'Baking Soda' }, { quantity: '1 tbsp', name: 'Ground Ginger' }, { quantity: '1 tsp', name: 'Ground Cinnamon' }, { quantity: '1/2 tsp', name: 'Ground Cloves' }, { quantity: '1/4 tsp', name: 'Salt' }, { quantity: '1 tsp', name: 'Vanilla Extract' },{ quantity: '1 1/2 cups', name: 'Powdered Sugar (for icing)' },{ quantity: '2-3 tbsp', name: 'Milk or Lemon Juice (for icing)' } ],
      directions: [
        {title: 'Cream the Base for Aeration',image: dir181,instruction: 'Begin by creaming the softened unsalted butter and brown sugar together in a large bowl. Use an electric mixer on medium-high speed for at least 3–5 minutes until the mixture is pale, light, and noticeably fluffy. This process incorporates tiny air pockets that give the cookies a delicate crumb. Once aerated, stream in the molasses, egg, and vanilla extract, mixing until the batter is glossy and uniform in color.'},
        {title: 'Sift and Aerate Dry Ingredients',image: dir281,instruction: 'In a separate bowl, whisk together the all-purpose flour, baking soda, ground ginger, cinnamon, cloves, and salt. For the best results, sift these ingredients through a fine-mesh strainer to remove any clumps of ginger or soda. This ensures the potent spices are distributed evenly, preventing any "spice hotspots" and guaranteeing that every bite has a consistent, warming heat.'},
        {title: 'Hydrate the Dough',image: dir381,instruction: 'Gradually incorporate the dry flour mixture into the wet molasses base. Switch to a low speed or use a sturdy spatula to fold the ingredients together. Mix only until the white streaks of flour disappear. Overworking the dough at this stage develops gluten, which can make the cookies tough rather than crisp. The resulting dough should be soft, slightly tacky, and deep mahogany in color.'},
        {title: 'The Essential Chilling Phase',image: dir481,instruction: 'Divide the dough into two flat discs and wrap them tightly in plastic wrap. Refrigerate for at least 30 minutes (or up to 2 hours). This is a non-negotiable step; chilling allows the flour to fully hydrate and the butter to firm up. Cold dough prevents the cookies from spreading in the oven, ensuring your stars, trees, or gingerbread men retain their sharp, defined edges.'},
        {title: 'Precision Rolling and Cutting',image: dir581,instruction: 'Preheat your oven to 180°C. On a lightly floured surface or between two sheets of parchment paper, roll the dough to a consistent thickness of about 5mm. Using your favorite holiday cutters, stamp out shapes as close together as possible to minimize scraps. If the dough becomes too warm or soft to handle, return it to the fridge for 10 minutes before transferring the shapes to a lined baking tray.'},
        {title: 'The "Snap" Bake and Cooling',image: dir681,instruction: 'Bake the cookies for 8–10 minutes. The key is to pull them out when the edges are just firm to the touch but the centers still look slightly soft. They will continue to "set" on the hot tray. After 5 minutes, transfer them to a wire cooling rack. Cooling completely is vital—if the cookies are even slightly warm, the icing will melt and run off the edges.'},
        {title: 'Emulsify the Royal-Style Icing',image: dir781,instruction: 'Sift the powdered sugar into a bowl to ensure a lump-free finish. Gradually whisk in the milk or lemon juice, one teaspoon at a time, until you reach a "flooding" consistency—the icing should disappear back into itself within 5–10 seconds when drizzled. The lemon juice option adds a professional brightness that cuts through the rich sweetness of the sugar.'},
        {title: 'Artful Decoration and Setting',image: dir881,instruction: 'Transfer the icing to a piping bag with a small round tip. Outline the edges of the cooled cookies first, then fill in the centers or add intricate details like buttons and snowflakes. Allow the decorated cookies to air-dry at room temperature for at least 1–2 hours. This creates a hard, matte shell that allows the cookies to be stacked or gifted without smudging the designs.'}
      ],
      videoUrl: 'https://www.youtube.com/embed/brZVMqRlc5w?si=93xyrbIs7ncWv-WT',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img

    },
    {
      id: 82,
      image: recipe82,
      rating: 4.9,
      category: 'Main Course',
      title: 'Yellow Lentil Dal with Basmati Rice',
      time: '35 min',
      cuisine: 'Indian',
      servings: 'Serves 4',
      flag: flag1,
      difficulty: 'Beginner',
      tags: ['COMFORT FOOD', 'VEGETARIAN', 'GLUTEN-FREE', 'HIGH-PROTEIN'],
      description: 'This yellow lentil dal with basmati rice is a nourishing Indian comfort meal loaded with plant-based protein, fiber, and essential nutrients that support energy and digestion. The lentils become creamy and rich while absorbing aromatic spices like turmeric, cumin, and garam masala, creating a deeply flavorful dish that is both wholesome and satisfying.',
      description2: 'The fluffy basmati rice pairs beautifully with the silky dal, balancing the earthy lentils with light and fragrant grains. Packed with protein, warming spices, and slow-cooked aromatics, this traditional meal delivers comforting flavors, steady nourishment, and a healthy balance that makes it ideal for everyday lunches or cozy family dinners.',
      ingredients: [{ quantity: '1 cup', name: 'Yellow Lentils (Toor Dal or Moong Dal)' },{ quantity: '3 cups', name: 'Water' },{ quantity: '1/2 tsp', name: 'Turmeric Powder' },{ quantity: '1 tsp', name: 'Salt' },{ quantity: '1 tbsp', name: 'Ghee or Oil' },{ quantity: '1 tsp', name: 'Cumin Seeds' },{ quantity: '1 medium', name: 'Onion (finely chopped)' },{ quantity: '2 cloves', name: 'Garlic (minced)' },{ quantity: '1 inch', name: 'Ginger (grated)' },{ quantity: '1 medium', name: 'Tomato (chopped)' },{ quantity: '1/2 tsp', name: 'Red Chili Powder' },{ quantity: '1/2 tsp', name: 'Garam Masala' },{ quantity: '2 tbsp', name: 'Fresh Coriander Leaves (chopped)' },{ quantity: '1 cup', name: 'Basmati Rice' },{ quantity: '2 cups', name: 'Water (for rice)' }],
      directions: [
        {title: 'Prep and Bloom the Lentils',image: dir182,instruction: 'Thoroughly rinse the lentils in a fine-mesh sieve until the water runs clear. In a heavy-bottomed pot or pressure cooker, combine the lentils, 3 cups of water, turmeric, and salt. Bring to a boil and skim off any white foam that rises to the surface; this ensures a cleaner, more refined flavor. Simmer until the lentils are completely soft and begin to "bloom" or break apart. For a professional finish, use a whisk to lightly mash a portion of the lentils, creating a thick, creamy base.'},
        {title: 'The Science of Fluffy Basmati',image: dir282,instruction: 'Soak the rinsed rice in cold water for 20 minutes before cooking to allow the grains to elongate. Drain and add to a pot with 2 cups of fresh water and a pinch of salt. Bring to a boil, then immediately reduce the heat to the lowest possible setting and cover with a tight-fitting lid. Simmer for 12 minutes, then turn off the heat and let it steam undisturbed for 5 minutes. This "resting phase" is crucial—it allows the moisture to redistribute, ensuring the grains stay separate and fluffy.'},
        {title: 'Make the Tempering',image: dir382,instruction: 'In a wide skillet, heat the ghee or oil over medium-high heat. Add the cumin seeds and wait for them to "splutter" and turn a deep golden brown—this toasted aroma is the soul of the dish. Add the finely chopped onions and sauté patiently. Rather than just softening them, aim for a deep caramelization. The natural sugars in the browned onions provide an essential sweet-savory contrast to the earthy lentils.'},
        {title: 'Saute the Aromatics Base',image: dir482,instruction: 'Stir in the minced garlic and grated ginger, cooking for about 60 seconds until the raw, pungent aroma mellows into a sweet fragrance. Add the chopped tomatoes with a small pinch of salt to draw out their moisture. Cook the mixture down until the tomatoes soften into a jam-like consistency and you see small beads of oil separating at the edges of the pan. This indicates the base is fully concentrated and "cooked out."'},
        {title: 'Bloom the Spices',image: dir582,instruction: 'Lower the heat and add the red chili powder and garam masala. Stir constantly for 30 seconds to "bloom" the spices in the hot fat. This process releases the fat-soluble flavor compounds, making the spices taste vibrant rather than dusty. Be careful not to burn them, as this can turn the dal bitter.'},
        {title: 'The Marriage of Flavors',image: dir682,instruction: 'Carefully pour the cooked lentils into the aromatic base. Stir thoroughly to incorporate the spiced oil. If the consistency is too thick, add a splash of boiling water (hot water maintains the temperature and prevents the lentils from toughening). Simmer on low for 5–10 minutes, allowing the lentils to absorb the complex flavors of the tempering.'},
        {title: 'Garnish and Serve',image: dir782,instruction: 'Taste the dal and adjust the salt if necessary. Stir in half of the fresh coriander to infuse the sauce. To serve, ladle the dal over the fluffed basmati rice. Garnish with the remaining coriander and, for a truly authentic touch, add a tiny squeeze of lemon juice or a final dollop of ghee to the center of the bowl to add a bright, luxurious finish.'}
      ],
      videoUrl: 'https://www.youtube.com/embed/VMqzpy1He7Y?si=18wlrWHUcFgdHHQ4',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img
    },
    {
      id: 83,
      image: recipe83,
      rating: 4.8,
      category: 'Salads',
      title: 'Yogurt and Cucumber Salad with Fresh Mint',
      time: '15 min',
      cuisine: 'Turkish',
      servings: 'Serves 3',
      flag: flag7,
      difficulty: 'Beginner',
      tags: ['HEALTHY', 'VEGETARIAN', 'GLUTEN-FREE'],
      description: 'This yogurt and cucumber salad is cool, creamy, and refreshing while providing protein, probiotics, calcium, and hydration from thick Greek yogurt and crisp cucumber. Fresh mint and lemon juice brighten the flavor profile naturally, while garlic and olive oil add depth, antioxidants, and healthy fats that make this Turkish-inspired dish both light and nourishing.',
      description2: 'The chilled texture and tangy yogurt create a perfectly balanced side dish that refreshes the palate and complements spicy or grilled meals beautifully. Rich in gut-friendly probiotics and hydrating ingredients, this salad offers a clean, cooling finish while delivering fresh herbal flavors and creamy consistency in every spoonful.',
      ingredients: [{ quantity: '2 cups', name: 'Greek Yogurt (thick and creamy)' },{ quantity: '1 large', name: 'Cucumber (peeled and grated)' },{ quantity: '2 tbsp', name: 'Fresh Mint (finely chopped)' },{ quantity: '2 cloves', name: 'Garlic (minced)' },{ quantity: '1 tbsp', name: 'Olive Oil (extra virgin)' },{ quantity: '1 tbsp', name: 'Fresh Lemon Juice' },{ quantity: '1/2 tsp', name: 'Salt' },{ quantity: '1/4 tsp', name: 'Black Pepper' },{ quantity: '2 tbsp', name: 'Cold Water (optional for consistency)' }],
      directions: [
        { title: 'Prep the Cucumber', image: dir183, instruction: 'Begin by washing and peeling the cucumber. Once grated, the cucumber will naturally release a significant amount of liquid. To prevent your salad from becoming thin or separated, transfer the gratings into a clean muslin cloth or a fine-mesh sieve. Firmly squeeze or press down to extract as much juice as possible. Aim for a dry, "fluffed" texture before moving to the next step.' },
        { title: 'Whisk the Yogurt Base', image: dir283, instruction: "In a large glass mixing bowl, vigorously whisk the Greek yogurt. You are looking for a glossy, aerated consistency without any lumps. If the yogurt feels too dense for a salad, gradually incorporate a tablespoon or two of ice-cold water. This doesn't just change the thickness; it helps the yogurt feel more refreshing on the palate."},
        { title: 'Infuse the Aromatics', image: dir383, instruction: 'Gently fold the prepared cucumber, finely minced garlic, and chopped mint into the yogurt base. Use a folding motion rather than aggressive stirring to maintain the yogurt’s structure. Ensure the garlic is evenly distributed so that every bite carries a consistent, aromatic warmth without any overpowering "garlic pockets."' },
        { title: 'Emulsify with Oil and Lemon', image: dir483, instruction: 'Slowly drizzle in the extra virgin olive oil and fresh lemon juice while stirring continuously. This process emulsifies the fats into the yogurt, creating a richer mouthfeel. Season with salt and freshly cracked black pepper. At this stage, taste the mixture—the salt should heighten the mint, while the lemon should provide a bright, clean finish.' },
        { title: 'Temper the Flavors', image: dir583, instruction: 'Cover the bowl tightly with plastic wrap and place it in the coldest part of your refrigerator for at least 15 minutes. This resting period is essential because the oils from the mint and the pungency of the garlic need time to bleed into the yogurt, creating a cohesive and well-rounded flavor profile.' },
        { title: 'Garnish & Serve', image: dir683, instruction: 'Transfer the chilled salad to a shallow serving dish. Using the back of a spoon, create a shallow "well" or spiral across the surface. Pour a thin stream of olive oil into these grooves and scatter a few whole mint leaves or a pinch of sumac on top. Serve immediately while chilled to provide the best contrast against warm or spicy main dishes.' }
      ],
      videoUrl: 'https://www.youtube.com/embed/bKEwOmuBOYs?si=3DbYGvlEj_5JDcRm',
      galleryImages: [],
      author: 'Olivia Thompson',
      authorImage: author_img
    },

  ];

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
];
const RECIPES_PER_PAGE = 16;

const AllRecipe = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getPageFromParams = () => {
    const pageParam = Number.parseInt(searchParams.get('page') || '1', 10);
    return Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;
  };
  const [currentPage, setCurrentPage] = useState(getPageFromParams);
  const [dbRecipes, setDbRecipes] = useState([]);
  const topRef = useRef(null);

  useEffect(() => {
    fetch(getApiUrl('/api/cards'))
      .then(res => res.json())
      .then(data => setDbRecipes(data))
      .catch(() => setDbRecipes([]));
  }, []);

useEffect(() => {
  if (topRef.current) {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, [currentPage]);

const filteredDbRecipes = dbRecipes.filter(db =>
  !recipecards.some(staticCard => staticCard.id === db.id)
);
const allRecipes = [...recipecards, ...filteredDbRecipes];

const totalPages = Math.ceil(allRecipes.length / RECIPES_PER_PAGE);
const startIdx = (currentPage - 1) * RECIPES_PER_PAGE;
const paginatedRecipes = allRecipes.slice(startIdx, startIdx + RECIPES_PER_PAGE);

useEffect(() => {
  const pageFromParams = getPageFromParams();
  const boundedPage = Math.min(Math.max(pageFromParams, 1), Math.max(totalPages, 1));

  if (boundedPage !== currentPage) {
    setCurrentPage(boundedPage);
  }
}, [searchParams, totalPages, currentPage,getPageFromParams]);

 const changePage = (pageNum) => {
  if (pageNum >= 1 && pageNum <= totalPages) {
    setCurrentPage(pageNum);
    setSearchParams({ page: String(pageNum) });
    window.scrollTo({ top: 0, behavior: 'smooth' });    
  }
};

  return (
    <>
    <div ref={topRef} className='page-header-sec'>
        <Pageheader pageheader={pageProps} />
    </div>
    <div className="category-sec">
        {categories.map((item, i) => (
          <a href={item.link} key={i}>
            <div key={i} className="category-card">
            <div className="category-icon">{item.icon}</div>
            <div className='category-cont'>
              <h5 className="category-title">{item.title}</h5>
              <p className="category-count">{item.count}</p>
            </div>
          </div>
          </a>
        ))}
    </div>
    {/* <div className='recipes-container'>
          {recipecards.map((recipe, i) => (
        <RecipeCard key={i} {...recipe} />
          ))}
    </div> */}
    <div className='recipes-container'>
        {paginatedRecipes.map((recipe, i) => (
          <RecipeCard key={recipe.id || i} {...recipe} />
        ))}
      </div>
     <div className='pagination'>
        {currentPage > 1 && (
          <button onClick={() => changePage(currentPage - 1)} className="pagination-btn">
            ← Previous
          </button>
        )}

        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => changePage(pageNum)}
              className={`pagination-btn ${currentPage === pageNum ? 'active' : ''}`}
            >
              {pageNum}
            </button>
          );
        })}

        {currentPage < totalPages && (
          <button onClick={() => changePage(currentPage + 1)} className="pagination-btn">
            Next →
          </button>
        )}
      </div>
    <div className='tags-sec'>
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

export { recipecards };
export default AllRecipe;
