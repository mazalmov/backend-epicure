import Chef from '../api/chef/chef.schema';
import Dish from '../api/dish/dish.schema';
import Restaurant from '../api/restaurant/restaurant.schema';

export const createSampleData = async () => {
  try {
    const chef1 = new Chef({
      name: 'Yossi shitrite',
      restaurantIds: [],
      image: 'chef1_image_url',
      info: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    });
    await chef1.save();

    const dish1 = new Dish({
        name: 'Onza',
        iconMeaning: 'vegan',
        image: 'dish1_image_url',
        price: 100,
        ingredients: ["Polenta fingers", "veal cheek", "magic chili cured lemon cream", "yellow laksa"], 
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

      const dish3 = new Dish({
        name: 'Mashya',
        iconMeaning: 'vegan',
        image: 'dish3_image_url',
        price: 130,
        ingredients: ["Basil dough", "cashew 'butter'", "demi-glace", "bison & radish"], 
        chefId: chef1._id,  
        restaurantId: "6773ef344b0b93497bd9f972",  
      });
      await dish3.save();
    
    

    const restaurant1 = new Restaurant({
      name: 'claro',
      chefId: chef1._id,
      dishesId: [dish1._id,dish2._id],
      chefName: "Ran Shmueli",
      image: 'restaurant_image_url',
      rank:"3",
    });
    await restaurant1.save();

      const restaurant2 = new Restaurant({
        name: 'Lumina',
        chefId: chef1._id,
        dishesId: [dish3._id,dish2._id],
        chefName: "Yossi shitrite",
        image: 'restaurant11_image_url',
        rank:"4",
      });
      await restaurant2.save();

      const restaurant3 = new Restaurant({
        name: 'tiger-lily',
        chefId: chef1._id,
        dishesId: [dish3._id,dish1._id],
        chefName: "Yarin Green",
        image: 'restaurant_image_url',
        rank: "5",
      });
      await restaurant3.save();

    console.log('Sample data created successfully');
  } catch (err) {
    console.error('Error creating sample data:', err);
  }
};  