defmodule EtherBayApi.ListingsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `EtherBayApi.Listings` context.
  """

  @doc """
  Generate a listing.
  """
  def listing_fixture(attrs \\ %{}) do
    {:ok, listing} =
      attrs
      |> Enum.into(%{
        description: "some description",
        listing_type: "some listing_type",
        name: "some name",
        price: 120.5,
        quantity: 42
      })
      |> EtherBayApi.Listings.create_listing()

    listing
  end
end
