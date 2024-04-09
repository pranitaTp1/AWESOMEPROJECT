import { Category } from "../models/category";
import { Meal } from "../models/meal";
export const CATEGORIES: Category[] = [
    {id:'c1',name:'Italian',color:'#f5428d'},
    {id:'c2',name:'Quick and easy',color:'#f54242'},
    {id:'c3',name:'Hamburgers',color:'blue'},
    {id:'c4',name:'German',color:'#f5d142'},
    {id:'c5',name:'VadaPav',color:'#f5d142'},
    {id:'c6',name:'Donut',color:'#f5d142'}
];

export const MEALS: Meal[] =[
    { id: 'm1',
    categoryIds:['c1', 'c2'],
    title:'Spaghetti with Tomato Sauce',
    affordability:'affordable',
    complexity:'simple',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    duration:20,
    ingredients:[
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    steps:[
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    isGlutenFree:false,
    isVegan:true,
    isVegetarian:true,
    isLactoseFree:true
  },
  { id: 'm2',
  categoryIds:['c2'],
  title:'Toast Hawaii',
  affordability:'affordable',
  complexity:'simple',
  imageUrl:'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
  duration:10,
  ingredients:[
    '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
  ],
  steps:[
    'Butter one side of the white bread',
    'Layer ham, the pineapple and cheese on the white bread',
    'Bake the toast for round about 10 minutes in the oven at 200°C'
  ],
  isGlutenFree:false,
  isVegan:true,
  isVegetarian:true,
  isLactoseFree:true
},
{ id: 'm3',
  categoryIds:['c3'],
  title:'Classic Hamburger',
  affordability:'pricey',
  complexity:'simple',
  imageUrl:'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
  duration:45,
  ingredients:[
    '300g Cattle Hack',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
      'Ketchup',
      '2 Burger Buns'
  ],
  steps:[
    'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion'
  ],
  isGlutenFree:false,
  isVegan:true,
  isVegetarian:true,
  isLactoseFree:true
},
{ id: 'm4',
  categoryIds:['c4'],
  title:'Wiener Schnitzel',
  affordability:'luxurious',
  complexity:'challenging',
  imageUrl:'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
  duration:60,
  ingredients:[
    '8 Veal Cutlets',
    '4 Eggs',
    '200g Bread Crumbs',
    '100g Flour',
    '300ml Butter',
    '100g Vegetable Oil',
    'Salt',
    'Lemon Slices'
  ],
  steps:[
    'Tenderize the veal to about 2–4mm, and salt on both sides.',
    'On a flat plate, stir the eggs briefly with a fork.',
    'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
    'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
    'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
    'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
    'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
  ],
  isGlutenFree:false,
  isVegan:true,
  isVegetarian:true,
  isLactoseFree:true
},
{ id: 'm5',
  categoryIds:['c2', 'c5', 'c10'],
  title:'Salad with Smoked Salmon',
  affordability:'luxurious',
  complexity:'simple',
  imageUrl:'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
  duration:15,
  ingredients:[
    'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'
  ],
  steps:[
    'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
  ],
  isGlutenFree:true,
  isVegan:false,
  isVegetarian:true,
  isLactoseFree:true
}
]