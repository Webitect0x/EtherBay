defmodule EtherBayApi.Listings.Listing do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "listings" do
    field(:title, :string)
    field(:price, :float)
    field(:category, :string)
    field(:image_url, :string)
    field(:quantity, :integer)
    field(:description, :string)
    field(:listing_type, :string)

    belongs_to(:vendor, EtherBayApi.Accounts.Account)

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(listing, attrs) do
    listing
    |> cast(attrs, [
      :title,
      :price,
      :category,
      :image_url,
      :quantity,
      :description,
      :listing_type,
      :vendor_id
    ])
    |> validate_required([
      :title,
      :price,
      :category,
      :image_url,
      :quantity,
      :description,
      :listing_type,
      :vendor_id
    ])
  end
end
