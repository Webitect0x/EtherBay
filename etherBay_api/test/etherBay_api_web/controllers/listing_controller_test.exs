defmodule EtherBayApiWeb.ListingControllerTest do
  use EtherBayApiWeb.ConnCase

  import EtherBayApi.ListingsFixtures

  alias EtherBayApi.Listings.Listing

  @create_attrs %{
    name: "some name",
    description: "some description",
    price: 120.5,
    quantity: 42,
    listing_type: "some listing_type"
  }
  @update_attrs %{
    name: "some updated name",
    description: "some updated description",
    price: 456.7,
    quantity: 43,
    listing_type: "some updated listing_type"
  }
  @invalid_attrs %{name: nil, description: nil, price: nil, quantity: nil, listing_type: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all listings", %{conn: conn} do
      conn = get(conn, ~p"/api/listings")
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create listing" do
    test "renders listing when data is valid", %{conn: conn} do
      conn = post(conn, ~p"/api/listings", listing: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, ~p"/api/listings/#{id}")

      assert %{
               "id" => ^id,
               "description" => "some description",
               "listing_type" => "some listing_type",
               "name" => "some name",
               "price" => 120.5,
               "quantity" => 42
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, ~p"/api/listings", listing: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update listing" do
    setup [:create_listing]

    test "renders listing when data is valid", %{conn: conn, listing: %Listing{id: id} = listing} do
      conn = put(conn, ~p"/api/listings/#{listing}", listing: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, ~p"/api/listings/#{id}")

      assert %{
               "id" => ^id,
               "description" => "some updated description",
               "listing_type" => "some updated listing_type",
               "name" => "some updated name",
               "price" => 456.7,
               "quantity" => 43
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, listing: listing} do
      conn = put(conn, ~p"/api/listings/#{listing}", listing: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete listing" do
    setup [:create_listing]

    test "deletes chosen listing", %{conn: conn, listing: listing} do
      conn = delete(conn, ~p"/api/listings/#{listing}")
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, ~p"/api/listings/#{listing}")
      end
    end
  end

  defp create_listing(_) do
    listing = listing_fixture()
    %{listing: listing}
  end
end
