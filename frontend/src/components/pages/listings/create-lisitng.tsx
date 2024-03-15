import { useState } from "react";
import { FormEvent } from "react";
import { CreateListingProps } from "../../../app/listings/create/page";
import { createListing } from "@/api/create-listing";
import { currentUser } from "@/api/current-user";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ErrorToast from "@/components/atoms/error-toast";

const CreateListing = <T extends {}>(Component: any) => {
  return (props: Omit<T, keyof CreateListingProps>) => {
    const { id } = currentUser();
    const [listingData, setListingData] = useState({
      title: "",
      price: 0,
      image_url: null,
      category: "",
      quantity: 0,
      description: "",
      listingType: "",
    });
    const router = useRouter();

    if (!id) {
      toast(
        <ErrorToast message="You must be logged in to create a listing." />,
      );
      router.push("/login");

      return;
    }

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();

      if (!listingData.image_url) return;

      try {
        await createListing(listingData, id);
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <Component
        {...props}
        handleSubmit={handleSubmit}
        listingData={listingData}
        setListingData={setListingData}
      />
    );
  };
};

export default CreateListing;
