
const BASE_URL: string = import.meta.env.VITE_BASE_URL;

export class ProductService {

   static async getSimilarProducts(file: File) {

      const fullUrl = `${BASE_URL}/find-similar-products`

      const formData = new FormData();

      formData.append('image', file);

      const response = await fetch(fullUrl, {
         method: "post",

         body: formData
      });
      const data = await response.json();
      return data;


   }


}