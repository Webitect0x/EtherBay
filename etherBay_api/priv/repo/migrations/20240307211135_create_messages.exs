defmodule EtherBayApi.Repo.Migrations.CreateMessages do
  use Ecto.Migration

  def change do
    create table(:messages, primary_key: false) do
      add(:id, :binary_id, primary_key: true)
      add(:content, :string)
      add(:channel_id, :string)
      add(:sender_id, references(:accounts, on_delete: :delete_all, type: :binary_id))
      add(:receiver_id, references(:accounts, on_delete: :delete_all, type: :binary_id))

      timestamps(type: :utc_datetime)
    end

    create(index(:messages, [:sender_id]))
    create(index(:messages, [:receiver_id]))
  end
end
