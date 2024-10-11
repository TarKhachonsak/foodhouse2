// eslint-disable-next-line react/prop-types
const Card2 = ({ src, alt, title }) => {
    return (
        <div className="w-[250px] h-[350px] bg-white rounded-lg shadow-lg overflow-hidden ml-1 mr-1">
            <div className="relative">
                <img src={src} alt={alt} className="w-full h-[200px] object-cover" />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent w-full h-full opacity-75"></div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[170px] font-body">
                    {title}
                </h3>
                <p className='text-gray-400'>Nongtra ict</p>
                <div className="mt-4">
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600 transition duration-300 font-body">
                        ดูเพิ่มเติม
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card2