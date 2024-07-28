import { useState } from "react";
import { ProductService } from "../services/product.service";
import { toast } from "react-toastify";
import { Product } from "../types/product";
import { apparelItems } from "../data";
import { SimilarProductDropzone } from "../components/SimilarProductDropzone/SimilarProductDropzone";
import ProductItem from "../components/ProductItem";

export const MainPage = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  async function findSimilarProducts() {
    if (uploadedFile == null) {
      return;
    }
    try {
      setIsLoading(true);
      const response: any = await ProductService.getSimilarProducts(
        uploadedFile
      );

      if (response["responses"][0].error != null) {
        toast.error("Не знайдено товари, які задовільняли б вашому");
        return;
      }

      const results: any[] =
        response["responses"][0]["productSearchResults"]["results"];

      const products = results
        .filter((r) => r.score > 0.5)
        .map((item) => {
          const product = item["product"];
          const splittedName = product.name.split("/");
          const id: string = splittedName[splittedName.length - 1];

          return apparelItems[id];
        });

      if (products.length == 0) {
        toast.error("Не знайдено товари, які задовільняли б вашому");
        return;
      }

      setSimilarProducts(products);
    } catch (exception) {
      toast.error("Виникла помилка при пошуку подібних товарів");
    } finally {
      setIsLoading(false);
    }
  }

  const onClearFileHandler = () => {
    setSimilarProducts([]);
  };

  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div
        className="flex flex-col  gap-7 items-center justify-center p-3 
        text-white bg-orange-400"
      >
        <span className="text-2xl font-semibold">Find similar product</span>
        <SimilarProductDropzone
          setUploadedFile={setUploadedFile}
          onClearFile={onClearFileHandler}
        />
        <button
          className="w-3/5 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  disabled:bg-slate-100 disabled:text-slate-500"
          onClick={findSimilarProducts}
          disabled={uploadedFile == null || isLoading}
        >
          {isLoading ? "Loading..." : "Find"}
        </button>
      </div>

      <div>
        {similarProducts.length > 0 && (
          <div className="px-5">
            <span className="block text-2xl font-semibold px-4  mb-4">
              Схожі товари
            </span>
            {similarProducts.map((p) => (
              <ProductItem product={p} key={p.id} />
            ))}
            <hr />
          </div>
        )}
        <div className="flex flex-wrap  justify-center">
          {Object.keys(apparelItems).map((key) => (
            <ProductItem product={apparelItems[key]} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};
