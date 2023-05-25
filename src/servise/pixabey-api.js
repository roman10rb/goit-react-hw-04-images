const API_KEY = '34959155-6ed4bba7454a69ef49b378772';


export default function ImageFetch(name, page) {
  return   fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${name}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
                   .then(response => {
                       if (response.ok) {
                       return response.json();
                       }
                       return Promise.reject(
                           new Error(`Something go wrong`),
                       );
                   })
}
