import { getPhoto } from "@/lib/data";
import PhotoCard from "./PhotoCard";


const TopGeneration = async () => {
    const allPhotos = await getPhoto()
    const topGenerationPhotos = allPhotos.slice(0, 8)
    // console.log(topGenerationPhotos);


    return (
        <div className='py-10'>
            <h2 className='text-3xl font-bold'>Top Generations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-5">
                {topGenerationPhotos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}

            </div>
        </div>
    );
};

export default TopGeneration;