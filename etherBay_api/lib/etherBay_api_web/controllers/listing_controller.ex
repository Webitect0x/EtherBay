defmodule EtherBayApiWeb.ListingController do
  use EtherBayApiWeb, :controller

  alias EtherBayApi.Listings
  alias EtherBayApi.Listings.Listing

  action_fallback(EtherBayApiWeb.FallbackController)

  def index(conn, _params) do
    listings = Listings.list_listings()
    render(conn, :index, listings: listings)
  end

  def create(conn, %{"listing" => listing_params}) do
    with {:ok, %Listing{} = listing} <-
           Listings.create_listing(listing_params) do
      conn
      |> put_status(:created)
      |> render(:show, listing: listing)
    end
  end

  def show(conn, %{"id" => id}) do
    listing = Listings.get_listing_by_id(id)
    render(conn, :show_with_vendor, listing: listing)
  end

  def get_listings_by_category(conn, %{"category" => category}) do
    listings = Listings.get_listing_by_category_name(category)
    render(conn, :index, listings: listings)
  end

  def update(conn, %{"id" => id, "listing" => listing_params}) do
    listing = Listings.get_listing!(id)

    with {:ok, %Listing{} = listing} <- Listings.update_listing(listing, listing_params) do
      render(conn, :show, listing: listing)
    end
  end

  def delete(conn, %{"id" => id}) do
    listing = Listings.get_listing!(id)

    with {:ok, %Listing{}} <- Listings.delete_listing(listing) do
      send_resp(conn, :no_content, "")
    end
  end
end
