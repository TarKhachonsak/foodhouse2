// eslint-disable-next-line react/prop-types
const RecipeCard = ({ imgSrc, title, description }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden mb-12">
            <img
                src={imgSrc}
                alt={title}
                className="w-[380px] h-[250px] object-cover rounded-b-lg"
            />
            <div className="pt-4">
                <h3 className="text-xl font-bold mb-2 font-body">{title}</h3>
                <p className="text-gray-400 mb-4 font-body">{description}</p>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 font-body">
                    ดูเพิ่มเติม
                </button>
            </div>
        </div>
    )
}

export default RecipeCard