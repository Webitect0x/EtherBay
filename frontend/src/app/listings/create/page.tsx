"use client";

import { Dispatch, FormEvent, SetStateAction } from "react";
import FrameCorners from "@/components/templates/frames/frame-corners";
import FormLabel from "@/components/atoms/form-label";
import Button from "@/components/atoms/button";
import CreateListing from "../../../components/pages/listings/create-lisitng";

export interface CreateListingProps {
  handleSubmit: (e: FormEvent) => Promise<void>;
  listingData: listingData;
  setListingData: Dispatch<SetStateAction<listingData>>;
}

const CreateListingPage = CreateListing(
  ({ handleSubmit, listingData, setListingData }: CreateListingProps) => {
    const {
      title,
      price,
      image_url,
      category,
      quantity,
      description,
      listingType,
    } = listingData;

    return (
      <FrameCorners classNames="h-[85vh] mx-auto relative w-[100%] mt-5 mr-1">
        <div className="p-10">
          <h1 className="text-xl font-bold">Create A New Listing</h1>
          <form onSubmit={handleSubmit}>
            <FormLabel
              title="Title"
              value={title}
              onChange={(e) =>
                setListingData({ ...listingData, title: e.target.value })
              }
            />
            <FormLabel
              title="Price"
              value={price.toString()}
              onChange={(e) =>
                setListingData({
                  ...listingData,
                  price: parseFloat(e.target.value),
                })
              }
            />
            <input
              type="file"
              required
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  setListingData({ ...listingData, image_url: files[0] });
                }
              }}
            />
            <FormLabel
              title="Category"
              value={category}
              onChange={(e) =>
                setListingData({ ...listingData, category: e.target.value })
              }
            />
            <FormLabel
              title="Description"
              value={description}
              onChange={(e) =>
                setListingData({ ...listingData, description: e.target.value })
              }
            />
            <FormLabel
              title="Quantity"
              value={quantity.toString()}
              onChange={(e) =>
                setListingData({
                  ...listingData,
                  quantity: parseFloat(e.target.value),
                })
              }
            />
            <FormLabel
              title="Listing Type"
              value={listingType}
              onChange={(e) =>
                setListingData({ ...listingData, listingType: e.target.value })
              }
            />
            <Button size="m" text="Create" />
          </form>
        </div>
      </FrameCorners>
    );
  },
);

export default CreateListingPage;
