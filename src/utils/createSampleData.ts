import Chef from '../api/chef/chef.schema';
import Dish from '../api/dish/dish.schema';
import Restaurant from '../api/restaurant/restaurant.schema';

export const createSampleData = async () => {
  try {
    const chef1 = new Chef({
      name: 'Yossi shitrite',
      restaurantIds: [],
      image: 'chef1_image_url',
    });
    await chef1.save();

    const dish1 = new Dish({
        name: 'Onza',
        cuisine: 'Italian',
        image: 'dish1_image_url',
        price: 100,
        ingredients: ['Tomato', 'Cheese'], 
        chefId: chef1._id,  
        restaurantId: [],  
      });
      await dish1.save();

      const dish2 = new Dish({
        name: 'kitchen market',
        cuisine: 'Moroccan',
        image: 'dish2_image_url',
        price: 94,
        ingredients: ['Meat', 'Bread', 'Hummus'], 
        chefId: chef1._id,  
        restaurantId: [],  
      });
      await dish2.save();
    

    const restaurant1 = new Restaurant({
      name: 'Sample Restaurant',
      chefId: chef1._id,
      dishesId: [dish1._id,dish2._id],
      image: 'restaurant_image_url',
    });
    await restaurant1.save();

    console.log('Sample data created successfully');
  } catch (err) {
    console.error('Error creating sample data:', err);
  }
};