defmodule EtherBayApi.Repo.Migrations.CreateAccounts do
  use Ecto.Migration

  def change do
    create table(:accounts, primary_key: false) do
      add(:id, :binary_id, primary_key: true)
      add(:username, :string)
      add(:password, :string)
      add(:bio, :string)
      add(:account_status, :string)

      timestamps(type: :utc_datetime)
    end

    create(unique_index(:accounts, [:username]))
  end
end
