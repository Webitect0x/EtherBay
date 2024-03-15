defmodule EtherBayApi.ListingsTest do
  use EtherBayApi.DataCase

  alias EtherBayApi.Listings

  describe "listings" do
    alias EtherBayApi.Listings.Listing

    import EtherBayApi.ListingsFixtures

    @invalid_attrs %{name: nil, description: nil, price: nil, quantity: nil, listing_type: nil}

    test "list_listings/0 returns all listings" do
      listing = listing_fixture()
      assert Listings.list_listings() == [listing]
    end

    test "get_listing!/1 returns the listing with given id" do
      listing = listing_fixture()
      assert Listings.get_listing!(listing.id) == listing
    end

    test "create_listing/1 with valid data creates a listing" do
      valid_attrs = %{name: "some name", description: "some description", price: 120.5, quantity: 42, listing_type: "some listing_type"}

      assert {:ok, %Listing{} = listing} = Listings.create_listing(valid_attrs)
      assert listing.name == "some name"
      assert listing.description == "some description"
      assert listing.price == 120.5
      assert listing.quantity == 42
      assert listing.listing_type == "some listing_type"
    end

    test "create_listing/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Listings.create_listing(@invalid_attrs)
    end

    test "update_listing/2 with valid data updates the listing" do
      listing = listing_fixture()
      update_attrs = %{name: "some updated name", description: "some updated description", price: 456.7, quantity: 43, listing_type: "some updated listing_type"}

      assert {:ok, %Listing{} = listing} = Listings.update_listing(listing, update_attrs)
      assert listing.name == "some updated name"
      assert listing.description == "some updated description"
      assert listing.price == 456.7
      assert listing.quantity == 43
      assert listing.listing_type == "some updated listing_type"
    end

    test "update_listing/2 with invalid data returns error changeset" do
      listing = listing_fixture()
      assert {:error, %Ecto.Changeset{}} = Listings.update_listing(listing, @invalid_attrs)
      assert listing == Listings.get_listing!(listing.id)
    end

    test "delete_listing/1 deletes the listing" do
      listing = listing_fixture()
      assert {:ok, %Listing{}} = Listings.delete_listing(listing)
      assert_raise Ecto.NoResultsError, fn -> Listings.get_listing!(listing.id) end
    end

    test "change_listing/1 returns a listing changeset" do
      listing = listing_fixture()
      assert %Ecto.Changeset{} = Listings.change_listing(listing)
    end
  end
end
