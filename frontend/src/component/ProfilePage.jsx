import { useState } from "react";

const ProfilePage = () => {
  const [recipeData, setRecipeData] = useState({
    category: "",
    picture: null,
    name: "",
    description: "",
    time: "",
    ingredients: "",
    howToCook: "",
    morePhotos: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipeData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20">
            <img
              src="path_to_profile_image" // Replace with actual path or use a URL
              alt="Profile"
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">My Profile</h2>
            <p className="text-gray-600">I Am NongGAM</p>
            <p className="text-gray-400">@GAM25436</p>
            <p className="text-gray-600">เข้าร่วมเมื่อ 23/05/2014</p>
            <p className="text-yellow-500">Ratings Received ⭐⭐⭐⭐ (4.03)</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-bold mb-4">Create My Recipes !</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Choose Category</label>
              <select
                name="category"
                value={recipeData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Category</option>
                <option value="dessert">Dessert</option>
                <option value="main-course">Main Course</option>
                <option value="appetizer">Appetizer</option>
                {/* Add more categories as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Picture</label>
              <input
                type="file"
                name="picture"
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={recipeData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={recipeData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Time</label>
              <input
                type="time"
                name="time"
                value={recipeData.time}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Ingredients</label>
              <textarea
                name="ingredients"
                value={recipeData.ingredients}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">How to Cook</label>
              <textarea
                name="howToCook"
                value={recipeData.howToCook}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">More Photos</label>
              <input
                type="file"
                name="morePhotos"
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-white font-bold py-2 px-4 rounded"
            >
              Create now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;