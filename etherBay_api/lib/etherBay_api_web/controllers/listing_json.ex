defmodule EtherBayApiWeb.ListingJSON do
  alias EtherBayApi.Listings.Listing
  alias EtherBayApiWeb.AccountJSON

  @doc """
  Renders a list of listings.
  """
  def index(%{listings: listings}) do
    %{data: for(listing <- listings, do: show_with_vendor(listing))}
  end

  def vendor_listings(%{listings: listings}) do
    %{data: for(listing <- listings, do: data(listing))}
  end

  @doc """
  Renders a single listing.
  """
  def show(%{listing: listing}) do
    %{data: data(listing)}
  end

  def show_with_vendor(%Listing{} = listing) do
    %{
      id: listing.id,
      title: listing.title,
      price: listing.price,
      image_url: listing.image_url,
      category: listing.category,
      quantity: listing.quantity,
      description: listing.description,
      listing_type: listing.listing_type,
      vendor_id: listing.vendor_id,
      vendor: AccountJSON.account_info(%{account: listing.vendor}),
      inserted_at: listing.inserted_at
    }
  end

  def show_with_vendor(%{listing: listing}) do
    %{
      id: listing.id,
      title: listing.title,
      price: listing.price,
      category: listing.category,
      image_url: listing.image_url,
      quantity: listing.quantity,
      description: listing.description,
      listing_type: listing.listing_type,
      vendor_id: listing.vendor_id,
      vendor: AccountJSON.account_info(%{account: listing.vendor}),
      inserted_at: listing.inserted_at
    }
  end

  defp data(%Listing{} = listing) do
    %{
      id: listing.id,
      title: listing.title,
      price: listing.price,
      category: listing.category,
      image_url: listing.image_url,
      quantity: listing.quantity,
      description: listing.description,
      listing_type: listing.listing_type,
      vendor_id: listing.vendor_id
    }
  end
end
