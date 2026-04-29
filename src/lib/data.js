export const getPhoto = async() =>{
    const res = await fetch('https://pixgen-blush.vercel.app/data.json')
    const data = await res.json();
    return data;
}