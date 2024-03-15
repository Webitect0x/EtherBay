defmodule EtherBayApi.Reviews.Review do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "reviews" do
    field(:comment, :string)
    field(:rating, :integer)
    belongs_to(:listing, EtherBayApi.Listings.Listing)

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(review, attrs) do
    review
    |> cast(attrs, [:rating, :comment, :listing_id])
    |> validate_required([:rating, :comment])
  end
end
