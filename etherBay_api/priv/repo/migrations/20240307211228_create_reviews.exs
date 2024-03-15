defmodule EtherBayApi.Repo.Migrations.CreateReviews do
  use Ecto.Migration

  def change do
    create table(:reviews, primary_key: false) do
      add(:id, :binary_id, primary_key: true)
      add(:rating, :integer)
      add(:comment, :string)
      add(:listing_id, references(:listings, on_delete: :delete_all, type: :binary_id))
      add(:user_id, references(:accounts, on_delete: :nothing, type: :binary_id))

      timestamps(type: :utc_datetime)
    end

    create(index(:reviews, [:listing_id]))
    create(index(:reviews, [:user_id]))
  end
end
