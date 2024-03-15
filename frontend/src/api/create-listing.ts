import axios from "axios";
import { BASEURL } from "@/constants/constants";
import { uploadManager } from "@/utils/upload-manager";
import Cookies from "js-cookie";

export const createListing = async (
  newListingData: listingData,
  userId: string,
) => {
  const {
    title,
    price,
    image_url,
    category,
    quantity,
    description,
    listingType,
  } = newListingData;

  const { fileUrl } = await uploadManager.upload({
    data: image_url,
  });

  await axios({
    method: "POST",
    url: `${BASEURL}/listing/create`,
    headers: {
      Authorization: `Bearer ${Cookies.get("jwt-token")}`,
    },
    withCredentials: true,
    data: {
      listing: {
        title: title,
        price: price,
        image_url: fileUrl,
        category: category,
        quantity: quantity,
        description: description,
        listing_type: listingType,
        vendor_id: userId,
      },
    },
  });
};
