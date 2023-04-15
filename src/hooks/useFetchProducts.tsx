import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  averageRating: number;
  createdAt: Date;
};

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const username = "ck_cbb0916f48c95cb8b699d995d56a19c4c0b8421a";
      const password = "cs_cec97993f227407663733b4bc5687f1440452067";

      const response = await fetch(
        "https://tues-store.dev.uxperience.eu/wp-json/wc/v3/products",
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok || response.status === 401) return;

      const data = await response.json();

      const fetchedProducts: Product[] = data.map((product: any) => ({
        id: product.id,
        name: product.name,
        imageUrl: product.images[0].src,
        price: +product.price,
        averageRating: +(Math.random() * 5).toFixed(1),
        createdAt: new Date(product.date_created),
      }));

      const sortProductsByRating = fetchedProducts.sort(
        (a, b) => b.averageRating - a.averageRating
      );

      setProducts(sortProductsByRating);

      setIsLoading(false);

      //   {
      //     "id": 41,
      //     "name": "WordPress Pennant",
      //     "slug": "wordpress-pennant",
      //     "permalink": "https://tues-store.dev.uxperience.eu/index.php/produkt/wordpress-pennant/",
      //     "date_created": "2022-12-08T09:37:42",
      //     "date_created_gmt": "2022-12-08T07:37:42",
      //     "date_modified": "2022-12-08T09:38:12",
      //     "date_modified_gmt": "2022-12-08T07:38:12",
      //     "type": "external",
      //     "status": "publish",
      //     "featured": false,
      //     "catalog_visibility": "visible",
      //     "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      //     "short_description": "<p>This is an external product.</p>\n",
      //     "sku": "wp-pennant",
      //     "price": "11.05",
      //     "regular_price": "11.05",
      //     "sale_price": "",
      //     "date_on_sale_from": null,
      //     "date_on_sale_from_gmt": null,
      //     "date_on_sale_to": null,
      //     "date_on_sale_to_gmt": null,
      //     "on_sale": false,
      //     "purchasable": false,
      //     "total_sales": 0,
      //     "virtual": false,
      //     "downloadable": false,
      //     "downloads": [],
      //     "download_limit": 0,
      //     "download_expiry": 0,
      //     "external_url": "https://mercantile.wordpress.org/product/wordpress-pennant/",
      //     "button_text": "Buy on the WordPress swag store!",
      //     "tax_status": "taxable",
      //     "tax_class": "",
      //     "manage_stock": false,
      //     "stock_quantity": null,
      //     "backorders": "no",
      //     "backorders_allowed": false,
      //     "backordered": false,
      //     "low_stock_amount": null,
      //     "sold_individually": false,
      //     "weight": "",
      //     "dimensions": {
      //         "length": "",
      //         "width": "",
      //         "height": ""
      //     },
      //     "shipping_required": true,
      //     "shipping_taxable": true,
      //     "shipping_class": "",
      //     "shipping_class_id": 0,
      //     "reviews_allowed": true,
      //     "average_rating": "0.00",
      //     "rating_count": 0,
      //     "upsell_ids": [],
      //     "cross_sell_ids": [],
      //     "parent_id": 0,
      //     "purchase_note": "",
      //     "categories": [
      //         {
      //             "id": 21,
      //             "name": "Decor",
      //             "slug": "decor"
      //         }
      //     ],
      //     "tags": [],
      //     "images": [
      //         {
      //             "id": 64,
      //             "date_created": "2022-12-08T11:38:11",
      //             "date_created_gmt": "2022-12-08T07:38:11",
      //             "date_modified": "2022-12-08T11:38:11",
      //             "date_modified_gmt": "2022-12-08T07:38:11",
      //             "src": "https://tues-store.dev.uxperience.eu/wp-content/uploads/2022/12/pennant-1.jpg",
      //             "name": "pennant-1.jpg",
      //             "alt": ""
      //         }
      //     ],
      //     "attributes": [],
      //     "default_attributes": [],
      //     "variations": [],
      //     "grouped_products": [],
      //     "menu_order": 0,
      //     "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi>11,05&nbsp;<span class=\"woocommerce-Price-currencySymbol\">&#1083;&#1074;.</span></bdi></span>",
      //     "related_ids": [],
      //     "meta_data": [
      //         {
      //             "id": 733,
      //             "key": "_wpcom_is_markdown",
      //             "value": "1"
      //         }
      //     ],
      //     "stock_status": "instock",
      //     "has_options": false,
      //     "_links": {
      //         "self": [
      //             {
      //                 "href": "https://tues-store.dev.uxperience.eu/index.php/wp-json/wc/v3/products/41"
      //             }
      //         ],
      //         "collection": [
      //             {
      //                 "href": "https://tues-store.dev.uxperience.eu/index.php/wp-json/wc/v3/products"
      //             }
      //         ]
      //     }
      // },
    };

    fetchData();
  }, []);

  return [products, isLoading, setProducts] as const;
};

export default useFetchProducts;
