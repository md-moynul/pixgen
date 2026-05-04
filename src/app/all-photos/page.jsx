import PhotoCard from '@/components/PhotoCard';
import { getPhoto } from '@/lib/data';
const AllPhotos = async () => {
    const allPhotos = await getPhoto()
    return (
        <div className='container mx-auto py-5 '>
            <h2 className='text-3xl font-bold'>Top Generations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-5">
                {allPhotos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}

            </div>
        </div>
    );
};

export default AllPhotos;