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
        iconMeaning: 'vegan',
        image: 'dish1_image_url',
        price: 100,
        ingredients: ['Tomato', 'Cheese'], 
        chefId: chef1._id,  
        restaurantId: "6773eec8dacbccf956211609",  
      });
      await dish1.save();
      const dish2 = new Dish({
        name: 'kitchen market',
        iconMeaning: 'spicy',
        image: 'dish2_image_url',
        price: 94,
        ingredients: ['Meat', 'Bread', 'Hummus'], 
        chefId: chef1._id,  
        restaurantId: "6773ef344b0b93497bd9f972",  
      });
      await dish2.save();
    

    const restaurant1 = new Restaurant({
      name: 'Sample Restaurant',
      chefId: chef1._id,
      dishesId: [dish1._id,dish2._id],
      image: 'restaurant_image_url',
    });
    await restaurant1.save();
    const chef2 = new Chef({
        name: 'Chef11',
        restaurantIds: [],
        image: 'chef11_image_url',
      });
      await chef2.save();
  
      const dish3 = new Dish({
          name: 'Dish3',
          iconMeaning: 'vegan',
          image: 'dish3_image_url',
          price: 100,
          ingredients: ['Tomato', 'Cheese'], 
          chefId: chef2._id,  
          restaurantId: "6773eec8dacbccf956211609",  
        });
        await dish3.save();
        const dish4 = new Dish({
          name: 'Dish4',
          iconMeaning: 'spicy',
          image: 'dish4_image_url',
          price: 94,
          ingredients: ['Meat', 'Bread', 'Hummus'], 
          chefId: chef2._id,  
          restaurantId: "6773ef344b0b93497bd9f972",  
        });
        await dish4.save();
      
  
      const restaurant3 = new Restaurant({
        name: 'Restaurant3',
        chefId: chef2._id,
        dishesId: [dish3._id,dish4._id],
        image: 'restaurant11_image_url',
      });
      await restaurant3.save();

      const restaurant4 = new Restaurant({
        name: 'Restaurant4',
        chefId: chef2._id,
        dishesId: [dish3._id,dish4._id],
        image: 'restaurant_image_url',
      });
      await restaurant4.save();

    console.log('Sample data created successfully');
  } catch (err) {
    console.error('Error creating sample data:', err);
  }
};