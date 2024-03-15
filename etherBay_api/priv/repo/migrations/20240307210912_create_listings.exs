defmodule EtherBayApi.Repo.Migrations.CreateListings do
  use Ecto.Migration

  def change do
    create table(:listings, primary_key: false) do
      add(:id, :binary_id, primary_key: true)
      add(:title, :string)
      add(:price, :float)
      add(:image_url, :string)
      add(:category, :string)
      add(:quantity, :integer)
      add(:description, :string)
      add(:listing_type, :string)
      add(:vendor_id, references(:accounts, on_delete: :delete_all, type: :binary_id))

      timestamps(type: :utc_datetime)
    end

    create(index(:listings, [:vendor_id, :title, :category]))
  end
end
